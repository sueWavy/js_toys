;(function () {
  'use strict'

  let timerId

  const get = (target) => {
    return document.querySelector(target)
  }

  const throttle = (callback, time) => {
    if (timerId) return
    timerId = setTimeout(() => {
      callback()
      timerId = undefined
    }, time)
  }

  const $progresBar = get('.progress-bar')

  // 스크롤 길이 구하기
  const onScroll = () => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrollTop = document.documentElement.scrollTop

    const width = (scrollTop / height) * 100
    $progresBar.style.width = width + '%'
  }

  window.addEventListener('scroll', () => throttle(onScroll, 50))
})()
