import { Skill } from '../typings';
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

const query = groq`
    *[_type == "skill"]
`;

type Data = {
	skills: Skill[];
};

export const fetchSkills = async () => {
	const skills: Skill[] = await sanityClient.fetch(query);
	return skills;
};

// Function to test locally:

// export const fetchSkills = async () => {
// 	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`);

// 	const data = await res.json();
// 	const skills: Skill[] = data.skills;

// 	// to test while coding:
// 	// console.log('fetching ', skills)

// 	return skills;
// };

