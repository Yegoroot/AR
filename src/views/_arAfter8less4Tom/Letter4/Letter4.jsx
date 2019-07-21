import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import { Helmet } from 'react-helmet'

class Letter4 extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
        <Helmet>
          <title>Четырёхбуквенный арабский глагол</title>
          <meta
            name="description"
            content="Четырёхбуквенных глаголов в арабском языке не много. Так же как и в трёхбуквенном существуют первообразные مُجَرَّد производные مَزِيد"
          />
        </Helmet>
        <Header
          color="transparent"
          brand="Четырёхбуквенный глагол"
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
                Четырёхбуквенный глагол
                <span role="img" aria-label="Palm Tree">
                  {' '}
                  🌴{' '}
                </span>
              </h1>

              <div className="desc">
                Четырёхбуквенных глаголов в арабском языке не много. Так же как и в трёхбуквенном существуют <b>первообразные</b>
                <span className="desc__ar"> مُجَرَّد </span> и <b>производные</b> <span className="desc__ar"> مَزِيد </span>. У первообраных
                один шаблон, у производных три
              </div>

              <h2 className="title">
                {' '}
                Первообразный فَعْلَلَ{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> دَحْرَجَ </span> -<span className=""> يُدَحْرِجُ </span>
                </div>
                <div className="arsent__translate"> Катил - катит </div>
              </div>

              <div className="items items_islabel">
                <div className="item">
                  <span className="item__label">الماضي</span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> تَرْجَمَ </div>
                    <div className="arsent__translate"> Перевёл </div>
                  </div>
                </div>
                <div className="item">
                  <span className="item__label">المُضارِع</span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> يُتَرْجِمُ </div>
                    <div className="arsent__translate"> Переводит </div>
                  </div>
                </div>
                <div className="item">
                  <span className="item__label">المصدر</span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> تَرْجَمَةٌ </div>
                    <div className="arsent__translate"> Перевод </div>
                  </div>
                </div>
              </div>

              <h2 className="title">
                {' '}
                Производный 1 تَفَعْلَلَ{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> تَدَحْرَجَ </span>
                </div>
                <div className="arsent__translate"> Катится </div>
              </div>

              <div className="items items_islabel">
                <div className="item">
                  <span className="item__label">الماضي</span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> تَرَعْرَعَ </div>
                    <div className="arsent__translate"> Вырос </div>
                  </div>
                </div>
                <div className="item">
                  <span className="item__label">المُضارِع</span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> يَتَرَعْرَعُ </div>
                    <div className="arsent__translate"> Выростает </div>
                  </div>
                </div>
                <div className="item">
                  <span className="item__label">المصدر</span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> تَرَعْرُعٌ </div>
                    <div className="arsent__translate"> Вырастание </div>
                  </div>
                </div>
              </div>

              <h2 className="title">
                {' '}
                Производный 2 اِفْعَلَلَّ{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> اِطْمَأَنَّ </span>
                </div>
                <div className="arsent__translate"> Покоился (оставался спокойным) </div>
              </div>
              <div className="items items_islabel">
                <div className="item">
                  <span className="item__label">الماضي</span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> اِطْمَأَنَّ </div>
                    <div className="arsent__translate"> Покоился </div>
                  </div>
                </div>
                <div className="item">
                  <span className="item__label">المُضارِع</span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> يَطْمَئِنُّ </div>
                    <div className="arsent__translate"> Покоится </div>
                  </div>
                </div>
                <div className="item">
                  <span className="item__label">المصدر</span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> اِطْمِئْنَانٌ </div>
                    <div className="arsent__translate"> Спокойствие </div>
                  </div>
                </div>
              </div>

              <h2 className="title">
                {' '}
                Производный 3 اِفْعَنْلَلَ{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> اِحْرَنْجَمَ </span>
                </div>
                <div className="arsent__translate"> Собирался вместе, теснился</div>
              </div>
              <div className="items items_islabel">
                <div className="item">
                  <span className="item__label">الماضي</span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> اِحْرَنْجِمُ </div>
                    <div className="arsent__translate"> Теснился </div>
                  </div>
                </div>
                <div className="item">
                  <span className="item__label">المُضارِع</span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> يَحْرَنْجِمُ </div>
                    <div className="arsent__translate"> Теснится </div>
                  </div>
                </div>
                <div className="item">
                  <span className="item__label">المصدر</span>
                  <div className="arsent">
                    <div className="arsent__original contrast"> اِحْرِنْجَام </div>
                    <div className="arsent__translate"> Теснение </div>
                  </div>
                </div>
              </div>

              <h2 className="title">
                {' '}
                Примеры{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>

              <div className="arsent">
                <div className="arsent__original">
                  <span> دخل الطفل مكتَبي و </span>
                  <span className="contrast"> بَعْثَرَ </span>
                  <span> الكتب و الأوراق </span>
                </div>
                <div className="arsent__translate"> Зашел ребенок в мой кабинет и разбросал книги и листы </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span className="contrast"> دَغْدَغْتُ </span>
                  <span> الطفل فَضَحِك </span>
                </div>
                <div className="arsent__translate"> Я пощекотал ребенка и он засмеялся </div>
              </div>

              <div className="arsent">
                <div className="arsent__original" dir="rtl">
                  <span> و قال تعالى "فَمَنْ </span>
                  <span className="contrast"> زُحْزِحَ </span>
                  <span> عَنِ النَّار و أُدْخِلَ الجَنَّةَ فَقَدْ فَازَ"</span>
                </div>
                <div className="arsent__translate"> Тот кто будет удалён от огня и введен в рай, тот будет Победившим [Имран / 185] </div>
              </div>

              <div className="arsent">
                <div className="arsent__original">
                  <span> أعْطانِي الطبيبُ دَوَاءً </span>
                  <span className="contrast"> لِلغَرْغَرَة </span>
                </div>
                <div className="arsent__translate"> Дал мне врач лекарства для полоскания горла </div>
              </div>

              {/* -------------------------------- */}

              <h2 className="title">
                {' '}
                Мини словарь{' '}
                <span role="img" aria-label="Writing Hand">
                  {' '}
                  ✍️{' '}
                </span>{' '}
              </h2>

              <div className="arsent">
                <div>
                  <span className="arsent__original">تَرْجَمَ</span>
                  <span className="arsent__translate"> Первёл </span>
                </div>

                <div>
                  <span className="arsent__original">بَعْثَرَ</span>
                  <span className="arsent__translate"> Расыпал, раскидал в разные стороны</span>
                </div>
                <div>
                  <span className="arsent__original">هَرْوَلَ</span>
                  <span className="arsent__translate"> Бежал очень быстро (стремительно) </span>
                </div>
                <div>
                  <span className="arsent__original">دَحْرَجَ</span>
                  <span className="arsent__translate"> Катил </span>
                </div>
                <div>
                  <span className="arsent__original">فَرْقَعَ</span>
                  <span className="arsent__translate"> Взрывал, щёлкал </span>
                </div>
                <div>
                  <span className="arsent__original">فَرْقَعَ</span>
                  <span className="arsent__translate"> Взрывал, щёлкал </span>
                </div>
                <div>
                  <span className="arsent__original">زَلْزَلَ</span>
                  <span className="arsent__translate"> Тряс </span>
                </div>
                <div>
                  <span className="arsent__original">وَسْوَسَ</span>
                  <span className="arsent__translate"> Наущал </span>
                </div>
                <div>
                  <span className="arsent__original">وَسْوَسَ</span>
                  <span className="arsent__translate"> Наущал </span>
                </div>
                <div>
                  <span className="arsent__original">قَهْقَهَ</span>
                  <span className="arsent__translate"> Хохотал </span>
                </div>
              </div>

              <h3 className="title"> Производные 1 шаблона </h3>

              <div className="arsent">
                <div>
                  <span className="arsent__original">تَدَحْرَجَ</span>
                  <span className="arsent__translate"> Катился </span>
                </div>
                <div>
                  <span className="arsent__original">تَرَعْرَعَ</span>
                  <span className="arsent__translate"> Вырос </span>
                </div>
                <div>
                  <span className="arsent__original">تَمَضْمَضَ</span>
                  <span className="arsent__translate"> Полоскал рот </span>
                </div>
                <div>
                  <span className="arsent__original">اِشْمَأَزَّ</span>
                  <span className="arsent__translate"> Ненавидил </span>
                </div>
                <div>
                  <span className="arsent__original">اِقْشَعَرَّ</span>
                  <span className="arsent__translate"> По коже бежали мурашки </span>
                </div>
                <div>
                  <span className="arsent__original"> اِفْرَنْقَعَ </span>
                  <span className="arsent__translate"> Разлетался в стороны, разбегался</span>
                </div>
              </div>

              {/* -------------------------------- */}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(arabicPageStyle)(Letter4)
