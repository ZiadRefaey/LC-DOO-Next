import { FiDollarSign } from "react-icons/fi";

export default function DashboardCard() {
  return (
    <div className="w-full rounded-xl border-border border shadow-md py-5 px-5 flex items-start justify-between">
      <div className="flex flex-col items-start justify-start gap-1 h-full">
        <label className="text-preset-4" htmlFor="value">
          Total Revenues
        </label>
        <strong className="text-preset-1 xl:text-preset-2 2xl:text-preset-1">
          $24,512.10
        </strong>
        <p className="text-preset-5 text-primary-text-soft">
          24% ^ from last month
        </p>
      </div>
      <FiDollarSign className="text-success text-preset-2" />
    </div>
  );
}
