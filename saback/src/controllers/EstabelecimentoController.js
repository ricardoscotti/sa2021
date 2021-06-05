import Estabelecimento from "../models/EstabelecimentoModel"
import AvaliacaoEstabelecimento from "../models/AvaliacaoEstabelecimentoModel"

// class EstabelecimentoController {
    
    // async all(req, res){
    //   try{
    //     const estabelecimentos = await Estabelecimento.findAll({
     
    //     });
    //     console.log(estabelecimentos)
    //     return res.json(estabelecimentos)
    //   }catch(error){
    //     console.error(error);
    //   }
    //   return res.json({mensagem: "Deu erro"})
    // }

    class EstabelecimentoController {
  
      async all(req, res){
        try{
          const estabelecimentos = await Estabelecimento.findAll({ 
             raw: true,
             nest: true, 
            include: [
              {
                model: AvaliacaoEstabelecimento,
                required: false,
                as: "avaliacaoestabelecimento",
                attributes: ["avaliacao", "id_artista", "id_estabelecimento"]
              },
            ]
          });
    
          const newArray = estabelecimentos.map(item=>{
            return {
                id_estabelecimento: item.id_estabelecimento,
                avaliacaoestabelecimento: item.avaliacaoestabelecimento.avaliacao
                
            }
        })
        const ids = newArray.map(item=>item.id_estabelecimento).filter((item,index,array)=>{
            return array.indexOf(item) === index;
        }).map(id=>{
            return {id_estabelecimento: id, avaliacao: []}
        })
        ids.forEach(id=>{
            newArray.forEach(item=>{
                if (id.id_estabelecimento === item.id_estabelecimento) {
                    id.avaliacao.push(item.avaliacaoestabelecimento)
                   
                }
            })
        })
        ids.forEach(item=>{
          estabelecimentos.forEach(estabelecimento=>{
            if(item.id_estabelecimento === estabelecimento.id_estabelecimento) {
              item.nome = estabelecimento.nome
              //item.estilo = artista.estilo
              item.telefone_ddd = estabelecimento.nome
              item.telefone_numero = estabelecimento.nome
              item.rua = estabelecimento.nome
              item.numero = estabelecimento.numero
              item.bairro = estabelecimento.bairro
              item.cidade = estabelecimento.cidadee
              item.estado = estabelecimento.estado
              item.cep = estabelecimento.cep
              item.lat = estabelecimento.lat
              item.longi = estabelecimento.longi
              item.complemento = estabelecimento.complemento
            }
          })
        })
          return res.json(ids)
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