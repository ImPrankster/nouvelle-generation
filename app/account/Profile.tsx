"use client";

import { Session, SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useForm } from "react-hook-form";
import {
  profileSchema,
  profileType,
  healthCondition,
  skinColor,
  skinType,
} from "@/utils/schemas/profile";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

const ProfileSetting = ({
  session,
  supabase,
}: {
  session: Session;
  supabase: SupabaseClient;
}) => {
  const [tagData, setTagData] = useState<string | null>(null);
  const [profile, setProfile] = useState<profileType | null>(null);

  useEffect(() => {
    (async () => {
      let { data: profile, error } = await supabase.from("profile").select("*");
      if (error) {
        throw error;
      }
      if (profile && profile.length == 1) {
        setProfile(profileSchema.parse(profile[0]));
      } else if (profile && profile.length > 1) {
        throw new Error("Multiple profiles found for user.");
      }
    })();
  }, [session, supabase]);

  const {
    register,
    setValue,
    getValues,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<profileType>({
    defaultValues: profile || {},
  });

  return (
    <div>
      <h1 className="pt-4 text-2xl font-bold">Profile</h1>
      <form className="grid grid-cols-1 md:grid-cols-2">
        {/* Tag module */}
        <div className="mx-4">
          <label className="label font-bold">Tags</label>
          <div className="mb-2 flex w-full overflow-x-auto">
            {getValues("favourite_tags")?.map((tag, index) => (
              <p
                className="badge-secondary badge mr-1"
                key={index}
                onClick={() => {
                  const favourite_tags = getValues("favourite_tags");
                  favourite_tags &&
                    setValue(
                      "favourite_tags",
                      favourite_tags.filter((t, i) => i !== index)
                    );
                }}
              >
                {tag}
                <MdClose className="ml-1 inline text-lg" />
              </p>
            ))}
          </div>
          <div className="input-group">
            <input
              className="input-bordered input w-full"
              type={"text"}
              onChange={(e) => {
                e.preventDefault();
                setTagData(e.target.value);
              }}
              value={tagData || ""}
              placeholder="Press enter to add tag"
            />
            <button
              className="btn-primary btn-square btn w-28"
              onClick={() => {
                const favourite_tags = getValues("favourite_tags");
                if (tagData != null && tagData !== "") {
                  favourite_tags &&
                    setValue("favourite_tags", [...favourite_tags, tagData]);
                  !favourite_tags && setValue("favourite_tags", [tagData]);
                }
                setTagData(null);
              }}
              type="button"
            >
              Add
            </button>
          </div>
        </div>
        {/* End of tag module */}
      </form>
    </div>
  );
};

export default ProfileSetting;
