import React from "react";
import Image from "next/image";
import Link from "next/link";
import TeamImage from "../../../public/images/team-image.png";

import styles from "./styles.module.css";

export const Team = (props: any) => {
  return (
    <>
      <div className={styles._container}>
        <div className={styles._grid}>
          <div>
            <Image
              src={TeamImage}
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              alt="main page with team image"
            />
          </div>
          <div className={styles._flex}>
            <h3 className={styles._title}>
              Our Expertise <br />
              <span className={styles._subtitle}>Is Now Yours</span>
            </h3>
            <p className="mt-5">
              Robert Trahan and Hiromi Matsumoto are partners with
              <br /> decades of experience leading successful product teams.
              Their <br /> portfolio includes e-commerce websites, mobile apps,
              <br />
              education tools, podcasts, museum installations, and business
              <br />
              applications.
            </p>
            <div className={styles._button_container}>
              <button className={styles._button}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
                Contact US
              </button>
              <span className={styles._link}>
                Have specific questions?
                <Link href="#" className={styles._sub_link}>
                  Check out our FAQs.
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles._divider}></div>
    </>
  );
};
