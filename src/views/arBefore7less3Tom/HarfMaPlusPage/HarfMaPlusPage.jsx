import React from 'react'
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import MainAboutMa from './Sections/MainAboutMa'
import MaAndFriends from './Sections/MaAndFriends'
import MaAttama from './Sections/MaAttama'
import MaThorf from './Sections/MaThorf'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import { Helmet } from 'react-helmet'

class HarfMaPlusPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Частица ма (حرف ما)</title>
          <meta name="description" content="Различные ситуации с частицей ма (حرف ما)" />
        </Helmet>
        <Header
          color="transparent"
          brand="حرف ما"
          isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque10.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title h1ar">
                حرف ما
                <span role="img" aria-label="Palm Tree" />
              </h1>
              <MainAboutMa />
              <MaAttama />
              <MaThorf />
              <MaAndFriends />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(HarfMaPlusPage)
