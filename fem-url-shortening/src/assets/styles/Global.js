import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    :root {
        --font-stack: 'Poppins', sans-serif;
        --cyan: hsl(180, 66%, 49%);
        --dark-violet: hsl(257, 27%, 26%);
        --red: hsl(0, 87%, 67%);
        --bg-secondary: hsl(225,33%, 95%);

        --gray: hsl(0, 0%, 75%);
        --grayish-violet: hsl(257, 7%, 63%);
        --very-dark-blue: hsl(255, 11%, 22%);
        --very-dark-violet: hsl(260, 8%, 14%);
    }

    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-size: 62.5%;
        font-family: var(--font-stack);
        overflow-x: hidden;
    }

    main {
        width: 100%;
    }

    a {
        text-decoration: none;
    }

    ul, li {
        list-style: none;
    }

    button {
        border: 0;
        outline: 0;
        cursor: pointer;
        transition: all .3s ease-in-out;
    }

`;

export default GlobalStyles;
