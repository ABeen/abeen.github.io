
// 创建
function order_add(productid) {
     var args = GetElementValue();
     var send = new CommSend();

     send.sendpost("/order/add", args, gomyorder);
}

// goto url
function gomyorder(data)
{
    if(data == "success")
    {
        document.location.href="/myorder";
    }
}

// 更新订单状态
function order_update(orderid, states)
{
    var send = new CommSend();
    var url = "/order/update/"+orderid+"?states="+states;
    send.sendget(url);
}


// 发货
function express()
{
    var args = GetElementValue();
    var send = new CommSend();

    send.sendpost("/express", args)
}

// 初始化事件
$(function() {
    // 注册
    $("#btn_orderadd").click(order_add);
    $("#btn_express").click(express);
});
