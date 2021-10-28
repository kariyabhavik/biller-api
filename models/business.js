export default (sequelize, DataTypes) => {

    try {
       const businesses = sequelize.define("businesses", {
        company_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        company_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        company_contact_number: {
            type: DataTypes.BIGINT(10),
            allowNull: false,
        },
        create_by: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        updated_by: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_at: {
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
    },
        {
            timestamps: false
        });
        
        // businessRegistration.hasMany(db.staffs);
        // db.staffs.belongsTo(businessRegistration);

    return businesses; 
    } catch (error) {
        console.log(error);
    }
    
}; 