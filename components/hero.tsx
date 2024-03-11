import { MovingBorderButton } from "./ui/moving-border-button";
import TypingAnimation from "./ui/typing";

export default function Hero() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-black">
        Cniper <span className="text-primary">Studio</span>!
      </h1>
      <p className="text-xl mb-5 text-gray-500">
      Capturing your moments, crafting timeless stories through <TypingAnimation />
      </p>
      <MovingBorderButton />
    </div>
  )
}