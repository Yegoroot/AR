## Материалы взяты с сайта

[http://mahalla1.ru/teaching-islam/islam-in-our-lives-teaching-islam/prekrasnejshie-imena-allaxa.php](http://mahalla1.ru/teaching-islam/islam-in-our-lives-teaching-islam/prekrasnejshie-imena-allaxa.php)

## вот этим скриптом

```js
var trList = jQuery('table tbody tr')
var ARR = []

trList.map(item => {
  let tr = trList[item]

  let CHILD = {}

  let tdList = jQuery(tr).find('td')

  tdList.map(tdIndex => {
    let td = tdList[tdIndex]

    let content = jQuery(td)
      .find('span')
      .html()
      .replace('&nbsp;', '')

    switch (tdIndex) {
      case 0:
        CHILD.id = content
        break
      case 1:
        CHILD.name = content
        break
      case 2:
        CHILD.transliteration = content
        break
      case 3:
        CHILD.translate = content
        break
      case 4:
        CHILD.mention = content
        break
      case 5:
        CHILD.desc = content
        break
    }
  })
  console.log(CHILD)
  ARR.push(CHILD)
})
```
