import React from 'react'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import Icon from '@material-ui/core/Icon'
// @material-ui/icons
import Email from '@material-ui/icons/Email'
import People from '@material-ui/icons/People'
// core components
import Header from 'components/Header/Header.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
// import Footer from 'components/Footer/Footer.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import Button from 'components/CustomButtons/Button.jsx'
import Card from 'components/Card/Card.jsx'
import CardBody from 'components/Card/CardBody.jsx'
import CardHeader from 'components/Card/CardHeader.jsx'
import CardFooter from 'components/Card/CardFooter.jsx'
import loginPageStyle from 'assets/jss/material-kit-react/views/loginPage.jsx'
import image from 'assets/img/mosque/mosque3.jpg'
// import image from 'assets/img/bg7.jpg'

import { reduxForm, Field } from 'redux-form'
import emailValidator from 'email-validator'
import ReduxFormField from '../../components/ReduxFormField'

class LoginPage extends React.Component {
	constructor(props) {
		super(props)
		// we use this to make the card to appear after the page has been rendered
		this.state = {
			cardAnimaton: 'cardHidden',
		}
	}
	componentDidMount() {
		// we add a hidden class to the card and after 700 ms we delete it and the transition appears
		setTimeout(
			function() {
				this.setState({ cardAnimaton: '' })
			}.bind(this),
			700,
		)
	}
	render() {
		const { classes, ...rest } = this.props
		const { handleSubmit, pristine, submitting } = this.props
		return (
			<div>
				<Header  absolute color="transparent" brand="في منامي" isBrandAr rightLinks={<HeaderLinks />} {...rest} />
				<div
					className={classes.pageHeader}
					style={{
						backgroundImage: 'url(' + image + ')',
						backgroundSize: 'cover',
						backgroundPosition: 'top center',
					}}>
					<div className={classes.container}>
						<GridContainer justify="center">
							<GridItem xs={12} sm={12} md={4}>
								<Card className={classes[this.state.cardAnimaton]}>
									<form className={classes.form} onSubmit={handleSubmit}>
										<CardHeader color="primary" className={classes.cardHeader}>
											<h4>Авторизоваться через</h4>
											<div className={classes.socialLine}>
												<Button
													justIcon
													href="#pablo"
													target="_blank"
													color="transparent"
													onClick={e => e.preventDefault()}>
													<i className={'fab fa-twitter'} />
												</Button>
												<Button
													justIcon
													href="#pablo"
													target="_blank"
													color="transparent"
													onClick={e => e.preventDefault()}>
													<i className={'fab fa-facebook'} />
												</Button>
												<Button
													justIcon
													href="#pablo"
													target="_blank"
													color="transparent"
													onClick={e => e.preventDefault()}>
													<i className={'fab fa-google-plus-g'} />
												</Button>
											</div>
										</CardHeader>
										<p className={classes.divider}>Или создайте аккаунт</p>
										<CardBody>
											<Field
												name="name"
												component={ReduxFormField}
												label="Имя"
												type="text"
												icon={<People className={classes.inputIconsColor} />}
											/>
											<Field
												name="email"
												component={ReduxFormField}
												label="Email"
												type="text"
												icon={<Email className={classes.inputIconsColor} />}
											/>
											<Field
												name="password"
												component={ReduxFormField}
												label="Пароль"
												type="password"
												icon={<Icon className={classes.inputIconsColor}>lock_outline</Icon>}
											/>
										</CardBody>
										<CardFooter className={classes.cardFooter}>
											<Button
												simple
												disabled={pristine || submitting}
												type="submit"
												color="primary"
												size="lg">
												Создать
											</Button>
										</CardFooter>
									</form>
								</Card>
							</GridItem>
						</GridContainer>
					</div>
					{/* <Footer whiteFont /> */}
				</div>
			</div>
		)
	}
}

const validate = ({ name, email, password }) => {
	const errors = {}
	if (!name) errors.name = 'Поле имя обязятельно'

	if (!email) errors.email = 'Email обязателен'
	else if (!emailValidator.validate(email)) errors.email = 'Некоректный Email'

	if (!password) errors.password = 'Пароль обязателен'
	// else if (password.length < 8) errors.password = 'Пароль короткий'

	return errors
}

/** 
 * пришлось возвращать ф-тю потому что консоль рунается (route ждет ф-ию)
 */
// const ExportComp = () =>  reduxForm({
// 	form: 'authSignUp',
// 	validate,
// })(withStyles(loginPageStyle)(LoginPage))

export default  reduxForm({
	form: 'authSignUp',
	validate,
})(withStyles(loginPageStyle)(LoginPage))