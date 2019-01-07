import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
// import Filter_1 from '@material-ui/icons/Looks'
// import Palette from '@material-ui/icons/Palette'
// import Favorite from '@material-ui/icons/Favorite'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'
// import Button from 'components/CustomButtons/Button.jsx'
// import GridContainer from 'components/Grid/GridContainer.jsx'
// import GridItem from 'components/Grid/GridItem.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'
// import NavPills from 'components/NavPills/NavPills.jsx'
import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import WeakLetters from 'components/weakLetters'
// import { weakLetters1, weakLetters2, weakLetters3 } from 'api/verbs/weakLetters'
import { weakLetters3 } from 'api/verbs/weakLetters'

class ShaddaVerbPage extends React.Component {
    state = {
        value: 0,
    }

    handleChange = (event, value) => {
        this.setState({ value })
    }

    render() {
        const { classes, ...rest } = this.props

        return (
            <div>
                <Header
                    color="transparent"
                    brand="Глагол с шаддой"
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,

                        color: 'white',
                    }}
                    {...rest}
                />

                <Parallax small filter image={require('assets/img/mosque/mosque15.jpg')} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <h1 className={classes.title}>Глагол с шаддой</h1>
                    </div>

                    <WeakLetters templates={weakLetters3} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(arabicPageStyle)(ShaddaVerbPage)
