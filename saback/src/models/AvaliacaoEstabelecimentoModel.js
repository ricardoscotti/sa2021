import Sequelize, { Model } from "sequelize";

class AvaliacaoEstabelecimento extends Model{
    
    static init(sequelize) {
        super.init({
            "id_artista": {
                type:Sequelize.SMALLINT, 
                primarykey: true
            }, 
            "id_estabelecimento":{ 
                type:Sequelize.SMALLINT,
                primarykey: true},
                "avaliacao": Sequelize.STRING
        },
        {
            sequelize, 
            underscored: false, 
            freezeTableName: true, 
            tableName: 'avaliacaoestabelecimento', 
            timestamps: false
        })
            this.removeAttribute("id")
            return this
    }

            static associate(model){
                console.log(model) 
            this.belongsTo(model.Estabelecimento, {
            constraint: false,
            foreignKey: 'id_estabelecimento',
            targetKey:'id_estabelecimento',
        });
     
        
    }
}

export default AvaliacaoEstabelecimento;