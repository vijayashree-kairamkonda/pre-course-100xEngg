import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userInfo } from "./Redux/Slice";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    username: "",
  });


  const handleLogin = () => {
    const userData = {
      email: data.email,
      username: data.username,
    };
    dispatch(userInfo(userData));
    navigate("/home");
  };
  return (
    <div>
      <input
        placeholder="enter email"
        value={data.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setData({ ...data, email: e.target.value })
        }
      />
      <br />
      <input
        placeholder="enter username"
        value={data.username}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setData({ ...data, username: e.target.value })
        }
      />
      <br />
      <button onClick={handleLogin}>LOGIN</button>
    </div>
  );
};
