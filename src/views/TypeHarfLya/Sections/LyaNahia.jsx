import React from 'react'

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles'
// @material-ui/icons
import { Paper } from '@material-ui/core'
import ContrastWord from 'components/Typography/ContrastWord.jsx'
import ArSentence from 'components/Typography/ArSentence.jsx'
// import Word from 'components/word'
// core components
// import SnackbarContent from 'components/Snackbar/SnackbarContent.jsx'
import Clearfix from 'components/Clearfix/Clearfix.jsx'
import tricksWithVerbs from 'assets/jss/material-kit-react/views/tricksWithVerbs.jsx'
import { Link } from 'react-router-dom'

class LyaNahia extends React.Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.section} id="liWithVerbs">
                <div className={classes.container}>
                    <h2 className={classes.titleAr}>لا الناهية</h2>
                    <Paper>
                        <div className="wrap1">
                            <p>
                                Частица запрета, употребляется <ContrastWord red>только во втором лице</ContrastWord>.
                            </p>
                            <ArSentence translate="Умар, ни пей кофе!">
                                يا عمر <ContrastWord red> لا </ContrastWord> يشربْ القهوة
                            </ArSentence>
                            <ArSentence translate="Не учите французкий язык">
                                أنتم <ContrastWord red> لا </ContrastWord> تدرسوُا اللغة الفرنسية
                            </ArSentence>
                            <p>
                                Как вы заметели ن множественного числа пропала, потому что это одна из частиц{' '}
                                <Link to="/adwatuldjazm"> أدْوَات الجَزْم</Link>
                            </p>
                            <p>
                                لا Частица настоящего времени, кроме случая, если в одном предложениии два глагола
                                которые мы хоти отрицать. Действия прошедшего времени. Например:
                            </p>
                            <ArSentence translate="Не пил и не кушал">
                                <ContrastWord red> لا </ContrastWord> أكلتُ <ContrastWord red> و </ContrastWord>{' '}
                                <ContrastWord red> لا </ContrastWord> شربتُ
                            </ArSentence>
                        </div>
                    </Paper>
                </div>

                <Clearfix />
            </div>
        )
    }
}

export default withStyles(tricksWithVerbs)(LyaNahia)
