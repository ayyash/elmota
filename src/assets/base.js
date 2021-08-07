const a = [
	"message 1",
	"message 2"
]


// https://sekrab.cdn.prismic.io/api/v2

// https://newsapi.org/v2/everything?q=palestine&from=2021-07-05&sortBy=publishedAt&apiKey=3eeb4109a5634d17b5d61402992a2658

// https://sekrab.cdn.prismic.io/api/v2/documents/search?ref=YMoC7hMAACMAjMRG&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YLnFWxAAACAAwP4Z%22%29+%5D%5D


async function fetchApi() {

	const results = await fetch('https://sekrab.cdn.prismic.io/api/v2/documents/search?ref=YMoC7hMAACMAjMRG&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YLnFWxAAACAAwP4Z%22%29+%5D%5D');

	if (results.ok) {
		const res = await results.json();

		if (res) {
			return res.results[0].data;
		}
	}

	return null;
}


window.addEventListener('load', () => {
	document.querySelector('.content').innerHTML = a[0];

	// fetchApi().then(n => {
	// 	console.log(n);
	// });
});