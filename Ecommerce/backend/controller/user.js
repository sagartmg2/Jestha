

const signup = (req, res, next) => {

    // express-validator  //  

    // logic


    // User.create({

    // })
    // req.body
    // TODO: 
    // User.create(req.body)

    res.send("signup controller")
}
const login = (req, res, next) => {
    res.send("login controller")


    // TODO: compare passowrd and  send json web token
}

// module.exports = signup

module.exports = {
    signup,
    login,
}