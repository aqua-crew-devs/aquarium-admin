import { useState } from "react";

function useUser() {
  const [currentUser, setCurrentUser] = useState({
    username: ""
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  async function login(username: string, password: string) {
    try {
      const resp = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password
        })
      });

      if (resp.status >= 400) {
        throw Error("login failed");
      }
      setIsLoggedIn(true);
      setCurrentUser({ username });
    } catch (err) {
      throw err;
    }
  }

  async function logout() {
    if (isLoggedIn) {
      await fetch("/api/users/logout", {
        method: "POST"
      });
    }
    setIsLoggedIn(false);
    setCurrentUser({ username: "" });
  }

  async function validate() {
    return null;
  }

  return {
    currentUser,
    isLoggedIn,
    login,
    logout,
    validate
  };
}

export default useUser;
