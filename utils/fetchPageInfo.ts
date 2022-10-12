import { PageInfo } from '../typings';
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

const query = groq`
    *[_type == "pageInfo"][0]
`;

type Data = {
	pageInfo: PageInfo[];
};

export const fetchPageInfo = async () => {
	const pageInfo: PageInfo[] = await sanityClient.fetch(query);
	return pageInfo;
};

// Function to run test in local:

// export const fetchPageInfo = async () => {
// 	const res = await fetch(
// 		`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
// 	);

// 	const data = await res.json();
// 	const pageInfo: PageInfo[] = data.pageInfo;

// 	// to test while coding:
// 	// console.log('fetching ', pageInfo)

// 	return pageInfo;
// };

