import React from 'react'
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import { Helmet } from 'react-helmet'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class IsmChislitelPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Арабские числительные с 100</title>
          <meta name="description" content="Вариации арабских числительных с сотнями" />
        </Helmet>
        <Header
          color="transparent"
          brand="Числительные с 100"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,

            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque11.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">
                Числительные с 100&nbsp;<span className="ph">§</span>
              </h1>
              <div className="arsent">
                <div className="arsent__original">
                  مِئَةُ - مِئَتَانِ - ثَلاثُمِئَةَ - أرْبَعُمِئَةَ - خَمْسُمِئَةَ - سِتُّمِئَةَ - سَبعُمِئَةَ - ثَمانمِئَةَ - تِسْعُمِئة
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

export default withStyles(arabicPageStyle)(IsmChislitelPage)
