
import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='h-[500px] lg:h-[200px] flex flex-col lg:flex-row justify-around items-center mt-10 pt-[40px] lg:pt-0 border-t-4'>
			<div className='flex flex-col'>
				<p className='text-lg font-semibold'>Powered By</p>
				<a href="https://reactjs.org/">
					<FaReact className='w-20 h-20 mt-3' style={{ color: '#5ed1f1' }} />
				</a>
			</div>

			<div className='text-lg mt-7 lg:mt-0'>
				<ul>
					<li>Bible Version - <a href='https://netbible.org/bible/John+1' className='underline hover:text-blue-300 transition duration-500 ease-in'>New English Translation (NET)</a></li>
					<li>API - <a href='https://labs.bible.org/api_web_service' className='underline hover:text-blue-300 transition duration-500 ease-in'>NET Bible API</a></li>
					<li>Hosted on <a href='https://vercel.com' className='underline hover:text-blue-300 transition duration-500 ease-in'>Vercel</a></li>
					<li>Git Repository hosted on <a href='https://github.com' className='underline hover:text-blue-300 transition duration-500 ease-in'>Github</a></li>
				</ul>
			</div>

			<div className='credit-div mt-5 sm:mt-0'>
				<p className='text-xl font-semibold'>Built and maintained by <span><a href='https://github.com/david-p-george'>David George</a></span></p>
				<p className='text-lg font-light w-[400px]'>If you encounter any bugs or have any suggestions, contact me at off.davidgeorge@gmail.com.</p>
			</div>

			<div className='mt-8 sm:mt-0 pb-8 sm:pt-0'>
				<a href="https://github.com/david-p-george/React-Bible-App">
					<AiOutlineGithub className='w-20 h-20 hover:text-blue-300 transition duration-700 ease-in' />
				</a>
			</div>
    </div>
  );
};

export default Footer;
