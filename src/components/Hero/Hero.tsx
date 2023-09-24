"use client";
import React from "react";
import Image from "next/image";
import Ilustration from "../../../public/images/main-illustration.png";
import { Doubt } from "../Doubt";

import styles from "./styles.module.css";

export const Hero = (props: any) => {
  return (
    <>
      <div className={props.mirror ? styles._bg_white : styles._bg_black}>
        <div className="container mx-auto">
          <div
            className={props.revert ? styles._grid_right : styles._grid_left}
          >
            <div className={props.revert ? styles._no_flex : styles._no_flex}>
              {props.revert ? (
                <>
                  <h1 className={styles._title_left}>
                    Steer Clear <br />{" "}
                    <span className="text-black">of Obstacles</span>
                  </h1>
                  <p className={styles._subtitle_left}>
                    Theres no time to slow down. Your customers, teammates, and
                    <br />
                    stakeholders are counting on you!
                  </p>
                </>
              ) : (
                <>
                  <h1 className={styles._title_right}>
                    Your Project <br />{" "}
                    <span className="text-white text-[30px]">
                      Is Full Steam
                    </span>{" "}
                    <br />{" "}
                    <span className="text-white text-[30px]">Ahead!</span>
                  </h1>
                  <p className={styles._subtitle_right}>
                    If you lead a product team, no doubt youve already charted
                    your projects next course. Lets make sure we have smooth
                    sailing to our destination!
                  </p>
                </>
              )}
            </div>
            <div>
              <Image
                src={Ilustration}
                layout="responsive"
                objectFit="cover"
                objectPosition="center"
                alt="main page illustration"
                className={
                  props.revert
                    ? styles._main_image
                    : styles._main_image_animation
                }
                // onLoadingComplete={(image) => image.classList.add("opacity-0")}
              />
            </div>
          </div>
          <Doubt />
        </div>
      </div>
      <div className={props.revert ? "" : styles._divider}></div>
      <div className="divide-y-[3px] h-5 bg-[#C09D44]"></div>
    </>
  );
};
