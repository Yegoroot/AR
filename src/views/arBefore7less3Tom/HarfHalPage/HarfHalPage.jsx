import React from 'react'
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class HarfHalPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Header
          color="transparent"
          brand="Частица هل"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,

            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque12.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">Вопросительная частица هل</h1>
              <div className="desc">
                Вопросительная частица <span className="desc__ar"> هل </span> (верно или не верно) для уточнения информации как частица "ли"
                в русском языке "а ходи ли ты ...", для выбора "да" или "нет"
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> هل </span> ثمن هذا السُوَار مِئة دولار؟
                </div>
                <div className="arsent__translate">
                  <span className="contrast"> А </span> у этого браслета цена 100 долларов?
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

export default withStyles(arabicPageStyle)(HarfHalPage)
