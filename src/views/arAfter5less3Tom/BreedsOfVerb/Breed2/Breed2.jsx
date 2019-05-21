import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
// import AnimateCard from 'components/AnimateCard/AnimateCard'
// import Word from 'components/word'
/** ОБСТОЯТЕЛЬСТВО МЕСТО И ВРЕМЕНИ
 *
 * группы: [level_3, разное]
 *
 */
class AlMafuluFihi extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
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

        <Parallax small filter image={require('assets/img/mosque/mosque7.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="h1ar">(II) فَعَّلَ</h1>

              <div className="desc">
                Прибавлена одна служебная буква.
                <br />
                <b className="desc__ar">
                  <span className="contrast"> فَعَّلَ </span>
                  <span> = </span>
                  <span> فَ </span>
                  <span className="contrast"> عْ </span>
                  <span> عَ لَ </span>
                </b>
              </div>

              {/* <AnimateCard>
                <div className="arsent arsent_rule">
                  <div className="arsent__translate">
                    <span className="contrast">Приставки </span> настоящего времени в{' '}
                    <span className="contrast">четырёх буквенных </span> глаголах ВСЕГДА
                    <span className="contrast"> приходят с Даммой </span>
                  </div>
                </div>
              </AnimateCard> */}

              <div className="items items_islabel">
                <div className="item">
                  <h2 className="h2ar ">فَعَّلَ</h2>
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
                  <span className="item__label">الماضي</span>
                </div>
                <div className="item">
                  <h2 className="h2ar ">يُفَعِّلُ</h2>
                  <div className="arsent">
                    <div className="arsent__original contrast">يُعَلِّمُ</div>
                    <div className="arsent__translate">Обучает</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original contrast">يُدَرِّسُ</div>
                    <div className="arsent__translate">Учит</div>
                  </div>
                  <span className="item__label">المُضارِع</span>
                </div>

                <div className="item">
                  <h2 className="h2ar ">مُفَعِّلٌ</h2>
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
                  <h2 className="h2ar ">مُفَعَّلٌ</h2>
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
                  <h2 className="h2ar ">فَعَّلْ</h2>
                  <div className="arsent">
                    <div className="arsent__original contrast">سَلِّمْ</div>
                    <div className="arsent__translate">Дай салям!</div>
                  </div>
                  <span className="item__label">الأمر</span>
                </div>
                <div className="item">
                  <h2 className="h2ar ">تَفْعِيلٌ</h2>
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
                  <span className="item__label">المصدر</span>
                </div>
              </div>

              <h2 className="h2ar"> اسم مكان و زمان </h2>

              <div className="desc">
                Что касается
                <span className="desc__ar"> اسم مكان و زمان </span> то он образуется от <span className="desc__ar"> اسم المَفْول </span>.
                Например:
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  صلَّى - يُصَلِّي -<span className="contrast"> مُصَلًّى </span>
                </div>
                <div className="arsent__translate">молился - молится - место молитвы</div>
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

export default withStyles(arabicPageStyle)(AlMafuluFihi)
