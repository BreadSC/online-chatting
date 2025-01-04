import useRoom from "../../zustand/useRoom"
import { useAuthContext } from "../../context/AuthContext"
import { getTime } from "../../utils/getTime";
const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedRoom} = useRoom()
  const fromMe = message.senderId === authUser._id
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic: selectedRoom.profilePic;
  const bubbleColor = fromMe ? 'bg-blue-500' : "";
  const formatTime = getTime(message.createdAt);
  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src={profilePic} alt="" />

            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleColor} pb-2`}>{message.message}</div>
        <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>{formatTime}</div>
        
    </div>
  )
}

export default Message