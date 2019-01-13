import React from 'react'
// nodejs library that concatenates classes
import classNames from 'classnames'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'

// core components
import Header from 'components/Header/Header.jsx'
import Footer from 'components/Footer/Footer.jsx'

// import Word from 'components/word'
// import AdditionalInfo from 'components/Typography/AdditionalInfo.jsx'
import ContrastWord from 'components/Typography/ContrastWord.jsx'
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
                    brand="لَدَى"
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
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(arabicPageStyle)(FialMabniLilmajhun)
