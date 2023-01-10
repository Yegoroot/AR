import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import Word from 'components/word'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import { Helmet } from 'react-helmet'

class Breed7 extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <meta
            http-equiv="refresh"
            content="0; url=https://grammar.arabic.best/rules/breeds/breed-7"
          />
          <title>7 порода арабского глагола</title>
          <meta
            name="description"
            content="Седьмая порода арабского глагола انْفَعَلَ передаёт значение возвратности только при образовании от переходных глаголов. Иногда переходит к страдательное."
          />
        </Helmet>
        <Header
          color="transparent"
          brand="VII порода"
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
          image={require('assets/img/mosque/mosque30.jpg')}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">
                Глагол седьмой породы (انْفَعَلَ)&nbsp;
                <span className="ph">§</span>
              </h1>

              <div className="desc">
                Приходит со значением <b> возвратности </b>{' '}
                <b className="desc__ar"> المُطَاوَعَة </b>.
                <br />
                <br />
                Передаёт значение возвратности только при образовании от
                переходных глаголов. Иными словами: чтоб 7ая порода стала
                возвратной к первой, первая порода должна принадлежать к
                глаголам переходным
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> فَتَحْتُ البابَ, </span>
                  <span className="contrast"> فانْفَتَحَ </span>
                </div>
                <div className="arsent__translate">
                  Открыл я дверь, дверь открылась
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> قَلَبْتُ الكتاب </span>
                  <span>.</span>
                  <span className="contrast"> اِنْقَلَبَ </span>
                  <span> الكتاب </span>
                </div>
                <div className="arsent__translate">
                  Перевернул я книгу. Книга перевернулась
                </div>
              </div>

              <div className="desc">
                При вопросительном <span className="desc__ar"> أَ </span>{' '}
                соединительная хамза отпадает
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> اِنْهَزَمَ المُشْرِكُونَ </span>
                </div>
                <div className="arsent__translate">
                  Мушрики обратились в бегство
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <Word root="نْهَزَمَ" prefix="أَ" />
                  <span> المُشْرِكُونَ؟ </span>
                </div>
                <div className="arsent__translate">
                  А обратились мушрики в бегство?
                </div>
              </div>

              <h2 className="title">
                Шаблоны
                <span role="img" aria-label="Writing Hand">
                  &nbsp;✍️
                </span>
              </h2>

              <div className="items items_islabel">
                <div className="item">
                  <h2 className="h2ar ">اِنْفَعَلَ </h2>
                  <span className="item__label">الماضي</span>
                  <div className="arsent">
                    <div className="arsent__original contrast">اِنْكَسَرَ</div>
                    <div className="arsent__translate">Был сломанным</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original contrast">اِنْجَلى</div>
                    <div className="arsent__translate">Был ясным</div>
                  </div>
                </div>

                <div className="item">
                  <h2 className="h2ar ">يَنْفَعِلُ </h2>
                  <span className="item__label">المُضارِع</span>
                  <div className="arsent">
                    <div className="arsent__original contrast">يَنْكَسِرُ</div>
                    <div className="arsent__translate">Ломается</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original contrast">يَنْجَلِي</div>
                    <div className="arsent__translate">Яснеет</div>
                  </div>
                </div>

                <div className="item">
                  <h2 className="h2ar ">مُنْفَعِلٌ </h2>
                  <span className="item__label">المصدر</span>
                  <div className="arsent">
                    <div className="arsent__original contrast">مُنْكَسِرٌ</div>
                    <div className="arsent__translate">Ломанный</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original contrast">مُنْجَلٍ</div>
                    <div className="arsent__translate"> </div>
                  </div>
                </div>

                <div className="item">
                  <h2 className="h2ar ">اِنْفِعَالٌ </h2>
                  <span className="item__label"> اسم الفَاعِل </span>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast"> اِنكِسَارٌ </span>
                    </div>
                    <div className="arsent__translate">Поломка</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast"> اِنْجِلاءٌ </span>
                    </div>
                    <div className="arsent__translate"> </div>
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
                  <span> وَقَعَ الكُوبُ على الأرض و </span>
                  <span className="contrast"> انْكَسَرَ </span>
                </div>
                <div className="arsent__translate">
                  Упал стакан на землю и разбился
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> سافر الفَرِيق</span>
                  <span className="contrast"> المُنْهَزِم </span>
                </div>
                <div className="arsent__translate">
                  Проигравшая команда уехала
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

export default withStyles(arabicPageStyle)(Breed7)
