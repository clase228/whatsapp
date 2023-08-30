import * as S from './styles'
import { useState } from 'react';

export function LeftBox({changeChatId,idInstance,apiTokenInstance,contacts, setContact,setCurrentChat}) {
   const [name,setName] = useState('')
   const [number,setNumber] = useState('')
   const [code,setCode] = useState('@c.us')
   const [modalStatus,setModalStatus] = useState('none')
   const userNumber = localStorage.getItem('userNumber')


  function addContact(params) {
   setModalStatus('none')
   let contact = {}
   if (name !== '' && number !== '') {
      contact.name = name
      contact.number = number
      setContact([...contacts, {name:name,number:number+code,chat:[]}]);
     
   }
   setName('')
   setNumber('')
   setCode('@c.us')
  }
  function ChatId(number,name) { 
   changeChatId(number,name)
  }
   return(
      <S.Wrapper> 
         <S.Header>
            <S.HeaderTitle>{userNumber}</S.HeaderTitle>
            <S.HeaderPlus onClick={() =>setModalStatus('flex')}>+</S.HeaderPlus>
         </S.Header>
         <S.Contact>
            { contacts.length !== 0 ? contacts.map((el,i)=>(
              <S.ContactItem onClick={() =>ChatId(el.number,el.name)} key={i}>
               <S.ContactName >{el.name}</S.ContactName>
               <S.ContactNumber >{el.number}</S.ContactNumber>
              </S.ContactItem>
            )):<S.EmptyContact>В чатах пусто для начало работы добавте чат</S.EmptyContact>
         }
         </S.Contact>
         <S.Modal style={{display: modalStatus}}>
         <S.ModalContent>
            <S.ModalHeader>Добавление контакта</S.ModalHeader>
         <S.ModalBody >
            <S.Input placeholder='Имя' value={name} onInput={(e) =>setName(e.target.value)} ></S.Input>
            <S.Inputwrapper>
            <S.InputNumber placeholder="Номер телефона или чата (без знаков)" type="number" value={number} onInput={(e) => setNumber(e.target.value)}></S.InputNumber>
            <S.Select value={code} onChange={(e)=> setCode(e.target.value)}>
               <option value='@c.us'>@c.us</option>
               <option value='@g.us'>@g.us</option>
            </S.Select>
            </S.Inputwrapper>
            <S.Button onClick={() => addContact()}>Добавить</S.Button>
         </S.ModalBody>
         </S.ModalContent>
         
         </S.Modal>
      </S.Wrapper>
   )
} 