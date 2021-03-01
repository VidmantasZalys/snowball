import About from "./pages/About";
import Services from "./pages/Services";
import OurStore from "./pages/OurStore";
import { Route, Switch } from "react-router-dom";

//global styles
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
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
				<Route>
					<OurStore />
				</Route>
			</Switch>
		</>
	);
}

export default App;
