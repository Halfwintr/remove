"use client";

import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import Ilustration from "../../../public/images/main-illustration.png";

export const Support = (props: any) => {
  return (
    <>
      <div className={styles._support}>
        <div className={styles._container}>
          <div className={styles._grid}>
            <div className={styles._flex}>
              <h3 className={styles._title}>
                You Deserve <br />
              </h3>
              <span className={styles._subtitle}>Some Support!</span>
              <p className={styles._content}>
                Theres no need to navigate these waters without a crew. We
                <br /> have decades of experience to focus on the details so you
                can
                <br /> deliver on the big picture.
              </p>
            </div>
            <div>
              <Image src={Ilustration} alt="main page illustration" />
            </div>
          </div>
          <div className="sm:p-10 p-2">
            <div className={styles._grid_columns}>
              <div className={styles._grid_columns_content}>
                <p className="sm:text-left text-center mb-7 sm:mb-0">
                  Could your project <br /> use help in any of <br /> these
                  areas?
                </p>
              </div>
              <div className={styles._grid_columns_content}>
                <Image
                  src={Ilustration}
                  alt="main page illustration"
                  width={80}
                  height={80}
                />
                <div>
                  <p className={styles._grid_columns_title}>Alignment</p>
                  <span className={styles._grid_columns_subtitle}>
                    Combining business goals,
                    <br /> consumer feedback, and
                    <br /> technical requirements into
                    <br /> action.
                  </span>
                </div>
              </div>
              <div className={styles._grid_columns_content}>
                <Image
                  src={Ilustration}
                  alt="main page illustration"
                  width={80}
                  height={80}
                />
                <div>
                  <p className={styles._grid_columns_title}>Alignment</p>
                  <span className={styles._grid_columns_subtitle}>
                    Combining business goals,
                    <br /> consumer feedback, and
                    <br /> technical requirements into
                    <br /> action.
                  </span>
                </div>
              </div>
              <div className={styles._grid_columns_content}>
                <Image
                  src={Ilustration}
                  alt="main page illustration"
                  width={80}
                  height={80}
                />
                <div>
                  <p className={styles._grid_columns_title}>Alignment</p>
                  <span className={styles._grid_columns_subtitle}>
                    Combining business goals,
                    <br /> consumer feedback, and
                    <br /> technical requirements into
                    <br /> action.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divide-y-[3px] h-5 bg-[#C09D44]"></div>
    </>
  );
};
