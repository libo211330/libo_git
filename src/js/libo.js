
var wait=function(url){
    var deffer= $.Deferred()
    $.ajax({
        url:url,
        success:function(rs){
            deffer.resolve(rs)
        }
    })

    return deffer.promise()
};
var fn1=wait("/index")
var fn2=wait("/demo")
var obj={}
fn1.then(function(data){
    obj.data1=data
    return fn2
}).then(function(data){
    obj.data2=data
    console.log(obj)
})