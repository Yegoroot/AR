export default {
  header: {
    color: 'transparent',
    brand: 'مِن الزّائِدَة', // название страницы
    isBrandAr: true, // крупный шрифт или мелий (для арабского текста нужен крупный)
    rightLinks: 'HeaderLinks', // какие ссылки меню показывать
    fixed: true,
    changeColorOnScroll: {
      height: 200,
      color: 'white'
    }
  },
  paralax: {
    small: true,
    filter: true,
    image: require('assets/img/mosque/mosque11.jpg')
  },
  description: '',
  content: `<p>
            Эта частица усиливает мысль в предложении, часто используется в Коране, одна из многих
            частиц показывающих описательную точность{' '}
            <ContrastWord inRu blue translate="Корана">
                القران
            </ContrastWord>
            , [ обычно такие нюансы опускают в переводах, а разве есть те кто считает перевод{' '}
            <ContrastWord inRu blue translate="Корана">
                القران
            </ContrastWord>{' '}
            Кораном ?]. Употребляется только если перед ней стоит отрицательная частица, запрет или
            частица вопроса
        </p>

        <h4 className={classes.title}>
            Расмотрим наглядно как{' '}
            <ContrastWord blue> с этой частицой закрывается дверь сомнений</ContrastWord>
        </h4>

        <ArSent translate={'Никто не пришел в школу'}>ما أتَى أحَدَ إِلى المدرسة</ArSent>
        <ArSent
            translate={
                <div>
                    <ContrastWord red>
                        Вообще никто [ни кошка, ни учителя, ни директор, ни пришельцев с соседней
                        галактики, ни кого]{' '}
                    </ContrastWord>{' '}
                    не были в школе
                </div>
            }>
            ما أتَى{' '}
            <ContrastWord inRu red>
                مِنْ
            </ContrastWord>{' '}
            أحَدٍ إِلى المدرسة
        </ArSent>
        <ArSent
            translate={
                <div>
                    У тебя есть <ContrastWord red> хоть какие нибудь</ContrastWord> вопросы?
                </div>
            }>
            هلْ{' '}
            <ContrastWord inRu red>
                مِنْ
            </ContrastWord>{' '}
            سُؤَلٍ
        </ArSent>

        <h4 className={classes.title}>
            Расмотрим пример из{' '}
            <ContrastWord inRu blue translate="Корана">
                القران
            </ContrastWord>{' '}
        </h4>
        <ArSent
            translate={
                <div>
                    Не падает{' '}
                    <ContrastWord red>
                        каким бы не был маленьким и незаметным, в любом месте и времени
                    </ContrastWord>{' '}
                    листочек без Его ведома
                </div>
            }>
            مَا تَسْقُطُ <ContrastWord red> مِن </ContrastWord>وَرَقَةٍ إِلاَّ يَعْلَمُهَا
        </ArSent>
        <ArSent
            translate={
                <div>
                    И нет{' '}
                    <ContrastWord red>ничего и некого подобного, [усиленное значени]</ContrastWord>{' '}
                    на земле и небесах ( слои атомосферы, галактики ) приятнее Аллаха
                </div>
            }>
            وَمَا <ContrastWord red> مِن </ContrastWord> دَابَّةٍ فِي الأَرْضِ إِلاَّ عَلَى اللّهِ
            رِزْقُهَا
        </ArSent>
    `
}
