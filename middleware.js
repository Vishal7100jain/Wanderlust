module.exports.isLoggedIn = (req,res,next) => {
    if(!req.isAuthenticated()){
        // redirectURL
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to create a listing!");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req,res,next) => {
    if(req.session.redirectUrl){
        res.local.redirectUrl = req.session.redirectUrl;
    }
    next();
};