import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';
import BackgroundCircles from './BackgroundCircles';

type Props = {
	pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
	const [text, count] = useTypewriter({
		words: [
			`Hi, I am ${pageInfo?.name}`,
			'Guy-who-loves-football.tsx',
			'<ButLovesToCodeMore/>',
		],
		loop: true,
		delaySpeed: 200,
	});

	return (
		<div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden pt-24'>
			<BackgroundCircles />
			<div className='relative rounded-fill h-32 w-32 mx-auto'>
				<Image
					src={urlFor(pageInfo?.heroImage).url()}
					alt=''
					layout='fill'
					objectFit='cover'
					className='rounded-full'
				/>
			</div>
			<div className='z-20'>
				<h2 className='text-sm uppercase text-gray-500 pb-2'>
					{pageInfo?.role}
				</h2>
				<h1 className='relative text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold px-10'>
					<span className='mr-3'>{text}</span>
					<Cursor cursorColor='#F7AB0A' />
				</h1>

				<div className='pt-2'>
					<Link href='#about'>
						<button className='heroButton'>About</button>
					</Link>
					<Link href='#experience'>
						<button className='heroButton'>Experience</button>
					</Link>
					<Link href='#skills'>
						<button className='heroButton'>Skills</button>
					</Link>
					<Link href='#projects'>
						<button className='heroButton'>Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

