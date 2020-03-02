import loginJson from "../data/login.json";

export function login(loginData) {
  if (
    loginData.username === loginJson.username &&
    loginData.password === loginJson.password
  ) {
    return {
      success: true,
      message: "Login Successfully"
    };
  } else {
    return {
      success: false,
      message: "Invalid username or password"
    };
  }
}
