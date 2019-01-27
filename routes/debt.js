module.exports = {
    getDebtPage: (req, res) => {
        res.render('debt.ejs', {
            title: "Crippling Debt | Debt"
        });
    }
};