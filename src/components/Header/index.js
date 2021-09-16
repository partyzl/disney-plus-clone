import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <div>
            <Nav>
                <Logo src= "/images/logo.svg" />
                <NavMenu>
                    <a href="hi">
                        <img src="/images/home-icon.svg" alt="" />
                        <span>HOME</span>
                    </a>
                    <a href="hi">
                        <img src="/images/search-icon.svg" alt="" />
                        <span>SEARCH</span>
                    </a>
                    <a href="hi">
                        <img src="/images/watchlist-icon.svg" alt="" />
                        <span>WATCHLIST</span>
                    </a>
                    <a href="hi">
                        <img src="/images/original-icon.svg" alt="" />
                        <span>ORIGINALS</span>
                    </a>
                    <a href="hi">
                        <img src="/images/movie-icon.svg" alt="" />
                        <span>MOVIES</span>
                    </a>
                    <a href="hi">
                        <img src="/images/series-icon.svg" alt="" />
                        <span>SERIES</span>
                    </a>
                </NavMenu>
                <UserImg src="https://i.imgur.com/tdi3NGa.jpg"/>
            </Nav>
        </div>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;
    cursor: pointer;

`

const NavMenu = styled.div`
    display: flex;
    color: white;
    flex: 1;
    margin-left: 20px;
    align-items:center;

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        text-decoration: none;

        img {
            height: 20px;

        }

        span {
            color: white;
            text-decoration: none;
            font-size: 13px;
            letter-spacing: 1.42px;
            position:relative;

            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity:0;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`