import styled from "styled-components";

export const StyledProgress = styled.div`
  margin-top: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  button:nth-of-type(1) {
    align-self: start;
  }

  button:nth-of-type(2) {
    align-self: end;
  }

  button {
    width: initial;
    position: relative;

    svg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    .left {
      left: 0.4rem;
    }

    .right {
      right: 0.4rem;
    }
  }
`;

export const StyledProgressBar = styled.div`
  width: 100%;
  height: 0.6rem;
  background-color: var(--dark-bluish);
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const StyledBar = styled.div`
  width: ${(props) => props.percentage}%;
  height: 100%;
  background-color: var(--light-primary);
  transition: all 0.3s ease-in-out;
`;
