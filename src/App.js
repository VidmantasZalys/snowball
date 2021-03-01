import About from "./pages/About";
import Services from "./pages/Services";
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
			</Switch>
		</>
	);
}

export default App;
