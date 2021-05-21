import Evento from '../models/EventoModel'

class EventoController {
    
    async index(req, res){
      try{
        const eventos = await Evento.findAll({});
        console.log(eventos)
        return res.json(eventos)
      }catch(error){
        console.error(error);
      }
      return res.json({mensagem: "Deu erro"})
    }

    async create(req, res){
        const { dt_evento, nome, valor, descricao, lat, longi} = req.body; 
        try{
            const criaevento = Evento.create({
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


  }
  
  export default new EventoController();