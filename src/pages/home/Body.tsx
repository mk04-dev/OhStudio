import React, { useEffect } from "react";
import Container from "./components/Container";

function Body() {
	useEffect(() => {
		const observerUp = new IntersectionObserver((entries) => {
			let delay = 0;
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("animate-slideUp");
					(entry.target as HTMLElement).style.animationDelay = `${delay}ms`;
					delay += 150;
				}
			});
			delay = 0;
		});
		const observerGroup = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.childNodes.forEach((e, idx) =>
						(e as any).classList.add(idx < entry.target.childNodes.length - 1 ? "animate-slideRight" : "animate-slideLeft")
					);
				}
			});
		});
		document.querySelectorAll(".slideUp")?.forEach((e) => observerUp.observe(e));
		document.querySelectorAll(".animate-group")?.forEach((e) => observerGroup.observe(e));
	}, []);
	return (
		<>
			<div className="header w-full dark:text-white">
				<span className="title fz-header slideUp">A brand and product designer working with clients globally</span>
				<div className="flex gap-2 sm:gap-1 slideUp">
					<div className="px-2 py-1">Expertise</div>
					<div className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">Branding</div>
					<div className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">Product</div>
					<div className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">Design System</div>
				</div>
			</div>
			<div className="w-full flex gap-6 pt-10 px-10 animate-group">
				<Container
					title="Aire"
					type="image"
					src="https://framerusercontent.com/images/kfr022WaJ8YJUyZFmdwCB3pXhs.jpg?scale-down-to=1024"
				/>
				<Container
					title="Correlated"
					type="image"
					src="https://framerusercontent.com/images/QVKFKT3dyGxloXfzzpurVKNMM6M.jpg?scale-down-to=1024"
				/>
			</div>
			<div className="w-full flex gap-6 pt-10 px-10 animate-group">
				<Container
					title="Channel 5"
					type="image"
					src="https://framerusercontent.com/images/AX9PukosNfGVcfXw3YapiYpl9g.jpg?scale-down-to=1024"
				/>
				<Container
					title="Ronald Abram"
					type="image"
					src="https://framerusercontent.com/images/BAXywubxN8sAhfJg3AgGgFI.jpg?scale-down-to=1024"
				/>
			</div>
			<div className="w-full flex gap-6 pt-10 px-10 animate-group">
				<Container title="Propeller" type="video" src="https://framerusercontent.com/assets/XuzMZ3Z1QQHKltPqRjzGnsWs27M.mp4" />
				<Container
					title="Schuh"
					type="image"
					src="https://framerusercontent.com/images/3WALBX7nnuG7p85CLjlVmWPDHw.jpg?scale-down-to=1024"
				/>
			</div>
			<div className="w-full flex gap-6 pt-10 px-10 animate-group">
				<Container title="Paper street" type="image" src="https://framerusercontent.com/images/e3moUZXfgtjYQY4ILakIMaz4n7s.jpg" />
				<Container title="OH.SUPPLY" type="video" src="https://framerusercontent.com/assets/SGjFvgcbK7s4yKh0xwuNjriMNII.mp4" />
			</div>
			<div className="w-full flex gap-6 pt-10 px-10 animate-group">
				<Container
					title="Monokel Eyewear"
					type="image"
					src="https://framerusercontent.com/images/aH1eUgCIIIrbJF7TUlaKAehoI.jpg?scale-down-to=1024"
				/>
				<Container
					title="Lawtrades"
					type="image"
					src="https://framerusercontent.com/images/UbS7rWmAwWxjtwM7oaWwRuGo.jpg?scale-down-to=1024"
				/>
			</div>
			<div className="w-full flex gap-6 pt-10 px-10 animate-group">
				<Container
					title="Basel world"
					type="image"
					src="https://framerusercontent.com/images/hQVBeiDNGU2TfeDJALuhawlcto.jpg?scale-down-to=1024"
				/>
				<Container title="NYCB" type="video" src="https://framerusercontent.com/assets/NieGBlxBdgpz9QCHV5Aj89rWjVg.mp4" />
			</div>
			<div className="header">
				<span className="fz-header-2 font-medium slideUp dark:text-white">Let's work together</span>
				<span className="fz-header-2 font-medium slideUp text-gray-400 cursor-pointer hover:text-gray-300">Get in touch</span>
			</div>
		</>
	);
}
export default React.memo(Body);
