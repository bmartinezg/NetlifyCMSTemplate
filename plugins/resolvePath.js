import Vue from 'vue'

export default () => {
  Vue.filter('resolvePath', (value) => {
    if (!value) return ''
    
    const path = value.split('/')
    return `images/${path[path.length - 1]}`
    // return `/images/png-negro.png`
  })
}