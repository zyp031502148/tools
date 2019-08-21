//由于参数太多，而函数传参数要按顺序，所以我们吧参数整合成一个，用一个对象来表示
/**
 * [ajax description]
 * @param  {[type]} option [包含url ,type, data,success()]
 * @return {[type]}        [description]
 */
function ajax(option){
	var xhr = new XMLHttpRequest();
	if(type=='get'&&option.data){
		url += '?';
		url += option.data;
	}
	xhr.open(option.type, option.url);
	if(option.type=='post' && option.data){
		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
	}
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			option.success(xhr.responseText)
		}
	}
	xhr.send(option.data);
}