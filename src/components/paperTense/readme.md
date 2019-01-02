# принимает данные вида:

```js
[
    {
        name: "الماضى", // ПРОШЕДШЕЕ ВРЕМЯ
        faces: [
            {
                name: "first", // ПЕРВОЕ ЛИЦО
                words: [
                    {
                        prefix: "",
                        root: "وَعَدْ",
                        suffix: "تُ",
                    },
                    {
                        prefix: "", // приставка
                        root: "وَعَدْ", // корень
                        suffix: "نَا", // суфикс
                    },
                ],
            },
            {
                name: "second", // ВТОРОЕ ЛИЦО
                words: [
                    {
                        prefix: "",
                        root: "وَعَدْ",
                        suffix: "تَ",
                    },
                    {
                        prefix: "",
                        root: "وَعَدْ",
                        suffix: "تِ",
                    },
                    {
                        prefix: "",
                        root: "وَعَدْ",
                        suffix: "تُمْ",
                    },
                    {
                        prefix: "",
                        root: "وَعَدْ",
                        suffix: "تُنَّ",
                    },
                ],
            },
            {
                name: "third", // ТРЕТЬЕ ЛИЦО
                words: [
                    {
                        prefix: "",
                        root: "وَعَدَ",
                        suffix: "",
                    },
                    {
                        prefix: "",
                        root: "وَعَدَ",
                        suffix: "تْ",
                    },
                    {
                        suffix: "تُمْ",
                        root: "وَعَدْ",
                        prefix: "",
                    },
                    {
                        prefix: "",
                        suffix: "تُنَّ",
                        root: "وَعَدْ",
                    },
                ],
            },
        ],
    },
    ...
]
```
