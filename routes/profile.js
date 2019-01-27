
const sendMessage = lib.charlenenicer.sendMessage['@dev'];
module.exports = {



	// send message
	sendMessage: (borrower = 'borrower', number, money, date) => {
		let result = await sendMessage({
	  borrower: `${borrower}`	
	  number: number, // (required)
	  money: money, // (required)
	  date: date // (required)
	});
	}
	



	// delete account
	// deleteAccount: (req, res) => {
 //        let username = req.params.username;
 //        let deleteUserQuery = 'DELETE FROM account WHERE username = "' + username + '"';

 //        db.query(deleteUserQuery, (err, result) => {
 //            if (err) {
 //                return res.status(500).send(err);
 //            }
 //            res.redirect('/');

 //        });


 //    }

    
}