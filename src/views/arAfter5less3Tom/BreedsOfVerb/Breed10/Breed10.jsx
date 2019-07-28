import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import { Helmet } from 'react-helmet'

class Breed4 extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Десятая порода арабского глагола</title>
          <meta name="description" content="Десятая (10) порода арабского глагола اِسْتَفْعَلَ" />
        </Helmet>
        <Header
          color="transparent"
          brand="X порода"
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
              <h1 className="h1ar">
                (X) اِسْتَفْعَلَ&nbsp;<span className="ph">§</span>
              </h1>

              <div className="desc">
                <span className="desc__ar"> </span>
              </div>

              <div className="items items_islabel">
                <div className="item">
                  {/* <h2 className="h2ar "> اِسْتَفْعَلَ  <span role="img" aria-label="Writing Hand"> ✍️ </span>  </h2> */}
                  <span className="item__label">الماضي</span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> اِسْتَقْبَلَ </div>
                    <div className="arsent__translate"> Встретил </div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original contrast"> اِسْتَقَالَ </div>
                    <div className="arsent__translate"> Просил об уволнении </div>
                  </div>
                </div>

                <div className="item">
                  {/* <h2 className="h2ar "> يَسْتَفْعِلُ  <span role="img" aria-label="Writing Hand"> ✍️ </span>  </h2> */}
                  <span className="item__label">المُضارِع</span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> يَسْتَقْبِلُ </div>
                    <div className="arsent__translate"> Встречает </div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original contrast"> يَسْتَقِيلُ </div>
                    <div className="arsent__translate"> Просит об уволнении </div>
                  </div>
                </div>

                <div className="item">
                  {/* <h2 className="h2ar ">اِسْتَفْعِلْ  <span role="img" aria-label="Writing Hand"> ✍️ </span>  </h2> */}
                  <span className="item__label">الأمر</span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> اِسْتَقْبِلْ </div>
                    <div className="arsent__translate"> Встречай </div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original contrast"> اِسْتَقِلْ </div>
                    <div className="arsent__translate"> Проси об уволнении </div>
                  </div>
                </div>

                <div className="item">
                  {/* <h2 className="h2ar "> اِسْتِفْعَالٌ  <span role="img" aria-label="Writing Hand"> ✍️ </span>  </h2> */}
                  <span className="item__label">المصدر</span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> اِسْتِفْعَالٌ </div>
                    <div className="arsent__translate"> Встреча, приём </div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original contrast"> اِسْتِقَالةٌ </div>
                    <div className="arsent__translate"> Просьба об уволнении </div>
                  </div>
                </div>

                {/* <div className="item">
                  <h2 className="h2ar ">  <span role="img" aria-label="Writing Hand"> ✍️ </span>  </h2>
                  <span className="item__label"> اسم الفَاعِل </span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> </div>
                    <div className="arsent__translate"> </div>
                  </div>
                </div>

                <div className="item">
                  <h2 className="h2ar ">  <span role="img" aria-label="Writing Hand"> ✍️ </span>  </h2>
                  <span className="item__label"> اسم المَفْعُول </span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> </div>
                    <div className="arsent__translate"> </div>
                  </div>
                </div> */}
              </div>

              <h2 className="title">
                {' '}
                Примеры{' '}
                <span role="img" aria-label="Writing Hand">
                  &nbsp;✍️
                </span>{' '}
              </h2>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> أَسْتَحِمُّ </span>
                  <span> كلَّ صَباح </span>
                </div>
                <div className="arsent__translate"> Принимаю ванную каждое утро </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> يَسْتَمِرُّ </span>
                  <span> الامتحانُ يومين </span>
                </div>
                <div className="arsent__translate"> Экзамен продолжается два дня </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> اِسْتَعِدّوا </span>
                  <span> لِلامتحان فإنه قريب جِداً </span>
                </div>
                <div className="arsent__translate"> Готовтись к экзамену он очень близко </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> اِسْتَسْلَمَ </span>
                  <span> المُجرِمُ لِلشُّرْطَة </span>
                </div>
                <div className="arsent__translate"> Преступник капитулировал (сдался) полицейскому </div>
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
