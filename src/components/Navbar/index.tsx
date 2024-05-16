import {Link} from "react-router-dom";
import {
    GITHUB_ROUTE,
    GITLAB_ROUTE,
    YOUTUBE_ROUTE,
    LEETCODE_ROUTE, DYNAMIC_PAGINATION_ROUTE, HOME_ROUTE, DOWNLOAD_ROUTE
} from "../MainRouter/configs.tsx";
import styled from "styled-components";
import {useState} from "react";

interface StyledProps {
    SomeHeight?: string
}


export const NavbarWrapper = styled.div<StyledProps>`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    min-height: ${({SomeHeight}) => SomeHeight ? SomeHeight : '100px'};
    min-width: 100px;
    max-width: 1000px;
    background: white;
    border: 1px solid black;
    gap: 30px;
    margin: 0 auto;
`

export const LinkStyled  = styled(Link)`
    color: black;
    font-size: 18px;
`


const Navbar = () => {

    const [currentTheme, setCurrentTheme] = useState<"dark" | "light">('light')

    const changeTheme = () => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme)
        setCurrentTheme(newTheme);
    }

    return (
        <>
            <NavbarWrapper SomeHeight="90px">
                <LinkStyled to={HOME_ROUTE}>home</LinkStyled>
                <LinkStyled to={DOWNLOAD_ROUTE}>pdf</LinkStyled>
                <LinkStyled to={GITHUB_ROUTE}>github</LinkStyled>
                <br/>
                <LinkStyled to={GITLAB_ROUTE}>gitlab</LinkStyled>
                <br/>
                <LinkStyled to={YOUTUBE_ROUTE}>youtube</LinkStyled>
                <br/>
                <LinkStyled to={LEETCODE_ROUTE}>leetcode</LinkStyled>
                <br/>
                <LinkStyled to={DYNAMIC_PAGINATION_ROUTE}>Dynamic Pagination</LinkStyled>
                <button onClick={
                    () => changeTheme()
                }>Theme</button>
            </NavbarWrapper>
        </>
    )
}
export default Navbar;