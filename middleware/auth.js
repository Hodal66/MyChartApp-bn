import Jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) return res.status(403).json("Access Denied");

    if (token.startsWith("Bearer")) {
      token = token.slice(7, token.length).trimLeft();
    }
    const verified = Jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();

    ///configure many users at once

    // const allUserContainer = [
    //   {
    //     firstName: "muheto",
    //     lastName: "hodal",
    //     email: "mhthodol@gmail.com",
    //     password: "1234",
    //   },
    //   {
    //     firstName: "Keza",
    //     lastName: "Joshua",
    //     email: "keza@gmail.com",
    //     password: "12345",
    //   },
    // ];

    // if (!token.includes(allUserContainer))
    //   return res.status(400).json({ message: "Access denied" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
