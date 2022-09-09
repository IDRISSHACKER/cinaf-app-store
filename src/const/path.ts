const prod = false

const paths = {
  api_url: prod
    ? "https://apps.cinaf.tv/api"
    : "http://192.168.100.75:2020/api",
  path: prod
    ? "https://apps.cinaf.tv/api/download"
    : "http://192.168.100.75:2020/api/download",
};

export default paths;