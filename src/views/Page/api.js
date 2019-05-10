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
    description: '',
    content:
        "<p> Эта частица усиливает мысль в предложении, часто используется в Коране, одна из многих частиц показывающих описательную точность{' '} <ContrastWord inRu blue translate='Корана'> القران </ContrastWord>, [ обычно такие нюансы опускают в переводах, а разве есть те кто считает перевод{' '} <ContrastWord inRu blue translate='Корана'> القران </ContrastWord>{' '}  Кораном ?]. Употребляется только если перед ней стоит отрицательная частица, запрет или частица вопроса</p>",
}
