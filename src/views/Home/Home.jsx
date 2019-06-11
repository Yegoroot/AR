import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
// import { useSpring, animated } from 'react-spring'
// import './s  tyle.css' // // Icons made by Freepik from www.flaticon.com
//
import componentsStyle from 'assets/jss/material-kit-react/views/components.jsx'

// const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
// const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
// const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
// const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
// const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`
// function Card() {
//   const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
//   return (
//     <div class="animateContainer" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
//       <animated.div class="card1" style={{ transform: props.xy.interpolate(trans1) }} />
//       <animated.div class="card2" style={{ transform: props.xy.interpolate(trans2) }} />
//       <animated.div class="card3" style={{ transform: props.xy.interpolate(trans3) }} />
//       <animated.div class="card4" style={{ transform: props.xy.interpolate(trans4) }} />
//     </div>
//   )
// }
class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Header
          // brand="في منامي"
          isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: 'white'
          }}
          {...rest}
        />
        <Parallax style={{ height: '100vh' }} image={require('assets/img/bg4.jpg')}>
          <div className={classes.container}>
            <div className={classes.brand}>
              {/* <h1 className={classes.title}>Заметки Арабского  🌴</h1> */}
              <h1 className={classes.title}>في منامي</h1>
              <h2 className={classes.subTitle}>Заметки, запсиси, уроки, правила и исключения основанных на Мединском курсе 📚 </h2>
            </div>
          </div>
        </Parallax>
        {/* <Card />, */}
      </div>
    )
  }
}

export default withStyles(componentsStyle)(Components)
