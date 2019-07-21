import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import Word from 'components/word'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import AnimateCard from 'components/AnimateCard/AnimateCard'
import { Helmet } from 'react-helmet'

class AdwatulDjazmPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>أدوات الجزم</title>
          <meta name="description" content="أدوات الجزم. Частица Лям, Лямма, Ля Нахия, Лямуль Амр" />
        </Helmet>
        <Header
          color="transparent"
          brand="أدوات الجزم"
          isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/bg4.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title h1ar">
                أدوات الجزم
                <span role="img" aria-label="Palm Tree">
                  {' '}
                  🌴{' '}
                </span>
              </h1>

              <h2 className="title h2ar">
                لَمْ{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="desc">
                <b> Отрицательная частица </b> приходит перед глаголами настоящего времени у ней две роли: <b> отрицает </b> и
                <b> меняет время на прошедшее</b>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> لمْ </span> أذهَبْ = ما ذهبتُ
                </div>
              </div>

              <h2 className="title h2ar">
                لَمّا{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="desc">
                <b> Частица (пока еще не, еще не) </b>. Отрицает и прошлый и настоящий момент, у <span className="desc__ar"> لمَّا </span>
                есть высокий уровень возможности свершения
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> وَ </span>
                  <span className="contrast"> لمَّا </span> يَدْخُلِْ اﻹيْمانُ في قُلُوبِكُمْ
                </div>
                <div className="arsent__translate">Еще пока не зашла вера в их сердца</div>
              </div>
              <div className="desc">
                Если приходит после этой частицы глагол прошедшего времени,то другое значение у этой частицы
                <b className="desc__ar"> اسم الزمان </b>. Но это уже не
                <b className="desc__ar"> أدْوَات الجَزْم </b>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> لمَّا </span> سَمِعْتُ الأذانَ تَوضَّأْت وَتَوجَّهتُ إلى المسجد
                </div>
                <div className="arsent__translate">
                  <span className="contrast"> Когда </span> услышал Азан, принял омовение, и направился к мечети
                </div>
              </div>

              <h2 className="title h2ar">
                لا النّاهية{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="desc">
                <b>Частица отрицания</b> приходит только ко второму лицу настоящего времени!
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> لا </span> تَ‍‍ذهب‍‍وا الي المدرسة
                </div>
                <div className="arsent__translate">Не ходите в школу</div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> لا </span> تَحْزَنْ إنَّ الله معنا
                </div>
                <div className="arsent__translate">Не печалься, Аллахъ с нами</div>
              </div>

              <h2 className="title h2ar">
                لامُ الأمر{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="desc">
                <b>Частица приказа</b> может прийти к любому лицу (Пусть он, пусть она)
              </div>

              <AnimateCard>
                <div className="arsent arsent_rule">
                  <div className="arsent__original">لامُ اﻷمرِ مَكْسورَةٌ, و تُسَكَّنُ بعدَ الواوِ, و الفاءِ, و ثُمَّ.</div>
                  <div className="arsent__translate">
                    Частица приказа приходит с кясрой, но после
                    <span className="contrast"> و, ف, ثمَّ </span> сукунизируется
                  </div>
                </div>
              </AnimateCard>

              <div className="arsent">
                <div className="arsent__original">
                  <Word prefix="لِ" root="يَذهَبْ" /> الي المدرسة
                </div>
                <div className="arsent__translate">Пусть он идёт в школу</div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <Word prefix="فَلْ" root="يَنْظُرِْ" />
                  <span> اﻹِنْسانُ إلى طَعَامِه </span>
                </div>
                <div className="arsent__translate">Пусть посмотрит человек на свою еду</div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <Word prefix="لِ" root="يَذهَب" />
                  <span> الطلابُ الجددُ إلى المديرِ, </span>
                  <span className="contrast_2"> و </span>
                  <Word prefix="لْ" root="يَرجِعوا" />
                  <span> بعد مُقَابَلَتِهِ </span>
                </div>
                <div className="arsent__translate">Пусть новые студенты идут к директору и возвращаются после встречи с ним</div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <Word prefix="لِ" root="نَجْلسِ" />
                  <span> الآن في الحَديقَة, </span>
                  <span className="contrast_2"> ثُمّ </span>
                  <Word prefix="لْ" root="نَذهب" />
                  <span> إلى المسجدِ</span>
                </div>
                <div className="arsent__translate">Давайте сейчас присядем в парке, затем пойдём в мечеть</div>
              </div>

              <h2 className="title">
                Пример того как джазмируется окончание{' '}
                <span role="img" aria-label="Index Pointing Up">
                  {' '}
                  ☝️{' '}
                </span>
              </h2>
              <div className="arsent">
                <div className="arsent__original">
                  لَمْ أذهبْ - لَمْ نَذهبْ
                  <br />
                  أنتَ لَمْ تَذهبْ - أنتِ لَمْ نَذهبِي
                  <br />
                  أنتُم لَمْ تَذهبُوا - أنتنّ لَمْ نَذهبْن
                  <br />
                  هو لَمْ يَذهبْ - هي لَمْ تَذهَبْ
                  <br />
                  هم لَمْ يَذهبُوا - هنّ لَمْ يذهَبْن
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

export default withStyles(arabicPageStyle)(AdwatulDjazmPage)
