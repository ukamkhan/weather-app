// user may become avilable from db, http request etc. When it
// becomes available we want to call callback
var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Vikram'
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};

// This is the callback, the function which is taking the userObj
// i.e. the 2nd argument of the getUser function. When it gets
// called, we do what we want. In this case print
getUser(31, (userObject) => {
  console.log(userObject);
});
