import { lazy } from "react";

const routes = [
    {
        path: "/event/:id",
        component: lazy(() => import("../pages/Event"))
    },
    {
        path: "/EventList",
        component: lazy(() => import("../pages/EventList"))
    },
    {
        path: "/OldEventList",
        component: lazy(() => import("../pages/OldEventList"))
    },
    {
        path: "/eventType/:id",
        component: lazy(() => import("../pages/EventType"))
    },
    {
        path: "/EventTypeList",
        component: lazy(() => import("../pages/EventTypeList"))
    },
    {
        path: "/SalonList",
        component: lazy(() => import("../pages/SalonList"))
    },
    {
        path: "/Salon/:id",
        component: lazy(() => import("../pages/Salon"))
    },
    {
        path: "/DivDeneme",
        component: lazy(() => import("../pages/DivDeneme"))
    },
    {
        path: "/",
        component: lazy(() => import("../pages/Home"))
    }
]

export default routes;