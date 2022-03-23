import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-neutral-200 dark:bg-neutral-800 border-t border-accent-2 dark:border-neutral-700">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            The fun doesn't have to end.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/paraspraj"
              className="mx-3 bg-black dark:bg-white hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white border border-black dark:border-white text-white dark:text-black font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              LinkedIn
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/paraspraj"
              className="mx-3 font-bold hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
