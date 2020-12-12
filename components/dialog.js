import ButtonItem from "./form-items/button"
import TextItem from "./form-items/text-item"
import { useState, useEffect, useRef } from "react"
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { onCreateMessage } from "../src/graphql/subscriptions";
import Form from "antd/lib/form/Form";
import { createMessageAndGet } from "../utils/graphql-utils";
import Message from "./message";


const Dialog = ({ id,
    isAllowed,
    creatorUsername,
    orderId,
    orderTitle,
    orderStingCode,
    offerId,
    clientId,
    clientUsername,
    candidateId,
    candidateUsername,
    messages: messagesItems,
    user
}) => {

    const [messages, setMessages] = useState(messagesItems.items)

    const [newMessage, setNewMessage] = useState(null)

    const formRef = useRef(null)

    useEffect(()=>{
        const subscription = API.graphql(
            graphqlOperation(onCreateMessage)
        ).subscribe({
            next: ({ provider, value }) => {
                const newMessage = value.data.onCreateMessage
                setNewMessage(newMessage)
             }
        }) 
    }, [])

    useEffect(()=>{
        if(newMessage){
            const newMessageText = newMessage.message
            const updMessageIndex = messages.findIndex(message=>((message.message===newMessageText) && message.isSending))
            if(updMessageIndex>=0){
                const updMessages = [
                    ...messages.slice(0, updMessageIndex),
                    {...messages[updMessageIndex], isSending: false},
                    ...messages.slice(updMessageIndex+1)
                ]
                setMessages(updMessages)
            }else{
                setMessages(messages=>[...messages, newMessage])
            }        
        }
    }, [newMessage])


    const onFinish = async values =>{
        const props = {creatorId: user.id, dialogId: id, isNew: true, message: values.info, date: new Date()}
        setMessages(messages=>[...messages, {...props, isSending: true, key: Math.random()}])
        try {
            await createMessageAndGet(props)
        } catch (error) {
            console.log('dialog on finish error', error)
            setMessages(messages=>[...messages, {...props, isSending: false, isError: true}])
        }
        formRef.current.setFieldsValue({ 
            info: ''
        })
    }

    const repeat = async ({date, message})=>{
        const idx = messages.findIndex(msg=>(msg.date===date && msg.message===message))
        const newDate = new Date()
        if(idx>=0){
            const updMessages = [
                ...messages.slice(0, idx),
                {...messages[idx], isSending: true, isError: false, date: newDate},
                ...messages.slice(idx+1)
            ]
            setMessages(updMessages)
            try {
                await createMessageAndGet({...messages[idx], date: newDate})
            } catch (error) {
                console.log('dialog repeat error', error)
                const updMessages = [
                    ...messages.slice(0, idx),
                    {...messages[idx], isSending: false, isError: true, date: newDate},
                    ...messages.slice(idx+1)
                ]
                setMessages(updMessages)
            }            
        }
    }

    return (
        <div className="dialog center">
            <div className="title">{orderTitle}</div>
            <div>{clientUsername}</div>
            
            <Form
                name="dialog"
                onFinish={onFinish}
                autoComplete="off"
                ref={formRef}
            >
                <ButtonItem title="Send a message"/>
                <TextItem text="write a message..."/>   
            </Form>  

            {messages.map(message=><Message key={message.id} {...message} repeat={repeat}/>)}
        </div>
    )
}

export default Dialog
