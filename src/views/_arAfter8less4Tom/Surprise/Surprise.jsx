import React from 'react'
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import Word from 'components/word'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import { Helmet } from 'react-helmet'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class Page extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Формы удивления в арабском</title>
          <meta name="description" content="В арабском существует две классические формы (модели) удивления" />
        </Helmet>
        <Header
          color="transparent"
          brand="Формы удивления"
          // isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,

            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque17.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">
                Формы удивления&nbsp;<span className="ph">§</span>
              </h1>
              <div className="desc">В арабском существует две классические формы (модели) удивления.</div>

              <h2 className="h2ar">
                ما أفْعَلَهُ{' '}
                <span role="img" aria-label="Writing Hand">
                  &nbsp;✍️
                </span>
              </h2>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span> ما </span>
                  <span className="contrast"> أجْمَلَ </span>
                  <span> السيارةَ </span> !
                </div>
                <div className="arsent__translate">Какая красивая машина!</div>
              </div>

              <h2 className="h2ar">
                أفْعِلْ بِهِ!{' '}
                <span role="img" aria-label="Writing Hand">
                  &nbsp;✍️
                </span>
              </h2>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> أَجْمِلْ </span>
                  <span>
                    <Word root="السيَّارةِ" prefix="بِ" />
                  </span>
                  !
                </div>
                <div className="arsent__translate">Какая красивая машина!</div>
              </div>

              {/* --------------- */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(Page)
