"use client";

import Link from "next/link";

const SignInCard = () => {
  return (
    <div className="flex justify-center">
      <div className="card w-full max-w-md bg-base-100 font-bold shadow-xl">
        <div className="card-body">
          <h2 className="card-title">You are not signed in!</h2>
          <Link href="/account/login" className="btn-primary btn self-end">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInCard;
