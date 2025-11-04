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