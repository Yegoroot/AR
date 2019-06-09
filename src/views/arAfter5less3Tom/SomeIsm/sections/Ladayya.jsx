import React from 'react'
import PaperTense from 'components/paperTense'
const arr = [
  {
    name: 'الماضى', // ПРОШЕДШЕЕ ВРЕМЯ
    faces: [
      {
        name: 'first', // ПЕРВОЕ ЛИЦО
        words: [
          {
            prefix: '',
            root: 'لَدَيَّ',
            suffix: ''
          },
          {
            prefix: '', // приставка
            root: 'لَدَيْ', // корень
            suffix: 'نا' // суфикс
          }
        ]
      },
      {
        name: 'second', // ВТОРОЕ ЛИЦО
        words: [
          {
            prefix: '',
            root: 'لَدَيْ',
            suffix: 'كَ'
          },
          {
            prefix: '',
            root: 'لَدَيْ',
            suffix: 'كِ'
          },
          {
            prefix: '',
            root: 'لَدَيْ',
            suffix: 'كم'
          },
          {
            prefix: '',
            root: 'لَدَيْ',
            suffix: 'كنّ'
          }
        ]
      },
      {
        name: 'third', // ТРЕТЬЕ ЛИЦО
        words: [
          {
            prefix: '',
            root: 'لَدَيْ',
            suffix: 'هِ'
          },
          {
            prefix: '',
            root: 'لَدَيْ',
            suffix: 'ها'
          },
          {
            prefix: '',
            root: 'لَدَيْ',
            suffix: 'هِم'
          },
          {
            prefix: '',
            root: 'لَدَيْ',
            suffix: 'هِنّ'
          }
        ]
      }
    ]
  }
]
function Ladayya() {
  return (
    <>
      <h2 className="h2ar title">لَدَى</h2>

      <div className="desc">
        Приходит с тем же значением что и<span className="contrast desc__ar"> عِنْدَ </span>( <b>у, при; близ, около; во время; тогда;</b> и
        т.д)
      </div>
      <PaperTense data={arr} />
    </>
  )
}

export default Ladayya
