import Header from "@/components/Header";
import Contacts from "@/components/contact"

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <Header />
      <Contacts />
    </main>
  )
}