import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { urlFor } from '../sanity';
import { Project } from '../typings';

type Props = {
	projects: Project[];
};

const Projects = ({ projects }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className='relative flex flex-col overflow-hidden md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
		>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				Projects
			</h3>
			<div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
				{projects?.map((project, index) => (
					<div
						key={project._id}
						className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 '
					>
						<motion.img
							initial={{
								y: -300,
								opacity: 0,
							}}
							transition={{ duration: 1.2 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							src={urlFor(project?.image).url()}
							alt=''
							className='max-h-72'
						/>
						<div className='space-y-10 px-0 md:px-10 max-w-6xl'>
							<h4 className='text-3xl md:text-4xl font-semibold text-center'>
								<span className='underline decoration-[brown]'>
									Case Study {index + 1} of {projects.length}:
								</span>{' '}
								{project?.title}
							</h4>
							<div className='flex items-center space-x-2 justify-center'>
								{project?.technologies.map(technology => {
									return (
										<Image
											key={technology._id}
											src={urlFor(technology.image).url()}
											alt=''
											className='xl:w-32 xl:h-32'
											width={48}
											height={48}
											objectFit='cover'
										/>
									);
								})}
							</div>

							<p className='block text-lg text-justify md:text-left overflow-y-scroll scroll scrollbar-thin scrollbar-text-black scrollbar-thumb-[#000]'>
								{project?.summary}
								<a
									className='flex font-bold text-3xl text-center justify-center text-[brown] underline decoration-[white]'
									href={project?.linkToBuild}
									target='_blank'
									rel='noreferrer'
								>
									{project?.linkToBuild ? 'Link to project' : ''}
								</a>
							</p>
						</div>
					</div>
				))}
			</div>
			<div className='w-full absolute top-[30%] bg-[#F7AB0A] left-0 h-[500px] -skew-y-12'></div>
		</motion.div>
	);
};

export default Projects;

