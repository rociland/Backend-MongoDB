 const loginService = require('../services/login.service')
  
  const loginUser = async (req, res) => {
    try {
      const user = await loginService.login(req.body.usuario, req.body.contrasenia)
      res.status(200).send(user)

    } catch (error) {
      res.status(401).send(error.message)
    }
  }


module.exports = { loginUser };