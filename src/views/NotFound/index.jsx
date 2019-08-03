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
          <title>Страница не найдена</title>
          <meta
            name="description"
            content="Справочник грамматики для изучающего арабский язык основанный на Мединском курсе. Породы, спряжение глаголов. Сарф, нахву"
          />
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
        <Parallax style={{ height: '100vh' }} image={require('assets/img/bg2.jpg')}>
          <div className={classes.container}>
            <div className={classes.brand}>
              <h1 className={classes.title} style={{ fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif" }}>
                Not Found
              </h1>
              <h2 className={classes.subTitle}>
                Запрашиваемая страница не найдена
                <span role="img" aria-label="email with love">
                  {' 🏹 '}
                </span>
              </h2>
            </div>
          </div>
        </Parallax>

        <Footer footerBlackFont />
      </div>
    )
  }
}

export default withStyles(componentsStyle)(Components)
