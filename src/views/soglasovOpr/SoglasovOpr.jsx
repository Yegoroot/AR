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

import JumlatuHaalPage from 'assets/jss/material-kit-react/views/JumlatuHaalPage.jsx'

class ProfilePage extends React.Component {
    render() {
        const { classes, ...rest } = this.props

        return (
            <div>
                <Header
                    color="transparent"
                    brand="Не согласованное определение"
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
                            <h1 className={classes.titleAr}>Не согласованное определение</h1>

                            <h4>
                                Термин "идафа", который означает буквально "присоединение", можно перевести на русский
                                язык как "несогласованное определение". Иногда этот термин переводят как "изафетная
                                связка" например:
                            </h4>
                            <SeveralSentence>
                                <ArSentence>قلم تِلمِيذٍ</ArSentence>
                                <RuSentence> Карандаш ученика </RuSentence>
                            </SeveralSentence>

                            <Paper className={classes.paperStandart}>
                                <h4>
                                    <ContrastWord>Первый член идафы</ContrastWord> не принимает ни танвина ни
                                    определенного артикля т.е стоит в так называемом "сопряженном состоянии". В
                                    зависимости от местоположения может быть в любом падеже
                                </h4>
                                <ArSentence>
                                    <ContrastWord> قلمُ </ContrastWord> تِلميذ
                                </ArSentence>
                                <ArSentence>
                                    قرأتُ من <ContrastWord> كتابِ </ContrastWord> الطّالب
                                </ArSentence>
                                <ArSentence>
                                    رأيتُ <ContrastWord> كتابَ </ContrastWord> الطّالب
                                </ArSentence>
                            </Paper>
                            <Paper className={classes.paperStandart}>
                                <h4>
                                    <ContrastWord>Второй член идафы</ContrastWord> может стоять как в определенном
                                    состоянии так и в не определенном состоянии
                                </h4>
                                <SeveralSentence>
                                    <Paragraph>
                                        <ArSentence>
                                            دفتر<ContrastWord> طالبٍ </ContrastWord>
                                        </ArSentence>
                                        <RuSentence> Тетрадь (какого то) студента </RuSentence>
                                    </Paragraph>
                                    <Paragraph>
                                        <ArSentence>
                                            دفتر<ContrastWord> الطالبٍ </ContrastWord>
                                        </ArSentence>
                                        <RuSentence> Тетрадь (известного) студента </RuSentence>
                                    </Paragraph>
                                </SeveralSentence>
                                <h4>
                                    <ContrastWord>Всегда в родительном падеже</ContrastWord> и является владельцем (как
                                    бы владельцем) того, на что указывает первый член
                                </h4>
                            </Paper>
                            <AdditionalInfo>
                                <h4>Притяжательное местоимение является вторым членом идафы</h4>
                                <ArSentence>
                                    <Word root="بيت" suffix="ه" /> <Word root="بيت" suffix="ها" />{' '}
                                    <Word root="بيت" suffix="كم" />
                                </ArSentence>
                            </AdditionalInfo>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(JumlatuHaalPage)(ProfilePage)
