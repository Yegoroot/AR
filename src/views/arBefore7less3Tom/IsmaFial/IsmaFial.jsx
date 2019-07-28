import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import ismfial from 'assets/img/content/ismfial.PNG'
import { Helmet } from 'react-helmet'

class IsmaFial extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Лицо деятеля (اسم الفاعِل )</title>
          <meta
            name="description"
            content='Лицо деятель можно перевести как "действительное причастие" это имя существительное указывает на того кто выполняет действие.'
          />
        </Helmet>
        <Header
          color="transparent"
          brand="اسم الفاعِل"
          isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,

            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque19.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title h1ar">
                اسم الفاعِل&nbsp;<span className="ph">§</span>
              </h1>
              <div className="desc">
                <b>Лицо деятель</b> можно перевести как "действительное причастие" это имя существительное указывает на того кто выполняет
                действие. Деятель трёх буквенного глагола образуется по шаблону
                <span className="contrast desc__ar"> الفاعِل </span>
              </div>

              <div className="arsent">
                <div>
                  <span className="arsent__original" dir="rtl">
                    <span className="contrast"> الضارِب </span>
                    <span className="desc__ar"> (ضَرَبَ) </span>
                  </span>
                  <span className="arsent__translate">&nbsp; Тот кто бъет&nbsp;</span>
                </div>

                <div>
                  <span className="arsent__original" dir="rtl">
                    <span className="contrast"> القاتِل </span>
                    <span className="desc__ar"> (قتل) </span>
                  </span>
                  <span className="arsent__translate">&nbsp; Убица&nbsp;</span>
                </div>

                <div>
                  <span className="arsent__original" dir="rtl">
                    <span className="contrast"> الجالِس </span>
                    <span className="desc__ar"> (جلس) </span>
                  </span>
                  <span className="arsent__translate">&nbsp; Сидящий&nbsp;</span>
                </div>

                <div>
                  <span className="arsent__original" dir="rtl">
                    <span className="contrast"> الكاتِب </span>
                    <span className="desc__ar"> (كتب) </span>
                  </span>
                  <span className="arsent__translate">&nbsp; Писатель&nbsp;</span>
                </div>

                <div>
                  <span className="arsent__original" dir="rtl">
                    <span className="contrast"> العابِد </span>
                    <span className="desc__ar"> (عبد) </span>
                  </span>
                  <span className="arsent__translate">&nbsp; Раб&nbsp;</span>
                </div>

                <div>
                  <span className="arsent__original" dir="rtl">
                    <span className="contrast"> الناصِح </span>
                    <span className="desc__ar"> (نصح) </span>
                  </span>
                  <span className="arsent__translate">&nbsp; Советующий&nbsp;</span>
                </div>
              </div>

              {/* ------ */}

              <h2 className="title">
                اسم الفاعِل у глаголов с шаддой<span role="img" aria-label="Writing Hand">
                  &nbsp;✍️</span></h2>
              <div className="desc">
                Не смотря на то что حَاجٌَ и ему подобные не похожи на اسم الفاعِل, мы чётко видим по каким принципам образуется это лицо
                деятель
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  حجّ - حَجْجَ - حاجِج =<span className="contrast"> حَاجٌَ </span>
                </div>
                <div className="arsent__translate">Тот кто в хадже</div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  مًرَّ -<span className="contrast"> مارٌّ </span>
                </div>
                <div className="arsent__translate">Приходящий</div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  ضَلَّ -<span className="contrast"> ضالّ </span>
                </div>
                <div className="arsent__translate">Заблудший</div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  دَلّ -<span className="contrast"> دالّ </span>
                </div>
                <div className="arsent__translate">Указывающий</div>
              </div>

              {/* -------- */}

              <h2 className="title">
                اسم الفاعِل у глаголов со средней слабой<span role="img" aria-label="Writing Hand">
                  &nbsp;✍️</span></h2>
              <div className="desc">Когда мы хотим образовать اسم الفاعِل со средней больной, то меняем коренной алиф на хамзу</div>
              <div className="arsent">
                <div className="arsent__original">
                  قَال -<span className="contrast"> قائِل </span>
                </div>
                <div className="arsent__translate">Говорящий</div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  صام -<span className="contrast"> صَائِم </span>
                </div>
                <div className="arsent__translate">Постящийся</div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  نَام -<span className="contrast"> نائِم </span>
                </div>
                <div className="arsent__translate">Спящий</div>
              </div>

              {/* -------- */}
              <h2 className="title">
                اسم الفاعِل у глаголов со слабой последней<span role="img" aria-label="Writing Hand">
                  &nbsp;✍️</span></h2>

              <div className="arsent">
                <div className="arsent__original">
                  <span> هَدى </span> -<span className="contrast"> هادٍ </span>-<span className="contrast"> الهادِي </span>
                </div>
                <div className="arsent__translate">Руководитель (не определенный и определенный)</div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> بَنَى </span>-<span className="contrast"> بانٍ </span>-<span className="contrast"> البانِي </span>
                </div>
                <div className="arsent__translate">Строитель (не определенный и определенный)</div>
              </div>

              {/* -------- */}
              <h2 className="title">
                С точки зрения сарф и нахв<span role="img" aria-label="Writing Hand">
                  &nbsp;✍️</span></h2>
              <div className="desc">
                На картинке показаны подходы с точки зрения сарфа и нахв, три разных предложения и три разных роли у одного слова
              </div>
            </div>
            <img src={ismfial} style={{ width: '100%' }} alt="Схема 1" />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(IsmaFial)
