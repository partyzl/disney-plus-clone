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
`

const Logo = styled.img`
    width: 80px;

`

const NavMenu = styled.div`
    display: flex;
    color: white;

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;

        img {
            height: 20px;

        }

        span {
            color: white;
            text-decoration: none;
            font-size: 13px;
            letter-spacing: 1.42px;
        }
    }
`