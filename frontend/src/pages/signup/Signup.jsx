import { Link } from "react-router-dom"
import GenderCheckBox from "./GenderCheckBox"


const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter 
      backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500">Online Chatting</span>

        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Họ tên</span>
            </label>
            <input type="text" placeholder="Nhập họ và tên" className="w-full input input-bordered h-10" />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Tên đăng nhập</span>
            </label>
            <input type="text" placeholder="Nhập tên đăng nhập" className="w-full input input-bordered h-10" />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Mật khẩu</span>
            </label>
            <input type="password" placeholder="Nhập mật khẩu" className="w-full input input-bordered h-10" />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Xác nhận mật khẩu</span>
            </label>
            <input type="password" placeholder="Nhập lại mật khẩu" className="w-full input input-bordered h-10" />
          </div>

          <GenderCheckBox />

          <Link className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block" to={"/login"}>
            Already have an account?
          </Link>
          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
