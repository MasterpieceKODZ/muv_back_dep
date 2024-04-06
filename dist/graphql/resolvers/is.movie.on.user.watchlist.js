import prismaClient from "../../client.js";
export async function isMovieOnUserWatchListResolver(_, args) {
    if (!args.username)
        return new Error("INVALID_USERNAME");
    if (!args.movieId)
        return new Error("INVALID_RECORD_ID");
    try {
        const list = await prismaClient.users.findFirst({
            where: {
                username: args.username,
            },
            select: {
                watchList: true,
            },
        });
        let isOnWatchlist = false;
        list === null || list === void 0 ? void 0 : list.watchList.forEach((movie) => {
            if (movie.id == args.movieId)
                isOnWatchlist = true;
        });
        return isOnWatchlist;
    }
    catch (error) {
        console.log(error);
        return new Error("FAILED");
    }
}
