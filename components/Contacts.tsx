import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Contact } from '../typings';

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

type Props = {
	contact: Contact;
};

const Contact = ({ contact }: Props) => {
	const { register, handleSubmit } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = data => {
		window.location.href = `mailto:${data.email}?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}`;
	};
	return (
		<div className='flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				contact me
			</h3>

			<div className='flex flex-col space-y-10'>
				<h4 className='pt-40 text-2xl sm:text-2xl md:text-3xl xl:text-4xl font-semibold text-center'>
					I have got just what you need.{' '}
					<span className='decoration-[#F7AB0A]/50 underline'>
						Let&apos;s talk.
					</span>
				</h4>

				<div key={contact?._id} className='space-y-10'>
					<div className='flex items-center space-x-5 justify-center'>
						<PhoneIcon className='text-[#F7A80A] h-7 w-7 animate-pulse' />
						<p className='text-2xl'>{contact?.phoneNumber}</p>
					</div>

					<div className='flex items-center space-x-5 justify-center'>
						<EnvelopeIcon className='text-[#F7A80A] h-7 w-7 animate-pulse' />
						<p className='text-2xl'>{contact?.email}</p>
					</div>

					<div className='flex items-center space-x-5 justify-center'>
						<MapPinIcon className='text-[#F7A80A] h-7 w-7 animate-pulse' />
						<p className='text-2xl'>{contact?.location}</p>
					</div>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col space-y-2 w-fit mx-auto'
				>
					<div className='flex space-x-2'>
						<input
							{...register('name')}
							placeholder='Name'
							className='contactInput'
							type='text'
						/>
						<input
							{...register('email')}
							placeholder='Email'
							className='contactInput'
							type='text'
						/>
					</div>
					<input
						{...register('subject')}
						placeholder='Subject'
						className='contactInput'
						type='text'
					/>
					<textarea
						{...register('message')}
						placeholder='Message'
						className='contactInput'
					/>
					<button
						type='submit'
						className='bg-[#F7AB0A] py-5 px-10 rounded-sm text-black font-bold text-lg'
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;

