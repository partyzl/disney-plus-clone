import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <Content>
                <Logo1 src="/images/cta-logo-one.svg" />
                <SignUp>
                    Get All Three
                </SignUp>
                <Description>
                    Watchop, Watchop.xyz is a dedicated fans site, Watchop.xyz brings you the last Watchop episodes So Please bookmark us.
                </Description>
                <Logo2 src="/images/cta-logo-two.png" />
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    position: relative;
    justify-content: center;

    &:before {
        position: absolute;
        top: 0;
        bottom: 0;
        content: "";
        left: 0;
        right:0;
        background-image: url("/images/login-background.jpg");
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        z-index: -1;
        opacity: 0.7;
    }
`

const Content = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 130px;
    align-items: center;
    `
    
    const Logo1 = styled.img`
    
    `
    
    const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    text-transform: uppercase;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing:1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
        background-color: #0483ee;
    }
`
const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const Logo2 = styled.img`
    width: 90%;
`
