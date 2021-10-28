export default (sequelize, DataTypes) => {
    const items = sequelize.define("items", {
        item_id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        item_name : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        category : {
            type: DataTypes.BIGINT(10),
            allowNull: false,
        },
        item_description : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        unit : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sales_price : {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        quantity : {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        added_by : {
             // FK in staff table
            type: DataTypes.INTEGER,
            required: true,
            allowNull: false, 
        },
        updated_by: {
             // FK in staff table
            type: DataTypes.INTEGER,
            required: true,
            allowNull: false,
        },
        company_id: {
            // FK in business registration table
            type: DataTypes.INTEGER,
            required: true,
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
        }
    },
        {
            timestamps: false
        }); 
    return items;
};