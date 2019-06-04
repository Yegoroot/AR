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
  const { classes, whiteFont } = props
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
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
              <a href="http://dict.arabera.org/" rel="noopener noreferrer" className={classes.block} target="_blank">
                Словарь онлайн
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://glagol.reverso.net/%D1%81%D0%BF%D1%80%D1%8F%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B0%D1%80%D0%B0%D0%B1%D1%81%D0%BA%D0%B8%D0%B9.html"
                rel="noopener noreferrer"
                className={classes.block}
                target="_blank">
                Спрягать онлайн
              </a>
            </ListItem>
            &nbsp; | &nbsp;
            <ListItem className={classes.inlineBlock}>
              <Link className={classes.block} to="/about">
                Ресурсы
              </Link>
            </ListItem>
            &nbsp; |
            <ListItem className={classes.inlineBlock}>
              <a href="mailto:dont.repeat.yourself.ram@gmail.com" rel="noopener noreferrer" className={classes.block} target="_blank">
                Обратная связь с разработчиком
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
  whiteFont: PropTypes.bool
}

export default withStyles(footerStyle)(Footer)
