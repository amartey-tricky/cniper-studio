import Image from "next/image";
import { lobster } from "./ui/fonts";
import { poppins } from "./ui/fonts";

interface creatorProps {
  name: string;
  role: string;
  description: string;
  image: string;
}

const creators: creatorProps[] = [
  {
    name: "smak",
    role: "founder",
    description: "jack of all trades, leader of thousands",
    image: ""
  },
  {
    name: "ravi",
    role: "animator",
    description: "creative mind, artist",
    image: ""
  }
]

export default function About() {
  return (
    <section className="flex flex-col items-center justify-center p-8">
      <h2 className={`${lobster.className} text-6xl text-center text-black`}>Our Creators</h2>
      <p className="text-slate-400 text-xl">Meet the brains behind our amazing and awe inspiring projects</p>
      <div className="flex justify-center flex-wrap">
        {creators.map((creator, index) => (
          <div key={index} className="flex flex-col items-center m-4 max-w-sm">
            <Image
              src={creator.image}
              alt={`${creator.name} image`}
              width={200}
              height={200}
              className="rounded-full mb-4"
             />
             <h3 className={`${poppins.className} text-xl font-bold`}>{creator.name}</h3>
             <p className="text-slate-500 mb-2">{creator.role}</p>
             <p className="text-center">{creator.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
