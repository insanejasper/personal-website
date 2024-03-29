import Image from 'next/image'

export default function About() {
  return (
    <section className="mb-32">
      <h2 className="mb-16 text-6xl md:text-7xl font-bold tracking-tighter leading-tight font-serif">
          About
        </h2>
      <div className="md:grid md:grid-cols-3 md:gap-x-16 lg:gap-x-8">
        <div className="col-span-1 flex items-center mb-20 md:mb-0">
          <div className="mx-auto">
            <span className="text-9xl">{">_"}</span>
          </div>
        </div>
        <div className="col-span-2">
          <h3 className="text-center md:text-left text-4xl mt-5 mb-10">
            I'm Paras, a Software Engineer currently working remotely for <a href="https://hashicorp.com" className="underline underline-offset-8 decoration-pink-500 hover:text-pink-500" rel="noreferrer" target="_blank">HashiCorp</a>.
          </h3>
          <p className="text-center md:text-left text-lg mt-5 ">
            I&apos;ve spent the past 5+ years working across different areas of software engineering; front-end development, back-end development, dev ops, to my current role providing developers the tools needed to extend their systems.
          </p>
          <p className="text-center md:text-left text-lg mt-5 ">
            Nowadays I spend my time coding, learning, researching, and collaborating.
          </p>
          <p className="text-center md:text-left text-lg mt-5 ">
            Outside of work you'll find me playing video games, learning new recipes, exercising, and becoming a human pillow for my cat.
          </p>
        </div>
      </div>
    </section>
  )
}
