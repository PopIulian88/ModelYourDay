import { AuthRoutes } from "./AuthRoutes";
import { MainRoutes } from "./MainRoutes";

const commonRoutes = {
  //define here screens that are common for both authenticated and unauthenticated users
};

export const Routes = {
  ...commonRoutes,
  ...AuthRoutes,
  ...MainRoutes,
};
