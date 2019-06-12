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

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class HarfManAzzoidatuPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Header
          color="transparent"
          brand="مِن الزّائِدَة"
          isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,

            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque21.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title h1ar">
                مِن الزّائِدَة{' '}
                <span role="img" aria-label="Palm Tree">
                  {' '}
                  🌴{' '}
                </span>
              </h1>

              <div className="desc">
                Эта частица <b>усиливает мысль</b> в предложении, часто используется в Коране, одна из частиц показывающих его описательную
                точность. <b>Употребляется только если перед ней стоит отрицательная частица, запрет или частица вопроса</b>
              </div>

              <h3 className="title">Расмотрим разницу</h3>

              <div className="arsent">
                <div className="arsent__original">ما أتَى أحَدَ إِلى المدرسة</div>
                <div className="arsent__translate">Никто не пришел в школу</div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  ما أتَى
                  <span className="contrast"> مِنْ </span>
                  أحَدٍ إِلى المدرسة
                </div>
                <div className="arsent__translate">
                  <span className="contrast">Вообще никто</span> [ни кошка, ни учителя, ни директор, ни пришельцев с соседней галактики, ни
                  кого] не были в школе
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  هلْ <span className="contrast"> مِنْ </span> سُؤَلٍ
                </div>
                <div className="arsent__translate">
                  У тебя есть <span className="contrast"> хоть какие нибудь</span> вопросы?
                </div>
              </div>

              <h3 className="title">Пример из القران</h3>

              <div className="arsent">
                <div className="arsent__original">
                  مَا تَسْقُطُ <span className="contrast"> مِن </span>وَرَقَةٍ إِلاَّ يَعْلَمُهَا
                </div>
                <div className="arsent__translate">
                  Не падает <span className="contrast">каким бы не был маленьким и незаметным, в любом месте и времени</span> листочек без
                  Его ведома
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  وَمَا <span className="contrast"> مِن </span> دَابَّةٍ فِي الأَرْضِ إِلاَّ عَلَى اللّهِ رِزْقُهَا
                </div>
                <div className="arsent__translate">
                  И нет <span className="contrast">ничего и некого подобного, [усиленное значени]</span> на земле и небесах ( слои
                  атомосферы, галактики ) приятнее Аллаха
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

export default withStyles(arabicPageStyle)(HarfManAzzoidatuPage)
