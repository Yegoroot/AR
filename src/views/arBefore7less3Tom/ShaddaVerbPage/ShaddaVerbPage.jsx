import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'

import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import WeakLetters from 'components/weakLetters'

import { shadda } from 'api/verbs/shadda'
import shaddaamr from 'assets/img/content/harf/shaddaamr.png'
import { Helmet } from 'react-helmet'

class ShaddaVerbPage extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes, ...rest } = this.props
    return (
      <div>
        <Helmet>
          <title>Глагол с шаддой</title>
          <meta name="description" content="В арабском языке трёхбуквенный глагол со сдвоенной коренной спрягается определенным образом" />
        </Helmet>
        <Header
          color="transparent"
          brand="Глагол с шаддой"
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
            <h1 className="title">
              Глагол с шаддой{' '}
              <span role="img" aria-label="Palm Tree">
                {' '}
                📌{' '}
              </span>
            </h1>
          </div>

          <WeakLetters templates={shadda} />
          <div className={classes.container}>
            <h2 className="title">
              Глагол с шаддой и لا الناهية{' '}
              <span role="img" aria-label="Writing Hand">
                {' '}
                ✍️{' '}
              </span>{' '}
            </h2>
            <p>Если с глаголомШадды приходит لا الناهية то видоизменяется конечная огласовка. Например:</p>
          </div>
          <img src={shaddaamr} style={{ width: '100%' }} alt="Схема 1" />
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(ShaddaVerbPage)
