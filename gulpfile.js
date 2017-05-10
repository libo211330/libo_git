const gulp=require("gulp");
const concat=require("gulp-concat");//�ϲ�
const rename=require("gulp-rename");//����
const zcss=require("gulp-minify-css");//ѹ��css
const sass=require("gulp-sass");//ѹ��scss
const browserify=require("gulp-browserify");// ģ�黯���
const gulpUglify=require("gulp-uglify");//ѹ��js
const webserver=require("gulp-webserver");//������
const images=require("gulp-imagemin");//ͼƬѹ��
const rev=require("gulp-rev");// DW5���ܡ��汾���� �޸�δ���ļ���׺��
const url=require("url");//��ȡ��ַ
const collector=require("gulp-rev-collector");//�ı�·��
const datajson=require("./data/main.js");//����main.js

gulp.task("concat",function(){
    gulp.src("src/js/*.js")
        .pipe(gulpUglify())
        .pipe(concat("cancat.js"))
        .pipe(browserify({
            insertGlobals : true,
            debug : !gulp.env.production
        }))
        .pipe(rev())
        .pipe(gulp.dest("build/js"))
        .pipe(rev.manifest())
        .pipe(gulp.dest("rev/js"))
});

//DW5���ܡ��汾���� �޸�δ���ļ���׺��
gulp.task("rev",function(){
    gulp.src("src/css/*.css")
        .pipe(rev())
        .pipe(gulp.dest('build/css'))
        .pipe(rev.manifest())  //����jaon�ļ�
        .pipe(gulp.dest('rev/css'))
});

//ѹ��css
gulp.task("zipcss",function(){
    gulp.src("src/css/*.css")
        .pipe(sass())
        .pipe(zcss())
        .pipe(gulp.dest("build/css"))
});
//clone index
gulp.task("index",function(){
    gulp.src("src/html/*.html")
        .pipe(gulp.dest("build/html"))
});


gulp.task("webserver",["build"],function(){
    gulp.watch("src/css/*.sass",["zipcss"])
    gulp.watch("src/html/*.html",["index"])
    gulp.src("./build")
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            port:8088,
            middleware:function(res,req,next){
                const reqPath=url.parse(res.url).pathname
                const routes=datajson.data()
                routes.forEach(function(i){
                    console.log(i.route)
                    console.log(reqPath)
                    if(i.route==reqPath){
                        i.handle(res,req,next)
                    }
                })
                next()
            },
            open: "/html/index.html"
        }))
})
//·���滻
gulp.task("htmlrev",function() {
    gulp.src(["rev/**/*.json","src/html/*.html"])
        .pipe(collector({
            replaceReved:true,
            dirReplacements:{
                "css":"css",
                "js":"js"
            }
        }))
        .pipe(gulp.dest("build/html"))

})
gulp.task("build",["concat","rev","htmlrev"]);
