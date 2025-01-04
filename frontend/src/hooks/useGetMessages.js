import { useEffect, useState } from "react";
import useRoom from "../zustand/useRoom";
import toast from "react-hot-toast";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedRoom } = useRoom();

	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
				const res = await fetch(`/api/message/${selectedRoom._id}`);
				const data = await res.json();
				if (data.error) throw new Error(data.error);
				setMessages(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		if (selectedRoom?._id) getMessages();
	}, [selectedRoom?._id, setMessages]);

	return { messages, loading };
};
export default useGetMessages;