import Admin from "./pages/Admin";
import {ADMIN_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Shop from "./pages/AllService";
import Auth from "./pages/Auth";
import DevicePage from "./pages/ServicePage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
]
