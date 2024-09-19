import axios from "axios";
import Cookies from "js-cookie"; // js-cookie 라이브러리 임포트
import ip from "./ip";

// 사용자 등록 함수
export const registerUser = async (username, password) => {
  const signup = {
    username: username,
    password: password,
  };
  try {
    const response = await axios.post(`${ip}/register`, signup, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const token = response.data.token; // 응답에서 토큰 추출
    if (token) {
      Cookies.set("token", token, { expires: 7 }); // 토큰을 쿠키에 저장 (7일 만료)
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// 로그인 함수
export const login = async (username, password) => {
  const login = {
    username: username,
    password: password,
  };
  try {
    const response = await axios.post(`${ip}/login`, login, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const token = response.headers["authorization"]; // 응답에서 토큰 추출
    console.log(response.data);
    console.log(token);
    if (token !== undefined) {
      Cookies.set("token", token, { expires: 7 }); // 토큰을 쿠키에 저장 (7일 만료)
    }
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
