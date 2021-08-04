const a = [
	"message 1",
	"message 2"
]

window.addEventListener('load', () => {
	document.querySelector('.content').innerHTML = a[0];
});