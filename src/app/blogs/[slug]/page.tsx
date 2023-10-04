import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";

import styles from "./styles.module.css";
import { Sitemap } from "@/components/Sitemap";
import { Header } from "@/components/Header";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blogs"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("blogs", slug + ".mdx"),
    "utf-8"
  );

  const { data: fontMatter, content } = matter(markdownFile);
  return {
    fontMatter,
    slug,
    content,
  };
}

export default function Page({ params }: any) {
  const props = getPost(params);

  return (
    <>
      <Header revert />
      {/* <MDXRemote source={props.content}></MDXRemote> */}
      <article className="container mx-auto px-80 text-center mt-24">
        {/* <h1 className="font-black">{props.fontMatter.title}</h1>
      <MDXRemote source={props.content}></MDXRemote> */}
        <h1 className="mb-8">
          Missed Opportunity <br />
          <span>Blockbuster</span>
        </h1>
        <p className="mb-[60px]">
          From a global phenomenon to a bankrupt relic in less than a decade.
        </p>
        <div className="flex justify-center flex-col items-center">
          <div className={styles._mock_image}></div>
          <div className="mt-5 mb-14">
            <span className="text-sm text-left">
              Blockbuster Video was a video rental store chain that operated in
              the United States and other countries from 1985 to 2014.
            </span>
          </div>
          <p className="text-left mb-[60px]">
            Remember when you had to drive to a Blockbuster store to rent a
            movie, and then return it the next day or face a late fee? Those
            days are long gone, thanks to the rise of online streaming services
            that have revolutionized the way we watch and access content. But
            what happened to Blockbuster, the once-dominant player in the home
            entertainment industry? How did it go from having thousands of
            stores worldwide and millions of loyal customers to being a bankrupt
            and forgotten brand in less than 10 years? In this blog post, we
            will explore some of the reasons behind {`Blockbuster's`}{" "}
            spectacular fall from grace.
          </p>
          <p className="mb-8 text-left">
            Online streaming services stole {`Blockbuster's`} thunder
          </p>
          <p className="text-left mb-[60px]">
            Netflix, Hulu, Amazon Prime and others offered customers more
            convenience, variety and affordability than Blockbuster, which
            relied on physical rentals and late fees. Customers could watch
            whatever they wanted, whenever they wanted, on any device they
            wanted, without having to leave their homes or worry about
            deadlines. Online streaming services also had more content to offer,
            including original shows and movies that attracted viewers and
            awards.
          </p>
        </div>
      </article>
      <Sitemap />
    </>
  );
}
