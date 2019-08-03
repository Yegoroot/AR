import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

import LyaNafia from './Sections/LyaNafia'
import LyaNahia from './Sections/LyaNahia'
import LyaInPast from './Sections/LyaInPast'
import LyaAtifa from './Sections/LyaAtifa'
import { Helmet } from 'react-helmet'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class SoglasovOpr extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Частица Ля (حرف لا)</title>
          <meta name="description" content="Различные правила с частицей Ля (حرف لا)" />
        </Helmet>
        <Header
          color="transparent"
          brand="حرف لا"
          isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque7.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title h1ar">
                حرف لا&nbsp;<span className="ph">§</span>
              </h1>
              <LyaNafia />
              <LyaNahia />
              <LyaInPast />
              <LyaAtifa />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(SoglasovOpr)
