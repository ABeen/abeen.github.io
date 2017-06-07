
/// JavaScript Function Library
/// Freeware

// ---------------- Const ------------------------------------------

var emptyString = ""; 
var newLine = "\r\n";

// ----------------- Function ------------------------------------

/// 名称: 格式化输出
/// 说明: 1. 属性名称区分大小写; 2. 没有匹配到到属性输出原始字符串。
/// 示例: stringFormat("#1 Name:#Name, Age:#Age", {Name:"zhangsan", Age:23 })
function stringFormat(format, value)
{
	var regex = /#\w+/gi;

	return format.replace(regex, function(match)
	{
		var name = match.substring(1);
		return value.hasOwnProperty(name) ? value[name] : match;
	});
}

/// 名称: 判断对象是否为空
function isUndefinedOrNull(o)
{
	return o == undefined || o == null;
}

/// 名称: 判断字符串是否为空
function isNullOrEmpty(s)
{
	return s == undefined || s == null || s.length == 0;
}

/// 名称: 转换空字符串
function nullToEmpty(s)
{
	return isNullOrEmpty(s) ? emptyString : trim(s);
}

/// 名称: 删除首尾空格
function trim(s)
{
	if (isNullOrEmpty(s)) return s;
	return s.replace(/(^[\s]*)|([\s]*$)/g, emptyString);
}

/// 名称: 判断是否以子串开头
function startWith(s, sub)
{
	if (s == sub) return true;
	if (s.length < sub.length) return false;
	
	return s.slice(0, sub.length) == sub;
}

/// 名称: 判断是否以子串结尾
function endWith(s, sub)
{
	if (s == sub) return true;
	if (s.length < sub.length) return false;
	
	return s.slice(0 - sub.length) == sub;
}

// ------------------ Debug --------------------------------------------

/// 名称: 显示 JSON 对象内容
function viewJson(o)
{
	var sb = new StringBuilder();
	for (var name in o)
	{
		sb.append(name).append(" : ").appendLine(o[name]);
	}
	
	alert(sb.toString());
}

// --------------------- UI ------------------------------------------------

/// 名称: 获取元素位置
function getOffset(elementId) 
{  
	var element = document.getElementById(elementId);
	var top = element.offsetTop;  
	var left = element.offsetLeft;  
	
	while(element = element.offsetParent) 
	{  
		top += element.offsetTop;  
		left += element.offsetLeft;  
	}  

	return {Left: left, Top: top};
} 

/// 名称: 滚动到某元素
function viewElement(elementId)
{
	var offset = getOffset(elementId);
	scrollTo(offset.Left, offset.Top);
}

/// 名称: 添加到收藏夹
function addBookmark(title, url) 
{
	if ((typeof window.sidebar == 'object') && (typeof window.sidebar.addPanel == 'function')) // Gecko/Firefox
	{
		window.sidebar.addPanel(title, url, "");
	}
	else // IE
	{
		window.external.AddFavorite(url, title);
	}
}   
	
// ------------------------- Url ------------------------------------------

/// 名称: 分解URL请求参数
function getRequest(href)
{
	if (isUndefinedOrNull(href) || isNullOrEmpty(href)) href = location.href;
	
	var regex = /(\w+)=([^&]+)/gi;
	var href = decodeURI(href);
	var ms = href.match(regex);
	
	var result = new HashTable();
	if (ms == null) return result;
	
	for(var i = 0; i < ms.length; i++)
	{
		var ns = ms[i].match(regex);
		result.add([RegExp.$1], RegExp.$2);
	}
	
	return result;
}

/// 名称: 对链接进行 UTF-8 编码
function encodeUrl(href)
{
	if (isUndefinedOrNull(href) || isNullOrEmpty(href)) return href;

	var index = href.indexOf("?");
	if (index < 0) return href;

	var sb = new StringBuilder();
	sb.append(href.substring(0, index + 1));

	var params = getRequest(href);
	var keys = params.keys();
	for (var i = 0; i < keys.length; i++)
	{
		var key = keys[i];
		
		if (i > 0) sb.append("&");
		sb.append(key);
		sb.append("=");
		sb.append(encodeURIComponent(params.get(key)));
	}
	
	return sb.toString();
}

// ------------------------------ Class -------------------------------------

/// 名称: 表单简单验证
/// 示例:
/// new Validate().validate(
/// {
/// 	txtUsername:{message:"用户名不能为空, 长度在 6~20 之间!"},
/// 	
/// 	txtPassword:{min:6, max:20, message:"密码不能为空, 长度在 6~20 之间!" },
/// 	txtRePassword:{equals:"txtPassword", message:"内容不相同!" }
/// 	
/// 	txtAge:{type:"Int", min:10, max:100, message:"年龄必须在 10~100 之间!" }
/// 	txtPrice:{type:"Float", min:10.5, max:11.7, message:"价格必须在 10.5~11.7 之间!" }
/// 	txtEmail:{type:"Email", message:"电子邮件格式错误!" }
/// 	txtUrl:{type:"Url", message:"链接格式错误!" }
/// 	txtDate:{type:"DateTime", message:"日期格式错误!" }
/// });
function Validate()
{
	var prototype = this.constructor.prototype;
	if (!prototype.hasOwnProperty("_init_"))
	{
		prototype._init_ = true;

		prototype.isInt = function(value, format)
		{
			if (!/^([\-\+]?)(\d+)$/.test(value)) return false;
			
			var i = parseInt(value);
			if (format.hasOwnProperty("min"))
			{
				if (i < format.min) return false;
			}
			
			if (format.hasOwnProperty("max"))
			{
				if (i > format.max) return false;
			}
			
			return true;
		};
		
		prototype.isFloat = function(value, format)
		{
			if (!/^([\+\-]?((([0-9]+(\.)?)|([0-9]*\.[0-9]+))([eE][+-]?[0-9]+)?))$/.test(value)) return false;
			
			var f = parseFloat(value);
			if (format.hasOwnProperty("min"))
			{
				if (f < format.min) return false;
			}
			
			if (format.hasOwnProperty("max"))
			{
				if (f > format.max) return false;
			}
			
			return true;
		};
		
		prototype.isEmail = function(value, format)
		{
			return /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(value);
		};
		
		prototype.isDateTime = function(value, format)
		{
			return /^(?=\d)(?:(?!(?:1582(?:\.|-|\/)10(?:\.|-|\/)(?:0?[5-9]|1[0-4]))|(?:1752(?:\.|-|\/)0?9(?:\.|-|\/)(?:0?[3-9]|1[0-3])))(?=(?:(?!000[04]|(?:(?:1[^0-6]|[2468][^048]|[3579][^26])00))(?:(?:\d\d)(?:[02468][048]|[13579][26]))\D0?2\D29)|(?:\d{4}\D(?!(?:0?[2469]|11)\D31)(?!0?2(?:\.|-|\/)(?:29|30))))(\d{4})([-\/.])(0?\d|1[012])\2((?!00)[012]?\d|3[01])(?:$|(?=\x20\d)\x20))?((?:(?:0?[1-9]|1[012])(?::[0-5]\d){0,2}(?:\x20[aApP][mM]))|(?:[01]\d|2[0-3])(?::[0-5]\d){1,2})?$/.test(value);
		};
		
		prototype.isUrl = function(value, format)
		{
			return /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(value);
		}
		
		prototype.isString = function(value, format)
		{
			if (format.hasOwnProperty("min"))
			{
				if (value.length < format.min) return false;
			}
			
			if (format.hasOwnProperty("max"))
			{
				if (value.length > format.max) return false;
			}
			
			if (format.hasOwnProperty("equals"))
			{
				var sourceElement = document.getElementById(format.equals);
				if (sourceElement == null) return false;
				
				var value2 = trim(sourceElement.value);
				sourceElement.value = value2;
				
				if (isNullOrEmpty(value2)) return false;
				if (value != value2) return false;
			}
			
			return true;
		};
		
		prototype.validate = function(json)
		{
			for(var id in json)
			{
				var element = document.getElementById(id);
				if (element == null) 
				{
					alert("Error: Id \"" + id + "\" not found!");
					return false;
				}
				
				var format = json[id];
				var value = trim(element.value);
				element.value = value;
				
				// ----
				
				var result = false;
				if (!isNullOrEmpty(value))
				{
					if (!format.hasOwnProperty("type")) format.type = "string";
					switch (format.type.toLowerCase())
					{
						case "url":
							result = this.isUrl(value); break;
						case "email":
							result = this.isEmail(value); break;
						case "datetime":
							result = this.isDateTime(value); break;
						case "int":
							result = this.isInt(value, format); break;
						case "float":
							result = this.isFloat(value, format); break;
						default:
							result = this.isString(value, format); break;
					}
				}
				
				if (!result) 
				{
					element.focus();
					if (format.hasOwnProperty("message")) alert(format.message);
					return result;	
				}
			}
			
			return true;
		};
	}
}


/// 名称: StringBuilder
/// 示例: new StringBuilder().append("a").append(["b", "c"]).appendFormat("Name:#Name", {Name:"Tom"});
function StringBuilder()
{
	this._array = new Array();
	
	var prototype = this.constructor.prototype;
	if (!prototype.hasOwnProperty("_init_"))
	{
		prototype._init_ = true;

		prototype.append = function(s)
		{
			if (s instanceof Array)
			{
				for (var i = 0; i < s.length; i++)
				{
					this._array.push(s[i]);
				}
			}
			else
				this._array.push(s);
				
			return this;
		};
		
		prototype.appendLine = function(s)
		{
			if (s instanceof Array)
			{
				for (var i = 0; i < s.length; i++)
				{
					this._array.push(s[i]);
					this._array.push(newLine);
				}
			}
			else
			{
				this._array.push(s);
				this._array.push(newLine);
			}
				
			return this;
		};
		
		prototype.appendFormat = function(format, value)
		{
			this._array.push(stringFormat(format, value));
			return this;
		};
		
		prototype.toString = function()
		{
			return this._array.join(emptyString);
		};
	}
}

/// 名称: 哈希表
/// 说明: 1. Key 不区分大小写;
function HashTable()
{
	this._hash = {};
	
	var prototype = this.constructor.prototype;
	if (!prototype.hasOwnProperty("_init_"))
	{
		prototype._init_ = true;

		prototype._correctKey = function(key)
		{
			return key.toString().toLowerCase();
		};
		
		prototype.add = function(key, value)
		{
			this._hash[this._correctKey(key)] = value;
		};
		
		prototype.remove = function(key)
		{
			var k = this._correctKey(key);
			if (this._hash.hasOwnProperty(k)) 
				delete this._hash[k];
		};
		
		prototype.get = function(key)
		{
			var k = this._correctKey(key);
			return this._hash.hasOwnProperty(k) ? this._hash[k] : null;
		};
		
		prototype.set = function(key, value)
		{
			this.add(key, value);
		};
		
		prototype.keys = function()
		{
			var arr = [];
			for (var name in this._hash)
			{
				arr.push(name);
			}
			
			return arr;
		};
		
		prototype.clear = function()
		{
			this._hash = {};
		};
		
		prototype.contains = function(key)
		{
			return this._hash.hasOwnProperty(this._correctKey(key));
		};
		
		prototype.count = function()
		{
			return this.keys().length;
		};
	}
}
