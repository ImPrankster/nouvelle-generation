"use client";

const AskAi = () => {
  return (
    <div className="rounded-box mb-4 space-y-4 border border-base-300 bg-primary p-4 text-primary-content">
      <div className="ml-4 text-xl font-medium">Ask AI</div>
      <form onSubmit={() => {}} className="form-control w-full space-y-4">
        <textarea
          className="textarea-ghost textarea w-full text-xl font-bold"
          placeholder="Cilck here to ask AI"
        ></textarea>
        <button className="btn-secondary btn self-end" type="submit">
          Tell me!
        </button>
      </form>
    </div>
  );
};

export default AskAi;
