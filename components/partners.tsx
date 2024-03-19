import { mansalva } from "./ui/fonts";
import { v2 as cloudinary } from "cloudinary";
import CldImage from "@/components/cldimage"

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface imageProps {
  public_id: string;
  secure_url: string;
}

export default async function Partners() {
  const { resources } = await cloudinary.search
    .expression("folder:partners")
    .execute();

  return (
    <section className="flex flex-col items-center justify-center text-center p-8">
      <h1 className={`${mansalva.className} text-center text-6xl font-black`}>
        Our Partners
      </h1>
      <p className="text-justify text-xl text-slate-400 my-8">
        We are proud to have partnered with some of the best brands in the
        world.
      </p>
      <div className="flex justify-center flex-wrap">
        {resources.map((resource: imageProps) => (
          <div
            key={resource.public_id}
            className="flex flex-col items-center m-4"
          >
            <CldImage
              src={resource.secure_url}
              alt="partner logo"
              loading="lazy"
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
