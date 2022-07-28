import styled from "styled-components";
import shortenBgMobile from "./../images/bg-shorten-mobile.svg";
import shortenBgDesktop from "./../images/bg-shorten-desktop.svg";

export const StyledForm = styled.form`
  width: calc(100% - 2rem);
  max-width: 45rem;
  margin: 0 auto;
  padding: 2.2rem;
  display: flex;
  flex-direction: column;
  background-image: url(${shortenBgMobile});
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 60%;
  background-color: var(--dark-violet);
  border-radius: 0.5rem;
  position: absolute;
  margin: 0 auto;
  left: 50%;
  transform: translateX(-50%);
  top: -8rem;

  @media (min-width: 768px) {
    max-width: calc(110rem - 2rem);
    top: -6.5rem;
    padding: 4rem 4.5rem;
    flex-direction: row;
    gap: 2rem;
    background-image: url(${shortenBgDesktop});
    background-size: cover;
  }

  button {
    margin-top: 2rem;
    padding: 0.8rem;
    border-radius: 0.5rem;

    &:hover {
      opacity: 0.9;
    }

    @media (min-width: 768px) {
      margin-top: 0;
      flex: 1;
    }
  }
`;

export const InputField = styled.input`
  outline: 0;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  border: 0.2rem solid transparent;
  font-size: 1.4rem;
  color: var(--dark-violet);
  font-weight: 500;

  &::placeholder {
    font-family: var(--font-stack);
    font-size: 1.4rem;
    font-weight: 500;
    opacity: 0.7;
  }

  &:focus {
    border: 0.2rem solid var(--gray);
  }

  @media (min-width: 768px) {
    flex: 4;
  }
`;

export const ErrorText = styled.p`
  color: var(--red);
  font-size: 1.2rem;
  font-weight: 500;
  font-style: italic;
  margin-top: 0.5rem;

  @media (min-width: 768px) {
    position: absolute;
    left: 4.5rem;
    bottom: 1.8rem;
  }
`;
