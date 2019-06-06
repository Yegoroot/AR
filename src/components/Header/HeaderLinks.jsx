import React from 'react'
// react components for routing our app without refresh
import { Link } from 'react-router-dom'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import { List, ListItem } from '@material-ui/core'
import { Waves, Apps, Bookmarks, Book, Assignment, Home } from '@material-ui/icons'

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx'
// import Button from 'components/CustomButtons/Button.jsx'

import headerLinksStyle from 'assets/jss/material-kit-react/components/headerLinksStyle.jsx'

function HeaderLinks({ ...props }) {
  const { classes } = props
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.navLink}>
          <Home className={classes.icons} /> <span className={classes.navLinkHideDesc}>Главная</span>
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Грамматика"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/idafa" className={classes.dropdownLink}>
              Не согласованное определение
            </Link>,
            <Link to="/soglasopr" className={classes.dropdownLink}>
              Согласованное определение
            </Link>,
            <Link to="/jumlatuhaal" className={classes.dropdownLink} style={{ fontSize: 20 }}>
              جملة الحال
            </Link>,
            <Link to="/jumlatuism" className={classes.dropdownLink} style={{ fontSize: 20 }}>
              جملة الاسمية
            </Link>,
            <Link to="/separator" style={{ fontSize: 20 }} className={classes.dropdownLink}>
              ضمير فصل
            </Link>,
            <Link to="/discriminator" style={{ fontSize: 20 }} className={classes.dropdownLink}>
              التمييز
            </Link>,
            <Link to="/additional" className={classes.dropdownLink}>
              Виды дополнений
            </Link>,
            <Link to="/addabsolute" style={{ fontSize: 20 }} className={classes.dropdownLink}>
              المفعول المطلق
            </Link>,
            <Link to="/almafulufihi" style={{ fontSize: 20 }} className={classes.dropdownLink}>
              المفعول فيه. ظرف
            </Link>,
            <Link to="/thorfitha" style={{ fontSize: 20 }} className={classes.dropdownLink}>
              ظرف إذا. شرط
            </Link>,
            <Link to="/adatushart" style={{ fontSize: 20 }} className={classes.dropdownLink}>
              شرط إنْ
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Глагол"
          // FSAr
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={Bookmarks}
          dropdownList={[
            <Link to="/shaddaverb" className={classes.dropdownLink}>
              Глагол с шаддой
            </Link>,
            <Link to="/tricksverbs" className={classes.dropdownLink}>
              Нюансы с глаголами
            </Link>,
            <Link to="/someverbs" className={classes.dropdownLink}>
              Некоторые глаголы
            </Link>,
            <Link to="/weakLetters" className={classes.dropdownLink}>
              Слабая коренная
            </Link>,
            <Link to="/fialmabnililmajhun" className={classes.dropdownLink}>
              Глагол страдательного залога
            </Link>,
            <Link to="/verbsarf" className={classes.dropdownLink}>
              Сарф глаголов
            </Link>,
            <Link to="/verbtransitive" className={classes.dropdownLink}>
              Переходность глагола
            </Link>,
            <Link to="/breed2" className={classes.dropdownLink}>
              II порода глагола
            </Link>,
            <Link to="/breed3" className={classes.dropdownLink}>
              III порода глагола
            </Link>,
            <Link to="/breed4" className={classes.dropdownLink}>
              IV порода глагола
            </Link>,
            <Link to="/breed5" className={classes.dropdownLink}>
              V порода глагола
            </Link>,
            <Link to="/breed6" className={classes.dropdownLink}>
              VI порода глагола
            </Link>,
            <Link to="/breed7" className={classes.dropdownLink}>
              VII порода глагола
            </Link>,
            <Link to="/breed8" className={classes.dropdownLink}>
              VIII порода глагола
            </Link>,
            <Link to="/breed9" className={classes.dropdownLink}>
              IX порода глагола
            </Link>,
            <Link to="/breed10" className={classes.dropdownLink}>
              X порода глагола
            </Link>,
            <Link to="/letter4" className={classes.dropdownLink}>
              Четырёхбуквенный глагол
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Имя"
          // FSAr
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={Book}
          dropdownList={[
            <Link to="/masdar" className={classes.dropdownLink}>
              Масдар
            </Link>,
            <Link to="/asmaulafal" className={classes.dropdownLink} style={{ fontSize: 20 }}>
              اسماء الافعال
            </Link>,
            <Link to="/ismumaful" className={classes.dropdownLink} style={{ fontSize: 20 }}>
              اسم المَفول
            </Link>,
            <Link to="/ismafial" className={classes.dropdownLink} style={{ fontSize: 20 }}>
              اسم الفاعل
            </Link>,
            <Link to="/ismulmakanwazaman" className={classes.dropdownLink} style={{ fontSize: 20 }}>
              اسم مكان و زمان
            </Link>,
            <Link to="/ismaalati" className={classes.dropdownLink} style={{ fontSize: 20 }}>
              اسم آلَة
            </Link>,
            <Link to="/abjectivedegrees" className={classes.dropdownLink}>
              Степени прилагательного
            </Link>,
            <Link to="/affectionateword" className={classes.dropdownLink}>
              Уменьшительно ласкательные
            </Link>,
            <Link to="/ism5" className={classes.dropdownLink}>
              Спряжение 5 имён
            </Link>,
            <Link to="/someism" className={classes.dropdownLink}>
              Некоторые имена
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Частицы"
          // FSAr
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={Assignment}
          dropdownList={[
            <Link to="/adwatuldjazm" className={classes.dropdownLink} style={{ fontSize: 20 }}>
              أدوَات الجزم
            </Link>,

            <Link to="/typeharflya" style={{ fontSize: 20 }} className={classes.dropdownLink}>
              حرف لا
            </Link>,
            <Link to="/lamibtidaa" style={{ fontSize: 20 }} className={classes.dropdownLink}>
              لَام الابتداء
            </Link>,
            <Link to="/harfmaplus" style={{ fontSize: 20 }} className={classes.dropdownLink}>
              حرف ما
            </Link>,
            <Link to="/harfwa" style={{ fontSize: 20 }} className={classes.dropdownLink}>
              حرف و
            </Link>,
            <Link to="/harfazzoidatu" className={classes.dropdownLink} style={{ fontSize: 20 }}>
              مِن الزّائدة
            </Link>,
            <Link to="/harfdeny" className={classes.dropdownLink}>
              Отрицательные частицы
            </Link>,
            <Link to="/harfsobir" className={classes.dropdownLink}>
              Собирательная частица
            </Link>,
            <Link to="/innawithsisters" className={classes.dropdownLink}>
              Частица Inna и её сестры
            </Link>,
            <Link to="/harfHal" style={{ fontSize: 20 }} className={classes.dropdownLink}>
              حرف هل
            </Link>,
            <Link to="/harfulaw" style={{ fontSize: 20 }} className={classes.dropdownLink}>
              حرف لو
            </Link>,
            <Link to="/someharf" className={classes.dropdownLink}>
              Некоторые частицы
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Разное"
          // FSAr
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={Waves}
          dropdownList={[
            <Link to="/accent" className={classes.dropdownLink}>
              Акцент на объекте
            </Link>,
            <Link to="/dua" className={classes.dropdownLink}>
              Дуа
            </Link>,
            <Link to="/similarity" className={classes.dropdownLink}>
              Страдательный залог и мафъуль
            </Link>,
            <Link to="/chislitel100" className={classes.dropdownLink}>
              Числительные с 100
            </Link>,
            <Link to="/minqoblu" style={{ fontSize: 20 }} className={classes.dropdownLink}>
              مِن قبلُ
            </Link>,
            <Link to="/puraldual" className={classes.dropdownLink}>
              Мн. и дв. число
            </Link>
          ]}
        />
      </ListItem>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
