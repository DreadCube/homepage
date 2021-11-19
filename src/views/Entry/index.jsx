import { jsx, css } from '@emotion/react'
import React, { useCallback, useState } from 'react'

import { Button, Text, FrameBox, Figure, FrameHexagon } from '@arwes/core'

import { useHistory, Link } from 'react-router-dom'

const centered = css`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const wrap = css`
 display: flex;
 flex-direction: column;
 alignItems: center;
 text-align: center;
`

const Entry = () => {
  const history = useHistory()
  const handleAcceptAudioFeatures = useCallback(
    () => {
      localStorage.setItem('acceptedAudioFeatures', true)
      //window.location.reload()
      history.push('/tour')
    },
    [history],
  )

  return (
    <div css={centered}>
      <div css={wrap}>
        <Text as="h1">Welcome</Text>
        <Text as="p">This page uses audio.</Text>
        <Button FrameComponent={FrameBox} onClick={handleAcceptAudioFeatures}>OK</Button>
      </div>
    </div>
  )
}

export default Entry