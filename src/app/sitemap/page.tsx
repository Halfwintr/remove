import Link from "next/link";
import CompanyBrand from "../../../public/images/remove-brand-revert.svg";
import styles from "./styles.module.css";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="container mx-auto mt-16 flex flex-col items-center justify-center px-80 mb-20">
        <Link href="/">
          <Image
            src={CompanyBrand}
            alt="company brand image"
            className="mb-16"
          />
        </Link>
        <div>
          <h1 className="font-black text-[64px]">Site Map</h1>
        </div>
        <div className="mt-[50px]">
          <nav className="flex flex-col items-center">
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
            <Link href="#" className={styles._navigation_links_sub}>
              Case Studies
            </Link>
            <Link
              href="#"
              className="text-[#C09D44] text-xl font-semibold mb-5"
            >
              <p className="transition-colors duration-300 ease-in-out hover:text-black">
                Product Success: Modern Hill
              </p>
            </Link>
            <Link
              href="#"
              className="text-[#C09D44] text-xl font-semibold mb-[60px]"
            >
              <p className="transition-colors duration-300 ease-in-out  hover:text-black">
                Missed Opportunity: Blockbuster
              </p>
            </Link>
            <Link href="#" className={styles._navigation_links_sub}>
              Contact
            </Link>
            <Link href="#" className="text-[#C09D44] text-xl font-semibold">
              <p className="transition-colors duration-300 ease-in-out  hover:text-black">
                Privacy Policy
              </p>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
