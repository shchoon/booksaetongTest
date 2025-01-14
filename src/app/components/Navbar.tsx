"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import Logo from "/public/logo.png";
import Searchicon from "/public/icons/Search.png";
import BookIcon from "/public/icons/Books.png";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="flex h-[100px] w-full items-center justify-between bg-navbar">
      <Link href={"/home"}>
        <Image
          className="cursor-pointer"
          src={Logo}
          sizes="100"
          priority={true}
          alt="Logo"
          // onClick={() => {
          //   router.push("/home");
          // }}
        />
      </Link>
      <div className="flex w-32 gap-5">
        <Image
          className="cursor-pointer"
          src={Searchicon}
          sizes="28"
          alt="search"
          onClick={() => {
            router.push("/search");
          }}
        />
        <Image
          className="cursor-pointer"
          src={BookIcon}
          sizes="28"
          alt="books"
          onClick={() => {
            router.push("/bookshelf");
          }}
        />
      </div>
    </div>
  );
}
