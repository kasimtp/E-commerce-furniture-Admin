import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AdminContext } from "../context/AdminContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const { setAtoken } = useContext(AdminContext);
  const navigate = useNavigate();

  const onsubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/user/login",
        { email, password }
      );

      if (data.success) {
        localStorage.setItem("atoken", data.token);

        setAtoken(data.token);
        toast.success("Login successful!");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    if (setAtoken) {
      navigate("/");
    }
  }, [setAtoken, navigate]);

  return (
    <div>
      <form
        onSubmit={onsubmitHandler}
        className="min-h-[80vh] flex items-center"
      >
        <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg">
          <p className="text-2xl font-semibold m-auto text-primary">Login</p>

          <div className="w-full">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="border border-[#DADADA] rounded w-full p-2 mt-1"
              type="email"
              required
            />
          </div>
          <div className="w-full">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="border border-[#DADADA] w-full rounded p-2 mt-1"
              type="password"
              required
            />
          </div>
          <button className="bg-primary text-white w-full py-2 rounded-md text-base">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
