import { useNavigate, useLocation } from "react-router-dom";

export function useGoBack(fallbackPath = '/') {
  const navigate = useNavigate();
  const location = useLocation();

  return () => {
    // Se existe uma página anterior no histórico do navegador
    if (document.referrer && document.referrer !== location.href) {
      navigate(-1);
    } else {
      navigate(fallbackPath);
    }
  };
}
