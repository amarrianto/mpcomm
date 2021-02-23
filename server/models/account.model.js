const Account = (sequelize, DataTypes) => {
    const Account = sequelize.define('account', {
        acco_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true
        }
      }, {
        sequelize,
        tableName: 'account',
        schema: 'public',
        timestamps: false,
        indexes: [
          {
            name: "account_pkey",
            unique: true,
            fields: [
              { name: "acco_id" },
            ]
          },
        ]
      });
      return Account;
}
export default Account;