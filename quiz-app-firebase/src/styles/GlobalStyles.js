import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        --dark-primary: #2C3639;
        --dark-secondary: #411530;
        --light-secondary: #efefef;
        --light-primary: #EAE3D2;

        --dark-bluish: #2B4865;
        --card-bg-dark: #2c3333;
    }

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body {
        font-size: 62.5%;
        font-family: "Nunito Sans", sans-serif;
        background-color: var(--dark-primary);
    }

    main {
        width: 100%;
        max-width: 90rem;
        margin: 0 auto;
    }

    a {
        text-decoration: none;
    }
`;

export default GlobalStyles;
