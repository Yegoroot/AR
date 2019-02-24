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

import arabicPageStyle from 'assets/jss/material-kit-react/views/arabicPage.jsx'

class IsmaMaful extends React.Component {
    render() {
        const { classes, ...rest } = this.props

        return (
            <div>
                <Header
                    color="transparent"
                    brand="اسم المَفْول"
                    isBrandAr
                    rightLinks={<HeaderLinks />}
                    fixed
                    changeColorOnScroll={{
                        height: 200,

                        color: 'white',
                    }}
                    {...rest}
                />

                <Parallax small filter image={require('assets/img/mosque/mosque19.jpg')} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        <div className={classes.navWrapper}>
                            <h1 className={classes.titleAr}>اسم المَفْول</h1>

                            <p>
                                Лицо или предметы на которых падает действие <br /> Например
                            </p>

                            <ArSent>
                                {' '}
                                كَتَبَ -<ContrastWord red> مَكْتُوب </ContrastWord>
                            </ArSent>

                            <p>
                                <ContrastWord inRu> مَكْتُوب </ContrastWord> - это предмет на которое падает действие{' '}
                                <ContrastWord inRu> كَتَبَ </ContrastWord>, то есть это письмо, запись, это то что
                                написано
                            </p>

                            <ArSent translate="Побитый">
                                <ContrastWord red> المَضْرُوب </ContrastWord> (ضَرَبَ)
                            </ArSent>
                            <ArSent translate="Убитый">
                                <ContrastWord red> المقْتُول </ContrastWord> (قتل)
                            </ArSent>
                            <ArSent translate="Неизвестный">
                                <ContrastWord red> المجْهول </ContrastWord> (جهل)
                            </ArSent>

                            <ArSent translate="Известный">
                                <ContrastWord red> المعلوم </ContrastWord> (علم)
                            </ArSent>
                            <ArSent translate="Украденный">
                                <ContrastWord red> المسروق </ContrastWord> (سرق)
                            </ArSent>
                            <ArSent translate="Открытый">
                                <ContrastWord red> المفتُوح </ContrastWord> (فتح)
                            </ArSent>
                            <ArSent translate="Понятно, понятый">
                                <ContrastWord red> المَفْهُول </ContrastWord> (فهِم)
                            </ArSent>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withStyles(arabicPageStyle)(IsmaMaful)
