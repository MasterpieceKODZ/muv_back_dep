import prismaClient from "../../client.js";
export async function getMoviesByCountryResolver(_, args) {
    if (!args.country)
        return new Error("COUNTRY_NOT_FOUND");
    try {
        const movie = prismaClient.movies.findMany({
            where: {
                countryOfOrigin: args.country,
            },
        });
        return movie;
    }
    catch (error) {
        return new Error("FAILED");
    }
}
