export default (sequelize, DataTypes) => {
    const addAddressOfBusiness = sequelize.define("business_addresses", { 
        company_address_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        address_line_1: {
            type: DataTypes.STRING,
            allowNull: false,
        },    
        address_line_2: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        landmark: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pin_code: {
          type: DataTypes.INTEGER(6),
          allowNull: false,
        },
        county: {
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
        company_id: {
            type: DataTypes.INTEGER,
            required: true,
            allowNull: false,
        }
    },
        {
            timestamps: false
        });
    return addAddressOfBusiness;
};