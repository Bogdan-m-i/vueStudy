let interval

const getInterval = (el, color) => {
  let flag = true

  return setInterval(() => {
    el.style.color = flag ? '#fff' : color
    flag = !flag
  }, 1000)
}

export default {
  mounted(el, binding) {
    console.log(el)
    console.log(binding)

    el.style[binding.arg] = binding.value

    if (binding.modifiers.blink) {

      el.style.transition = 'color 1s'

      interval = getInterval(el, binding.value)

    }
  },
  updated(el, binding) {
    el.style[binding.arg] = binding.value

    if (interval) {
      console.log('interval clear', interval)
      clearInterval(interval)
    }

    if (binding.modifiers.blink) interval = getInterval(el, binding.value)

  },
  unmounted() {
    if (interval) clearInterval(interval)
  }
}
