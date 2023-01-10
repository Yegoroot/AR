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

import Word from 'components/word'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import { Helmet } from 'react-helmet'

class AbjectDegrees extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <meta
            http-equiv="refresh"
            content="0; url=https://grammar.arabic.best/rules/derivatives/preference-name"
          />
          <title>
            Сравнительная и превосходная степень арабских прилагательных
          </title>
          <meta
            name="description"
            content="В арабском языке можно выделить: прилагательные сравнительной, превосходной степени и обыкновенные"
          />
        </Helmet>
        <Header
          color="transparent"
          brand="Степени прилагательного"
          // isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,

            color: 'white',
          }}
          {...rest}
        />

        <Parallax
          small
          filter
          image={require('assets/img/mosque/mosque17.jpg')}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">
                Превосходная и сравнительная степень&nbsp;
                <span className="ph">§</span>
              </h1>

              <div className="desc">
                Прилагательные можно разделить на три группы{' '}
                <b>сравнительные</b>,<b> превосходные </b> и обыкновенные
              </div>
              <h2 className="title">
                Сравнительная степень أفْعَل مِنْهُ
                <span role="img" aria-label="Writing Hand">
                  &nbsp;✍️
                </span>
              </h2>

              <div className="arsent">
                <div className="arsent__original">
                  هاشم طويل و حامد <span className="contrast"> أطْوَلُ </span>
                  <Word prefix="مِنْ" root="هُ" />
                </div>
                <div className="arsent__translate">
                  Хашим высокий, но Хамид{' '}
                  <span className="contrast">выше его </span>
                </div>
              </div>

              <h2 className="title">
                Превосходная степень
                <span role="img" aria-label="Writing Hand">
                  &nbsp;✍️
                </span>
              </h2>
              <div className="desc">"Один из сАмых". Изофетная связка</div>
              <div className="arsent">
                <div className="arsent__original">
                  محمد <span className="contrast"> أحْسَنُ </span>
                  <span className="contrast_2"> طَالِبٍ </span> في الفصلِ
                </div>
                <div className="arsent__translate">
                  Мухаммад <span className="contrast"> сАамый лучший</span>
                  <span className="contrast_2"> студент </span> в классе
                  <span className="contrast_2">( Идафа )</span>
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

export default withStyles(arabicPageStyle)(AbjectDegrees)
