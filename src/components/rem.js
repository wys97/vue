
(function(){
        function w() {
        var r = document.documentElement;
        var a = r.getBoundingClientRect().width;//获取当前设备的宽度
            if (a > 750 ){//720不固定，根据设计稿的宽度定
                a = 750;
            } 
            rem = a / 7.5;
            r.style.fontSize = rem + "px"
        }
        w();
        window.addEventListener("resize", function() {//监听横竖屏切换
            w()
        }, false);
        // console.log('监听')
        if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
            handleFontSize();
        } else {
            if (document.addEventListener) {
                document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
            } else if (document.attachEvent) {
                document.attachEvent("WeixinJSBridgeReady", handleFontSize);
                document.attachEvent("onWeixinJSBridgeReady", handleFontSize);  }
        }
        function handleFontSize() {
            // 设置网页字体为默认大小
            WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
            // 重写设置网页字体大小的事件
            WeixinJSBridge.on('menu:setfont', function() {
                WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
            });
        }
    
    })();
    
    