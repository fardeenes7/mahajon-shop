module.exports = {
    images: {
        dangerouslyAllowSVG: true,
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "placehold.co",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "*.mahajon.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};
