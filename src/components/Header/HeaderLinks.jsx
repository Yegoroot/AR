import React from 'react'
// react components for routing our app without refresh
import { Link } from 'react-router-dom'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import { List, ListItem } from '@material-ui/core'
import { Home } from '@material-ui/icons'

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx'
// import Button from 'components/CustomButtons/Button.jsx'

import headerLinksStyle from 'assets/jss/material-kit-react/components/headerLinksStyle.jsx'

// console.log(Waves)
function HeaderLinks({ ...props }) {
  const { classes } = props
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.navLink} style={{ padding: 10 }}>
          <Home className={classes.icons} />
          <span className={classes.navLinkHideDesc}>Главная</span>
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          dropup
          className="dropdown"
          noLiPadding
          buttonText="Грамматика"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          dropdownList={[
            <a
              href="https://grammar.arabic.best/rules/first-steps/idafah"
              className={classes.dropdownLink}
            >
              - Несогласованное определение -
            </a>,
            <Link to="/soglasopr" className={classes.dropdownLink}>
              Согласованное определение
            </Link>,
            <Link
              to="/jumlatuism"
              className={classes.dropdownLink}
              style={{ fontSize: 20 }}
            >
              جملة الاسمية
            </Link>,
            <Link
              to="/separator"
              style={{ fontSize: 20 }}
              className={classes.dropdownLink}
            >
              ضمير فصل
            </Link>,
            <a
              href="https://grammar.arabic.best/rules/ksvedeniyu/exception"
              className={classes.dropdownLink}
            >
              - Выражение исключения -
            </a>,
            <Link
              to="/discriminator"
              style={{ fontSize: 20 }}
              className={classes.dropdownLink}
            >
              التمييز
            </Link>,
            <Link
              to="/jumlatuhaal"
              className={classes.dropdownLink}
              style={{ fontSize: 20 }}
            >
              الحال
            </Link>,
            <Link to="/additional" className={classes.dropdownLink}>
              Виды дополнений
            </Link>,
            <Link
              to="/addabsolute"
              style={{ fontSize: 20 }}
              className={classes.dropdownLink}
            >
              المفعول المطلق
            </Link>,
            <Link
              to="/almafulufihi"
              style={{ fontSize: 20 }}
              className={classes.dropdownLink}
            >
              المفعول فيه. ظرف
            </Link>,
            <Link
              to="/thorfitha"
              style={{ fontSize: 20 }}
              className={classes.dropdownLink}
            >
              ظرف إذا. شرط
            </Link>,
            <Link
              to="/adatushart"
              style={{ fontSize: 20 }}
              className={classes.dropdownLink}
            >
              شرط إنْ
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          dropup // для больших списков меню с середины документа прыгало вверх // кажись это было для изначального меню
          buttonText="Глагол"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
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
            <a
              href="https://grammar.arabic.best/rules/breeds/about-verb-breeds"
              className={classes.dropdownLink}
            >
              - Сарф глаголов -
            </a>,
            <a
              href="https://grammar.arabic.best/rules/verbs/perehodnoy"
              className={classes.dropdownLink}
            >
              {' - '}
              Переходность глагола
              {' - '}
            </a>,
            <a
              href="https://grammar.arabic.best/rules/breeds/breed-2"
              className={classes.dropdownLink}
            >
              {' - '}II порода глагола {' - '}
            </a>,
            <a
              href="https://grammar.arabic.best/rules/breeds/breed-3"
              className={classes.dropdownLink}
            >
              - III порода глагола-
            </a>,
            <a
              href="https://grammar.arabic.best/rules/breeds/breed-4"
              className={classes.dropdownLink}
            >
              - IV порода глагола -
            </a>,
            <a
              href="https://grammar.arabic.best/rules/breeds/breed-5"
              className={classes.dropdownLink}
            >
              - V порода глагола -
            </a>,
            <a
              href="https://grammar.arabic.best/rules/breeds/breed-6"
              className={classes.dropdownLink}
            >
              - VI порода глагола -
            </a>,
            <a
              href="https://grammar.arabic.best/rules/breeds/breed-7"
              className={classes.dropdownLink}
            >
              - VII порода глагола -
            </a>,
            <a
              href="https://grammar.arabic.best/rules/breeds/breed-8"
              className={classes.dropdownLink}
            >
              - VIII порода глагола-
            </a>,
            <a
              href="https://grammar.arabic.best/rules/breeds/breed-9"
              className={classes.dropdownLink}
            >
              - IX порода глагола -
            </a>,
            <a
              href="https://grammar.arabic.best/rules/breeds/breed-10"
              className={classes.dropdownLink}
            >
              - X порода глагола -
            </a>,
            <Link to="/letter4" className={classes.dropdownLink}>
              Четырёхбуквенный глагол
            </Link>,
            <Link to="/strongverb" className={classes.dropdownLink}>
              Усиление глагола
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          dropup
          buttonText="Имя"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          dropdownList={[
            <Link to="/masdar" className={classes.dropdownLink}>
              Масдар
            </Link>,
            <a
              href="https://grammar.arabic.best/rules/ksvedeniyu/asmaa-alafaal"
              className={classes.dropdownLink}
              style={{ fontSize: 20 }}
            >
              {' - '}
              اسماء الافعال
              {' - '}
            </a>,
            <Link
              to="/ismumaful"
              className={classes.dropdownLink}
              style={{ fontSize: 20 }}
            >
              اسم المَفول
            </Link>,
            <Link
              to="/ismafial"
              className={classes.dropdownLink}
              style={{ fontSize: 20 }}
            >
              اسم الفاعل
            </Link>,
            <a
              href="https://grammar.arabic.best/rules/derivatives/imya-deystviya-i-vremenyi"
              className={classes.dropdownLink}
              style={{ fontSize: 20 }}
            >
              - اسم مكان و زمان -
            </a>,
            <a
              href="https://grammar.arabic.best/rules/derivatives/imya-instrumenta"
              className={classes.dropdownLink}
              style={{ fontSize: 20 }}
            >
              {' - '}
              اسم آلَة
              {' - '}
            </a>,
            <a
              href="https://grammar.arabic.best/rules/derivatives/preference-name"
              className={classes.dropdownLink}
            >
              - Степени прилагательного -
            </a>,
            <a
              href="https://grammar.arabic.best/rules/derivatives/diminutive-name"
              className={classes.dropdownLink}
            >
              - Уменьшительно ласкательные -
            </a>,
            <Link to="/ism5" className={classes.dropdownLink}>
              Спряжение 5 имён
            </Link>,
            <a
              href="https://grammar.arabic.best/rules/ia3rob/mamnua-minas-sarf"
              className={classes.dropdownLink}
            >
              - Двухпадежность имён -
            </a>,
            <Link to="/someism" className={classes.dropdownLink}>
              Некоторые имена
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          dropup
          buttonText="Частицы"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          dropdownList={[
            <a
              href="https://grammar.arabic.best/rules/verbs/adwatu-djazm"
              className={classes.dropdownLink}
              style={{ fontSize: 20 }}
            >
              ـ أدوَات الجزم ـ
            </a>,

            <Link
              to="/typeharflya"
              style={{ fontSize: 20 }}
              className={classes.dropdownLink}
            >
              حرف لا
            </Link>,
            <Link
              to="/lamibtidaa"
              style={{ fontSize: 20 }}
              className={classes.dropdownLink}
            >
              لَام الابتداء
            </Link>,
            <Link
              to="/harfmaplus"
              style={{ fontSize: 20 }}
              className={classes.dropdownLink}
            >
              حرف ما
            </Link>,
            <Link
              to="/harfwa"
              style={{ fontSize: 20 }}
              className={classes.dropdownLink}
            >
              حرف و
            </Link>,
            <Link
              to="/harfazzoidatu"
              className={classes.dropdownLink}
              style={{ fontSize: 20 }}
            >
              مِن الزّائدة
            </Link>,
            <Link to="/harfdeny" className={classes.dropdownLink}>
              Отрицательные частицы
            </Link>,
            <Link to="/harfsobir" className={classes.dropdownLink}>
              Собирательная частица
            </Link>,
            <a
              href="https://grammar.arabic.best/rules/middle/inna-wa-akhawatuha"
              className={classes.dropdownLink}
            >
              - Частица инна и её сестры -
            </a>,
            <Link
              to="/harfHal"
              style={{ fontSize: 20 }}
              className={classes.dropdownLink}
            >
              حرف هل
            </Link>,
            <Link
              to="/harfulaw"
              style={{ fontSize: 20 }}
              className={classes.dropdownLink}
            >
              حرف لو
            </Link>,
            <Link to="/someharf" className={classes.dropdownLink}>
              Некоторые частицы
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Разное"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent',
          }}
          dropdownList={[
            <Link to="/99" className={classes.dropdownLink}>
              Прекрасные имена Аллахъа
            </Link>,
            <Link
              to="https://grammar.arabic.best/rules/construction-of-speech/accent-question"
              className={classes.dropdownLink}
            >
              - Акцент на объекте -
            </Link>,
            <Link to="/dua" className={classes.dropdownLink}>
              Дуа
            </Link>,
            <Link to="/similarity" className={classes.dropdownLink}>
              Страдательный залог и мафъуль
            </Link>,
            <a
              href="https://grammar.arabic.best/rules/vocabulary/100"
              className={classes.dropdownLink}
            >
              - Числительные с 100 -
            </a>,
            <Link
              to="/minqoblu"
              style={{ fontSize: 20 }}
              className={classes.dropdownLink}
            >
              مِن قبلُ
            </Link>,
            <Link to="/puraldual" className={classes.dropdownLink}>
              Мн. и дв. число
            </Link>,
            <a
              href="https://grammar.arabic.best/rules/construction-of-speech/surprise-expression"
              className={classes.dropdownLink}
            >
              - Формы удивления -
            </a>,
          ]}
        />
      </ListItem>
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
