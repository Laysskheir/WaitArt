"use client";
import React from "react";

import NavRoutesItem from "./nav-routes-item";

const routes = [
  {
    label: "What",
    id: "what-section",
  },

  {
    label: "Features",
    id: "features-section",
  },
  {
    label: "Pricing",
    id: "pricing-section",
  },
  {
    label: "FAQ",
    id: "faq-section",
  },
];

export default function NavRoutes() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      {routes.map((route) => (
        <NavRoutesItem key={route.id} label={route.label} id={route.id} />
      ))}
    </div>
  );
}
