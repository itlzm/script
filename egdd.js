/******************************

脚本功能：儿歌点点+解锁VIP
下载地址：https://is.gd/Og6DvK
软件版本：3.47.0
脚本作者：彭于晏💞
更新时间：2022-9-29
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^http[s]?:\/\/gateway.ergediandian.com\/dduser\/user\/center\/set url script-response-body https://raw.githubusercontent.com/itlzm/script/main/egdd.js

[mitm] 

hostname = gateway.ergediandian.com

*******************************/

var body = $response.body
.replace(/"nickname":".*?"/g,'"nickname":"彭于晏"')
$done({ body });
