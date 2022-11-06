import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/img/`,

	},
	srs: {
		js: `${srcFolder}/js/**/*.*`,
		scss: `${srcFolder}/sass/style.scss`,
		html: `${srcFolder}/*.html`,
		images: `${srcFolder}/img/**/*.*`,
	},
	watch: {
		js: `${srcFolder}/js/**/*.*`,
		scss: `${srcFolder}/sass/**/*.scss`,
		html: `${srcFolder}/**/*.html`,
		images: `${srcFolder}/img/**/*.*`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
}