const loginRepository = require('../data/login')

module.exports = {
  
    login: async (usuario, contrasenia) => {
        const user = await loginRepository.findByCredentials(usuario, contrasenia)
    return  user
  }

}
