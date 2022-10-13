import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { urlFor } from '../sanity';
import { Experience } from '../typings';

type Props = {
	experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
	return (
		<article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] sm:w-[500px] md:w-[600px] xl:w-[1200px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
			<motion.img
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
				src={urlFor(experience?.companyImage).url()}
				alt=''
			/>

			<div className='px-0 md:px-10 '>
				<h4 className='text-4xl font-light text-center'>
					{experience?.jobTitle}
				</h4>
				<p className='font-bold text-2xl mt-1 text-center'>
					{experience?.company}
				</p>
				<div className='flex space-x-2 my-2 items-center justify-center'>
					{experience.technologies?.map(technology => {
						return (
							// <img
							// 	key={technology._id}
							// 	className='h-10 w-10 rounded-full'
							// 	src={urlFor(technology.image).url()}
							// 	alt=''
							// />
							<Image
								key={technology._id}
								className='h-10 w-10 rounded-full'
								src={urlFor(technology.image).url()}
								alt=''
								height={50}
								width={50}
							/>
						);
					})}
				</div>
			</div>
			<p className='uppercase py-5 text-gray-300'>
				{new Date(experience?.dateStarted)
					.toDateString()
					.split(' ')
					.slice(1)
					.join(' ')}{' '}
				-{' '}
				{experience?.isCurrentlyWorkingHere
					? 'Present'
					: new Date(experience?.dateEnded)
							.toDateString()
							.split(' ')
							.slice(1)
							.join(' ')}
			</p>

			<ul className='list-disc list-inside text-justify space-y-4 ml-5 text-lg max-h-96 pr-5 scroll scrollbar-thin scrollbar-text-black scrollbar-thumb-[#F7AB0A]/80'>
				{experience.points.map((point, i) => {
					return <li key={i}>{point}</li>;
				})}
			</ul>
		</article>
	);
};

export default ExperienceCard;

