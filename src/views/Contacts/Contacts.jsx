import React from 'react'

import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Footer from 'components/Footer/Footer.jsx'
import componentsStyle from 'assets/jss/material-kit-react/views/components.jsx'
import { Helmet } from 'react-helmet'

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Контакты</title>
          <meta name="description" content="Справочник грамматики арабского языка основанный на Мединском курсе" />
        </Helmet>
        <Header
          // brand=""
          // isBrandAr
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
                Электронный адрес для связи
                <span role="img" aria-label="email with love">
                  {' '}
                  📨{' '}
                </span>
                &nbsp;
                <a style={{ color: '#fff', fontSize: 20, fontFamily: 'sans-serif' }} href="mailto:dont.repeat.yourself.ram@gmail.com">
                  dont.repeat.yourself.ram@gmail.com
                </a>
              </h2>
            </div>
          </div>
        </Parallax>
        {/* <Card />, */}
        <Footer footerBlackFont />
      </div>
    )
  }
}

export default withStyles(componentsStyle)(Components)
