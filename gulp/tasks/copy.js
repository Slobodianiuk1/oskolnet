export const copy = () => {
	return app.gulp.src(app.path.srs.images)
		.pipe(app.gulp.dest(app.path.build.images));
}