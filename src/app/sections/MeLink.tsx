import { Grotesk400 } from "../utils/fonts";

export default function MeLink() {
  return (
    <div
      className={`grid grid-cols-2 px-10 place-items-center ${Grotesk400.className} text-njblue-700 text-2xl pb-10`}
    >
      <a
        className="bg-neon-500 px-4"
        target="_blank"
        href="https://github.com/Hazko-stack"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </div>
  );
}
