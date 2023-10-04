import Link from "next/link";
import Image from "next/image";
import CompanyBrand from "../../public/images/remove-brand-revert.svg";

export default function NotFound() {
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
          <h1 className="font-black text-[124px] text-[#C09D44] text-center">
            404
          </h1>
          <h2 className="font-bold text-[34px] text-center">
            Page not found 😰
          </h2>
          <p className="text-center mt-5 mb-5">
            Sorry, the page {`you're`} looking for {`doesn't`} exist
          </p>
          <div className="flex justify-center mt-5">
            <Link href="/">
              <button className="outline outline-offset-2 flex justify-evenly items-center outline-[#C09D44] text-[#C09D44] px-10 py-5 mt-6">
                Back to home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
