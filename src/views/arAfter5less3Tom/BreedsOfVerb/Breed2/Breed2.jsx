import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import AnimateCard from 'components/AnimateCard/AnimateCard'
import Word from 'components/word'
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
              <h1 className="h1ar">II порода (فَعَّلَ)</h1>

              <div className="desc">
                Прибавлена одна служебная буква.
                <b className="desc__ar">
                  <span className="contrast"> فَعَّلَ </span>
                  <span> = </span>
                  <span> فَ </span>
                  <span className="contrast"> عْ </span>
                  <span> عَ لَ </span>
                </b>
              </div>

              <AnimateCard>
                <div className="arsent arsent_rule">
                  <div className="arsent__translate">
                    <span className="contrast_2">Приставки </span> настоящего времени (например
                    <span className="desc__ar ">
                      <Word prefix="يُ" root="سَلِّمُ" />
                    </span>
                    ) в <span className="contrast_2">четырёх буквенных </span> глаголах ВСЕГДА
                    <span className="contrast"> приходят с Даммой </span>
                  </div>
                </div>
              </AnimateCard>
              <AnimateCard>
                <div className="arsent arsent_rule">
                  <div className="arsent__translate">
                    <span className="contrast_2">Масдары </span> для трёхбуквенных глаголов основываются на усных традициях. А что касается{' '}
                    <span className="contrast_2">производных глаголов</span> то у них есть
                    <span className="contrast"> определенные шаблоны </span>
                  </div>
                </div>
              </AnimateCard>

              <div className="items items_islabel">
                <div className="item">
                  <h2 className="h2ar ">فَعَّلَ</h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast_2">عَلَّمَ</span>
                    </div>
                    <div className="arsent__original">
                      <span className="contrast_2">سَلِّمَ</span>
                    </div>
                  </div>
                  <span className="item__label">الماضي</span>
                </div>
                <div className="item">
                  <h2 className="h2ar ">يُفَعِّلُ</h2>
                  <div className="arsent">
                    <div className="arsent__original contrast_2">يُعَلِّمُ</div>
                    <div className="arsent__original contrast_2">يُدَرِّسُ</div>
                  </div>
                  <span className="item__label">المُضارِع</span>
                </div>

                <div className="item">
                  <h2 className="h2ar ">مُفَعِّلٌ</h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> عَلَّمَ </span>-<span> يُعَلِّمُ </span>-<span className="contrast_2"> مُعَلِّمٌ </span>
                    </div>
                    <div className="arsent__original">
                      <span> دَرَّسَ </span>- <span> يُدَرِّسُ </span>-<span className="contrast_2"> مُدَرِّسٌ </span>
                    </div>
                  </div>
                  <span className="item__label"> اسم الفَاعِل </span>
                </div>

                <div className="item">
                  <h2 className="h2ar ">مُفَعَّلٌ</h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> سَجَّلَ </span>-<span className="contrast_2"> مُسَجَّلٌ </span>
                    </div>
                    <div className="arsent__original">
                      <span> حمَّدَ </span>-<span className="contrast_2"> مُحَمَّدٌ </span>
                    </div>
                  </div>
                  <span className="item__label"> اسم المَفْعُول </span>
                </div>

                <div className="item">
                  <h2 className="h2ar ">فَعَّلْ</h2>
                  <div className="arsent">
                    <div className="arsent__original contrast_2">سَلِّمْ</div>
                  </div>
                  <span className="item__label">الأمر</span>
                </div>
                <div className="item">
                  <h2 className="h2ar ">تَفْعِيلٌ</h2>
                  <div className="arsent">
                    <span className="arsent__original">
                      سَلِّمَ - <span className="contrast_2"> تَسْلِيْمٌ </span>
                    </span>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> حَيَّى </span> -<span className="contrast_2"> تَحِيَّةٌ </span>
                    </div>
                    <div className="arsent__original">
                      <span> هَنَّأَ</span> -<span className="contrast_2"> تَهْنِئَةٌ </span>
                    </div>
                    <div className="arsent__translate">
                      Иногда приходит с <span className="desc__ar"> ة </span>, если глагол содержит слабую букву в конце
                    </div>
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
