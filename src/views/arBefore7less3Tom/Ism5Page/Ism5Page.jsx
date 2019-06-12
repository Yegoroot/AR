import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import Word from 'components/word'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class Ism5Page extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Header
          color="transparent"
          brand="5 имен"
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
                5 имен{' '}
                <span role="img" aria-label="Palm Tree">
                  {' '}
                  🌴{' '}
                </span>
              </h1>
              <div className="desc">
                В арабском языке есть 5 имен которые по особому склоняются, <span className="desc__ar"> أب, أخ </span> и другие
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  جاء <Word root="و" suffix="كَ" prefix="أبُ" negative />
                </div>
                <div className="arsent__translate">
                  <span className="desc__ar">(المَرْفُوع)</span>
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  رَأيْتُ <Word root="ا" suffix="كَ" prefix="أبَ" negative />
                </div>
                <div className="arsent__translate">
                  <span className="desc__ar">(المَنْصوب)</span>
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  قُلْتُ <Word root="ي" suffix="كَ" prefix="لِأَبِ" negative />
                </div>
                <div className="arsent__translate">
                  <span className="desc__ar">(الجَرُور)</span>
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

export default withStyles(arabicPageStyle)(Ism5Page)
