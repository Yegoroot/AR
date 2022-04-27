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
import { Helmet } from 'react-helmet'

class VerbTransitiveAndNo extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Переходность арабских глаголов</title>
          <meta
            http-equiv="refresh"
            content="0; url=https://learn.madinah.best/grammar/glagol/perehodnoy/"
          />
          <meta
            name="description"
            content='Переходной можно назвать "заразный" это такой глагол действия которого от الفاعِل (деятеля) перешло на المَفْعُول بِه (прямое
              дополнение)'
          />
        </Helmet>

        <Header
          color="transparent"
          brand="Переходнойсть глагола"
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
          image={require('assets/img/mosque/mosque24.jpg')}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">
                Переходной и непереходной глагол&nbsp;
                <span className="ph">§</span>
              </h1>

              <div className="desc">
                Глагол бывает <b> переходным </b>{' '}
                <span className="desc__ar"> فَالْمُتَعَدِّي </span> и{' '}
                <b> непереходным </b>
                <span className="desc__ar"> الَازِمُ </span> .
              </div>

              <h2 className="title">
                Переходной
                <span role="img" aria-label="Writing Hand">
                  &nbsp;✍️
                </span>
              </h2>

              <div className="desc">
                Переходной можно назвать "заразный" это такой глагол{' '}
                <b>действия которого от </b>
                <b className="desc__ar"> الفاعِل </b>
                (деятеля) <b> перешло на </b>{' '}
                <b className="desc__ar"> المَفْعُول بِه </b> (прямое дополнение)
                <br />
                <br />
                Такой глагол нуждается в <b className="desc__ar">
                  {' '}
                  الفاعِل{' '}
                </b> и <b className="desc__ar"> المَفْعُول بِه </b>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> بَنَى </span>
                  <span className="contrast_2"> إبراهيمُ </span>
                  <span> عليه السلام </span>
                  <span className="contrast_2"> الكَعَبَةَ </span>
                </div>
                <div className="arsent__translate">
                  Построил Ибрахим (Мир Ему) Каабу
                </div>
              </div>

              <div className="desc">
                И его признаком является, то что он может принять{' '}
                <b className="desc__ar"> هَاءَ الضَمِير </b> (ха местоимённое)
                которое будет возвращаться на прямое дополнение
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> قَرَأَ </span>
                  <span className="contrast_2"> الدرسَ </span>
                  <span> و </span>
                  <Word root="فَهِمَ" suffix="هُ" color2 />
                </div>
                <div className="arsent__translate">
                  Он читал урок и понял его (урок)
                </div>
              </div>

              <h2 className="title">
                Непереходной
                <span role="img" aria-label="Writing Hand">
                  &nbsp;✍️
                </span>
              </h2>

              <div className="desc">
                <b>Непереходной </b> это такой глагол, действие которого
                остаётся в нем самом
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> خَرَجَ </span>
                  <span> الطلابُ </span>
                </div>
                <div className="arsent__translate"> Суденты вышли </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> فَرِحَ </span>
                  <span> المُدَرِّس </span>
                </div>
                <div className="arsent__translate"> Учитель обрадовался </div>
              </div>

              <div className="desc">
                Но иногда непереходной глагол становится переходным при помощи
                <b className="desc__ar"> حرف الجَرّ </b>{' '}
                <b> (предлога родительного падежа)</b>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> غَضِبَ </span>
                  <span> المدرس </span>
                  <span className="contrast_2"> على </span>
                  <span> الطالِب الكسلانِ </span>
                </div>
                <div className="arsent__translate">
                  Разгневан учитель на ленивых студентов{' '}
                </div>
              </div>

              <h2 className="title">
                Из непереходного в переходный&nbsp;
                <span role="img" aria-label="Writing Hand">
                  ✍️
                </span>
              </h2>
              <div className="desc">
                Непереходной становится переходным когда
                <b>
                  {' '}
                  из первой породы переносится во II (
                  <b className="desc__ar"> فَعَّلَ </b>) или в IV (
                  <b className="desc__ar"> أَفْعَلَ </b>)
                </b>
              </div>

              <h3 className="title"> По модели (IV) </h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> خَرَجَ </span>
                  <span> حامِدٌ من الفصلِ </span>
                </div>
                <div className="arsent__translate">Вышел Хамид из класса </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> أخْرَجَ </span>
                  <span> المدرِّسُ </span>
                  <span className="contrast_2"> حامِداً </span>
                  <span> من الفصلِ </span>
                </div>
                <div className="arsent__translate">
                  Учитель вывел Хамида из класса{' '}
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> نَزَل </span>
                  <span> الجَرِيْحُ من سيَّارة الإسْعافِ </span>
                </div>
                <div className="arsent__translate">
                  Спустился раненый с кареты скорой помощи{' '}
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> أنْزَلَ </span>
                  <span> المُمَرِّضُونَ </span>
                  <span className="contrast_2"> الجريْحَ </span>
                  <span> من سيارة الإسْعافِ </span>
                </div>
                <div className="arsent__translate">
                  Спустилия медбратья раненного с кареты скорой помощи{' '}
                </div>
              </div>

              <h3 className="title"> По модели (II) </h3>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> نَزَلَ </span>
                  <span> الطِفلُ من الطائِرة </span>
                </div>
                <div className="arsent__translate">
                  {' '}
                  Спустился ребёнок с самолета{' '}
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> نَزَّلتُ </span>
                  <span className="contrast_2"> الطِفْلَ </span>
                  <span> من الطائِرة </span>
                </div>
                <div className="arsent__translate">
                  {' '}
                  Спустил я ребёнка с самолёта{' '}
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> نَامَ </span>
                  <span> المَرِيضُ </span>
                </div>
                <div className="arsent__translate"> Больной заснул </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> نَوَّمَ </span>
                  <span> الحواءُ </span>
                  <span className="contrast_2"> المَرِيضَ </span>
                </div>
                <div className="arsent__translate">
                  {' '}
                  Лекарства усыпили больного{' '}
                </div>
              </div>

              <h2 className="title">
                В двойне переходный
                <span role="img" aria-label="Writing Hand">
                  &nbsp;✍️
                </span>
              </h2>
              <div className="desc">
                Если первообразный (изначальный трёхбуквенный) глагол является
                переходным, то он станет <b> вдвойне переходным </b> если его
                перености во II или в IV. Например:
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> سَمِعَ </span>
                  <span> المُدرِّسُ </span>
                  <span className="contrast_2"> القرآنَ </span>
                </div>
                <div className="arsent__translate"> Слушал учитель Коран </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> أسْمَعَ </span>
                  <span> الطلابُ </span>
                  <span className="contrast_2"> المدرسَ القرآنَ </span>
                </div>
                <div className="arsent__translate">
                  {' '}
                  Заставили студенты слушать Учителя Коран{' '}
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> فَهِمَ </span>
                  <span> الطالِبُ </span>
                  <span className="contrast_2"> الدرسَ </span>
                </div>
                <div className="arsent__translate"> Понял студент урок </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> فَهَّمَ </span>
                  <span> المدرِّس </span>
                  <span className="contrast_2"> الطالبَ الدرسَ</span>
                </div>
                <div className="arsent__translate">
                  {' '}
                  Заставил учитель студента понять урок (ох уж эти учителя){' '}
                </div>
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
