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
          brand="أَداةُ شَرْط إنْ"
          isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque20.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="h1ar title">
                الشرط و جواب الشرط{' '}
                <span role="img" aria-label="Palm Tree">
                  {' '}
                  🌴{' '}
                </span>
              </h1>

              <div className="desc">
                Кто поймет этот урок, тот поймёт многие другие, в том числе и связанные с методологией фикха. Некоторые правила этого урока
                является продолжением урока про <span className="desc__ar"> ظَرْف إذا </span>. А именно в предыдущем уроке мы разобрали два
                случая когда ставиться союз Фа между <span className="desc__ar"> الشرط </span> и
                <span className="desc__ar"> جواب الشرط </span>, а в конце этого урока разберем остальные случаи
              </div>

              <h2 className="h2ar title">
                أَداةُ شَرْط <span className="contrast"> إنْ </span>
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>

              <AnimateCard>
                <div className="arsent arsent_rule">
                  <div className="arsent__original">
                    <span className="contrast"> إنْ </span>
                    <span> أداةُ شَرْطٍ تَجْزِمُ فِعْلَيْنِ </span>
                  </div>
                  <div className="arsent__translate">
                    Частица<span className="contrast desc__ar"> إنْ </span> джазмирует два глагола [ниже будут представлены другие слова
                    которые могут джазмировать ]
                  </div>
                  <div className="arsent__original" style={{ paddingTop: 20 }}>
                    <span> الأوَّلُ فعلَ </span>
                    <span className="contrast_2"> ,الشرِط </span>
                    <span> و الآخَرُ </span>
                    <span className="contrast_2"> جوابَ الشرطِ </span>
                  </div>
                  <div className="arsent__translate">
                    Первый глагол <span className="contrast_2"> условие </span> второй
                    <span className="contrast_2"> следствие условия </span>
                  </div>
                </div>
              </AnimateCard>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> إنْ </span>
                  <Word suffix="دْ" root="تَجْتَهِ" />
                  &nbsp;
                  <Word suffix="حْ" root="تَنْجَ" />
                </div>
                <div className="arsent__translate">
                  <span className="contrast"> Если </span>
                  будешь стараться - преуспеешь!
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> إنْ </span>
                  <Word suffix="وا" root="تَعُود" />
                  &nbsp;
                  <Word suffix="دْ" root="نَعُ" />
                </div>
                <div className="arsent__translate">
                  <span className="contrast"> Если </span>
                  Вы вернётесь то и мы вернёмся
                </div>
              </div>

              <h2 className="title h2ar">
                <span className="contrast"> إلاَّ </span> = إن + لا النافِيَةُ{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>

              <div className="arsent">
                <div className="arsent__original">
                  <span> وَ </span>
                  <span className="contrast"> إلاَّ </span>
                  <Word suffix="لي" negative prefix="تَغْفِ" root="رْ" />
                  <span> و </span>
                  <Word suffix="نِي" negative prefix="تَرْحَ" root="مْ" />
                  <span> أكُنْ مِنَ الخاسِرِيْنَ </span>
                </div>
                <div className="arsent__translate">
                  <span className="contrast"> Если </span>
                  ты не простишь меня и не смилостивуешся над мной, то я окажусь потерпевшим убыток [47 Аят Сура Худ]
                </div>
              </div>

              <h2 className="title h2ar ">
                {' '}
                أسماء تَجزِم فعلَيْن{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="desc">Существуют так же имена, которые джазмируют два глагола</div>

              <div className="items ">
                <div className="item">
                  <h2 className="h2ar">
                    مَنْ{' '}
                    <span role="img" aria-label="Light Bulb">
                      {' '}
                      💡{' '}
                    </span>{' '}
                  </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <Word suffix="مَنْ" root="فَ" />
                      &nbsp;
                      <Word suffix="لْ" root="يَعْمَ" />
                      <span> مِثْقَالَ ذَرَّةٍ خَيْراً يَرَهُ</span>
                    </div>
                    <div className="arsent__translate">
                      Тот кто совершит благое весом с пылинку, увидит (слабая буква усеклась) это. [99 Сура 7 Аят]
                    </div>
                  </div>
                </div>
                <div className="item">
                  <h2 className="h2ar">
                    ما{' '}
                    <span role="img" aria-label="Light Bulb">
                      {' '}
                      💡{' '}
                    </span>{' '}
                  </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span> و </span>
                      <span className="contrast"> ما </span>
                      <Word suffix="وا" root="تَفْعَلُ" />
                      <span> مِنْ خَيْرٍ </span>
                      <Word suffix="هُ" root="مْ" prefix="يَعْلَ" negative />
                      <span> الله </span>
                    </div>
                    <div className="arsent__translate">[Сура Бакара 197 Аят]</div>
                  </div>
                </div>
                <div className="item">
                  <h2 className="h2ar">
                    مَتَى{' '}
                    <span role="img" aria-label="Light Bulb">
                      {' '}
                      💡{' '}
                    </span>{' '}
                  </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast"> مَتَى </span>
                      <Word suffix="رْ" root="تُسَافِ" />
                      &nbsp;
                      <Word suffix="رْ" root=" أُسَافِ" />
                    </div>
                    <div className="arsent__translate">Когда ты уедешь, я уеду</div>
                  </div>
                </div>
                <div className="item">
                  <h2 className="h2ar">
                    أَيَّ{' '}
                    <span role="img" aria-label="Light Bulb">
                      {' '}
                      💡{' '}
                    </span>{' '}
                  </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast"> أَيَّ </span>
                      <span> مُعْجَم </span>
                      <Word suffix="دْ" root="نَجِ" />
                      <span> في المكتبة </span>
                      <span> نَشْتَرِهِ </span>
                    </div>
                    <div className="arsent__translate">Какой словарь найдём, такой и купим</div>
                  </div>
                </div>
                <div className="item">
                  <h2 className="h2ar">
                    مَهْمَا{' '}
                    <span role="img" aria-label="Light Bulb">
                      {' '}
                      💡{' '}
                    </span>{' '}
                  </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast"> مَهْمَا </span>
                      <Word suffix="لْ" root="تَقُ" />
                      &nbsp;
                      <Word suffix="كَ" negative root="قْ" prefix="نُصَدِّ" />
                    </div>
                    <div className="arsent__translate">Что бы ты не говорил, мы поверим тебе</div>
                  </div>
                </div>
                <div className="item">
                  <h2 className="h2ar">
                    حَيْثُ{' '}
                    <span role="img" aria-label="Light Bulb">
                      {' '}
                      💡{' '}
                    </span>{' '}
                  </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast"> حَيْثُ </span>
                      <Word suffix="بْ" root="تَذْهَ" />
                      &nbsp;
                      <Word suffix="بْ" root="أذْهَ" />
                    </div>
                    <div className="arsent__translate">Куда ты пойдёшь, я пойду</div>
                  </div>
                </div>
                <div className="item">
                  <h2 className="h2ar">
                    أينما / أَيْنَ{' '}
                    <span role="img" aria-label="Light Bulb">
                      {' '}
                      💡{' '}
                    </span>{' '}
                  </h2>
                  <div className="arsent">
                    <div className="arsent__original">
                      <span className="contrast"> أَيْنَ </span>
                      <Word suffix="نْ" root="تَسْكُ" />
                      &nbsp;
                      <Word suffix="نْ" root=" أَسْكُ" />
                      <span>. و كثيراً ما تلحقها (ما) الزَّائِدَةُ لِلتَّوْكِيْدِ, نحو: </span>
                      <span className="contrast"> أينما </span>
                      <Word suffix="وا" root="تَكُون" />
                      &nbsp;
                      <Word suffix="كُمُ" root="كْ" negative prefix="يُدْرِ" />
                      <span> المَوْتُ </span>
                    </div>
                    <div className="arsent__translate">
                      "Где ты будешь жить, там я буду жить". К ما так же может добавится ما الزَّائِدَةُ (Ма Добавочная) для усиления.
                      Например: "Где бы вы не находились, вас настигнет смерть" [Сура АнНиса 78Аят]
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="title h2ar">
                {' '}
                جوابَ الشرطِ يَقْتَرِنُ بالفاء في مَواضِعَ{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>
              <div className="desc">
                Следствие условия связывается с условием при помощи союза Фа. <b>Если جوابَ الشرطِ (следствие условия) содержит:</b>
              </div>

              <h3 className="title">1) Именное предложение</h3>
              <div className="desc">
                Но если там приходит <span className="desc__ar"> إذا الفُجَائِيَّةُ </span> <b> ИЗА неожиданности</b> то она заменяет Фа
              </div>

              <h3 className="title">2) Требование: Приказ, Запрет, Вопрос</h3>

              <h3 className="title">3) Застывший глагол</h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> منْ </span>
                  <span> غشَّنا </span>
                  <Word root="لَيْسَ" prefix="فَ" />
                  <span> مِنَّا </span>
                </div>
                <div className="arsent__translate">Кто обманывает, тот не из нас</div>
              </div>

              <h3 className="title">4) Содержит قَد</h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span> و </span>
                  <span className="contrast"> منْ </span>
                  <span> يُطِعِْ الله و رسولَه </span>
                  <Word root="قَدْ" prefix="فَ" />
                  <span> فازَ فوزاً عظِيم </span>
                </div>
                <div className="arsent__translate">
                  А тот кто повинуется Аллахъу и Его Посланнику тот уже достиг великого успеха [Сура Союзники, 71 Аят]
                </div>
              </div>

              <h3 className="title">5) Содержит ما</h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> مَهما </span>
                  <span> تَكُنْ الظُّروفُ </span>
                  <Word root="ما" prefix="فَ" />
                  <span> أَكْذِبُ </span>
                </div>
                <div className="arsent__translate">Какие бы не сложились обстоятельства, то я не буду обманывать</div>
              </div>

              <h3 className="title">6) Содержит لَنْ</h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> مَنْ </span>
                  <span> لَبِسَ الحَرير في الدُّنيا </span>
                  <Word root="لَنْ" prefix="فَ" />
                  <span> يَلْبَسَهُ في الآخرة </span>
                </div>
                <div className="arsent__translate">Кто наденет шёлковую одежду в этом мире, тот не оденет в следующем</div>
              </div>

              <h3 className="title">7) Приставку настоящего س</h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> إنْ </span>
                  <span> تُسافِرْ </span>
                  <Word root="سَأُسافِرُ" prefix="فَ" />
                </div>
              </div>

              <h3 className="title">8) Содержит سوف</h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span> و </span>
                  <span className="contrast"> إنْ </span>
                  <span> خِفْتُم عيلَةً </span>
                  <Word root="سَوفَ" prefix="فَ" />
                  <span> يُغْنِيكُمُ الله مِنْ فَضْلِهِ إنَّ شاءَ</span>
                </div>
                <div className="arsent__translate">[Сура Покаяние Аят 28]</div>
              </div>

              <h3 className="title">9) Содержит كأَنَّما</h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span> أنَّه </span>
                  <span className="contrast"> مَنْ </span>
                  <span> قَتَلَ نَفْساً بِغَيْرِ نَفْسٍ, أوْ فَسادٍ في الأرض </span>
                  <Word root="كأَنَّما" prefix="فَ" />
                  <span> قَتَلَ الناسَ جَميعاً </span>
                </div>
                <div className="arsent__translate">
                  Кто убил душу не за душу, и не за порчу на земле, тот как будто убил все человечество. [Сура Трапеза 32 Аят]
                </div>
              </div>

              <AnimateCard>
                <div className="arsent arsent_rule">
                  <div className="arsent__original">
                    <span className="contrast"> لا تُجْزَمُ </span>
                    <span> جوابُ الشرط إذا اقتَرَنَ </span>
                    <span className="contrast_2"> بالفَاء </span>
                  </div>
                  <div className="arsent__translate">
                    <span className="contrast"> Не джазмируется </span> следствие условия если приходит
                    <span className="contrast_2"> Фа </span>
                  </div>
                </div>
              </AnimateCard>

              {/* ----------------------------------------------------------- */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(Page)
