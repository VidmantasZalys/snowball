import About from "./pages/About";
import Styled from "styled-components";

//global styles
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
	return (
		<div>
			<GlobalStyle />
			<About />
		</div>
	);
}

const ContainerDiv = Styled.div`
width: 1200px;
margin: 0 auto;
`;

export default App;
