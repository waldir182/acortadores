let card_container = document.getElementById('card-container');

let s = [
	{
		color: '#2985FD',
		name: 'exe.io',
		img: "exe.png",
		home: "https://exe.io/",
		dashboard: "https://exe.io/member/dahsboard",
		link: "https://exe.io/member/link",
		withdraws: "https://exe.io/member/withdraws",
		profile: "https://exe.io/member/profile",
	},
	{
		color: '#2E3E4E',
		name: 'ouo.io',
		img: "ouo.png",
		home: "https://ouo.io/",
		dashboard: "https://ouo.io/member/dahsboard",
		link: "https://ouo.io/member/link",
		withdraws: "https://ouo.io/member/withdraws",
		profile: "https://ouo.io/member/profile",
	},
	{
		color: '#1754B5',
		name: 'fc.lc',
		img: "fclc.png",
		home: "https://fc.lc/",
		dashboard: "https://fc.lc/member/dahsboard",
		link: "https://fc.lc/member/link",
		withdraws: "https://fc.lc/member/withdraws",
		profile: "https://fc.lc/member/profile",
	},
	{
		color: '#01A529',
		name: 'clk.sh',
		img: "clksh.png",
		home: "https://clk.sh/",
		dashboard: "https://clk.sh/member/dahsboard",
		link: "https://clk.sh/member/link",
		withdraws: "https://clk.sh/member/withdraws",
		profile: "https://clk.sh/member/profile",
	},
	{
		color: '#CA9F03',
		name: 'shrinkearn.com',
		img: "shrinkearn.png",
		home: "https://shrinkearn.com/",
		dashboard: "https://shrinkearn.com/member/dahsboard",
		link: "https://shrinkearn.com/member/link",
		withdraws: "https://shrinkearn.com/member/withdraws",
		profile: "https://shrinkearn.com/member/profile",
	},
]

s.forEach((el) => {
	let card = document.createElement('div');
	card.classList.add('card');

	card.innerHTML = `
		<div class="card-header"  style="background:${el.color};">
			<span>${el.name}</span>
			<a href="${el.home}" target="_blank">+</a>
		</div>
		<div class="card-body">
			<img src="img/${el.img}" alt="${el.img}">
			<a href="${el.dahsboard}" target="_blank">Tablero</a>
			<a href="${el.link}" target="_blank">Link</a>
			<a href="${el.withdraws}" target="_blank">Retirar</a>
			<a href="${el.profile}" target="_blank">Perfil</a>
		</div>
	`;

	card_container.append(card)
})
