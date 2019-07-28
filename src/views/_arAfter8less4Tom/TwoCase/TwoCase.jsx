import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'
import { Helmet } from 'react-helmet'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class AbjectDegrees extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Двухпадежность арабских имён</title>
          <meta
            name="description"
            content="Имена без стандартного полного трехпадежного склонения ( الْاِسْمُ الَّذِي لَا يَنْصَرِفُ ) отличаются тем, что в неопределённом состоянии не принимают нунации"
          />
        </Helmet>
        <Header
          color="transparent"
          brand="Двухпадежность имен"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque17.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title">
                Двухпадежность имён&nbsp;<span className="ph">§</span>
              </h1>

              <div className="desc">
                Имя без стандартного полного трехпадежного склонения <b className="desc__ar"> الْاِسْمُ الَّذِي لَا يَنْصَرِفُ </b>. Они
                отличаются тем, что в неопределённом состоянии <b> не принимают нунации </b> (тан-вин может появиться только при
                необходимости для гладкости слога, например: <b className="desc__ar"> سَلَاسَلاً وَ أَغْلَالاً</b> )
                <b> и различают только два падежа: именительный и винительный.</b>
              </div>
              <div className="desc">
                Имена становятся двухпадежным, если содержат в себе две причины (точнее, два изъяна) или одну, которая имеет силу двух
                причин. Одна причина связана с внешней звуковой оболочкой слова, а вторая с её смыслом. Для лёгкости запоминания причин
                двухпадежности обычно используется вспомогательная связка:
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  عَدْلٌ ووَصْفٌ وَتَأْنِيثٌ وَمَعْرِفَةٌ وَعُجْمَةٌ ثُمَّ جَمْعٌ ثُمَّ تَرْكِيبٌ وَالنُّونُ الزَائِدَةُ مِنْ قَبْلِهَا
                  أَلِفٌ وَوَزْنُ فِعْلٍ
                </div>
              </div>

              <h2 className="title">
                Склонение двухпадежных имён{' '}
                <span role="img" aria-label="Writing Hand">
                  &nbsp;✍️
                </span>{' '}
              </h2>

              <div className="arsent">
                <div className="arsent__original">مَدَارِسُ فَاطِمَةُ رَمَضَانُ</div>
                <div className="arsent__translate">
                  Именительный падеж <span className="desc__ar"> (الرَّفْعُ) </span>
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">مَدَارِسَ فَاطِمَةَ رَمَضَانَ</div>
                <div className="arsent__translate">
                  Родительный падеж <span className="desc__ar"> (الجَرُّ) </span>
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">مَدَارِسَ فَاطِمَةَ رَمَضَانَ</div>
                <div className="arsent__translate">
                  Винительный падеж <span className="desc__ar"> (النَّصْبُ) </span>
                </div>
              </div>

              <h2 className="title">
                Сила двух причин{' '}
                <span role="img" aria-label="Writing Hand">
                  &nbsp;✍️
                </span>{' '}
              </h2>

              <div className="desc">
                Одного <b> ломанного множественного числа </b> или <b> некоренного алифа женского рода </b>
                <b className="desc__ar"> (اءُ) </b> и <b> алиф максуры </b> <b className="desc__ar"> (ى) </b> достаточно, чтобы сделать имя
                двухпадежным&nbsp;
                <b className="desc__ar" dir="rtl">
                  (ألف التأنيث الممدودة ألف التأنيث المقصورة صيغة منتهي الجموع)
                </b>
              </div>

              <div className="arsent">
                <div>
                  <span className="arsent__original"> كَسْلَى </span>
                  <span className="arsent__translate">(Ленивая)</span>
                </div>
                <div>
                  <span className="arsent__original"> صَحْرَاءُ </span>
                  <span className="arsent__translate">(Пустыня)</span>
                </div>
                <div>
                  <span className="arsent__original"> مَرْضى</span>
                  <span className="arsent__translate"> (Пациенты) </span>
                </div>
                <div>
                  <span className="arsent__original"> دُنْيا </span>
                  <span className="arsent__translate"> (Дунья) </span>
                </div>
                <div>
                  <span className="arsent__original"> عُلَمَاءُ </span>
                  <span className="arsent__translate"> (Ученые) </span>
                </div>
              </div>
              <div className="desc">
                <b> Множественное множественного числа </b> (предельное множественное) так же обладает двойной силой
              </div>

              <h2 className="title">
                Другие причины{' '}
                <span role="img" aria-label="Writing Hand">
                  &nbsp;✍️
                </span>{' '}
              </h2>

              <h3 className="title">Имена собственные женские (وَتَأْنِيثٌ) или мужские с тамарбутой</h3>
              <div className="desc">
                <b> Имена собственные женские </b> как имеющие окончание
                <b className="desc__ar"> التاء المَرْبُوطَة </b>, так и не имеющие. Если женское имя трёхбуквенное, а средняя с "сукуном",
                то ему можно отнести к трёхпадежному
                <br />
                <b> Имена собственные мужские с </b> <b className="desc__ar"> التاء المَرْبُوطَة </b>.
              </div>
              <div className="arsent">
                <div>
                  <span className="arsent__original"> زَيْنَبُ </span>
                  <span className="arsent__translate"> (жен) </span>
                </div>
                <div>
                  <span className="arsent__original"> فَاطِمَةُ </span>
                  <span className="arsent__translate"> (жен) </span>
                </div>
                <div>
                  <span className="arsent__original"> هِنْدٌ </span>
                  <span className="arsent__translate"> (жен) </span>
                </div>
                <div>
                  <span className="arsent__original"> حَمْزَةُ </span>
                  <span className="arsent__translate"> (муж) </span>
                </div>
                <div>
                  <span className="arsent__original"> طَلْحَةُ </span>
                  <span className="arsent__translate"> (муж) </span>
                </div>
              </div>

              <h3 className="title">Иностранность (وَعُجْمَةٌ)</h3>
              <div className="desc">
                Если это имя состоит из трёх букв, средняя из которых огласована "сукуном", то оно относится к трёхпадежным, кроме случаев
                если же оно женского рода, тогда танвин никогда не добавляется.
              </div>
              <div className="arsent">
                <div>
                  <span className="arsent__original"> إِبْرَاهِيمُ </span>
                  <span className="arsent__translate"> (Ибрахим) </span>
                </div>
                <div>
                  <span className="arsent__original"> وَاشِنْطُونُ </span>
                  <span className="arsent__translate"> (Вашингтон) </span>
                </div>
                <div>
                  <span className="arsent__original"> لُوطٌ </span>
                  <span className="arsent__translate"> (Лют) </span>
                </div>
                <div>
                  <span className="arsent__original"> نِيسُ </span>
                  <span className="arsent__translate"> (город во Франции) </span>
                </div>
              </div>

              <h3 className="title">Деформированные (عَدْلٌ)</h3>
              <div className="desc">
                Образованные из прилагательных путём изменения их формы по модели <b className="desc__ar"> فُعَلُ </b>
              </div>
              <div className="arsent">
                <div>
                  <span className="arsent__original"> عُمَرُ </span>
                  <span className="arsent__translate"> (Умар) </span>
                </div>
              </div>

              <h3 className="title">Слова с окончанием "алиф" и "нун" </h3>
              <div className="desc">(А у прилагательных в этой модели فَعْلانُ женский род образуется по модели فَعْلَى )</div>
              <div className="arsent">
                <div>
                  <span className="arsent__original"> كَسْلانُ </span>
                  <span className="arsent__translate"> (Ленивый) </span>
                </div>
                <div>
                  <span className="arsent__original"> عِمْرَانَ </span>
                  <span className="arsent__translate"> (Имран) </span>
                </div>
                <div>
                  <span className="arsent__original"> رَمَضَانُ </span>
                  <span className="arsent__translate"> (Рамадан) </span>
                </div>
              </div>

              <h3 className="title">Сходство с какой-либо глагольной формой</h3>

              <div className="arsent">
                <div>
                  <span className="arsent__original"> أَحْمَدُ </span>
                  <span className="arsent__translate"> (Ахмад "я восхваляю") </span>
                </div>
                <div>
                  <span className="arsent__original"> يَزِيدُ </span>
                  <span className="arsent__translate"> (Язид "он увеличивается") </span>
                </div>
                <div>
                  <span className="arsent__original"> يَشْكُرُ </span>
                  <span className="arsent__translate"> (Яшкур "он благодарит") </span>
                </div>
              </div>

              <h3 className="title">Имена, образованные из двух слов путём слитного (но не изафетного) соединения.</h3>
              <div className="desc">Слова состоящие из двух слов, как в русском "самовар", "паравоз"</div>
              <div className="arsent">
                <div>
                  <span className="arsent__original"> حَضْرَمَوتُ </span>
                  <span className="arsent__translate"> () </span>
                </div>
                <div>
                  <span className="arsent__original"> مَعْدَكَرِبُ </span>
                  <span className="arsent__translate"> () </span>
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

export default withStyles(arabicPageStyle)(AbjectDegrees)
