const passport = require('passport');

module.exports = {
  profile: function (req, res) {
    passport.authenticate('local', function (err, user, info) {
      if ((err) || (!user)) {
        return res.view('homepage', {
          status: -1,
          message: info.message,
          user
        })
      }
      req.logIn(user, function (err) {
        if (err) {
          return res.view('homepage', {
            status: -1,
            message: err,
            user
          })
        }
        return res.view('profile', {
          message: info.message,
          user
        })
      });
    })(req, res);
  },

  logout: function (req, res) {
    req.logout();
    res.redirect('/');
  }
};