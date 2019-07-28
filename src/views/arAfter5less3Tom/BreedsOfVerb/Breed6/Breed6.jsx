import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import { Helmet } from 'react-helmet'

class Breed6 extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>6 порода арабского глагола</title>
          <meta
            name="description"
            content='Глагол шестой породы арабского глагола تَفَاعَلَ образуется от третьей породы при помощи приставки ت. И приходит со значением "Взаимность действия"'
          />
        </Helmet>
        <Header
          color="transparent"
          brand="VI порода"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque29.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">
                Глагол шестой породы (تَفَاعَلَ)&nbsp;<span className="ph">§</span>
              </h1>

              <div className="desc">
                Его основные значения - <b> взаимность действия </b>, <b> взаимное чередование </b>. Так же имеет значение
                <b> притвориться чем либо </b>. Образуется от третей породы при помощи приставки <b classname="desc__ar"> ت </b>. В третьей
                породе действие было направлено к какому то субъекту, в шестой породе приставка
                <b classname="desc__ar"> ت </b> приводит к полной взаимности действий. (<b classname="desc__ar"> ت </b> возвратная)
              </div>

              <div className="items items_islabel">
                <div className="item">
                  <h2 className="h2ar ">تَفَاعَلَ </h2>
                  <span className="item__label">الماضي</span>
                  <div className="arsent">
                    <div className="arsent__original contrast">تَعَاوَنَ</div>
                    <div className="arsent__translate">Сотрудничали</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original contrast">تَبَاكَىَ</div>
                    <div className="arsent__translate">Притворялся плачущим</div>
                  </div>
                </div>

                <div className="item">
                  <h2 className="h2ar ">يَتَفَاعَلُ </h2>
                  <span className="item__label">المُضارِع</span>
                  <div className="arsent">
                    <div className="arsent__original contrast">يَتَعَاوَنُ</div>
                    <div className="arsent__translate">Сотрудничают</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original contrast">يَتَباكى</div>
                    <div className="arsent__translate">Притворяется плачущим</div>
                  </div>
                </div>

                <div className="item">
                  <h2 className="h2ar ">تَفَاعَلْ </h2>
                  <span className="item__label">الأمر</span>
                  <div className="arsent">
                    <div className="arsent__original contrast">تَعَاوَنْ</div>
                    <div className="arsent__translate">Сотрудничайте</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original contrast">تَبَاكىْ</div>
                    <div className="arsent__translate">Притворись плачущим</div>
                  </div>
                </div>

                <div className="item">
                  <h2 className="h2ar ">تَفَاعُلٌ </h2>
                  <span className="item__label">المصدر</span>
                  <div className="arsent">
                    <div className="arsent__original contrast">تَعَاوُنُ</div>
                    <div className="arsent__translate">Взаимная помощь, сотрудничество</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original contrast">تَبَاكٍ</div>
                    <div className="arsent__translate">Притворство плачущим</div>
                  </div>
                </div>

                <div className="item">
                  <h2 className="h2ar ">مُتَفَاعِلٌ </h2>
                  <span className="item__label"> اسم الفَاعِل </span>
                  <div className="arsent">
                    <div className="arsent__original contrast">مُتَفَائِلٌ</div>
                    <div className="arsent__translate">Оптимист</div>
                  </div>
                </div>
              </div>

              <h2 className="title">
                Примеры
                <span role="img" aria-label="Writing Hand">
                  &nbsp;✍️
                </span>
              </h2>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> تَعَاوَنَ </span>
                  <span> الطلابُ </span>
                </div>
                <div className="arsent__translate"> Помогали студенты друг другу </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> تَمَارَضَ </span>
                  <span> الطَّالبُ </span>
                </div>
                <div className="arsent__translate"> Притворился студент больным </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> أ تَبْكي أم تَتََبَاكى ياوَلَد؟ </span>
                </div>
                <div className="arsent__translate"> Ты плачешь (по настоящему) или притворяешся? </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> تَشَاجَر </span>
                  <span> هؤلاء و </span>
                  <span className="contrast"> تَضَارَبُوا </span>
                </div>
                <div className="arsent__translate"> Поругались и подрались </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> ذاك الرجل ليس بأَعْمى. إنَّما </span>
                  <span className="contrast"> يَتَعامى </span>
                  <span> حتى يَتَصَدَّقَ عليه الناس</span>
                </div>
                <div className="arsent__translate"> Тот мужчина притворяется слепым, Чтоб люди давали ему милостыню </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(Breed6)
