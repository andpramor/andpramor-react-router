import { basePath } from "./consts";

export const getCurrentPath = () => window.location.pathname.replace(basePath, '')
