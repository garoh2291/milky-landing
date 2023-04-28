import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = (props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (props.scrollReff) {
      props.scrollReff.current.scrollTo(0, 0);
    }
  }, [pathname, props.scrollReff]);

  return <>{props.children}</>;
};
