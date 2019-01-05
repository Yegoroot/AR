import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

import { Paper, Tooltip, Button } from '@material-ui/core'
// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'
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
                                согласованное; В таком случае с начала за определяемым следует{' '}
                                <Link to="/idafa">несогласованное</Link> затем согласованное
                            </p>
                            <h4 className={classes.title}>Определяемое -> Не согласованное -> Согласованное</h4>

                            <Paper className={classes.paperStandart}>
                                <p>
                                    Если <Link to="/idafa">несогласованное</Link> определение стоит в неопределенном
                                    состоянии, то и имя определяемое считается неопределенным
                                </p>
                                <Paragraph>
                                    <SeveralSentence>
                                        <ArSentence>
                                            <ContrastWord> دفترُ</ContrastWord>
                                            <ContrastWord red> طالبةٍ</ContrastWord>{' '}
                                            <ContrastWord blue> نظيفٌ </ContrastWord>
                                        </ArSentence>
                                        <RuSentence>
                                            (какая то) <ContrastWord blue> Чистая </ContrastWord>
                                            <ContrastWord> тетрадь</ContrastWord>{' '}
                                            <ContrastWord red> (какой то) студентки </ContrastWord>
                                        </RuSentence>
                                    </SeveralSentence>

                                    <RuSentence>
                                        <ContrastWord inRu>دفترُ</ContrastWord> {' -'} тетерадь [определяемое]
                                    </RuSentence>
                                    <RuSentence>
                                        <ContrastWord red inRu>
                                            طالبةٍ
                                        </ContrastWord>
                                        {' -'} (какой то) <ContrastWord red> студентки </ContrastWord> [несогласованное
                                        определение]
                                    </RuSentence>
                                    <RuSentence>
                                        <ContrastWord blue inRu>
                                            نظيفٌ
                                        </ContrastWord>
                                        {' -'}
                                        <ContrastWord blue>чистая</ContrastWord> [согласованное определение при
                                        определяемом]
                                    </RuSentence>
                                </Paragraph>
                            </Paper>
                            <Paper className={classes.paperStandart}>
                                <p>
                                    Если же несогласованное в определенном состоянии, то и определяемое считается в
                                    определенном состоянии
                                </p>

                                <Paragraph>
                                    <SeveralSentence>
                                        <ArSentence>
                                            <ContrastWord> مفتاحُ</ContrastWord>
                                            <ContrastWord red> البابِ</ContrastWord>{' '}
                                            <ContrastWord blue> الكبيرِ </ContrastWord>
                                        </ArSentence>
                                        <RuSentence>
                                            <ContrastWord> Ключ (от)</ContrastWord>
                                            <ContrastWord blue> большой </ContrastWord>{' '}
                                            <ContrastWord red> двери </ContrastWord>
                                        </RuSentence>
                                    </SeveralSentence>

                                    <RuSentence>
                                        <ContrastWord inRu>مفتاحُ</ContrastWord> {' -'} ключ [определяемое]
                                    </RuSentence>
                                    <RuSentence>
                                        <ContrastWord red inRu>
                                            البابِ
                                        </ContrastWord>
                                        {' -'} <ContrastWord red> двери </ContrastWord> [несогласованное определение]
                                    </RuSentence>
                                    <RuSentence>
                                        <ContrastWord blue inRu>
                                            الكبيرِ
                                        </ContrastWord>
                                        {' -'}
                                        <ContrastWord blue>большой</ContrastWord> [согласованное определение при
                                        несогласованном]
                                    </RuSentence>
                                </Paragraph>
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
