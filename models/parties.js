export default (sequelize, DataTypes) => {
    const parties = sequelize.define("parties", {
        party_id : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        party_name :{
            type: DataTypes.STRING,
            allowNull: false,
        },
        contact_number : {
            type: DataTypes.BIGINT(10),
            allowNull: false,
        },
        address_line_1 : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address_line_2  : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        landmark  : {
            type: DataTypes.STRING,
            allowNull: true,
        },
        state : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pin_code : {
            type: DataTypes.INTEGER(6),
            allowNull: false,
        },
        county : {
            type: DataTypes.STRING,
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
        updated_by: {
            // FK in staff table
            type: DataTypes.INTEGER,
            required: true,
            allowNull: false,
        },
        added_by : {
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
        }
    },
        {
            timestamps: false
        }); 
    return parties;
};