import styled from "styled-components";

export const ScrollContainer = styled.div`
  background-color: ${({ theme }) => theme.white};
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  border-radius: 5px;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.first};
  box-shadow: 0 2px 7px rgba(0,0,0,.5);
`;