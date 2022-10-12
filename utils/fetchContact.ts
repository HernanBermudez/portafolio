import { Contact } from '../typings';
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

const query = groq`
    *[_type == "contact"][0]
`;

type Data = {
	contact: Contact[];
};

export const fetchContact = async () => {
	const contact: Contact[] = await sanityClient.fetch(query);
	return contact;
};

// Function to run test in local:

// export const fetchContact = async () => {
// 	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getContact`);

// 	const data = await res.json();
// 	const contact: Contact[] = data.contact;

// 	// to test while coding:
// 	// console.log('fetching ', contact);

// 	return contact;
// };
