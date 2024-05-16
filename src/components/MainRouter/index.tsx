import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import Vlad from "./pages/Vlad";
import Artem from "./pages/Artem";
import Oleg from "./pages/Oleg";
import Gena from "./pages/Gena";
import {
    ARTEM_ROUTE,
    GENA_ROUTE,
    VLAD_ROUTE,
    OLEG_ROUTE,
    GITHUB_ROUTE,
    GITLAB_ROUTE,
    YOUTUBE_ROUTE,
    LEETCODE_ROUTE,
    DOWNLOAD_ROUTE
} from './configs';
import Github from "./pages/Github.tsx";
import Gitlab from "./pages/Gitlab.tsx";
import Youtube from "./pages/Youtube.tsx";
import Leetcode from "./pages/Leetcode.tsx";
import Pdf from "../Pdf";


const MainRouter = ({isAuth = false}) => {

    const basedPath: RouteObject[] = [
        { path: ARTEM_ROUTE, element: <Artem />,},
        { path: VLAD_ROUTE, element: <Vlad /> },
        { path: GITHUB_ROUTE, element: <Github/>},
        { path: GITLAB_ROUTE, element: <Gitlab/>},
        { path: YOUTUBE_ROUTE, element: <Youtube/>},
        { path: LEETCODE_ROUTE, element: <Leetcode/>},
        { path: "*", element: <Navigate to={'/'} replace />},
        {path: DOWNLOAD_ROUTE, element: <Pdf/>, },
    ]

    const authPath: RouteObject[] = [
        { path: GENA_ROUTE , element: <Gena />,},
        { path: OLEG_ROUTE, element: <Oleg /> },
    ]

    const resultPaths: RouteObject[] = basedPath

    if(isAuth){
        resultPaths.push(...authPath)
    }
    return useRoutes(resultPaths);
}

export default MainRouter;