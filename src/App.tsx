import { useState } from 'react'
import './App.css'

const messages = [{id: '40e2af48-4559-44c2-b964-ac3c2542e278', text: 'bye ', time: '10:30'}, {id: 'grhtrnty', text: 'hi', time: '10:32'}]
const dialogs = [{id: '3a49968e-be78-4593-8440-8f60d168a8f2', name: 'Чувак'}, {id: '3a49968e-be78-4593-8440-8f60d168a8f2', name: 'Чувак'}]

type DialogProps = {
  id: string
  name: string
}

const Dialog = (props: DialogProps) => {
  return (
    <div className="chat-nav">
      <img src="src\assets\Profile.svg" alt=""/>
      <p className="name-nav">{props.name}</p>
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
      <div className='time'>
        {props.time}
      </div>
    </div>
  );
}

type SearchProps = {
  mutateValue: React.Dispatch<React.SetStateAction<string>>
}

type MessageInputProps = {
  mutateValue: React.Dispatch<React.SetStateAction<string>>
}

const MessageInput = (props: MessageInputProps) => {
  return (
    <input className="user-input-field" placeholder="Сообщение" onChange={(e)=>props.mutateValue(e.target.value)}/>
  );
}

const Search = (props: SearchProps) => {
  return (
    <div className="search-contanier">
      <input className="search" placeholder='Поиск' onChange={(e)=>props.mutateValue(e.target.value)}/>
    </div>
  );
}

const ChatBottom = () => {
  const [messageValue, setMessageValue] = useState<string>("")

  return (
    <div className="chat-bottom">
      <MessageInput mutateValue={setMessageValue}/>
      <button className="send button"><img src="src\assets\Email Send.svg" alt=""/></button>
      <div className="button">
        <img className="" src="src\assets\Microphone.svg" alt=""/>
      </div>
    </div>
  )
}

const Nav = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <div className="nav">
      <Search mutateValue={setSearchValue}/>
      <div className="dialogsWrapper">
        {dialogs.map((el) => <Dialog {...el}/>)}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="contanier">
        <Nav/>
        <div className="chat-contanier">
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
                {messages.map((el) => <Message {...el}/>)}
            </div>
            <ChatBottom/>
        </div>
    </div>
  )
}


export default App