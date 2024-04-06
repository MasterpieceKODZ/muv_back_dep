import prismaClient from "../../client.js";
export async function addMovieToWatchListResolver(_, args) {
    if (!args.username)
        return new Error("INVALID_USERNAME");
    if (!args.movieId)
        return new Error("INVALID_RECORD_ID");
    try {
        const list = await prismaClient.users.update({
            where: {
                username: args.username,
            },
            data: {
                watchList: {
                    connect: [{ id: args.movieId }],
                },
            },
            select: {
                watchList: true,
            },
        });
        return list.watchList;
    }
    catch (err) {
        return new Error("FAILED");
    }
}
