import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class MasdarPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Header
          color="transparent"
          brand="Масдар"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,

            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque8.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">Масдар</h1>

              <div className="desc">
                Масдар существительное и потому принимает артикль, танвин, та марбуту и иногда ставится во множественное число. Он не
                привязан ко времени, как например слово "любовь", "надежда". Масдар это выражение глагола через существительное
              </div>

              <h3 className="title">Глагол и масдар</h3>

              <div className="arsent">
                <div className="arsent__original">
                  <span> أريدٌ أن </span>
                  <span className="contrast"> أذْهبُ </span>
                  <span> الي </span>
                </div>
                <div className="arsent__translate">
                  Хочу <span className="contrast">пойти </span> к ...
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> أريدٌ أن </span>
                  <span className="contrast"> الَّذهاب </span>
                  <span> الي </span>
                </div>
                <div className="arsent__translate">
                  Хочу <span className="contrast">ходить </span> к ...
                </div>
              </div>

              <h3 className="title">Дополнительные примеры с масдаром</h3>

              <div className="arsent">
                <div className="arsent__original">
                  يَجِبُ <span className="contrast"> تَعلِيم </span> الطّفل السِباحة
                </div>
                <div className="arsent__translate">
                  Должен <span className="contrast">обучаться</span> ребенок плаванию
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> قِرَاءَة </span> الكُتُب مُفيدَة لِلعَقل
                </div>
                <div className="arsent__translate">
                  <span className="contrast">Чтение </span> книг полезно для ума
                </div>
              </div>

              <h3 className="title">Некоторые шаблоны</h3>
              <div className="items">
                <div className="item">
                  <h2 className="h2ar">فَعْلٌ </h2>

                  <div className="arsent">
                    <div className="arsent__original">
                      <span> دَرَسَ </span> -<span className="contrast"> دَرْسٌ </span>
                    </div>
                    <div className="arsent__original">
                      <span> ضَرَبَ </span> -<span className="contrast"> ضَرْبٌ </span>
                    </div>
                    <div className="arsent__original">
                      <span> قَتَلَ </span> -<span className="contrast"> قَتْلٌ </span>
                    </div>
                    <div className="arsent__original">
                      <span> فَتَحَ </span> -<span className="contrast"> فَتْحٌ </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <h2 className="h2ar">فِعَال </h2>

                  <div className="arsent">
                    <div className="arsent__original">
                      <span> قامَ </span> - <span> يَقُومُ </span> -<span className="contrast"> قِيَامٌ </span>
                    </div>
                    <div className="arsent__original">
                      <span> صامَ </span> - <span> يَصُومُ </span> -<span className="contrast"> صِيامٌ </span>
                    </div>
                    <div className="arsent__original">
                      <span> لَقِي </span> - <span> يَلقَى </span> - <span className="contrast"> لِقاءٌ </span>
                    </div>
                    <div className="arsent__original">
                      <span> شَفَى </span> - <span> يَشْفِي </span> -<span className="contrast"> شِفَاءٌ </span>
                    </div>
                  </div>
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

export default withStyles(arabicPageStyle)(MasdarPage)
