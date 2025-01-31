import * as esbuild from "esbuild";
import * as fs from 'fs';
import * as path from 'path';

const buildOptions = {
    charset: "utf8",
    bundle: true,
    minify: true,
    sourcemap: true,
    outdir: "dist",
    format: "iife",
    globalName: "boilerplate",
    treeShaking: true,
    entryPoints: [
        { in: "src/background.ts", out: "background" },
        { in: "src/content.ts", out: "content" },
        { in: "src/*.css", out: "content" },
        { in: "src/manifest.json", out: "manifest" },
    ],
    loader: {
        ".json": "copy",
        ".css": "copy",
        ".png": "copy",
    },
};

esbuild.build(buildOptions).catch((error) => process.exit(1));
