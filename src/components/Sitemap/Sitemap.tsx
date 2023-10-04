import Link from "next/link";
import React from "react";

export const Sitemap = (props: any) => {
  const getYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <div className="container mx-auto text-xs font-normal italic text-center mt-16 mb-80">
        <p className="text-[#212126]">
          © {getYear()} Remove by Mass Productive{" "}
          <Link href="/">
            <span className="text-[#B74E31] ml-5">Site Map</span>
          </Link>
        </p>
      </div>
    </>
  );
};
