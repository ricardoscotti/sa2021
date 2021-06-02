import Sequelize, { Model } from 'sequelize'

class Interesse extends Model{
    
    static init(sequelize) {
        super.init({
            "id_interesse": {
                type:Sequelize.SMALLINT, 
                primarykey: true
            },
            "id_estabelecimento": Sequelize.STRING,
            "id_artista": Sequelize.STRING,
            "id_evento": Sequelize.STRING 
        },{
            sequelize, 
            underscored: false, 
            freezeTableName: true, 
            tableName: 'interesse', 
            timestamps: false
        })
        this.removeAttribute("id")
        
        return this
    }

    static associate(model){
        this.belongsTo(model.Evento, {
            constraint: false,
            foreignKey: 'id_evento',
            targetKey:'id_evento'
        });
        this.belongsTo(model.Artista, {
            constraint: false,
            foreignKey: 'id_artista',
            targetKey:'id_artista',
            as: "interesseList"
        });

    }

 
        
    

}

export default Interesse;