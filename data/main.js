/**
 * Created by dell on 2017/5/10.
 */
const Mock=require("mockjs");
exports.data=function(){
    return[
<<<<<<< HEAD
        //{
        //    route:'/index',
        //    handle:function(req,res,next){
        //        //req����ͷ
        //        //res ��Ӧ������
        //        //res����ͷ��ģ��ĺ�̨���ݷ��ظ����������������ͷ��û��ͷ�Ļ����ݳ�������
        //        res.writeHead(200,{
        //            "Content-type":"application/json;charset=UTF-8",
        //            "Access-Control-Allow-Origin":"*"//��������������������
        //        })
        //        var Random=Mock.Random;
        //        Random.integer();
        //        Random.string("lower",4);
        //        Random.data=("yyy-MM-dd");
        //        var data=Mock.mock({
        //            "menuList|6":[{
        //                "menuNav":"@string()",
        //                "menuNavContent|1-5":[{
        //                    "url":"index.html",
        //                    "name":'@string("lower",4)',
        //                    "id":"@integer(0,10)"
        //                }]
        //            }]
        //        });
        //        res.write(JSON.stringify(data))
        //        res.end();
        //    }
        //},
=======
        {
            route:'/index',
            handle:function(req,res,next){
                //req����ͷ
                //res ��Ӧ������
                //res����ͷ��ģ��ĺ�̨���ݷ��ظ����������������ͷ��û��ͷ�Ļ����ݳ�������
                res.writeHead(200,{
                    "Content-type":"application/json;charset=UTF-8",
                    "Access-Control-Allow-Origin":"*"//��������������������
                })
                var Random=Mock.Random;
                Random.integer();
                Random.string("lower",4);
                Random.data=("yyy-MM-dd");
                var data=Mock.mock({
                    "menuList|6":[{
                        "menuNav":"@string()",
                        "menuNavContent|1-5":[{
                            "url":"index.html",
                            "name":'@string("lower",4)',
                            "id":"@integer(0,10)"
                        }]
                    }]
                });
                res.write(JSON.stringify(data))
                res.end();
            }
        },
>>>>>>> 27f76e04705ef139d60d54b996f9a0d53a09a305
        {
            route:'/demo',
            handle:function(req,res,next){
                //req����ͷ
                //res ��Ӧ������
                //res����ͷ��ģ��ĺ�̨���ݷ��ظ����������������ͷ��û��ͷ�Ļ����ݳ�������
                res.writeHead(200,{
                    "Content-type":"application/json;charset=UTF-8",
                    "Access-Control-Allow-Origin":"*"//��������������������
                })
<<<<<<< HEAD

                var data=[
                    {
                        "ids":12,
                        "name":"mini1",
                        "money":1350
                    },
                    {
                        "ids":22,
                        "name":"mini5",
                        "money":1699
                    },
                    {
                        "ids":36,
                        "name":"mini4",
                        "money":1550
                    },
                    {
                        "ids":3,
                        "name":"mini6puls",
                        "money":1999
                    },
                    {
                        "ids":11,
                        "name":"mini2",
                        "money":669
                    },
                    {
                        "ids":16,
                        "name":"mini3",
                        "money":899
                    }
                ]
                //var Random=Mock.Random;
                //Random.integer();
                //Random.string("lower",4);
                //Random.data=("yyy-MM-dd");
                //var data=Mock.mock({
                //    "menuList|6":[{
                //        "menuNav":"@string()",
                //        "menuNavContent|1-5":[{
                //            "url":"index.html",
                //            "name":'@string("lower",4)',
                //            "id":"@integer(0,10)"
                //        }]
                //    }]
                //});
=======
                var Random=Mock.Random;
                Random.integer();
                Random.string("lower",4);
                Random.data=("yyy-MM-dd");
                var data=Mock.mock({
                    "menuList|6":[{
                        "menuNav":"@string()",
                        "menuNavContent|1-5":[{
                            "url":"index.html",
                            "name":'@string("lower",4)',
                            "id":"@integer(0,10)"
                        }]
                    }]
                });
>>>>>>> 27f76e04705ef139d60d54b996f9a0d53a09a305
                res.write(JSON.stringify(data))
                res.end();
            }
        }

    ]
}