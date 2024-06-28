const crypto = require("crypto");
const jwt = require("jsonwebtoken");


exports.tokenverify = async (req, res, next) => {
  let token = req.headers["astro-token"];

  if (!token) {
    return res.status(403).send({ message: "No Token Provided" });
  }
  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unathorized" });
    }
    req.astroId = decoded.astroId;
     req.usertype = decoded.usertype;
    next();
  });
};
