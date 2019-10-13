import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'
import Word from 'components/word'

// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'
import { Helmet } from 'react-helmet'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class PuralDualPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Множественное и двойственное число арабского языка </title>
          <meta
            name="description"
            content="Множественное и двойственное число арабского языка "
          />
        </Helmet>
        <Header
          color="transparent"
          brand="Мн. и дв. число"
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
          image={require('assets/img/mosque/mosque14.jpg')}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">
                Мн. и дв. число&nbsp;<span className="ph">§</span>
              </h1>

              <div className="desc">
                Если на правильное <b> множественное </b> или{' '}
                <b> двойственное </b> падает действие (становится в насб), то
                слабая буква
                <span className="contrast_2 desc__ar">
                  {' '}
                  (ا&nbsp;/&nbsp;و){' '}
                </span>{' '}
                заменяется на
                <span className="contrast_2 desc__ar"> (ي) </span>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <Word root="ا" negative suffix="نِ" prefix="بِنْتَ" />{' '}
                  <span> - رأيتُ </span>
                  <Word root="يْ" negative suffix="ن" prefix="بِنْتَ" />
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <Word root="و" negative suffix="ن" prefix="مُدَرِّس" />{' '}
                  <span> - رأيتُ </span>
                  <Word root="ي" negative suffix="ن" prefix="مُدَرِّس" />
                </div>
              </div>
              <div className="desc">
                В изофетной связке (идафе)
                <span className="contrast_2 desc__ar"> (ن) </span> отбрасывается
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  هذا <Word root="كتا" suffix="بٌ" />
                  <span> - هذا </span>
                  <Word root="كتا" suffix="بُ" /> الله
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  أين <Word root="انِ" negative prefix="بِنْتَ" />
                  <span> - أين </span>
                  <Word root="ا" negative prefix="بِنْتَ" /> حامدٍ
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  رَأيتُ <Word root="بِنْتَ" suffix="ينِ" /> - رَأيتُ
                  <Word root="بِنْتَ" suffix="ي" />
                  <span> حامدٍ </span>
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> جَاء </span>
                  <Word root="المدرِّس" suffix="ونَ" />
                  <span> - جَاء </span>
                  <Word root="المدرِّس" suffix="و" />
                  <span> الفِقْهِ </span>
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> أبْحَثُ عن </span>
                  <Word root="المدرِّس" suffix="ين" /> -
                  <span> أبْحَثُ عن </span>
                  <Word root="المدرِّس" suffix="ي" />
                  <span> الفِقْهِ </span>
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <Word root="قَلمَ" suffix="انِ" />
                  <span> - </span>
                  <Word root="قَلمَ" suffix="يَ" />
                </div>
                <div className="arsent__translate">
                  Две ручки - две мои ручки
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> أ رَيتم </span>
                  <Word root="قَلمَ" suffix="يْنِ" />؟<span> - أ رَيتم </span>
                  <span> </span>
                  <Word root="قَلمَ" suffix="يَّ" />؟
                </div>
                <div className="arsent__translate">
                  Видели две ручки? - Видели две мои ручки?
                </div>
              </div>

              <h2 className="title">
                Неправильное множественое число
                <span role="img" aria-label="Writing Hand">
                  &nbsp;✍️
                </span>
              </h2>
              <div className="desc">
                Есть некоторые модели у ломанных (неправильных) множественных
                {/* بعض أوزان مع التكسير */}
              </div>
              <div className="items">
                {/* <div className="item">
                  <h2 className="h2ar">فِعَال </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> كَبِير </span> -<span className="contrast"> كِبَار </span>
                    </div>
                    <div className="arsent__original">
                      <span> صَغِير </span> -<span className="contrast"> صِغَار </span>
                    </div>
                  </div>
                </div> */}
                <div className="item">
                  <h2 className="h2ar">
                    فَعَلَةٌ{' '}
                    <span role="img" aria-label="Light Bulb">
                      💡
                    </span>
                  </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> طالِب </span> -
                      <span className="contrast"> طَلَبَةٌ </span>
                    </div>
                    <div className="arsent__original">
                      <span> كافِر </span> -
                      <span className="contrast"> كَفَرَةٌ </span>
                    </div>
                    <div className="arsent__original">
                      <span> فاجِر </span> -
                      <span className="contrast"> فَجَرَةٌ </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <h2 className="h2ar">
                    فُعَلٌ{' '}
                    <span role="img" aria-label="Light Bulb">
                      💡
                    </span>
                  </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> نُسْخَةٌ </span> -
                      <span className="contrast"> نُسَخٌ </span>
                    </div>
                    <div className="arsent__original">
                      <span> صُورَةٌ </span> -
                      <span className="contrast"> صُوَرٌ </span>
                    </div>
                    <div className="arsent__original">
                      <span> غُرْفَةٌ </span> -
                      <span className="contrast"> غُرَفٌ </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <h2 className="h2ar">
                    فَعْلَى{' '}
                    <span role="img" aria-label="Light Bulb">
                      💡
                    </span>
                  </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> مَرِيضٌ </span> -
                      <span className="contrast"> مَرْضَى </span>
                    </div>
                    <div className="arsent__original">
                      <span> قَتِيلٌ </span> -
                      <span className="contrast"> قَتْلَى </span>
                    </div>
                    <div className="arsent__original">
                      <span> جَرِيحٌ </span> -
                      <span className="contrast"> جَرْحَى </span>
                    </div>
                  </div>
                </div>

                {/* <div className="item">
                  <h2 className="h2ar">
                    فُعَّالٌ{' '}
                    <span role="img" aria-label="Light Bulb">
                      💡
                    </span>
                  </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast"> كُتَّابٌ </span>
                    </div>
                  </div>
                </div> */}

                <div className="item">
                  <h2 className="h2ar">
                    فِعَالٌ{' '}
                    <span role="img" aria-label="Light Bulb">
                      💡
                    </span>
                  </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> رجل </span> -
                      <span className="contrast"> رِجالٌ </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <h2 className="h2ar">
                    أفْعَالٌ{' '}
                    <span role="img" aria-label="Light Bulb">
                      💡
                    </span>
                  </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> قلم </span> -
                      <span className="contrast"> أقْلامٌ </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <h2 className="h2ar">
                    فُعُولٌ{' '}
                    <span role="img" aria-label="Light Bulb">
                      💡
                    </span>
                  </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> شيخ </span> -
                      <span className="contrast"> شُيُوخٌ </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <h2 className="h2ar">
                    فُعَلاء<span className="contrast">ُ</span>{' '}
                    <span role="img" aria-label="Light Bulb">
                      💡
                    </span>
                  </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> زميل </span> -
                      <span className="contrast"> زُمَلاءُ </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <h2 className="h2ar">
                    أفْعِلاء<span className="contrast">ُ</span>{' '}
                    <span role="img" aria-label="Light Bulb">
                      💡
                    </span>
                  </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> صديق </span> -
                      <span className="contrast"> أصْدِقاءُ </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <h2 className="h2ar">
                    فِعْلَةٌ{' '}
                    <span role="img" aria-label="Light Bulb">
                      💡
                    </span>
                  </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> فتى </span> -
                      <span className="contrast"> فِتْيَةٌ </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <h2 className="h2ar">
                    فُعُلٌ{' '}
                    <span role="img" aria-label="Light Bulb">
                      💡
                    </span>
                  </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> جَديد </span> -
                      <span className="contrast"> جُدُدٌ </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <h2 className="h2ar">
                    أفْعِلَةٌ{' '}
                    <span role="img" aria-label="Light Bulb">
                      💡
                    </span>
                  </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> رَغيف </span> -
                      <span className="contrast"> أرْغِفَةٌ </span>
                    </div>
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

export default withStyles(arabicPageStyle)(PuralDualPage)
