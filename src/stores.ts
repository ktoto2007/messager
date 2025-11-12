import {create} from 'zustand'

export type MessageType = {
    id: string
    sender_id: string,
    chatId: string,
    text: string,
    time: string,
}

interface MessagesStore {
    messages: MessageType[]
    currentChatId: string
    addMessage: (newMessage: MessageType) => void
    setCurrentChatId: (chatId: string) => void
}

export const useMessage = create<MessagesStore>((set) => ({
    messages: [],
    currentChatId: '',
    addMessage: (newMessage) => {
        set(
            state=>({...state, messages: [...state.messages, newMessage]})
        )
    },
    setCurrentChatId: (chatId) => {
        set(
            state=>({...state, currentChatId: chatId})
        )
    }
}))

type ChatType = {
    id: string,
    name: string,
    time: string,
    src: string,
}

interface ChatsStore {
    chats: ChatType[]
}

export const useChat = create<ChatsStore>((set) => ({
    chats: [{id: 'i34rfdu88', name: 'Чувак', time: '10:30', src: "src/assets/Profile.svg"}, {id: 'i34ru88', name: 'Чувак 2', time: '10:50', src: "src/assets/Profile.svg"}]
}))