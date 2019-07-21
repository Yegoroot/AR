import React from 'react'
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import { Helmet } from 'react-helmet'

class HarfDenyPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Отрицательные частицы арабского</title>
          <meta
            name="description"
            content="Отрицательные частицы. قَطُّ - для прошедшего времени. В
            то время как частица
             أبدٌا - для настоящего времени"
          />
        </Helmet>
        <Header
          color="transparent"
          brand="Отрицательные частицы"
          // isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque12.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">
                Отрицательные частицы
                <span role="img" aria-label="Palm Tree">
                  {' '}
                  🌴{' '}
                </span>
              </h1>
              <div className="desc">
                Частица
                <span className="desc__ar contrast"> قَطُّ </span>- для прошедшего времени ( <b> не делал никогда до этого момента </b> ). В
                то время как частица
                <span className="contrast desc__ar"> أبدٌا </span>- для настоящего времени ( <b> никогда не делал и не буду делать </b> )
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  ما شربتُ الخَامر <span className="contrast"> قَطُّ </span>
                </div>
                <div className="arsent__translate">
                  <span className="contrast"> Не </span> пил вино никогда (до этого момента)
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  لنْ أشرب الخمر <span className="contrast"> أبدٌا </span>
                </div>
                <div className="arsent__translate">
                  Не пил <span className="contrast"> никогда</span> вино и не буду!
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(HarfDenyPage)
