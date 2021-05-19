import Usuario from "../models/UsuarioModel"

class UsuarioController {

    async index(req, res){
        try{
          const usuarios = await Usuario.findOne({where: { login: req.params.login}});
          console.log(usuarios)
          return res.json(usuarios)
        }catch(error){
          console.error(error);
        }
    
        return res.json({mensagem: "Deu erro"})
      }

 
    }
         
 
  export default new UsuarioController();  