import React from 'react';
import { Client } from '@notionhq/client';


export default function Blog() {

	const KEY = 'secret_4jaW3yXxmHxEUwxiRIuhhG6EszBeKPiIgf8nIIH6eQY';


	const notion = new Client({
		auth: KEY,
	});

	const databaseId = 'd9ca53f2-d920-4b28-811a-0add554b6859'

	const listDatabases = async () => {
		const payload = {
			path: `databases/${databaseId}/query`,
			method: 'POST'
		}
		const data = await notion.request(payload)
		console.log(data)
	}

	listDatabases()

	return (
	<div>
		<div className="bg-slate-900 text-emerald-400">
			<h1 className='text-3xl text-center font-bold py-5 underline underline-offset-2'>Blog</h1>
		</div>
	</div>

);}
