import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

import { Link } from 'react-router-dom'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import { Helmet } from 'react-helmet'

// import CardWord from 'components/CardWord'

// arabicPageStyle.nameslist = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(auto-fill, minmax(250px,1fr))',
//   gridGap: 20,
// }

class Page extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Достоинства изучения имен Аллахъа</title>
          <meta
            name="description"
            content="Достоинства изучения имён Аллахъа"
          />
        </Helmet>
        <Header
          color="transparent"
          brand="Достоинства имён Аллахъа"
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
          image={require('assets/img/flowers/flowers1.jpg')}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title ">
                Достоинства изучения имён и атрибутов Аллаха
                <span className="ph">&nbsp;§ </span>
              </h1>
              {/* <p className="desc"> ---- </p> */}

              <div>
                <p>
                  <b> Вера в Аллахъа </b> это <b> основа </b> всех <b> основ</b>
                  , основа всех благ и не возможно представить веру в Аллахъа
                  без веры в Его имена и атррибуты
                </p>

                <p>
                  <b> Знания о именах и атрибутах Аллаха </b> является самой
                  великой наукой, потому что достоинство изучения той или иной
                  науки оценивается по объекту который изучаем
                </p>
                <p>
                  В Коране аятов об Атрибутах Аллахъа больше чем о еде, питье и
                  женитьбе в Раю. И Аяты об именах и атрибутах Аллахъа гораздо
                  величественнее чем Аяты о том свете.
                </p>
                <p>
                  Знания об именах и атрибутах Аллахъа является
                  <b> основой всех знаний </b>
                </p>
                <p>
                  Кто познал Аллахъа, тот познал все остальное, а тот кто не
                  познал является более невежественным по отношении к остальному
                </p>
                <p>
                  Имена Аллахъа
                  <b> ознакамливают с истинной сущностью Аллахъа </b>
                </p>
                <p>
                  <span className="desc__ar"> ابن القيم </span> "Знание об
                  Аллахъе это счастье для раба, а незнание об Аллахъе является
                  основой всех его несчастей
                </p>
                <div className="arsent">
                  <div className="arsent__original">
                    <span>
                      منْ عرفَ الله بِأسمائِه و صِفاتِهِ و أفعَاله أحَبَّهُ لا
                      مَحَالة
                    </span>
                  </div>
                  <div className="arsent__translate">
                    Кто познает Аллахъа по средствам его имен и атрибутов, он
                    непременно полюбит Его
                  </div>
                </div>
                <div className="arsent">
                  <div className="arsent__original">
                    <span>
                      # وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَىٰ فَادْعُوهُ بِهَا #
                    </span>
                  </div>
                  <div className="arsent__translate">
                    У Аллахъа есть прекрасные имена, просите у Него посредствам
                    них
                  </div>
                </div>

                <p>
                  Хорошие мысли, хорошие предположения об Аллахъе являются
                  плодами знания об Аллахъе и Его атрибутах
                </p>

                <div className="arsent">
                  <div className="arsent__original">
                    <span>
                      قَالَ رَسُولُ اللهِ ﷺ: يَقُولُ اللهُ : أَنَا عِنْدَ ظَنِّ
                      عَبْدِي بِي، وَأَنَا مَعَهُ حِينَ يَذْكُرُنِي، إِنْ
                      ذَكَرَنِي فِي نَفْسِهِ، ذَكَرْتُهُ فِي نَفْسِي، وَإِنْ
                      ذَكَرَنِي فِي مَلَإٍ، ذَكَرْتُهُ فِي مَلَإٍ هُمْ خَيْرٌ
                      مِنْهُمْ، وَإِنْ تَقَرَّبَ مِنِّي شِبْرًا، تَقَرَّبْتُ
                      إِلَيْهِ ذِرَاعًا، وَإِنْ تَقَرَّبَ إِلَيَّ ذِرَاعًا،
                      تَقَرَّبْتُ مِنْهُ بَاعًا، وَإِنْ أَتَانِي يَمْشِي
                      أَتَيْتُهُ هَرْوَلَةً.
                    </span>
                  </div>
                  <div className="arsent__translate">
                    Я такой какого представляет себе Меня мой раб, ....
                  </div>
                </div>

                <h2>
                  Имена и атрибуты явлються одним из великих причин того, чтоб
                  человек <b> заслужил Рай </b>
                </h2>
                <div className="arsent">
                  <div className="arsent__original">
                    <span>إن لله تسعة وتسعين اسماً من أحصاها دخل الجنة</span>
                  </div>
                  <div className="arsent__translate">
                    У Аллахъа 99 имен, тот кто выучит их, зайдет в Рай
                  </div>
                </div>

                <p className="desc">
                  Необходимо так же соблюдать{' '}
                  <Link to="rulesoflearn99">
                    правила понимания имен и атрибутов Аллахъа
                  </Link>
                </p>
              </div>

              {/* ------------------ */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(Page)
