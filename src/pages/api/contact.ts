// pages/api/contact.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import * as nodemailer from 'nodemailer';
import { setTimeout } from 'timers/promises';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const transporter = nodemailer.createTransport({
		service: 'SendinBlue',
		auth: {
			user: 'dpwraga@gmail.com', // The account you signed up with SendinBlue
			pass: process.env.SMTP_PASS,
		},
		secure: false,
	});

	const { name, email, content } = req.body;

	if (!content || !name || !email) {
		return res
			.status(400)
			.json({ content: 'Please fill out the necessary fields' });
	}

	const mailData = {
		from: email,
		to: 'dpwraga@gmail.com',
		subject: `Message from ${name} (Portfolio Contact)`,
		text: `${content} | Sent from: ${email}`,
		html: `<div>${content}</div><p>Sent from: ${email}</p>`,
	};

	await setTimeout(1000);

	res.json({ content: 'Message sent!', mailData });
	return;
	await new Promise((resolve, reject) => {
		transporter.sendMail(mailData, (err: Error | null, info) => {
			if (err) {
				reject(err);
				return res
					.status(500)
					.json({ error: err.message || 'Something went wrong' });
			} else {
				resolve(info.accepted);
				res.status(200).json({ message: 'Message sent!' });
			}
		});
	});

	return;
}
