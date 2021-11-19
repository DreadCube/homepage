import { jsx, css } from '@emotion/react'
import React, { useCallback, useState } from 'react'

import { Button, Text, FrameBox, Figure, FrameHexagon } from '@arwes/core'

import { useHistory, Link } from 'react-router-dom'

const centered = css`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-right: 20px;
`
const wrap = css`
 display: flex;
 flex-direction: column;
 alignItems: center;
 text-align: center;
`

const subText = css`
  text-align: center;
`

const buttonGroup = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: auto;
`

const margin = css`
  margin: 5px;
`
const figure = css`
 & img {

  min-width: 0px;
 }
`

const Home = () => {
  const history = useHistory()

  const handleNavigateProjects = useCallback(() => {
    history.push('/projects')
  }, [history])

  return (
    <div css={centered}>
      <div css={wrap}>
        <div>
          <Figure
            css={figure}
            src={['https://media-exp1.licdn.com/dms/image/C4D03AQHM37q42yb3ig/profile-displayphoto-shrink_200_200/0/1614441614389?e=1640822400&v=beta&t=hgGm4IGN7GHE47-B2M8swZcnTUAit0JOVIHF8-akBDs']}
          />
        </div>
        <Text as="h1">Alexander Hofer</Text>
        <Text css={subText} as="h6">React Developer, Javascript, Coffee Enthusiast, Floorball Goalie</Text>
        <div css={buttonGroup}>
          <Button css={margin} palette="success" FrameComponent={FrameBox} onClick={handleNavigateProjects}>My Projects</Button>
          <Button css={margin} palette="success" FrameComponent={FrameBox}>Curriculum</Button>
          <Button css={margin} palette="success" FrameComponent={FrameBox} onClick={() => window.open('https://www.linkedin.com/in/alexander-hofer-36628a121/')}>LinkedIn</Button>
          <Button css={margin} palette="success" FrameComponent={FrameBox} onClick={() => window.open('https://github.com/dreadcube')}>Github</Button>
          <Button css={margin} palette="success" FrameComponent={FrameBox} onClick={() => window.open('https://instagram.com/dreadcube')}>Instagram</Button>

        </div>
      </div>
    </div>
  )
}

export default Home