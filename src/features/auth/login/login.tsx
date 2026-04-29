function Login() {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-[#667eea] to-[#764ba2]">
      <form className="bg-white p-[30px] rounded-[12px] w-[320px] shadow-[0_10px_25px_rgba(0,0,0,0.2)]">
        <h2 className="text-center mb-5 text-[#333] text-2xl font-bold">
          Login
        </h2>

        <div className="flex flex-col mb-[15px]">
          <label className="mb-[5px] text-[14px] text-[#555]">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            className="p-[10px] border border-[#ccc] rounded-[6px] outline-none transition duration-300 focus:border-[#667eea] focus:shadow-[0_0_5px_rgba(102,126,234,0.5)]"
          />
        </div>

        <div className="flex flex-col mb-[15px]">
          <label className="mb-[5px] text-[14px] text-[#555]">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="p-[10px] border border-[#ccc] rounded-[6px] outline-none transition duration-300 focus:border-[#667eea] focus:shadow-[0_0_5px_rgba(102,126,234,0.5)]"
          />
        </div>

        <button
          type="submit"
          className="w-full p-[10px] border-none rounded-[6px] bg-[#667eea] text-white font-bold cursor-pointer transition duration-300 hover:bg-[#5a67d8]"
        >
          Login
        </button>

        <div className="mt-[15px] flex justify-between text-[13px]">
          <a href="#" className="text-[#667eea] no-underline hover:underline">
            Forgot Password?
          </a>

          <a href="#" className="text-[#667eea] no-underline hover:underline">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
}

export default Login;