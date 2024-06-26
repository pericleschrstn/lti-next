"use client";

import { Button } from "@/components/ui/button";
import { Grid2X2, List } from "lucide-react";
import ModulesSlide from "@/containers/home-page/modules-section/modules-slide/modules-slide";
import React from "react";
import ModulesTable from "./modules-table/modules-table";

export default function ModuleSection() {
  const [showGrid, setShowGrid] = React.useState(true);
  const [icon, setIcon] = React.useState(true);

  function handleToggleComponent() {
    setShowGrid((currentView) => !currentView);
    setIcon((currentIcon) => !currentIcon);
  }

  return (
    <section className="pt-12 bg-gray-100">
      <div className="mx-auto container">
        <div className="grid grid-cols-12">
          <div className="xl:col-start-2 xl:col-span-10 col-span-12 flex-col lg:flex-row flex justify-between lg:items-center mb-6">
            <h2 className="text-3xl text-primary mb-3 lg:mb-0">Módulos deste curso:</h2>
            <Button onClick={handleToggleComponent} className="self-end">
              {icon ? <List className="mr-2 h-4 w-4" /> : <Grid2X2 className="mr-2 h-4 w-4" />}
              Visualização
            </Button>
          </div>
          <div className="xl:col-start-2 col-span-12 xl:col-span-10">
            {showGrid ? <ModulesSlide /> : <ModulesTable />}
          </div>
          <div
            className={`col-span-12 rounded-t-md bg-gradient-to-r from-info to-primary hidden xl:block ${
              showGrid ? "-mt-32" : "-mt-6"
            }`}
            style={{ height: "300px" }}
          ></div>
        </div>
      </div>
      <div
        className={`col-span-12 rounded-t-md bg-gradient-to-r from-info to-primary block xl:hidden ${
          showGrid ? "-mt-32" : "-mt-6"
        }`}
        style={{ height: "300px" }}
      ></div>
    </section>
  );
}
