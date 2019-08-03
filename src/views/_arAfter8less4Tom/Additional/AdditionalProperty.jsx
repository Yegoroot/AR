import React from 'react'
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import Word from 'components/word'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class Page extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Header
          color="transparent"
          brand="المفعول المطلق"
          isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque30.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title h1ar">
                المفعول المُطْلَق&nbsp;<span className="ph">§</span>
              </h1>

              <div className="desc">
                <b> Абсолютное дополнение </b> (المفعول المطلق) упоминается масдаром в после глагола и состоит обычно из тех же букв что и
                глагол. Приходит
                <b> для усиления </b> или <b> указания на количество </b> или <b> разъяснения типа действия </b>, а иногда приходит как
                заменитель глагола. Называется так, потому что не обусловлено предлогом как другие.
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> وكَلَّمَ الله موسى </span>
                  <span className="contrast"> تَكْليماً </span>
                </div>
                <div className="arsent__translate">
                  С Мусой Аллахъ вел беседу (<b>усиление</b>). [Сура АнНиса 164 Аят]
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> ضَرَبَني الولدُ </span>
                  <span className="contrast"> ضَرَباتٍ </span>
                </div>
                <div className="arsent__translate">
                  Побил меня ребёнок много раз (<b>количество</b>)
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> طُبِعَ الكتابُ </span>
                  <span className="contrast"> طَبْعَتَيْنِ </span>
                </div>
                <div className="arsent__translate">
                  Книга издавалась дважды (<b>количество</b>)
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> حَفِظتُ القرآن </span>
                  <span className="contrast"> حِفْظاً جيِّداً </span>
                </div>
                <div className="arsent__translate">
                  Выучил Коран заучиванием хорошим (можно выучить плохо) (<b>тип действия</b>)
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> قرأ أحْمد الدرس </span>
                  <span className="contrast"> قراءةَ فاهِمٍ </span>
                </div>
                <div className="arsent__translate">
                  Прочитал Ахмад урок чтением понимающим (чтением понимающего человека) (<b>тип действия</b>)
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> شكراً </span>
                </div>
                <div className="arsent__translate">
                  Спасибо (Этот тип обычно не выделяют) (<b>масдар заменил глагол</b>)
                </div>
              </div>

              <h3 className="title"> На месте масдара </h3>

              <div className="desc">
                Иногда хлебное место Масдара заменяет то, что указывает на него и то что заменило Масдар будет принимать винительный падеж
                <br />
              </div>

              <div className="items">
                <div className="item">
                  <h3 className="title">
                    1.
                    <span className=""> كُلُّ </span> و <span className=""> بَعْض </span> و <span className=""> أيّ مُضَافَةً </span>
                  </h3>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> آخَذَني المدير </span>
                      <span className="contrast"> بَعضَ </span>
                      <span className="contrast_2"> المُؤَاخَذَةِ </span>
                    </div>
                    <div className="arsent__translate">
                      Взыскал с меня директор некоторым взысканием (بَعضَ заняло хлебное место Масдара и принимает теперь его квоты
                      (винительный падеж) )
                    </div>
                  </div>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast"> أيَّ </span>
                      <span className="contrast_2"> نَومٍ </span>
                      <span> تَنَام؟ </span>
                    </div>
                    <div className="arsent__translate">
                      Каким сном ты спишь? (أيَّ заняло хлебное место Масдара и приняло винительный падеж)
                    </div>
                  </div>
                </div>
                <div className="item">
                  <h3 className="title">2. عَدَدُه (Мислительным)</h3>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> زُرتُهُ </span>
                      <span className="contrast"> ثَلاثَ </span>
                      <span className="contrast_2"> زياراتٍ </span>
                    </div>
                    <div className="arsent__translate">Навестил его тройным посещением (три раза)</div>
                  </div>
                </div>
                <div className="item">
                  <h3 className="title">3. صِفَتُهُ (Своё Прилагательное)</h3>
                  <div className="arsent">
                    <div className="arsent__original" dir="rtl">
                      <span> فَهِمْتُ الدَّرسَ</span>
                      <span className="contrast"> جَيِّداً </span>
                      <span> (أي: فَهْماً جيّداً) </span>
                    </div>
                    <div className="arsent__translate">Понял урок хорошо (заменён срезанный Масдар فَهْماً) </div>
                  </div>
                </div>
                <div className="item">
                  <h3 className="title">4. اسم المصدر (имя масдара)</h3>
                  <div className="arsent">
                    <div className="arsent__original" dir="rtl">
                      <span> كَلَّمْتُ </span>
                      <span className="contrast"> كَلَاماً </span>
                    </div>
                    <div className="arsent__translate">(Обратите внимание كَلَّمْتُ во 2 породе, а كَلَاماً для 1 породы)</div>
                  </div>
                </div>
                <div className="item">
                  <h3 className="title">5. Приблежённый масдар</h3>
                  <div className="arsent">
                    <div className="arsent__original" dir="rtl">
                      <span> و تَبَتَّلْ إليْهِ </span>
                      <span className="contrast"> تَبْتِيلاً </span>
                    </div>
                    <div className="arsent__translate">
                      [73 Сура 8 Аят] (В данном примере Глагол в 5 породе, а Масдар для 2 породы, который заменил Масдар пятой)
                    </div>
                  </div>
                </div>
                <div className="item">
                  <h3 className="title">6. اسم الإشارة (Указательное местоимение)</h3>
                  <div className="arsent">
                    <div className="arsent__original" dir="rtl">
                      <span> أتَسْتَقْبِلُنِي </span>
                      <span className="contrast"> هذا </span>
                      <span className="contrast_2"> الاسْتِقْبالَ </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <h3 className="title">7. ضَميرُهُ العائِدُ إليه (Местоимение которое возвращается на него)</h3>
                  <div className="arsent">
                    <div className="arsent__original" dir="rtl">
                      <span> اِجْتَهَدتُ اجْتِهاداً لمْ </span>
                      <span className="">
                        <Word root="يَجْتَهِد" suffix="ُه" />
                      </span>
                      <span className="contrast_2"> غَيْرِي </span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <h3 className="title">8. مُرَادِفُه (Синоним)</h3>
                  <div className="arsent">
                    <div className="arsent__original" dir="rtl">
                      <span> عِشْتُ </span>
                      <span className="contrast"> حياةً </span>
                      <span> سعيدةً </span>
                    </div>
                    <div className="arsent__translate">حياةً синоним عِيشَةٌ</div>
                  </div>
                </div>
              </div>

              <h3 className="title"> Удаление عامِل المفعول (Действующий фактор)</h3>
              <div className="desc">Разрешается удалять действующий фактор, если он ясен из контекста</div>

              <div className="arsent arsent_rule">
                <div className="arsent__original" dir="rtl">
                  <span className="contrast_2"> قُدوماً مُبَارَكاً </span>
                  <span> أي: </span>
                  <span className="contrast"> قَدِمْتَ </span>
                  <span className="contrast_2"> قُدوماً مُبَارَكاً </span>
                </div>
                <div className="arsent__translate">
                  <span className="contrast_2"> Прибытие благословенное </span>, (где подразумевается)
                  <span className="contrast"> ты прибыл </span>
                  <span className="contrast_2"> прибытием благословенным </span>. Слово قَدِمْتَ лишнее так как оно ясно из контекста
                </div>
              </div>

              <h3 className="title"> Примеры Абсолютного дополнения </h3>
              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span> "في الحديث: "إذا قُمْتَ في صلاتك فَصَلِّ </span>
                  <span className="contrast"> صلاة مُوَدِّعٍ </span>
                </div>
                <div className="arsent__translate">Когда встаёешь на молитву, то совершай её так, как молитва провожающего (этот мир)</div>
              </div>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span> وقد يَجْمَعُ الله الشَّتِيتَينِ بعدَ ما</span> <br />
                  <span> يَظُنَّانِ </span>
                  <span className="contrast"> كلَّ الظَّنِّ </span>
                  <span> أنْ لا تَلَاقِيَا </span>
                </div>
                <div className="arsent__translate">
                  Иногда Аллахъ объединяет две противоположные вещи, после того как думали думающие всяким раздумьем что эти две
                  противоположности не встретятся
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
