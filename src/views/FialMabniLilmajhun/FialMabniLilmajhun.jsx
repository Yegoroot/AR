import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

import Word from 'components/word'
// import AdditionalInfo from 'components/Typography/AdditionalInfo.jsx'
import ContrastWord from 'components/Typography/ContrastWord.jsx'
import Warning from 'components/Typography/Warning.jsx'
import ArSent from 'components/Typography/ArSent.jsx'

// import Paragraph from 'components/Typography/Paragraph.jsx'
import HeaderLinks from 'components/Header/HeaderLinks.jsx'

import Parallax from 'components/Parallax/Parallax.jsx'

// import Word from 'components/word'

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class FialMabniLilmajhun extends React.Component {
    render() {
        const { classes, ...rest } = this.props

        return (
            <div>
                <Header
                    color="transparent"
                    brand="الفِعْل المَبْنِي لِلمَجْهُول"
                    isBrandAr
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,

                        color: 'white',
                    }}
                    {...rest}
                />

                <Parallax small filter image={require('assets/img/mosque/mosque14.jpg')} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <div className={classes.navWrapper}>
                            <h1 className={classes.titleAr}>الفِعْل المَبْنِي لِلمَجْهُول</h1>
                            <p>
                                Глагол страдательного залога, это действие с необозначенным лицом, бывает два варианта,
                                лицо неизвестно вовсе, или из контекста понятно кто совершил
                                <p>Пассивный залог обычно встречается в новостях</p>
                            </p>
                            <h3 className={classes.titleAr}>Пример активного залога (الفِعْل المَبْنِي لِلمَعْلُم)</h3>
                            <p>
                                В этом случае есть фокус на деятеле, деятель Хамид, обратите внимание на огласовку
                                прямого дополнения (مفعول به)
                            </p>
                            <ArSent translate={'Хамид есть хлеб'}>
                                <ContrastWord blue inAr translate="فعل (глагол)">
                                    أَكَلَ
                                </ContrastWord>{' '}
                                <ContrastWord blue inAr translate="فاعل (деятель)">
                                    حَامِد
                                </ContrastWord>{' '}
                                <ContrastWord blue inAr translate="مفعول به (прямое дополнение)">
                                    الجُبْزَ
                                </ContrastWord>
                            </ArSent>
                            <h3 className={classes.titleAr}>
                                Пример пассивного залога (الفِعْل المَبْنِي لِلمَجْهُول)
                            </h3>
                            <p>
                                В случае с пассивным залогом деятель неивестен (или известен из контекста), фокус на
                                результате.
                            </p>
                            <ArSent translate={'[Собака была побита, побили собаку]'}>
                                <ContrastWord blue inAr translate="فعل (глагол)">
                                    ضُرِبَ
                                </ContrastWord>{' '}
                                <ContrastWord blue inAr translate="نَائِبُ الفاعِل (с огласовкой дамма)">
                                    الكلبُ
                                </ContrastWord>
                            </ArSent>
                            <ArSent translate={<div>[Двери открыли] </div>}>
                                <ContrastWord blue inAr translate="فعل (глагол)">
                                    <Word root="َفُتِح" suffix="تْ" />
                                </ContrastWord>{' '}
                                <ContrastWord blue inAr translate="نَائِبُ الفاعِل (с огласовкой дамма)">
                                    <Word root="النّافِذَ" suffix="ةُ" />
                                </ContrastWord>
                            </ArSent>
                            <p>
                                Подразумеваемое прямое дополнения مفعول به ("окна" мн.ч неразумное) повлиял на глагол
                                (глагол стал женского рода). Ведь из правил мы знаем что с точки зрения грамматики
                                множественное число нерахумное расцениваеся как единственное число женского рода
                            </p>

                            <p>
                                {' '}
                                <Warning>
                                    Чтоб образовать пассивный залог, необходимо первую огласовку поставить в дамму,
                                    предпоследюю в кясру
                                </Warning>
                            </p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(arabicPageStyle)(FialMabniLilmajhun)
