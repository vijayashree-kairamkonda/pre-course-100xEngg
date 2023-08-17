import { useSelector } from "react-redux";
import { RootState } from "./Redux/Store";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const { email, username } = useSelector(
    (state: RootState) => state.userInfoDetails
  );

  console.log(email, username, "home");
  
  return (
    <>
      <h1>HOME PAGE</h1>
      <hr />
      <div>email : {email} </div>
      
      <br />
      <div>username : {username}</div>
      <button onClick={() => navigate("/login")}>GO BACK</button>
    </>
  );
};
