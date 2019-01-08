export default {
    id: -1,
    name: '--',
    words: [], //  рассекает, думает, соединяет-собирает, опрокидывает
    content: [
        {
            name: 'الماضى', // ПРОШЕДШЕЕ ВРЕМЯ
            faces: [
                {
                    name: 'first', // ВТОРОЕ ЛИЦО
                    words: [
                        {
                            prefix: '',
                            root: 'ذهبْ',
                            suffix: 'تُما',
                        },
                    ],
                },
                {
                    name: 'second', // ТРЕТЬЕ ЛИЦО
                    words: [
                        {
                            prefix: '',
                            root: 'ذهب',
                            suffix: 'ا',
                        },
                        {
                            prefix: '',
                            root: 'ذهبَ',
                            suffix: 'تَا',
                        },
                    ],
                },
            ],
        },
        {
            name: 'المضارع', // НАСТОЯЩЕЕ ВРЕМЯ
            faces: [
                {
                    name: 'second', // ВТОРОЕ ЛИЦО
                    words: [
                        {
                            prefix: 'تَ',
                            root: 'ذهبَ',
                            suffix: 'انِ',
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
