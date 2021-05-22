import Estabelecimento from "../models/EstabelecimentoModel"

class EstabelecimentoController {
    
    async all(req, res){
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
    async unique (req, res) {
      try{
        const {id} = req.params
        const estabelecimento = await Estabelecimento.findOne({where: {id_estabelecimento: id}})
        res.json(estabelecimento)
      }catch(e){

      }
    }

  }
  
  export default new EstabelecimentoController();