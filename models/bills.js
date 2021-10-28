export default (sequelize, DataTypes) => {
    const bills = sequelize.define("bills", {
        bill_id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        bill_date_time :{
            type: DataTypes.DATE,
        },
        advance : {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        balance_amount : {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        totam_amount  : {
            type: DataTypes.INTEGER
        },
        remark  : {
            type: DataTypes.STRING
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
        company_id: {
            // FK in business registration table
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
        created_by : {
             // FK in staff table
             type: DataTypes.INTEGER,
             required: true,
             allowNull: false,
        },
        party_id : {
             // FK in parties table
             type: DataTypes.INTEGER,
             required: true,
             allowNull: false,
        }
    },
        {
            timestamps: false
        }); 
    return bills;
};