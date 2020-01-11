import { Success, Error, createError, createSuccess } from "./response";

export type CreateChannelRequestOnAuto = {
  mode: "auto";
  id: string;
};

export type CreateChannelRequestOnManual = {
  mode: "manual";
  id: string;
  name: string;
  description: string;
  createdAt: string;
  thumbnailUrl: string;
};

export async function createChannel(
  req: CreateChannelRequestOnAuto | CreateChannelRequestOnManual
): Promise<Error | Success<null>> {
  let resp = null;
  try {
    resp = await fetch("/api/v1/channels", {
      method: "post",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(req)
    });
  } catch (e) {
    throw createError("网络错误");
  }

  const data = await resp.json();
  if (resp.status === 400) {
    switch (data.code) {
      case 1:
        throw createError("无对应频道ID，请检查频道ID是否正确");
      case 2:
        throw createError("对应频道已经存在");
    }
  }

  if (resp.status === 403) {
    throw createError("无权限创建，请重新登录");
  }

  return createSuccess(null);
}
