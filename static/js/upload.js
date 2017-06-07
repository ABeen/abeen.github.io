/**
* 上传图片文件
* @author Abeen
*/
function UploadFile(txtId) {
    var returnValue = window.showModalDialog("/upload", 0, "dialogWidth=450px;dialogHeight=150px");

    // 将图片插入到文本框中 
    if (returnValue != null) {
        $("#" + txtId).val(returnValue);
    }
}
