import Container from '../components/container'
import Projects from '../components/projects'
import HeroProject from '../components/hero-project'
import About from '../components/about'
import History from '../components/history'
import Layout from '../components/layout'
import { getAllProjects } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allProjects }) {
  const heroProject = allProjects[0]
  const moreProjects = allProjects
  return (
    <>
      <Layout>
        <Head>
          <title>ParasPraj.</title>
        </Head>
        <Container>
          {/* <Intro /> */}
          {heroProject && (
            <HeroProject
              title={heroProject.title}
              coverImage="/assets/blog/hello-world/cover.jpg"
              date={heroProject.date}
              author={heroProject.author}
              slug={heroProject.slug}
              excerpt={heroProject.excerpt}
            />
          )}
          <About />
          <History />
          {/* {moreProjects.length > 0 && <Projects projects={moreProjects} />} */}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allProjects = getAllProjects([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allProjects },
  }
}
