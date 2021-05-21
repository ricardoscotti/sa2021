import Estabelecimento from "../models/EstabelecimentoModel"

class EstabelecimentoController {
    
    async index(req, res){
      try{
        const estabelecimentos = await Estabelecimento.findAll({
          //include: [
            //{
              //model: Banda,
              //as: "bandaEvento",
              //attributes: ["nome_banda"]         
            //},
            //{
              //model: Estabelecimento,
              //as: "estabelecimentoEvento",
              //attributes: ["razao_social"] 
            //}
          //]
        });
        console.log(estabelecimentos)
        return res.json(estabelecimentos)
      }catch(error){
        console.error(error);
      }
      return res.json({mensagem: "Deu erro"})
    }
  }
  
  export default new EstabelecimentoController();