const gulp=require("gulp");
const concat=require("gulp-concat");//合并
const rename=require("gulp-rename");//改名
const zcss=require("gulp-minify-css");//压缩css
const sass=require("gulp-sass");//压缩scss
const browserify=require("gulp-browserify");// 模块化打包
const gulpUglify=require("gulp-uglify");//压缩js
const webserver=require("gulp-webserver");//开服务
const images=require("gulp-imagemin");//图片压缩
const rev=require("gulp-rev");// DW5加密。版本控制 修改未见文件后缀名
const url=require("url");//获取地址
const collector=require("gulp-rev-collector");//改变路径
const datajson=require("./data/main.js");//引入main.js

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

//DW5加密。版本控制 修改未见文件后缀名
gulp.task("rev",function(){
    gulp.src("src/css/*.css")
        .pipe(rev())
        .pipe(gulp.dest('build/css'))
        .pipe(rev.manifest())  //生成jaon文件
        .pipe(gulp.dest('rev/css'))
});

//压缩css
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
//路径替换
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
