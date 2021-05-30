import Artista from "../models/ArtistaModel"
import Estabelecimento from "../models/EstabelecimentoModel"
import Banda from "../models/UsuarioModel"
import AvaliacaoArtista from "../models/AvaliacaoArtistaModel"

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
         raw: true,
         nest: true, 
        include: [
          {
            model: AvaliacaoArtista,
            required: false,
            as: "avaliacaoartista",
            attributes: ["avaliacao", "id_artista", "id_estabelecimento"]
          },
        ]
      });

      const newArray = artistas.map(item=>{
        return {
            id_artista: item.id_artista,
            avaliacaoartista: item.avaliacaoartista.avaliacao
            
        }
    })
    const ids = newArray.map(item=>item.id_artista).filter((item,index,array)=>{
        return array.indexOf(item) === index;
    }).map(id=>{
        return {id_artista: id, avaliacao: []}
    })
    ids.forEach(id=>{
        newArray.forEach(item=>{
            if (id.id_artista === item.id_artista) {
                id.avaliacao.push(item.avaliacaoartista)
               
            }
        })
    })
      return res.json(ids)
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