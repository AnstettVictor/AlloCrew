const logMiddleware = () => (next) => (action) => {

 
  return next(action)
}

export default logMiddleware