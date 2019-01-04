import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    wrapper: {
        // '&:hover .suffix': {
        //     color: theme.palette.secondary.light
        // },
        ...theme.arabicFont,
        '& .suffix, .prefix': {
            color: '#f44336',
            // color: theme.palette.secondary.light,
        },
    },
    // rootWord: {

    // },
    // suffix: {

    // }
})

const checkHarf = char => {
    switch (char) {
        case 1571:
            return true // alif c хамзой
        case 1575:
            return true // alif без хамзы
        case 1583:
            return true // dal
        case 1584:
            return true // zal
        case 1585:
            return true // ra
        case 1586:
            return true // zay
        case 1608:
            return true // waw

        default:
            return false
    }
}

const word = ({ root, suffix, prefix, classes }) => {
    let zmj = `\u{200d}` // Zero Width Joiner	U+200D	&#8205;	&zwj;
    let pr, sf // ЕСЛИ ПЕРВЫЙ СИМВОЛ НЕ СОДЕРЖИТ أ то присвоить соеденитель_пустой_ширины
    if (prefix) {
        let sym = prefix.charCodeAt(0)
        pr = sym !== 1571 && sym !== 1575 ? zmj : ''
    } else pr = ''

    if (suffix) {
        //* ОБЪЯСНЕНИЕ НИЖЕ
        let sym = root.charCodeAt(root.length - 2)
        // sf = (sym >= 1583 && sym <= 1586) || sym === 1608 ? "" : zmj;
        sf = checkHarf(sym) ? '' : zmj
    } else {
        sf = ''
    }

    return (
        <div className={classes.wrapper}>
            {prefix ? <span className="prefix">{`${prefix}${pr}`}</span> : null}
            <span className="root">{`${pr}${root}${sf}`}</span>
            {suffix ? <span className="suffix">{`${sf}${suffix}`}</span> : null}
        </div>
    )
}

export default withStyles(styles)(word)

//** СНАЧАЛО МЫ ПРОВЕЕРИЛИ ЕСТЬ ЛИ СУФФИКС
/**
 * root.charCodeAt(root.length - 2); - ПОСЛЕДНЯЯ БУКВА - ПРЕДПОСЛЕДНИЙ СИМВОЛ (огласовка обязательна)
 * если он есть то проверяем корень
 * если последняя буква корня (не равняеться ДАЛЬ/ ЗАЛЬ/ РА/ ЗА/ ВАВ ) то ставим пробел нулевой ширины
 * root.charCodeAt(root.length - 2); - это грамотно сработает только если над последней буквой огласовки
 * потому что с программной точки зрения огласовка это символ
 */
