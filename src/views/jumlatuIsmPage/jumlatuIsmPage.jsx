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

import soglasOprImg1 from 'assets/img/content/soglasOpr/soglasOpr1.png'
import soglasOprImg2 from 'assets/img/content/soglasOpr/soglasOpr2.png'
import soglasOprImg3 from 'assets/img/content/soglasOpr/soglasOpr3.png'

class SoglasovOpr extends React.Component {
    render() {
        const { classes, ...rest } = this.props

        return (
            <div>
                <Header
                    color="transparent"
                    brand="الجملةُ الاِسمِيَّةُ"
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
                            <h1 className={classes.titleAr}>Именное предложение</h1>

                            <h3>
                                Именное предложение – это предложение, которое начинается с имени. Например: الطَّالِبُ
                                مُجْتَهِدٌ Студент прилежен Подлежащее именного предложения (المُبْتَدَأُ) ставится, как
                                правило, в определённом состоянии, а сказуемое (الخَبَرُ) - в неопределённом.
                            </h3>

                            <p>
                                Если сказуемое именного предложения является именем, то оно согласуется с подлежащим в
                                числе и роде:
                            </p>

                            <div className="BL1">
                                <div className="SS1">
                                    <ArSentence>التّلميذُ نشيط</ArSentence>
                                    <RuSentence>Ученик активен</RuSentence>
                                </div>
                                <div className="SS1">
                                    <ArSentence>التّلميذةُ نشيطة</ArSentence>
                                    <RuSentence>Ученица активна</RuSentence>
                                </div>
                                <div className="SS1">
                                    <ArSentence>التِّلميذَان نشيطانِ</ArSentence>
                                    <RuSentence>Два ученика активны</RuSentence>
                                </div>
                                <div className="SS1">
                                    <ArSentence>التّلميذتانِ نشيطتانِ </ArSentence>
                                    <RuSentence>Две ученицы активны</RuSentence>
                                </div>
                                <div className="SS1">
                                    <ArSentence>التَّلاميذُ نِشَاط </ArSentence>
                                    <RuSentence>Ученики активны</RuSentence>
                                </div>
                                <div className="SS1">
                                    <ArSentence>التلميذَات نشِيطَات </ArSentence>
                                    <RuSentence>Ученицы активны</RuSentence>
                                </div>
                            </div>
                            <p>
                                В именных предложениях, приведенных выше, сказуемым являлось имя, но часто сказуемое
                                выражается также
                            </p>
                            <div className="BL1">
                                <h4 className={classes.title}>1) глаголом:</h4>
                                <div className="SS1">
                                    <ArSentence>زيدٌ فتح الباب</ArSentence>
                                    <RuSentence>Зейд открыл дверь</RuSentence>
                                </div>
                            </div>

                            <div className="BL1">
                                <h4 className={classes.title}>2) изафетным сочетанием обстоятельства и имени:</h4>
                                <div className="SS1">
                                    <ArSentence>السّيّارةُ أَمامَ البيتِ</ArSentence>
                                    <RuSentence>Машина перед домом</RuSentence>
                                </div>
                            </div>

                            <div className="BL1">
                                <h4 className={classes.title}>3) сочетанием предлога родительного падежа и имени:</h4>
                                <div className="SS1">
                                    <ArSentence>التّلميذُ فى المدرسةِ</ArSentence>
                                    <RuSentence>Ученик в школе</RuSentence>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(arabicPageStyle)(SoglasovOpr)
