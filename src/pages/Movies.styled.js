import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 20px;
`;
export const Input = styled.input`
  display: inline-block;
  width: 200px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  border-bottom: 1px solid black;
  margin-right: 10px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Button = styled.button`
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  border: 0;
  background: orangered;
  color: white;
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
