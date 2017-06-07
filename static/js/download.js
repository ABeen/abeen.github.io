/// Require jQuery.js、Library.js

/// 名称: 下载栏目及文章管理
function Download() {
    var prototype = this.constructor.prototype;
    if (!prototype.hasOwnProperty("_init_")) {
        prototype._init_ = true;

        // 创建栏目
        prototype.create = function(name, nameEn, templatGroupId, sortNum, slogan, sloganEn, desc, descEn, profileSection, profileSectionEn, logo, logoEn, titleImage, titleImageEn, titleImageLink, titleImageLinkEn, isNavigate, downLoadRole, callback) {

            $.post("/Download/DoCreateDownloadChannel",
				{            
				    name: name,
				    nameEn: nameEn,
				    templatGroupId: templatGroupId,
				    sortNum: sortNum,
				    slogan: slogan,
				    sloganEn: sloganEn,
				    desc: desc,
				    descEn: descEn,
				    profileSection: profileSection,
				    profileSectionEn: profileSectionEn,
				    logo: logo,
				    logoEn: logoEn,
				    titleImage: titleImage,
				    titleImageEn: titleImageEn,
				    titleImageLink: titleImageLink,
				    titleImageLinkEn: titleImageLinkEn,
				    isNavigate: isNavigate,
				    downLoadRole: downLoadRole
				},
				    function(data) {
				        if (data == "Success") {
				            alert("创建成功!");
				        }
				        else {
				            alert("创建失败!");
				        }
				        if (!isUndefinedOrNull(callback)) callback(data.Result);
				        if (data == "Success") TextBoxAllClear();
				    });
        };

        // 更新栏目
        prototype.update = function(channelId, name, nameEn, templateGroupId, sortNum, slogan, sloganEn, desc, descEn, profileSection, profileSectionEn, logo, logoEn, titleImage, titleImageEn, titleImageLink, titleImageLinkEn, isNavigate, downLoadRole, callback) {

        $.post("/Download/UpdateDownloadChannel",
				{
				    channelId : channelId,
				    name: name,
				    nameEn: nameEn,
				    templateGroupId: templateGroupId,
				    sortNum: sortNum,
				    slogan: slogan,
				    sloganEn: sloganEn,
				    desc: desc,
				    descEn: descEn,
				    profileSection: profileSection,
				    profileSectionEn: profileSectionEn,
				    logo: logo,
				    logoEn: logoEn,
				    titleImage: titleImage,
				    titleImageEn: titleImageEn,
				    titleImageLink: titleImageLink,
				    titleImageLinkEn: titleImageLinkEn,
				    isNavigate: isNavigate,
				    downLoadRole: downLoadRole
				 },
				    function(data) {
				        if (data == "Success") {
				            alert("更新成功!");
				        }
				        else {
				            alert("更新失败!");
				        }
				        if (!isUndefinedOrNull(callback)) callback(data.Result);
				    });
        };

        // 删除栏目
        prototype.deleteDownloadChannle = function(channelId, callback) {

        $.getJSON("/Download/DeleteDownloadChannel",
		            { channelId : channelId },
		                function(data) {
		                    if (data.Result == "Success") {
		                        alert("删除成功!");
		                    }
		                    else {
		                        alert("删除失败!");
		                    }
		                    if (!isUndefinedOrNull(callback)) callback(data.Result);
		                });
        };

        // 创建文章
        prototype.createFile = function(channelId, title, titleEn, shortTitle, shortTitleEn, sortNum, fontColor, isBold, smallImage, smallImageEn, keyWord, keyWordEn, author, authorEn, source, sourceEn, summary, summaryEn, fileType, fileLink, fileLinkEn, addOn, callback) {

            $.post("/Download/DoCreateDownloadFile",
		                {
		                    channelId: channelId,
		                    title: title,
		                    titleEn: titleEn,
		                    shortTitle: shortTitle,
		                    shortTitleEn: shortTitleEn,
		                    sortNum: sortNum,
		                    fontColor: fontColor,
		                    isBold: isBold,
		                    smallImage: smallImage,
		                    smallImageEn: smallImageEn,
		                    keyWord: keyWord,
		                    keyWordEn: keyWordEn,
		                    author: author,
		                    authorEn: authorEn,
		                    source: source,
		                    sourceEn: sourceEn,
		                    summary: summary,
		                    summaryEn: summaryEn,
		                    fileType: fileType,
		                    fileLink: fileLink,
		                    fileLinkEn: fileLinkEn,
		                    addOn: addOn
		                },
		                    function(data) {
		                        if (data == "Success") {
		                            alert("创建成功!");
		                            TextBoxAllClear();
		                            tinyMCE.get('TextArea1').setContent(" ");
		                            tinyMCE.get('txtSummaryEn').setContent(" ");
		                        }
		                        else {
		                            alert("创建失败!");
		                        }
		                        if (!isUndefinedOrNull(callback)) callback(data.Result);
	                            
		                    });
        };

        // 更新下载文章内容
        prototype.updateFile = function(id, channelId, title, titleEn, shortTitle, shortTitleEn, sortNum, fontColor, isBold, smallImage, smallImageEn, keyWord, keyWordEn, author, authorEn, source, sourceEn, summary, summaryEn, fileType, fileLink, fileLinkEn, addOn, callback) {

        $.post("/Download/UpdateDownloadFile",
			            { 
			                id : id,
			            	channelId : channelId,
		            　　    title : title,
		            　　    titleEn : titleEn,
		            　　    shortTitle : shortTitle,
		            　　    shortTitleEn : shortTitleEn,
		            　　    sortNum : sortNum,
		            　　    fontColor : fontColor,
		            　　    isBold : isBold,
		            　　    smallImage : smallImage,
		            　　    smallImageEn : smallImageEn,
		            　　    keyWord : keyWord,
		            　　    keyWordEn : keyWordEn,
		            　　    author : author,
		            　　    authorEn : authorEn,
		            　　    source : source,
		            　　    sourceEn : sourceEn,
		            　　    summary : summary,
		            　　    summaryEn : summaryEn,
		            　　    fileType : fileType,
		            　　    fileLink : fileLink,
		            　　    fileLinkEn : fileLinkEn,
		            　　    addOn : addOn 
			             },
			                function(data) {
			                    if (data == "Success") {
			                        alert("更新成功!");
			                    }
			                    else {
			                        alert("更新失败!");
			                    }
			                    if (!isUndefinedOrNull(callback)) callback(data.Result);
			                });
        };

        // 删除字典内容
        prototype.deleteFile = function(downloadFileId) {
        $.getJSON("/Download/DeleteDownloadFileById",
			            { downloadFileId: downloadFileId },
			                function(data) {
			                    if (data.Result == "Success") {
			                        alert("删除成功!");
			                    }
			                    else {
			                        alert("删除失败!");
			                    }
			                });
        };
    }
}