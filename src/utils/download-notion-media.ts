import fs from 'fs';
import axios from 'axios';
import path from 'path';

export async function downloadNotionMedia(mediaUrl: string, pageId: string) {
	const filePathWithoutPublic = `/notion-media/${pageId}/thumbnail.jpeg`;
	const filePath = path.join('public', filePathWithoutPublic);
	// const filePathWithoutPublic = path.join(
	// 	'notion-media',
	// 	pageId,
	// 	'thumbnail.jpeg'
	// );
	// const filePath = path.join('public', filePathWithoutPublic);

	// Check if directory exists, if not, create it.
	const dir = path.dirname(filePath);
	if (!fs.existsSync(dir)) {
		fs.mkdirSync(dir, { recursive: true });
	}

	const response = await axios({
		method: 'GET',
		url: mediaUrl,
		responseType: 'stream',
	});

	const writer = fs.createWriteStream(filePath);

	response.data.pipe(writer);

	return new Promise((resolve, reject) => {
		writer.on('finish', () => resolve(filePathWithoutPublic));
		writer.on('error', reject);
	});
}
