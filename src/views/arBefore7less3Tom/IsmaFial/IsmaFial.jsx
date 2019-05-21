import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import ismfial from 'assets/img/content/ismfial.PNG'

class IsmaFial extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
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
              <h1 className="title h1ar">اسم الفاعِل</h1>
              <h2 className="title">Основная форма</h2>
              <div className="desc">
                <b>Лицо деятель</b> можно перевести как "действительное причастие" это имя существительное указывает на того кто выполняет
                действие. Деятель трёх буквенного глагола образуется по шаблону
                <span className="contrast desc__ar"> الفاعِل </span>
              </div>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> الضارِب </span> (ضَرَبَ)
                </div>
                <div className="arsent__translate">Тот кто бъет</div>
              </div>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> القاتِل </span> (قتل)
                </div>
                <div className="arsent__translate">Убица</div>
              </div>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> الجالِس </span> (جلس)
                </div>
                <div className="arsent__translate">Сидящий</div>
              </div>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> الكاتِب </span> (كتب)
                </div>
                <div className="arsent__translate">Писатель</div>
              </div>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> العابِد </span> (عبد)
                </div>
                <div className="arsent__translate">Раб</div>
              </div>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> الناصِح </span> (نصح)
                </div>
                <div className="arsent__translate">Советующий</div>
              </div>

              {/* ------ */}

              <h2 className="title">اسم الفاعِل у глаголов с шаддой</h2>
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

              <h2 className="title">اسم الفاعِل у глаголов со средней слабой</h2>
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
              <h2 className="title">اسم الفاعِل у глаголов со слабой последней</h2>

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
              <h2 className="title">С точки зрения сарф и нахв</h2>
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
