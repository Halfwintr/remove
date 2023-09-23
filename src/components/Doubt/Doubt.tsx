import React from "react";
import Image from "next/image";
import Ilustration from "../../../public/images/doubt-illustation.png";

import styles from "./styles.module.css";

export const Doubt = (props: any) => {
  return (
    <>
      <h2 className={styles._title}>Where are you headed?</h2>
      <div className={styles._grid}>
        <div className={styles._grid_column}>
          <Image src={Ilustration} alt="main page illustration" />
          <h3 className={styles._column_title}>A New Destination</h3>
          <p className={styles._column_subtitle}>
            We want to <b>launch a new feature</b> <br />
            for our product!
          </p>
        </div>
        <div className={styles._grid_column}>
          <Image src={Ilustration} alt="main page illustration" />
          <h3 className={styles._column_title}>An Improved Destination</h3>
          <p className={styles._column_subtitle}>
            We want users to enjoy our
            <br /> <b>product experience</b> more.
          </p>
        </div>
        <div className={styles._grid_column}>
          <Image src={Ilustration} alt="main page illustration" />
          <h3 className={styles._column_title}>A Popular Destination</h3>
          <p className={styles._column_subtitle}>
            We want <b>more people to know</b> <br /> about our product!
          </p>
        </div>
      </div>
      <p className={styles._note}>
        ↓↓ Cant decide? Keep scrolling—well plot the course together! ↓↓
      </p>
    </>
  );
};
