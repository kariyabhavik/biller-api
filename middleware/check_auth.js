import jwt from "jsonwebtoken";

class Auth {
    checkAuth(req, res, next) {
        try {
            const token = req.headers.authorization.split(" ")[1];
            const decodedToken = jwt.verify(token, 'secret');
            req.staffData = decodedToken;
            next();
        } catch (error) {
            res.status(401).json({
                message: "invalid or expired token",
                error: error
            });
        }
    }

}

export default new Auth();