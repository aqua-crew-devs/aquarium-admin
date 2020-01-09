import React from "react";
import { Channel } from "../../../types/channel";
import ChannelTable from "../../../pages/ChannelManager/ChannelTable";

export default {
  title: "pages/ChannelManager/components/ChannelTable"
};

export function withChannels() {
  const aqua: Channel = {
    name: "Aqua Ch. 湊あくあ",
    id: "UC1opHUrw8rvnsadT-iGp7Cg",
    description: `バーチャルメイド⚓️湊あくあ(みなとあくあ)です！ど、ドジとか言わないでください！
    放送で色んな変わったゲームや雑談をしています…！！
    【生放送】#湊あくあ生放送【関連ツイート】#湊あくあ 【ファン】 #あくあクルー【絵文字】⚓️【ﾌｧﾝｱｰﾄ】 #あくあーと ※動画やﾂｲｰﾄで使用させて頂くことがあります。担当絵師：がおう先生【@umaiyo_puyoman】`,
    createdAt: new Date("2018-08-01T06:38:45.000Z"),
    thumbnailUrl:
      "https://yt3.ggpht.com/a/AGF-l79lFypl4LxY5kf60UpCL6gakgSGHtN-t8hq1g=s88-c-k-c0xffffffff-no-rj-mo",
    customUrl: null
  };
  const channels: Channel[] = [aqua];

  return <ChannelTable channels={channels}></ChannelTable>;
}
