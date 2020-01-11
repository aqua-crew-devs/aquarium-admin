export type Error = {
  message: string;
  type: "error";
};

export type Success<T> = {
  type: "success";
  data: T;
};

export function createError(message: string): Error {
  return { type: "error", message };
}

export function createSuccess<T>(data: T): Success<T> {
  return { type: "success", data };
}
