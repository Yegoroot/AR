import { container } from 'assets/jss/material-kit-react.jsx'

const componentsStyle = {
  container: {
    ...container,
    '&::before': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '#00000042',
      backgroundImage: 'linear-gradient(#ffffff1f, #00000061)'
    }
  },
  brand: {
    color: '#FFFFFF'
    //   textAlign: "left"
  },
  title: {
    fontSize: '8rem',
    fontWeight: '600',
    display: 'inline-block',
    position: 'relative',
    '@media (max-width: 760px)': {
      fontSize: '6rem'
    }
  },
  subTitle: {
    position: 'relative',
    fontWeight: 400,
    marginLeft: 'auto',
    maxWidth: 740,
    lineHeight: 1.1
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3'
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    '@media (max-width: 520px)': {
      margin: '-60px 10px 0px'
    },
    borderRadius: '6px',
    boxShadow: '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  link: {
    textDecoration: 'none'
  },
  textCenter: {
    textAlign: 'center'
  }
}

export default componentsStyle
