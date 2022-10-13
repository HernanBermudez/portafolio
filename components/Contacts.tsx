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
		<div className='h-screen flex flex-col relative text-center px-10 justify-evenly items-center'>
			<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
				contact me
			</h3>

			<div className='flex flex-col space-y-5'>
				<h4 className='pt-12 sm:pt-24 pb-2 text-2xl sm:text-2xl md:text-3xl font-semibold text-center'>
					<span className='decoration-[#F7AB0A]/50 underline'>
						Let&apos;s talk.
					</span>
				</h4>

				<div key={contact?._id} className='space-y-10 text-xl sm:text-2xl'>
					<div className='flex items-center space-x-5 justify-center'>
						<PhoneIcon className='text-[#F7A80A] h-7 w-7 animate-pulse' />
						<p>{contact?.phoneNumber}</p>
					</div>

					<div className='flex items-center space-x-5 justify-center'>
						<EnvelopeIcon className='text-[#F7A80A] h-7 w-7 animate-pulse' />
						<p>{contact?.email}</p>
					</div>

					<div className='flex items-center space-x-5 justify-center'>
						<MapPinIcon className='text-[#F7A80A] h-7 w-7 animate-pulse' />
						<p>{contact?.location}</p>
					</div>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col space-y-2 mx-auto'
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
						className='contactInputSecondary'
						type='text'
					/>
					<textarea
						{...register('message')}
						placeholder='Message'
						className='contactInputSecondary'
					/>
					<button
						type='submit'
						className='bg-[#F7AB0A] py-3 px-3 rounded-sm text-black font-bold text-lg'
					>
						Submit
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;

