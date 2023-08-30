import { styled } from "styled-components";

export const Wrapper = styled.div`
   flex: 0 0 30%;
    max-width: 30%;
    display: flex;
    flex-direction: column;
    overflow: visible;
    height:100%
`
export const Header = styled.div`
   padding:16px;
   background:#202c33;
   display:flex;  
   justify-content:space-between;
   
`
export const HeaderPlus = styled.h2`
cursor:pointer;
   
`
export const HeaderTitle = styled.h2`
   
`
export const Contact = styled.div`
   height:calc(100% - 60px);
   background:#202c33;
   position:relative;
   overflow:auto;
`
export const ContactItem = styled.div`
  background:#111b21;
  cursor:pointer;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
  height: 72px;
  border-top:1px solid #8696a026;
  padding:13px
`
export const ContactName = styled.h3`
   color:#fff;
`
export const ContactNumber = styled.h4`
   color:#7f7f7f;
`
export const Modal = styled.div`
   width: 100vw;
   height: 100vh;
   background: rgba(0,0,0,0.5);
   position: fixed;
   z-index: 1000;
   left:0;
   top:0;
   display:none;
   align-items:center;
   justify-content:center;
`
export const ModalContent = styled.div`
width:500px
`  
export const ModalHeader = styled.div`
padding:16px;
background:#202c33;
display:flex;  
justify-content:space-between;
`
export const ModalBody = styled.h2`
padding:16px;
background:#202c33;
border-top:1px solid #8696a026;

`
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

export const Inputwrapper = styled.div`
   display:flex;
   justify-content:space-between;
`
export const InputNumber = styled.input`
  width: 75%;
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
export const Select = styled.select`
  width: 20%;
  color: #fff;
  border: 0;
  background: #111b21;
  outline: none;
  border-radius: 4px;
  margin-bottom: 8px;
  height: 30px;
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
export const EmptyContact = styled.h3`
   margin:auto 0;
   position:absolute;
   top:50%;
   left:50%;
   transform:translate(-50%,-50%);
   text-align:center;
`