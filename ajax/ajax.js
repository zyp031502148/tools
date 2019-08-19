/*function get(url,date){
	//创建异步请求
	var xhr = new XMLHttpRequest();
	//请求行
	if(url&&data){
		url += ?;
		url +=date;
	}
	xhr.open('get', url)
	//请求头(get 可省略)
	
	//回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4&&xhr.status==200){
			success();
		}
	}
	//传送数据
	send(date);
}*/
/**
 * [get 数据异步请求]
 * @param  {[type]} url     [URL的值为url+data]
 * @param  {[type]} data    [data的格式是key1=value&key2=value2]
 * @param  {[type]} success [description]
 * @return {[type]}         [description]
 */
function get(url,data,success){
	var xhr = new XMLHttpRequest();
	if(url&&data){
		url += '?';
		url +=data;
	}
	xhr.open('get', url)
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4&&xhr.status==200){
			console.log(xhr.responseText)
			success();
		}
	};
	xhr.send(null);
}
/**
 * [post 数据加载异步请求post]
 * @param  {[type]} url     [description]
 * @param  {[type]} data    [data的格式是key1=value&key2=value2]
 * @param  {[type]} success [description]
 * @return {[type]}         [description]
 */
function post(url,data,success){
	var xhr = new XMLHttpRequest();
	xhr.open('post', url);
	if(data){
		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
	}
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4&&xhr.status==200){
			console.log(xhr.responseText);
			success();
		}
	};
	xhr.send(data);
}
/**
 * [ajax description]
 * @param  {[type]} type    [description]
 * @param  {[type]} url     [description]
 * @param  {[type]} data    [data的格式是key1=value&key2=value2]
 * @param  {[type]} success [description]
 * @return {[type]}         [description]
 */
function ajax(type,url,data,success){
	var xhr = new XMLHttpRequest();
	if(type=='get'&&data){
		url += '?';
		url += data;
	}
	xhr.open(type, url);
	if(type=='post' && data){
		xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
	}
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			success()
		}
	}
	xhr.send(data);
}