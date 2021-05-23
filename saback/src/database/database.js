import Sequelize from "sequelize";
import Artista from '../models/ArtistaModel';
import Usuario from '../models/UsuarioModel';
import Estabelecimento from '../models/EstabelecimentoModel';
import Evento from '../models/EventoModel';


const models = [Artista, Usuario, Estabelecimento, Evento]

class DataBase {
    constructor(){
        this.mySQL()   
    }

    mySQL(){
        this.connection = new Sequelize({"dialect": "postgres", "host": "localhost", "port": '5432', "username": "postgres", "password": "postgres", 'database':'postgres', define: { timestamp: false, underscored: false, underscoredAll: false}})

        models.map(model => model.init(this.connection)).map(model => model.associate && model.associate(this.connection.models))
    }
}
export default new DataBase()   