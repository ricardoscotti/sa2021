import Interesse from '../models/InteresseModel'
import Estabelecimento from '../models/EstabelecimentoModel'
import Artista from '../models/ArtistaModel'
import Evento from '../models/EventoModel'

class InteresseController {
    
    async index(req, res){
      try{
        const interesse = await Interesse.findAll({
            where: {id_estabelecimento: req.params.id},  
           raw: true,
           nest: true, 
         include: [
           {
             model: Evento,
             required: false,
             as: "Evento",
             attributes: ["nome"]
           },{
            model: Artista,
            required: false,
            as: "interesseList",
            attributes: ["nome"]
           }

         ]
        });
        return res.json(interesse)
      }catch(error){
        console.error(error);
      }
      return res.json({mensagem: "Deu erro"})
    }

    async create(req, res){
        const { id_evento, id_artista, id_estabelecimento} = req.body; 
        try{
          console.log("ENTROU NA VERIFICACAO")
          const verificainteresse = await Interesse.findOne({where: {
                        id_artista: id_artista,
                        id_estabelecimento: id_estabelecimento,
                        id_evento: id_evento
                        
                    }}
                    );
                    console.log(verificainteresse)
                    
            if (verificainteresse){
              console.log("ACHOU IGUAL, ACABOU")

        }else{
          console.log("NAO ACHOU E CRIOU")
          const criainteresse = await Interesse.create({
            id_estabelecimento: id_estabelecimento,
            id_evento: id_evento,
            id_artista: id_artista

        });}
      
      }catch(error){
            console.error(error);
        }
        return res.json({mensagem: "Interesse registrado Sucesso"})
    }

    async delete(req, res){
      try{
        const eventos2 = await Evento.destroy({where: {id_evento: req.params.id}});
        console.log(eventos2)
        return res.json(eventos2)
      }catch(error){
        console.error(error);
      }
  
      return res.json({mensagem: "Deu erro"})
    }

    async indexporid(req, res){
      try{
        const eventoporid = await Evento.findAll({where: {id_estabelecimento: req.params.id}});
        return res.json(eventoporid)
        
      }catch(error){
        console.error(error);
      }
  
      return res.json({mensagem: "Deu erro"})
    }

    async indexporidevento(req, res){
      try{
        const eventoidevento = await Evento.findAll({where: {id_evento: req.params.id},  
           raw: true,
           nest: true, 
         include: [
           {
             model: Estabelecimento,
             required: false,
             as: "Estabelecimento",
             attributes: ["nome", "lat", "longi"]
           }
         ]
        });
        
        console.log(eventoidevento)
        return res.json(eventoidevento)
      }catch(error){
        console.error(error);
      }
      return res.json({mensagem: "Deu erro"})}
  
      
    

    async update(req, res){
      const { nome, id_estabelecimento, dt_evento, valor, descricao } = req.body; 
      try{
     const eventos = await Evento.update({nome, id_estabelecimento, dt_evento, valor, descricao}, {where: {id_evento: req.params.id}})
     return res.json(eventos)
      }catch(error){
        console.log("ERRO AQUI" + error)
       return res.json({mensagem: "Deu erro"})
       }}


  }
  
  export default new InteresseController();