function ShowImageList(imageUrl,imageList,isFixed){
    var text=isFixed==0?"旅游图册":"宝宝相册";
    const startHtml =
        "<article class='post'>" +
            "<div class='post-title'>" +
                "<h2 class='title'>相册列表-详细信息</h2>" +
                "<p>相册</p>" +
            "</div>" +
            "<div class='post-meta'>" +
                "<a class='post-time' onclick='ImageClose()'>返回相册列表</a>" +
            "</div>" +
            "<p class='post-content'>" +
                "<p>"+text+"</p>"+
                "<br>" +
            "<div class='row'>";
    const endHtml=
            "</div>" +
            "</div>" +
        "</article>";
    let contentHtml="";
    const IsimageHtml=document.getElementById("isImageShow");
    for (j = 1,len=imageList; j <= len; j++){

        contentHtml+="<div class='col-sm-6 col-md-4'>"+
            "<div class='thumbnail'>"+
            "<a class='post-gallery-img fancybox' href='"+imageUrl+"/"+j+".jpg' rel='gallery_cjkxvsuwx0007hes6hd4cmpz7' itemscope=''  itemprop='url' one-link-mark='yes'>" +
            " <img id='img1' src=' "+imageUrl+"/"+j+".jpg' alt='...'></a>"+
            "</div>"+
            " </div>";
    }
    $(".row").hide();
    $("#isImageShow").show();
    IsimageHtml.innerHTML=startHtml+contentHtml+endHtml;

}

function ImageClose(){
    $(".row").show();
    $("#isImageShow").hide();
}
删

