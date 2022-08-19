// import axios from "axios";
import Cookies from "js-cookie";

export const unsetToken = () => {
  Cookies.remove("id");
  Cookies.remove("email");
  Cookies.remove("jwt");
};
