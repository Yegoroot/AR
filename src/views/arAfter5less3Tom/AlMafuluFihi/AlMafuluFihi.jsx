import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import AnimateCard from 'components/AnimateCard/AnimateCard'
import { Helmet } from 'react-helmet'

class AlMafuluFihi extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Обстоятельство места и времени (ظَرْف. المَفْعُول فيه)</title>
          <meta
            name="description"
            content="المَفْعُول فيه это имя стоящее в насбе (винительном падеже) которое
            упоминается для объяснения времени совершения действия или его места. Так же он называется
             ظَرْف"
          />
        </Helmet>
        <Header
          color="transparent"
          brand="ظَرْف. المَفْعُول فيه"
          isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque23.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="h1ar">
                المَفْعُول فيه. ظَرْف
                <span role="img" aria-label="Palm Tree" />
              </h1>

              <div className="desc">
                Обстоятельство места и времени
                {/* <span className="contrast_2 desc__ar"> (ا / و) </span> заменяется на
                <span className="contrast_2 desc__ar"> (ي) </span> */}
              </div>

              <AnimateCard>
                <div className="arsent arsent_rule">
                  <div className="arsent__original">
                    <span className="contrast_2"> وَصَلْتُ يوْم الثُلاثاءِ </span>.<span> هنا </span>
                    <span className="contrast_2"> يوم </span>
                    <span className="contrast"> مَفْعُول فيه </span>.
                    <span>المَفْعول فيه اسمٌ مَنْصوبٌ يُذْكَرُ لِبَيانِ زمانِ الفِعْلِ أو مكانهِ, و يسمَّى أيضاً ظَرْفاً.</span>
                  </div>
                  <div className="arsent__translate">
                    <span className="contrast_2"> Я прибыл во вторник </span> тут
                    <span className="contrast_2 desc__ar"> يوم </span> является обстоятельством времени.
                    <span className="contrast desc__ar"> المَفْعُول فيه </span> это имя стоящее в насбе (винительном падеже) которое
                    упоминается для объяснения времени совершения действия или его места. Так же он называется
                    <span className="contrast desc__ar"> ظَرْف </span>
                  </div>
                </div>
              </AnimateCard>

              <h2 className="h2ar">
                ظَرْف زمان{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="arsent">
                <div className="arsent__original">
                  <span> خَرَجْتُ </span>
                  <span className="contrast"> ليلاً </span>
                </div>
                <div className="arsent__translate">Вышел ночью</div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> سَأُسَافِرُ </span>
                  <span className="contrast"> غَداً </span>
                  <span> إن شاء الله </span>
                </div>
                <div className="arsent__translate">Отправлюсь в путешествие завтра</div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> نِمْتُ </span>
                  <span className="contrast"> بَعْدَ </span>
                  <span> نَومِك</span>
                </div>
                <div className="arsent__translate">Я заснул после того как ты заснул</div>
              </div>
              <h2 className="h2ar">
                ظَرْف مَكَان{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="arsent">
                <div className="arsent__original">
                  <span> مَشَيْتُ </span>
                  <span className="contrast"> مِيلاً </span>
                </div>
                <div className="arsent__translate">Я прошел пешком милю</div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> جَلَسْتُ </span>
                  <span className="contrast"> عِنْدَ </span>
                  <span> المُدِير </span>
                </div>
                <div className="arsent__translate">Я сидел у директора</div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> نِمْتُ </span>
                  <span className="contrast"> تَحْتَ </span>
                  <span> شَجَرةٍ </span>
                </div>
                <div className="arsent__translate">Я заснул под деревом</div>
              </div>
              <h2 className="h2ar">
                بعضُ الظروف مَبْنِيَّةُ منها{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="desc">
                Некоторые <span className="desc__ar"> الظروف </span> Которые имеют не изменяемые окончания
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> مَتىْ </span>
                  <span> خرَجت؟ </span>
                </div>
                <div className="arsent__translate">Когда вернулся?</div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> أينَ </span>
                  <span> تَدرس؟ </span>
                </div>
                <div className="arsent__translate">Где учишься?</div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> لم أغِبْ </span>
                  <span className="contrast"> أمسِ </span>
                </div>
                <div className="arsent__translate">Я не отсутсвовал вчера </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> لم أَذُقْ هذه الفاكهةَ </span>
                  <span className="contrast"> قَطُّ </span>
                </div>
                <div className="arsent__translate">Я не пробовал на вкус эти фрукты, никогда </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> اِجْلِس </span>
                  <span className="contrast"> هنَاْ </span>
                </div>
                <div className="arsent__translate"> Сиди тут! </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> آلآنَ </span>
                  <span> جِئْتَ؟ </span>
                </div>
                <div className="arsent__translate"> Сейчас прибылыл? </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> اِجْلِسْ </span>
                  <span className="contrast"> حَيْثُ </span>
                  <span> شِئتَ </span>
                </div>
                <div className="arsent__translate"> Садись Где хочешь </div>
              </div>
              <h2 className="h2ar">
                هناك أسماءُ تَنُوبُ عنِ الظرف{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="desc">
                Существуют имена заменяющие <span className="desc__ar"> الظرف </span>. Ниже будут представлены несколько типов этих имён
              </div>
              <h3 className="title">
                1. Слово присоединенное к الظرف для указания на охват полного времени или места или на его часть. Например:
              </h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span> سَافَرنْا </span>
                  <span className="contrast"> كُلَّ </span>
                  <span> النهار </span>
                </div>
                <div className="arsent__translate"> Были в путешествии Целый день </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> انْتَظَرْتُكَ </span>
                  <span className="contrast"> رُبْعَ </span>
                  <span> ساعة </span>
                </div>
                <div className="arsent__translate"> Я ждал тебя Четверть часа </div>
              </div>
              <h3 className="title">2. Прилагательные (صِفَتُهُ) </h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span> جلستُ </span>
                  <span className="contrast"> طَويلاً, </span>
                  <span> أي وقتاً طويلاً. هنا (طَويلاً) صفةُ للظرف نابت عنه </span>
                </div>
                <div className="arsent__translate">
                  Сидел долго. А в основе подразумевается
                  <span className="desc__ar"> وقتاً طويلاً, </span> Где
                  <span className="contrast desc__ar"> طَويلاً </span> определение
                  <span className="desc__ar"> (صفةُ) </span> к обстоятельству места и времени. [и мы можем этот للظرف и не упоминать]
                </div>
              </div>
              <h3 className="title">3. اسمُ الإِشارة так же может заменять للظرف </h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span> جئت </span>
                  <span className="contrast"> هذا </span>
                  <span> الأسبوعَ </span>
                </div>
                <div className="arsent__translate"> Прибыл На Этой неделе </div>
              </div>
              <h3 className="title">4. Числительные العَدَدُ</h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span> مَكَثْتُ في بغْدادَ </span>
                  <span className="contrast"> أربعةَ </span>
                  <span> أيامِ </span>
                </div>
                <div className="arsent__translate"> Находился в Багдаде Четыре дня </div>
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
