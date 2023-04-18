import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Shivam | Web Developer</title>
        <meta name="description" content="I'm a full-stack web developer specializing in building full stack web applications" />
        {/* add favicon here , example given below */}
        {/* <link rel="icon" href="/fav.png" /> */}
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
