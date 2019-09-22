// 只会加载1次
main();
function main(){
	set_properties_callback('en');
	set_properties('zh');
}

/* // 可能会加载多次
$(document).ready(function(){
	alert("在ready(function())中，设置i18n.properties导致index.js文件重复加载");
	set_properties('en');
}); */

function set_properties_callback(local) { 
    $.i18n.properties({
        name: 'messages', // 资源文件名称  
        path: './js/language/', // 资源文件所在目录路径  
        mode: 'map', // Map的方式使用资源文件中的Key  
        language: local, // 设置的语言  
        cache: false,  
        encoding: 'UTF-8', 
        callback: function () { // 回调方法  
			alert("回调函数中："+$.i18n.prop('msg_hello'));
        }  
    });
}

function set_properties(local) {
    $.i18n.properties({  
        name: 'messages', // 资源文件名称  
        path: './js/language/', // 资源文件所在目录路径  
        mode: 'map', // Map的方式使用资源文件中的Key  
        language: local, // 设置的语言  
        cache: false,  
        encoding: 'UTF-8'
    });
	alert("不在回调函数中："+$.i18n.prop('msg_hello'));
}