import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: Raleway;
}
html{
    @media (max-width: 1700px){
        font-size: 80%;
    }
    @media (max-width: 1300px){
        
    }
}
body{
    background:#1b1b1b;
    font-family: 'Inter', sans-serif;
    
}



`;
