const isEnv = process.env.REACT_APP_STATUS_PROJECT;
const projectStatus = process.env.NODE_ENV;
const URL_ENDPOINTS = isEnv === "production" ? "" : "";

const Constants = {
  API_ENDPOINT: `${URL_ENDPOINTS}/api/TracePlatform`,
  SCREEN_SIZE: {
    //By default, breakpoints are min-width to encourage a mobile-first workflow.
    SSS: 320,
    SS: 360,
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    XXL: 1536,
  },
};
export default Constants;
