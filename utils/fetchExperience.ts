import { Experience } from '../typings';
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

const query = groq`
	*[_type == "experience"] {
	...,
	technologies[]->
	} | order(_createdAt asc)
`;

type Data = {
	experience: Experience[];
};

export const fetchExperience = async () => {
	const experience: Experience[] = await sanityClient.fetch(query);
	return experience;
};

// Function to test local:

// export const fetchExperience = async () => {
// 	const res = await fetch(
// 		`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`
// 	);

// 	const data = await res.json();
// 	const experience: Experience[] = data.experience;

// 	// to test while coding:
// 	// console.log('fetching ', experience)

// 	return experience;
// };

