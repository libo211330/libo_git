/**
 * Created by dell on 2017/5/10.
 */
const Mock=require("mockjs");
exports.data=function(){
    return[
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
        }

    ]
}