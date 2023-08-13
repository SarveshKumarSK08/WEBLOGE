import React from "react";
import Link from "next/link";
import { SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto text-white flex">
        <div className="border-t w-full inline-block border-blue-400 py-8 ">
          <div className="sm:flex  sm:justify-between justify-center  sm:items-center items-center text-center">
            <div className="">
              <Link href="/">
                <span className="cursor-pointer font-bold text-2xl">
                  © 2022 Sarvesh&apos;s Creative Co.
                </span>
              </Link>
            </div>
            <div className="text-xl">
              <p>All rights reserved.</p>
            </div>
            <div>
              <ul className="flex items-center justify-center gap-3">
                <li className="text-xl hover:translate-y-1 transition 0.25s ease-in">
                  <Link href={"https://wa.me/+918384017119"}>
                    <SiWhatsapp />
                  </Link>
                </li>
                <li className="text-xl hover:translate-y-1">
                  <Link href={"https://www.linkedin.com/in/sarveshkumarsk08"}>
                    <SiLinkedin />
                  </Link>
                </li>
                <li className="text-xl hover:translate-y-1">
                  <Link href={"mailto:kumarsarvesh426@gmail.com"}>
                    <SiGmail />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
