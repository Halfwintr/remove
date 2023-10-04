"use client";
import React from "react";
import Image from "next/image";
import HeroIllustration from "../../../public/images/main-bg-image.png";
import { Doubt } from "../Doubt";

import styles from "./styles.module.css";

export const Hero = (props: any) => {
  return (
    <>
      <div className={styles._bg_black}>
        <div className="container mx-auto">
          <div
            className={props.revert ? styles._grid_right : styles._grid_left}
          >
            <div className={props.revert ? styles._no_flex : styles._no_flex}>
              <>
                <h1 className={styles._title_right}>
                  Your Project
                  <span className="text-white text-[48px] block">
                    Is Full Steam
                  </span>
                  <span className="text-white text-[48px] block">Ahead!</span>
                </h1>
                <p className={styles._subtitle_right}>
                  If you lead a product team, no doubt youve already charted
                  <br />
                  your projects next course. Lets make sure we have smooth
                  <br />
                  sailing to our destination!
                </p>
              </>
            </div>
          </div>
          <div className="container">
            <h2 className="uppercase">Where are you headed?</h2>
          </div>
        </div>
      </div>
      <div className={props.revert ? "" : styles._divider}></div>
      <div className="divide-y-[3px] h-5 bg-[#C09D44]"></div>
    </>
  );
};
