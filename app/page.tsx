import Header from "@/components/Header";
import Hero from "@/components/hero";
import Partners from "@/components/partners";
import About from "@/components/about"

export default function Home() {
  return (
    <main className="sm:flex min-h-screen flex-col items-center justify-between md:p-8">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
      <Header />
      <Hero />
      <Partners />
      <About />
      <p>Cniper Studio Home</p>
    </main>
  );
}
