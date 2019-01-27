module.exports = {
    getLentPage: (req, res) => {
        res.render('lent.ejs', {
            title: "Crippling Debt | Lent"
        });
    }
};