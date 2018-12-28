/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
  profile: function (req, res) {
    const user = req.user;
    if (!user) {
      res.redirect('/');
    }

    return res.view('profile', {
      user
    })
  }
};

