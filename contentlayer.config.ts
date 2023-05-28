import { makeSource, defineDatabase } from 'contentlayer-source-notion';

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
	properties: {
		createdAt: {
			name: 'Created At',
			type: 'date',
		},
		updatedAt: {
			name: 'Last Updated At',
			type: 'date',
		},
		seoKeywords: {
			name: 'SEO Keywords',
			type: 'string',
		},
	},
	computedFields: {
		url: {
			type: 'string',
			resolve: (post) => `/blog/${post._id}`,
		},
	},
}));

export default makeSource({
	dev: {
		polling: 30 * 1000, // seconds
	},
	client: {
		auth: process.env.NOTION_TOKEN,
	},
	databaseTypes: [Blog],
});
