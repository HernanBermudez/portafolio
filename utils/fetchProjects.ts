import { Project } from '../typings';
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

const query = groq`
    *[_type == "project"] | order(_createdAt asc) {
		...,
		technologies[]->,
	}
`;

export const fetchProjects = async () => {
	const projects: Project[] = await sanityClient.fetch(query);
	return projects;
};

// Function to test locally:

// type Data = {
// 	projects: Project[];
// };

// export const fetchProjects = async () => {
// 	const res = await fetch(
// 		`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
// 	);

// 	const data = await res.json();
// 	const projects: Project[] = data.projects;

// 	// to test while coding:
// 	// console.log('fetching ', projects)

// 	return projects;
// };

