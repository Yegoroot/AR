import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import Word from 'components/word'
import AnimateCard from 'components/AnimateCard/AnimateCard'
class Page extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Header
          color="transparent"
          brand=" ظَرْف إذا"
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
              <h1 className="h1ar">ظَرْف إذا</h1>

              <div className="desc">
                <span className="desc__ar contrast"> إذا </span> (когда) это обстоятельство времени, которое содержит в себе смысл условия.
                Обычно (не всегда) приходит перед глаголом прошедшего времени и меняет его на настоящее. Определения:
                <b>
                  <span className="desc__ar"> الشَّرْط </span> - это условие
                </b>
                <b>
                  <span className="desc__ar"> جَوَابُ الشَّرْطِ </span> - это следствие условия
                </b>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> إذا جاء رمضانُ </span>
                  <span className="contrast_2"> فُتِحَتْ أبوابُ الجنّ </span>
                </div>
                <div className="arsent__translate">
                  <span className=""> الشرط </span>
                  (условие)
                  <span className="contrast"> Когда приходит Рамадан</span>
                  <br />
                  <span className=" "> جَوَابُ الشَّرْطِ </span>
                  (следствие условия)
                  <span className="contrast_2"> двери Рая открываются </span>
                </div>
              </div>

              <h2 className="title"> Важное правило </h2>

              <AnimateCard>
                <div className="arsent arsent_rule">
                  <div className="arsent__original">
                    <span> يَجِبُ اقْتِرانُ جوابِ الشرط بالفاء </span>
                    <span className="contrast"> بالفاء </span>
                    <span> في مواضِعَ, منها </span>
                  </div>
                  <div className="arsent__translate">
                    Обязательно использование союза <span className="contrast desc__ar"> ف </span> в следующих случаях
                  </div>

                  <div className="arsent__original" style={{ paddingTop: 20 }}>
                    <span> أن يكون الجوابُ </span>
                    <span className="contrast_2"> جملةً اسميّةً </span>
                  </div>
                  <div className="arsent__translate">
                    <span> (1) </span>
                    Если جَوَابُ الشَّرْطِ является
                    <span className="contrast_2"> именным предложением </span>
                  </div>
                  <div className="arsent__original" style={{ paddingTop: 20 }}>
                    <span> أن يكون الجوابُ </span>
                    <span className="contrast_2"> فعلاً طلبيّا </span>
                    <span> (و من أنواع الطلب: الأمرُ و النَّاهْيُ و الاسْتِفْهَامُ) </span>
                  </div>
                  <div className="arsent__translate">
                    <span> (2) </span>
                    Если глагол условия является требованием. Разновидности Требования являются: Приказ, Запрет, Вопрос
                  </div>
                </div>
              </AnimateCard>

              <div className="arsent">
                <div className="arsent__original">
                  <span> و </span>
                  <span className="contrast"> إذا </span>
                  <span> سَألَكَ عِبادي عَنِّي </span>
                  <Word prefix="فَ" root="إني" />
                  <span> قريبٌ </span>
                </div>
                <div className="arsent__translate">
                  <span className="contrast"> Если </span> рабы мои спросят тебя обо мне,
                  <span className="contrast"> то </span>
                  поистине я близок
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> إذا </span>
                  <span> رَأَيْتَ حامداً </span>
                  <Word prefix="فَ" root="اسْألْهُ" />
                  <span> عن مَوْعد السَّفَرِ </span>
                </div>
                <div className="arsent__translate">
                  <span className="contrast"> Когда </span> увидишь Хамида,
                  <span className="contrast"> то </span>
                  спроси его о дате поездки
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> إذا </span>
                  <span> وجدتَ المريضَ نائماً </span>
                  <Word prefix="فَ" root="لا" />
                  <span> تُوْقِظْهُ </span>
                </div>
                <div className="arsent__translate">
                  <span className="contrast"> Если </span> обнаружишь больного спящим,
                  <span className="contrast"> то </span>
                  не буди его
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> إذا </span>
                  <span> رَأيتُ بِلالاً </span>
                  <Word prefix="فَ" root="ماذا" />
                  <span> أقولُ له؟ </span>
                </div>
                <div className="arsent__translate">
                  <span className="contrast"> Если </span> я увижу Биляли,
                  <span className="contrast"> то </span>
                  что ему сказать?
                </div>
              </div>

              <h2 className="title"> Другие примеры с إذا </h2>

              <div className="arsent">
                <div className="arsent__original">
                  <span> و النَّفْسُ راغِبَةٌ </span>
                  <span className="contrast"> إذا </span>
                  <span> رَغَّبْتَها و </span>
                  <span className="contrast"> إذا </span>
                  <span> تُرَدُّ إلى قليلٍ تَقْنَعُ </span>
                </div>
                <div className="arsent__translate">
                  Душа она жаждет (чего то), <span className="contrast"> если </span> ты ее провоцируешь (на это). А{' '}
                  <span className="contrast"> если </span> даешь ей мало (ограничиваешь её) она удовлетворяется малым
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> إذا </span>
                  <span> لَمْ تَسْتَطِعْ شيئاً </span>
                  <Word prefix="فَ" root="دَعْهُ" />
                  <span> وجاوِزْهُ إلى ما تَسْتَطِيعُ </span>
                </div>
                <div className="arsent__translate">
                  <span className="contrast"> Если </span> ты что то не можешь (например учишся, учишся, а тебя ступор),{' '}
                  <span className="contrast"> то </span> оставь это. И приступи к тому что ты можешь осилить
                </div>
              </div>

              {/* <div className="arsent arsent_rule">
                <div className="arsent__original">
                  <span className="contrast"> إذا </span>
                  <span>
                    ظَرْفٌ تَضَمَّنَ مَعْنى الشَّرْطِ. تدخل غالباً على الفعل الماضي. فَتُحَوِّلُه في
                    المعنى إلى المُسْتَقْبَلِ, نحو:
                  </span>
                </div>
                <div className="arsent__translate">
                  <span className="contrast desc__ar"> إذا (когда)</span> это обстоятельство
                  времени, которое содержит в себе смысл условия. Обычно приходит перед глаголом
                  прошедшего времени и меняет его смысл на будущее время. Например:
                </div>

                <div className="arsent__original" style={{ paddingTop: 20 }}>
                  <span> وقد تَدخُل على المُضارع. </span>
                  <span> وكذلك يَجوز أن يكون </span>
                  <span className="contrast"> جواب الشرطِ </span>
                  <span> فعلاً مضارعاً, كما في قول الشاعر: </span>
                </div>
                <div className="arsent__translate">
                  Иногда приходит и перед глаголом настоящего времени. И так же вполне уместо чтоб
                  <span className="contrast"> следствием условия </span> был глагол настоящего
                  времени
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

export default withStyles(arabicPageStyle)(Page)
