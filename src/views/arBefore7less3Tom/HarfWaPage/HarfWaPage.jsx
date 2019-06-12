import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

import Word from 'components/word'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class HarfWaPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    return (
      <div>
        <Header
          color="transparent"
          brand="واو"
          isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque14.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title h1ar">
                واو{' '}
                <span role="img" aria-label="Palm Tree">
                  {' '}
                  🌴{' '}
                </span>
              </h1>

              <h2 className="title h2ar">
                واو العَطْف{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="arsent">
                <div className="arsent__original">
                  خرج الزّبير <span className="contrast"> و </span> حامد
                </div>
                <div className="arsent__translate">
                  Вышли Зубайр <span className="contrast"> и </span> Хамид
                </div>
              </div>

              <h2 className="title h2ar">
                ٌواو القَسَم{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="desc">Клятвенная вав, относится к предлогам родительного падежа и поэтому дает кясру слову</div>
              <div className="arsent">
                <div className="arsent__original">
                  <Word root="اللهِ" prefix="و" />
                </div>
                <div className="arsent__translate">Клянусь Аллахом</div>
              </div>

              <h2 className="title h2ar">
                واو الحَال{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>

              <div className="desc">
                Это <span className="desc__ar"> واو </span> состояния. В дополнение можно посмотреть урок про
                <b className="desc__ar"> جملة الحال </b>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  ماتَ أبي <span className="contrast"> و </span> <span className="contrast"> أنا صغير </span>
                </div>
                <div className="arsent__translate">
                  Отец мой умер <span className="contrast"> маленьким </span> [когда я был в состоянии "маленький"]
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

export default withStyles(arabicPageStyle)(HarfWaPage)
