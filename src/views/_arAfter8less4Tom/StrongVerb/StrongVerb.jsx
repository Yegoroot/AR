import React from 'react'
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import Word from 'components/word'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import { Helmet } from 'react-helmet'

class Page extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Усиление значения арабского глагола</title>
          <meta
            name="description"
            content="Существуют тяжелая Нун для усиления значения и лёгкая Нун. Глагол прошедшего времени ни когда не при каких обстоятельствах не
            усиливается."
          />
        </Helmet>
        <Header
          color="transparent"
          brand="Усиление глагола"
          // isBrandAr
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
              <h1 className="title">
                Усиление глагола&nbsp;<span className="ph">§</span>
              </h1>
              <div className="arsent">
                <div className="arsent__original">
                  <span> إذا رأيتَ نُيُوبَ اللَّيْثِ بارِزَةً فلا </span>
                  <span className="contrast"> تَظُنَّنَّ </span>
                  <span> أنَّ اللَّيْثَ يَبْتَسِمُ </span>
                </div>
                <div className="arsent__translate">Если лев скалится, то не вздумай подумать что он улыбается</div>
              </div>
              <div className="desc">
                Существуют тяжелая Нун для усиления и лёгкая Нун. Глагол прошедшего времени ни когда не при каких обстоятельствах не
                усиливается. Ниже представлены изминения окончаний глаголов усиленных при помощи Нун
              </div>

              <div className="items">
                <div className="item">
                  <h2 className="title h2ar">(أ) </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> اِذهَبْ : </span>
                      <span className="contrast"> اِذهَبَنَّ </span>
                    </div>
                    <div className="arsent__original">
                      <span> لا تَذْهَبْ : لا </span>
                      <span className="contrast"> تَذْهَبَنَّ </span>
                    </div>
                    <div className="arsent__original">
                      <span> تَذْهَبُ : </span>
                      <span className="contrast"> تَذْهَبَنَّ </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <h2 className="title h2ar">(ب) </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> اِذْهَبُوا : </span>
                      <span className="contrast"> اِذهَبُنَّ </span>
                    </div>
                    <div className="arsent__original">
                      <span> لا تَذْهَبُوا : لا </span>
                      <span className="contrast"> تَذْهَبُنَّ </span>
                    </div>
                    <div className="arsent__original">
                      <span> تَذْهَبُونَ : </span>
                      <span className="contrast"> تَذْهَبُنَّ </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <h2 className="title h2ar">(ج) </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> اِذْهَبِي : </span>
                      <span className="contrast"> اِذْهَبِنَّ </span>
                    </div>
                    <div className="arsent__original">
                      <span> لا تَذْهَبِي : لا </span>
                      <span className="contrast"> تَذْهَبِنَّ </span>
                    </div>
                    <div className="arsent__original">
                      <span> تَذْهَبِيْنَ : </span>
                      <span className="contrast"> تَذْهَبِنَّ </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <h2 className="title h2ar">(د) </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> اِذْهَبَا : </span>
                      <span className="contrast"> اِذْهَبَانِّ </span>
                    </div>
                    <div className="arsent__original">
                      <span> لا تَذْهَبَا : لا </span>
                      <span className="contrast"> تَذْهَبَانِّ </span>
                    </div>
                    <div className="arsent__original">
                      <span> تَذْهَبانِ : </span>
                      <span className="contrast"> تَذْهَبَانِّ </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <h2 className="title h2ar">(ه) </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> اِذْهَبْنَ : </span>
                      <span className="contrast"> اِذْهَبْنَانِّ </span>
                    </div>
                    <div className="arsent__original">
                      <span> لا تَذْهَبْنَ : لا </span>
                      <span className="contrast"> تَذْهَبْنَانِّ </span>
                    </div>
                    <div className="arsent__original">
                      <span> تَذْهَبْنَ : </span>
                      <span className="contrast"> تَذْهَبْنَانِّ </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <h2 className="title h2ar">(و) </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> اِمْشِ : </span>
                      <span className="contrast"> اِمْشِيَنَّ </span>
                    </div>
                    <div className="arsent__original">
                      <span> لا تَنْسَ : لا </span>
                      <span className="contrast"> تَنْسَينَّ </span>
                    </div>
                    <div className="arsent__original">
                      <span> ادْعُ : </span>
                      <span className="contrast"> ادْعُوَنَّ </span>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="title">
                Случаи когда можно усиливать глагол при помощи Нун<span role="img" aria-label="Writing Hand">
                  &nbsp;✍️
                </span>
              </h2>
              <h3 className="title"> В приказе </h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> اُخْرُجَنَّ </span>
                  <div className="arsent__translate"> Выходи</div>
                </div>
              </div>

              <h3 className="title"> Если содержится требование (طَلَبِيّة) (отрицание, запрет, вопрос) </h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span>و</span>
                  <span className="contrast"> لَا </span>
                  <span> تَحْسَبَنَّ الله غافِلاً عَمّا يَعْمَلُ الظَّالِمونَ </span>
                  <div className="arsent__translate">
                    Не думай (даже не думай) что Аллахъ не ведает о том, что творят беззаконники [Сура Ибрахим Аят 42]
                  </div>
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <Word root="يَجْلِسَنَّ" prefix="لِ" />
                  <span> كلُّ واحدٍ في مَكانِه </span>
                  <div className="arsent__translate">Пусть каждый сядет на своё место</div>
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> أَ </span>
                  <span> تُسَافِرَنَّ وأنت مريض؟ </span>
                  <div className="arsent__translate"> Ты отправился в поездку больным? </div>
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> هَلّا </span>
                  <span> تَجْتَهِدَنَّ فقد اقترب الامتحان</span>
                  <div className="arsent__translate">
                    Так почему же ты не готовишся к экзамену (перед гл. наст. времени - призыв к действию), он уже приближается
                  </div>
                </div>
              </div>

              <h2 className="title">
                Усиление близко к обязательному<span role="img" aria-label="Writing Hand">
                  &nbsp;✍️
                </span>
              </h2>
              <div className="desc" dir="rtl">
                Усиление становится близким к обязательному, если глагол настоящего времени приходит перед Имма-Условия <br />(
                <b className="desc contrast_2">إمَّا</b>) <span className="desc"> الشَّرْطِيَّة </span>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast_2"> إمَّا </span>
                  <span className="contrast"> يَبْلُغَنَّ </span>
                  <span> عندك الكِبَرَ أحدُهُما أو كلاهُما فلا تَقُلْ لهما أُفٍ </span>
                  <div className="arsent__translate"> </div>
                </div>
              </div>

              <h2 className="title">
                Усиление обязательно<span role="img" aria-label="Writing Hand">
                  &nbsp;✍️
                </span>
              </h2>
              <div className="desc" dir="rtl">
                Усилие глагола обязательно если это ответ на клятву. Но для этого есть 3 условия, если одно из условий не соблюдается, то
                усиливать запрещается
              </div>
              <h3 className="title">1) Предложение не содержит отрицания, запрета, вопроса</h3>
              <h3 className="title">2) Речь идёт про будущее время</h3>
              <h3 className="title">3) Между клятвой и لام الجواب нет преграды (преграда в виде слова)</h3>

              <div className="arsent">
                <div className="arsent__original">
                  <span> وَتَاللَّهِ </span>
                  <span className="contrast"> لأَكِيْدَنَّ </span>
                  <span> أَصْنَامَكُم بَعْدَ أَن تُوَلُّوا مُدْبِرِينَ </span>
                  <div className="arsent__translate">
                    Ибрахим подумал: "Клянусь Аллахом! Я непременно замыслю хитрость против ваших идолов, когда вы уйдете и отвернетесь"
                    [Сура Пророки Аят 57]
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

export default withStyles(arabicPageStyle)(Page)
