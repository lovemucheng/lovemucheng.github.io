function ShowImageList(imageUrl,imageList){
    console.log('url:'+imageUrl+'imageList:'+imageList.length);
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
                "<p>点击图片查看完整图片。真实图片人物出镜不予展示。.</p>"+
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
            "                <img src=' "+imageUrl+"/"+j+".jpg' alt='...' style='width: 270px;height: 270px;'></a>"+
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

