import Header from "@/components/Header";
import Gallery from "@/components/gallery";

export default function Page() {
  return(
    <main className="sm:flex min-h-screen flex-col items-center justify-between md:p-8">
      <Header />
      <Gallery />
      <p>Gallery</p>
    </main>
  )
}