import { NextResponse } from 'next/server';

import type { NextApiRequest, NextApiResponse } from 'next';
import * as nodemailer from 'nodemailer';
import { setTimeout } from 'timers/promises';

export async function POST(request: Request) {
	const reqBody = await request.json();
	const { name, email, content } = reqBody;

	const transporter = nodemailer.createTransport({
		service: 'SendinBlue',
		auth: {
			user: 'dpwraga@gmail.com', // The account you signed up with SendinBlue
			pass: process.env.SMTP_PASS,
		},
		secure: false,
	});

	if (!content || !name || !email) {
		return NextResponse.json(
			{
				content: 'Please fill out the necessary fields',
			},
			{ status: 400 }
		);
	}

	const mailData = {
		from: email,
		to: 'dpwraga@gmail.com',
		subject: `Message from ${name} (Portfolio Contact)`,
		text: `${content} | Sent from: ${email}`,
		html: `<div>${content}</div><p>Sent from: ${email}</p>`,
	};

	await setTimeout(500);

	try {
		await new Promise((resolve, reject) => {
			transporter.sendMail(mailData, (err: Error | null, info) => {
				if (err) {
					reject(err);
				} else {
					resolve(info.accepted);
				}
			});
		});
		return NextResponse.json(
			{ content: 'Message sent!', mailData },
			{ status: 200 }
		);
	} catch (err) {
		console.log(err);
		return NextResponse.json(
			{ error: 'Something went wrong' },
			{ status: 500 }
		);
	}

	return;
}
