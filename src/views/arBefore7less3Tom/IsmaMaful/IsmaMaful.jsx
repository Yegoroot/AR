import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class IsmaMaful extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Header
          color="transparent"
          brand="اسم المَفْول"
          isBrandAr
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
              <h1 className="title">اسم المَفْول</h1>
              <h2 className="title">Основная форма</h2>
              <div className="desc">Лицо или предметы на которых падает действие. Например</div>

              <div className="arsent">
                <div className="arsent__original">
                  كَتَبَ -<span className="contrast"> مَكْتُوب </span>
                </div>
                <div className="arsent__translate" />
              </div>

              <div className="desc">
                <span className="desc__ar"> مَكْتُوب </span> - это предмет на которое падает действие.
                <span className="desc__ar"> كَتَبَ </span>, то есть это письмо, запись, это то что написано
              </div>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> المَضْرُوب </span> (ضَرَبَ)
                </div>
                <div className="arsent__translate">Побитый</div>
              </div>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> المقْتُول </span> (قتل)
                </div>
                <div className="arsent__translate">Убитый</div>
              </div>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> المجْهول </span> (جهل)
                </div>
                <div className="arsent__translate">Неизвестный</div>
              </div>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> المعلوم </span> (علم)
                </div>
                <div className="arsent__translate">Известный</div>
              </div>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> المسروق </span> (سرق)
                </div>
                <div className="arsent__translate">Украденный</div>
              </div>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> المفتُوح </span> (فتح)
                </div>
                <div className="arsent__translate">Открытый</div>
              </div>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast"> المَفْهُول </span> (فهِم)
                </div>
                <div className="arsent__translate">Понятно, понятый</div>
              </div>

              <h2 className="title">اسم المَفْول со слабой средней </h2>
              <h3 className="title">1 шаблон</h3>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  قال - <strike> مَقْوُول </strike> - <span className="contrast"> مَقُول </span>
                </div>
                <div className="arsent__translate">То что сказанно</div>
              </div>
              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  لام - <span className="contrast"> مَلُوم </span>
                </div>
                <div className="arsent__translate">Порицаемый</div>
              </div>

              <h3 className="title">2 шаблон</h3>
              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  باع - <strike>مبْيُوع</strike> - <span className="contrast"> مَبِيع </span>
                </div>
                <div className="arsent__translate">То что проданно</div>
              </div>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  كال - <span className="contrast"> مَكِيل </span>
                </div>
                <div className="arsent__translate">То что измерено</div>
              </div>

              <h2 className="title">اسم المَفْول со слабой последней </h2>
              <h3 className="title">1 шаблон</h3>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  دَعا - <span className="contrast"> مَدْعُوٌّ </span>
                </div>
                <div className="arsent__translate">Призванный, приглашенный</div>
              </div>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  تلا - <span className="contrast"> متلُوٌّ </span>
                </div>
                <div className="arsent__translate">То чему следуют</div>
              </div>

              <h3 className="title">2 шаблон</h3>
              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  بنى - <span className="contrast"> مبنِيٌّ </span>
                </div>
                <div className="arsent__translate">Построенный</div>
              </div>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  قلى - <span className="contrast"> مَقْلِيٌّ </span>
                </div>
                <div className="arsent__translate">Пожаренный</div>
              </div>

              <h2 className="title">اسم المَفْول с шаддой </h2>
              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span>سَرَّ</span> - <span className="contrast">مَسرُور</span>
                </div>
                <div className="arsent__translate">Радовать</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(IsmaMaful)
