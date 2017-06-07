
// 创建下载栏目
function CreateDownloadChannel() {

    var validate = new Validate().validate(
		    {
		        txtName: { min: 1, message: "名称不能为空!" }
		    });

    if (validate) {
        var name = $.trim($("#txtName").val());
        var nameEn = $.trim($("#txtNameEn").val());
        var sortNum = parseInt($.trim($("#txtSortNum").val()));
        var isNavigate = document.getElementById("cheIsNavigation").checked;
        var downLoadRole = RadioGetValue("radDownloadRole");

        var down = new Download();
        down.create(name, nameEn, 0, sortNum, "", "", "", "", "", "", "", "", "", "", "", "", isNavigate, downLoadRole);
    };
}

//　更新下载栏目
function UpdateDownloadChannel() {

    var validate = new Validate().validate(
		    {
		        txtId : { min: 1, message: "编号不能为空!" },
		        txtName : { min: 1, message: "名称不能为空!" }
		    });

	if (validate) {
	
		var channelId = $.trim($("#txtId").val());
		var name = $.trim($("#txtName").val());
		var nameEn = $.trim($("#txtNameEn").val());
		var sortNum = parseInt($.trim($("#txtSortNum").val()));
		var isNavigate = document.getElementById("cheIsNavigation").checked;
		var downLoadRole = RadioGetValue("radDownloadRole");

        var down = new Download();
        down.update(channelId, name, nameEn, 0, sortNum, "", "", "", "", "", "", "", "", "", "", "", "", isNavigate, downLoadRole);
    };
}

// 删除下载栏目
function DeleteDownloadChannel(channelId) {
    if (!ConfirmDelete()) {
        return;
    }

    var down = new Download();
    down.deleteDownloadChannle(channelId);
}

// 创建下载文章
function CreateDownloadFile() {

    var title = $.trim($("#txtTitle").val());
    var titleEn = $.trim($("#txtTitleEn").val());

    if (title.length <= 0 && titleEn.length <= 0) {
        alert("标题或英文标题不能为空!");
    }
    else {
        var channelId = $.trim($("#selDownloadChannel").val());
        var title = $.trim($("#txtTitle").val());
        var titleEn = $.trim($("#txtTitleEn").val());
        var shortTitle = $.trim($("#txtShortTitle").val());
        var shortTitleEn = $.trim($("#txtShortTitleEn").val());
        var sortNum = $.trim($("#txtSortNum").val());
        var fontColor = $.trim($("#txtFontColor").val());
        var isBold = document.getElementById("IsBold").checked;
        var smallImage = $.trim($("#txtSmallImage").val());
        var smallImageEn = $.trim($("#txtSmallImageEn").val());
        var keyWord = $.trim($("#txtKeyWord").val());
        var keyWordEn = $.trim($("#txtKeyWordEn").val());
        var author = $.trim($("#txtAuthor").val());
        var authorEn = $.trim($("#txtAuthorEn").val());
        var source = $.trim($("#txtSource").val());
        var sourceEn = $.trim($("#txtSourceEn").val());
        //var summary = $.trim($("#txtSummary").val());
        var summary = tinyMCE.get('TextArea1').getContent();
        //var summaryEn = $.trim($("#txtSummaryEn").val());
        var summaryEn = tinyMCE.get('txtSummaryEn').getContent();
        var fileType = $.trim($("#txtFileType").val());
        var fileLink = $.trim($("#txtContent").val());
        var fileLinkEn = $.trim($("#txtFileLinkEn").val());
        var addOn = $.trim($("#txtAddOn").val());

        var down = new Download();
        down.createFile(channelId, title, titleEn, shortTitle, shortTitleEn, sortNum, fontColor, isBold, smallImage, smallImageEn, keyWord, keyWordEn, author, authorEn, source, sourceEn, summary, summaryEn, fileType, fileLink, fileLinkEn, addOn);
    };
}

// 更新下载文章
function UpdateDownloadFile() {

    var validate = new Validate().validate(
		    {
		        txtId : {min : 1, message: "编号不能为空!"},
		        txtTitle: { min: 1, message: "标题不能为空!" }
		    });

	if (validate) {
    
		var fileId = $.trim($("#txtId").val());
        var channelId = $.trim($("#selDownloadChannel").val());
        var title = $.trim($("#txtTitle").val());
        var titleEn = $.trim($("#txtTitleEn").val());
        var shortTitle = $.trim($("#txtShortTitle").val());
        var shortTitleEn = $.trim($("#txtShortTitleEn").val());
        var sortNum = $.trim($("#txtSortNum").val());
        var fontColor = $.trim($("#txtFontColor").val());
        var isBold = document.getElementById("IsBold").checked;
        var smallImage = $.trim($("#txtSmallImage").val());
        var smallImageEn = $.trim($("#txtSmallImageEn").val());
        var keyWord = $.trim($("#txtKeyWord").val());
        var keyWordEn = $.trim($("#txtKeyWordEn").val());
        var author = $.trim($("#txtAuthor").val());
        var authorEn = $.trim($("#txtAuthorEn").val());
        var source = $.trim($("#txtSource").val());
        var sourceEn = $.trim($("#txtSourceEn").val());
        //var summary = $.trim($("#txtSummary").val());
        var summary = tinyMCE.get('TextArea1').getContent();
        //var summaryEn = $.trim($("#txtSummaryEn").val());
        var summaryEn = tinyMCE.get('txtSummaryEn').getContent();
        var fileType = $.trim($("#txtFileType").val());
        var fileLink = $.trim($("#txtContent").val());
        var fileLinkEn = $.trim($("#txtFileLinkEn").val());
        var addOn = $.trim($("#txtAddOn").val());

        var down = new Download();
        down.updateFile(fileId, channelId, title, titleEn, shortTitle, shortTitleEn, sortNum, fontColor, isBold, smallImage, smallImageEn, keyWord, keyWordEn, author, authorEn, source, sourceEn, summary, summaryEn, fileType, fileLink, fileLinkEn, addOn);
        
    };
}

// 文章查询，依据栏目编号
function ArchiveQueryByChannelId() {
    var channelId = $.trim($("#selDownloadChannel").val());

    $("#divResult").load("/Download/FileListByChannelId", { id: channelId, pageIndex: 1 });

}

// 分页文章查询
function ArchiveQueryByChannelIdPage(channelId, pageIndex) {

    $("#divResult").load("/Download/FileListByChannelId", { id: channelId, pageIndex: pageIndex });

}

// 删除下载文章
function DeleteDownloadFile(fileId) {
    if (!ConfirmDelete()) {
        return;
    }

    var down = new Download();
    down.deleteFile(fileId);
}

// 初始化事件
$(function() {
    // 创建事件
    $("#btnCreateDownloadChannel").click(CreateDownloadChannel);
    // 更新事件
    $("#btnUpdateDownloadChannel").click(UpdateDownloadChannel);
    // 创建下载文章事件
    $("#btnCreateDownloadFile").click(CreateDownloadFile);
    // 更新下载文章事件
    $("#btnUpdateDownloadFile").click(UpdateDownloadFile);
    
    // 查询事件
    $("#btnQuery").click(ArchiveQueryByChannelId);
    
});