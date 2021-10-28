import express from "express";
const { urlencoded, json } = express;
import swaggerUI from "swagger-ui-express"
import YAML from "yamljs"
const swaggerJsDocs = YAML.load("./api.yaml");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(urlencoded({ extended: true }));
app.use(json());

import businessRoutes from "./routes/business_routes.js";
import addressesRoutes from "./routes/business_addresses_routes.js";
import staffRoutes from "./routes/staff_routes.js";
import itemRoutes from "./routes/item_routes.js";
import partiesRoutes from "./routes/parties_routes.js";
import billsRoutes from "./routes/bills_routes.js";
import itemHistoriesRoutes from "./routes/item_histories_routes.js";
import BusinessstaffsRoutes from "./routes/business_staffs_routes.js";
import loginRoutes from "./routes/login_routes.js";
import checkAuthMiddleware from "./middleware/check_auth.js";
app.use("/api-docs" , swaggerUI.serve , swaggerUI.setup(swaggerJsDocs));
app.use((req, res, next) => {
    req.body.ipAddress = req.ip;
    next();
});
app.use("/api", loginRoutes);
app.use((req, res, next) => {
    checkAuthMiddleware.checkAuth(req, res, next);
});
app.use("/api", businessRoutes);
app.use("/api", addressesRoutes);
app.use("/api", staffRoutes);
app.use("/api", itemRoutes);
app.use("/api", partiesRoutes);
app.use("/api", billsRoutes);
app.use("/api", itemHistoriesRoutes);
app.use("/api", BusinessstaffsRoutes);

app.listen(PORT, () => {
    console.log(`listening on : http://localhost:${PORT}`);
});
