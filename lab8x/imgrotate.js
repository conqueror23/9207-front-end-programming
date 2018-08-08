var record;
function RotateImages(){
    var images = ["cpu.jpg", "gpu.jpg", "motherboard.jpg", "ssd.jpg"];
    var address=["https://www.pccasegear.com/category/187/cpus","https://www.pccasegear.com/category/193/graphics-cards","https://www.pccasegear.com/category/138/motherboards","https://www.pccasegear.com/category/210_902/hard-dries-sds/solid-state-drives-ssd"];
    var k = Math.floor(Math.random()* images.length);
    //var selecti= images[k];
    //var selecta= address[k];
    //var index=images.indexOf(selecta);

    if (record==k){
        RotateImages();
        //return a;
    }
    else{
        $('#show').attr("src",images[k]);
        $('#frame').attr("href",address[k]);
        //$(p).text(a);
        record=k;
        setTimeout('RotateImages()', 1000);
        //return record;
    }


}
