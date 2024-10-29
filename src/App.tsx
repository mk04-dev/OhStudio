import { useState } from "react";
import "./App.css";
import Body from "./pages/home/Body";
import Header from "./pages/home/Header";
function App() {
	const [darkTheme, setDarkTheme] = useState<boolean>(false);
	return (
		<div className={darkTheme ? "dark" : "lg"}>
			<div className="relative flex flex-col items-center dark:bg-black">
				<div
					className="fixed top-10 right-10 w-5 h-5 float-left rounded-full cursor-pointer bg-black dark:bg-white"
					onClick={() => setDarkTheme(!darkTheme)}
				/>
				<div className="max-width">
					<Header />
					<Body />
				</div>
			</div>
		</div>
	);
}

export default App;
