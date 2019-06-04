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

import AbsolutnoeDop from './sections/AbsolutnoeDop'

class Page extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
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
              <h1 className="title" dir="rtl">
                (المفعول) Виды дополнений
              </h1>
              <div className="desc">
                Существует 5 видов дополнения:
                <b> абсолютное дополнение </b> (<span className="desc__ar"> المفعول المطلق </span>), <b> прямое дополнение </b> (
                <span className="desc__ar"> المفعول به </span> ), <b> обстоятельство времени или места </b>(
                <span className="desc__ar"> المفعول فيه </span>), <b> дополнение цели </b> (<span className="desc__ar"> المفعول له </span>
                ), <b> дополнение соучастия </b> (<span className="desc__ar"> المفعول معه </span> )
              </div>

              <h2 className="title h2ar"> المَفعول بِه</h2>
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

              <h2 className="title h2ar"> المَفْعُول فيه </h2>
              <div className="desc">
                Про <b> обстоятельство места или времени </b> можно посмотреть <Link to={'/almafulufihi'}> в этом разделе </Link>
              </div>

              <AbsolutnoeDop />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(Page)
