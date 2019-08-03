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

class SimilarityMaful extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Страдетельный залог и имя поддейственного </title>
          <meta name="description" content="Есть определеннвя схожесть у страдетельного залога и имени поддейственного в арабском языке" />
        </Helmet>
        <Header
          color="transparent"
          brand="Схожесть стр. залога и мафъуль"
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
              <h1 className="title">
                Схожесть страдательного залога и имени поддейственного&nbsp;<span className="ph">§</span>
              </h1>
              <div className="desc" />

              <div className="arsent">
                <div className="arsent__original">قُتِلَ مُدرسنا أمسِ</div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  مَنْ <span className="contrast"> مَقْتُول </span> ؟
                </div>
                <div className="arsent__translate">Кто убитый? (предмет действия смерти)</div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  مَنْ <span className="contrast"> قُتِلَ </span> ؟
                </div>
                <div className="arsent__translate">Кто убит? (на кого упало действие убийства)</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(SimilarityMaful)
