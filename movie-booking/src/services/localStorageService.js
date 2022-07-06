const USER = "user";
export const localStorageService = {
  setUserInfor: (USER) => {
    let dataJson = JSON.stringify(USER);
    localStorage.setItem("user", dataJson);
  },
  getUserInfo: () => {
    let dataJson = localStorage.getItem(USER);
    if (dataJson) {
      return JSON.parse(dataJson);
    }
    return null;
  },
  removeUserInfor: () => {
    localStorage.removeItem(USER);
  },
};
