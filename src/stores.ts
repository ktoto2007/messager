import {create} from 'zustand'

export type MessageType = {
    id: string,
    text: string,
    time: string,
}

interface MessagesStore {
    messages: MessageType[]
    addMessage: (newMessage: MessageType) => void
}

export const useMessage = create<MessagesStore>((set) => ({
    messages: [],
    addMessage: (newMessage) => {
        set(
            state=>({...state, messages: [...state.messages, newMessage]})
        )
    }
}))

type ChatType = {
    id: string,
    name: string,
    time: string
    src: string
}

interface ChatsStore {
    chats: ChatType[]
}

export const useChat = create<ChatsStore>((set) => ({
    chats: [{id: 'i34ru88', name: 'Чувак', time: '10:30', src: "src/assets/Profile.svg"}, {id: 'i34ru88', name: 'Папа', time: '10:50', src: "src/assets/Profile.svg"}]
}))