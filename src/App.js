import About from "./pages/About";
import Services from "./pages/Services";
import Styled from "styled-components";
import { Route, Switch } from "react-router-dom";

//global styles
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
	return (
		<div>
			<GlobalStyle />
			<Switch>
				<Route path="/" exact>
					<About />
				</Route>
				<Route path="/services" exact>
					<Services />
				</Route>
			</Switch>
		</div>
	);
}

const ContainerDiv = Styled.div`
	width: 1200px;
	margin: 0 auto;
`;

export default App;
