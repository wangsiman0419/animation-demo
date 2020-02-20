var url="https://music.aityp.com/top/playlist?cat=华语&limit=35"
function http({
    type="get",
    callback,
    data,
})   {
    $.ajax({
        url,
        data,
        type,
        dataType:"json",
        success:res=>{
            callback(res)
            $(".loading").hide()
        },
        beforeSend(){
            $(".loading").show()
        }
        
    })
}

function onReachBottom(){
    var scrollHeight=$(document).height();
    var scrollTop=$(document).scrollTop();
    var availHeight=$(window).clientHeight;
    return scrollTop+availHeight==scrollHeight?true:false;
}

