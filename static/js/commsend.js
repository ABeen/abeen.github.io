/// Require jQuery.js、Library.js

/// 名称: 通用数据操作类
function CommSend() {
    var prototype = this.constructor.prototype;
    if (!prototype.hasOwnProperty("_init_")) {
        prototype._init_ = true;

        /* 提交post请求
           argurl : 请求地址
           args   : 请求参数
        */
        prototype.sendpost = function(argurl, args, callback) {
            $.post(argurl,args,
				    function(data) {
				        if (data == "success") {
				            alert("操作成功!");
                            if(callback){callback(data);}}
                        else{
                          alert("操作失败!  " + data)};
				    });
        };



        /* 提交 get 请求
        *  argurl : 请求地址
        *  f      : 回调方法
        */
        prototype.sendget = function(argurl, args, callback){
           $.getJSON(argurl,args,
                   function(data){
                        if(data.result == "success" && data.url)
                        {document.location.href = data.url;}
                   }
                   );
        };




    }
}
