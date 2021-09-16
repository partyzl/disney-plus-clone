import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>
                Recommended For You
            </h4>
            <Content>
                <Wrap>
                    <img src="https://whatsondisneyplus.com/wp-content/uploads/2019/08/F9AF6461-24C0-4867-A9B1-7A7F04695FAE.png" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6A81D0D62EE8343AC4D7A42225502D36264AB9A11D20D660A2C619051205F4B8/scale?width=1920&aspectRatio=1.78&format=png" alt="" />
                </Wrap>
                <Wrap>
                    <img src="http://media-s3-us-east-1.ceros.com/editorial-content/images/2019/11/07/4f4dc0d6ef242bc1ff5778f410b1e5f0/1942-bambi.png" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CE355C31067E145D0C1140E70260A1E04B41F83660374BCBB1D07051582DE952/scale?width=1440&aspectRatio=1.78&format=png" alt="" />
                </Wrap>
            </Content>
            <h4>
                New Releases
            </h4>
            <Content>
                <Wrap>
                    <img src="https://whatsondisneyplus.com/wp-content/uploads/2019/08/F9AF6461-24C0-4867-A9B1-7A7F04695FAE.png" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6A81D0D62EE8343AC4D7A42225502D36264AB9A11D20D660A2C619051205F4B8/scale?width=1920&aspectRatio=1.78&format=png" alt="" />
                </Wrap>
                <Wrap>
                    <img src="http://media-s3-us-east-1.ceros.com/editorial-content/images/2019/11/07/4f4dc0d6ef242bc1ff5778f410b1e5f0/1942-bambi.png" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CE355C31067E145D0C1140E70260A1E04B41F83660374BCBB1D07051582DE952/scale?width=1440&aspectRatio=1.78&format=png" alt="" />
                </Wrap>
            </Content>
            <h4>
                Popular
            </h4>
            <Content>
                <Wrap>
                    <img src="https://whatsondisneyplus.com/wp-content/uploads/2019/08/F9AF6461-24C0-4867-A9B1-7A7F04695FAE.png" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6A81D0D62EE8343AC4D7A42225502D36264AB9A11D20D660A2C619051205F4B8/scale?width=1920&aspectRatio=1.78&format=png" alt="" />
                </Wrap>
                <Wrap>
                    <img src="http://media-s3-us-east-1.ceros.com/editorial-content/images/2019/11/07/4f4dc0d6ef242bc1ff5778f410b1e5f0/1942-bambi.png" alt="" />
                </Wrap>
                <Wrap>
                    <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CE355C31067E145D0C1140E70260A1E04B41F83660374BCBB1D07051582DE952/scale?width=1440&aspectRatio=1.78&format=png" alt="" />
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies


const Container = styled.div`

`
const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`
const Wrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    cursor: pointer;

    &:hover{
        transform: scale(1.05);
        border: 3px solid rgba(249, 249, 249, 0.8);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
        rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    }

    img {
        width: 100%;
        height:100%;
        object-fit: cover;
    }
`