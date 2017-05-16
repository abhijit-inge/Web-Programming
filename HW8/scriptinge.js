/*var userpage=0;
var pagepage=0;
var eventpage=0;
var placepage=0;
var grouppage=0;
*/
//var link;
    
var app = angular.module("myApp", ["ngAnimate"]);
app.controller("MyController", function ($scope) {
$scope.myValue=true;
});   

var urlinge="http://cs-server.usc.edu:45678/hw/hw8/images/facebook.png";
 window.fbAsyncInit = function() {
    FB.init({
      appId      : '426418237701010',
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
  };
 (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


function clearit(){
  document.getElementById('Users').innerHTML="";
    document.getElementById('Groups').innerHTML="";
  document.getElementById('Places').innerHTML="";
  document.getElementById('Events').innerHTML="";
  document.getElementById('Pages').innerHTML="";

  
  }
function fb(link,name){
//alert("in gn");
//alert(link);    
FB.ui({
 app_id: 426418237701010,
 method: 'feed',
 mobile_iframe: true,
 link: window.location.href,
 caption: "FB SEARCH FROM USC CSCI571",
 picture: link,
 
 }, function(response){
 if (response && !response.error_message)
 alert("posted successfully");
 else
 alert("Not Posted");
});
}
function userdetails(uid,typo,third){
    //alert(typeof(uid));
    if((typeof uid === 'string' || uid instanceof String)&&uid.startsWith('places')){
        uid=uid.substring(6,uid.length);
        //alert(uid);
    }
    
    if(third=='fav'){
        typo="Favorites"
    }
    if(typo=="event"){
        typo="Events";
    }
    $("#"+typo).toggle("slide", { direction: "left" }, 600);
    $("#details").css("display","block");
   // $("#"+typo).css("display","none");
    myvalue=true;
    if(typo=="Events"){
        typo="event";
    }
    console.log("uid"+uid);
    if(typo=="event"){
        typo="event";
    }
    else{typo="jahannum";}
     //alert("abhiii"+"http://cs-server.usc.edu:23998/fb-working.php?&typo="+typo+"&selType=details&identity="+uid);
   // alert("http://sample-env.7aw77efvjh.us-west-2.elasticbeanstalk.com/?&typo="+typo+"&selType=details&identity="+uid);
     $.ajax({
        url: "http://sample-env.7aw77efvjh.us-west-2.elasticbeanstalk.com/?&typo="+typo+"&selType=details&identity="+uid
           
 
        ,
        type:'GET'
        ,success: function (response, status, xhr) {
            //alert("sucess");
        detailsobtain(response);
        }
        , error: function (xhr, status, error) {
         //console.log("textStatus: " + Status);
         //console.log("errorThrown: " + error);

       }
    });
      return false;
    
}

function detailsobtain(response){
    
var posts=response["posts"];
var albums=response["albums"];
var details_posts=response["details_posts"];
var details_albums=response["details_albums"];
var profile_pic=response["profile_pic"];
var uname=response["uname"];
var messagetime=response["messagetime"];    
//console.log("posts"+posts[1]);
//console.log("albums"+albums);
//console.log("details_posts"+details_posts);
//console.log("details_albums"+details_albums);
    
    
var details="";
var queer="";    
/*queer+="<button type='button' class='btn btn-default float-right' style='margin-right:10;margin-top:10'><span class='glyphicon glyphicon-star-empty' style=''></span></button><button type='button' class='btn btn-default float-right' style='margin-right:20;margin-top:10' onclick=fb()><img src='http://cs-server.usc.edu:45678/hw/hw8/images/facebook.png' id='shareBtn' width=20 height=14 style='' ></button>";
document.getElementById.inner*/  
//document.getElementById('fbicon').setAttribute("onclick",fb(profile_pic,uname)); 
    document.getElementById("fbicon").addEventListener("click", function(event) {
        event.stopPropagation();    
    
    fb(profile_pic,uname);
    event.stopPropagation();    
}, true);
    
   /*  document.getElementById("favdet").addEventListener("click", function() {
    fb(profile_pic,uname);
}, false);
    favuser("+uid+",'"+encodeURIComponent(name[count])+"','"+encodeURIComponent(images[count])+"','users')*/
/*details+="<div class='clearfix' style='background:white;border-width:0;margin-left:10;margin-right:10;,padding-top:10'>";
details+="<button type='button' class='btn btn-default' style='margin-top:10'><span class='glyphicon glyphicon-chevron-left' style='font-size:14'>Back</span></button><div class='pull-right'><ul class='nav navbar-nav'>" ;
details+="<button type='button' class='btn btn-default float-right' style='margin-right:10;margin-top:10'><span class='glyphicon glyphicon-star-empty' style=''></span></button><button type='button' class='btn btn-default float-right' style='margin-right:20;margin-top:10'><img src='http://cs-server.usc.edu:45678/hw/hw8/images/facebook.png' id='shareBtn' width=20 height=14 style='' onclick=fb()></button></ul> </div></div>";
details+="<div class='clearfix col-md-6  panel panel-default' style='margin-left:10;padding:0;margin-right:20;margin-top:20'><div class='panel-heading'>Albums</div><div class='panel-body'><div class='panel-group' id='accordion'>";
console.log("<img src='http://cs-server.usc.edu:45678/hw/hw8/images/facebook.png' id='shareBtn' width=20 height=14 style='' onclick=fb('"+profile_pic+"','"+uname+"')>") ;

*/    
var j=0,k=0;
document.getElementById('details2').innerHTML="";
//alert(Object.keys(albums).length);
if(Object.keys(albums).length==0){
    //alert('k');
  //  document.getElementById('details2').innerHTML="<div class='well' style='background:#e8bd12'><span>No Data Found</span></div>";
    
}    
for(x in albums)    
    {
//console.log(x);
//console.log(albums[x]);
var album_name=x;
var album_links=albums[x];
var links_size=0;
var postsize=0; 

for(h in album_links){
    links_size++;
}        
console.log(links_size);        
details+="<div class='panel panel-default'><div class='panel-heading'><h4 class='panel-title'>";    
details+="<a data-toggle='collapse' data-parent='#accordion'  href='#collapse"+j+"'>"+album_name+"</a></h4></div>";
if(k==0){        
details+="<div id='collapse"+j+"' class='panel-collapse collapse in'><div class='panel-body'>";
}
else{
    details+="<div id='collapse"+j+"' class='panel-collapse collapse '><div class='panel-body'>";

}
    
for(h in posts){
    postsize++;
}
j=j+1;
k=k+1;        
for(i=0;i<links_size;i++){
             
 details+="<img src='"+album_links[i]+"' width=100% height=450 style='margin-bottom:10'/>";
    console.log("<img src='"+album_links[i]+"' width=100% height=450 style='margin-bottom:10'/>");
                        }
details+="</div></div></div>";
    
    
    
    }

 //details+="</div></div></div>";
document.getElementById('accordion').innerHTML=details; 
if(details==""){
  document.getElementById('accordion').innerHTML="<div class='well' style='background:#e8bd12'><span>No Data Found</span></div>";
    
}
var details2="";    
 var details3="<div class='clearfix col-md-5  panel panel-default' style='margin-left:10;padding:0;margin-right:10;margin-top:20'><div class='panel-heading'>Posts</div><div class='panel-body'>";
for(i=0;i<postsize;i++){
    details2+= "<div class='well' style='background:white'><div position:relative>";
    details2+="<img src='"+profile_pic+"' width=40 height=40/><span>&nbsp&nbsp"+uname+"</span><span style='position:absolute;margin-top:25;margin-left:9 margin-right:200'>"+messagetime[i]+"</span></div><br/>";
    details2+="<div>";
    details2+=posts[i];
    details2+="</div></div>";
                   

    
}   
details2+="</div></div>" ;
document.getElementById("details2").innerHTML=details2;
//alert(details2);    
if(details2=="</div></div>"){
    document.getElementById('details2').innerHTML="<div class='well' style='background:#e8bd12'><span>No Data Found</span></div>";
    
}    
                   
}

function loadstorage(var1)
{
    var favus=[];
    favus=localStorage.getItem(var1);
    favus=JSON.parse(favus);
    favorties(var1);
    
}


function paginate(link,sel){
  /*  if(inga=='next'){
        if(sel=="users"){
            userpage++;
        }
        if(sel=="pages"){
            pagepage++;
        }
        if(sel=="events"){
            eventpage++;
        }
        if(sel=="places"){
            placepage++;
        }
        if(sel=="groups"){
            grouppage++;
        }
    }*/
   // alert("userepage"+userpage);
         console.log("link " + "http://cs-server.usc.edu:23998/fb-working.php?url="+link+"&selType=paginate");
    $.ajax({
        url: "http://sample-env.7aw77efvjh.us-west-2.elasticbeanstalk.com/?url="+link+"&selType=paginate"
        ,
        type:'GET'
        ,success: function (response, status, xhr) {
        if(sel=="user"){   
        parseUser(response);}
        else if(sel=="page"){
        parsePage(response);    
        }
        else if(sel=="place"){
        parsePlaces(response);    
        }
        else if(sel=="group"){
            parseGroups(response);
        }
        else if(sel=="event"){
            parseEvents(response);
        }    
        
        }
        , error: function (xhr, status, error) {
         //console.log("textStatus: " + Status);
         console.log("errorThrown: " + error);

    }});
      return false;
    
}

function favuser(id,name,urlid,which){
    name=decodeURIComponent(name);
    urlid=decodeURIComponent(urlid);
    console.log("bac");
    //alert(document.getElementById(id).style.color);
    if(document.getElementById(id).style.color===""){
    document.getElementById(id).style.color="#FFCA28";
    }
    else{
        document.getElementById(id).style.color="";
        removefav(id,which);
        return;
    }
    var favus=[];
    favus=localStorage.getItem(which);
    favus=JSON.parse(favus);

   // alert(typeof(favus));
    //alert(this.style);
    
    
    if(favus==null){
        favus=[];
    }
    var favuserob=[];
   favuserob.push({
                 uid:id    

                , name:name,
                urlid:urlid
            
            });
    favus.push.apply(favus,favuserob);
   // favus.push(JSON.stringify(favuserob));
    localStorage.setItem(which, JSON.stringify(favus));
    console.log("local"+localStorage.getItem(which));
   // alert("the heck"+localStorage.getItem("users"))
    favorties(which);
    
}




function favorties(ash){
    var fav=[];
    fav=localStorage.getItem(ash);
    fav=JSON.parse(fav);

   
    
    
    if(fav==null){
        fav=[];
    }
    for(itr in fav){
        var uid=JSON.stringify(fav[itr]['uid']);
        
        var name=fav[itr]['name'];
        
        var urlid=fav[itr]['urlid'];
        var fruits=[uid];
        var uid_array=[];
        var uid_array=localStorage.getItem('uid');
        uid_array=JSON.parse(uid_array);
        if(!uid_array.includes(uid)){
       // alert("yeah adding this");
        
        uid_array.push.apply(uid_array,fruits);
        localStorage.setItem('uid',JSON.stringify(uid_array));
        var x=document.getElementById('favtable');
        var len=x.rows.length;
        var row = x.insertRow(len);
        row.id=uid+"fav";
        var cell1=row.insertCell(0);
        var cell2=row.insertCell(1);
        var cell3=row.insertCell(2);
        var cell4=row.insertCell(3);
        var cell5=row.insertCell(4);
        var cell6=row.insertCell(5);
        cell1.innerHTML=len-1;
        cell2.innerHTML="<img src='"+urlid+"'class='img-circle' height=30 width=40>";
        cell3.innerHTML=name;
        cell4.innerHTML=ash;
        cell5.innerHTML="<button type='button' onclick=removefav("+uid+",'"+ash+"') class='btn btn-default btn-sm'><span class='glyphicon glyphicon-trash'></button>";
        if(ash=="events"){
            cell6.innerHTML="<button type='button' onclick=userdetails("+uid+",'event','fav') class='btn btn-default'><span class='glyphicon glyphicon-chevron-right'></span></button>";
            
        } else{   
        cell6.innerHTML="<button type='button' onclick=userdetails("+uid+",'"+ash+"','fav') class='btn btn-default'><span class='glyphicon glyphicon-chevron-right'></span></button>";
            
        /*    if(ash=="users"){    
        cell6.innerHTML="<button type='button' onclick='userdetails("+uid+")' class='btn btn-default'><span class='glyphicon glyphicon-chevron-right'></span></button>";
        }
        else if(ash=="pages"){    
        cell6.innerHTML="<button type='button' onclick='userdetails("+uid+")' class='btn btn-default'><span class='glyphicon glyphicon-chevron-right'></span></button>";
        }  
        else if(ash=="users"){    
        cell6.innerHTML="<button type='button' onclick='pagedetails("+uid+")' class='btn btn-default'><span class='glyphicon glyphicon-chevron-right'></span></button>";
        } 
        else if(ash=="places"){    
        cell6.innerHTML="<button type='button' onclick='pagedetails("+uid+")' class='btn btn-default'><span class='glyphicon glyphicon-chevron-right'></span></button>";
        }
        else if(ash=="groups"){    
        cell6.innerHTML="<button type='button' onclick='groupdetails("+uid+")' class='btn btn-default'><span class='glyphicon glyphicon-chevron-right'></span></button>";
        }
        else if(ash=="events"){    
        cell6.innerHTML="<button type='button' onclick='eventdetails("+uid+")' class='btn btn-default'><span class='glyphicon glyphicon-chevron-right'></span></button>";
        }    
        }*/
        /*else {
       // alert("not adding this");
        }*/
        
        
        }



    }
    
}
}
function removefav(id,thing)
{
    var fav=[];
    fav=localStorage.getItem(thing);
    fav=JSON.parse(fav);
    //alert("before"+localStorage.getItem(thing));
    if(fav==null){
        fav=[];
    }
   for(var i = fav.length - 1; i >= 0; i--) {
    
       
    if(parseInt(fav[i]['uid']) === id) {
        
       fav.splice(i, 1);
        alert("removed");
        
    }
}
    var uid_array=localStorage.getItem('uid');
    uid_array=JSON.parse(uid_array);
   // alert("before"+localStorage.getItem('uid'))
     for(var i = uid_array.length - 1; i >= 0; i--) {
    
       
    if(parseInt(uid_array[i]) === id) {
        
       uid_array.splice(i, 1);
        
    }
}
    localStorage.setItem('uid',JSON.stringify(uid_array));
    localStorage.setItem(thing,JSON.stringify(fav));

    var x=document.getElementById('favtable');
    var len=x.rows.length;
    for(var i=1;i<len;i++){
        var row=x.rows[i];
        //alert(row.id==id+"fav");
        //alert(row.id+"kkk");
        if (typeof(row) != "undefined"){
        if(row.id==id+"fav"){
            
            x.deleteRow(i);
            
        }}
        
    }
for(var i=1;i<len;i++){
        var row=x.rows[i];
    
    if (typeof(row) != "undefined"){
         var x = document.getElementById("favtable").rows[i].cells;
       if(row.id!=undefined){
           if(row.id!=null){
           x[0].innerHTML=i;
           }
       }
        
    }
    
    
}
    
    }
    
    
    


function parseUser(jResponse){
    document.getElementById('Users').innerHTML="";
    var newJ=JSON.stringify(jResponse);
    obj=JSON.parse(newJ);
    var name=obj['name'];
 localStorage.setItem('uid',JSON.stringify([1]));   
 //alert(localStorage.getItem('uid'));
    var images=obj['profile_pic'];
    var len=images.length;
    var count=0;

    var previous=obj['previous'];
    var next=obj['next'];
    var uid=obj['uid'];
    console.log("prev: " + previous);
    console.log("uid"+uid);    

    //link=next;
    //alert(next);      
    var progress =50;
                var usertable = "<div class='progress' style='height:25px;'><div class='progress-bar progress-bar-success' role='progressbar' aria-valuenow='" + progress + "'  aria-valuemin='0' aria-valuemax='100' style='width:" + progress + "%'>" + progress + "%</div></div>";

     usertable="<div class='table-responsive' style=' id='UsersList' ng-controller='myCtrl' ng-init='names="+name+"'style='padding:2%;'>";
    usertable+="<table class='table no-border'><tr><thead style='border:none'><th class='col-md-1'>#</th><th class='col-md-3'>Profile photo</th><th class='col-md-4'>Name</th><th class='col-md-2'>Favorite</th><th class='col-md-2'>Details</th></thead></tr>";
    while(count<len){
   
        
   //usertable+="<tr ng-repeat='data in repeatData'>"
    var ink=count+1;
    usertable+="<tr>";    
    usertable+="<td>"+ink+"</td>";
    usertable+="<td><img src='"+images[count]+"'class='img-circle' height=30 width=40></td>";
    usertable+="<td>"+name[count]+"</td>";
    uid=obj["id"][count];    

    usertable+="<td><button type='button'  onclick=favuser("+uid+",'"+encodeURIComponent(name[count])+"','"+encodeURIComponent(images[count])+"','users') class='btn btn-default'><span id="+uid+" class='glyphicon glyphicon-star-empty'  style=''></span></button></td>";
    uid=obj["id"][count];    
    usertable+="<td><button type='button' ng-click='btn1=true' onclick=userdetails("+uid+",'Users') class='btn btn-default'><span class='glyphicon glyphicon-chevron-right'></span></button></td></tr>";    
    count+=1;    
    }
    usertable+="</table>";
   //usertable+="<div>"
    if(previous!=""){
    usertable+="<div style='margin-left:200'>"    
    usertable+="<button type='button' style='left:180;background-color:white;color:#3b5998' onclick=paginate('"+previous+"','user') class='btn btn-primary previous' style='width:70;margin-left:20;height:30;background:white;color:#3b5998'><center>previous</center></button>";
    }
    if(next!=""){
    //alert("<button type='button' onclick='paginate("+next+")' class='btn btn-primary' style='width:70;margin-left:20;height:30;background:white;color:#3b5998'><center>next</center></button>");
    usertable+="<button type='button' class='btn btn-primary' onclick=paginate('"+next+"','user') class='btn btn-primary next' style='width:70;margin-left:20;height:30;background:white;color:#3b5998'><center>next</center></button></div>";
    }
    usertable+="</div>";
    document.getElementById('Users').innerHTML=usertable;
   // document.body.appendChild(inputTag);

    
   
}
function parsePage(response){
    document.getElementById('Pages').innerHTML="";

    var newJ=JSON.stringify(response);
    obj=JSON.parse(newJ);
    var name=obj['name'];
 
    var images=obj['profile_pic'];
    console.log("this is"+typeof(images));
    var len=images.length;
    console.log("oh my1"+len);
    var previous=obj['previous'];
    var next=obj['next'];
    var uid=obj['uid'];

if (typeof images === 'string' || images instanceof String){

//var images = JSON.parse("[" + images + "]");
//var name=   JSON.parse("[" + images + "]"); 
}
    var count=0;
    var usertable="<div class='table-responsive' style='overflow-x:auto;' id='UsersList' ng-controller='myCtrl' ng-init='names=f'style='padding:2%;'>";
    usertable+="<table class='table no-border'><tr><thead style='border:none'><th class='col-md-1'>#</th><th class='col-md-3'>Profile photo</th><th class='col-md-4'>Name</th><th class='col-md-2'>Favorite</th><th class='col-md-2'>Details</th></thead></tr>";
   if (typeof images === 'string' || images instanceof String){
    usertable+="<tr>";    
    usertable+="<td>"+1+"</td>";
    usertable+="<td><img src='"+images+"'class='img-circle' height=30 width=40></td>";
    usertable+="<td>"+name+"</td>";
    usertable+="<td><button type='button' onclick=favuser("+uid+",'"+encodeURIComponent(name[count])+"','"+encodeURIComponent(images[count])+"','pages') class='btn btn-default'><span id="+uid+" class='glyphicon glyphicon-star-empty' style=''></span></button></td>";
    usertable+="<td><button type='button' onclick=userdetails("+uid+",'Pages') class='btn btn-default'><span class='glyphicon glyphicon-chevron-right'></span></button></td></tr>";    
    count+=1;    
    
    usertable+="</table></div>";
    
    document.getElementById('Pages').innerHTML=usertable;
}
    else{
    while(count<len){
   // usertable+="<tr ng-repeat='data in repeatData'>";
    var ink=count+1;
    usertable+="<tr>";    
    usertable+="<td>"+ink+"</td>";
    usertable+="<td><img src='"+images[count]+"'class='img-circle' height=30 width=40></td>";
    usertable+="<td>"+name[count]+"</td>";
    uid=obj["id"][count];    
    
    usertable+="<td><button type='button' onclick=favuser("+uid+",'"+encodeURIComponent(name[count])+"','"+encodeURIComponent(images[count])+"','pages') class='btn btn-default'><span id="+uid+" class='glyphicon glyphicon-star-empty' style=''></span></button></td>";
    uid=obj["id"][count];    
    usertable+="<td><button type='button' onclick=userdetails("+uid+",'Pages') class='btn btn-default'><span class='glyphicon glyphicon-chevron-right'></span></button></td></tr>";    
    count+=1;    
    }
    usertable+="</table>";
      if(previous!=""){
    usertable+="<button type='button' onclick=paginate('"+previous+"','page') class='btn btn-primary previous' style='width:70;margin-left:20;height:30;background:white;color:#3b5998'><center>previous</center></button>";
    }
    if(next!=""){
    //alert("<button type='button' onclick='paginate("+next+")' class='btn btn-primary' style='width:70;margin-left:20;height:30;background:white;color:#3b5998'><center>next</center></button>");
    usertable+="<button type='button' onclick=paginate('"+next+"','page') class='btn btn-primary next' style='width:70;margin-left:20;height:30;background:white;color:#3b5998'><center>next</center></button>";
    }
    usertable+="</div>";
    
    
    document.getElementById('Pages').innerHTML=usertable;
    }
    
    }

function parsePlaces(response){
    document.getElementById('Places').innerHTML="";
    var newJ=JSON.stringify(response);
    obj=JSON.parse(newJ);
    var name=obj['name'];
 
    var images=obj['profile_pic'];
    var len=images.length;
    var count=0;
    var previous=obj['previous'];
    var next=obj['next'];
    var uid=obj['uid'];
    
    var usertable="<div class='table-responsive' style='overflow-x:auto;' id='UsersList' ng-controller='myCtrl' ng-init='names="+name+"'style='padding:2%;'>";
    usertable+="<table class='table no-border'><tr><thead style='border:none'><th class='col-md-1'>#</th><th class='col-md-3'>Profile photo</th><th class='col-md-4'>Name</th><th class='col-md-2'>Favorite</th><th class='col-md-2'>Details</th></thead></tr>";
    while(count<len){
        var ink=count+1;
    
   // usertable+="<tr ng-repeat='data in repeatData'>";
    usertable+="<tr>";    
    usertable+="<td>"+ink+"</td>";
    usertable+="<td><img src='"+images[count]+"'class='img-circle' height=30 width=40></td>";
    usertable+="<td>"+name[count]+"</td>";
    var pid="places"+uid;
    usertable+="<td><button type='button' onclick=favuser('"+pid+"','"+encodeURIComponent(name[count])+"','"+encodeURIComponent(images[count])+"','places') class='btn btn-default'><span id='"+pid+"' class='glyphicon glyphicon-star-empty' style=''></span></button></td>";
    uid=obj["id"][count];    
    usertable+="<td><button type='button'  onclick=userdetails("+uid+",'Places')  class='btn btn-default'><span class='glyphicon glyphicon-chevron-right'></span></button></td></tr>";    
    count+=1;    
    }
    usertable+="</table>";
      if(previous!=""){
    usertable+="<button type='button' onclick=paginate('"+previous+"','place') class='btn btn-primary previous' style='width:70;margin-left:20;height:30;background:white;color:#3b5998'><center>previous</center></button>";
    }
    if(next!=""){
    //alert("<button type='button' onclick='paginate("+next+")' class='btn btn-primary' style='width:70;margin-left:20;height:30;background:white;color:#3b5998'><center>next</center></button>");
    usertable+="<button type='button' onclick=paginate('"+next+"','place') class='btn btn-primary next' style='width:70;margin-left:20;height:30;background:white;color:#3b5998'><center>next</center></button>";
    }
    usertable+="</div>";
    
    document.getElementById('Places').innerHTML=usertable;    } 


function parseGroups(response){
    document.getElementById('Groups').innerHTML="";
    var newJ=JSON.stringify(response);
    obj=JSON.parse(newJ);
    var name=obj['name'];
    
    var images=obj['profile_pic'];
    var len=images.length;
    var previous=obj['previous'];
    var next=obj['next'];
    var uid=obj['uid'];
    var count=0;
    var usertable="<div class='table-responsive' style='overflow-x:auto;' id='UsersList' ng-controller='myCtrl' ng-init='names="+name+"'style='padding:2%;'>";
    usertable+="<table class='table no-border'><tr><thead style='border:none'><th class='col-md-1'>#</th><th class='col-md-3'>Profile photo</th><th class='col-md-4'>Name</th><th class='col-md-2'>Favorite</th><th class='col-md-2'>Details</th></thead></tr>";
    while(count<len){
    var ink=count+1;    
   // usertable+="<tr ng-repeat='data in repeatData'>";
    usertable+="<tr>";    
    usertable+="<td>"+ink+"</td>";
    usertable+="<td><img src='"+images[count]+"'class='img-circle' height=30 width=40></td>";
    usertable+="<td>"+name[count]+"</td>";
    uid=obj["id"][count];    

    usertable+="<td><button type='button' onclick=favuser("+uid+",'"+encodeURIComponent(name[count])+"','"+encodeURIComponent(images[count])+"','groups') class='btn btn-default'><span id="+uid+" class='glyphicon glyphicon-star-empty' style=''></span></button></td>";
    uid=obj["id"][count];        
    usertable+="<td><button type='button' onclick=userdetails("+uid+",'Groups') class='btn btn-default'><span class='glyphicon glyphicon-chevron-right'></span></button></td></tr>";    
    count+=1;    
    }
    usertable+="</table>";
      if(previous!=""){
    usertable+="<button type='button' onclick=paginate('"+previous+"','group') class='btn btn-primary previous' style='width:70;margin-left:20;height:30;background:white;color:#3b5998'><center>previous</center></button>";
    }
    if(next!=""){
    //alert("<button type='button' onclick='paginate("+next+")' class='btn btn-primary' style='width:70;margin-left:20;height:30;background:white;color:#3b5998'><center>next</center></button>");
    usertable+="<button type='button' onclick=paginate('"+next+"','group') class='btn btn-primary next' style='width:70;margin-left:20;height:30;background:white;color:#3b5998'><center>next</center></button>";
    }
    usertable+="</div>";
    
    document.getElementById('Groups').innerHTML=usertable;    } 

function parseEvents(response){
    document.getElementById('Events').innerHTML="";
    var newJ=JSON.stringify(response);
    obj=JSON.parse(newJ);
    var name=obj['name'];
 
    var images=obj['profile_pic'];
    var len=images.length;
     var previous=obj['previous'];
    var next=obj['next'];
    var uid=obj['uid'];
    var count=0;
    var usertable="<div class='table-responsive' style='overflow-x:auto;' id='UsersList' ng-controller='myCtrl' ng-init='names="+name+"'style='padding:2%;'>";
    usertable+="<table class='table no-border'><tr><thead style='border:none'><th class='col-md-1'>#</th><th class='col-md-3'>Profile photo</th><th class='col-md-4'>Name</th><th class='col-md-2'>Favorite</th><th class='col-md-2'>Details</th></thead></tr>";
    while(count<len){
        var ink=count+1;
    
   // usertable+="<tr ng-repeat='data in repeatData'>";
    usertable+="<tr>";    
    usertable+="<td>"+ink+"</td>";
    usertable+="<td><img src='"+images[count]+"'class='img-circle' height=30 width=40></td>";
    usertable+="<td>"+name[count]+"</td>";
        uid=obj["id"][count];    
    
    usertable+="<td><button type='button' onclick=favuser("+uid+",'"+encodeURIComponent(name[count])+"','"+encodeURIComponent(images[count])+"','events') class='btn btn-default'><span id="+uid+" class='glyphicon glyphicon-star-empty' style=''></span></button></td>";
    uid=obj["id"][count];    

    usertable+="<td><button type='button' onclick=userdetails("+uid+",'event') class='btn btn-default'><span class='glyphicon glyphicon-chevron-right'></span></button></td></tr>";    
    count+=1;    
    }
    usertable+="</table>";
     if(previous!=""){
    usertable+="<button type='button' onclick=paginate('"+previous+"','event') class='btn btn-primary previous' style='width:70;margin-left:20;height:30;background:white;color:#3b5998'><center>previous</center></button>";
    }
    if(next!=""){
    //alert("<button type='button' onclick='paginate("+next+")' class='btn btn-primary' style='width:70;margin-left:20;height:30;background:white;color:#3b5998'><center>next</center></button>");
    usertable+="<button type='button' onclick=paginate('"+next+"','event') class='btn btn-primary next' style='width:70;margin-left:20;height:30;background:white;color:#3b5998'><center>next</center></button>";
    }
    usertable+="</div>";

    
    document.getElementById('Events').innerHTML=usertable;}


$(document).ready(function () {
  //your code here
    
loadstorage("users");
loadstorage("places");
loadstorage("events");
loadstorage("groups");
loadstorage("pages");    
$('search').on("click",function(event)
    {

$('#my-form').submit(function(e){
    return false;
});
}
           
              
               )
    
$('#search').closest('form').on("submit",function(event){  
event.preventDefault();
document.getElementById('Users').innerHTML="<div style='margin-top:200;margin-left:50;margin-right:50'  class='progress'><div class='progress-bar progress-bar-striped active' role='progressbar' aria-valuenow='50' aria-valuemin='0' aria-valuemax='100' style='width:50%'</div></div>";
document.getElementById('Events').innerHTML="<div style='margin-top:200;margin-left:50;margin-right:50'  class='progress'><div class='progress-bar progress-bar-striped active' role='progressbar' aria-valuenow='50' aria-valuemin='0' aria-valuemax='100' style='width:50%'</div></div>"; 
document.getElementById('Places').innerHTML="<div style='margin-top:200;margin-left:50;margin-right:50'  class='progress'><div class='progress-bar progress-bar-striped active' role='progressbar' aria-valuenow='50' aria-valuemin='0' aria-valuemax='100' style='width:50%'</div></div>"; 
document.getElementById('Groups').innerHTML="<div style='margin-top:200;margin-left:50;margin-right:50'  class='progress'><div class='progress-bar progress-bar-striped active' role='progressbar' aria-valuenow='50' aria-valuemin='0' aria-valuemax='100' style='width:50%'</div></div>"; 
document.getElementById('Pages').innerHTML="<div style='margin-top:200;margin-left:50;margin-right:50'  class='progress'><div class='progress-bar progress-bar-striped active' role='progressbar' aria-valuenow='50' aria-valuemin='0' aria-valuemax='100' style='width:50%'</div></div>";  


    
    
     $("form").submit(function(){
        ;
    });
ajaxcall("Users");    
ajaxcall("Groups");
ajaxcall("Pages");
ajaxcall("Events");
var options = {
  enableHighAccuracy: true,
  timeout: 50000,
  maximumAge: 0
};
var lat;
var long;
var accuracy;
function success(pos) {
  var crd = pos.coords;
  lat=pos.coords.latitude
  long=pos.coords.longitude;
  accuracy=crd.accuracy;
  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  ajaxcallPlaces(lat,long,accuracy);    

}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}
    

navigator.geolocation.getCurrentPosition(success, error, options);
    
   /* $.ajax({
        url: 'http://cs-server.usc.edu:23998/fb.php?symbol=USC&selType=Users'
        ,
        type:'GET'
        ,success: function (response, status, xhr) {
            parseUser(response);
        }
        , error: function (xhr, status, error) {
         //console.log("textStatus: " + Status);
         console.log("errorThrown: " + error);

            errorfunc();
        }
    });*/
    return false;
})
function ajaxcallPlaces(lat,long,accuracy){
    
       var symbol=$('#query').val();
       console.log("http://cs-server.usc.edu:23998/fb-working.php?symbol="+symbol+"&selType=Places&lat="+lat+"&long="+long+"&accuracy="+accuracy);
        
    $.ajax({
        url: "http://sample-env.7aw77efvjh.us-west-2.elasticbeanstalk.com/?symbol="+symbol+"&selType=Places&lat="+lat+"&long="+long+"&accuracy="+accuracy
        ,
        type:'GET'
        ,success: function (response, status, xhr) {
            parsePlaces(response);    }
        , error: function (xhr, status, error) {
         //console.log("textStatus: " + Status);
         console.log("errorThrown: " + error);

            errorfunc();
        }
    });
      return false;
    
    
}
 $('.btn btn-default details').click(function () { userdetails(); });

function ajaxcall(selType){
    var symbol=$('#query').val();
    console.log("seema"+"http://sample-env.7aw77efvjh.us-west-2.elasticbeanstalk.com/?symbol="+symbol+"&selType="+selType);
    $.ajax({
        url: "http://sample-env.7aw77efvjh.us-west-2.elasticbeanstalk.com/?symbol="+symbol+"&selType="+selType
        ,
        type:'GET'
        ,success: function (response, status, xhr) {
        if(selType=="Users"){    
        parseUser(response);
    }else if(selType=="Pages"){
           parsePage(response);
        }
        else if(selType=="Events"){
            parseEvents(response);
            
        }
    else if(selType=="Groups"){
        parseGroups(response);
    }}
        , error: function (xhr, status, error) {
         //console.log("textStatus: " + Status);
         console.log("errorThrown: " + error);

            errorfunc();
        }
    });
      return false;
  
    
}
$('ul.nav.nav-pills li a').click(function() {  
        $("#details").css("display","none");

    $(this).parent().addClass('active').siblings().removeClass('active');
        $( "#tabs" ).tabs({ active: this });
})
function userdetails(){
}

/*function parsePlaces(response){
    document.getElementById('Places').innerHTML="";
    var newJ=JSON.stringify(response);
    obj=JSON.parse(newJ);
    var name=obj['name'];
 
    var images=obj['profile_pic'];
    var len=images.length;
    var count=0;
    var usertable="<div class='table-responsive' style='overflow-x:auto;' id='UsersList' ng-controller='myCtrl' ng-init='names="+name+"'style='padding:2%;'>";
    usertable+="<table class='table no-border'><tr><thead style='border:none'><th class='col-md-1'>#</th><th class='col-md-3'>Profile photo</th><th class='col-md-4'>Name</th><th class='col-md-2'>Favorite</th><th class='col-md-2'>Details</th></thead></tr>";
    while(count<len){
   // usertable+="<tr ng-repeat='data in repeatData'>";
    usertable+="<tr>";    
    usertable+="<td>"+count+"</td>";
    usertable+="<td><img src='"+images[count]+"'class='img-circle' height=30 width=40></td>";
    usertable+="<td>"+name[count]+"</td>";
    usertable+="<td><button type='button' class='btn btn-default'><span class='glyphicon glyphicon-star-empty' style=''></span></button></td>";
    usertable+="<td><button type='button' class='btn btn-default'><span class='glyphicon glyphicon-chevron-right'></span></button></td></tr>";    
    count+=1;    
    }
    usertable+="</table></div>";
    
    document.getElementById('Places').innerHTML=usertable;    } */

/*function parseGroups(response){
    document.getElementById('Groups').innerHTML="";
    var newJ=JSON.stringify(response);
    obj=JSON.parse(newJ);
    var name=obj['name'];
 
    var images=obj['profile_pic'];
    var len=images.length;
    var count=0;
    var usertable="<div class='table-responsive' style='overflow-x:auto;' id='UsersList' ng-controller='myCtrl' ng-init='names="+name+"'style='padding:2%;'>";
    usertable+="<table class='table no-border'><tr><thead style='border:none'><th class='col-md-1'>#</th><th class='col-md-3'>Profile photo</th><th class='col-md-4'>Name</th><th class='col-md-2'>Favorite</th><th class='col-md-2'>Details</th></thead></tr>";
    while(count<len){
   // usertable+="<tr ng-repeat='data in repeatData'>";
    usertable+="<tr>";    
    usertable+="<td>"+count+"</td>";
    usertable+="<td><img src='"+images[count]+"'class='img-circle' height=30 width=40></td>";
    usertable+="<td>"+name[count]+"</td>";
    usertable+="<td><button type='button' class='btn btn-default'><span class='glyphicon glyphicon-star-empty' style=''></span></button></td>";
    usertable+="<td><button type='button' class='btn btn-default'><span class='glyphicon glyphicon-chevron-right'></span></button></td></tr>";    
    count+=1;    
    }
    usertable+="</table></div>";
    
    document.getElementById('Groups').innerHTML=usertable;    } 
*/    

/*function parseEvents(response){
    document.getElementById('Events').innerHTML="";
    var newJ=JSON.stringify(response);
    obj=JSON.parse(newJ);
    var name=obj['name'];
 
    var images=obj['profile_pic'];
    var len=images.length;
    var count=0;
    var usertable="<div class='table-responsive' style='overflow-x:auto;' id='UsersList' ng-controller='myCtrl' ng-init='names="+name+"'style='padding:2%;'>";
    usertable+="<table class='table no-border'><tr><thead style='border:none'><th class='col-md-1'>#</th><th class='col-md-3'>Profile photo</th><th class='col-md-4'>Name</th><th class='col-md-2'>Favorite</th><th class='col-md-2'>Details</th></thead></tr>";
    while(count<len){
   // usertable+="<tr ng-repeat='data in repeatData'>";
    usertable+="<tr>";    
    usertable+="<td>"+count+"</td>";
    usertable+="<td><img src='"+images[count]+"'class='img-circle' height=30 width=40></td>";
    usertable+="<td>"+name[count]+"</td>";
    usertable+="<td><button type='button' class='btn btn-default'><span class='glyphicon glyphicon-star-empty' style=''></span></button></td>";
    usertable+="<td><button type='button' class='btn btn-default'><span class='glyphicon glyphicon-chevron-right'></span></button></td></tr>";    
    count+=1;    
    }
    usertable+="</table></div>";
    
    document.getElementById('Events').innerHTML=usertable;}*/
/*function parsePage(response){
    document.getElementById('Pages').innerHTML="";

    var newJ=JSON.stringify(response);
    obj=JSON.parse(newJ);
    var name=obj['name'];
 
    var images=obj['profile_pic'];
    console.log("this is"+typeof(images));
    var len=images.length;
    console.log("oh my1"+len);
    var previous=obj['previous'];
    var next=obj['next'];
    var uid=obj['uid'];

if (typeof images === 'string' || images instanceof String){

//var images = JSON.parse("[" + images + "]");
//var name=   JSON.parse("[" + images + "]"); 
}
    var count=0;
    var usertable="<div class='table-responsive' style='overflow-x:auto;' id='UsersList' ng-controller='myCtrl' ng-init='names=f'style='padding:2%;'>";
    usertable+="<table class='table no-border'><tr><thead style='border:none'><th class='col-md-1'>#</th><th class='col-md-3'>Profile photo</th><th class='col-md-4'>Name</th><th class='col-md-2'>Favorite</th><th class='col-md-2'>Details</th></thead></tr>";
   if (typeof images === 'string' || images instanceof String){
    usertable+="<tr>";    
    usertable+="<td>"+1+"</td>";
    usertable+="<td><img src='"+images+"'class='img-circle' height=30 width=40></td>";
    usertable+="<td>"+name+"</td>";
    usertable+="<td><button type='button' class='btn btn-default'><span class='glyphicon glyphicon-star-empty' style=''></span></button></td>";
    usertable+="<td><button type='button' class='btn btn-default'><span class='glyphicon glyphicon-chevron-right'></span></button></td></tr>";    
    count+=1;    
    
    usertable+="</table></div>";
    
    document.getElementById('Pages').innerHTML=usertable;
}
    else{
    while(count<len){
   // usertable+="<tr ng-repeat='data in repeatData'>";
    var ink=count+1;
    usertable+="<tr>";    
    usertable+="<td>"+count+"</td>";
    usertable+="<td><img src='"+images[count]+"'class='img-circle' height=30 width=40></td>";
    usertable+="<td>"+name[count]+"</td>";
    usertable+="<td><button type='button' class='btn btn-default'><span class='glyphicon glyphicon-star-empty' style=''></span></button></td>";
    uid=obj["id"][count];    
    usertable+="<td><button type='button' onclick='userdetails("+uid+")' class='btn btn-default'><span class='glyphicon glyphicon-chevron-right'></span></button></td></tr>";    
    count+=1;    
    }
    usertable+="</table>";
      if(previous!=""){
    usertable+="<button type='button' onclick=paginate('"+previous+"') class='btn btn-primary previous' style='width:70;margin-left:20;height:30;background:white;color:#3b5998'><center>previous</center></button>";
    }
    if(next!=""){
    //alert("<button type='button' onclick='paginate("+next+")' class='btn btn-primary' style='width:70;margin-left:20;height:30;background:white;color:#3b5998'><center>next</center></button>");
    usertable+="<button type='button' onclick=paginate('"+next+"','page') class='btn btn-primary next' style='width:70;margin-left:20;height:30;background:white;color:#3b5998'><center>next</center></button>";
    }
    usertable+="</div>";
    
    
    document.getElementById('Pages').innerHTML=usertable;
    }
    
    }
    */
    
function loadStuff(){
    parseAsync("Users",parseUser);
    
}

/*function parseUser(jResponse){

    var newJ=JSON.stringify(jResponse);
    obj=JSON.parse(newJ);
    var name=obj['name'];
 
    var images=obj['profile_pic'];
    var len=images.length;
    var count=1;
    var previous=obj['previous'];
    var next=obj['next'];
    //alert(next);
    var usertable="<div class='table-responsive' style='overflow-x:auto;' id='UsersList' ng-controller='myCtrl' ng-init='names="+name+"'style='padding:2%;'>";
    usertable+="<table class='table no-border'><tr><thead style='border:none'><th class='col-md-1'>#</th><th class='col-md-3'>Profile photo</th><th class='col-md-4'>Name</th><th class='col-md-2'>Favorite</th><th class='col-md-2'>Details</th></thead></tr>";
    while(count<len){
   //usertable+="<tr ng-repeat='data in repeatData'>";
    usertable+="<tr>";    
    usertable+="<td>"+count+"</td>";
    usertable+="<td><img src='"+images[count]+"'class='img-circle' height=30 width=40></td>";
    usertable+="<td>"+name[count]+"</td>";
    usertable+="<td><button type='button' class='btn btn-default'><span class='glyphicon glyphicon-star-empty' style=''></span></button></td>";
    usertable+="<td><button type='button' onclick='userdetails()' class='btn btn-default'><span class='glyphicon glyphicon-chevron-right'></span></button></td></tr>";    
    count+=1;    
    }
    usertable+="</table></div>";
   usertable+="<div>"
    if(previous!=""){
    usertable+="<button type='button' onclick='paginate('"+previous+"')' class='btn btn-primary' style='width:70;margin-left:20;height:30;background:white;color:#3b5998'><center>previous</center></button>";
    }
    if(next!=""){
    alert("<button type='button' onclick='paginate("+next+")' class='btn btn-primary' style='width:70;margin-left:20;height:30;background:white;color:#3b5998'><center>next</center></button>");
    usertable+="<button type='button' onclick='paginate("+next+")' class='btn btn-primary' style='width:70;margin-left:20;height:30;background:white;color:#3b5998'><center>next</center></button>";
    }
    usertable+="</div>";
    document.getElementById('Users').innerHTML=usertable;
   // document.body.appendChild(inputTag);

    
   
}*/
/*var app = angular.module('myapp', []);

app.controller('myCtrk')
function myCtrl(images,names)
    {
var dataArray = names;
var valueArray =images;
this.repeatData = dataArray.map(function(value, index) {
    return {
        count:index+1,
        names: value,
        images: valueArray[index]
    }
    });
    }
        
       */
    
function errorfunc()
{
console.log("ouidsaasdoiausdasduiasdiuasduhasduahsui");    
}
})