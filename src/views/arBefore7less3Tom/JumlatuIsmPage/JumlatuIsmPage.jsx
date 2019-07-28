import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Footer from 'components/Footer/Footer.jsx'
import Header from 'components/Header/Header.jsx'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import { Helmet } from 'react-helmet'

class JumlatuIsmPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Именное предложение (جملة الاِسمِيّة) в арабском языке</title>
          <meta
            name="description"
            content="Именное предложение это предложение, которое начинается с имени. Для изучающего арабский язык будет просто понять эти концепции"
          />
        </Helmet>
        <Header
          color="transparent"
          brand="جملة الاسميّة"
          isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque3.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title h2ar">
                جملة الاسميّة&nbsp;<span className="ph">§</span>
              </h1>

              <p className="desc">
                Именное предложение <span className="desc__ar"> (جملة الاِسمِيّة) </span> – это предложение, которое
                <b> начинается с имени </b>. Например:
                <span className="desc__ar"> الطالِب مجتهد </span> (студент прилежен). Подлежащее именного предложения
                <span className="desc__ar"> (المُبْتَدَأُ) </span> ставится, как правило, в определённом состоянии, а сказуемое
                <span className="desc__ar"> (الخَبَرُ) </span> - в неопределённом.
              </p>

              <h3 className="title">
                <span role="img" aria-label="Writing Hand">
                  Сказуемое выраженное именем&nbsp;✍️
                </span>
              </h3>
              <p className="desc">Если сказуемое именного предложения является именем, то оно согласуется с подлежащим в числе и роде:</p>
              <div className="arsent">
                <div className="arsent__original">
                  التّلميذُ <span className="contrast"> نشيط </span>
                </div>
                <div className="arsent__translate">Ученик активен</div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  التّلميذةُ <span className="contrast"> نشيطة </span>
                </div>
                <div className="arsent__translate">Ученица активна</div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  التَّلاميذُ <span className="contrast"> نِشَاط </span>
                </div>
                <div className="arsent__translate">Ученики активны</div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  التلميذَات <span className="contrast"> نشِيطَات </span>
                </div>
                <div className="arsent__translate">Ученицы активны</div>
              </div>

              <h3 className="title">
                <span role="img" aria-label="Writing Hand">
                  Сказуемое выраженное глаголом&nbsp;✍️
                </span>
              </h3>
              <div className="arsent">
                <div className="arsent__original">
                  زيدٌ <span className="contrast"> فتح </span> الباب
                </div>
                <div className="arsent__translate">Зейд открыл дверь</div>
              </div>

              <h3 className="title">
                <span role="img" aria-label="Writing Hand">
                  Сказуемое выраженное идафой обстоятельства и именем&nbsp;✍️
                </span>
              </h3>
              <div className="arsent">
                <div className="arsent__original">
                  السّيّارةُ <span className="contrast"> أَمامَ البيتِ </span>
                </div>
                <div className="arsent__translate">Машина перед домом</div>
              </div>

              <h3 className="title">
                <span role="img" aria-label="Writing Hand">
                  Сказуемое выраженное сочетанием предлога родительного падежа и имени&nbsp;✍️
                </span>
              </h3>
              <div className="arsent">
                <div className="arsent__original">
                  التّلميذُ <span className="contrast"> فى المدرسةِ </span>
                </div>
                <div className="arsent__translate">Ученик в школе</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(JumlatuIsmPage)
