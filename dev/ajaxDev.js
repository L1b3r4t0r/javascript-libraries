//© matheus 2013
function mkURI(str) {
        str = str.replace(" ", "%");
        str = str.replace("$", "%");
        str = str.replace("ä", "%");
        str = str.replace("ö", "%");
        str = str.replace("ë", "%");
        str = str.replace("A", "a");
        str = str.replace("B", "b");
        str = str.replace("C", "c");
        str = str.replace("D", "d");
        str = str.replace("E", "e");
        str = str.replace("F", "f");
        str = str.replace("G", "g");
        str = str.replace("H", "h");
        str = str.replace("I", "i");
        str = str.replace("J", "j");
        str = str.replace("K", "k");
        str = str.replace("L", "l");
        str = str.replace("M", "m");
        str = str.replace("N", "n");
        str = str.replace("O", "o");
        str = str.replace("P", "p");
        str = str.replace("Q", "q");
        str = str.replace("R", "r");
        str = str.replace("S", "s");
        str = str.replace("T", "t");
        str = str.replace("U", "u");
        str = str.replace("V", "v");
        str = str.replace("W", "w");
        str = str.replace("X", "x");
        str = str.replace("Y", "y");
        str = str.replace("Z", "z");
    }

function ajf() {
    var xmlhttp;
    this.ajax = ajax;

    function ajax(url, callback, data, method) {
        //treating data to send
        url = mkURI(url);
        url = encodeURI(url);
        var res = method.toUpperCase();
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
            xmlhttp.open(res, url + "?" + data, true);
            xmlhttp.send();
        } else {
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
            xmlhttp.open(res, url, data, true);
            xmlhttp.send();
        }
    }
}

function mkinst(url, callback, data, method) {
    var instance = new ajf.ajax(url, callback, data, method);
}