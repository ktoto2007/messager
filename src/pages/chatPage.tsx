import {useState } from 'react'
import '../App.css'
import { useChat, useMessage} from '../stores'
import { useShallow } from 'zustand/react/shallow'

type ChatProps = {
  id: string
  name: string
  time: string
  src: string
}

const Chat = (props: ChatProps) => {
  return (
    <div className="chat-nav">
      <img src={props.src} alt=""/>
      <p className="name-nav">{props.name}</p>
      <div className='chat-time'>{props.time}</div>
    </div>
  );
}

type MessageProps = {
  id: string
  text: string;
  time: string;
}

const Message = (props: MessageProps) => {
  return (
    <div className="message">
      {props.text}
      <div className='message-time'>
        {props.time}
      </div>
    </div>
  );
}

const Messages = () => {
  const {messages} = useMessage(useShallow(state => ({
    messages: state.messages,
  })))

  return (
    <div>
      {messages.map(message => <Message {...message}/>)}
    </div>
  );
}

const ChatBottom = () => {
  const {addMessage} = useMessage(useShallow(state => ({
    addMessage: state.addMessage
  })))

  const [message, setMessage] = useState('')

  return (
    <div className="chat-bottom">
      <input value={message} className="user-input-field" placeholder="Сообщение" onChange={(e)=>setMessage(e.target.value)}/>
      <button onClick={e=> {
        addMessage({id: 'ei21094', text: message, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })})
        setMessage("")
      }} className="send button"><img src="src\assets\Email Send.svg" alt=""/></button>
      <div className="button">
        <img className="" src="src\assets\Microphone.svg" alt=""/>
      </div>
    </div>
  )
}

const Nav = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const {chats} = useChat(useShallow(state => ({
    chats: state.chats
  })))
  
  return (
    <div className="nav">
      <Search mutateValue={setSearchValue}/>
      <div className="dialogsWrapper">
        {chats.map((el) => <Chat key={el.id} {...el}/>)}
      </div>
    </div>
  );
}

type SearchProps = {
  mutateValue: React.Dispatch<React.SetStateAction<string>>
}

const Search = (props: SearchProps) => {
  return (
    <div className="search-container">
      <input className="search" placeholder='Поиск' onChange={(e)=>props.mutateValue(e.target.value)}/>
    </div>
  );
}

export function ChatPage() {
  return (
    <div className="container">
      <Nav/>
      <div className="chat-container">
        <div className="chat-header">
          <div className="header-left">
            <img className="chat-profile" src="src\assets\Profile.svg" alt=""/>
            <div className="name-and-activity">
              <p className="name-header">Чувак</p>
              <p className="activity">В сети</p>
            </div>
          </div>
          <img className="parameters" src="src\assets\Ellipsis.svg" alt=""/>
        </div>
        <div className="content">
          <div className="filler"></div>
          <Messages/>
        </div>
        <ChatBottom/>
      </div>
    </div>
  )
}
