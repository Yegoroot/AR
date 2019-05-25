import React from 'react'
// react components for routing our app without refresh
import { Link } from 'react-router-dom'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// import Tooltip from '@material-ui/core/Tooltip'

// @material-ui/icons
import { Waves, Apps, Bookmarks, Book, Assignment } from '@material-ui/icons'

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
          Главная
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
              جملة الاِسميَة
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
              أسْماءُ الأفِعْل
            </Link>,
            <Link to="/ismumaful" className={classes.dropdownLink} style={{ fontSize: 20 }}>
              اسم المَفْول
            </Link>,
            <Link to="/ismafial" className={classes.dropdownLink} style={{ fontSize: 20 }}>
              اسم الفاعِل
            </Link>,
            <Link to="/ismulmakanwazaman" className={classes.dropdownLink} style={{ fontSize: 20 }}>
              اسم مكان و زمان
            </Link>,
            <Link to="/ismaalati" className={classes.dropdownLink} style={{ fontSize: 20 }}>
              اِسْمَ آلَةٍ
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
              أدْوَات الجَزْم
            </Link>,

            <Link to="/typeharflya" style={{ fontSize: 20 }} className={classes.dropdownLink}>
              حرف لا
            </Link>,
            <Link to="/lamibtidaa" style={{ fontSize: 20 }} className={classes.dropdownLink}>
              لَام الاِبْتِداءِ
            </Link>,
            <Link to="/harfmaplus" style={{ fontSize: 20 }} className={classes.dropdownLink}>
              حرف ما
            </Link>,
            <Link to="/harfwa" style={{ fontSize: 20 }} className={classes.dropdownLink}>
              حرف و
            </Link>,
            <Link to="/harfazzoidatu" className={classes.dropdownLink} style={{ fontSize: 20 }}>
              مِن الزّائِدَة
            </Link>,
            <Link to="/harfdeny" className={classes.dropdownLink}>
              Отрицательные частицы
            </Link>,
            <Link to="/harfsobir" className={classes.dropdownLink}>
              Собирательная частица
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
            </Link>,
            <Link to="/almafulufihi" style={{ fontSize: 20 }} className={classes.dropdownLink}>
              المَفْعُول فيه. ظَرْف
            </Link>,
            // <Link className={classes.dropdownLink}>---- эти темы связаны --------</Link>,
            <Link to="/thorfitha" style={{ fontSize: 20 }} className={classes.dropdownLink}>
              شَرْط. ظَرْف إذا
            </Link>,
            <Link to="/adatushart" style={{ fontSize: 20 }} className={classes.dropdownLink}>
              شَرْط. إنْ
            </Link>
            // <Link className={classes.dropdownLink}>------- эти темы связаны -----</Link>
          ]}
        />
      </ListItem>

      {/* <ListItem className={classes.listItem}>
				<Link to="/login" className={classes.navLink}>
					Регистрация
				</Link>
			</ListItem>

			<ListItem className={classes.listItem}>
				<Link to="/auth" className={classes.navLink}>
					Auth
				</Link>
			</ListItem> */}
      {/* <ListItem className={classes.listItem}>
				<Tooltip
					id="instagram-twitter"
					title="Follow us on twitter"
					placement={window.innerWidth > 959 ? 'top' : 'left'}
					classes={{ tooltip: classes.tooltip }}>
					<Button
						href="https://twitter.com/CreativeTim"
						target="_blank"
						color="transparent"
						className={classes.navLink}>
						<i className={classes.socialIcons + ' fab fa-twitter'} />
					</Button>
				</Tooltip>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					id="instagram-facebook"
					title="Follow us on facebook"
					placement={window.innerWidth > 959 ? 'top' : 'left'}
					classes={{ tooltip: classes.tooltip }}>
					<Button
						color="transparent"
						href="https://www.facebook.com/CreativeTim"
						target="_blank"
						className={classes.navLink}>
						<i className={classes.socialIcons + ' fab fa-facebook'} />
					</Button>
				</Tooltip>
			</ListItem>
			<ListItem className={classes.listItem}>
				<Tooltip
					id="instagram-tooltip"
					title="Follow us on instagram"
					placement={window.innerWidth > 959 ? 'top' : 'left'}
					classes={{ tooltip: classes.tooltip }}>
					<Button
						color="transparent"
						href="https://www.instagram.com/CreativeTimOfficial"
						target="_blank"
						className={classes.navLink}>
						<i className={classes.socialIcons + ' fab fa-instagram'} />
					</Button>
				</Tooltip>
			</ListItem> */}
    </List>
  )
}

export default withStyles(headerLinksStyle)(HeaderLinks)
