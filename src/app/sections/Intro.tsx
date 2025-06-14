import {
  Alagard,
  Bello,
  Genty,
  Grotesk400,
  HelveticaRoman,
} from "../utils/fonts";

export default function Intro() {
  return (
    <div className="bg-njblue-500 text-white p-4 max-w-5xl mx-auto lg:h-full lg:flex lg:items-center w-full">
      <div className="lg:max-w-lg lg:text-xl">
        <p className="tracking-wider text-3xl lg:text-5xl">
          <span className={Genty.className}>A</span>
          <span className={HelveticaRoman.className}>tt</span>
          <span className={HelveticaRoman.className}>e</span>
          <span className={HelveticaRoman.className}>n</span>
          <span className={Bello.className}>t</span>
          <span className={HelveticaRoman.className}>io</span>
          <span className={Alagard.className}>n!</span>
        </p>
        <p className={Grotesk400.className}>
          <span> My name is </span>
          <span className="">Kaori</span>, and I&apos;m an Information System student passionate about web development and cybersecurity. I love building projects and finding vulnerabilities. Check out my work below!
        </p>
        <p className="mt-2 lg:mt-6">
          Find my projects on{" "}
          <a
            className="bg-neon-500 px-1 underline text-njblue-700"
            target="_blank"
            href="https://github.com/Hazko-stack"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <p className={Grotesk400.className}>
          Hit me up on{" "}
          <a
            className="bg-neon-500 px-1 underline text-njblue-700"
            target="_blank"
            href="https://www.instagram.com/athayahazza_"
            rel="noopener noreferrer"
          >
            Insta
          </a>
          .
        </p>
      </div>
    </div>
  );
}
