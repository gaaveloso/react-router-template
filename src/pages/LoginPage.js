import { goToHomePage } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate()

    return (
        <>
            <h1>LoginPage</h1>
            <button onClick={()=>goToHomePage(navigate)}>
                Home
            </button>
        </>
    )
}

export default LoginPage;