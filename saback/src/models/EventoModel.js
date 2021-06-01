import Sequelize, { Model } from 'sequelize';
import Estabelecimento from "./EstabelecimentoModel";

class Evento extends Model{
    
    static init(sequelize) {
        super.init({
            "id_evento": {
                type:Sequelize.SMALLINT, 
                primarykey: true
            },
            "id_estabelecimento": Sequelize.STRING,
            "id_artista": Sequelize.STRING,
            "dt_evento": Sequelize.DATE,
            "nome": Sequelize.STRING,
            "valor": Sequelize.NUMBER,
            "descricao": Sequelize.STRING,
            "lat": Sequelize.STRING,
            "longi": Sequelize.STRING 
        },{
            sequelize, 
            underscored: false, 
            freezeTableName: true, 
            tableName: 'evento', 
            timestamps: false
        })
        this.removeAttribute("id")
        
        return this
    }

    static associate(model){
        this.belongsTo(model.Estabelecimento, {
            constraint: false,
            foreignKey: 'id_estabelecimento',
            targetKey:'id_estabelecimento'
        });
    }

    // static associate(model){
    //     this.hasMany(model.Interesse,{
    //         constraint: false,
    //         foreignKey: "id_evento", 
    //         sourceKey: "id_evento", 
    //         as:"Evento"
    //     } );
    // }
}

export default Evento;