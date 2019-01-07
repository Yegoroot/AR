import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

import withStyles from '@material-ui/core/styles/withStyles'

import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'
import WeakLetters from 'components/weakLetters'

import { shadda } from 'api/verbs/shadda'

class ShaddaVerbPage extends React.Component {
    state = {
        value: 0,
    }

    handleChange = (event, value) => {
        this.setState({ value })
    }

    render() {
        const { classes, ...rest } = this.props

        console.log('فِرِّ'.charCodeAt(0))
        console.log('فِرِّ'.charCodeAt(1))
        console.log('فِرِّ'.charCodeAt(2))
        console.log('فِرِّ'.charCodeAt(3))
        console.log('فِرِّ'.charCodeAt(4))

        console.log('فِرِّ'.length)
        console.log('عِدِ'.length)
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

                    <WeakLetters templates={shadda} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(arabicPageStyle)(ShaddaVerbPage)
