export default {
    header: {
        color: 'transparent',
        brand: 'مِن الزّائِدَة', // название страницы
        isBrandAr: true, // крупный шрифт или мелий (для арабского текста нужен крупный)
        rightLinks: 'HeaderLinks', // какие ссылки меню показывать
        fixed: true,
        changeColorOnScroll: {
            height: 200,
            color: 'white',
        },
    },
    paralax: {
        small: true,
        filter: true,
        image: require('assets/img/mosque/mosque21.jpg'),
    },
    content: {},
}
