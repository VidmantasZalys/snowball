import About from "./pages/About";
import Services from "./pages/Services";
import OurStore from "./pages/OurStore";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import { StoreData } from "./data";

//global styles
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
	const [items, setItems] = useState(StoreData);

	return (
		<>
			<GlobalStyle />
			<Switch>
				<Route path="/" exact>
					<About />
				</Route>
				<Route path="/services">
					<Services />
				</Route>
				<Route path="/ourstore">
					<OurStore items={items} />
				</Route>
			</Switch>
		</>
	);
}

export default App;
