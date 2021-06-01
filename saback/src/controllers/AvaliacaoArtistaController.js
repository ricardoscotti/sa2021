import AvaliacaoArtista from "../models/AvaliacaoArtistaModel"

class AvaliacaoArtistaController {

    
    async updatelike(req, res){

        const { avaliacao, id_artista, id_estabelecimento } = req.body; 
        try{
            
            const verificalike = await AvaliacaoArtista.findOne({where: {
                        id_artista: id_artista,
                        id_estabelecimento: id_estabelecimento
                        
                    }}
                    );
                    console.log(verificalike)
                    
            if (verificalike){
                
                const verificalike = AvaliacaoArtista.update({
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
                const crialike = AvaliacaoArtista.create({
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
    
    // async updatelike(req, res){
    //     const { id_artista, id_estabelecimento, avaliacao} = req.body; 
    //     try{
    //         const updatelike = await AvaliacaoArtista.update({
    //             id_estabelecimento: id_estabelecimento,
    //             id_artista: id_artista,
    //             avaliacao: avaliacao

    //         },{
    //             where: {
    //                     id_artista: id_artista,
    //                     id_estabelecimento: id_estabelecimento
    //                             }
    //                         },
    //         );
    //     }catch(error){
    //         console.error(error);
    //     }
    //     return res.json({mensagem: "Evento criado com Sucesso"})
    // }

    async index(req, res){
        try{
          const avaliacoesartistas = await AvaliacaoArtista.findAll({});
          console.log(avaliacoesartistas)
          return res.json(avaliacoesartistas)
        }catch(error){
          console.error(error);
        }
        return res.json({mensagem: "Deu erro"}) 
      }

}

export default new AvaliacaoArtistaController();