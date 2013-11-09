//(c) matheus 2013
function ajf() {
    var xmlhttp;
    this.ajax = ajax;
    function ajax(url, callback, data, method) {
        if (window.XMLHttpRequest) {
            xmlhttp = new XMLHttpRequest();
        } else {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        };
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                var ev = new Function(callback);
                ev();
            };
        };
        var res = method.toUpperCase();
        xmlhttp.open(res, url + "?" + data, true);
        xmlhttp.send();
    };
};
function makecall(url,callback){
    var instance = new ajf.ajax();
};