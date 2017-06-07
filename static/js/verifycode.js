
/// 名称: 显示验证码
/// 示例: new VerifyCode().showRegisterCode("#span1");
function VerifyCode()
{
	var prototype = this.constructor.prototype;
	if (!prototype.hasOwnProperty("_init_"))
	{
		prototype._init_ = true;

		var show = function(spanId, codeId)
		{
			if ($("#imgVerifyCode").length > 0) return;

			var element = $("<img width='80px' height='22px' />");
			element.attr({ id: "imgVerifyCode", src: "/Misc/VerifyCode/" + codeId, alt: "点击更换验证码!" });
			element.click(function() { this.src += "?"; });

			if (!startWith(spanId, "#")) spanId = "#" + spanId;
			$(spanId).prepend(element);
		};

		// 显示注册验证码
		prototype.showRegisterCode = function(spanId)
		{
			show(spanId, "Register");
		}

		// 显示登录验证码
		prototype.showLoginCode = function(spanId)
		{
			show(spanId, "Login");
		}

		// 显示找回密码验证码
		prototype.showFindPasswordCode = function(spanId)
		{
			show(spanId, "FindPassword");
		}
		
        
        // 显示提问验证码
		prototype.showCreateQuestionCode = function(spanId)
		{
			show(spanId, "CreateQuestion");
		}
		
		// 显示文章评论验证码
		prototype.showArchiveCommentCode = function(spanId)
		{
			show(spanId, "ArchiveComment");
        }
        // 显示留言提交验证码
        prototype.showMessageCode = function(spanId) {
            show(spanId, "Message");
        }
		
	}
}