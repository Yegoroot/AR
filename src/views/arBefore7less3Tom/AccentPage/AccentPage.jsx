import React from 'react'
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import { Helmet } from 'react-helmet'

class AccentPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Как точно задать вопрос в арабском языке</title>
          <meta name="description" content="В зависимости от того что хотим спросить и расставляем [акцентируем] слова" />
        </Helmet>
        <Header
          color="transparent"
          brand="Акцент в вопросе"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,

            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque11.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">
                Более точно задать вопрос&nbsp;<span className="ph">§</span>
              </h1>
              <p className="desc">В зависимости от того что хотим спросить и расставляем [акцентируем] слова</p>

              <div className="arsent">
                <div className="arsent__original">
                  <span>أ</span> <span className="contrast"> أنتَ </span>
                  <span> قتلتَ العقربُ في الفصلِ؟ </span>
                </div>
                <div className="arsent__translate">
                  А <span className="contrast"> ты </span>(или другой) убил скорпиона к классе?
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  أ <span className="contrast"> قتلتَ </span> أنتَ العقربُ في الفصلِ؟
                </div>
                <div className="arsent__translate">
                  А <span className="contrast"> убил ты </span>(или он жив) скорпиона к классе?
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  أ <span className="contrast"> عقربَ </span>قتلتَ أنتَ في الفصلِ؟
                </div>
                <div className="arsent__translate">
                  А <span className="contrast"> скорпиона </span>(или другое) ты убил в классе?
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  أ <span className="contrast"> في الفصلِ </span>قتلتَ أنتَ عقربُ ؟
                </div>
                <div className="arsent__translate">
                  А <span className="contrast"> в классе </span>(или в другом месте) ты убил скорпиона?
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

export default withStyles(arabicPageStyle)(AccentPage)
