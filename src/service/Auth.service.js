export const TOKEN_KEY = "@token-shawime";
export const USER_KEY = "@user-shawime";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getUserLogado = () => localStorage.getItem(USER_KEY);
export const usuario = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const logout = () => {
  localStorage.clear();
};

export const getUserImage = () => localStorage.getItem("userImage");
export const userImage = (img) => {
  localStorage.setItem("userImage", JSON.stringify(img));
};
