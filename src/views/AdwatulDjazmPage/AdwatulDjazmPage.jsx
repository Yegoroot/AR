import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

import { Paper, Tooltip, Button } from '@material-ui/core'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import Camera from '@material-ui/icons/Camera'
import Palette from '@material-ui/icons/Palette'
import Favorite from '@material-ui/icons/Favorite'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
// import Button from 'components/CustomButtons/Button.jsx'
import GridContainer from 'components/Grid/GridContainer.jsx'
import GridItem from 'components/Grid/GridItem.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
import NavPills from 'components/NavPills/NavPills.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

import JumlatuHaalPage from 'assets/jss/material-kit-react/views/JumlatuHaalPage.jsx'
import WeakLetters from 'components/weakLetters'
import { weakLetters1, weakLetters2, weakLetters3 } from 'api/verbs/weakLetters'

class ProfilePage extends React.Component {
    state = {
        value: 0,
    }

    handleChange = (event, value) => {
        this.setState({ value })
    }

    render() {
        const { classes, ...rest } = this.props
        // const imageClasses = classNames(classes.imgRaised, classes.imgRoundedCircle, classes.imgFluid)
        // const navImageClasses = classNames(classes.imgRounded, classes.imgGallery)
        return (
            <div>
                <Header
                    color="transparent"
                    brand="أدْوَات الجَزْم"
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,

                        color: 'white',
                    }}
                    {...rest}
                />

                <Parallax small filter image={require('assets/img/ert.jpg')} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <div className={classes.navWrapper}>
                            <h1> لمْ - لَمّا - لا - لامْ الأمر </h1>
                            <div className={classes.description}>
                                <Paper className={classes.arEx}>
                                    <div className={classes.arDiv}>
                                        <span className={classes.arColor} />
                                        <span className={classes.arColor}> </span>
                                        {/* <span className={classes.arColor}>/span> */}
                                        <span className={classes.arColor} />
                                    </div>
                                    <div className={classes.ruDiv}>
                                        Пришел учитель в класс{' '}
                                        <span className={classes.arColor}>злым (пришёл в состоянии злости)</span>
                                    </div>
                                </Paper>
                                <Paper className={classes.arEx}>
                                    <div className={classes.arDiv}>
                                        شرب اِبني الماء <span className={classes.arColor}>صافِيًا </span>
                                    </div>
                                    <div className={classes.ruDiv}>
                                        Мой сын пил воду{' '}
                                        <span className={classes.arColor}>
                                            чистую (в момент пития вода была чистой)
                                        </span>
                                    </div>
                                    Если же мы хотим сказать что вода И была чистой, то используем простое
                                    прилагательное
                                    <div className={classes.arDiv}>شرب اِبني الماء الصافِي</div>
                                </Paper>

                                <h3> Примеры с جملة الحال: </h3>
                                <Paper className={classes.arEx}>
                                    <div className={classes.arDiv}>
                                        قرأ الكتاب{' '}
                                        <span className={classes.arColor}>
                                            <Tooltip
                                                title="واو الحال"
                                                placement="top"
                                                classes={{ tooltip: classes.tooltip }}>
                                                <Button className={classes.tooltipButton}>و</Button>
                                            </Tooltip>{' '}
                                            أنا جالِس{' '}
                                        </span>
                                    </div>
                                    <div className={classes.ruDiv}>
                                        Читал книгу
                                        <span className={classes.arColor}> сидя (в состоянии сидения)</span>
                                    </div>
                                </Paper>
                                <Paper className={classes.arEx}>
                                    <div className={classes.arDiv}>
                                        شربت الشاي{' '}
                                        <Tooltip
                                            title="واو العَطْف"
                                            placement="top"
                                            classes={{ tooltip: classes.tooltip }}>
                                            <Button className={classes.tooltipButton}>و</Button>
                                        </Tooltip>{' '}
                                        القهوة{' '}
                                        <span className={classes.arColor}>
                                            <Tooltip
                                                title="واو الحال"
                                                placement="top"
                                                classes={{ tooltip: classes.tooltip }}>
                                                <Button className={classes.tooltipButton}>و</Button>
                                            </Tooltip>{' '}
                                            أنا في العَمل{' '}
                                        </span>
                                    </div>
                                    <div className={classes.ruDiv}>
                                        Пил чай и кофе
                                        <span className={classes.arColor}>
                                            {' '}
                                            когда был на работе (в состоянии нахождения на работе)
                                        </span>
                                    </div>
                                </Paper>
                                <Paper className={classes.arEx}>
                                    <div className={classes.arDiv}>
                                        أكل أخي تفاحتي{' '}
                                        <span className={classes.arColor}>
                                            <Tooltip
                                                title="واو الحال"
                                                placement="top"
                                                classes={{ tooltip: classes.tooltip }}>
                                                <Button className={classes.tooltipButton}>و</Button>
                                            </Tooltip>{' '}
                                            أنا نائِم{' '}
                                        </span>
                                    </div>
                                    <div className={classes.ruDiv}>
                                        Мой брат ел яблоки{' '}
                                        <span className={classes.arColor}>пока я спал (был в состоянии сна)</span>
                                    </div>
                                </Paper>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(JumlatuHaalPage)(ProfilePage)
