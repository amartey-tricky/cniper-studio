import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaVimeo, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center w-full h-auto px-12 py-6 mx-auto text-slate-400 bg-slate-900 justify-between">
      <div className="w-full flex flex-col justify-between items-center py-8 md:flex-row">
        <div className="flex flex-col justify-start">
          <div>
            <Image
              src="/white.png"
              alt="Cniper Studio Logo"
              width={60}
              height={60}
            />
          </div>
          <p>Visionary Storytellers, Pixel Perfectionists.</p>
          <div className="flex flex-row items-center text-2xl gap-2">
            <Link href="https://www.instagram.com/cniper_studio?igsh=MTF3bmVuNjY3bDN3bw==">
              <FaInstagram className=" hover:text-slate-200" />
            </Link>
            <Link href="Vimeo.com/stephanadjei">
              <FaVimeo className=" hover:text-slate-200" />
            </Link>
            <Link href="https://youtube.com/@Cniper-Studio?si=H4BC9bj5oc7PWq6k">
              <FaYoutube className=" hover:text-slate-200" />
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-slate-700 border-solid w-full">
        <p className="flex flex-col justify-between text-sm p-1">
          © 2024 Cniper Studio, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
