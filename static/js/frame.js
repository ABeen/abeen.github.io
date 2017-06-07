/// 名称： 套帧相关类

// 切换内容帧
function SetFrameContent(url)
{
   parent.document.getElementById("FrameContent").src =url;
}

// 切换左测列表和正文
function SetFrame(leftUrl,contentUrl)
{
   parent.document.getElementById("FrameLeft").src =leftUrl;
   parent.document.getElementById("FrameContent").src=contentUrl;
}
