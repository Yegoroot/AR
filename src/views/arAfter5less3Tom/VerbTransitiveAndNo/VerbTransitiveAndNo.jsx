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
                  <span className="contrast"> بَنَى </span>
                  <span className="contrast_2"> إبراهيمُ </span>
                  <span> عليه السلام </span>
                  <span className="contrast_2"> الكَعَبَةَ </span>
                </div>
                <div className="arsent__translate">Построил Ибрахим (Мир Ему) Каабу</div>
              </div>

              <div className="desc">
                И его признаком является, то что он может принять <b className="desc__ar"> هَاءَ الضَمِير </b> (ха местоимённое) которое
                будет возвращаться на прямое дополнение
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> قَرَأَ </span>
                  <span className="contrast_2"> الدرسَ </span>
                  <span> و </span>
                  <Word root="قَهِمَ" suffix="هُ" color2 />
                </div>
                <div className="arsent__translate">Он читал урок и понял его (урок)</div>
              </div>

              <h2 className="title">Непереходной </h2>

              <div className="desc"> Это такой глаго чъе действие остаётся в самом глаголе </div>

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
                Иногда непереходной глагол становится переходным при помощи предлога родительного падежа
                <b className="desc__ar"> حرف الجَرّ </b>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> غَضِبَ </span>
                  <span className="contrast_2"> المدرس </span>
                  <span> على </span>
                  <span className="contrast_2"> الطالِب الكسلانِ </span>
                </div>
                <div className="arsent__translate">Разгневан учитель на ленивых студентов </div>
              </div>

              <h2 className="title">Из непереходного в переходный </h2>
              <div className="desc">
                <b className="desc__ar">Не</b>переходный становится переходным когда он из первой породы переносится в
                <b className="desc__ar"> فَعَّلَ </b> (II) или
                <b className="desc__ar"> أَفْعَلَ </b> (IV)
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
                <div className="arsent__translate">Учитель вывел Хамида из класса </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> نَزَل </span>
                  <span> الجَرِيْحُ من سيَّارة الإسْعافِ </span>
                </div>
                <div className="arsent__translate">Спустился раненый с кареты скорой помощи </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> أنْزَلَ </span>
                  <span> المُمَرِّضُونَ </span>
                  <span className="contrast_2"> الجريْحَ </span>
                  <span> من سيارة الإسْعافِ </span>
                </div>
                <div className="arsent__translate">Спустилия медбратья раненного с кареты скорой помощи </div>
              </div>

              <h3 className="title"> По модели (II) </h3>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> نَزَلَ </span>
                  <span> الطِفلُ من الطائِرة </span>
                </div>
                <div className="arsent__translate"> Спустился ребёнок с самолета </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> نَزَّلتُ </span>
                  <span className="contrast_2"> الطِفْلَ </span>
                  <span> من الطائِرة </span>
                </div>
                <div className="arsent__translate"> Спустил я ребёнка с самолёта </div>
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
                <div className="arsent__translate"> Лекарства усыпили больного </div>
              </div>

              <h2 className="title"> В двойне переходный </h2>
              <div className="desc">
                {' '}
                Если первообразный (изначальный трёхбуквенный) глагол является переходным, то он станет вдвойне переходным. Например{' '}
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
                <div className="arsent__translate"> Заставили студенты слушать Учителя Коран </div>
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
                <div className="arsent__translate"> Заставил учитель студента понять урок (ох уж эти учителя) </div>
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
