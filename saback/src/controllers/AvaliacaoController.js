import Avaliacao from "../models/AvaliacaoModel"

class AvaliacaoController {

    async create(req, res){
        const { avaliacao, id_artista, id_estabelecimento } = req.body; 
        try{
            const criaavaliacao = Avaliacao.create({
                avaliacao: avaliacao,
                id_artista: id_artista,
                id_estabelecimento: id_estabelecimento,

            });
        }catch(error){
            console.error(error);
        }
        return res.json({mensagem: "Avaliação Registrada com Sucesso"})
    }

}

export default new AvaliacaoController();