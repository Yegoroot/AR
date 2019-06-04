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

class Asmaulafal extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Header
          color="transparent"
          brand="اسْماءُ الافعال"
          isBrandAr
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
              <h1 className="title">اسْماءُ الافِعال</h1>

              <div className="desc">
                Не является глаголом, но смысл глагола, не склоняется во временах. Бывает некоторые существуют в одном времени, но не
                существуют в другом, т.е имя может существовать в повелительном но не существовать в прошедшем и т.п. Например
              </div>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> تَعَالَ </span> (الى هنا)
                </div>
                <div className="arsent__translate">Иди сюда</div>
              </div>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> صَهْ </span> (أُسْكُتْ)
                </div>
                <div className="arsent__translate">Молчи</div>
              </div>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> عَلَيْكَ </span> (اِلْزَمْ)
                </div>
                <div className="arsent__translate">Ты должен</div>
              </div>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> رُوَيْدَكَ </span> (تَمَهَّلْ)
                </div>
                <div className="arsent__translate">Не торопись</div>
              </div>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> هَيَّا </span> (أسْرِعْ)
                </div>
                <div className="arsent__translate">Быстрей</div>
              </div>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> حَيَّ </span>(أقْبِلْ)
                </div>
                <div className="arsent__translate">Спешите</div>
              </div>
              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> إلَيْكَ </span>(خُذْ)
                </div>
                <div className="arsent__translate">Возьми</div>
              </div>
              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> آمين </span>(إستجب)
                </div>
                <div className="arsent__translate">Отвечай</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(Asmaulafal)
