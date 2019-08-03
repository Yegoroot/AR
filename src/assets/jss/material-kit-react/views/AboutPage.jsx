import { container, title } from 'assets/jss/material-kit-react.jsx'

const landingPageStyle = {
  container: {
    zIndex: '12',
    ...container,
    '@media (max-width: 520px)': {
      paddingRight: 25,
      paddingLeft: 25
    },
    '& a.link': {
      color: 'inherit',
      backgroundColor: 'rgba(187, 239, 253, 0.44)',
      borderBottom: '1px solid',
      paddingRight: 3,
      paddingLeft: 3,
      '&:hover': {
        backgroundColor: '#bbeffd'
      }
    }
  },
  section: {
    textAlign: 'center'
  },
  title: {
    ...title,
    display: 'inline-block',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    color: '#FFFFFF',
    textDecoration: 'none'
  },
  socialIcons: {
    fontSize: 60
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: '1.313rem',
    maxWidth: '500px',
    marginLeft: 'auto',
    '@media (max-width: 520px)': {
      fontSize: '1.013rem',
      margin: '10px auto 0'
    }
  },
  main: {
    paddingTop: 20,
    paddingBottom: 40,
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3'
  },
  mainRaised: {
    margin: '-60px 30px 0px',
    '@media (max-width: 520px)': {
      margin: '-60px 0px 0px'
    },
    borderRadius: '6px',
    boxShadow: '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  h2: {
    fontSize: 23,
    fontWeight: 500,
    marginTop: 0,
    marginBottom: 20
  },
  icon: {
    justifyContent: 'center',
    display: 'flex',
    fontSize: 70,
    marginBottom: 20
  },
  desc: {
    fontSize: 15,
    marginBottom: 15,
    lineHeight: 1.4
  }
}

export default landingPageStyle
