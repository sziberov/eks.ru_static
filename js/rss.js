function loadRemoteXhr() {

        document.getElementById("topstory").innerHTML = "";
        WinJS.xhr({ url: "http://k.img.com.ua/rss/ua/all_news2.0.xml" }).then(
            xhrParseXml, xhrError
            );

    }

    function xhrParseXml(result) {

        var outputArea = document.getElementById("topstory");
        var xml = result.responseXML;


        if (xml) {
            var items = xml.querySelectorAll("rss > channel > item");
            if (items) {
                var length = Math.min(10, items.length);
                for (var i = 0; i < length; i++) {
                    var link = document.createElement("li");
                    link.setAttribute("id", "tostory");
                    link.setAttribute("class", items[i].querySelector("link").textContent);
                    link.innerText = items[i].querySelector("title").textContent;
                    outputArea.appendChild(link);
                }
            } else {
                outputArea.innerHTML = "There are no items available at this time";
            }
        } else {
            outputArea.innerHTML = "Unable to retrieve data at this time. Status code: " + statusCode;
        }
    }
    function xhrError(result) {

        var statusCode = result.status;
        var outputArea = document.getElementById("topstory");
        outputArea.innerHTML = "Unable to retrieve data at this time. Status code: " + statusCode;
    }
