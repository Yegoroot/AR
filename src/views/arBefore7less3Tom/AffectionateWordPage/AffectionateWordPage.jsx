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

class AffectionateWordPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Header
          color="transparent"
          brand="Уменьшительно ласкательные"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,

            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque18.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">Уменьшительно ласкательные</h1>

              <div className="desc">Существуют три модели уменьшительно ласкательных имён</div>

              <div className="items">
                <div className="item">
                  <h2 className="title h2ar"> فُعَيْلُ </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast"> وُلَيْدُ </span>: وَلَدُ صَغِير
                    </div>
                    <div className="arsent__translate">Мальчёнка, мальчишка</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast"> جُبَيْلُ </span>: جَبَلُ صَغِير
                    </div>
                    <div className="arsent__translate">Горка</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast"> نُهَيْرُ </span>: نَهْرُ صَغِير
                    </div>
                    <div className="arsent__translate">Речка</div>
                  </div>
                </div>
                <div className="item">
                  <h2 className="title h2ar"> فُعَيْعِل </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast"> فُنَيْدِق </span> من فُنْدُق
                    </div>
                    <div className="arsent__translate">Отельчик</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast"> كُتَيِّب </span> من كتاب
                    </div>
                    <div className="arsent__translate">Книжечка</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast"> شُدَيِّد </span> من شَدِيْد
                    </div>
                    <div className="arsent__translate">от слова Сильный )</div>
                  </div>
                </div>
                <div className="item">
                  <h2 className="title h2ar"> فُعَيْعِيل </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast"> مُفَيْتِيحُ </span> من مِفْتاح
                    </div>
                    <div className="arsent__translate">Ключик</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast"> فُنَيْجِين </span> من فِنْجان
                    </div>
                    <div className="arsent__translate">Чашечка</div>
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

export default withStyles(arabicPageStyle)(AffectionateWordPage)
