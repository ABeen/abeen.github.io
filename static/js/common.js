// 名称： 公用脚本库

//////////////////// Checkbox  ///////////////////////

// 得到　Checkbox　选中编号，用“，”隔开
function CheckboxGetSelId(checkBoxName)
{
	var str = [];
	var item = document.getElementsByName(checkBoxName);
	
	for (j = 0; j < item.length; j++)
	{
		if (item[j].checked)
		{
			str.push(item[j].id);
		}
	}
}

// 得到　Checkbox　选中编号，用“，”隔开
function CheckboxGetSelValue(checkBoxName)
{
	var str = [];
	var item = document.getElementsByName(checkBoxName);
	
	for (j = 0; j < item.length; j++)
	{
		if (item[j].checked)
		{
			str.push(item[j].value);
		}
	}
	return str;
}

// 得到　Checkbox true false　
function CheckboxGetIsSelectById(checkBoxid)
{
	var item = document.getElementById(checkBoxid);
	return item.checked;
}

// 设置　Checkbox 选中项
function CheckBoxSetCheckedByValues(values, checkBoxName)
{
    values = "," + values + ",";
    var item = document.getElementsByName(checkBoxName);
    
    for( j = 0; j < item.length; j++ )
       {
         if( values.indexOf( item[j].id ) > 0)
         { 
            item[j].checked = true;
         }
         else
         {
            item[j].checked = false;
         }
       }
}

// 设置　Checkbox 选中项
function CheckBoxSetCheckedByValue(value, checkBoxName)
{
    var item = document.getElementsByName(checkBoxName);
    
    for( j = 0; j < item.length; j++ )
       {
         if( item[j].id  == value)
         { 
            item[j].checked = true;
         }
         else
         {
            item[j].checked = false;
         }
       }
}

// CheckBox　全选
function  CheckBoxAllChecked(checkBoxName)
{
    var item = document.getElementsByName(checkBoxName);

	for (j = 0; j < item.length; j++)
	{
	    item[j].checked = true;
	}
}

// CheckBox　取消全选
function  CheckBoxCancelAllChecked(checkBoxName)
{
    var item = document.getElementsByName(checkBoxName);

	for (j = 0; j < item.length; j++)
	{
	    item[j].checked = false;
	}
}

//////////////////// Checkbox End  ///////////////////////

//////////////////// Radio  //////////////////////////////

// 设置 Radio 选中项
function RadioSetChecked(value, radioName)
{
	var item = document.getElementsByName(radioName);

	for (j = 0; j < item.length; j++)
	{
		if (item[j].value == value)
		{
			item[j].checked = true;
		}
		else
		{
			item[j].checked = false;
		}
	}
}

// 获取 Radio 的值　
function RadioGetValue(radioName)
{
    var item = document.getElementsByName(radioName);

	for (j = 0; j < item.length; j++)
	{
		if (item[j].checked == true)
		{
			return item[j].value;
		}
	}
}

//////////////////// Radio End ////////////////////////////

//////////////////// Select ///////////////////////////////

 // 设置 Select 选中项
function SelectSetChecked(value, selectName)
{
	var item = document.getElementById(selectName).options;

	for (j = 0; j < item.length; j++)
	{
		if (item[j].value == value)
		{
			item[j].selected = true;
		}
		else
		{
			item[j].selected = false;
		}
	}
}

 // 获取 Select 选中项
function SelectGetText(selectName)
{
	var item = document.getElementById(selectName).options;

	for (j = 0; j < item.length; j++)
	{
		if (item[j].selected == true)
		{
		   return item[j].text;
		}
	}
}

 // 获取 Select 选中项
function SelectGetValue(selectName)
{
	var item = document.getElementById(selectName).options;

	for (j = 0; j < item.length; j++)
	{
		if (item[j].selected == true)
		{
		   return item[j].value;
		}
	}
}

//////////////////// Select End /////////////////////////////

// 改变对象的背景色
function BackGroundColorSet(ob)
{
	if (ob == null)
	{
		return;
	}
	var liArr = document.getElementsByTagName(ob.tagName);

	// 清除原来选项背景色
	for (i = 0; i < liArr.length; i++)
	{
		if (liArr[i].style.backgroundColor.length > 0)
		{
			liArr[i].style.backgroundColor = "";
		}
	}
	//　当前选中项加背景色
	ob.style.backgroundColor = "#ced4ca";
}

function BackGroundColorSetAdmin(ob) {
    if (ob == null) {
        return;
    }
    var liArr = document.getElementsByTagName(ob.tagName);

    // 清除原来选项背景色
    for (i = 0; i < liArr.length; i++) {
        if (liArr[i].style.backgroundColor.length > 0) {
            liArr[i].style.backgroundColor = "";
        }
    }
    //　当前选中项加背景色
    ob.style.backgroundColor = "#ced4ca";
}



//设置Top背景颜色
function SetTopBackGroundColor(ob) {

    if (ob == null) {
        return;
    }
    var liArr = document.getElementsByTagName(ob.tagName);

    // 清除原来选项背景色
    for (i = 0; i < liArr.length; i++) {
        if (liArr[i].id == "link") {
            liArr[i].id = "";
        }
    }
    //　当前选中项加背景色
    ob.id = "link";
}


// 消除文本框内容
function TextBoxAllClear()
{
	var item = document.getElementsByTagName("input");

	for (j = 0; j < item.length; j++)
	{
	    if (item[j].type == "text" || item[j].type == "password")
		{
			item[j].value = "";
		}
	}
	
	var item = document.getElementsByTagName("textarea");
	
	for (j = 0; j < item.length; j++)
	{
		item[j].value = "";
	}
}


// 设置指定元素的内容，依据对象K ,V  
function SetValueByTagName(obj)
{
    var item = document.getElementsByTagName("input");
    for(i=0; i<item.length; i++)
    {
        if(item[i].type == "text" && item[i].name != "")
        {
            item[i].value = obj[item[i].name];
        }
    }

    var item = document.getElementsByTagName("textarea");
    for(i=0; i<item.length; i++)
    {
        if(item[i].type == "textarea" && item[i].name != "")
        {
            item[i].value = obj[item[i].name];
        }
    }

}


/* 获取指定元素下所有文本内容，返回对象
 * 1. 分类型进行数据提取：text  password  textarea radio 
 */
function GetElementValue(element_id)
{
	find_element = {};
	if(element_id)
	{
		find_element = document.getElementById(element_id);
	}else{
		find_element = document;
	}

    var result = {};
    var item = find_element.getElementsByTagName("input");
    for(i=0; i<item.length; i++)
    {
        if((item[i].type == "text" || item[i].type == "password" || item[i].type == "hidden") && item[i].name != "")
        {
            result[item[i].name] = item[i].value;
        }
        else if((item[i].type =="radio" || item[i].type=="select")  && item[i].name != "")
        {
            if(item[i].checked)
            {
                result[item[i].name] = item[i].value;
            }
        }
    }


    var item = find_element.getElementsByTagName("select");
    for(i=0; i<item.length; i++)
    {
        result[item[i].name] = item[i].value;
    }


    var item = find_element.getElementsByTagName("textarea");
    for(i=0; i<item.length; i++)
    {
        if(item[i].type == "textarea" && item[i].name != "")
        {
            result[item[i].name] = item[i].value;
            //result[item[i].name] = tinyMCE.get(item[i].name).getContent();
        }
    }
    return result;
}



// 替换 Div 内容
function DivHtmlReplase(sourceDivId,newDivId)
{
    document.getElementById(sourceDivId).innerHTML = document.getElementById(newDivId).innerHTML;
}

// 取 URL 参数
function   getUrlPra(parameter)
{
    var   reg,url,url2,iLen,iStart,iEnd;
    url   =   document.location.href;
    reg   =   new   RegExp(parameter);
    if(url.search(reg)   ==   -1)
    {
        return   " ";
    }
    else
    {
        iLen   =   parameter.length;
        iStart   =   url.search(reg)   +   iLen   +1;
        url2   =   url.substr(iStart);
        iEnd   =   iStart   +   url2.search(/&/i);
        if((iStart   -   1)   ==   iEnd)
        {
            return   url.substr(iStart);
        }
        else
        {
            return   url.substr(iStart,iEnd   -   iStart);
        }
    }
}


//删除确认
function ConfirmDelete() {
    return confirm("确定删除吗?");
}


//更新确认
function ConfirmUpdate() {
    return confirm("确定更新吗?");
}
