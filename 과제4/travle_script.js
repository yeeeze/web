const jejuImg = document.querySelector('#jeju .place')
const gyeongjuImg = document.querySelector('#gyeongju .place')
const busan = document.querySelector('#busan .place')

jejuImg.addEventListener('mouseover', () => {
    jejuImg.src = "media/성산2.jpg"
})

jejuImg.addEventListener('mouseout', () => {
    jejuImg.src = "media/성산일출봉.jpeg"
})

gyeongjuImg.addEventListener('mouseover', () => {
    gyeongjuImg.src = "media/동궁2.jpg"
})

gyeongjuImg.addEventListener('mouseout', () => {
    gyeongjuImg.src = "media/동궁과월지.jpeg"
})

busan.addEventListener('mouseover', () => {
    busan.src = "media/해동2.jpg"
})

busan.addEventListener('mouseout', () => {
    busan.src = "media/해동용궁사.jpeg"
})

const textarea = document.querySelector('textarea')
const textcount = document.querySelector('#textcount')

textarea.addEventListener('keyup', () => {
    const length = textarea.value.length
    textcount.textContent = `입력 글자 수 : ${length}`
})

const button = document.querySelector('#send')
button.addEventListener('click', () => {
    alert('전송되었습니다.')
    textarea.value=''
    textcount.style.visibility = 'hidden'
})