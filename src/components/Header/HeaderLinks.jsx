import React from 'react'
// react components for routing our app without refresh
import { Link } from 'react-router-dom'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Tooltip from '@material-ui/core/Tooltip'

// @material-ui/icons
import { Apps, CloudDownload } from '@material-ui/icons'

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx'
import Button from 'components/CustomButtons/Button.jsx'

import headerLinksStyle from 'assets/jss/material-kit-react/components/headerLinksStyle.jsx'

function HeaderLinks({ ...props }) {
    const { classes } = props
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    buttonText="Default"
                    buttonProps={{
                        className: classes.navLink,
                        color: 'transparent',
                    }}
                    buttonIcon={Apps}
                    dropdownList={[
                        <Link to="/" className={classes.dropdownLink}>
                            Главная
                        </Link>,
                        <Link to="/" className={classes.dropdownLink}>
                            Все компоненты
                        </Link>,

                        <Link to="/landing" className={classes.navLink}>
                            Лэндинг
                        </Link>,

                        <Link to="/profile" className={classes.navLink}>
                            Персонал
                        </Link>,
                        <Link to="/login" className={classes.navLink}>
                            Login
                        </Link>,
                    ]}
                />
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link to="/weakLetters" className={classes.navLink}>
                    WeakLetters
                </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link to="/jumlatuhaal" className={classes.navLink} style={{ fontSize: 27 }}>
                    جملة الحال
                </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Link to="/adwatuldjazm" className={classes.navLink} style={{ fontSize: 27 }}>
                    أدْوَات الجَزْم
                </Link>
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
