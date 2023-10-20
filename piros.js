let randx;
let randy;

function start() {
	document.getElementById("racs").innerHTML = "";
	let meret = document.querySelector("#meret").value;
	if (meret < 2 || meret > 10) return;
	console.log(meret);
	rajzol(meret);
	randx = randnr(meret);
	randy = randnr(meret);
	console.log(randx, randy);
}

function rajzol(nr) {
	for (let i = 1; i <= nr; i++) {
		let sor = document.createElement("div");
		sor.classList.add("row");
		sor.classList.add("justify-content-center");
		document.getElementById("racs").appendChild(sor);
		for (let j = 1; j <= nr; j++) {
			let cella = document.createElement("div");
			cella.setAttribute("class", "border bg-secondary box");
			cella.dataset.x = i;
			cella.dataset.y = j;
			sor.appendChild(cella);
		}
	}
}

function pozicio(e) {
	if (!e.target.classList.contains("box")) return;
	//console.log(e.target);
	let x = e.target.dataset.x;
	let y = e.target.dataset.y;
	console.log(x, y);
	if (y == randy && x == randx) {
		e.target.classList.add("bg-danger");
	} else {
		e.target.classList.add("bg-dark");
	}
}

function randnr(n) {
	return Math.floor(Math.random() * n) + 1;
}
