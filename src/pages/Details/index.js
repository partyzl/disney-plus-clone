import React from 'react'
import styled from 'styled-components'

function Details() {
    return (
        <Container>
            <Background>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
            </Background>

            <ImgTitle>
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78" alt="" />
            </ImgTitle>

            <Controls>
                <PlayBtn>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>PLAY</span>
                </PlayBtn>
                <TrailerBtn>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>TRAILER</span>
                </TrailerBtn>
                <AddBtn>
                    <span>+</span>
                </AddBtn>
                <GroupBtn>
                    <img src="/images/group-icon.png" alt="" />
                </GroupBtn>
            </Controls>
            <Subtitle>
                2018 Blah Blah Blah Blah
            </Subtitle>
            <Description>
            The current story takes place 800 years after the Great Kingdom fall and the World Government takes over the world stage, 22 years after Gol D. Roger the Pirate King was executed and inspires the Golden Pirate Age. After his death, countless of Pirates sets out to find his greatest treasure One Piece. Initially the story begins before the Battle of Marineford. A boy name Monkey D. Luffy from East Blue who was aged seven was inspired by the pirate Shanks who turns out to be the Cabin Boy of Gol D. Roger and during this time he accidentally ate the Gomu Gomu no Mi. He yarns to become a Pirate King and ten years later he sets out from Foosha Village.
            </Description>
        </Container>
    )
}

export default Details

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImgTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    minwidth:200px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;

`

const PlayBtn = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb (249, 249, 249);
    border: none;
    padding: 0 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover{
        background: rgba(198, 198, 198);
    }
`
const TrailerBtn = styled(PlayBtn)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`
const AddBtn = styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    border: 2px solid white;
    background-color: rgba(0,0,0,0.6);
    cursor: pointer;
    margin-right:16px;
    
    &:hover{
        background: rgba(198, 198, 198);
    }
    span {
        font-size: 33px;
        color: white;
    }
`
const GroupBtn = styled(AddBtn)`
    background-color: black;
`

const Subtitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
`