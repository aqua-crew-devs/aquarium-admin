import axios from "axios";

export async function validateUser() {
  try {
    const resp = await fetch("/api/v1/users/validate", {
      method: "post"
    });

    if (resp.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    throw e;
  }
}

export async function loginUser(username: string, password: string) {
  const resp = await axios.post("/api/v1/users/login", {
    username,
    password
  });

  if (resp.status !== 200) {
    throw Error("login failed");
  }
}
