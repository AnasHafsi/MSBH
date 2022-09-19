module.exports = {
    siteMetadata: {
        title: `MSBH`,
    },
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-react-svg",
            options: {
                rule: {
                    include: `/src/assets/`,
                    include: /\.inline\.svg$/,
                },
            },
        },
    ],
};
