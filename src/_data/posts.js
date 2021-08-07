require('dotenv').config();

const Prismic = require('@prismicio/client');



const options = {
};
const client = Prismic.client(process.env.API_URL, options);


module.exports = async function () {

	// const results = await fetch('https://sekrab.cdn.prismic.io/api/v2/documents/search?ref=YMoC7hMAACMAjMRG&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YLnFWxAAACAAwP4Z%22%29+%5D%5D');
	const tx = Prismic.Predicates.at('document.type', 'post');
	const res = await client.query(tx);

	if (res) {
		const articles = res.results.map(n => {
			return {
				url: n.href,
				id: n.id,
				slug: n.uid,
				title: n.data.title[0].text,
				subtitle: n.data.sub_title,
				date: n.data.publish_date,
				image: n.data.main_image.url,
				content: n.data.content
			}
		});
		if (process.env.development) {
			// console.log(articles);
		}

		return {articles};
	}
	return null;
};

