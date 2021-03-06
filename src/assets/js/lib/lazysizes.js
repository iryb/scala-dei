import 'lazysizes'
import 'lazysizes/plugins/bgset/ls.bgset'

// add simple support for background images:
document.addEventListener('lazybeforeunveil', function (e) {
  var bg = e.target.getAttribute('data-bg')
  if (bg) {
    e.target.style.backgroundImage = 'url(' + bg + ')'
  }
})
