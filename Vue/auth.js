import Cookies from "js-cookie";

const TokenKey = "vue_admin_template_token";
const permission = "permission";

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token, date) {
  if (date) {
    return Cookies.set(TokenKey, token, { expires: 15 });
  } else {
    return Cookies.set(TokenKey, token);
  }
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

/* 合约期是否支付验证 */
export function getPermissionToken() {
  return Cookies.get(permission);
}

export function setPermissionToken(token) {
  return Cookies.set(permission, token, { expires: 15 });
}

export function removePermissionToken() {
  return Cookies.remove(permission);
}
