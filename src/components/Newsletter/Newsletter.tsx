import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

export const Newsletter = (props: any) => {
  return (
    <div className={styles._newsletter}>
      <div className={styles._container}>
        <div className={styles._grid}>
          <div className={styles._content}>
            <h4 className={styles._title}>
              Lets Learn <br />
              <span className={styles._subtitle}>Together!</span>
            </h4>
            <p className={styles._text}>
              Sign up for our newsletter to receive proven tips and tricks from
              some of the most successful product leaders in the industry. Plus,
              get a free tool to supercharge your project meetings.
            </p>
          </div>
          <div className={styles._form}>
            <div className={styles._fields}>
              <input
                type="text"
                id="default-input"
                placeholder="Email"
                className={styles._input}
              />
            </div>
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
                Get the newsletter!
              </button>
              <span className={styles._link}>
                We respect your privacy and are committed to protecting your
                personal data.
                <Link href="#" className={styles._sub_link}>
                  More »
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="divide-y-[3px] h-5 bg-[#C09D44]"></div>
    </div>
  );
};
