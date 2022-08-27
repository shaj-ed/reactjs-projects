import styled from "styled-components";

export const StyledHome = styled.main`
  padding: 2rem;
  width: 100%;
  max-width: 90rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2.5rem;
  justify-items: center;
`;
