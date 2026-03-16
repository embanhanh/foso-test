import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/services");
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="font-heading text-2xl text-muted-foreground uppercase tracking-widest">
        Home (Coming Soon)
      </h1>
    </div>
  );
}
