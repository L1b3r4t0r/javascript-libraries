//for ready to minify version see versions folder subfolder v1.0 R1
//© matheus 2013
function ajf() {
    var xmlhttp;
    this.ajax = ajax;

    function ajax(url, callback, data, method) {
        if (method == "get" || method == "GET") {
            if (window.XMLHttpRequest) {
                xmlhttp = new XMLHttpRequest();
            } else {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var ev = new Function(callback);
                    ev();
                }
            };
            var res = method.toUpperCase();
            xmlhttp.open(res, url + "?" + data, true);
            xmlhttp.send();
        }else{
             if (window.XMLHttpRequest) {
                xmlhttp = new XMLHttpRequest();
            } else {
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var ev = new Function(callback);
                    ev();
                }
            };
            var res = method.toUpperCase();
            xmlhttp.open(res, url, data, true);
            xmlhttp.send();
        }
    }
}
    function mkinst(url, callback, data, method) {
        var instance = new ajf.ajax(url, callback, data, method);
    }
