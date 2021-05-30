import Sequelize, { Model } from "sequelize";

class Artista extends Model{
    
    static init(sequelize) {
        super.init({
            "id_artista": {
                type:Sequelize.SMALLINT, 
                primarykey: true
            }, 
            "nome": Sequelize.STRING,
            "estilo": Sequelize.STRING,
            "telefone_ddd": '',
            "telefone_numero": '',
            "rua": Sequelize.STRING,
            "numero": Sequelize.INTEGER,
            "bairro": Sequelize.STRING,
            "cidade": Sequelize.STRING,
            "estado": Sequelize.STRING,
            "cep": Sequelize.STRING,
            "lat": Sequelize.STRING,
            "longi": Sequelize.STRING,
            "complemento": Sequelize.STRING
        },{
            sequelize, 
            underscored: false, 
            freezeTableName: true, 
            tableName: 'artista', 
            timestamps: false
        })
            this.removeAttribute("id")
            return this
    }
           
            static associate(model){
            console.log(model)
            this.hasMany(model.AvaliacaoArtista, {
                constraint: false, 
                foreignKey: "id_artista", 
                sourceKey: "id_artista", 
                as:"avaliacaoartista"});  
                //this.belongsToMany(model.Estabelecimento,{through: model.AvaliacaoArtista})
    }
        
                
}

export default Artista;
