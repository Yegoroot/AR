import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'
import { List, ListItem, withStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
// @material-ui/icons
// import Favorite from '@material-ui/icons/Favorite'

import footerStyle from 'assets/jss/material-kit-react/components/footerStyle.jsx'

function Footer({ ...props }) {
  const { classes, whiteFont, footerBlackFont } = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont,
    [classes.footerBlackFont]: footerBlackFont,
  })
  //   const aClasses = classNames({
  //     [classes.a]: true,
  //     [classes.footerWhiteFont]: whiteFont
  //   });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://dict.arabera.org/"
                rel="noopener noreferrer"
                className={classes.block}
                target="_blank"
              >
                <span role="img" aria-label="finger">
                  👉
                </span>
                Словарь онлайн
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://glagol.reverso.net/%D1%81%D0%BF%D1%80%D1%8F%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B0%D1%80%D0%B0%D0%B1%D1%81%D0%BA%D0%B8%D0%B9.html"
                rel="noopener noreferrer"
                className={classes.block}
                target="_blank"
              >
                <span role="img" aria-label="fire">
                  🔥
                </span>
                Спрягать онлайн
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link className={classes.block} to="/about">
                {/* <span style={{ color: 'initial' }}>&nbsp; |&nbsp; </span> */}
                <span role="img" aria-label="roket">
                  🚀
                </span>
                Ресурсы
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Link className={classes.block} to="/contacts">
                {/* <span style={{ color: 'initial' }}>&nbsp; |&nbsp; </span> */}
                <span role="img" aria-label="send with love">
                  🤝
                </span>
                Контакты
              </Link>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a className={classes.block} href="https://arabic.best">
                <span role="img" aria-label="send with love">
                  🚀
                </span>
                Новый проект Arabic.best
              </a>
            </ListItem>
          </List>
        </div>
        {/* <div className={classes.right}>
          Создано с <Favorite className={classes.icon} /> для улучшения запомониания | С <Favorite className={classes.icon} />
          {1900 + new Date().getYear()}
        </div> */}
      </div>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool,
  onePage: PropTypes.bool,
}

export default withStyles(footerStyle)(Footer)
