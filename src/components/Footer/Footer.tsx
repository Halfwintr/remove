import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import OpportunityIllustration from "../../../public/images/opportunity-image.png";
import ThreatIllustration from "../../../public/images/threat-image.png";
import Link from "next/link";
export const Footer = (props: any) => {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <>
      <div className="divide-y-[3px] h-5 bg-[#C09D44]"></div>
      <div className={styles._footer}>
        <div className={styles._background}>
          <div className={styles._container}>
            <div>
              <h5 className={styles._title}>
                Read to <span className={styles._subtitle}>set sail</span>
              </h5>
              <p className={styles._content}>
                {`You've`} got what it takes to steer this ship to success.
                <br /> {`Let's`}
                discuss how we can clear the way.
              </p>
            </div>
            <div className={styles._columns}>
              <div className={styles._image_container}>
                <Image
                  src={OpportunityIllustration}
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
                  src={ThreatIllustration}
                  alt="main page illustration"
                  width={80}
                  height={80}
                  className={styles._image}
                />
                <div className={styles._title_container}>
                  <h6 className={styles._title_column}>Threat:</h6>
                  <span>Talent gaps in our team.</span>
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
          <p className="text-white w-full flex justify-center mb-[60px] italic text-xs absolute bottom-0">
            © {getYear()} Remove by Mass Productive{" "}
            <Link href="/sitemap">
              <span className="text-[#C09D44] ml-5">Site Map</span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
