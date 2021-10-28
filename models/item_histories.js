export default (sequelize, DataTypes) => {
    const item_histories = sequelize.define("item_histories", {
        item_history_id  : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        rate  :{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        quantity  : {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        amount  : {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        crated_at: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE
        },
        ipAddress: {
            type: DataTypes.STRING,
            field: "ip_address"
        },
        active_status: {
            type: DataTypes.TINYINT
        },
        updated_by : {
             // FK in parties table
             type: DataTypes.INTEGER,
             required: true,
             allowNull: false,
        },
        added_by  : {
             // FK in parties table
             type: DataTypes.INTEGER,
             required: true,
             allowNull: false,
        },
        bill_id  : {
             // FK in bills table
             type: DataTypes.INTEGER,
             required: true,
             allowNull: false,
        }
    },
        {
            timestamps: false
        }); 
    return item_histories;
};