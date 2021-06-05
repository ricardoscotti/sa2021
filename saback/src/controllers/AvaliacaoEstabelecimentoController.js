import AvaliacaoEstabelecimento from "../models/AvaliacaoEstabelecimentoModel"

class AvaliacaoEstabelecimentoController {

    
    async updatelike(req, res){

        const { avaliacao, id_artista, id_estabelecimento } = req.body; 
        try{
          console.log("ENTROU NO TRY")   
            const verificalike = await AvaliacaoEstabelecimento.findOne({where: {
                        id_artista: id_artista,
                        id_estabelecimento: id_estabelecimento
                        
                    }}
                    );
                    console.log(verificalike)
                    
            if (verificalike){
                
                const verificalike = AvaliacaoEstabelecimento.update({
                    avaliacao: avaliacao,
                    id_artista: id_artista,
                    id_estabelecimento: id_estabelecimento
    
                },{
                    where: {
                        id_artista: id_artista,
                        id_estabelecimento: id_estabelecimento
                    }
                });
                console.log("UPDATEEEE")
            }else{
                console.log("CREATEEEEE")
                const crialike = AvaliacaoEstabelecimento.create({
                    avaliacao: avaliacao,
                    id_artista: id_artista,
                    id_estabelecimento: id_estabelecimento
                });
                console.log("GRAVOUUU")
            }
    
        }catch(error){
            console.error(error);
        }
    
        return res.json({mensagem: "Não se sabe se deu certo ou errado"})
    }

    async index(req, res){
        try{
          const avaliacaoestabelecimentos = await AvaliacaoEstabelecimento.findAll({});
          console.log(avaliacaoestabelecimentos)
          return res.json(avaliacaoestabelecimentos)
        }catch(error){
          console.error(error);
        }
        return res.json({mensagem: "Deu erro"}) 
      }

}

export default new AvaliacaoEstabelecimentoController();