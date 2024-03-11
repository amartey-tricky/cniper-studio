import Header from "@/components/Header";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-4">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
      <Header />
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-black">
          Cniper <span className="text-primary">Studio</span>!
        </h1>
        <p className="text-xl">
          The page you are looking for doesn&apos;t exist.
          <br />
          <Link href="/" className="text-primary">Go back to home
          </Link>
        </p>
      </div>
    </main>
  );
}
