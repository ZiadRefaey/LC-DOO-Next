import DashboardCard from "@/components/admin/layout/dashboard/DashboardCard";
import { DatePickerWithRange } from "@/components/admin/layout/DatePicker";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-start gap-2 md:flex-row md:items-center justify-between">
        <h1 className="text-preset-2">Dashboard</h1>
        <DatePickerWithRange className="self-end" />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1 md:gap-2 2xl:gap-3">
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </section>
    </>
  );
}
