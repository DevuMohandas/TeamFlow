import React from "react";
import  { Sider } from "@/components/molecules/sider/sider";
import { TopBar } from "@/components/molecules/topBar/topBar";

export function CustomLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sider
            title="TeamFlow"
            options={[
              { option: "Dashboard", href: "/" },
              { option: "Projects", href: "/projects" },
              { option: "Tasks", href: "/tasks" },
              { option: "Team", href: "/team" },
            ]}
        />
        <div className="flex flex-col flex-1">
            <TopBar />
            <main className="flex-1 overflow-auto p-4">{children}</main>
        </div>
    </div>
  );
}