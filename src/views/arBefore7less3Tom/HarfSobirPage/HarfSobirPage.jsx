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

class HarfSobirPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Собирательная частица اسم الجنس الجَمْعِ </title>
          <meta
            name="description"
            content="Собирательная частица есть двух типов: для людей и для не людей. Например у человека есть вид (племя) турки,
            русские, арабы, эстонцы "
          />
        </Helmet>
        <Header
          color="transparent"
          brand="Собирательная частица"
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
              <h1 className="title  h1ar">
                اسم الجنس الجَمْعِ
                <span role="img" aria-label="Palm Tree">
                  {' '}
                  🌴{' '}
                </span>
              </h1>
              <div className="desc">
                Собирательная частица есть двух типов: <b> для людей и для не людей </b>. Например у человека есть вид (племя) турки,
                русские, арабы, эстонцы .У животных и растений тоже есть виды (семейства), например львы, финики, яблоки
              </div>
              <div className="desc">
                И для того чтоб выделить индивида из племени, вида, семейства мы применяем
                <b> собирательную частицу </b>, которая для людей одна, а для не людей другая
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  العَرَب + <span className="contrast"> يّ </span> = العَرَبِيّ
                </div>
                <div className="arsent__translate">
                  племя арабы + <span className="contrast"> собирательная частица </span> = араб (индивид)
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  الرُوس + <span className="contrast"> يّ </span> = الروسِيّ
                </div>
                <div className="arsent__translate">
                  племя русские + <span className="contrast"> собирательная частица </span> = русский (индивид)
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  التُّفَاح + <span className="contrast"> ة </span> = التُّفَاحة
                </div>
                <div className="arsent__translate">
                  вид фрукта яблоки + <span className="contrast"> собирательная частица </span> = яблоко (индивид вида)
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

export default withStyles(arabicPageStyle)(HarfSobirPage)
