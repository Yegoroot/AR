// import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
// A React renderer for Three-js: https://github.com/drcmda/react-three-fiber
import { Canvas } from 'react-three-fiber'
// A React x-platform animation library: https://github.com/react-spring/react-spring
import { useTransition, useSpring, animated as a } from 'react-spring/three'
import { svgs, colors, deg, doubleSide } from './resources/helpers'
import Header from 'components/Header/Header.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Footer from 'components/Footer/Footer.jsx'
import { Helmet } from 'react-helmet'
/** This component renders a shape */
function Shape({ shape, rotation, position, color, opacity, index }) {
  return (
    <a.mesh rotation={rotation} position={position.interpolate((x, y, z) => [x, y, z + -index * 50])}>
      <a.meshPhongMaterial attach="material" color={color} opacity={opacity} side={doubleSide} depthWrite={false} transparent />
      <shapeBufferGeometry attach="geometry" args={[shape]} />
    </a.mesh>
  )
}

/** This component sets up a background plane and transitions a group of shapes */
function Scene() {
  const [page, setPage] = useState(0)
  const [shapes, setShapes] = useState([])
  // Switches scenes every 4 seconds
  useEffect(() => void setInterval(() => setPage(i => (i + 1) % svgs.length), 3000), [])
  // Converts current SVG into mesh-shapes: https://threejs.org/docs/index.html#examples/loaders/SVGLoader
  useEffect(() => void svgs[page].then(setShapes), [page])
  // This spring controls the background color animation
  const { color } = useSpring({ color: colors[page] })
  // This one is like a transition group, but instead of handling div's it mounts/unmounts meshes in a fancy way
  const transitions = useTransition(shapes, item => item.shape.uuid, {
    from: { rotation: [-0.2, 0.9, 0], position: [0, 50, -200], opacity: 0 },
    enter: { rotation: [0, 0, 0], position: [0, 0, 0], opacity: 1 },
    leave: { rotation: [0.2, -0.9, 0], position: [0, -400, 200], opacity: 0 },
    config: { mass: 30, tension: 800, friction: 190, precision: 0.0001 },
    ...{ order: ['leave', 'enter', 'update'], trail: 15, lazy: true, unique: true, reset: true }
  })
  return (
    <>
      <mesh scale={[20000, 20000, 1]} rotation={[0, deg(-20), 0]}>
        <planeGeometry attach="geometry" args={[1, 1]} />
        <a.meshPhongMaterial attach="material" color={color} depthTest={false} />
      </mesh>
      <group position={[1600, -700, page]} rotation={[0, deg(180), 0]}>
        {transitions.map(({ item, key, props }) => (
          <Shape key={key} {...item} {...props} />
        ))}
      </group>
    </>
  )
}

/** Main component */
function App() {
  return (
    <div className="anime">
      <Helmet>
        <title>Справочник грамматики арабского языка </title>
        <meta
          name="description"
          content="Справочник для изучения арабского языка основанного на Мединском курсе. Спряжение арабских глаголов, имён. Частицы. Сарф и нахву"
        />
      </Helmet>
      <Header
        brand="في منامي"
        isBrandAr
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: 'white'
        }}
      />

      <Canvas invalidateFrameloop camera={{ fov: 90, position: [0, 0, 1800], rotation: [0, deg(-20), deg(180)], near: 0.1, far: 20000 }}>
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.5} position={[300, 300, 4000]} />
        <Scene />
      </Canvas>

      <div className="anime__container">
        <div className="container">
          <div className="anime__header">
            <span className="anime__title"> Справочник Арабского </span>
            <span className="anime__desc">
              Заметки, записи, уроки, правила и исключения основанные на Мединском курсе
              <span role="img" aria-label="Books">
                {' 📚 '}
              </span>
              в упрощённом виде
            </span>
          </div>
        </div>
      </div>
      <Footer footerBlackFont />
    </div>
  )
}
export default App
