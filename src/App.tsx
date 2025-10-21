import { useState } from 'react'
import './App.css'

// сделать список с объектами диалогов
// сделать список с объектами сообщений
const messages = [{id: '40e2af48-4559-44c2-b964-ac3c2542e278', text: 'hello', time: '10:30'}, {id: 'grhtrnty', text: 'hi', time: '10:32'}]
const dialogs = [{id: '3a49968e-be78-4593-8440-8f60d168a8f2', name: 'Чувак'}, {name: 'Чувак'}]

type DialogProps = {
  name: String
}

const Dialog = (props: DialogProps) => {
  // название диалога должно менять 
  // из значений пропсов 
  return (
    <div className="chat-nav">
      <img src="src\assets\Profile.svg" alt=""/>
      <p className="name-nav">{props.name}</p>
    </div>
  );
}

type MessageProps = {
  id: String
  text: String;
  time: string;
}

const Message = (props: MessageProps) => {
  //  добавить возможность менять текст у сообщения через пропсы. 
  // + дату, время отправки/получения
  return (
    <div className="message">
      {props.text}
      <div className='time'>
        {props.time}
      </div>
    </div>
  );
}

const Search = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInput = (event: React.FormEventHandler<HTMLDivElement>) => {
    setInputValue(event.target.value)
  }

  return (
    <div className="search-contanier">
      <div className="search">
        <img src="src\assets\Search.svg" alt=""/>
        <p>Поиск</p>
      </div>
    </div>
  );
}

const Nav = () => {
  return (
    <div className="nav">
      <Search/>
      <div className="dialogsWrapper">
        {dialogs.map((el) => <Dialog name={el.name}/>)}
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
            <div className="chat-bottom">
                <input className="user-input-field" placeholder="Сообщение"/>
                <button className="send button"></button>
                <div className="button">
                    <img className="" src="src\assets\Microphone.svg" alt=""/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App