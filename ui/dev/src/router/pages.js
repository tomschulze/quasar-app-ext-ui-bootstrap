/*
 * Export files list for /pages folder
 */

function kebabCase (str) {
  const result = str.replace(
    /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g,
    match => '-' + match.toLowerCase()
  )
  return (str[0] === str[0].toUpperCase())
    ? result.substring(1)
    : result
}

function slugify (str) {
  return encodeURIComponent(String(str).trim().replace(/\s+/g, '-'))
}

const pages = Object.keys(import.meta.glob('../pages/*.vue'))
  .map(page => page.slice(2).replace('.vue', ''))
  .filter(page => page !== '/pages/IndexPage' && page !== '/pages/ErrorPage')
  .map(page => ({
    file: page.slice(1),
    slug: slugify(kebabCase(page)),
    title: page,
    path: page + '.vue',
  }))

export default pages