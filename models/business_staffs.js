export default (sequelize, DataTypes) => {
    const businessStaffs = sequelize.define("business_staffs", {
        business_staffs  : {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        company_id  :{
            // FK in business registration table
            type: DataTypes.INTEGER,
            required: true,
            allowNull: false,
        },
        staff_id  : {
            // FK in staff table
            type: DataTypes.INTEGER,
            required: true,
            allowNull: false,
        },
        updated_by : {
            // FK in staff table
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
    return businessStaffs;
};