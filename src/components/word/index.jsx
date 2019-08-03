import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'

/**
 * https://ru.wikipedia.org/wiki/%D0%90%D1%80%D0%B0%D0%B1%D1%81%D0%BA%D0%BE%D0%B5_%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%BE_(%D0%B1%D0%BB%D0%BE%D0%BA_%D0%AE%D0%BD%D0%B8%D0%BA%D0%BE%D0%B4%D0%B0)
 */

const styles = theme => ({
  wrapper: {
    ...theme.arabicFont
  },
  color: {
    color: '#f44336'
  },
  color2: {
    color: '#009688'
  }
})

let arrHarfCodes = [
  1614, // fatha
  1615, // damma
  1616, // kasra
  1618 // sukkun
]

let arrCharCodes = [
  1570, // alif vasla
  1571, // alif c хамзой
  1575, // alif без хамзы
  1583, // dal
  1584, // zal
  1585, // ra
  1586, // zay
  1608 // waw
]

const word = ({ root, suffix, prefix, classes, negative, color2 }) => {
  let zmj = `\u{200d}` // Zero Width Joiner	U+200D	&#8205;	&zwj;
  let prefixZmj, suffixZmj

  /** prefix
   * __________________________________________________
   */
  if (prefix) {
    let lastChar // последний символ (без огласовки)
    let lastSym = prefix.charCodeAt(prefix.length - 1) // last sym // мы не знаем огласовка это или буква

    // если последний сивол огласовка то буква должна быть предпоследней
    if (arrHarfCodes.includes(lastSym)) {
      lastChar = prefix.charCodeAt(prefix.length - 2) // before last sym
    } else {
      lastChar = lastSym
    }

    // если символ не "соединительный" то не соединяем иначе соединяем символом пустой ширины
    prefixZmj = arrCharCodes.includes(lastChar) ? '' : zmj
  } else {
    prefixZmj = ''
  }

  /** suffix
   * __________________________________________________
   */
  if (suffix) {
    let lastChar
    let lastSym = root.charCodeAt(root.length - 1) // last sym

    // если последний сивол огласовка то буква должна быть предпоследней
    if (arrHarfCodes.includes(lastSym)) {
      lastChar = root.charCodeAt(root.length - 2) // before last sym
    } else {
      lastChar = lastSym
    }

    // глаголах с шаддой чтоб дотянуться до последней буквы нужно минус три (-1 символ огласока, -2 шадда, -3 сама буква)
    if (lastChar === 1617) {
      lastChar = root.charCodeAt(root.length - 3)
    }
    suffixZmj = arrCharCodes.includes(lastChar) ? '' : zmj
  } else {
    suffixZmj = ''
  }

  // выделение цветом
  const hightlightRoot = classNames({
    [classes.color]: negative,
    [classes.color2]: color2 && negative
  })
  const hightlightPerefer = classNames({
    [classes.color]: !negative,
    [classes.color2]: color2 && !negative
  })

  return (
    <span className={classes.wrapper}>
      {prefix ? <span className={hightlightPerefer}>{`${prefix}${prefixZmj}`}</span> : null}
      <span className={hightlightRoot}>{`${prefixZmj}${root}${suffixZmj}`}</span>
      {suffix ? <span className={hightlightPerefer}>{`${suffixZmj}${suffix}`}</span> : null}
    </span>
  )
}

export default withStyles(styles)(word)
