export default ({ to, from, next }) => {
  if (!localStorage.getItem('token')) {
    next("/login")
    return false
  } else {
      return true;
  }
  next()
}