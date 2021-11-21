import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import BrightnessLow from '@material-ui/icons/BrightnessLow'
import BrightnessMedium from '@material-ui/icons/BrightnessMedium'
import BrightnessHigh from '@material-ui/icons/BrightnessHigh'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
// import Button from 'components/CustomButtons/Button.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import NavPills from 'components/NavPills/NavPills.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import WeakLetters from 'components/weakLetters'
import { weakLetters1, weakLetters2, weakLetters3 } from 'api/verbs/weakLetters'
import { Helmet } from 'react-helmet'

class WeakLettersPage extends React.Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>
            Спряжение пустых и недостаточных глаголов. Слабая коренная в
            арабских глаголах, шаблоны.{' '}
          </title>
          <meta
            name="description"
            content="Для пустых и недостаточных глаголов есть определенные шаблоны, которые имеют своеобразное, но логичное образование"
          />
        </Helmet>
        <Header
          color="transparent"
          brand="Слабая коренная"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,

            color: 'white',
          }}
          {...rest}
        />

        <Parallax
          small
          filter
          image={require('assets/img/mosque/mosque21.jpg')}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <h1 className="title">
              Шаблоны глаголов со слабой коренной&nbsp;
              <span className="ph">§</span>
            </h1>
          </div>
          <div xs={12} style={{ padding: 20 }} sm={12} md={12}>
            <h2>Практика слабой коренной по ссылке ниже</h2>
            <a href="https://madinah.best/programs/6185357fee7e5f00130bc3ef/6199ea778db175258f63d5dc">
              Вторая слабая коренная
            </a>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <NavPills
                // alignCenter
                color="primary"
                tabs={[
                  {
                    tabButton: 'Первая коренная',
                    tabIcon: BrightnessLow,
                    tabContent: <WeakLetters templates={weakLetters1} />,
                  },
                  {
                    tabButton: 'Вторая коренная',
                    tabIcon: BrightnessMedium,
                    tabContent: <WeakLetters templates={weakLetters2} />,
                  },
                  {
                    tabButton: 'Третья коренная',
                    tabIcon: BrightnessHigh,
                    tabContent: <WeakLetters templates={weakLetters3} />,
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
          {/* </div> */}
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(WeakLettersPage)
