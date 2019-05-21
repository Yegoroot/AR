import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Word from 'components/word'

import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
// import AnimateCard from 'components/AnimateCard/AnimateCard'

class VerbTransitiveAndNo extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Header
          color="transparent"
          brand="Переходнойсть глагола"
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
              <h1 className="title">Переходной и непереходной глагол</h1>

              <div className="desc">
                Глагол бывает <b> переходным </b> <span className="desc__ar"> فَالْمُتَعَدِّي </span> и <b> непереходным </b>
                <span className="desc__ar"> الَازِمُ </span> .
              </div>

              <h2 className="title">Переходной</h2>

              <div className="desc">
                Переходной можно назвать "заразный" это такой глагол <b>действия которого от </b>
                <b className="desc__ar"> الفاعِل </b>
                (деятеля) <b> перешло на </b> <b className="desc__ar"> المَفْعُول بِه </b> (прямое дополнение)
                <br />
                <br />
                Такой глагол нуждается в <b className="desc__ar"> الفاعِل </b> и <b className="desc__ar"> المَفْعُول بِه </b>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast_2"> بَنَى </span>
                  <span className="contrast"> إبراهيمُ </span>
                  <span> عليه السلام </span>
                  <span className="contrast"> الكَعَبَةَ </span>
                </div>
                <div className="arsent__translate">Построил Ибрахим (Мир Ему) Каабу</div>
              </div>

              <div className="desc">
                И его признаком является, то что он может принять <b className="desc__ar"> هَاءَ الضَمِير </b> (ха местоимённое) которое
                будет возвращаться на прямое дополнение
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast_2"> قَرَأَ </span>
                  <span className="contrast"> الدرسَ </span>
                  <span> و </span>
                  <Word root="قَهِمَ" suffix="هُ" />
                </div>
                <div className="arsent__translate">Он читал урок и понял его (урок)</div>
              </div>

              <h2 className="title">Непереходной </h2>

              <div className="desc"> Это такой глаго чъе действие остаётся в самом глаголе </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast_2"> خَرَجَ </span>
                  <span> الطلابُ </span>
                </div>
                <div className="arsent__translate"> Суденты вышли </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast_2"> فَرِحَ </span>
                  <span> المُدَرِّس </span>
                </div>
                <div className="arsent__translate"> Учитель обрадовался </div>
              </div>

              <div className="desc">
                Иногда непереходной глагол становится переходным при помощи предлога родительного падежа
                <b className="desc__ar"> حرف الجَرّ </b>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast_2"> غَضِبَ </span>
                  <span className="contrast"> المدرس </span>
                  <span> على </span>
                  <span className="contrast"> الطالِب الكسلانِ </span>
                </div>
                <div className="arsent__translate">Разгневан учитель на ленивых студентов </div>
              </div>

              {/* --------------------- */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(VerbTransitiveAndNo)
