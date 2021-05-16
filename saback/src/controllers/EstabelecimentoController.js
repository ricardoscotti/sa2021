import Estabelecimento from "../models/EstabelecimentoModel"

class EstabelecimentoController {
    async store(req,res){    
    };
  
    async turma(req, res){
      const turmas = await Turma.findAll({
        where: {},
        attributes: ['IDTURMA', 'NOMETURMA'],
        include: [
          {
            model: Aluno,
            as: 'aluno',
            attributes: ['IDALUNO', 'NOME'],
          }
        ]
        });
  
        
      
  
      console.log(turmas)
      return res.json(turmas)
    }
  
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
  
    async update(req,res){      
    }
  
    async delete(req,res){
    }
  }
  
  export default new EstabelecimentoController();