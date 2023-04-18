import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I am a passionate and motivated 3rd year 
            B.Tech student pursuing Computer Science from KIIT University, Odisha.
            I'm Excited to showcase my journey and achievements in the world of technology. 
            From coding projects and innovative solutions to leadership roles and
            collaborative team projects, my portfolio reflects my dedication to 
            learning and applying cutting-edge technologies. Browse through my 
            diverse range of projects and experiences to explore my skills in software
            development, web design, data structures, algorithms, and more. 
            Let's connect and explore the possibilities of technology together!
          </p>
          <p className='py-2 text-gray-600'>
            I have also done Competitive programming.
            I have acheived an <strong>AIR - 987</strong> in Google Kickstart.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
