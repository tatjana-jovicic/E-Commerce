import { useNavigate } from "react-router-dom";
import Page_Logo from "../../assets/page-logo.png";
import "./PageLogo.css";

const PageLogo = () => {
  const router = useNavigate();

  const handleOnClick = () => {
    router("/");
  };

  return (
    <div
      className="page_logo"
      onClick={() => {
        handleOnClick();
      }}
    >
      <img src={Page_Logo} alt="page logo" />
    </div>
  );
};
export default PageLogo;
