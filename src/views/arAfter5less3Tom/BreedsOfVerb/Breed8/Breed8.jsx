import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import { Helmet } from 'react-helmet'

class Breed8 extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>8 порода арабского глагола</title>
          <meta
            name="description"
            content="Восьмая порода арабского глагола اِفْتَعَلَ. Добавлен алиф ا перед первой буквой и ت после неё. Основное значение возвратность, так же это действие которое совершается  для самого деятеля"
          />
        </Helmet>
        <Header
          color="transparent"
          brand="VIII порода"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque1.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">
                Глагол восьмой породы (اِفْتَعَلَ)&nbsp;<span className="ph">§</span>
              </h1>

              <div className="desc">
                Добавлен алиф <span className="desc__ar"> ا </span> перед первой буквой и <span className="desc__ar"> ت </span>
                после неё. Основное значение <b> возвратность </b>, так же это действие которое совершается <b> для самого деятеля </b> Так
                же добавочный смысл (добавочный оттенок) заключается в том что акцентируется сама деятельность деятеля, например
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  كَسَبَ - <span className="contrast"> اِكْتَسَبَ </span>
                </div>
                <div className="arsent__translate">
                  Приобретал (не зависимо от усилий) - <span className="contrast"> приобретал </span> (в результате своей деятельности,
                  своего искания)
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  تَبِعَ - <span className="contrast"> اِتَّبَعَ </span>
                </div>
                <div className="arsent__translate">
                  Следовал, шел [за кем то] - <span className="contrast"> следовал, шел [за кем то]</span> (осознано за кем то следовал,
                  сознательно, придерживался осознанной линии в своих действиях )
                </div>
              </div>

              <h3 className="title">
                Если первая кореная <span className="desc__ar"> ز, د, ذ </span>, то вместо <span className="desc__ar"> ت </span>
                ставится <span className="desc__ar"> د </span>
              </h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span> زان - </span>
                  <span className="contrast"> اِزْدَانَ </span>
                </div>
                <div className="arsent__translate">Украшал - украсился</div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> ذَكَرَ - </span>
                  <span className="contrast"> اِذدَكَرَ / أِذَّكر / اِدَّكَرَ </span>
                </div>
                <div className="arsent__translate">Упоминал - вспоминал</div>
              </div>

              <h3 className="title">
                Если первая кореная <span className="desc__ar"> ص, ض, ظ, ط </span>, то вместо <span className="desc__ar"> ت </span>
                ставится <span className="desc__ar"> ط </span>
              </h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span> ضَرَبَ - </span>
                  <span className="contrast"> اِضْطَرَبَ </span>
                </div>
                <div className="arsent__translate">
                  Бил - <span className="contrast"> был возбужденным, волновался </span>
                </div>
              </div>

              <h3 className="title">
                Если первая кореная <span className="desc__ar"> و </span>, то она становится <span className="desc__ar"> ت </span>
              </h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span> وَصَلَ - </span>
                  <span className="contrast"> اِتَّصَلَ </span>
                </div>
                <div className="arsent__translate">
                  Прибыл - <span className="contrast"> соединился</span>
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
                  <h2 className="h2ar ">اِفْتَعَلَ </h2>
                  <span className="item__label">الماضي</span>
                  <div className="arsent">
                    <div className="arsent__original contrast">اِنْتَظَر</div>
                    <div className="arsent__translate">Ждал</div>
                  </div>
                </div>

                <div className="item">
                  <h2 className="h2ar ">يَفْتَعِلُ </h2>
                  <span className="item__label">المُضارِع</span>
                  <div className="arsent">
                    <div className="arsent__original contrast">يَنْتَظِرُ</div>
                    <div className="arsent__translate">Ждёт</div>
                  </div>
                </div>

                <div className="item">
                  <h2 className="h2ar ">اِفْتَعِلْ </h2>
                  <span className="item__label">الأمر</span>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast"> اِنتَظِرْ </span>
                    </div>
                    <div className="arsent__translate">Жди</div>
                  </div>
                </div>

                <div className="item">
                  <h2 className="h2ar ">مُفْتَعِلٌ </h2>
                  <span className="item__label"> اسم الفَاعِل </span>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast"> مُنْتَظِرٌ </span>
                    </div>
                    <div className="arsent__translate">Ожидающий</div>
                  </div>
                </div>

                <div className="item">
                  <h2 className="h2ar ">اِفْتِعَالٌ </h2>
                  <span className="item__label">المصدر</span>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast"> اِنْتِظَارٌ </span>
                    </div>
                    <div className="arsent__translate">Ожидание</div>
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
                  <span> لِما </span>
                  <span className="contrast"> أَخْرَجْتَ </span>
                  <span> السبّور يا أسامةُ؟ </span>
                  <span className="contrast"> أَدْخِلْهَا </span>
                  <span> بِسُرْعَةٍ </span>
                </div>
                <div className="arsent__translate"> Зачем ты вытащил доску? Затащи ее обратно, быстро </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> و ما </span>
                  <span className="contrast"> أَدْراكَ </span>
                  <span> أَنّهُ يَكْذِب؟ </span>
                </div>
                <div className="arsent__translate"> Что заставило тебя знать что он врёт? </div>
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

export default withStyles(arabicPageStyle)(Breed8)
