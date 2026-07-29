import { redirect } from "next/navigation";

export default function AskAIRedirectPage() {
  redirect("/about#ask-ai");
}
