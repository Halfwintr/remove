import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

import React from "react";

import styles from "./styles.module.css";
import Image from "next/image";
import Ilustration from "../../../public/images/main-illustration.png";
import { Carousel } from "../Carousel/Carousel";
import { MDXRemote } from "next-mdx-remote/rsc";

export const Blogpost = (props: any) => {
  const blogDir = "blogs";

  const files = fs.readdirSync(path.join(blogDir));

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-center flex-col items-center">
          <Image
            src={Ilustration}
            width={180}
            height={130}
            alt="post image"
            className={styles._image}
          />
          <h4 className="font-black mx-0 text-[#212126] text-5xl uppercase">
            {`There’s`} a Lot
          </h4>
          <h4 className="font-black mx-0 text-[#C09D44] text-[64px] uppercase">
            on the Line!
          </h4>
          <p className="text-center mt-5 text-xl text-[#212126] mb-24">
            As the captain of your project, you {`shouldn’t`} have to do all the
            work. But decisive <br /> action can mean the difference between a
            successful product, and a missed <br /> opportunity.
          </p>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex justify-center gap-8 mt-24 mb-28">
          {blogs.map((blog) => (
            <Link href={"/blogs/" + blog.slug} passHref key={blog.slug}>
              <div className="flex items-center">
                <div className={styles._mock_image}>
                  {/* <Image
                  src={blog.meta.image}
                  width={180}
                  height={130}
                  alt="post image"
                  className={styles._mock_image}
                /> */}
                </div>
                <div className="ml-8">
                  <h4 className={styles._title}>{blog.meta.title}</h4>
                  <span className={styles._subtitle}>{blog.meta.subtitle}</span>
                  <p>{blog.meta.shortDescription}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
