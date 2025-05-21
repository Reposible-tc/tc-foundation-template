"use client";

import { Button } from "@/components/ui/button";
import { RoundSpinner } from "@/components/ui/spinner";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending && <RoundSpinner size={"sm"} />}
      {pending ? "Sending email..." : "Login"}
    </Button>
  );
}
