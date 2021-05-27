import Sequelize, { Model } from "sequelize";

class AvaliacaoArtista extends Model{
    
    static init(sequelize) {
        super.init({
            "id_artista": {
                type:Sequelize.SMALLINT, 
                primarykey: true,
            }, 
            "id_estabelecimento": {
                type:Sequelize.SMALLINT, 
                primarykey: true,
            },
            "avaliacao": Sequelize.STRING
            },{
            sequelize, 
            underscored: false, 
            freezeTableName: true, 
            tableName: 'avaliacaoartista', 
            timestamps: false
        })
        this.removeAttribute("id")
        
        return this  
    }

    // static associate(model){
    //     this.hasMany(model.Evento, {
    //         constraint: false,
    //         foreignKey: 'idBanda',
    //         targetKey:'idBanda'
    //     });
    // }
}

export default AvaliacaoArtista;