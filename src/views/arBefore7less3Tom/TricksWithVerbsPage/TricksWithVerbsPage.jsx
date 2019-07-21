import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

import LiWithVerb from './Sections/LiWithVerb'
import Admiration from './Sections/Admiration'
import DualIsm from './Sections/DualIsm'
import StartHamza from './Sections/StartHamza'
import ConcOfCond from './Sections/ConcOfCond'
import Word from 'components/word'
import { Helmet } from 'react-helmet'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class TricksWithVerbsPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Трюки с глаголами</title>
          <meta name="description" content="Арабские глаголы с различными частицами могут иметь различные значения " />
        </Helmet>
        <Header
          color="transparent"
          brand="Нюансы с глаголами"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque6.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              {/* <h1 className="title">Нюансы с глаголами  <span role="img" aria-label="Palm Tree"> 🌴 </span></h1> */}
              <LiWithVerb />
              <Admiration />
              <DualIsm />
              <StartHamza />
              <ConcOfCond />
              <h2 className="title">
                Два прямых дополнения{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="desc">
                Некоторые глаголы могут <b> ставить в винительный падеж два прямых дополнения </b> . Например глаголы
                <span className="desc__ar"> ظَنَّ</span>,<span className="desc__ar"> جَعَلَ </span>,<span className="desc__ar"> رَأى </span>
                (если رَأى со смыслом "видел сердцем, знал")
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> جَعَلَ </span>
                  <span> الله </span>
                  <span>الخمر</span>
                  <span className="contrast">َ</span>
                  <span> </span>
                  <span>
                    <Word root="حرام" suffix="اً" />
                  </span>
                </div>
                <div className="arsent__translate">Я считаю тебя слабым</div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <Word root="أَرا" suffix="كَ" negative />
                  <span> </span>
                  <span>
                    <Word root="حرضَعِيفام" suffix="اً" />
                  </span>
                </div>
                <div className="arsent__translate">Я считаю тебя слабым</div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> أ </span>
                  <span className="contrast">ترى </span>
                  <span>الطلاب </span>
                  <span className="contrast">َ</span>
                  <span> </span>
                  <span>
                    <Word root="مُجْتَهِد" suffix="ينَ" />
                  </span>
                </div>
                <div className="arsent__translate">А ты знаешь старательных студентов</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(TricksWithVerbsPage)
