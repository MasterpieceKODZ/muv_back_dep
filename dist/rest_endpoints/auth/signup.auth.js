import { createNewUser } from "../../utils/auth/create.new.user.js";
import { isUsernameTaken, validateRequestBody, } from "../../utils/auth/validate.request.body.js";
export async function signupAuth(req, res) {
    const [isRequestBodyValid, usernameTaken] = await Promise.all([
        validateRequestBody(req.body.username, req.body.password),
        isUsernameTaken(req.body.username),
    ]);
    if (!isRequestBodyValid) {
        res.status(400).send("INVALID_CREDENTIALS");
        return;
    }
    if (usernameTaken) {
        res.status(400).send("DUPLICATE_USER_CREDENTIALS");
        return;
    }
    try {
        const createUser = await createNewUser(req.body.username, req.body.password);
        console.log("created-user");
        console.log(createUser);
        res.send(JSON.stringify({ username: createUser.username, role: createUser.role }));
        return;
    }
    catch (err) {
        console.log("error on create acount");
        console.error(err);
        res.status(500).send("INTERNAL_SEVER_ERROR");
    }
}
