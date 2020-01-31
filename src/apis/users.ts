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
