const bcrypt = require('bcryptjs')
module.exports = {
    registerUser: (req, res) => {
        //get username password and email off the body
        const { username, password, email } = req.body
        console.log(req.body)
        //check to make sure the username isnt taken
        const db = req.app.get('db')
        db.verifyUser([username]).then(usersList => { //referencing database folder then verifyUser file
            if (usersList.length > 0) {
                res.status(403).json({
                    error: "USERNAME_ALREADY_TAKEN"
                })
            } else {
                //hash the password
                bcrypt.hash(password, 12).then(newPassword => { //first use of bcrypt
                    db.createUser(username, newPassword, email).then(() => {
                        req.session.user = {
                            username: username,
                            email: email
                        }
                        res.status(200).json(req.session.user)
                    }).catch(err => console.log(err))
                }).catch(err => console.log(err))
            }
        }).catch(err => console.log(err))

        //store it in database
        //add user to session
        //send the user back
    }
}