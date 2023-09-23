"use client";

import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import CompanyBrand from "../../../public/images/remove-brand.svg";

import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

import styles from "./styles.module.css";

export const Header = (props: any) => {
  return (
    <Popover className={styles._popover}>
      <div className={styles._container}>
        <Image src={CompanyBrand} alt="Re:Move Brand" />
        <div className={styles._grow}>
          <nav className={styles._navigation}>
            <Link href="#" className={styles._navigation_links}>
              Getting Projects Moving
            </Link>
            <Link href="#" className={styles._navigation_links}>
              Capabilities
            </Link>
            <Link href="#" className={styles._navigation_links}>
              About Us
            </Link>
            <Link href="#" className={styles._navigation_links}>
              FAQs
            </Link>
            <Link href="#" className={styles._navigation_links}>
              Case Studies
            </Link>
            <Link href="#" className={styles._navigation_links}>
              Contact
            </Link>
          </nav>
        </div>
        <div className={styles._popover_wrapper}>
          <Popover.Button className={styles._popover_btn}>
            <Bars3Icon className={styles._mobile_icon} aria-hidden="true" />
          </Popover.Button>
        </div>
        <Popover.Overlay className={styles._popover_overlay} />
        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className={styles._popover_panel}>
            <div className={styles._mobile_bg}>
              <div className={styles._mobile_container}>
                <div className={styles._mobile_header}>
                  <Image src={CompanyBrand} alt="Re:Move Brand" />
                  <div>
                    <Popover.Button className={styles._popover_btn}>
                      <XMarkIcon
                        className={styles._mobile_icon}
                        aria-hidden="true"
                      />
                    </Popover.Button>
                  </div>
                </div>
                <div className={styles._mobile_wrapper_links}>
                  <nav className={styles._mobile_grid_links}>
                    <Link href="#" className={styles._navigation_links}>
                      Getting Projects Moving
                    </Link>
                    <Link href="#" className={styles._navigation_links}>
                      Capabilities
                    </Link>
                    <Link href="#" className={styles._navigation_links}>
                      About Us
                    </Link>
                    <Link href="#" className={styles._navigation_links}>
                      FAQs
                    </Link>
                    <Link href="#" className={styles._navigation_links}>
                      Case Studies
                    </Link>
                    <Link href="#" className={styles._navigation_links}>
                      Contact
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </div>
    </Popover>
  );
};
