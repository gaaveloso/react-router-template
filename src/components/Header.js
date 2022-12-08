import { useNavigate, useParams } from "react-router-dom";
import { goToHomePage, goToProfilePage, goToLoginPage } from "../routes/coordinator";

function Header() {
  const navigate = useNavigate()

  return (
    <header>
      <button onClick={() => goToHomePage(navigate)}>
        Ir para página inicial
      </button>
      <button onClick={() => goToProfilePage(navigate, "gabriel")}>
        Ir para página de perfil
      </button>
      <button onClick={() => goToLoginPage(navigate)}>
        Login
      </button>
    </header>
  );
}

export default Header;
