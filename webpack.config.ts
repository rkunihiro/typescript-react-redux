import path from "path";
import webpack from "webpack";
import webpackDevServer from "webpack-dev-server";

const entry: webpack.Entry = {
    main: "./src/index.tsx",
    html: "./src/index.html",
};

const output: webpack.Output = {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
};

// TypeScript file rule
const tsRule: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: {
        loader: "ts-loader",
    },
};

// HTML file rule
const htmlRule: webpack.RuleSetRule = {
    test: /\.html$/,
    use: {
        loader: "file-loader",
        options: {
            name: "[name].[ext]",
        },
    },
};

// webpack-dev-server config
const devServer: webpackDevServer.Configuration = {
    compress: false,
    host: "localhost",
    port: 3000,
};

// webpack config
const config: webpack.Configuration = {
    mode: "development",
    entry,
    output,
    module: {
        rules: [tsRule, htmlRule],
    },
    devServer,
};

export default config;
