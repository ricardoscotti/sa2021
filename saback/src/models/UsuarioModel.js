import Sequelize, { Model } from "sequelize";

class Usuario extends Model{
    
    static init(sequelize) {
        super.init({
            "id_usuario": {
                type:Sequelize.SMALLINT, 
                primarykey: true
            }, 
            "login": Sequelize.STRING,
            "id_artista": Sequelize.STRING,
            "id_estabelecimento": Sequelize.STRING
        },{
            sequelize, 
            underscored: false, 
            freezeTableName: true, 
            tableName: 'usuario', 
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

export default Usuario;
