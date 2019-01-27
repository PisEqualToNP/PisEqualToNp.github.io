module.exports = {
    getLoginPage: (req, res) => {
            res.render('index.ejs', {
                title: "CripplingDebt | Login",
        });
    },
    

    getACP: (req, res) => {
        res.render('create-acc.ejs', {
            title: "CripplingDebt | Create Account",            
        })
    }
};

