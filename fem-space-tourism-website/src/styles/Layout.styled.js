import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 76.25rem;
  margin: 0 auto;
`;

export const ContentWrapper = styled.section`
  text-align: center;
  padding-inline: 1.5rem;
  width: 100%;
  max-width: 68.75rem;
  margin: 0 0 0 auto;

  span {
    opacity: 0.25;
    margin-right: 1.125rem;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    padding: 2.5rem 2.375rem 3.875rem 2.375rem;
  }

  @media (min-width: 1024px) {
    padding: 4.75rem 2.375rem 7.375rem 2.375rem;
  }

  @media (min-width: 1385px) {
    padding: 4.75rem 0 7.375rem 0;
  }
`;
