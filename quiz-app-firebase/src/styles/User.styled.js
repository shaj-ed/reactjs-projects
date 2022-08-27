import styled from "styled-components";

export const StyledUser = styled.div`
  margin-left: auto;
  margin-right: 2rem;
  display: flex;
  gap: 1.5rem;
  align-items: center;
`;

export const StyledUserImage = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 0.2rem solid var(--light-primary);
`;

export const StyledUsername = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--light-secondary);
`;
