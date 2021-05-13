export default el => {
  console.log('1')
  document.getElementById('search-toggle').addEventListener('click', function () {
    document.querySelector('body').classList.add('search-open')
  })

  document.getElementById('page-content').addEventListener('click', function () {
    if (document.querySelector('body.search-open')) {
      document.querySelector('body').classList.remove('search-open')
    }
  })

  document.getElementById('mobile-menu-toggle').addEventListener('click', toggleMenu)

  function toggleMenu () {
    var header = document.querySelector('.header')
    if (header.classList.contains('mobile-menu-opened')) {
      header.classList.remove('mobile-menu-opened')
    } else {
      header.classList.add('mobile-menu-opened')
    }
  }
}
