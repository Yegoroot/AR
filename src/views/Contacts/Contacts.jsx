import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import componentsStyle from 'assets/jss/material-kit-react/views/components.jsx'

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
              {/* <h1 className={classes.title}>Заметки Арабского  <span role="img" aria-label="Palm Tree"> 🌴 </span></h1> */}
              <h1 className={classes.title}>في منامي</h1>
              <h2 className={classes.subTitle}>
                Электронный адрес для связи &nbsp;
                <a style={{ color: '#fff' }} href="mailto:dont.repeat.yourself.ram@gmail.com">
                  dont.repeat.yourself.ram@gmail.com
                </a>
              </h2>
            </div>
          </div>
        </Parallax>
        {/* <Card />, */}
      </div>
    )
  }
}

export default withStyles(componentsStyle)(Components)
