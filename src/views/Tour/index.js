import React, { useEffect } from 'react'

import * as THREE from 'three'

import { TWEEN } from 'three/examples/jsm/libs/tween.module.min'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


const createCarAnimation = async (camera, data, tweens = []) => {
  for (let i = 0; i < tweens.length; i++) {
    await createTween(camera, data, tweens[i])
  }
}

const createTween = (camera, coords, to, onComplete = () => {}) => {
  console.log({ to })

  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      clearTimeout(timeout)
      new TWEEN.Tween(coords)
        .to(to.position, to.duration)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate(() => {
          camera.position.set(coords.x, coords.y, coords.z)
        })
        .onComplete(() => {
          to.onComplete && to.onComplete()
          resolve()
        })
        .start()
      to.onStart && to.onStart()
    }, to.delay || 0)
  })
}

const tourRenderer = () => {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000)

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.sortObjects = false
  document.body.appendChild(renderer.domElement)

  const loader = new GLTFLoader()

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.target.set(0, 0, 0)
  //controls.autoRotate = true
  //controls.enabled = false

  const hemiLight = new THREE.HemisphereLight('white', 'white')
  hemiLight.position.set(0, 300, 0)
  scene.add(hemiLight)
  //hemiLight.visible = false

  const dirLight = new THREE.DirectionalLight('white')
  dirLight.position.set(75, 300, -75)
  scene.add(dirLight)
  //dirLight.visible = false


  //hemiLight.visible = false
  //dirLight.visible = false

  const geometry = new THREE.CircleGeometry(150, 32)
  const material = new THREE.MeshBasicMaterial({ color: 'white' })
  material.side = THREE.DoubleSide
  const circle = new THREE.Mesh(geometry, material)
  circle.rotateX(Math.PI / 2)
  //scene.add(circle)

  camera.position.z = 10000

  let car = null
  loader.load('/assets/models/city/scene.gltf', gltf => {
    car = gltf.scene
    console.log({ gltf })
    scene.add(car)


    const audio = new Audio('/assets/audio/drama.mp3')
    //audio.play()

    /*createCarAnimation(
      camera,
      { x: -41, y: 35, z: 139 },
      [
        { position: { x: -41, delay: 1000 },
          duration: 500,
          onStart: () => {
            hemiLight.visible = true
            dirLight.visible = true
          },
          onComplete: () => {
            hemiLight.visible = false
            dirLight.visible = false
          },
        },
        {
          position: { x: -136, y: 39, z: -3 },
        },
        { position: { x: -39, y: 33, z: -133 },
          delay: 3500,
          duration: 500,
          onStart: () => {
            hemiLight.visible = true
            dirLight.visible = true
          },
          onComplete: () => {
            hemiLight.visible = false
            dirLight.visible = false
          },
        },
        {
          position: { x: 78, y: 31, z: -114 },
          delay: 2500,
          duration: 800,
          onStart: () => {
            hemiLight.visible = true
            dirLight.visible = true
          },
          onComplete: () => {
            hemiLight.visible = false,
            dirLight.visible = false
          },
        },
        {
          position: { x: -1, y: 26, z: 300 },
          duration: 0,
        },
        {
          position: { x: -1, y: 26, z: 138 },
          delay: 1000,
          duration: 1500,
          onStart: () => {
            hemiLight.visible = true
            dirLight.visible = true
          },
          onComplete: () => {
            //hemiLight.visible = false
            //dirLight.visible = false
          },
        },
        {
          position: { x: 800, y: 0, z: 50 },
          delay: 0,
          duration: 5000,
        },

        {
          position: { x: 30, y: 64, z: -100 },
          delay: 500,
          duration: 2000,
        },
        {
          position: { x: 47, y: 18, z: -70 },
          delay: 1000,
          duration: 500,
        },
        {
          position: { x: 111, y: 47, z: -46 },
          delay: 1000,
          duration: 1000,
          onComplete: () => {
            hemiLight.visible = false
            dirLight.visible = false
          },
        },
        {
          position: { x: 111, y: 47, z: -46 },
          delay: 1000,
          duration: 0,
          onStart: () => {
            //controls.autoRotate = true
            hemiLight.visible = true
            dirLight.visible = true
          },
        },
        {
          position: { x: 111, y: 78, z: -46 },
          delay: 0,
          duration: 500,
          onStart: () => {
            controls.autoRotate = true
            hemiLight.visible = true
            dirLight.visible = true
          },
        },
      ],
    )*/
  }, undefined, error => {
    console.error(error)
  })


  function animate() {
    requestAnimationFrame(animate)

    controls.update()
    TWEEN.update()

    // console.log(camera.position)
    renderer.render(scene, camera)
  }
  animate()
}

const Tour = () => {
  useEffect(() => {
    tourRenderer()
  }, [])

  return (
    <>
    </>
  )
}

export default Tour