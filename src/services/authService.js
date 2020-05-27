import * as jwt from "jsonwebtoken";
import http from "./httpServices";
const apiEndpoint = "/auth";

http.setJwt(getJwt());
export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem("token", jwt);
}
export function loginWithJwt(jwt) {
  localStorage.setItem("token", jwt);
}
export async function logout() {
  localStorage.removeItem("token");
}
export function getCurrentUser() {
  try {
    const jwtoken = localStorage.getItem("token");
    const result = jwt.decode(jwtoken);
    return result;
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  try {
    return localStorage.getItem("token");
  } catch (ex) {
    return null;
  }
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
