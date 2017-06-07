
// 创建
function passport_login() {
     var validate = new Validate().validate({
            loginname: { min: 1, max: 20, message: "用户名不能为空,长度在3~20之间!" },
            password: { min: 2, max: 20, message: "密码不能为空，且6~20位之间!"}
            });

     if(validate)
     {
         var args = GetElementValue();
         var send = new CommSend();
         send.sendget("/dologin", args);
     }
}

// 注册
function passport_register() {
     var args = GetElementValue();
     var send = new CommSend();
     send.sendpost("/register", args, goadmin);
}

function goadmin(data)
{
    if(data == "success")
    {
        document.location.href="/myorder";
    }
}

// 初始化事件
$(function() {
    // 注册
    $("#btnLogin").click(passport_login);
    $("#btnRegister").click(passport_register);
});
