import React from "react";
import AssigneeDetails from "@/components/hpsm/assignee-details";
import OldestOpenTickets from "@/components/hpsm/oldest-open-tickets";
import PageTitle from "@/components/page-title";
import { getHPSMTicketingToolData } from "@/data/api";
import HPSMAreaChart from "@/components/hpsm/hpsm-area-chart";
import DataTableContainer from "@/components/hpsm/data-table-container";
import { getSession } from "@/utils/get-session";

export const metadata = {
  title: "HPSM | Dashboard",
  description: "HPSM Dashboard",
};

export default async function HpsmHomePage() {
  let hpsmData;
  const session = getSession();
  if (session) {
    // Fetch the HPSM data
    hpsmData = await getHPSMTicketingToolData();
  }

  return (
    <div className="flex flex-col w-full h-full gap-2">
      {/* page title */}
      <div className="flex items-center justify-between px-1 -mb-1">
        <PageTitle title="HPSM Ticketing Tool Dashboard" />
        <p className="font-mono text-base">
          Last refreshed :{" "}
          <span className="text-sm text-gray-700">
            {new Date().toLocaleString()}
          </span>
        </p>
      </div>

      {/* chart */}
      <section className="w-full p-1 mx-auto">
        {/* charts */}
        <div className="relative grid items-stretch grid-cols-12 gap-4 mx-auto">
          <div className="order-2 col-span-6 rounded-lg shadow-md border-2 border-slate-200 lg:order-1 lg:col-span-3 h-[420px] ">
            <AssigneeDetails assigneeDetails={hpsmData?.assigneeDetails} />
          </div>
          <div className="rounded-lg order-1 border-2 border-slate-200 shadow-md col-span-full lg:col-span-6 h-[420px] lg:order-2">
            <HPSMAreaChart countsBySubService={hpsmData?.countsBySubService} />
          </div>
          <div className="col-span-6 order-3 rounded-lg lg:col-span-3 h-[420px] shadow-md lg:order-3 border-2 border-slate-200">
            <OldestOpenTickets
              oldestOpenTicketSize10={hpsmData?.oldestOpenTicketSize10}
            />
          </div>
        </div>
      </section>
      {/* tickets detailed table */}
      <DataTableContainer hpsmData={hpsmData} />
    </div>
  );
}
