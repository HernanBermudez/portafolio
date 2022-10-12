import { motion } from 'framer-motion';
import React from 'react';
import { Experience } from '../typings';
import ExperienceCard from './ExperienceCard';

type Props = {
	experience: Experience[];
};

const WorkExperience = ({ experience }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='flex flex-col relative overflow-hidden text-lft md:flex-row max-w-full xl:px-24 mx-auto items-center justify-evenly '
		>
			<h3 className='absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl'>
				Experience
			</h3>

			<div className='w-full flex space-x-5 overflow-x-scroll p-10 pt-48 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
				{}
				{experience?.map(experience => {
					return (
						<ExperienceCard key={experience._id} experience={experience} />
					);
				})}
			</div>
		</motion.div>
	);
};

export default WorkExperience;

