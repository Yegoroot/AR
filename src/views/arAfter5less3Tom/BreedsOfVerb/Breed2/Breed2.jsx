import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

class AlMafuluFihi extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>2 порода арабского глагола</title>
          <meta
            name="description"
            content="Глагол второй породы приходит со значениями: учащение (التَكْثِيرُ) или
            (المُبَالَغَةُ) усиление. Образуется по шаблону فَعَّلَ и происходит от первообразного с добавлением одной служебной буквы"
          />
        </Helmet>
        <Header
          color="transparent"
          brand="II порода"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque25.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">
                Глагол второй породы&nbsp;(فَعَّلَ)&nbsp;<span className="ph">§</span>
              </h1>

              <div className="desc">
                К первообразному добавлена одна служебная буква по модели فَعَّلَ, и глагол стал называться
                <b> "глагол с одной служебной буквой" </b>
                (для арабоязычных) или <b> "глагол 2 породы" </b> (для востоковедов).
              </div>
              <div className="desc">
                Имеет значения: <b> учащение </b>
                <b className="desc__ar"> (التَكْثِيرُ) </b> или
                <b> усиление </b> <b className="desc__ar"> (المُبَالَغَةُ) </b>. Еще глагол второй породы используется для того чтоб
                сообщить <b> переходность глаголам непереходным </b> или
                <b> двойную переходность глаголам переходным </b> и некоторый оттенок принудительности. Подробней о теме переходности
                смотрите в разделе
                <Link to="/verbtransitive"> переходность глаголов </Link>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> جَوَّلَ </span>
                  <span> - أي جَال كَثِيراً </span>
                </div>
                <div className="arsent__translate">Тот кто мнооого путешествует</div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> قَتَّلَ </span>
                  <span> - أي بَالَغَ فِي القتْلِ </span>
                </div>
                <div className="arsent__translate">Тот кто мнооого убивал (геноцид совершал)</div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> كَسَّرَتُ </span>
                  <span> الأقْلامَ </span>
                </div>
                <div className="arsent__translate">
                  Ломал мнооого ручек. <b className=""> (учащение)</b>
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> كَسَّرَتُ </span>
                  <span> القَلَمَ </span>
                </div>
                <div className="arsent__translate">
                  Ручку сломал в дребезги. <b className=""> (усиление) </b>
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
                  <h2 className="h2ar ">فَعَّلَ </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast">عَلَّمَ</span>
                    </div>
                    <div className="arsent__translate">Обучал</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast">سَلَّمَ</span>
                    </div>
                    <div className="arsent__translate">Давал салям</div>
                  </div>
                  <span className="item__label">الماضي </span>
                </div>
                <div className="item">
                  <h2 className="h2ar ">يُفَعِّلُ </h2>
                  <div className="arsent">
                    <div className="arsent__original contrast">يُعَلِّمُ</div>
                    <div className="arsent__translate">Обучает</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original contrast">يُدَرِّسُ</div>
                    <div className="arsent__translate">Учит</div>
                  </div>
                  <span className="item__label">المُضارِع </span>
                </div>

                <div className="item">
                  <h2 className="h2ar ">مُفَعِّلٌ </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> عَلَّمَ </span>-<span> يُعَلِّمُ </span>-<span className="contrast"> مُعَلِّمٌ </span>
                    </div>
                    <div className="arsent__translate">Преподователь</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> دَرَّسَ </span>- <span> يُدَرِّسُ </span>-<span className="contrast"> مُدَرِّسٌ </span>
                    </div>
                    <div className="arsent__translate">Учитель</div>
                  </div>
                  <span className="item__label"> اسم الفَاعِل </span>
                </div>

                <div className="item">
                  <h2 className="h2ar ">مُفَعَّلٌ </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> سَجَّلَ </span>-<span className="contrast"> مُسَجَّلٌ </span>
                    </div>
                    <div className="arsent__translate">Записанный</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> حمَّدَ </span>-<span className="contrast"> مُحَمَّدٌ </span>
                    </div>
                    <div className="arsent__translate">Тот, кого хвалят (премного)</div>
                  </div>
                  <span className="item__label"> اسم المَفْعُول </span>
                </div>

                <div className="item">
                  <h2 className="h2ar ">فَعَّلْ </h2>
                  <div className="arsent">
                    <div className="arsent__original contrast">سَلِّمْ</div>
                    <div className="arsent__translate">Дай салям!</div>
                  </div>
                  <span className="item__label">الأمر </span>
                </div>
                <div className="item">
                  <h2 className="h2ar ">تَفْعِيلٌ </h2>
                  <div className="arsent">
                    <span className="arsent__original">
                      سَلِّمَ - <span className="contrast"> تَسْلِيْمٌ </span>
                    </span>
                    <div className="arsent__translate">Приветствие салямом</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> حَيَّى </span> -<span className="contrast"> تَحِيَّةٌ </span>
                    </div>
                    <div className="arsent__translate">Приветствие</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> هَنَّأَ</span> -<span className="contrast"> تَهْنِئَةٌ </span>
                    </div>
                    <span className="arsent__translate">
                      Поздравление [ Иногда эти масдары приходит с <span className="desc__ar"> ة </span>, <br /> если глагол содержит слабую
                      букву в конце ]
                    </span>
                  </div>
                  <span className="item__label">المصدر </span>
                </div>
              </div>

              <h2 className="h2ar title">
                <span role="img" aria-label="Writing Hand">
                 &nbsp;اسم مكان و زمان&nbsp;{'✍️'}
                </span>
              </h2>

              <div className="desc">
                Что касается
                <span className="desc__ar"> اسم مكان و زمان </span> то он образуется от <span className="desc__ar"> اسم المَفْول </span>.
                Например:
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  صلَّى - يُصَلِّي -<span className="contrast"> مُصَلًّى </span>
                </div>
                <div className="arsent__translate">
                  молился - молится - <span className="contrast"> место молитвы </span>
                </div>
              </div>

              <h2 className="title">
                <span role="img" aria-label="Writing Hand">
                  Дополнительные примеры&nbsp;💪
                </span>
              </h2>

              <div className="arsent">
                <div className="arsent__original">
                  <span> فَرِحَ </span> -<span className="contrast"> فَرَّحَ </span>
                </div>
                <div className="arsent__translate">
                  Радовался - <span className="contrast"> Обрадовал </span>
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> أظُنّ أنّني </span>
                  <span className="contrast"> فَهَّمتُكُمْ </span>
                </div>
                <div className="arsent__translate">
                  Думаю что <span className="contrast"> заставил </span> вас <span className="contrast"> понять </span>
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

export default withStyles(arabicPageStyle)(AlMafuluFihi)
