import { container } from 'assets/jss/material-kit-react.jsx'

import tooltipsStyle from 'assets/jss/material-kit-react/tooltipsStyle.jsx'

const simpleArticle = {
  container: {
    ...container,
    '@media (max-width: 520px)': {
      paddingRight: 25,
      paddingLeft: 25
    }
  },
  main: {
    paddingTop: 20,
    paddingBottom: 30,
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3'
  },
  navWrapper: {
    '& a': {
      color: 'inherit',
      backgroundColor: 'rgba(187, 239, 253, 0.14)',
      borderBottom: '1px solid',
      paddingRight: 3,
      paddingLeft: 3,
      '&:hover': {
        backgroundColor: '#bbeffd'
      }
    }
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    '@media (max-width: 520px)': {
      margin: '-60px 0px 0px'
    },
    borderRadius: '6px',
    boxShadow: '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  ...tooltipsStyle
}

export default simpleArticle
