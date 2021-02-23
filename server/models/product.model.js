const Product = (sequeliz, DataTypes)=>{
    const Product = sequelize.define('product', {
        prod_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        }
      }, {
        sequelize,
        tableName: 'product',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: "product_pkey",
            unique: true,
            fields: [
              { name: "prod_id" },
            ]
          },
        ]
      });
      return Product;
}
export default Product;