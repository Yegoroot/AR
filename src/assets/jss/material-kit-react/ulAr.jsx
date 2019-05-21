const ulAr = {
  fontSize: 35,
  padding: 0,
  textAlign: 'right',
  listStyle: 'none',
  marginTop: 0,
  marginBottom: 0,
  '& > li': {
    lineHeight: 1.9,
    paddingBottom: 10,
    '& > *': {
      paddingLeft: 25
    }
  },
  '@media (max-width: 540px)': { fontSize: 27 }
}

export { ulAr }
