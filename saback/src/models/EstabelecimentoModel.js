import Sequelize, { Model } from "sequelize";

class Estabelecimento extends Model{
    
    static init(sequelize) {
        super.init({
            "id_estabelecimento": {
                type:Sequelize.SMALLINT, 
                primarykey: true
            }, 
            "nome": Sequelize.STRING
        },{
            sequelize, 
            underscored: false, 
            freezeTableName: true, 
            tableName: 'estabelecimento', 
            timestamps: false
        })
        this.removeAttribute("id")
        
        return this
    }
    
    // static associate(model){
    //     this.hasMany(model.Evento);
    // }

}

export default Estabelecimento;
