import styled from "styled-components";

export const BackDrop = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const ModalContentContainer = styled.div`
  /* background-color: ${({ theme }) => theme.body}; */
  background-color: gray;
  padding: 3rem 2rem;
  width: 100%;
`;

export const ChargeInput = styled.input``;

export const ChargeTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
`;

export const ChargeSubmitButton = styled.div`
  display: flex;
  justify-content: center;
  justify-content: center;
  padding: 1rem 0.2rem;
  color: ${({ theme }) => theme.primary};
  border: ${({ theme }) => `1.5px solid ${theme.primary}`};
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 600;
  font-size: 1.4rem;
`;
