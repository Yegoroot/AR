import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

// import { Paper, Tooltip, Button } from '@material-ui/core'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// import { Link } from 'react-router-dom'
// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

// import Word from 'components/word'
// import AdditionalInfo from 'components/Typography/AdditionalInfo.jsx'
// import ContrastWord from 'components/Typography/ContrastWord.jsx'
// import SeveralSentence from 'components/Typography/SeveralSentence.jsx'
// import ArSentence from 'components/Typography/ArSentence.jsx'
// import RuSentence from 'components/Typography/RuSentence.jsx'
// import Paragraph from 'components/Typography/Paragraph.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class SoglasovOpr extends React.Component {
    render() {
        const { classes, ...rest } = this.props

        return (
            <div>
                <Header
                    color="transparent"
                    brand="Tricks with verb"
                    isBrandAr
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: 'white',
                    }}
                    {...rest}
                />

                <Parallax small filter image={require('assets/img/mosque/mosque4.jpg')} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <div className={classes.navWrapper}>
                            <h1 className={classes.titleAr}>Трюки с глаголами</h1>

                            {/* <h3>
                                Именное предложение – это предложение, которое начинается с имени. Например: الطالِب
                                مجتهد Студент прилежен Подлежащее именного предложения (المُبْتَدَأُ) ставится, как
                                правило, в определённом состоянии, а сказуемое (الخَبَرُ) - в неопределённом.
                            </h3>

                            <p>
                                Если сказуемое именного предложения является именем, то оно согласуется с подлежащим в
                                числе и роде:
                            </p> */}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(arabicPageStyle)(SoglasovOpr)
