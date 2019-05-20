import React from 'react'
// nodejs library to set properties for components
import PropTypes from 'prop-types'
// nodejs library that concatenates classes
import classNames from 'classnames'
import { List, ListItem, withStyles } from '@material-ui/core'
// import { Link } from "react-router-dom";
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
                Онлайн словарь
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="http://glagol.reverso.net" rel="noopener noreferrer" className={classes.block} target="_blank">
                Спрягать слова
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="https://vk.com/arabskiyazik" rel="noopener noreferrer" className={classes.block} target="_blank">
                По скайпу с носителем
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="mailto:dont.repeat.yourself.ram@gmail.com" rel="noopener noreferrer" className={classes.block} target="_blank">
                Обратная связь
              </a>
            </ListItem>
            {/* <ListItem className={classes.inlineBlock}>
                            <Link to="/login" className={classes.block}>
                                Login
                            </Link>
                        </ListItem>
                        <ListItem className={classes.inlineBlock}>
                            <Link to="/components" className={classes.block}>
                                For Develop
                            </Link>
                        </ListItem> */}
          </List>
        </div>
        {/* <div className={classes.right}>
          Создано с <Favorite className={classes.icon} /> для улучшения запомониания |{" "}
          С <Favorite className={classes.icon} /> {1900 + new Date().getYear()}
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
