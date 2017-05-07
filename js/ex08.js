/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-04 13:57:06
 * @version $Id$
 */
$(init)
function init(){
  $("#results").fadeToggle();
  	var map = new BMap.Map("myMap"); 
    var flag_mark = 0;
    var i;
//注意在调用此构造函数时应确保容器元素myMap已经添加到地图上。
  var point = new BMap.Point(120.015293, 30.295137);  

  map.centerAndZoom(new BMap.Point(120.015293, 30.295137), 17);
    map.addControl(new BMap.MapTypeControl());
	var transit = new BMap.TransitRoute(map, {
  	renderOptions: {
    	map: map,
    	panel: "results"
  	}
	});
// map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    var local = new BMap.LocalSearch(map, {
      renderOptions: {
        map: map
      }
    });
/*-------------------------------button---------------------------------------------*/
    $("#clear").click(function(){map.clearOverlays();}); 
    $("#confirm").click(function(){
        
      var start_text = document.getElementById("start_text");
      var start = start_text.value;
      var end_text = document.getElementById("end_text");
      var end = end_text.value;
      var search_text = document.getElementById("search_text");
      var search = search_text.value;
      console.log(start);
      if(end.length == 0)
      {
        $("#myMap").css("width","85%");
          // $("#results").hide();
        local.search(start); 
      }
      else
      {
        $("#myMap").css("width","70%");
          $("#results").fadeToggle();
        transit.search(start, end);
      }
      if(search.length > 0)
      {
        local.searchNearby(search, start);
      }
    });
    $("#bmark").click(function(){
        flag_mark = (flag_mark+1)%2;
    });

    map.addEventListener("tilesloaded", function() {  
      map.enableScrollWheelZoom(); //启用滚轮放大缩小，默认禁用  
      map.enableContinuousZoom(); //启用地图惯性拖拽，默认禁用  
      map.addControl(new BMap.NavigationControl()); //添加默认缩放平移控件  
    //    map.addControl(new BMap.OverviewMapControl()); //添加默认缩略地图控件  
      map.addControl(new BMap.OverviewMapControl({  
          isOpen : true,  
          anchor : BMAP_ANCHOR_BOTTOM_RIGHT  
      })); //右下角，打开  
    });  
/*--------------------------------------------------------------------------*/
  //信息窗口
  var opts = {
  width: 350, // 信息窗口宽度    
  height: 270, // 信息窗口高度    
  title: "information:" // 信息窗口标题   
  }
  var infoWindow = new BMap.InfoWindow("World", opts); // 创建信息窗口对象     // 打开信息窗口

  map.addEventListener("click", function(e){     
    if(flag_mark == 1)
    {  
      var marker = new BMap.Marker(e.point);// 创建标注   
      map.addOverlay(marker);   
      map.openInfoWindow(infoWindow, e.point); // 打开信息窗口
      marker.addEventListener("click",function(e){
        openInfo(" "+content,e.point)
      });
    }
  }); 
  function openInfo(content,e){  
        var p = e.target;  
        // console.log(p);
        var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);  
        var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象   
        map.openInfoWindow(infoWindow,point);                //开启信息窗口  
    }  

/*--------------------------------使用JSON创建标注---------------------------------------*/
  $.getJSON("src/school.json",function(data){
    for(i = 0; i <50; i++)
    {
      var pointArray = new BMap.Point(data['teachingBuilding'][i]['lng'],data['teachingBuilding'][i]['lat']);
      var marker = new BMap.Marker(pointArray);// 创建标注   
  /*    console.log(data['teachingBuilding'][i]['name']);*/
    /*  console.log(marker.point.lng);*/
      map.addOverlay(marker); 
      var name = data['teachingBuilding'][i]['name'];
      marker.addEventListener("click",function(e){
        //通过当前标注的坐标匹配信息
        var content;
        var name = "名字:  ";
        var comment = "评论数: ";
        var grade = "评分："
        for(i = 0; i <50; i++)
        {
          //判断星级
          if(data['teachingBuilding'][i]['lng'] == this.point.lng){
            if(data['teachingBuilding'][i]['grade'] > 4 )
            {
              content = "<div class=\"ui-infowind\"> \
                                <div class=\"container-fluid\"> \
                                    <div class=\"row\"> \
                                        <div class=\"ui-infowind-img\"></div> \
                                    </div> \
                                    <div class=\"row\"> \
                                        <div class=\"col-sm-8\"> \
                                            <div class=\"ui-infowind-left\"> \
                                                <div class=\"ui-infowind-name\">" + name + data['teachingBuilding'][i]['name'] + "</div> \
                                                 <img src=\"img/hznu.jpg\" class=\"ui-infowind-img\">\
                                                <div class=\"ui-infowind-star\"><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i></div> \
                                                <span class=\"ui-infowind-grade\">"+ grade + data['teachingBuilding'][i]['grade'] + "</span> \
                                                <span class=\"ui-infowind-review\">" + comment + data['teachingBuilding'][i]['review'] + "</span> \
                                            </div> \
                                        <a class=\"ui-infowind-more\">查看详情</a> \
                                        </div> \
                                    </div> \
                                </div> \
                            </div>";
            }
             else if(data['teachingBuilding'][i]['grade'] > 3 )
            {
              content = "<div class=\"ui-infowind\"> \
                                <div class=\"container-fluid\"> \
                                    <div class=\"row\"> \
                                        <div class=\"ui-infowind-img\"></div> \
                                    </div> \
                                    <div class=\"row\"> \
                                        <div class=\"col-sm-8\"> \
                                            <div class=\"ui-infowind-left\"> \
                                                <div class=\"ui-infowind-name\">" + name + data['teachingBuilding'][i]['name'] + "</div> \
                                                 <img src=\"img/hznu.jpg\" class=\"ui-infowind-img\">\
                                                <div class=\"ui-infowind-star\"><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i></div> \
                                                <span class=\"ui-infowind-grade\">"+ grade + data['teachingBuilding'][i]['grade'] + "</span> \
                                                <span class=\"ui-infowind-review\">" + comment + data['teachingBuilding'][i]['review'] + "</span> \
                                            </div> \
                                             <a class=\"ui-infowind-more\">查看详情</a> \
                                        </div> \
                                    </div> \
                                </div> \
                            </div>";
            }
              else if(data['teachingBuilding'][i]['grade'] > 2 )
            {
              content = "<div class=\"ui-infowind\"> \
                                <div class=\"container-fluid\"> \
                                    <div class=\"row\"> \
                                        <div class=\"ui-infowind-img\"></div> \
                                    </div> \
                                    <div class=\"row\"> \
                                        <div class=\"col-sm-8\"> \
                                            <div class=\"ui-infowind-left\"> \
                                                <div class=\"ui-infowind-name\">" + name + data['teachingBuilding'][i]['name'] + "</div> \
                                                 <img src=\"img/hznu.jpg\" class=\"ui-infowind-img\">\
                                                <div class=\"ui-infowind-star\"><i class=\"fa fa-star\"></i><i class=\"fa fa-star\"></i></div> \
                                                <span class=\"ui-infowind-grade\">"+ grade + data['teachingBuilding'][i]['grade'] + "</span> \
                                                <span class=\"ui-infowind-review\">" + comment + data['teachingBuilding'][i]['review'] + "</span> \
                                            </div> \
                                       <a class=\"ui-infowind-more\">查看详情</a> \
                                        </div> \
                                    </div> \
                                </div> \
                            </div>";
            }
              else if(data['teachingBuilding'][i]['grade'] > 1 )
            {
              content = "<div class=\"ui-infowind\"> \
                                <div class=\"container-fluid\"> \
                                    <div class=\"row\"> \
                                        <div class=\"ui-infowind-img\"></div> \
                                    </div> \
                                    <div class=\"row\"> \
                                        <div class=\"col-sm-8\"> \
                                            <div class=\"ui-infowind-left\"> \
                                                <div class=\"ui-infowind-name\">" + name + data['teachingBuilding'][i]['name'] + "</div> \
                                                 <img src=\"img/hznu.jpg\" class=\"ui-infowind-img\">\
                                                <div class=\"ui-infowind-star\"><i class=\"fa fa-star\"></i></div> \
                                                <span class=\"ui-infowind-grade\">"+ grade + data['teachingBuilding'][i]['grade'] + "</span> \
                                                <span class=\"ui-infowind-review\">" + comment + data['teachingBuilding'][i]['review'] + "</span> \
                                            </div> \
                                       <a class=\"ui-infowind-more\">查看详情</a> \
                                        </div> \
                                    </div> \
                                </div> \
                            </div>";
            }
            else
            {
              content = "<div class=\"ui-infowind\"> \
                                <div class=\"container-fluid\"> \
                                    <div class=\"row\"> \
                                        <div class=\"ui-infowind-img\"></div> \
                                    </div> \
                                    <div class=\"row\"> \
                                        <div class=\"col-sm-8\"> \
                                            <div class=\"ui-infowind-left\"> \
                                                <div class=\"ui-infowind-name\">" + name + data['teachingBuilding'][i]['name'] + "</div> \
                                                 <img src=\"img/hznu.jpg\" class=\"ui-infowind-img\">\
                                                <div class=\"ui-infowind-star\"><i class=\"fa fa-star-o\"></i></div> \
                                                <span class=\"ui-infowind-grade\">"+ grade + data['teachingBuilding'][i]['grade'] + "</span> \
                                                <span class=\"ui-infowind-review\">" + comment + data['teachingBuilding'][i]['review'] + "</span> \
                                            </div> \
                                        <a class=\"ui-infowind-more\">查看详情</a> \
                                        </div> \
                                    </div> \
                                </div> \
                            </div>";
            }

            break;}//匹配成功 break此时的i为所求的序号
        }
        /* console.log(this.point.lng);*/
        openInfo(content,e)
      });
    }
  });
    

// 打开信息窗口
}