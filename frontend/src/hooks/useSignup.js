
import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext()
  const signup = async({fullName, username, password, confirmPassword, gender}) => {
    const sucess = handleInputErrors({fullName, username, password, confirmPassword, gender})
    if(!sucess) return;
    setLoading(true);
    try{
      const res = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

      localStorage.setItem("room-user", JSON.stringify(data));
      setAuthUser(data);


    } catch (error){
      toast.error(error.message)
    } finally{
      setLoading(false);
    }
  };
  return { loading, signup };
}

export default useSignup

function handleInputErrors({fullName, username, password, confirmPassword, gender}){
  if(!fullName || !username || !password || !confirmPassword || !gender){
    toast.error('Vui lòng nhập đầy đủ thông tin');
    return false;
  }
  if(password !== confirmPassword){
    toast.error('Mật khẩu không trùng');
    return false;
  }
  if(password.length < 6){
    toast.error('Mật khẩu phải có ít nhất 6 ký tự');
    return false;
  }
  return true;
}