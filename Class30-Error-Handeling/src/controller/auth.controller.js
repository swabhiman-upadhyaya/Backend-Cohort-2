
export async function registerUser(req, res, next) {
  try {
    // throw new Error("Error occurred while registering new user")
    // throw new Error("Password is too weak")
    throw new Error("User already Exists")
    // console.log(user)
  }
  catch(err) {
    // err.status = 500;
    // err.status = 400;
    err.status = 409;
    next(err)
  }
}

// All the throw and status are in sequence;