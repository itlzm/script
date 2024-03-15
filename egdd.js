/******************************

#!name=儿歌点点
#!desc=


[MITM]

hostname = %APPEND% gateway.ergediandian.com

[Script]

儿歌点点=type=http-response,pattern=https:\/\/gateway.ergediandian.com\/dduser\/user\/center\/set,requires-body=1,script-path=https://raw.githubusercontent.com/itlzm/script/main/egdd.js
儿歌点点1=type=http-response,pattern=https:\/\/gateway.ergediandian.com\/dduser\/user\/center\/mobile_login_by_getui,requires-body=1,script-path=https://raw.githubusercontent.com/itlzm/script/main/egdd.js
儿歌点点2=type=http-response,pattern=https:\/\/gateway.ergediandian.com\/dduser\/user\/sys\/device,requires-body=1,script-path=https://raw.githubusercontent.com/itlzm/script/main/egdd.js


*******************************/

var body = $response.body.replace(/"nickname":".*?"/g,'"nickname":"彭于晏"')
.replace(/"vip":\d/g,'"vip":1')
.replace(/"vip_day":"\d+"/g,'"vip_day":"99999"')
.replace(/"is_vip":\d/g,'"is_vip":1')
.replace(/"is_vip":"\d"/g,'"is_vip":"1"')
.replace(/"vip_endtime":"\d+"/g,'"vip_endtime":"4567891456"')
.replace(/"is_svip":\d/g,'"is_svip":1')
.replace(/"svip_endtime":"\d+"/g,'"svip_endtime":"4567891456"')
.replace(/"username":"\d+"/g,'"username":"1826140673"')
$done({ body });
