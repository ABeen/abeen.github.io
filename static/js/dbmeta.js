// 创建
function CreateDBMeta(table) {
     var args = GetElementValue();
     var send = new CommSend();
     send.sendpost("/admin/dbmetacreate/"+table+"/", args);
}

// 更新
function UpdateDBMeta(table, _id) {
     var args = GetElementValue();
     var send = new CommSend();
     send.sendpost("/admin/dbmetaupdate/"+table+"/"+_id+"/", args);
}

// 删除
function DBMetaDelete(table, _id){
    if(ConfirmDelete()){
        var send = new CommSend();
        send.sendpost("/admin/dbmetadelete/"+table+"/"+_id+"/");
    }
}


// 查找
function DBMetaFind(table, page_index){
    var args = GetElementValue();
	var url = "";
	for(var i in args)
		url += i+"="+args[i]+"&";
	url = url.substr(0, url.length-1);
	url = encodeUrl(url);
	url = "/admin/dbmetafind/"+table+"/"+page_index+"?"+url;
	window.location.href=url;
}



// 批量
function UpdateMoreDBMeta(table) {
	if(ConfirmUpdate()){
		var conn_kv = GetElementValue("div_conn");
		var set_kv = GetElementValue("div_set");
		var select_idlist  = CheckboxGetSelValue("check_id");
		var is_all_update = CheckboxGetIsSelectById("check_is_all_update");

		var args = {"conn_kv": JSON.stringify(conn_kv), 
					"set_kv": JSON.stringify(set_kv), 
					"select_idlist": JSON.stringify(select_idlist), 
					"is_all_update": is_all_update};

		if(args){
			var send = new CommSend();
			send.sendpost("/admin/dbmetamoreupdate/"+table, args);
		}
	}
}



// 初始化事件
$(function() {
    // 创建事件
});
