import React from 'react';
import { motion } from 'framer-motion';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
	pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='flex flex-col relative text-center sm:mb-10 sm:mt-10 md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
		>
			<motion.img
				src={urlFor(pageInfo?.profilePic).url()}
				initial={{
					x: -200,
					opacity: 0,
				}}
				whileInView={{
					x: 0,
					opacity: 1,
				}}
				transition={{
					duration: 1.2,
				}}
				viewport={{
					once: true,
				}}
				className='md:mb-0 flex-shrink-0 w-48 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[350px] xl:h-[450px]'
			/>

			<div className='space-y-10 px-0 sm:pt-10  md:px-10'>
				<h3 className='	uppercase tracking-[20px] text-gray-500 text-2xl'>
					About
				</h3>
				<h4 className='text-4xl font-semibold'>
					Here is a{' '}
					<span className='underline decoration-[#F7AB0A]/50'>little</span>{' '}
					<span> background</span>
				</h4>
				<p className='text-base text-justify'>
					{pageInfo?.backgroundInformation}
				</p>
			</div>
		</motion.div>
	);
}

