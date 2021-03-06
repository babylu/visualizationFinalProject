/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

generateTopData();

function generateTopData(){
//    weekNum = $("#weekNum").val();
//    dataType = $("#dataFileType").val();
//    var weekNum = $("#weekNum").val();
//    var dataType = $("#dataFileType").val();
    var address = null;
    if(dataType === '1'){
        address="./dataFile/top5outWeek.json";
    }else if(dataType=='2'){
        address="./dataFile/top5outMonth.json";
    }else{
        address="./dataFile/top5outQuarter.json";
    }
   
//    doJson(address,createMap);
    d3.json(address,filterTop);
}

function generateTopDataForStation(){
    d3.json("./dataFile/week_nearest.json",filterTopForStation);
}
  
function filterTop(data){
    var arr =[];
    $.each(data,function(index,val){
//        console.log(val.Week);
//        console.log(weekNum);
        if(val.Week == weekNum){
            var stationInfo = {id:val.StationId, bikeoutNum: val.Bike_out};
            //console.log(stationInfo);
            arr.push(stationInfo);
        }
    });
//    return arr; 
    createMap(arr);
}

function filterTopForStation(data){
    var arr =[];
    $.each(data,function(index,val){
//        console.log(val.Week);
//        console.log(weekNum);
        if(val.Week == weekNum && val.Station == stationId){
            arr = [{id:val.Near1,count:val.Count1},
                   {id:val.Near2,count:val.Count2},
                   {id:val.Near3,count:val.Count3},
                   {id:val.Near4,count:val.Count4},
                   {id:val.Near5,count:val.Count5}];
        }
    });
//    return arr; 
    createMap(arr,true);
}
//function doJson(weekNum,address,fn){   
//    var xmlhttp = new XMLHttpRequest(); 
//    xmlhttp.open('GET',address);
//    xmlhttp.onreadystatechange= function(){
//        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
//            var data = JSON.parse(xmlhttp.responseText);
//            var result = filterTop.call(this,data,weekNum);
//            if(fn){
//                fn.call(this,result);
//            }
//        }
//    }
//    xmlhttp.send();
    
//}