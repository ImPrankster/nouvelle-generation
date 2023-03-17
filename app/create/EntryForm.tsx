"use client";

import {
  FieldErrors,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue,
} from "react-hook-form";
import { useState } from "react";
import { FormData } from "./page";
import { Session, SupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/utils/types/supabase";
import { CgSpinner } from "react-icons/cg";
import { MdClose } from "react-icons/md";

export function EntryForm({
  handleSubmit,
  register,
  setValue,
  getValues,
  error,
  reset,
  session,
  supabase,
}: {
  handleSubmit: UseFormHandleSubmit<FormData>;
  register: UseFormRegister<FormData>;
  setValue: UseFormSetValue<FormData>;
  getValues: UseFormGetValues<FormData>;
  error: FieldErrors<FormData>;
  reset: UseFormReset<FormData>;
  session: Session;
  supabase: SupabaseClient<Database>;
}) {
  const [tagData, setTagData] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        setSubmitError(null);
        setLoading(true);
        const { error } = await supabase
          .from("entry")
          .insert({ ...data, created_by: session.user.id });
        setLoading(false);
        if (error) {
          setSubmitError(error.message);
          return;
        }
        reset();
      })}
      className="grid grid-cols-1"
    >
      <div className="mx-4">
        <label className="label font-bold">Name</label>
        <input
          className="input-bordered input w-full"
          type={"text"}
          {...register("name", {
            required: "You must input a name",
            maxLength: {
              value: 100,
              message: "You exceeded the character limit",
            },
          })}
          placeholder="Product name"
        />
        <p className="text-error">{error.name?.message}</p>
      </div>
      <div className="mx-4">
        <label className="label font-bold">Cover Image Link</label>
        <input
          className="input-bordered input w-full"
          type={"text"}
          {...register("cover_image", {
            maxLength: {
              value: 150,
              message: "Please use a shorter link",
            },
          })}
          placeholder="Provide a cover image link"
        />
        <p className="text-error">{error.cover_image?.message}</p>
      </div>
      <div className="mx-4">
        <label className="label font-bold">Category</label>
        <select
          {...register("category", {
            required: "You must select a category",
          })}
          className="select-bordered select w-full"
        >
          <option value="makeup">Makeup</option>
          <option value="cosmetics">Cosmetics</option>
          <option value="haircare">Haircare</option>
          <option value="perfume">Perfume</option>
          <option value="others">Others</option>
        </select>
      </div>
      {/*Tag module*/}
      <div className="mx-4">
        <label className="label font-bold">Tags</label>
        <div className="mb-2 flex w-full overflow-x-auto">
          {getValues("tags")?.map((tag, index) => (
            <p
              className="badge-secondary badge mr-1"
              key={index}
              onClick={() => {
                const tags = getValues("tags");
                tags &&
                  setValue(
                    "tags",
                    tags.filter((t, i) => i !== index)
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
              const tags = getValues("tags");
              if (tagData != null && tagData !== "") {
                tags && setValue("tags", [...tags, tagData]);
                !tags && setValue("tags", [tagData]);
              }
              setTagData(null);
            }}
            type="button"
          >
            Add
          </button>
        </div>
      </div>
      {/*End of tag module*/}
      <div className="mx-4">
        <label className="label font-bold">Description</label>
        <textarea
          {...register("description", {
            maxLength: {
              value: 300,
              message: "You exceeded the character limit",
            },
          })}
          className="textarea-bordered textarea w-full"
          placeholder="Character limit: 300"
        />
      </div>
      <div className="mx-4">
        <label className="label font-bold">Content</label>
        <textarea
          {...register("content")}
          className="textarea-bordered textarea w-full"
          placeholder="Use markdown syntax"
          rows={10}
        />
      </div>
      <button
        className="btn-primary btn-circle btn fixed right-4 bottom-4 w-32"
        type="submit"
        disabled={loading}
      >
        {loading ? (
          <div>
            <CgSpinner className="animate-spin text-2xl" />
          </div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
}
