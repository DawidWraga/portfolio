import { makeSource, defineDatabase } from 'contentlayer-source-notion';
import readingTime from 'reading-time';
import { downloadNotionMedia } from './src/utils/download-notion-media';

export const Blog = defineDatabase(() => ({
	name: 'Blog',
	databaseId: 'bf876ad40ce04f7a99ceae3863cf0294',
	query: {
		filter: {
			property: 'Status',
			status: {
				equals: 'Published',
			},
		},
	},
	computedFields: {
		url: {
			type: 'string',
			resolve: (post) => `/blog/${post._id}`,
		},
		thumbnailPath: {
			type: 'string',
			resolve: async (doc) => {
				const thumbnail = doc.thumbnail[0];

				try {
					const path = await downloadNotionMedia(thumbnail, doc._id);
					return path;
				} catch (e) {
					console.log('error downloading media: ', e);
					return null;
				}
			},
		},
		readingTime: {
			type: 'string',
			resolve: (doc) => readingTime(doc.body.html),
		},
	},
}));

export default makeSource({
	dev: {
		// polling: false,
		polling: 30 * 1000, // seconds
	},
	client: {
		auth: process.env.NOTION_TOKEN,
	},
	databaseTypes: [Blog],
});
