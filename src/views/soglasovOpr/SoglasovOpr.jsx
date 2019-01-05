import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

import { Paper, Tooltip, Button } from '@material-ui/core'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import Word from 'components/word'
import AdditionalInfo from 'components/Typography/AdditionalInfo.jsx'
import ContrastWord from 'components/Typography/ContrastWord.jsx'
import SeveralSentence from 'components/Typography/SeveralSentence.jsx'
import ArSentence from 'components/Typography/ArSentence.jsx'
import RuSentence from 'components/Typography/RuSentence.jsx'
import Paragraph from 'components/Typography/Paragraph.jsx'
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
                    brand="Согласованное определение"
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
                            <h1 className={classes.titleAr}>Согласованное определение</h1>

                            <h3>
                                Согласованное определение ставится после определяемого и полностью согласуется в роде,
                                числе, падеже, состоянии. Чаще всего в роде согласованного определения выступает
                                прилагательное
                            </h3>

                            <Paragraph>
                                <ArSentence>
                                    <ContrastWord> عبّاس </ContrastWord>
                                    <ContrastWord red> تاجر </ContrastWord>
                                    <ContrastWord blue> غني </ContrastWord>
                                </ArSentence>
                                <RuSentence>
                                    <ContrastWord>Аббас</ContrastWord>{' '}
                                    <ContrastWord red>торговец [определяемое слово]</ContrastWord>{' '}
                                    <ContrastWord blue> богатый [определение]</ContrastWord>
                                </RuSentence>
                            </Paragraph>
                            <p>
                                Определяемое может иметь при себе одновременно как несогласованное определение так и
                                согласованное; В таком случае с начала за определяемым следует несогласованное затем
                                согласованное
                            </p>
                            <h4 className={classes.title}>Определяемое -> Не согласованное -> Согласованное</h4>

                            <Paper className={classes.paperStandart}>
                                <p>
                                    Если несогласованное определение стоит в неопределенном состоянии, то и имя
                                    определяемое считается неопределенным
                                </p>
                                <Paragraph>
                                    <ArSentence>
                                        <ContrastWord> دفترُ</ContrastWord>
                                        <ContrastWord red> طالبةٍ</ContrastWord>{' '}
                                        <ContrastWord blue> نظيفٌ </ContrastWord>
                                    </ArSentence>
                                    <RuSentence>
                                        <ContrastWord blue> (какая то) Чистая </ContrastWord>
                                        <ContrastWord> тетрадь</ContrastWord>{' '}
                                        <ContrastWord red> (какой то) студентки </ContrastWord>
                                    </RuSentence>
                                </Paragraph>
                            </Paper>
                            <Paper className={classes.paperStandart}>
                                <p>
                                    Если же несогласованное в определенном состоянии, то и определяемое считается в
                                    определенном состоянии
                                </p>

                                {/* <ArSentence>
                                    <ContrastWord> قلمُ </ContrastWord> تِلميذ
                                </ArSentence>
                                <ArSentence>
                                    قرأتُ من <ContrastWord> كتابِ </ContrastWord> الطّالب
                                </ArSentence>
                                <ArSentence>
                                    رأيتُ <ContrastWord> كتابَ </ContrastWord> الطّالب
                                </ArSentence> */}
                            </Paper>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(arabicPageStyle)(SoglasovOpr)
