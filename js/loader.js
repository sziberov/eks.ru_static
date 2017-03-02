(function(){
    if (!window.amlInsert) {
        window.amCPath = window.amCPath.replace(/az703203\.vo\.msecnd\.net/,'cdn.admixer.net');
        var vc = document.createElement("script");
        vc.async = true;
        vc.src =  window.amCPath + 'scripts3/require.js';//loaderPath;
        vc.setAttribute('data-main',window.amCPath + 'scripts3/r/require-apsm.js');
        vc.setAttribute('data-r','admixer');
        var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(vc, node);
    }
})(window);