import Evento from '../models/EventoModel'
import Estabelecimento from '../models/EstabelecimentoModel'

class EventoController {
    
    async index(req, res){
      try{
        const eventos = await Evento.findAll({});
        return res.json(eventos)
      }catch(error){
        console.error(error);
      }
      return res.json({mensagem: "Deu erro"})
    }

    async create(req, res){
        const { dt_evento, nome, valor, descricao, lat, longi, id_estabelecimento} = req.body; 
        try{
            const criaevento = await Evento.create({
                id_estabelecimento: id_estabelecimento,
                dt_evento: dt_evento,
                nome: nome,
                valor: valor,
                descricao: descricao,
                lat: lat,
                longi: longi

            });
        }catch(error){
            console.error(error);
        }
        return res.json({mensagem: "Evento criado com Sucesso"})
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
  
  export default new EventoController();