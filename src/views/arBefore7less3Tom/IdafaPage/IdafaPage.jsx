import React from 'react'

import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'

import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import Word from 'components/word'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class IdafaPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Header
          color="transparent"
          brand="الإَضَافَةُ"
          isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,

            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque1.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">Не согласованное определение</h1>

              <div className="desc">
                Термин "идафа", который означает буквально "присоединение", можно перевести на русский язык как "несогласованное
                определение". Иногда этот термин переводят как "изафетная связка" например:
              </div>

              <div className="arsent">
                <div className="arsent__original">قلم تِلمِيذٍ</div>
                <div className="arsent__translate">Карандаш ученика</div>
              </div>

              <h2 className="title"> Первая часть идафы </h2>
              <div className="desc">
                Не принимает ни танвина ни определенного артикля т.е стоит в так называемом "сопряженном состоянии". В зависимости от
                местоположения может быть в любом падеже
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> قلمُ </span> تِلميذ
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  قرأتُ من <span className="contrast"> كتابِ </span> الطّالب
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  رأيتُ <span className="contrast"> كتابَ </span> الطّالب
                </div>
              </div>

              <h2 className="title">Вторая часть идафы</h2>

              <div className="desc">
                Может стоять как в определенном состоянии так и в не определенном состоянии
                <span className="contrast"> всегда пребывает в родительном падеже</span> и является владельцем (как бы владельцем) того, на
                что указывает первая часть
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  دفتر<span className="contrast"> طالبٍ </span>
                </div>
                <div className="arsent__translate">Тетрадь (какого то) студента</div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  دفتر<span className="contrast"> الطالبٍ </span>
                </div>
                <div className="arsent__translate">Тетрадь (известного) студента</div>
              </div>

              <h2 className="title">Притяжательное местоимение является второй частью идафы</h2>
              <div className="arsent">
                <div className="arsent__original">
                  <Word root="بيت" suffix="ه" /> <Word root="بيت" suffix="ها" /> <Word root="بيت" suffix="كم" />
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

export default withStyles(arabicPageStyle)(IdafaPage)
