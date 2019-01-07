import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Word from 'components/word'

const styles = theme => ({
    arParagraph: {
        marginRight: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
        padding: theme.spacing.unit * 2,
        fontSize: 40,
        '& h4': {
            marginBottom: 30,
            fontSize: 40,
            '@media (max-width: 540px)': {
                fontSize: 30,
            },
            textAlign: 'right',
        },
        '@media (max-width: 540px)': {
            marginRight: 0,
            fontSize: 27,
            width: '100%',
        },
        // ...theme.arabicFont,
    },
    ulAr: {
        paddingRight: 0,
        '& > li': {
            display: 'flex',
            '& > *': {
                '@media (min-width: 540px)': {
                    paddingLeft: 25,
                },
            },
        },
        lineHeight: 2,
    },
})

const PaperTense = ({ data, classes }) =>
    data.map(tense => (
        <Paper elevation={4} key={tense.name} className={classes.arParagraph}>
            <h4 dir="rtl" lang="ar">
                {tense.name}
            </h4>
            <ul className={classes.ulAr}>
                {tense.faces.map(face => (
                    <li dir="rtl" lang="ar" key={face.name}>
                        {face.words.map((word, index) => (
                            <Word prefix={word.prefix} root={word.root} suffix={word.suffix} key={index} />
                        ))}
                    </li>
                ))}
            </ul>
        </Paper>
    ))

export default withStyles(styles)(PaperTense)
