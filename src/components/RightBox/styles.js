import { styled } from "styled-components";

export const Wrapper = styled.div`
   flex: 0 0 70%;
    max-width: 70%;
    display: flex;
    flex-direction: column;
    z-index: 101;
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

export const Content = styled.div`
background:#283136;
height:100%;   
position:relative;
`

export const EmptyChat = styled.h3`
   margin:auto 0;
   position:absolute;
   top:50%;
   left:50%;
   transform:translate(-50%,-50%);
   text-align:center;
`
export const ChatBox = styled.div`
display: flex;
height: calc(100% - 50px);
flex-direction: column;
justify-content: end;
`
export const MessageBox = styled.div`
   width:100%;
   position:absolute;
   bottom:1px;
   padding: 5px 10px;
   background:#202c33;
   display:flex;
   justify-content:space-between;
   align-items:center
   
`
export const MessageInfo = styled.div`
display:flex;
min-width:100px;
margin-bottom:10px;
`
export const MyMessage = styled.div`
margin-left:auto;
background:#005c4b;
margin-right:8px;
padding:7px;
border-radius:7.5px;
max-width:65%;
`
export const NotMyMessage = styled.div`
margin-right:auto;
background:#202c33;
margin-left:8px;
padding:7px;
border-radius:7.5px;
max-width:65%;
`
export const MessageSend = styled.div`
color:#fff;
font-size:20px;
   cursor:pointer;
`
export const MessageInput = styled.input`
   width: 90%;
   color: #fff;
   border: 0;
   background: #2a3942;
   outline: none;
   border-radius: 8px;
   height: 30px;
   padding: 8px 10px;
   font-size: 16px;
`
export const MessageText = styled.div`

`
export const MessageTime = styled.div`
   color:#ffffff99;
   font-size: .6875rem;
`