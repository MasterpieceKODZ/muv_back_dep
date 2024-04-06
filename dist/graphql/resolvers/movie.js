import prismaClient from "../../client.js";
export const movieResolver = {
    id(parent) {
        return parent.id;
    },
    title(parent) {
        return parent.title;
    },
    summary(parent) {
        return parent.summary;
    },
    videoUrl(parent) {
        return parent.videoUrl;
    },
    coverImageUrl(parent) {
        return parent.coverImageUrl;
    },
    numberOfStreams(parent) {
        return parent.numberOfStreams;
    },
    genres(parent) {
        return parent.genres;
    },
    mainCasts(parent) {
        return parent.mainCasts;
    },
    releaseYear(parent) {
        return parent.releaseYear;
    },
    countryOfOrigin(parent) {
        return parent.countryOfOrigin;
    },
    async savedBy(parent) {
        try {
            const watchHist = await prismaClient.movies.findFirst({
                where: {
                    id: parent.id,
                },
                select: {
                    savedBy: true,
                },
            });
            return watchHist === null || watchHist === void 0
                ? void 0
                : watchHist.savedBy;
        }
        catch (err) {
            console.log("project people resolution failed...");
            console.error(err);
            return null;
        }
    },
    async watchedBy(parent) {
        try {
            const watchHist = await prismaClient.movies.findFirst({
                where: {
                    id: parent.id,
                },
                select: {
                    watchedBy: true,
                },
            });
            return watchHist === null || watchHist === void 0
                ? void 0
                : watchHist.watchedBy;
        }
        catch (err) {
            console.log("project people resolution failed...");
            console.error(err);
            return null;
        }
    },
};
