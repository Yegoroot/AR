import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
// import AnimateCard from 'components/AnimateCard/AnimateCard'
// import Word from 'components/word'

class Breed4 extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Header
          color="transparent"
          brand="  "
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque10.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="h1ar"> </h1>

              <div className="desc">
                <span className="desc__ar"> </span>
              </div>

              <div className="items items_islabel">
                <div className="item">
                  <h2 className="h2ar "> </h2>
                  <span className="item__label">الماضي</span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> </div>
                    <div className="arsent__translate"> </div>
                  </div>
                </div>

                <div className="item">
                  <h2 className="h2ar "> </h2>
                  <span className="item__label">المُضارِع</span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> </div>
                    <div className="arsent__translate"> </div>
                  </div>
                </div>

                <div className="item">
                  <h2 className="h2ar "> </h2>
                  <span className="item__label"> اسم الفَاعِل </span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> </div>
                    <div className="arsent__translate"> </div>
                  </div>
                </div>

                <div className="item">
                  <h2 className="h2ar "> </h2>
                  <span className="item__label"> اسم المَفْعُول </span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> </div>
                    <div className="arsent__translate"> </div>
                  </div>
                </div>

                <div className="item">
                  <h2 className="h2ar "> </h2>
                  <span className="item__label">المصدر</span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> </div>
                    <div className="arsent__translate"> </div>
                  </div>
                </div>

                <div className="item">
                  <h2 className="h2ar "> </h2>
                  <span className="item__label">الأمر</span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> </div>
                    <div className="arsent__translate"> </div>
                  </div>
                </div>
              </div>

              <h2 className="title"> Примеры</h2>

              <div className="arsent">
                <div className="arsent__original">
                  <span> </span>
                  <span className="contrast"> </span>
                  <span> </span>
                  <span className="contrast"> </span>
                </div>
                <div className="arsent__translate"> </div>
              </div>

              {/* -------------------------------- */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(Breed4)
