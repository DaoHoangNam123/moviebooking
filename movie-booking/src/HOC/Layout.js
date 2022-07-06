import React from "react";
import FooterTheme from "../components/FooterTheme/FooterTheme";
import HeaderTheme from "../components/HeaderTheme/HeaderTheme";

export default function Layout({ Component }) {
  return (
    <div className="flex min-h-screen flex-col">
      <HeaderTheme />
      <div className="flex-grow">
        <Component />
      </div>
      <FooterTheme />
    </div>
  );
}
