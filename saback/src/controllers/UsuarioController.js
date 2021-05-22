import Usuario from "../models/UsuarioModel"
import jwt from 'jsonwebtoken'
class UsuarioController {

    async index(req, res){
        try{
          const {login, senha} = req.body
          const usuario = await Usuario.findOne({where: { login,senha}});
          return res.json({
            id_usuario: usuario.id_usuario,
            login: login,
            id_artista: usuario.id_artista,
            id_estabelecimento: usuario.id_estabelecimento,
            token: jwt.sign({login, id_usuario: usuario.id_usuario}, 'sa')
          })
        }catch(error){
          console.error(error);
        }
    
        return res.json({mensagem: "Usuário ou senha inválidos."})
      }

 
    }
         
 
  export default new UsuarioController();  