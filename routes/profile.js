module.exports = {
    getProfilePage: (req, res) => {
        let uid = req.params.id;
        let createProfileQuery = "SELECT * FROM profile_page WHERE'" + uid + "'";
        
        db.query(createProfileQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
                }
            else {
                res.render('main-page.ejs', {
                title: "Personal Profile", 
                });
            }
        });   
    }
}