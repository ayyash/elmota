
const PrismicDOM = require('prismic-dom');


module.exports = (domContent) => {
	const _dom =  PrismicDOM.RichText.asHtml(domContent);
	return `<div class="whathere">${_dom}</div>`;
}