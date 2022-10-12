import { Social } from '../typings';
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

const query = groq`
    *[_type == "social"]
`;

type Data = {
	socials: Social[];
};

export const fetchSocials = async () => {
	const socials: Social[] = await sanityClient.fetch(query);
	return socials;
};

// Function to run test in local:

// export const fetchSocials = async () => {
// 	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`);

// 	const data = await res.json();
// 	const socials: Social[] = data.socials;

// 	// to test while coding:
// 	// console.log('fetching ', socials)

// 	return socials;
// };

