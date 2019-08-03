export default {
    id: -1,
    name: 'مَدَّ - يَمُدُّ',
    words: ['ظنّ', 'شقّ', 'ضم', 'كب'], //  рассекает, думает, соединяет-собирает, опрокидывает
    content: [
        {
            name: 'الماضى', // ПРОШЕДШЕЕ ВРЕМЯ
            faces: [
                {
                    name: 'first', // ПЕРВОЕ ЛИЦО
                    words: [
                        {
                            prefix: '',
                            root: 'مَدَدْ',
                            suffix: 'تُ',
                        },
                        {
                            prefix: '', // приставка
                            root: 'مَدَدْ', // корень
                            suffix: 'نا', // суфикс
                        },
                    ],
                },
                {
                    name: 'second', // ВТОРОЕ ЛИЦО
                    words: [
                        {
                            prefix: '',
                            root: 'مَدَدْ',
                            suffix: 'تَ',
                        },
                        {
                            prefix: '',
                            root: 'مَدَدْ',
                            suffix: 'تِ',
                        },
                        {
                            prefix: '',
                            root: 'مَدَدْ',
                            suffix: 'تم',
                        },
                        {
                            prefix: '',
                            root: 'مَدَدْ',
                            suffix: 'تنّ',
                        },
                    ],
                },
                {
                    name: 'third', // ТРЕТЬЕ ЛИЦО
                    words: [
                        {
                            prefix: '',
                            root: 'مَدَّ',
                            suffix: '',
                        },
                        {
                            prefix: '',
                            root: 'مَدَّ',
                            suffix: 'تْ',
                        },
                        {
                            prefix: '',
                            root: 'مَدَّ',
                            suffix: 'وا',
                        },
                        {
                            prefix: '',
                            root: 'مَدَدْ',
                            suffix: 'نَ',
                        },
                    ],
                },
            ],
        },
        {
            name: 'المضارع', // НАСТОЯЩЕЕ ВРЕМЯ
            faces: [
                {
                    name: 'first', // ПЕРВОЕ ЛИЦО
                    words: [
                        {
                            prefix: 'أَ',
                            root: 'مُدُّ',
                            suffix: '',
                        },
                        {
                            prefix: 'نَ',
                            root: 'مُدُّ',
                            suffix: '',
                        },
                    ],
                },
                {
                    name: 'second', // ВТОРОЕ ЛИЦО
                    words: [
                        {
                            prefix: 'تَ',
                            root: 'مُدُّ',
                            suffix: '',
                        },
                        {
                            prefix: 'تَ',
                            root: 'مُدِّ',
                            suffix: 'ينَ',
                        },
                        {
                            prefix: 'تَ',
                            root: 'مُدُّ',
                            suffix: 'ونَ',
                        },
                        {
                            prefix: 'تَ',
                            root: 'مْدُدْ',
                            suffix: 'نَ',
                        },
                    ],
                },
                {
                    name: 'third', // ТРЕТЬЕ ЛИЦО
                    words: [
                        {
                            prefix: 'ي',
                            root: 'مُدُّ',
                            suffix: '',
                        },
                        {
                            prefix: 'تَ',
                            root: 'مُدُّ',
                            suffix: '',
                        },
                        {
                            prefix: 'ي',
                            root: 'مُدُّ',
                            suffix: 'ون',
                        },
                        {
                            prefix: 'ي',
                            root: 'مْدُدْ',
                            suffix: 'نَ',
                        },
                    ],
                },
            ],
        },
        {
            name: 'الأمر', // ПРИКАЗ
            faces: [
                {
                    name: 'second', // ВТОРОЕ ЛИЦО
                    words: [
                        {
                            prefix: '',
                            root: 'مُدَّ',
                            suffix: '',
                        },
                        {
                            prefix: '',
                            root: 'مُدِّ',
                            suffix: '',
                        },
                        {
                            prefix: '',
                            root: 'مُدُّ',
                            suffix: 'وا',
                        },
                        {
                            prefix: 'اُ',
                            root: 'مْدُدْ',
                            suffix: 'نَ',
                        },
                    ],
                },
            ],
        },
    ],
}
