import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import AnimateCard from 'components/AnimateCard/AnimateCard'
import Word from 'components/word'

import JsxParser from 'react-jsx-parser'
// https://www.npmjs.com/package/react-jsx-parser
// https://www.npmjs.com/package/react-html-parser может лучше этот???

/**
 * пока приходится загружать все
 * потом они все будут каждый в своем json
 *
 **/
// import api from "./api/jumlatuhaal.js";
import allApi from './api/api.js'

class Page extends React.Component {
  state = { api: {} }
  componentDidMount() {
    const api = allApi[this.props.match.params.id]

    this.setState(function(state, props) {
      return {
        api
      }
    })
  }

  render() {
    const { classes, ...rest } = this.props
    const { header, paralax, content } = this.state.api

    console.log(this.state.api)

    if (!this.state.api.header) {
      return null
    }

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

        <Parallax small={paralax.small} filter={paralax.filter} image={require('assets/img/mosque/mosque2.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">{header.brand}</h1>

              <JsxParser components={{ Word, AnimateCard }} jsx={content} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(Page)
