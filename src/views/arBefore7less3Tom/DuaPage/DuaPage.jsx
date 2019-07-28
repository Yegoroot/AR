import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import Word from 'components/word'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'
import { Helmet } from 'react-helmet'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class DuaPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Дуа (мольба الدُّعاء)</title>
          <meta name="description" content="Дуа (мольба) в арабском языке с точки зрения грамматики стоит в прошедшем времени" />
        </Helmet>
        <Header
          color="transparent"
          brand="الدُّعاء"
          isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque20.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title h1ar">
                الدُّعاء
                <span role="img" aria-label="Palm Tree" />
              </h1>

              <p className="desc">
                <b>Дуа (мольба)</b> в арабском языке с точки зрения грамматики стоит в прошедшем времени, например
                <span className="desc__ar"> شَفَاكَ اللهُ </span>. Несомненно этому есть объяснение, но его ищите в других источниках
              </p>
              <p className="desc">
                На данный момент мы лишь можем взять для сравнения предложение с глаголом в прошедшего времени например: (
                <span className="desc__ar"> ذَهَبْتُ الى السوق </span> ) и понять что глагол прошедшего времени
                <span className="desc__ar"> ذَهَبَ </span> "ходил" указывает на действия в прошлом, в то время как у дуа (мольбы) положение
                несколько иное
              </p>

              <div className="arsent">
                <div className="arsent__original">
                  <Word root="جَزَا" suffix="كَ" /> الله خيرا
                </div>
                <div className="arsent__translate">
                  Да Воздаст Аллахъ <span className="contrast"> тебе </span> благом (говорят это лучшее, что можно пожелать муслиму)
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  غَفَرَ الله <Word root="لَ" suffix="كَ" />
                </div>
                <div className="arsent__translate">
                  Да Простит Аллахъ <span className="contrast">тебя </span>
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <Word root="بَرَ" suffix="كَ" /> اللهُ <Word root="في" suffix="ك" />
                </div>
                <div className="arsent__translate">
                  Пусть Аллахъ даст баракат <span className="contrast">тебе </span> в твоем [ деле, занятии, ... ]
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <Word root="رَحِمَ" suffix="هُ" /> اللهُ
                </div>
                <div className="arsent__translate">
                  Да смилуется над <span className="contrast"> ним </span> Аллахъ [ О великих людях после смерти, ученых ]
                </div>
              </div>

              <div className="desc contrast_2"> Так же нельзя в дуа говорить ин ша Аллахъ!</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(DuaPage)
