import { container, title } from 'assets/jss/material-kit-react.jsx'

import tooltipsStyle from 'assets/jss/material-kit-react/tooltipsStyle.jsx'
import popoverStyles from 'assets/jss/material-kit-react/popoverStyles.jsx'

const javascriptStyles = {
  section: {
    padding: '70px 0 0',
  },
  container,
  title: {
    ...title,
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
  },
  icon: {
    width: '17px',
    height: '17px',
    marginRight: '4px',
  },

  ...tooltipsStyle,
  ...popoverStyles,
}

export default javascriptStyles
