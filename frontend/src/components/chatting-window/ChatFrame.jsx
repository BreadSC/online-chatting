import { Box, IconButton } from "@mui/material";

import "../../styles/chatting-window/chat-frame.css";
import ChatContent from "./ChatContent";
import MessageInput from "./MessageInput";
import useRoom from "../../zustand/useRoom";

import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
const ChatFrame = () => {
  const { selectedRoom, setSelectedRoom } = useRoom();
  //update chatframe
  useEffect(() => {
    return () => setSelectedRoom(null);
  }, [setSelectedRoom]);

  return (
    <Box className="chat-frame">
      {!selectedRoom ? (
        <NoRoomSelected />
      ) : (
        <>
          <Box className="room-title">
            <Stack direction="row" spacing={1} sx={{ paddingTop: "5px" }}>
              <IconButton>
                <Avatar alt="name" src={selectedRoom.profilePic} />
              </IconButton>

              <Box sx={{ paddingTop: "5px" }}>
                <Typography variant="h4">{selectedRoom.fullName}</Typography>
              </Box>
            </Stack>
          </Box>
          <ChatContent />
          <MessageInput />
        </>
      )}
    </Box>
  );
};

export default ChatFrame;

const NoRoomSelected = () => {
  const { authUser } = useAuthContext();
  return <h1> Xin chào {authUser.fullName}</h1>;
};
