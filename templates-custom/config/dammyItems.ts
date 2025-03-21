import { type YoutubeVideoItem } from "@/types/index";

export const items: YoutubeVideoItem[] = [
  {
    kind: "youtube#searchResult",
    etag: "vFO5Ff_-Bx-lVMCh_CYF1ByRlXo",
    id: { kind: "youtube#video", videoId: "PwO1kmQ9fNk" },
    snippet: {
      publishedAt: "2025-03-17T03:00:38Z",
      channelId: "UCOB24f8lQBCnVqPZXOkVpOg",
      title: "hoge hoge hoge",
      description: "hoge hoge hoge",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/PwO1kmQ9fNk/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/PwO1kmQ9fNk/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/PwO1kmQ9fNk/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "hoge hoge channnel",
      liveBroadcastContent: "none",
      publishTime: "2025-03-17T03:00:38Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "LGDmxPIeiBOBc-oehJkCtYv3jM0",
    id: { kind: "youtube#video", videoId: "xxxxxx" },
    snippet: {
      publishedAt: "2025-03-16T17:24:16Z",
      channelId: "UC4DrSQJhWAS3f_G_Am1SG9g",
      title: "fuga fuga fuga",
      description: "fuga fuga fuga",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/Cuzfr_CVWoY/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/Cuzfr_CVWoY/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/Cuzfr_CVWoY/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Dlgash Nheli",
      liveBroadcastContent: "none",
      publishTime: "2025-03-16T17:24:16Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "KvXJUK19_w_1jlaPeqxDOOrxrJk",
    id: { kind: "youtube#video", videoId: "OCxSkXR4KhA" },
    snippet: {
      publishedAt: "2025-03-16T17:28:13Z",
      channelId: "UC4DrSQJhWAS3f_G_Am1SG9g",
      title: "rarara rarara rarara rarara",
      description: "rara rara rara rara",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/hwi-_yXchtQ/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/hwi-_yXchtQ/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/hwi-_yXchtQ/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Dlgash Nheli",
      liveBroadcastContent: "none",
      publishTime: "2025-03-16T17:28:13Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "SSlWv6lsP1olgp_bVQrwW7JW6KI",
    id: { kind: "youtube#video", videoId: "ovoaae5s0HI" },
    snippet: {
      publishedAt: "2025-03-16T03:00:34Z",
      channelId: "UCOB24f8lQBCnVqPZXOkVpOg",
      title: "tatata tatata tatata",
      description: "tata tata tata tata tata",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/WQuKs-yYWaI/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/WQuKs-yYWaI/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/WQuKs-yYWaI/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "ta ta",
      liveBroadcastContent: "none",
      publishTime: "2025-03-16T03:00:34Z",
    },
  },
];

export const totalResults = items.length;
