import Image from "next/image";
import image from "next/image";

interface partnerProps {
  name: string;
  logo: string;
}

const partners: partnerProps[] = [
  {
    name: "Agritop",
    logo: "/agritop.png",
  },
  {
    name: "Agrokings",
    logo: "/agrokings.png",
  },
  {
    name: "Ceresoya",
    logo: "/ceresoya.png",
  },
  {
    name: "SLoop",
    logo: "/s.png",
  },
];

export default function Partners() {
  return (
    <section className="flex flex-col items-center justify-center text-center">
      <h1 className="text-center text-6xl font-black">Our Partners</h1>
      <p className="text-justify text-xl text-slate-400 my-8">
        We are proud to have partnered with some of the best brands in the
        world.
      </p>
      <div className="flex justify-center flex-wrap">
        {partners.map((partner, index) => (
          <div key={index} className="flex flex-col items-center m-4">
            <Image
              src={partner.logo}
              alt={`${partner.name} Logo`}
              width={100}
              height={100}
             />
          </div>
        ))}
      </div>
    </section>
  );
}
