import { useState, useEffect } from "react";
import { validateUser } from "../apis/users";

function useUser() {
  const [currentUser, setCurrentUser] = useState({
    username: ""
  });
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  async function validate() {
    try {
      setIsLoggedIn(await validateUser());
    } catch {
      setIsLoggedIn(false);
    }
  }

  useEffect(() => {
    validate();
  }, []);

  async function login(username: string, password: string) {
    try {
      // TODO: refactor into api
      const resp = await fetch("/api/v1/users/login", {
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

  return {
    currentUser,
    isLoggedIn,
    login,
    logout
  };
}

export default useUser;
