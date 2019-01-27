module.exports = {
    getLoginPage: (req, res) => {
            res.render('index.ejs', {
                title: "CripplingDebt | Login",
        });
    },
    
    getAddAccount: (req, res) => {
        res.render('create-acc.ejs', {
            title: "CripplingDebt | Create New Account",
        });
    },
    
    
    addAccount: (req, res) => {
        let username = req.body.username; 
        let email = req.body.email; 
        let password = req.body.pwd; 
        let firstname = req.body.first_name; 
        let lastname = req.body.last_name; 
        let phone = req.body.phone; 
        let datetime = new Date().toLocaleString();
        
        let duplicateQuery = "SELECT * FROM account WHERE username = '" + username + "'"; 
        
        db.query(duplicateQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
                console.log(datetime);
            }
            if (result.length > 0) {
                message = 'Username already exists';
                res.render('create-acc.ejs', {
                    message, 
                    title: "CripplingDebt | Create New Account"
                });
            }
            else {
                let addUserQuery = "INSERT INTO account (username, email, date_created, pwd, first_name, last_name, phone) VALUES ('" + username + "', '" + email + "', '" + datetime + "', '" + password + "', '" + firstname + "', '" + lastname + "', '" + phone + "')";
                
                db.query(addUserQuery, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/');
                });
            }
        });
    }   
}


