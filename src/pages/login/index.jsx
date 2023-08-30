import * as S from './styles'
import { useState,useEffect } from 'react';
import { useNavigate  } from 'react-router-dom'
import { useDispatch } from "react-redux";
import {
   update_token,
 } from "../../store/actions/creators/auth";
 import { useGetInfoMutation,useSetSettingsMutation } from "../../services/whatsapp";
 export function Login() {

   const navigate = useNavigate();
   const dispatch = useDispatch();
   
   const [GetSetSettings, {data:settings}] = useSetSettingsMutation();
   const [GetInfo, {data}] = useGetInfoMutation();
   const [idInstance, setidInstance] = useState('')
   const [apiTokenInstance, setapiTokenInstance] = useState('')
   const [errormessage, setErrormessage] = useState('')
   function login() {
      if (idInstance === '' && apiTokenInstance === ''){
         setErrormessage('Заполните пустые поля')
      }else{
         dispatch(update_token(idInstance, apiTokenInstance));
         GetInfo({idInstance, apiTokenInstance})
      }
   }
   useEffect(()=>{
      console.log(data);
      if(data?.wid){
         GetSetSettings({idInstance, apiTokenInstance})
         localStorage.setItem('idInstance',idInstance)
         localStorage.setItem('apiTokenInstance',apiTokenInstance)
         localStorage.setItem('userNumber',data.wid)
         navigate('/') 
      }else if (data?.wid === ''){
         setErrormessage('Вы не авторизованны на сайте green-api.com')
      }else{
         setErrormessage('Вы ошиблись в написании idInstance или apiTokenInstance')
      }
   },[data])

   return(
      <S.LoginWrapper>
         <S.Header>Вход</S.Header>
         <S.Input onInput={(e) => setidInstance(e.target.value)} placeholder='IdInstance'/>
         <S.Input onInput={(e) => setapiTokenInstance(e.target.value)} placeholder='ApiTokenInstance'/>
         {errormessage && <S.Error>{errormessage}</S.Error> }
         <S.Button onClick={login}>Войти</S.Button>
      </S.LoginWrapper>
   )
}