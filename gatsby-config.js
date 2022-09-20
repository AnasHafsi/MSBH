module.exports = {
    siteMetadata: {
        title: `MSBH`,
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
    ],
};
