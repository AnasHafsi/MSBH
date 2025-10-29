module.exports = {
    siteMetadata: {
        title: `MSBH`,
        description: `MSBH Portfolio website`,
        twitterUsername: `@msbh`,
        siteUrl: process.env.GATSBY_SITE_URL || `http://localhost:8000/`,
    },
    plugins: [
        "gatsby-plugin-sass",
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: [`/src/assets/`, /\.inline\.svg$/],
                },
            },
        },
        "gatsby-plugin-sitemap",
    ],
};
