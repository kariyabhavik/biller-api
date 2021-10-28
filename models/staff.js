export default (sequelize, DataTypes) => {
    const staff = sequelize.define("staffs", {
        staff_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        first_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        middle_name:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        last_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        alternate_mobile_number: {
            type: DataTypes.BIGINT(10),
            allowNull: true,
        },
        email_address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        date_of_birth : {
            type: DataTypes.DATE
        },
        gender : {
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
        updated_by: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        // company_id: {
        //     // FK in business registration table
        //     type: DataTypes.INTEGER,
        //     required: true,
        //     allowNull: false,
        // }
    },
        {
            timestamps: false
        }); 
    return staff;
};