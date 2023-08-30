import * as S from './styles.js'
import { useState,useEffect } from 'react'
import { LeftBox } from '../../components/leftBox/index.jsx'
import {RightBox}from '../../components/RightBox/index.jsx'
import { useGetReceiveNotificationMutation,useDeleteNotificationMutation } from "../../services/whatsapp";
export function Main() {
   const [getNotification, {data}] = useGetReceiveNotificationMutation();
   const [deleteNotification] = useDeleteNotificationMutation();
   const idInstance = localStorage.getItem('idInstance')
   const apiTokenInstance = localStorage.getItem('apiTokenInstance')
   const [chatName,setChatName] = useState('')
   const [chatId,setChatId] = useState('')
   const [contacts, setContact] = useState([]); 
   const [currentChat, setCurrentChat] = useState(''); 
   function changeChatId(id,name) {
      setChatId(id)
      setChatName(name)
   } 
   function test(params) {
      getNotification({idInstance,apiTokenInstance})
   }
   console.log(contacts);
   // setInterval(() => {
      
   // }, 5000);
   useEffect(()=>{
      console.log(data);
     
      if(data?.body.typeWebhook === 'incomingCall'){
         deleteNotification({idInstance,apiTokenInstance,id:data.receiptId})
      }else if(data?.body.typeWebhook === 'incomingMessageReceived'){
         if (data.body.messageData.extendedTextMessageData?.text) {
            if (!contacts.some(obj => obj.number === data.body.senderData.chatId)) {
               setContact(prevContacts => [...prevContacts, {name:data.body.senderData.chatName,number:data.body.senderData.chatId,chat:[]}]);
            }
            const formattedDate = new Date(data.body.timestamp * 1000).toLocaleDateString();
            const formattedTime = new Date(data.body.timestamp * 1000).toLocaleTimeString();
            setContact(prevContacts => prevContacts.map(item => {
               if (item.number === data.body.senderData.chatId) {
                 return {
                   ...item,
                   chat: [
                      ...item.chat,
                     {
                     type:'not my',
                     message: data.body.messageData.extendedTextMessageData.text,
                     date:formattedDate,
                     time:formattedTime
                   }
                   ]
                 };
               }
               return item;
             }));
         }
         deleteNotification({idInstance,apiTokenInstance,id:data.receiptId})
    
         
      }else if(data?.body.typeWebhook === 'outgoingMessageStatus'){
         console.log('outgoingMessageStatus');
         deleteNotification({idInstance,apiTokenInstance,id:data.receiptId})
      }else if(data?.body.typeWebhook === 'stateInstanceChanged'){
         console.log('outgoingMessageStatus');
         deleteNotification({idInstance,apiTokenInstance,id:data.receiptId})
      }
      test()
   }, [data])
   return(
      <S.Container>
         <LeftBox  idInstance={idInstance} apiTokenInstance={apiTokenInstance} contacts={contacts} currentChat={currentChat} setCurrentChat={setCurrentChat}  setContact={setContact} changeChatId={changeChatId}></LeftBox>
         <RightBox idInstance={idInstance} apiTokenInstance={apiTokenInstance} contacts={contacts} currentChat={currentChat} setCurrentChat={setCurrentChat} setContact={setContact} chatName={chatName} chatId={chatId}></RightBox>
      </S.Container>
   )
}