import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

import { sanityClient } from '../sanity'
import { Experience, Skill, PageInfo, Project, Social } from '../typings'

type Props =  {
  skills: Skill[],
  experiences: Experience[],
  pageInfos: PageInfo[],
  projects: Project[],
  socials: Social[]
}

export async function getStaticProps() {
const skills = await sanityClient.fetch(`*[_type == "skill"]`);
const experiences = await sanityClient.fetch(`*[_type == "experience"]`);
const pageInfos = await sanityClient.fetch(`*[_type == "pageInfo"]`);
const socials = await sanityClient.fetch(`*[_type == "social"]`);
const projects = await sanityClient.fetch(`
*[_type == "project" ] {
  ...,
  technologies[] ->
}
`);

  return {
    props: {
      skills,
      experiences,
      pageInfos,
      projects,
      socials,
    }
  };
}

const Home: NextPage<Props> = ({ skills, experiences, pageInfos, projects, socials }) => {
  /* console.log("skills", skills) */
  /* console.log("experiences", experiences) */
  /* console.log("pageInfos-index.tsx", pageInfos[0]) */
  /* console.log("projects", projects) */
  /* console.log("socials", socials) */
  return (
    <div className="bg-dark-blue text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-gray-400/20 scrollbar-thumb-red-500/40">
      <Head>
        <title>Mert's Portfolio</title>
      </Head>

      {/* {Header} */}
      <Header socials={socials}/>

      {/* {Hero} */}
      <section id="hero" className="md:snap-center">
        <Hero  name={pageInfos[0].name} image={pageInfos[0]?.heroImage.asset["_ref"]} role={pageInfos[0]?.role} />
      </section>

      {/* {About} */}
      <section id="about" className="md:snap-center">
        <About history={pageInfos[0].backgroundInformation} image={pageInfos[0]?.profilePic.asset["_ref"]} />
      </section>

      {/* {Experience} */}
      <section id="experience" className="md:snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* {Skills} */}
      <section id="skills" className="md:snap-center">
        <Skills skills={skills} />
      </section>

      {/* {Projects} */}
      <section id="projects" className="md:snap-center">
        <Projects projects={projects} />
      </section>

      {/* {Contact Me} */}
      <section id="contact" className="md:snap-center">
        <ContactMe email={pageInfos[0]?.email} address={pageInfos[0]?.address} />
      </section>
    </div>
  )
}

export default Home
