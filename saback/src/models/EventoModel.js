import Sequelize, { Model } from 'sequelize';

class Evento extends Model{
    
    static init(sequelize) {
        super.init({
            "id_evento": {
                type:Sequelize.SMALLINT, 
                primarykey: true
            }, 
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

    // static associate(model){
    //     this.hasMany(model.Evento, {
    //         constraint: false,
    //         foreignKey: 'idBanda',
    //         targetKey:'idBanda'
    //     });
    // }
}

export default Evento;