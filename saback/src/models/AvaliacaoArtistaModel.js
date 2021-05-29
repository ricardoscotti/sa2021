import Sequelize, { Model } from "sequelize";
import Artista from "./ArtistaModel";

class AvaliacaoArtista extends Model{
    
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
            tableName: 'avaliacaoartista', 
            timestamps: false
        })
            this.removeAttribute("id")
            return this
    }

            static associate(model){
                console.log(model) 
            this.belongsTo(model.Artista, {
            constraint: false,
            foreignKey: 'id_artista',
            targetKey:'id_artista',
        });
     
        
    }
}

export default AvaliacaoArtista;