import {create} from 'zustand'

const useRoom = create((set) => ({
    selectedRoom: null,
    setSelectedRoom: (selectedRoom) => set({selectedRoom}),
    messages:[],
    setMessages: (messages) => set({messages}),
}));

export default useRoom