import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  // Cek apakah request memiliki token JWT
  const tokenHeader = req.headers["authorization"];
  if (!tokenHeader) {
    // Jika tidak ada token, tolak permintaan
    return res.status(401).send({ message: "Unauthorized" });
    console.log("not token");
  }

  const token = tokenHeader.split(" ")[1];

  if (!token) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  // Cek apakah token valid
  try {
    // Jika token valid, lanjutkan permintaan
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.validUser;
    next();
  } catch (err) {
    // Jika token tidak valid, tolak permintaan
    return res.status(401).send({ message: "Unauthorized" });
  }
};

export default verifyToken;
