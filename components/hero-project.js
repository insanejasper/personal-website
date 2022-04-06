import Link from 'next/link'
import Image from 'next/image'
export default function HeroProject({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 items-center h-screen">
        <div className="mb-10 md:mb-0">
          <h3 className="text-center md:text-left text-3xl mt-10 md:mt-0 font-serif">
            Hello! My name is
          </h3>
          <h1 className="text-center md:text-left text-7xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
            Paras Praj<span className="text-pink-500">.</span>
          </h1>
          <h4 className="text-center md:text-left text-lg mt-5 ">
            I'm a software engineer who enjoys learning new things, building software, and solving problems.
          </h4>
          <p className="mt-10 text-center md:text-left">
            <Link href="https://linkedin.com/in/paraspraj">
              <a
                target="_blank"
                rel="noreferrer"
                className="mr-3 bg-black dark:bg-white hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white border border-black dark:border-white text-white dark:text-black font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
              >
                LinkedIn
              </a>
            </Link>
            <Link href="https://github.com/paraspraj">
            <a
              rel="noreferrer"
              target="_blank"
              className="mx-3 font-bold hover:underline"
            >
              GitHub
            </a>
            </Link>
          </p>
        </div>
        <div className="border-r-8 border-b-8 border-pink-500"> 
          <Image
            src="/assets/img/headshot.jpg"
            alt={`Cover Image for ${title}`}
            layout="responsive"
            width={1240}
            height={1240}
          />
        </div>
      </div>
    </section>
  )
}
