import {Link} from "react-router-dom";
import {
    GITHUB_ROUTE,
    GITLAB_ROUTE,
    YOUTUBE_ROUTE, LEETCODE_ROUTE, ARTEM_ROUTE, VLAD_ROUTE, OLEG_ROUTE, GENA_ROUTE
} from "../MainRouter/configs.tsx";

function Navbar() {

    // function changeAuthState (): string {
    //     if (isAuth) {
    //         setIsAuth(false);
    //         return "Not auth"
    //     } else {
    //         setIsAuth(true);
    //         return "Auth"
    //     }
    // }


    return (
        <>
            {/*<Button onClick={ changeAuthState }> {changeAuthState()} </Button>*/}
            <Link to={ARTEM_ROUTE}>ARTEM_ROUTE</Link>
            <hr/>
            <Link to={VLAD_ROUTE}>VLAD_ROUTE</Link>
            <hr/>
            <Link to={OLEG_ROUTE}>OLEG_ROUTE</Link>
            <hr/>
            <Link to={GENA_ROUTE}>GENA_ROUTE</Link>
            <hr/>
            <Link to={GITHUB_ROUTE}>github</Link>
            <hr/>
            <Link to={GITLAB_ROUTE}>gitlab</Link>
            <hr/>
            <Link to={YOUTUBE_ROUTE}>youtube</Link>
            <hr/>
            <Link to={LEETCODE_ROUTE}>leetcode</Link>
            <hr/>
        </>
    )
}
export default Navbar;