function test(imageUrl,imageList){
    $(".row").hide();
    const startHtml = "<div class=\"row\">";
    const endHtml="</div>";
    let contentHtml="";
    const IsimageHtml=document.getElementById("isImageShow");
    for (j = 0,len=imageList.length; j < len; j++){
        contentHtml+="<div class='col-sm-6 col-md-4'>"+
            "<div class='thumbnail'>"+
            "<img src=' "+imageUrl+"/"+imageList[j]+".jpg' alt='...'>"+
            "<div class='caption'>"+
            "</div>"+
            "</div>"+
            " </div>";;
    }
    $("#isImageShow").show();
    IsimageHtml.innerHTML+=startHtml+contentHtml+endHtml;
    // var url = "demo.json"/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
    // var request = new XMLHttpRequest();
    // request.open("get", url);/*设置请求方法与路径*/
    // request.send(null);/*不发送数据到服务器*/
    // request.onload = function () {/*XHR对象获取到返回信息后执行*/
    //     if (request.status == 200) {/*返回状态为200，即为数据获取成功*/
    //         var json = JSON.parse(request.responseText);
    //         for(var i=0;i<json.length;i++){
    //             console.log(json[i].name);
    //         }
    //         console.log(json);
    //     }
    // }
}