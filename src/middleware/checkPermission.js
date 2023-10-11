export default ({ to, from, next }) => {
    if (to.name) {
      next("/access-denied")
      return false
    }
    next()
  }