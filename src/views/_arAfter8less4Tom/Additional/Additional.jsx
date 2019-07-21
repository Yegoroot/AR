import React from 'react'
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import { Link } from 'react-router-dom'
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
          <title>Виды дополнений в арабском языке</title>
          <meta
            name="description"
            content="В арабском языке существует пять видов дополнения: абсолютное, прямое, обстоятельство времени или места, дополнение причины и цели, дополнения соучастия"
          />
        </Helmet>
        <Header
          color="transparent"
          brand="Виды дополнений"
          // isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque24.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">
                {' '}
                Виды дополнений (المفعول){' '}
                <span role="img" aria-label="Palm Tree">
                  {' '}
                  🌴{' '}
                </span>
              </h1>
              <div className="desc">
                Существует 5 видов дополнения:
                <b> абсолютное дополнение </b> (<span className="desc__ar"> المفعول المطلق </span>), <b> прямое дополнение </b> (
                <span className="desc__ar"> المفعول به </span> ), <b> обстоятельство времени или места </b>(
                <span className="desc__ar"> المفعول فيه </span>), <b> дополнение причины, цели </b> (
                <span className="desc__ar"> المفعول له </span>
                ), <b> дополнение соучастия </b> (<span className="desc__ar"> المفعول معه </span> )
              </div>

              <h2 className="title h2ar">
                {' '}
                المَفعول بِه{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="desc">
                <b> Прямое дополнение </b> это объект, на который непосредственно (без предлога) переходит действие переходного глагола (см.
                <Link to={'/verbtransitive'}> "Переходность глагола" </Link>), выражается винительным падежом.
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> مَدَحْتُ </span>
                  <span className="contrast"> الْوَلَدَ </span>
                </div>
                <div className="arsent__translate"> Я похвалил (кого?) ребенка </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> حَفِظْتُ </span>
                  <span className="contrast"> الدَّرْسَ </span>
                </div>
                <div className="arsent__translate"> Я выучил (что?) урок </div>
              </div>

              <h2 className="title h2ar">
                {' '}
                المَفْعُول فيه{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="desc">
                Про <b> обстоятельство места или времени </b> можно посмотреть <Link to={'/almafulufihi'}> в этом разделе </Link>
              </div>

              <h2 className="h2ar title">
                {' '}
                المفعول المُطْلَق{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="desc">
                Про <b> абсолютное дополнение </b> можно посмотреть <Link to={'/addabsolute'}> в этом разделе </Link>
              </div>

              <h2 className="h2ar title">
                {' '}
                المَفعول لَه{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>
              </h2>
              <div className="desc">
                <b> Дополнение причины, цели </b> это масдар, который упоминается для разъяснения причины действия или поступков
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> و لا تَقْتُلوا أولادَكم </span>
                  <span className="contrast"> خَشْيَةَ </span>
                  <span> إمْلاقٍ </span>
                </div>
                <div className="arsent__translate"> Не убивайте ваших детей (по причине ?) из за страха бедности </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> أتَغَاضَ عن هَفَواتِ أَصْدقائِي </span>
                  <span className="contrast"> اسْتِبْقاءً </span>
                  <span> لِمَوَدَّتِهِم </span>
                </div>
                <div className="arsent__translate">
                  Я закрываю глаза на промохи моих друзей (по причине ?) в надежде сохранить привязанность
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> لَمْ أخرجْ مِن البيتِ اليوم </span>
                  <span className="contrast"> خَوفً </span>
                  <span> مِن الحارّ </span>
                </div>
                <div className="arsent__translate">Не вышел из дома сегодня (по какой причине?) из за страха жары</div>
              </div>

              <h2 className="h2ar title">
                المفعول مَعَهُ{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="desc">
                <b className="desc__ar"> المَفْعُولُ مَعَهُ </b> – это имя в винительном падеже, которое стоит после предлога
                <b className="desc__ar"> وَ </b> и указывает на то, что <b> "сопутствует" </b> действующему лицу во время выполнения
                действия. На русский язык المفعول معه следует переводить в соответствии с контекстом предложения.
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> سَارَ زَيْدٌ </span>
                  <span className="contrast_2"> وَ </span>
                  <span className="contrast"> النَّهْرَ </span>
                </div>
                <div className="arsent__translate">Зейд шёл и (рядом была) река</div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> سَافَرَ أَبِي </span>
                  <span className="contrast_2"> وَ </span>
                  <span className="contrast"> اللَّيْلَ </span>
                </div>
                <div className="arsent__translate">Мой отец уехал и (была) ночь</div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> رَجَعَ سَعِيدٌ </span>
                  <span className="contrast_2"> وَ </span>
                  <span className="contrast"> الشَّمْسَ </span>
                </div>
                <div className="arsent__translate">Вернулся Саид и (светило) солнцеь</div>
              </div>

              <div className="desc">
                То есть река, ночь и солнце как бы <b>"сопутствовали"</b> действующему лицу во время выполнения действия.
              </div>
              <div className="desc">
                Предлог <b className="desc__ar">وَ</b>, носящий смысл <b className="desc__ar"> مَعَ </b> "с, вместе" и предшествующий
                <b className="desc__ar"> المفعول معه </b>, в арабской терминологии называют <b className="desc__ar"> واوُ المعيّة </b>
                (вав сопутствия).
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
