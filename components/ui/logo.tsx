import CldImage from "../cldimage";
import Link from "next/link";


export default function Logo() {
  return (
    <section>
      <Link href="/">
        <CldImage 
        src="https://res.cloudinary.com/dbgxgfsbl/image/upload/v1710861333/logo_efgsir.png"
        alt="Cniper logo"
        width={120}
        height={120}
        priority
        />
      </Link>
    </section>
  )
}
