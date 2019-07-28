import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import { Helmet } from 'react-helmet'

class Breed3 extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>3 порода арабского глагола</title>
          <meta
            name="description"
            content="Глагол третьей породы приходит со значениями: направленность, устремительность. Образуется по шаблону فَاعَلَ   и происходит от первообразного с добавлением одной служебной буквы"
          />
        </Helmet>
        <Header
          color="transparent"
          brand="III порода"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque13.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">
                Глагол третьей породы&nbsp;(فَاعَلَ)&nbsp;<span className="ph">§</span>
              </h1>

              <div className="desc">
                Значений у этого глагола не много, основное: <b> направленность </b> (направление действия в сторону какого то лица или
                цели). Второе значение (перекликается с первым) <b> устремительность </b> (устремление к чему либо) т.е стремление достич
                определённой цели в своём поступке. Так же есть значение <b> соперничество, соревнование </b>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> قَاتَلَ </span>
                </div>
                <div className="arsent__translate">
                  Сражался (старался убить) <b> (устремительность) </b>
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> خَادَعَ </span>
                </div>
                <div className="arsent__translate">
                  Обманывал (старался обмануть) <b> (устремительность) </b>
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> جَالَسَ </span>
                </div>
                <div className="arsent__translate">
                  Сидел (с кем того). Составил компанию (кому то) <b> (направленность) </b>
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> كَاتَبَ </span>
                </div>
                <div className="arsent__translate">
                  Обращался (к кому то) с письмом <b> (направленность) </b>
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> بَارَى </span>
                </div>
                <div className="arsent__translate">
                  Состязаться, соперничать <b> (соперничество, соревнование) </b>
                </div>
              </div>

              <h2 className="title">
                Шаблоны
                <span role="img" aria-label="Writing Hand">
                  {' ✍️ '}
                </span>
              </h2>

              <div className="items items_islabel">
                <div className="item">
                  <h2 className="h2ar ">فَاعَلَ </h2>
                  <div className="arsent">
                    <div className="arsent__original contrast">شَاهَدَ</div>
                    <div className="arsent__translate">Наблюдал, смотрел (направленность)</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original contrast">قَابَلَ</div>
                    <div className="arsent__translate">Встречал, принимал </div>
                  </div>
                  <span className="item__label">الماضي </span>
                </div>
                <div className="item">
                  <h2 className="h2ar "> &nbsp; &nbsp;&nbsp; يُفَاعِلُ </h2>
                  <div className="arsent">
                    <div className="arsent__original contrast">يُشَهِدُ</div>
                    <div className="arsent__translate">Смотрит </div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original contrast">يُقَابِدُ</div>
                    <div className="arsent__translate">Встречает</div>
                  </div>
                  <span className="item__label">المُضارِع </span>
                </div>
                <div className="item">
                  <h2 className="h2ar ">فَاعِلْ </h2>
                  <div className="arsent">
                    <div className="arsent__original contrast">شَاهِدْ</div>
                    <div className="arsent__translate">Наблюдай, смотри, свидетельствуй</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original contrast">قَابِدْ</div>
                    <div className="arsent__translate">Встречай</div>
                  </div>
                  <span className="item__label">الأمر </span>
                </div>
                <div className="item">
                  <h2 className="h2ar ">مُفَاعَلةٌ </h2>
                  <div className="arsent">
                    <div className="arsent__original contrast">مُشاهَدةٌ</div>
                    <div className="arsent__translate">Наблюдение</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original contrast">مُقَابَلَةٌ</div>
                    <div className="arsent__translate">Встреча, Свидание</div>
                  </div>
                  <span className="item__label">المصدر </span>
                </div>
                <div className="item">
                  <h2 className="h2ar ">فِعَالٌ </h2>
                  <div className="arsent">
                    <div className="arsent__original contrast">قِتَالٌ</div>
                    <div className="arsent__translate">Сражение</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original contrast">جِهَاد</div>
                    <div className="arsent__translate">Борьба, Усилия, Усердие</div>
                  </div>
                  <span className="item__label">2 المصدر </span>
                </div>

                <div className="item">
                  <h2 className="h2ar ">مُفَاعِلٌ </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> يُشَاهِدُ </span>-<span className="contrast"> مُشَاهِدٌ </span>
                    </div>
                    <div className="arsent__translate">Наблюдатель</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> يُسَاعِدُ </span>-<span className="contrast"> مُسَعِدٌ </span>
                    </div>
                    <div className="arsent__translate">Помошник</div>
                  </div>
                  <span className="item__label"> اسم الفَاعِل </span>

                  <div className="arsent">
                    <div className="arsent__original">
                      <span> يُجاهِدُ </span>-<span className="contrast"> مُجَاهِدٌ </span>
                    </div>
                    <div className="arsent__translate">Борец, усердсвтующий</div>
                  </div>
                  <span className="item__label"> اسم الفَاعِل </span>
                </div>

                <div className="item">
                  <span className="item__label"> اسم المَفْعُول </span>
                  <h2 className="h2ar ">مُفَاعَلٌ </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> خَاطَبَ </span>-<span className="contrast"> مُخَاطَبُ </span>
                    </div>
                    <div className="arsent__translate">Тот, к кому обращаются с речью</div>
                  </div>
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

export default withStyles(arabicPageStyle)(Breed3)
