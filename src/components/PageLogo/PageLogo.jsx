import { useNavigate } from "react-router-dom";
import { PageLogoImg } from "../../assets/index";
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
      <PageLogoImg />
    </div>
  );
};
export default PageLogo;
