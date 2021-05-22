import Artista from "../models/ArtistaModel"
import Estabelecimento from "../models/EstabelecimentoModel"
import Banda from "../models/UsuarioModel"

class ArtistaController {
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

  async all(req, res){
    try{
      const artistas = await Artista.findAll({
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
      console.log(artistas)
      return res.json(artistas)
    }catch(error){
      console.error(error);
    }

    return res.json({mensagem: "Deu erro"})
  }

  async unique(req,res){  
    const {id} = req.params
    const artista = await Artista.findOne({where: {id_artista: id}})
    return res.json(artista)

  }

  async delete(req,res){
  }
}

export default new ArtistaController();