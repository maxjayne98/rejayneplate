import styled from "styled-components";

export const AddChargeBtn = styled.div`
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
