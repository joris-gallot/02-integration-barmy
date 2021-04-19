const slides = document.getElementById('slider').children

let activeIndex = 0
setClasses()

document.getElementById('go-to-next').addEventListener('click', () => {
  if (activeIndex === slides.length - 1) {
    activeIndex = 0
  } else {
    activeIndex++
  }

  setClasses()
})

document.getElementById('go-to-previous').addEventListener('click', () => {
  if (activeIndex === 0) {
    activeIndex = slides.length - 1
  } else {
    activeIndex--
  }
  setClasses()
})

function setClasses() {
  cleanClasses(slides[activeIndex])
  slides[activeIndex].classList.add('item-active')

  Array.from(slides).slice(0, activeIndex > 0 ? activeIndex : 0).forEach(
    el => {
      cleanClasses(el)
      el.classList.add('item-after')
    }
  )

  Array.from(slides).slice(activeIndex < slides.length ? activeIndex + 1 : slides.length, slides.length).forEach(
    el => {
      cleanClasses(el)
      console.log(el)
      el.classList.add('item-before')
    }
  )
}

function cleanClasses(el) {
  el.classList.remove('item-before')
  el.classList.remove('item-after')
  el.classList.remove('item-active')
}