import { styled } from "styled-components";

export const LoginWrapper = styled.div`
  width: 300px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #202c33;
  border-radius: 4px;
  padding: 8px;
`;
export const Header = styled.h1`
  text-align: center;
  margin-bottom: 16px;
`;
export const Error = styled.div`
  color:#fa5555;
  font-size: 16px;
  margin-bottom: 8px;
  text-align: center;
`;
export const Input = styled.input`
  width: 100%;
  color: #fff;
  border: 0;
  background: #111b21;
  outline: none;
  border-radius: 4px;
  margin-bottom: 8px;
  height: 30px;
  padding: 8px 10px;
  font-size: 16px;
`;
export const Button = styled.button`
  text-align: center;
  font-size: 16px;
  color: #fff;
  display: block;
  margin: 0 auto;
  background: #111b21;
  border: 0;
  padding: 2px 12px;
  border-radius: 4px;
`;

