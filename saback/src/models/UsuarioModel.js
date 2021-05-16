import Sequelize, { Model } from "sequelize";

class Usuario extends Model{
    
    static init(sequelize) {
        super.init({
            "idbanda": {
                type:Sequelize.SMALLINT, 
                primarykey: true
            }, 
            "nome_banda": Sequelize.STRING
        },{
            sequelize, 
            underscored: false, 
            freezeTableName: true, 
            tableName: 'banda', 
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
