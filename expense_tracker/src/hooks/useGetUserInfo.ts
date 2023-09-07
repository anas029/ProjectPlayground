

export const useGetUserInfo = () => {
    const defaultUserInfo = {
      userID: "",
      name: "",
      profilePhoto: "",
      isAuth: false,
    };
  
    const storedUserInfo: typeof defaultUserInfo = JSON.parse(
      localStorage.getItem("auth") || JSON.stringify(defaultUserInfo)
    );
  
    const { userID, name, profilePhoto, isAuth } = storedUserInfo;
  
    return { userID, name, profilePhoto, isAuth };
  };