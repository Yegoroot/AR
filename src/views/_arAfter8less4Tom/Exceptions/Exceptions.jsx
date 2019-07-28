import React from 'react'
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import { Helmet } from 'react-helmet'

class Page extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Как в арабском выразить исключение</title>
          <meta
            name="description"
            content="В арабском языке имеются восемь частиц для выражения исключения إِلَّا   غَيْرُ سِوَى سُوَى سَوَاءٌ خَلَا عَدَا حَاشَا "
          />
        </Helmet>
        <Header
          color="transparent"
          brand="Выражение исключения"
          // isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque28.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">
                Выражение исключения <span role="img" aria-label="Palm Tree" />
              </h1>
              <div className="desc">
                Имеется восемь частиц исключения со смыслом <b>кроме, исключая</b>.<span className="desc__ar"> إِلَّا </span>(частица),
                <span className="desc__ar"> غَيْرُ سِوَى سُوَى سَوَاءٌ خَلَا عَدَا حَاشَا </span> (имена)
              </div>

              <h2 className="title">
                {' '}
                Полное утвердительное предложение{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="desc">
                Если предложение утвердительное, то исключаемое имя после частицы <span className="desc__ar"> إِلَّا </span> обязательно
                ставится в винительный падеж,
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span>قَامَ اَلْقَوْمُ</span>
                  <span className="contrast_2"> إِلَّا </span>
                  <span>زَيْدا</span>
                  <span className="contrast">ً</span>
                </div>
                <div className="arsent__translate">Все, кроме Зейда, встали</div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> خَرَجَ اَلنَّاسُ </span>
                  <span className="contrast_2"> إِلَّا </span>
                  <span>عَمْرا</span>
                  <span className="contrast">ً</span>
                </div>
                <div className="arsent__translate">Люди вышли, исключая Амра</div>
              </div>

              <h2 className="title">
                {' '}
                Полное отрицательное предложение{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="desc">
                В отрицательном предложениях или вопросительных <b>исключаемое слово либо согласуется</b> с тем понятием, из которого оно
                исключается, <b>либо ставится в винительный падеж</b>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast_2"> ما </span>
                  <span>حَضر الطلاب</span>
                  <span className="contrast">ُ</span>
                  <span className="contrast_2"> إِلَّا </span>
                  <span>حامِدا</span>
                  <span className="contrast">ً</span>
                  <span> / </span>
                  <span>حامِد</span>
                  <span className="contrast">ٌ</span>
                </div>
                <div className="arsent__translate"> Не прибыл из студентов никто, кроме Хамида </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast_2"> لا </span>
                  <span>تَتَّصِلْ بأحد</span>
                  <span className="contrast">ٍ</span>
                  <span className="contrast_2"> إِلَّا </span>
                  <span>حامِدا</span>
                  <span className="contrast">ً</span>
                  <span> / </span>
                  <span>حامِد</span>
                  <span className="contrast">ٍ</span>
                </div>
                <div className="arsent__translate"> Не звоните никому, кроме Хамида </div>
              </div>

              <h2 className="title">
                {' '}
                Неполное отрицательное предложение{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="desc">
                Если (отрицательное) предложение неполное (то есть, не указано то, из чего исключают), то исключаемое ставится в тот падеж,
                в котором оно бы стояло бы без частицы <span className="desc__ar"> إِلَّا </span>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast_2"> مَا </span>
                  <span> قَامَ </span>
                  <span className="contrast_2"> إِلَّا </span>
                  <span>زَيْد</span>
                  <span className="contrast">ٌ</span>
                </div>
                <div className="arsent__translate"> Никто, кроме Зейда, не встал </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast_2"> مَا </span>
                  <span> ضَرَبْتُ </span>
                  <span className="contrast_2"> إِلَّا </span>
                  <span>زَيْدا</span>
                  <span className="contrast">ً</span>
                </div>
                <div className="arsent__translate"> Никого, кроме Зейда, я не побил </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast_2"> مَا </span>
                  <span> مَرَرْتُ </span>
                  <span className="contrast_2"> إِلَّا </span>
                  <span>بِزَيْد</span>
                  <span className="contrast">ٍ</span>
                </div>
                <div className="arsent__translate"> Я прошёл рядом, только с Зейдом </div>
              </div>

              <h2 className="title">
                {' '}
                Слова исключения, кроме إِلَّا{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="desc">
                После слов: <span className="desc__ar"> غَيْر, سِوَى, سُوَى, سَوَاء </span> исключаемое ставится в родительный падеж, так
                как они являются именами, с которыми исключаемое имя <b> образует несогласованное определение </b> (идафу).
              </div>

              <div className="desc">
                После слов: <span className="desc__ar"> خَلَا, عَدَا, حَاشَا </span> исключаемое имя можно поставить как в винительный
                падеж, так и в родительный
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> قَامَ اَلْقَوْمُ </span>
                  <span className="contrast_2"> خَلَا </span>
                  <span>زَيْدا</span>
                  <span className="contrast">ً</span>
                  <span className="contrast"> / </span>
                  <span>وَزَيْد</span>
                  <span className="contrast">ٍ</span>
                </div>
                <div className="arsent__translate"> Все встали, кроме Зейда </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(Page)
