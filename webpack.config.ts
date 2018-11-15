import path from "path";
import webpack from "webpack";
import webpackDevServer from "webpack-dev-server";
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";

const entry: webpack.Entry = {
    main: "./src/index.tsx",
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

const extensions = [".ts", ".tsx", ".js", ".jsx"];

const plugins = [
    new TsconfigPathsPlugin({
        configFile: "./tsconfig.json",
    }),
];

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
    resolve: {
        extensions,
        plugins,
    },
    devServer,
};

export default config;
