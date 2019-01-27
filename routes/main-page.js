module.exports = {
    getMainPage: (req, res) => {
        res.render('main-page.ejs', {
            title: "Crippling Debt | Home"
        });
    }
};