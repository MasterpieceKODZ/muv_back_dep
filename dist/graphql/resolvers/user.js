import prismaClient from "../../client.js";
export const userResolver = {
    id(parent) {
        return parent.id;
    },
    username(parent) {
        return parent.username;
    },
    role(parent) {
        return parent.role;
    },
    async watchList(parent) {
        try {
            const watchHist = await prismaClient.users.findFirst({
                where: {
                    id: parent.id,
                },
                select: {
                    watchList: true,
                },
            });
            return watchHist === null || watchHist === void 0
                ? void 0
                : watchHist.watchList;
        }
        catch (err) {
            console.log("project people resolution failed...");
            console.error(err);
            return null;
        }
    },
    async watchHistory(parent) {
        try {
            const watchHist = await prismaClient.users.findFirst({
                where: {
                    id: parent.id,
                },
                select: {
                    watchHistory: true,
                },
            });
            return watchHist === null || watchHist === void 0
                ? void 0
                : watchHist.watchHistory;
        }
        catch (err) {
            console.log("project people resolution failed...");
            console.error(err);
            return null;
        }
    },
};
