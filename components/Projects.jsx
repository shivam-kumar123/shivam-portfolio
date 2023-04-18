import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
// import netflixImg from '../public/assets/projects/netflix.jpg'
// import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';
import colorGame from '../public/assets/projects/color_game.png'
import drumKit from '../public/assets/projects/drum_kit.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Disney + Hotstar Clone'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='React JS'
          />
          <ProjectItem
            title='Portfolio Website'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='Next JS'

          />
          <ProjectItem
            title='Color Game'
            backgroundImg={colorGame}
            projectUrl='/colorGame'
            tech='JS'

          />
          <ProjectItem
            title='Drum Kit'
            backgroundImg={drumKit}
            projectUrl='/drumKit'
            tech='JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
