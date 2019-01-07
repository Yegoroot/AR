import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

import { Paper /*Tooltip, Button*/ } from '@material-ui/core'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

// import Word from 'components/word'
// import AdditionalInfo from 'components/Typography/AdditionalInfo.jsx'
import ContrastWord from 'components/Typography/ContrastWord.jsx'
import ArSentence from 'components/Typography/ArSentence.jsx'

// import Paragraph from 'components/Typography/Paragraph.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class HarfMaPlusPage extends React.Component {
    render() {
        const { classes, ...rest } = this.props

        return (
            <div>
                <Header
                    color="transparent"
                    brand="Частица ما с друзьями"
                    // isBrandAr
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,

                        color: 'white',
                    }}
                    {...rest}
                />

                <Parallax small filter image={require('assets/img/mosque/mosque10.jpg')} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <div className={classes.navWrapper}>
                            <h1 className={classes.title}>Частица ما с друзьями</h1>
                            <p>
                                Скажи кто твой друг и тебе скажут кто ты, частица ما не является исключением, и в
                                зависимоти от того с кем она дружит, ведет себя по разному
                            </p>
                            <h2 dir="rtl" className={classes.title}>
                                مِنْ + ما = <ContrastWord red>مِمَّ</ContrastWord>؟
                            </h2>
                            <Paper>
                                <div className="wrap1">
                                    <ArSentence
                                        translate={
                                            <div>
                                                <ContrastWord red>Из чего </ContrastWord> создал Аллахъ человека?
                                            </div>
                                        }>
                                        <ContrastWord red>مِمَّ </ContrastWord> خَلَقَ اللّه الانسان؟
                                    </ArSentence>
                                </div>
                            </Paper>

                            <h2 dir="rtl" className={classes.title}>
                                بِ + ما = <ContrastWord red>بِمَ</ContrastWord>؟
                            </h2>
                            <Paper>
                                <div className="wrap1">
                                    <ArSentence
                                        translate={
                                            <div>
                                                <ContrastWord red>(С помощью чего) Чем </ContrastWord> ты убил змею?
                                            </div>
                                        }>
                                        <ContrastWord red>بِمَ </ContrastWord> قتلتُ الحَيَّة؟
                                    </ArSentence>
                                </div>
                            </Paper>

                            <h2 dir="rtl" className={classes.title}>
                                لِ + ما = <ContrastWord red>لِمَ</ContrastWord>؟
                            </h2>
                            <Paper>
                                <div className="wrap1">
                                    <ArSentence
                                        translate={
                                            <div>
                                                <ContrastWord red>
                                                    (Почему?, Для чего?, За чем?) Для какой цели{' '}
                                                </ContrastWord>{' '}
                                                ты вышел из класса?
                                            </div>
                                        }>
                                        <ContrastWord red>لِمَ </ContrastWord> خَرجُْتُ مِن الفصلِ؟
                                    </ArSentence>
                                </div>
                            </Paper>

                            <h2 dir="rtl" className={classes.title}>
                                عَنْ + ما = <ContrastWord red>عَمَّ</ContrastWord>؟
                            </h2>
                            <Paper>
                                <div className="wrap1">
                                    <ArSentence
                                        translate={
                                            <div>
                                                <ContrastWord red>Что </ContrastWord> ты искал в школе? ( ... بَحثَ عن )
                                            </div>
                                        }>
                                        <ContrastWord red>عَمَّ </ContrastWord> بَحثْتَ في المدرسةِ؟
                                    </ArSentence>
                                    <ArSentence
                                        translate={
                                            <div>
                                                <ContrastWord red>О чем </ContrastWord> спросил учитель?
                                            </div>
                                        }>
                                        <ContrastWord red>عَمَّ </ContrastWord> سألْتَ المدرسَ؟
                                    </ArSentence>
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

export default withStyles(arabicPageStyle)(HarfMaPlusPage)
