import Head from 'next/head';
import Footer from '../components/footer';

export default function Home() {
  const YEAR = new Date().getFullYear();
  return (
    <div className="bg-white dark:bg-black">
      <div className="container mx-auto px-8 py-20 h-screen">
          <h1 className="text-slate-900 dark:text-white text-2xl mt-20">Paras Praj</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-20">
            I enjoy building software and solving problems.
          </p>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            More content coming soon.
          </p>
          <ul className="list-disc text-slate-500 dark:text-slate-400 mt-20 pl-5" >
            <li><a href="https://github.com/paraspraj" rel="noreferrer" target="_blank">GitHub</a></li>
            <li><a href="https://linkedin.com/in/paraspraj" rel="noreferrer" target="_blank">LinkedIn</a></li>
          </ul>
          <p className="text-slate-500 dark:text-slate-400 mt-10 text-sm">
            &copy; {YEAR} Paras Praj
          </p>
      </div>
    </div>
  );
}
