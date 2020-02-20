function onReachBottom(){
    var dh=$(document).height();
    var sh=$(window).scrollTop();
    var wh=$(window).height();
    return (Math.ceil(sh+wh)==dh)?true:false;
}