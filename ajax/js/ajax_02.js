//由于参数太多，而函数传参数要按顺序，所以我们吧参数整合成一个，用一个对象来表示
/**
 * [ajax description]
 * @param  {[type]} option [包含url ,type, data,success()]
 * @return {[type]}        [description]
 */
function ajax(option){
	var xhr = new XMLHttpRequest();
	if(option.type=='get'&&option.data){
		option.url += '?';
		option.url += option.data;
	}
	xhr.open(option.type, option.url);
	if(option.type=='post' && option.data){
		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
	}
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			var type = xhr.getResponseHeader('content-type');
			if(type.indexOf('json') != -1){
				option.success(xhr.responseText);
			}else if (type.indexOf('xml') != -1) {
				option.success(xhr.responseXML);
			}
		}
	}
	xhr.send(option.data);
}