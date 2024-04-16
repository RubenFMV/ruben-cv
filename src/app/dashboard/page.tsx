import { WidgetItem } from "@/components";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  redirect("/dashboard/cv");
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* TODO: src/components <WidgetItem /> */}
      {/* <WidgetItem></WidgetItem> */}
      {/* TODO: Fin <WidgetItem /> */}
    </div>
  );
}
