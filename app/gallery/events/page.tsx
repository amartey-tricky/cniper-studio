import Header from "@/components/Header";
import { v2 as cloudinary } from "cloudinary";
import Image from "next/image";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface CloudinaryResource {
  public_id: string;
  secure_url: string;
}

export default async function Page() {
  const { resources } = await cloudinary.search
    .expression("folder:events")
    .execute();
  console.log(resources);

  return (
    <main className="sm:flex min-h-screen flex-col items-center justify-between md:p-8">
      <Header />
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"></section>
      <h1>Hi</h1>
    </main>
  );
}