import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

import { Paper /*Tooltip, Button */ } from '@material-ui/core'
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

class AbjectDegrees extends React.Component {
    render() {
        const { classes, ...rest } = this.props

        return (
            <div>
                <Header
                    color="transparent"
                    brand="Степени прилагательного"
                    // isBrandAr
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,

                        color: 'white',
                    }}
                    {...rest}
                />

                <Parallax small filter image={require('assets/img/mosque/mosque9.jpg')} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <div className={classes.navWrapper}>
                            <h1 className={classes.title}>Превосходная и сравнительная степень</h1>

                            <h2 className={classes.title}>
                                Сравнительная степень <ContrastWord> أفْعَل مِنْهُ</ContrastWord>
                            </h2>
                            <p>
                                АльМасдар это аргументы между людьми (была курица первой или яйцо) (глагол был или
                                масдар). Масдар существительное и потому принимает артикль, танвин, та марбуту и иногда
                                ставится во множественное число. Он не привязан ко времени, как например слово "любовь",
                                "надежда". Масдар это факт, утверждение
                            </p>
                            <h4>
                                Я <ContrastWord red>пойду (глагол)</ContrastWord> на море следующим летом
                                <br />
                                Интересно <ContrastWord red>ходить (масдар)</ContrastWord> на море
                            </h4>

                            <p>Проанализируйте следующие примеры</p>
                            <ArSentence
                                translate={
                                    <div>
                                        Хочу <ContrastWord red>пойти </ContrastWord> к ...
                                    </div>
                                }>
                                ... أريدٌ أن <ContrastWord red> أذْهبُ </ContrastWord> الي
                            </ArSentence>
                            <ArSentence
                                translate={
                                    <div>
                                        Хочу <ContrastWord red>ходить </ContrastWord> к ...
                                    </div>
                                }>
                                ... أريدٌ أن <ContrastWord red> الَّذهاب </ContrastWord> الي
                            </ArSentence>

                            <Paper>
                                <div className="wrap1">
                                    <p>Еще примеры с масдаром</p>
                                    <ArSentence
                                        translate={
                                            <div>
                                                Должен <ContrastWord red>обучаться</ContrastWord> ребенок плаванию
                                            </div>
                                        }>
                                        يَجِبُ <ContrastWord red> تَعلِيم </ContrastWord> الطّفل السِباحة
                                    </ArSentence>
                                    <ArSentence
                                        translate={
                                            <div>
                                                <ContrastWord red>Чтение </ContrastWord> книг полезно для ума
                                            </div>
                                        }>
                                        <ContrastWord red> قِرَاءَة </ContrastWord> الكُتُب مُفيدَة لِلعَقل
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

export default withStyles(arabicPageStyle)(AbjectDegrees)
