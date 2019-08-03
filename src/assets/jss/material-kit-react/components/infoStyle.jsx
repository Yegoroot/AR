import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  title
} from 'assets/jss/material-kit-react.jsx'

const infoStyle = {
  infoArea: {
    maxWidth: '360px',
    margin: '0 auto',
    padding: '0px',
    marginBottom: 30
  },
  iconWrapper: {
    float: 'left',
    marginTop: '24px',
    marginRight: '10px'
  },
  primary: {
    color: primaryColor
  },
  warning: {
    color: warningColor
  },
  danger: {
    color: dangerColor
  },
  success: {
    color: successColor
  },
  info: {
    color: infoColor
  },
  rose: {
    color: roseColor
  },
  gray: {
    color: grayColor
  },
  icon: {
    width: '36px',
    height: '36px'
  },
  descriptionWrapper: {
    color: grayColor,
    overflow: 'hidden',
    '& a': {
      fontSize: 16
    }
  },
  title: {
    title,
    fontSize: 23,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 500
  },
  description: {
    color: grayColor,
    overflow: 'hidden',
    marginTop: '0px',
    marginBottom: '10px',
    fontSize: '16px'
  },
  link: {
    fontSize: 16
  },
  iconWrapperVertical: {
    float: 'none'
  },
  iconVertical: {
    width: '61px',
    height: '61px'
  }
}

export default infoStyle
