const submit = document.querySelector('[type=submit]')
const name2 = document.querySelector('#name')
const tel = document.querySelector('[type=tel]')
const sex = document.querySelector('[name=sex]')
const birth = document.querySelector('[name=birth]')
const start = document.querySelector('[list=start]')
const finish = document.querySelector('[list=finish]')
const printdiv = document.querySelector('#print')

let keyCount = 0

submit.addEventListener('click', (event) => {
    event.preventDefault()
    printinfo()
})

const printinfo = () => {
    const item = document.createElement('div')
    const submit = document.createElement('input')
    const button = document.createElement('button')
    
    const key = keyCount
    keyCount+=1
    
    const options = sex.options
    const index = sex.options.selectedIndex
    const text = "입력하신 정보가 맞습니까?" + "<br><br>" +"이름 : " + name2.value + "<br>" + "전화번호 : " + tel.value + "<br>" + "성별 : " + `${options[index].textContent}` + "<br>" + "생년월일 : " + birth.value +
                 "<br>" + "출발지 : " + start.value + "<br>" + "도착지 : " + finish.value + "<br><br>"
    
    submit.type = 'submit'
    submit.value = '예약'
    item.innerHTML = text
    item.setAttribute('data-key', key)
    item.appendChild(button)
    item.appendChild(submit)
    printdiv.appendChild(item)

    button.textContent = '삭제'
    button.addEventListener('click', () => {
        removelist(key)
    })
}

const removelist = (key) => {
    const item = document.querySelector(`[data-key="${key}"]`)
    printdiv.removeChild(item)
}