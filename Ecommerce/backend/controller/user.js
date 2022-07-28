

const signup = (req, res, next) => {

    // express-validator  //  

    // logic


    // User.create({})


    res.send("signup controller")
}
const login = (req, res, next) => {
    res.send("login controller")
}

// module.exports = signup

module.exports = {
    signup,
    login,
}