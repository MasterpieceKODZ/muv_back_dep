import prismaClient from "../../client.js";
export async function getUserByUsernameResolver(_, args) {
    if (!args.username)
        return new Error("_USERNAME_NOT_VALID");
    try {
        const user = prismaClient.users.findFirst({
            where: {
                username: args.username,
            },
            select: {
                id: true,
                username: true,
                role: true,
                watchList: true,
                watchHistory: true,
            },
        });
        return user;
    }
    catch (error) {
        return new Error("FAILED");
    }
    // try {
    // 	// Query to find user by username
    // 	const query = {
    // 		text: `
    //     SELECT id, username, role
    //     FROM users
    //     WHERE username = $1
    //     LIMIT 1
    //   `,
    // 		values: [args.username],
    // 	};
    // 	// Execute the query
    // 	const result = await pool.query(query);
    // 	//Return the first user found or null if no user found
    // 	console.log(
    // 		"USER FOUND ================================>>>>>>>>>>>>>>>>>>>>>>>>>>",
    // 	);
    // 	console.log(result.rows);
    // 	return result.rows[0] || null;
    // } catch (error) {
    // 	console.error("Error retrieving user:", error);
    // 	throw error;
    // }
}
