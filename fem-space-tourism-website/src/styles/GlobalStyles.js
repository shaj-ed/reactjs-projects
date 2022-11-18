import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    /* CSS Variables */
    :root {
        // Colors
        --clr-dark: hsl(230, 35%, 7%);
        --clr-light: hsl(231, 77%, 90%);
        --clr-white: hsl(0, 0%, 100%);

        // Fonts
        --font-primary: 'Bellefair', serif;
        --font-secondary: 'Barlow Condensed', sans-serif;
        --font-body: 'Barlow', sans-serif;
    }

    /* Reset */
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul, li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    html:focus-within {
         scroll-behavior: smooth;
    }

    body {
        background-color: var(--clr-dark);
        overflow-x: hidden;
    }

    button {
        border: 0;
        outline: 0;
    }

    #root {
        width: 100%;
    }

    main {        
        width: 100%;
        min-height: 100vh;
        display: grid;
        align-items: start;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
`;

export default GlobalStyle;
