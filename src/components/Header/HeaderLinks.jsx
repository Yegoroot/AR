import React from 'react'
// react components for routing our app without refresh
import { Link } from 'react-router-dom'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
// import Tooltip from '@material-ui/core/Tooltip'

// @material-ui/icons
import { Waves, Apps } from '@material-ui/icons'

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

                {/* <CustomDropdown
                    noLiPadding
                    buttonText="Default"
                    buttonProps={{
                        className: classes.navLink,
                        color: 'transparent',
                    }}
                    buttonIcon={Apps}
                    dropdownList={[
                     
                    ]}
                /> */}
            </ListItem>

            <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    buttonText="Грамматика"
                    buttonProps={{
                        className: classes.navLink,
                        color: 'transparent',
                    }}
                    buttonIcon={Apps}
                    dropdownList={[
                        <Link to="/jumlatuhaal" className={classes.dropdownLink} style={{ fontSize: 20 }}>
                            جملة الحال
                        </Link>,
                        <Link to="/jumlatuism" className={classes.dropdownLink} style={{ fontSize: 20 }}>
                            جملة الاِسميَة
                        </Link>,
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
                        color: 'transparent',
                    }}
                    buttonIcon={Waves}
                    dropdownList={[
                        <Link to="/tricksverbs" className={classes.dropdownLink}>
                            Трюки с глаголами
                        </Link>,

                        <Link to="/weakLetters" className={classes.dropdownLink}>
                            Слабая коренная
                        </Link>,
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
                        color: 'transparent',
                    }}
                    buttonIcon={Waves}
                    dropdownList={[
                        <Link to="/masdar" className={classes.dropdownLink}>
                            Масдар
                        </Link>,
                        <Link to="/abjectivedegrees" className={classes.dropdownLink}>
                            Степени прилагательного
                        </Link>,
                        <Link to="/idafa" className={classes.dropdownLink}>
                            Не согласованное определение
                        </Link>,
                        <Link to="/soglasopr" className={classes.dropdownLink}>
                            Согласованное определение
                        </Link>,
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
                        color: 'transparent',
                    }}
                    buttonIcon={Waves}
                    dropdownList={[
                        <Link to="/adwatuldjazm" className={classes.dropdownLink} style={{ fontSize: 20 }}>
                            أدْوَات الجَزْم
                        </Link>,

                        <Link to="/typeharflya" className={classes.dropdownLink}>
                            Частица لا
                        </Link>,
                        <Link to="/harfmaplus" className={classes.dropdownLink}>
                            Частица ما
                        </Link>,
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
                        color: 'transparent',
                    }}
                    buttonIcon={Waves}
                    dropdownList={[
                        <Link to="/accent" className={classes.dropdownLink}>
                            Акцент на объекте
                        </Link>,

                        // <Link to="/typeharflya" className={classes.dropdownLink}>
                        //     Частица لا
                        // </Link>,
                        // <Link to="/harfmaplus" className={classes.dropdownLink}>
                        //     Частица ما
                        // </Link>,
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
