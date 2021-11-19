import React, { useState, useEffect } from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from 'react-router-dom'

import { AnimatorGeneralProvider, Animator } from '@arwes/animation'
import { BleepsProvider } from '@arwes/sounds'
import { ArwesThemeProvider, Button, StylesBaseline } from '@arwes/core'

import Entry from './views/Entry'
import Home from './views/Home'
import Projects from './views/Projects'
import Tour from './views/Tour'

const ROOT_FONT_FAMILY = '"Titillium Web", sans-serif'
const IMAGE_URL = 'https://playground.arwes.dev/assets/images/wallpaper.jpg'
const SOUND_OBJECT_URL = 'https://playground.arwes.dev/assets/sounds/object.mp3'
const SOUND_TYPE_URL = 'https://playground.arwes.dev/assets/sounds/type.mp3'
const SOUND_CLICK_URL = 'https://playground.arwes.dev/assets/sounds/click.mp3'

const audioSettings = { common: { volume: 0.25 } }
const playersSettings = {
  object: { src: [SOUND_OBJECT_URL] },
  type: { src: [SOUND_TYPE_URL], loop: true },
  click: {
    src: [SOUND_CLICK_URL],
  },
}
const bleepsSettings = {
  object: { player: 'object' },
  type: { player: 'type' },
  click: {
    player: 'click',
    category: 'interaction',
  },
}

const generalAnimator = { duration: { enter: 200, exit: 200 } }

const App = () => {
  const location = useLocation()
  console.log(location)
  const [activate, setActivate] = useState(false)
  useEffect(() => {
    setActivate(false)

    const timeout = setTimeout(() => {
      setActivate(true)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [location])

  return (
    <ArwesThemeProvider>
      <StylesBaseline styles={{ body: { fontFamily: ROOT_FONT_FAMILY } }} />

      {
        !localStorage.getItem('acceptedAudioFeatures') ? <Entry /> :

          <BleepsProvider
            audioSettings={audioSettings}
            playersSettings={playersSettings}
            bleepsSettings={bleepsSettings}
          >
            <AnimatorGeneralProvider animator={generalAnimator}>
              <Animator animator={{ activate, manager: 'sequence' }}>
                <Switch>
                  <Route path="/projects">
                    <Projects />
                  </Route>
                  <Route path="/tour">
                    <Tour />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </Animator>
            </AnimatorGeneralProvider>
          </BleepsProvider>
      }
    </ArwesThemeProvider>
  )
}

export default App
