import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import Ilustration from "../../../public/images/main-illustration.png";
export const Footer = (props: any) => {
  return (
    <>
      <div className={styles._footer}>
        <div className={styles._container}>
          <div>
            <h5 className={styles._title}>
              Read to <span className={styles._subtitle}>set sail</span>
            </h5>
            <p className={styles._content}>
              You ve got what it takes to steer this ship to success. Lets
              discuss how we can clear the way.
            </p>
          </div>
          <div className={styles._columns}>
            <div className={styles._image_container}>
              <Image
                src={Ilustration}
                alt="main page illustration"
                width={80}
                height={80}
                className={styles._image}
              />
              <div className={styles._title_container}>
                <h6 className={styles._title_column}>Opportunity:</h6>
                <span>Launch a new product feature!</span>
              </div>
            </div>
            <div className={styles._image_container}>
              <Image
                src={Ilustration}
                alt="main page illustration"
                width={80}
                height={80}
                className={styles._image}
              />
              <div className={styles._title_container}>
                <h6 className={styles._title_column}>Opportunity:</h6>
                <span>Launch a new product feature!</span>
              </div>
            </div>
          </div>
          <div className={styles._form}>
            <input
              type="text"
              id="default-input"
              placeholder="Your name"
              className={styles._input}
            />
            <input
              type="text"
              id="default-input"
              placeholder="Email"
              className={styles._input}
            />
          </div>
          <div className={styles._text_area_container}>
            <textarea
              id="message"
              className={styles._text_area}
              placeholder="Tell us about your project"
            ></textarea>
          </div>
          <div className={styles._button_container}>
            <button className={styles._button}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              Lets get moving!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
