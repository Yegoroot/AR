import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'
import Word from 'components/word'
// import AnimateCard from 'components/AnimateCard/AnimateCard.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import { Helmet } from 'react-helmet'

class JumlatuHaalPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Обстоятельство образа действия или дополнение арабского языка</title>
          <meta
            name="description"
            content='Обстоятельство образа действия в арабском языке или дополнение буквально означает "ситуация" или "положение. Отвечает на вопрос "как?" (В каком положении пребывает объект, в каком состоянии)'
          />
        </Helmet>
        <Header
          color="transparent"
          brand="الحال"
          isBrandAr
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,

            color: 'white'
          }}
          {...rest}
        />

        <Parallax small filter image={require('assets/img/mosque/mosque10.jpg')} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <div className={classes.navWrapper}>
              <h1 className="title h1ar">
                Состояние (الحال)&nbsp;<span className="ph">§</span>
              </h1>

              <div className="desc">
                <b>
                  Состояние (<span className="desc__ar">الحال</span>)
                </b>
                &nbsp;- обстоятельство образа действия или дополнение, которое
                <b>
                  &nbsp; проясняет состояние владельца (<span className="desc__ar">صاحِبُ الحال</span>)
                </b>
              </div>
              <div className="desc">
                Само слово
                <span className="desc__ar"> الحال </span> буквально означает "ситуация" или "положение. Отвечает на вопрос
                <b> "как?"</b> (В каком положении пребывает объект, в каком состоянии). Согласуется в роде, числе с (
                <span className="desc__ar">صاحِبُ الحال</span>)
              </div>

              <h2 className="h2ar title">
                <span role="img" aria-label="Writing Hand">
                  صاحِبُ الحال&nbsp;✍️
                </span>
              </h2>

              <div className="desc">Владелец (صاحِبُ الحال) может быть выражен через:</div>
              <h3 className="title">
                Имя деятеля (<span className="h3ar"> فاعل </span>)
              </h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span> دخل </span>
                  <span className="contrast_2"> المدرس </span>
                  <span> الفصل </span>
                  <span className="contrast">غَضِبًا </span>
                </div>
                <div className="arsent__translate">
                  Пришел учитель в класс <span className="contrast">злым </span>(пришёл в состоянии злости)
                </div>
              </div>

              <h3 className="title ">
                Глагол страдательного залога (<span className="h3ar">نَائِبُ فاعل</span>)
              </h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast_2"> يُؤْكَلُ </span>
                  <span> اللحمُ </span>
                  <span className="contrast"> مَطْبوخاً </span>
                </div>
                <div className="arsent__translate">
                  Мясо кушается <span className="contrast"> приготовленным </span>
                </div>
              </div>

              <h3 className="title ">
                Прямое дополнение&nbsp;(<span className="h3ar">مفعول به</span>)
              </h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span> اِشْتَرَيتُ </span>
                  <span className="contrast_2"> الكِتَابَ </span>
                  <span className="contrast"> مُجَلَّداً </span>
                </div>
                <div className="arsent__translate">
                  Купил книгу <span className="contrast"> переплетённую </span> (в переплёте)
                </div>
              </div>

              <h3 className="title ">
                Сказуемое (<span className="h3ar">خَبَر</span>)
              </h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span> هذا </span>
                  <span className="contrast_2"> الهِلالُ </span>
                  <span className="contrast"> طالِعاً </span>
                </div>
                <div className="arsent__translate">
                  Этот серпик луны <span className="contrast"> восходящий </span>
                </div>
              </div>

              <h3 className="title">
                Подлежащее &nbsp;(<span className="h3ar">مُبْتَدأ</span>)
              </h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span> دَخَلْتُ على المدير, و عنده </span>
                  <span className="contrast_2"> مدرسُنا </span>
                  <span className="contrast"> جالِساً </span>
                </div>
                <div className="arsent__translate">
                  Пришёл к директору, а там наш учитель <span className="contrast"> сядящий </span> (сидит)
                </div>
              </div>

              <h2 className=" title">
                <span role="img" aria-label="Writing Hand">
                  Состояние <span className="h2ar">صاحِبِ الحالِ</span>&nbsp;✍️
                </span>
              </h2>
              <div className="desc">
                В основе <span className="desc__ar"> صاحِبِ الحالِ </span> приходит в определённом состоянии, кроме случев когда есть какой
                то разрешитель (<span className="desc__ar"> مُسَوِّغ </span>):
              </div>

              <h3 className="title ">
                Если <span className="h3ar">الحالِ</span> прыгнет вперед
              </h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span> جَاءَني </span>
                  <span className="contrast"> سائلاً </span>
                  <span className="contrast_2"> طالبٌ </span>
                </div>
                <div className="arsent__translate">
                  Пришёл ко мне <span className="contrast"> спрашивающий </span> студент
                </div>
              </div>

              <h3 className="title ">
                Если <span className="h3ar">صاحِبِ الحالِ</span> в идафе или с определением
              </h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span> جَاءَني </span>
                  <span className="contrast_2"> طالبٌ مُواظِبٌ </span>
                  <span className="contrast"> مُسْتَأذِناً </span>
                  <span> في الخُرُوج </span>
                </div>
                <div className="arsent__translate">
                  Пришёл ко мне <span className="contrast"> просящийся </span> войти, старательный студент
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span> جَاءَني </span>
                  <span className="contrast_2"> طَبيبُ الأسْنَانٍ </span>
                  <span className="contrast"> مُسْتَفْتِياً </span>
                </div>
                <div className="arsent__translate">
                  Пришёл ко мне дантист <span className="contrast"> спрашивая совета </span>
                </div>
              </div>

              <h3 className="title ">Отрицание, запрет или вопрос</h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast_3"> ما </span>
                  <span> جاء اليوم </span>
                  <span className="contrast_2"> أحدٌ </span>
                  <span className="contrast"> مُتأَخِراً </span>
                </div>
                <div className="arsent__translate">
                  Никто сегодня не пришёл <span className="contrast"> опоздавшим </span>
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast_3"> لا </span>
                  <span> يَدْخُلْ </span>
                  <span className="contrast_2"> أحدٌ </span>
                  <span> قاعةَ الاِمتِحانِ </span>
                  <span className="contrast"> حامِلاً </span>
                  <span> حَقيبتَهُ </span>
                </div>
                <div className="arsent__translate">
                  Пусть не заходит ни кто в кабинет экзамена <span className="contrast"> несущим </span> портфель свой
                </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast_3"> أ </span>
                  <span> جَاء اليَومَ </span>
                  <span className="contrast_2"> أحدٌ </span>
                  <span className="contrast"> مُتَأَخِراً </span>
                  <span> ؟ </span>
                </div>
                <div className="arsent__translate">
                  А кто нибудь пришёл <span className="contrast"> опоздавшим </span> ?
                </div>
              </div>

              <h3 className="title ">
                Если <span className="h3ar">الحال</span> является предложением
              </h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span> أوْ كَالَّذي مَرَّ على </span>
                  <span className="contrast_2"> قَرْيَةٍ </span>
                  <span className="contrast">و هِيَ خَاوِيَةٌ عَلَى عُرُوشِهَا</span>
                </div>
                <div className="arsent__translate">
                  Или над тем кто проходил мимо селения
                  <span className="contrast"> разрушенного до основания </span>
                  [Бакара 259]
                </div>
              </div>

              <h3 className="title "> В неопределённом состоянии может быть без причины</h3>
              <div className="arsent">
                <div className="arsent__original">
                  <span> صلّى </span>
                  <span className="contrast_2"> رسول الله ﷺ </span>
                  <span className="contrast"> قاعِداً </span>,<span> وصَلَّى ورَاءَهُ </span>
                  <span className="contrast_2"> رِجالٌ </span>
                  <span className="contrast"> قِياماً </span>
                </div>
                <div className="arsent__translate">
                  Молился Посланник Аллахъа <span className="contrast"> сидя </span>, за ним мужчины молились
                  <span className="contrast"> стоя </span>
                </div>
              </div>

              <h2 className="h2ar title">
                <span role="img" aria-label="Writing Hand">
                  جملة الحال&nbsp;✍
                </span>
              </h2>

              <div className="desc">
                <span className="desc__ar">الحال</span> может быть выражен предложением.
              </div>
              <div className="desc">
                Предложение обязательно должно быть связанно с <span className="desc__ar">الحال</span> местоимением или
                <span className="desc__ar"> واو الحال </span> или местоимением и <span className="desc__ar"> واو الحال </span>
              </div>
              <div className="desc">
                Если в предложении глагол прошедшего времени в утвердительной форме то вместе с<span className="desc__ar"> واو الحال </span>
                нужно поставить частицу
                <span className="desc__ar contrast_2"> قد </span>.
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  أكل أخي تفاحتي
                  <span className="contrast">
                    <span className="contrast_2"> و </span> أنا نائِم
                  </span>
                </div>
                <div className="arsent__translate">
                  Мой брат ел мои яблоки
                  <span className="contrast"> пока я спал </span>
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <Word root="جلس" color2 suffix="تُ" />
                  <span className="contrast"> أسْتَمِعُ إلى تَلاوة القرآن الكريم من الإذاعةِ </span>
                </div>
                <div className="arsent__translate">
                  Я сидел <span className="contrast"> слушая Коран из радио </span>
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> خَرَجْنا </span>
                  <span className="contrast">
                    <Word root="تَنَزَّهُ" color2 prefix="نَ" />
                  </span>
                </div>
                <div className="arsent__translate">
                  Вышли <span className="contrast"> прогуляться </span> (гл. 5 породы تَنَزَّهَ)
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> جاء الجَريح </span>
                  <span className="contrast"> دَمُه يَتَدَفَّقُ </span>
                </div>
                <div className="arsent__translate">
                  Пришёл раненный <span className="contrast"> истекая кровью </span>
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  دخلتُ المسجد
                  <span className="contrast_2"> و </span>
                  <span className="contrast"> الإمام يُسَلِّمُ </span>
                </div>
                <div className="arsent__translate">Я зашел в мечеть в то время когда имам давал салям</div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  دخلتُ المسجد
                  <span className="contrast_2"> وقد </span>
                  <span className="contrast"> سَلَّمَ الإمامُ </span>
                </div>
                <div className="arsent__translate">Я зашел в мечеть когда имам уже дал салям</div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  شربت الشاي و القهوة
                  <span className="contrast">
                    <span className="contrast_2"> و </span> أنا في العَمل
                  </span>
                </div>
                <div className="arsent__translate">
                  Пил чай и кофе
                  <span className="contrast"> когда был на работе</span>
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> وصلتُ إلى مكة </span>
                  <span className="contrast_2"> و </span>
                  <span className="contrast"> الشمسُ تَغْرُبُ </span>
                </div>
                <div className="arsent__translate">
                  Прибыл в Мекку
                  <span className="contrast"> когда солнце заходило </span>
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> خَرجُوا مِنْ دِيَارِهِمْ </span>
                  <span className="contrast_2"> وَهُمْ </span>
                  <span className="contrast"> أُلوفٌ </span>
                </div>
                <div className="arsent__translate">
                  Они покинули свои жилища
                  <span className="contrast"> (их было) тысячами </span>
                </div>
              </div>

              <h2 className=" title">
                <span role="img" aria-label="Writing Hand">
                  Отличие от определения (прилагательного)&nbsp;✍️
                </span>
              </h2>
              <div className="arsent">
                <div className="arsent__original">
                  <span> شرب اِبني </span>
                  <span className="contrast_2"> الماء </span>
                  <span className="contrast"> صافِيًا </span>
                </div>
                <div className="arsent__translate">
                  Мой сын пил воду <span className="contrast"> чистой </span> (в момент пития вода была чистой, в чистом виде)
                </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">شرب اِبني الماء الصافِي</div>
                <div className="arsent__translate">
                  Мой сын пил чистую воду [ Если хотим сказать что вода и была чистой, то используем простое прилагательное ]
                </div>
              </div>

              {/* --------------- */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(JumlatuHaalPage)
