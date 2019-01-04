import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

import { Paper, Tooltip, Button } from '@material-ui/core'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import Info from 'components/Typography/Info.jsx'
import Primary from 'components/Typography/Primary.jsx'
import Muted from 'components/Typography/Muted.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'

import JumlatuHaalPage from 'assets/jss/material-kit-react/views/JumlatuHaalPage.jsx'

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

                <Parallax small filter image={require('assets/img/bg4-norm.jpg')} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <div className={classes.navWrapper}>
                            <h1 className={classes.title}> لمْ - لَمّا - لا - لامْ الأمر </h1>

                            <Paper className={classes.arEx}>
                                <Primary>
                                    <span className={classes.arColor}>لَمْ</span> - Отрицательная частица, которая
                                    приходит перед глаголами настоящего времени у ней две роли
                                </Primary>
                                <ul>
                                    <li>отрицает</li>
                                    <li>меняет время на прошедшее</li>
                                </ul>
                                <div className={classes.arDiv}>
                                    <span className={classes.arColor}>لمْ</span> أذهَبْ = ما ذهبتُ
                                </div>
                            </Paper>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(JumlatuHaalPage)(ProfilePage)
