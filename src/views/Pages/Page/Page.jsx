import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import Word from 'components/word'
import AnimateCard from 'components/AnimateCard/AnimateCard'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

import api from './api'

import JsxParser from 'react-jsx-parser'

class Page extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    const { header, paralax, content } = api

    return (
      <div>
        <Header
          color={header.color}
          brand={header.brand}
          isBrandAr={header.isBrandAr}
          rightLinks={header.rightLinks === 'HeaderLinks' ? <HeaderLinks /> : null}
          fixed={header.fixed}
          changeColorOnScroll={{
            ...header.changeColorOnScroll
          }}
          {...rest}
        />
        <Parallax small={paralax.small} filter={paralax.filter} image={paralax.image} />

        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">{header.brand}</h1>

              <JsxParser components={{ AnimateCard, Word }} jsx={content} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(Page)
