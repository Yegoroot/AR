import React from 'react'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'
import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
// import AnimateCard from 'components/AnimateCard/AnimateCard'
// import Word from 'components/word'

class Letter4 extends React.Component {
  render() {
    const { classes, ...rest } = this.props

    return (
      <div>
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
              <h1 className="title"> Четырёхбуквенный глагол</h1>

              <div className="desc">
                Четырёхбуквенных глаголов в арабском языке не много. Так же как и в трёхбуквенном существуют <b>первообразные</b>
                <span className="desc__ar"> مُجَرَّد </span> и <b>производные</b> <span className="desc__ar"> مَزِيد </span>. У первообраных
                один шаблон, у производных три
              </div>

              <h2 className="title"> Первообразный فَعْلَلَ</h2>

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

              <h2 className="title"> Производный 1 تَفَعْلَلَ</h2>

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

              <h2 className="title"> Производный 2 اِفْعَلَلَّ</h2>

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

              <h2 className="title"> Производный 3 اِفْعَنْلَلَ</h2>

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

              <h2 className="title"> Примеры</h2>

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

              <h2 className="title"> Мини словарь</h2>

              <div className="arsent">
                <div className="arsent__original">تَرْجَمَ</div>
                <div className="arsent__translate"> Первёл </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">بَعْثَرَ</div>
                <div className="arsent__translate"> Расыпал, раскидал в разные стороны</div>
              </div>
              <div className="arsent">
                <div className="arsent__original">هَرْوَلَ</div>
                <div className="arsent__translate"> Бежал очень быстро (стремительно) </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">دَحْرَجَ</div>
                <div className="arsent__translate"> Катил </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">فَرْقَعَ</div>
                <div className="arsent__translate"> Взрывал, щёлкал </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">فَرْقَعَ</div>
                <div className="arsent__translate"> Взрывал, щёлкал </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">زَلْزَلَ</div>
                <div className="arsent__translate"> Тряс </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">وَسْوَسَ</div>
                <div className="arsent__translate"> Наущал </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">وَسْوَسَ</div>
                <div className="arsent__translate"> Наущал </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">قَهْقَهَ</div>
                <div className="arsent__translate"> Хохотал </div>
              </div>
              <h3 className="title"> Производные 1 шаблона </h3>
              <div className="arsent">
                <div className="arsent__original">تَدَحْرَجَ</div>
                <div className="arsent__translate"> Катился </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">تَدَحْرَجَ</div>
                <div className="arsent__translate"> Катился </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">تَرَعْرَعَ</div>
                <div className="arsent__translate"> Вырос </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">تَمَضْمَضَ</div>
                <div className="arsent__translate"> Полоскал рот </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">اِشْمَأَزَّ</div>
                <div className="arsent__translate"> Ненавидил </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">اِقْشَعَرَّ</div>
                <div className="arsent__translate"> По коже бежали мурашки </div>
              </div>
              <div className="arsent">
                <div className="arsent__original">
                  <span className=""> اِفْرَنْقَعَ </span>
                </div>
                <div className="arsent__translate"> Разлетался в стороны, разбегался</div>
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
