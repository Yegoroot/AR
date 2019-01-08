const ulAr = {
    fontSize: 35,
    padding: 0,
    textAlign: 'right',
    listStyle: 'none',
    lineHeight: 1.5,
    '& > li': {
        '& > *': {
            paddingLeft: 25,
        },
    },
    '@media (max-width: 540px)': { fontSize: 27 },
}

export { ulAr }
