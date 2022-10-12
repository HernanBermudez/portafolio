import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

export const config = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	apiVersion: '2022-03-10',
	useCdn: process.env.NODE_ENV === 'production', //true
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
};

// Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
	createImageUrlBuilder(config).image(source);

