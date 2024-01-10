import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --headingColor: aqua;
        --headingSize: 48px;
    }

    body {
        background-color: var(--theme);
    }
    h1 {
        color: var(--headingColor)
    }
    html[data-theme=light] {
        --theme: white;
        --headingColor: black;
    }
    html[data-theme=dark] {
        --theme: black;
        --headingColor: white;
    }
`

export default GlobalStyles;