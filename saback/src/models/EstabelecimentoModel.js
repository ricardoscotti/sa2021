import Sequelize, { Model } from "sequelize";

class Estabelecimento extends Model{
    
    static init(sequelize) {
        super.init({
            "id_estabelecimento": {
                type:Sequelize.SMALLINT, 
                primarykey: true
            }, 
            "nome": Sequelize.STRING,
            "cnpj": Sequelize.STRING,
            "telefone_ddd": Sequelize.STRING,
            "telefone_numero": Sequelize.STRING,
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
            tableName: 'estabelecimento', 
            timestamps: false
        })
        this.removeAttribute("id")
        
        return this
    }
    
     static associate(model){
         this.hasMany(model.Evento,{
             constraint: false,
             foreignKey: "id_estabelecimento", 
             sourceKey: "id_estabelecimento", 
             as:"estabelecimento"
         });
         this.hasMany(model.AvaliacaoEstabelecimento, {
            constraint: false, 
            foreignKey: "id_estabelecimento", 
            sourceKey: "id_estabelecimento", 
            as:"avaliacaoestabelecimento"}); 

     }

}

export default Estabelecimento;
