import AvaliacaoArtista from "../models/AvaliacaoArtistaModel"

class AvaliacaoArtistaController {

    
    async avaliaartista(req, res){

        const { avaliacao, id_artista, id_estabelecimento } = req.body; 
        try{
            
            const avaliacaoporid = await AvaliacaoArtista.findAll({where: {
                        id_artista: id_artista,
                        id_estabelecimento: id_estabelecimento
                    }});
                    console.log("AQUIIIIIII")
            if (avalicaoporid){
    
                const avaliacaoa = AvaliacaoArtista.update({
                    avaliacao: avaliacao,
                    id_artista: id_artista,
                    id_estabelecimento: id_estabelecimento
    
                },{
                    where: {
                        id_artista: id_artista,
                        id_estabelecimento: id_estabelecimento
                    }
                });
    
            }else{
    
                const avaliacaoa = AvaliacaoArtista.create({
                    avaliacao: avaliacao,
                    id_artista: id_artista,
                    id_estabelecimento: id_estabelecimento
                });
                console.log("GRAVOUUU")
            }
    
        }catch(error){
            console.error(error);
        }
    
        return res.json({mensagem: "Deu erro"})
    }

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