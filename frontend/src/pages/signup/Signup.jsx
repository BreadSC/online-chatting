import { Link } from "react-router-dom"
import GenderCheckBox from "./GenderCheckBox"
import { useState } from "react"
import useSignup from "../../hooks/useSignup"

//Form đăng ký
const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""

  })
  const {loading, signup} = useSignup()
  const handleCheckboxChange = (gender) => {
    setInputs({...inputs,gender})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs)
    await signup(inputs)
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter 
      backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500">Online Chatting</span>

        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Họ tên</span>
            </label>
            <input type="text" placeholder="Nhập họ và tên" className="w-full input input-bordered h-10" 
              value={inputs.fullName}
              onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Tên đăng nhập</span>
            </label>
            <input type="text" placeholder="Nhập tên đăng nhập" className="w-full input input-bordered h-10" 
              value={inputs.username}
              onChange={(e) => setInputs({...inputs, username: e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Mật khẩu</span>
            </label>
            <input type="password" placeholder="Nhập mật khẩu" className="w-full input input-bordered h-10" 
              value={inputs.password}
              onChange={(e) => setInputs({...inputs, password: e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Xác nhận mật khẩu</span>
            </label>
            <input type="password" placeholder="Nhập lại mật khẩu" className="w-full input input-bordered h-10" 
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
            />
          </div>

          <GenderCheckBox onCheckboxChange = {handleCheckboxChange} selectedGender={inputs.gender}/>

          <Link className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block" to={"/login"}>
            Already have an account?
          </Link>
          <div>
            {/* <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button> */}
            <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
