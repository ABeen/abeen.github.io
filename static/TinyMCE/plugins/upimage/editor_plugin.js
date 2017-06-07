/**
 * $Id: editor_plugin_src.js 677 2008-03-07 13:52:41Z spocke $
 *
 * @author Moxiecode
 * @copyright Copyright ?2004-2008, Moxiecode Systems AB, All rights reserved.
 */

(function() {
    tinymce.create('tinymce.plugins.AdvancedImagePlugin', {
        init: function(ed, url) {

            // Register commands
            ed.addCommand('mceAdvImage', function() {
                // Internal image object like a flash placeholder
                if (ed.dom.getAttrib(ed.selection.getNode(), 'class').indexOf('mceItem') != -1)
                    return;

                var returnValue = window.showModalDialog("/upload", 0, "dialogWidth=450px;dialogHeight=150px");
                
                // 将图片插入到文本框中 
                InsertImageToTextArea(returnValue);

            });

            // Register buttons
            ed.addButton('upimage', {
                title: 'advimage.image_desc',
                cmd: 'mceAdvImage',
                image: '/static/TinyMCE/Plugins/upimage/img/insertimage.gif'
            });

        }
    });

    // Register plugin
    tinymce.PluginManager.add('upimage', tinymce.plugins.AdvancedImagePlugin);
})();


// 将图片插入到文本框中           
function InsertImageToTextArea(returnValue)
{
    if(returnValue != null)
    {
        returnValue = tinyMCE.get('content').getContent() + "<img src='"+ returnValue +"' border='0' width=200px height=200px />";

        tinyMCE.get('content').setContent(returnValue);
    }
}
