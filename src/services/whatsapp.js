import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const whatsappApi = createApi({
   reducerPath: "whatsappApi",
   baseQuery: fetchBaseQuery({
      baseUrl: "https://api.green-api.com/",
   }),
  endpoints: (builder) => ({
   

    getInfo: builder.mutation({
      query(data) {
         const {idInstance,apiTokenInstance} = data
         return {
            url: `waInstance${idInstance}/getSettings/${apiTokenInstance}`,
           method: "GET",
           
         };
       },
   
    }),
    getSendMessage: builder.mutation({
      query(data) {
         const {idInstance,apiTokenInstance,chatId,message} = data
    
         return {
            url: `waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
           method: "POST",
           body:{
            chatId:chatId,
            message:message
           }
         };
       },
   
    }),
    getReceiveNotification: builder.mutation({
      query(data) {
         const {idInstance,apiTokenInstance} = data
         return {
            url: `waInstance${idInstance}/receiveNotification/${apiTokenInstance}`,
           method: "GET",
           
         };
       },
    }),
    deleteNotification: builder.mutation({
      query(data) {
         const {idInstance,apiTokenInstance,id} = data
         return {
            url: `waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${id}`,
           method: "DELETE",
           
         };
       },
    }),
    setSettings: builder.mutation({
      query(data) {
         const {idInstance,apiTokenInstance} = data
    
         return {
            url: `waInstance${idInstance}/setSettings/${apiTokenInstance}`,
           method: "POST",
           body:{
            "webhookUrl": "",
            "webhookUrlToken": "",
            "delaySendMessagesMilliseconds": 1000,
            "markIncomingMessagesReaded": "no",
            "markIncomingMessagesReadedOnReply": "no",
            "outgoingWebhook": "yes",
            "outgoingMessageWebhook": "no",
            "outgoingAPIMessageWebhook": "no",
            "incomingWebhook": "yes",
            "stateWebhook": "yes",
            "keepOnlineStatus": "no"
        }
         };
       },
   
    }),


    
  }),
});


export const { useGetInfoMutation, useGetSendMessageMutation,useGetReceiveNotificationMutation, useDeleteNotificationMutation, useSetSettingsMutation  } = whatsappApi;