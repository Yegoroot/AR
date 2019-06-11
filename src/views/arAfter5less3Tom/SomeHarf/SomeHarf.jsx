import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import Qad from './sections/Qad'
import Innama from './sections/Innama'
import IthaFujaiya from './sections/IthaFujaiya'
import Min from './sections/Min'
import Ya from './sections/Ya'
import Ala from './sections/Ala'
import Halya from './sections/Halya'
import Bal from './sections/Bal'
class SomeIsm extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Header
          color="transparent"
          brand="Некоторые частицы"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,

            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque21.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">Некоторые частицы 🌴</h1>
              <Qad />
              <Innama />
              <IthaFujaiya />
              <Min />
              <Ya />
              <Halya />
              <Ala />
              <Bal />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(SomeIsm)
