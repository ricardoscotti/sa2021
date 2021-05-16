import Sequelize, { Model } from "sequelize";

class Artista extends Model{
    
    static init(sequelize) {
        super.init({
            "id_artista": {
                type:Sequelize.SMALLINT, 
                primarykey: true
            }, 
            "nome": 
            Sequelize.STRING
        },{
            sequelize, 
            underscored: false, 
            freezeTableName: true, 
            tableName: 'artista', 
            timestamps: false})
        this.removeAttribute("id")
        
        return this
    }
    //static associate(model){
        //console.log(model)
        //this.belongsTo(model.Estabelecimento, {
            //constraint: false, 
            //foreignKey: "idestabelecimento", 
            //targetKey: "idestabelecimento", 
            //as:"estabelecimentoEvento"});
        //this.belongsTo(model.Banda, {
            //constraint: false, 
            //foreignKey: "idbanda", 
            //targetKey: "idbanda", 
            //as:"bandaEvento"});    
    //}
 
}

export default Artista;
