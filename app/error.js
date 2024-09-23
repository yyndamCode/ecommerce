"use client";

import Button from "./_components/ui/CustomButton";

export default function Error({ error, reset }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>

      <Button
        className=" bg-primary-9 text-primary-7"
        onClick={reset}
      >
   Back to home page
      </Button>
    </main>
  );
}