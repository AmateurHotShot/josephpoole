import { Client } from "@notionhq/client";

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

// listDatabases()

const pageGet = async () => {
	const pageId = '06c8a1ee3c5e4f5b9738bdd6bfa2ab22';
	const response = await notion.pages.retrieve({ page_id: pageId })
	console.log(response.properties)
}

pageGet()