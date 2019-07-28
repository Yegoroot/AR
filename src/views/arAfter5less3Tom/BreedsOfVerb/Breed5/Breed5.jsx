import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import { Helmet } from 'react-helmet'

class Breed5 extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>5 порода арабского глагола</title>
          <meta
            name="description"
            content='Глагол пятой породы (تَفَعَّلَ) образуется добавлением "та возвратности" ко второй породе. Даёт значение возвратности к субъекту от действия глягола второй породы'
          />
        </Helmet>
        <Header
          color="transparent"
          brand="V порода"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque28.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">
                Глагол пятой породы&nbsp;(تَفَعَّلَ)&nbsp;<span className="ph">§</span>
              </h1>

              <div className="desc">
                К глаголу второй породы <b> (усиление, учащение или переходность) </b> прибавили <b className="desc__ar"> ت </b>{' '}
                возвратности на сам объект. Так же значит <b> постепенность </b> (брал знания шаг за шагом)
                <br />
                <br />
                <b className="desc__ar"> تَفَعَّلَ = ت + فَعَّلَ </b> и эта <b className="desc__ar"> ت </b> указывает на возвратность на сам
                субъект (<span className="desc__ar"> فاعِل</span> ).
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> تَعَلَّمَ </span> =<span> ت + عَلَّمَ </span>
                </div>
                <div className="arsent__translate">
                  <span className="contrast"> Обучился </span> - обучил
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> تَزَوَّجَ </span>=<span> ت + زَوَّجَ </span>
                </div>
                <div className="arsent__translate">
                  <span className="contrast"> Женился </span> - женил
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> خَيْرُكُم مَنْ </span>
                  <span className="contrast"> تَعَلَّم </span>
                  <span> القرآن و </span>
                  <span className="contrast_2"> عَلَّمَهُ </span>
                </div>
                <div className="arsent__translate">
                  Лучший из вас тот, кто <span className="contrast"> обучился </span> Корану и
                  <span className="contrast_2"> научил ему </span>
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
                  <span className="item__label">الماضي</span>
                  <h2 className="h2ar ">تَفَعَّلَ </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast">تَعَلَّمَ</span>
                    </div>
                    <div className="arsent__translate">Обучался</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast">تَحَدَّثَ</span>
                    </div>
                    <div className="arsent__translate">Беседовал</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast">تَغَدَّى</span>
                    </div>
                    <div className="arsent__translate">Обедал</div>
                  </div>
                </div>

                <div className="item">
                  <h2 className="h2ar ">يَتَفَعَّلُ </h2>
                  <span className="item__label">المُضارِع</span>
                  <div className="arsent">
                    <div className="arsent__original contrast">يَتَعَلَّمُ</div>
                    <div className="arsent__translate">Обучается</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original contrast">يَتَحَدَّثُ</div>
                    <div className="arsent__translate">Беседует</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original contrast">يَتَغَدَّى</div>
                    <div className="arsent__translate">Обедает</div>
                  </div>
                </div>

                <div className="item">
                  <span className="item__label">الأمر</span>
                  <h2 className="h2ar ">تَفَعَّلْ </h2>
                  <div className="arsent">
                    <div className="arsent__original contrast"> تَعَلَّمْ </div>
                    <div className="arsent__translate">Обучайся</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original contrast"> تَحَدَّثْ </div>
                    <div className="arsent__translate">Проведи беседу</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original contrast"> تَغَدَّ </div>
                    <div className="arsent__translate">Пообедай</div>
                  </div>
                </div>

                <div className="item">
                  <span className="item__label"> اسم الفَاعِل </span>
                  <h2 className="h2ar ">مُتَفَعِّلٌ </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast"> مُتَعَلِّمٌ </span>
                    </div>
                    <div className="arsent__translate">Обучающийся</div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast"> مُتَحَدِّثٌ </span>
                    </div>
                    <div className="arsent__translate">Беседующий</div>
                  </div>
                </div>

                <div className="item">
                  <span className="item__label">المصدر</span>
                  <h2 className="h2ar ">تَفَعَّلٌ </h2>
                  <div className="arsent">
                    <span className="arsent__original">
                      <span className="contrast"> تَعَلُّمٌ </span>
                    </span>
                    <div className="arsent__translate"> Обучение </div>
                  </div>
                  <div className="arsent">
                    <span className="arsent__original">
                      <span className="contrast"> تَحَدُّثٌ </span>
                    </span>
                    <div className="arsent__translate"> Беседа </div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast"> تَغَدٍّ - التَّغَدِّي</span>
                    </div>
                    <div className="arsent__translate">Обед</div>
                  </div>
                </div>
                {/* 
                <div className="item">
                  <h2 className="h2ar ">مُفَعَّلٌ   </h2>
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
                </div> */}
              </div>

              <h2 className="title">
                Удаление одной ت
                <span role="img" aria-label="Writing Hand">
                  &nbsp;💪
                </span>
              </h2>

              <div className="desc">
                Разрешается удалять одну <b className="desc__ar"> ت </b> если она повторяеться но для этого должна быть причина. Например:
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> تَنَزِّلُ </span>
                  <span> الملائِكةُ والرُّوحُ </span>
                </div>
                <div className="arsent__translate">
                  В основе <b className="desc__ar"> تَتَنَزِّلُ </b> [АльКадр / 4]
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> ولا </span>
                  <span className="contrast"> تَجَسَّسوا </span>
                </div>
                <div className="arsent__translate">
                  В основе <b className="desc__ar"> تَتَجَسَّسوا </b> Не шпионьте [49 / 12]
                </div>
              </div>

              {/* <h2 className="h2ar"> اسم مكان و زمان    </h2>

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

              <h2 className="title"> Примеры   </h2>

              <div className="arsent">
                <div className="arsent__original">
                  <span> فَرِحَ </span> -<span className="contrast"> فَرَّحَ </span>
                </div>
                <div className="arsent__translate">
                  Радовался - <span className="contrast"> Обрадовал </span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(Breed5)
