import * as S from './styles'
import { useState,useEffect } from 'react';
import { useGetSendMessageMutation } from "../../services/whatsapp";
export function RightBox({chatName,chatId,idInstance,apiTokenInstance,contacts,setContact}) {
   const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Обновляем время каждую секунду

    return () => {
      clearInterval(interval);
    };
  }, []);
   const [messageText,setMessageText] = useState('')

   const [SendMessageMutation] = useGetSendMessageMutation()
   function sendMessage(params) {
    if (messageText !== '') {
      SendMessageMutation({idInstance,apiTokenInstance,chatId,message:messageText})
      setContact(prevContacts => prevContacts.map(item => {
         if (item.number === chatId) {
           return {
             ...item,
             chat: [
                ...item.chat,
               {
               type:'my',
               message: messageText,
               date: currentTime.toLocaleDateString(),
               time: currentTime.toLocaleTimeString()
             }
             ]
           };
         }
         return item;
       }));

    }
      setMessageText('')
   }
   return(
      <S.Wrapper>
         <S.Header>
            <S.HeaderTitle>{chatName}</S.HeaderTitle>
         </S.Header>
         <S.Content>
            <S.ChatBox>
               {
                  contacts.map((el,i)=>(
                     el.number === chatId ? 
                     el.chat.map((el1,i1)=>(
                        el1.type === 'my'? 
                        <S.MessageInfo key={i1} >
                           <S.MyMessage >
                              <S.MessageText>{el1.message}</S.MessageText> 
                              <S.MessageTime>{el1.time}</S.MessageTime> 
                           </S.MyMessage>
                        </S.MessageInfo>:
                        <S.MessageInfo key={i1} >
                           <S.NotMyMessage >
                              <S.MessageText>{el1.message}</S.MessageText> 
                              <S.MessageTime>{el1.time}</S.MessageTime> 
                           </S.NotMyMessage>
                     </S.MessageInfo>
                     )): ''
                   ))
               }
            </S.ChatBox>
            <S.MessageBox>
               <S.MessageInput placeholder='Введите сообщение' onInput={(e)=> setMessageText(e.target.value)} value={messageText}></S.MessageInput>
               <S.MessageSend onClick={sendMessage}>Отправить</S.MessageSend>
            </S.MessageBox>
            {/* {chatId !==='' ? <S.EmptyChat>Выберете чат для начала общения</S.EmptyChat> :<S.EmptyChat>sadsd    чат для начала общения</S.EmptyChat>} */}
         </S.Content>
      </S.Wrapper>
   )
} 