export default (sequelize, DataTypes) => {
    const login = sequelize.define("logins", {
        login_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        mobile_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        password: {
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
        staff_id: {
            // FK in staff table
            type: DataTypes.INTEGER,
            required: true,
            allowNull: false,
        }
    },
        {
            timestamps: false
        });
    return login;
};