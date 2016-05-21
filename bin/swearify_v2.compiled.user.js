// ==UserScript==
// @name        Swearify 2.0
// @description Adds a number of enhancements to your experience on AIM Games.
// @namespace   samsquanchhunter14@gmail.com
// @include     http://aimgames.forummotion.com/*
// @include     https://aimgames.forummotion.com/*
// @require     https://raw.githubusercontent.com/js-cookie/js-cookie/master/src/js.cookie.js
// @require     https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/swearify/jquery.caret.1.02.min.js
// @require     https://raw.githubusercontent.com/HulaSamsquanch/aimgames/master/swearify/textUtils.js
// @version     beta.5.4
// @icon        http://i.imgur.com/MnWNRBL.png
// @license     MIT License (Expat); opensource.org/licenses/MIT
// @homepage    https://github.com/HulaSamsquanch/aimgames
// @supportURL  https://github.com/HulaSamsquanch/aimgames/issues
// @grant       none
// ==/UserScript==
'use strict';(function(){function w(a){$("head").append($('<link rel="stylesheet" type="text/css" />').A("href",a))}function C(){$("#divsmilies").click(function(a){window.open("/post?categ=8&mode=smilies","chatbox_smilies","toolbar=no,menubar=no,personalbar=no,width=350,height=300,scrollbars=yes,resizable=yes,left="+(a.screenX-270)+",top="+(a.screenY-380))})}function D(){"1"==getCookie("post_condition")?(q=1,$("#text_edit").c("cssText","display:none;"),$("#html_edit").c("cssText","")):(q=0,$("#text_edit").c("cssText",""),$("#html_edit").c("cssText","display:none;"));$("#text_editor_cmd_switchmode").click(function(){0===q?(setCookie("post_condition","1",1),q=1,$("#text_edit").c("cssText","display:none;"),$("#html_edit").c("cssText","")):1==q&&(setCookie("post_condition","0",1),q=0,$("#text_edit").c("cssText",""),$("#html_edit").c("cssText","display:none;"))})}function m(a,d,b){$(b).click(function(){if(window.opener){var c=window.opener.l("#message"),f="",b="";$(c).m().start<$(c).a().length?(f=c.a().substr(0,$(c).m().start),b=c.a().substr($(c).m().start,$(c).a().length)):(f=c.a().substr(0,$(c).a().length),b="");c.a(f+d+b)}parent&&(c=parent.l("textarea")[1],console.log(c),f=parent.l("textarea")[1].value,console.log(f),b="",b=f.substr(0,f.length),c.value=b+x(a)+"")});$(b).C(function(a){a.preventDefault()})}function n(a,d){return'<a href="javascript:void(0)" class="emotes"><img title="'+a+'" src="'+d+'" alt="'+a+'" border="0"></a>'}function x(a){return'<img title="posted by swearify" src="'+a+'"></img>'}function r(){return void 0===$("textarea")[1]?0:1}function E(){var a=$("td")[1];$(a).c("background",'linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url("http://daffeinatek.byethost32.com/lastfm/resources/lighthole.gif")');$(a).c("background-size","100%");$(a).h($('<label style="font-size: 13px; font-weight: 900;">Swear Search \u2122</label><input id="emoteSearchBox" style="margin: 15px;border-color: black;"><label id="emoticonNotif" style="font-size: 9px;color: red;display: block;margin-bottom: 15px;font-weight: 600;">search something, shitmongrel</label>'))}function F(){$.b(G,function(a,d){$('[name="categ"]').append($("<option>",{value:a}).text(d))})}function k(){var a=document,d=a.documentElement,a=a.getElementsByTagName("body")[0];return Math.floor((window.innerWidth||d.clientWidth||a.clientWidth)/130)-1}function H(){var a=$("#message").a(),d=a.toLowerCase(),b=a.indexOf(y[0]),c=a.indexOf(y[1]),f=a.indexOf(y[2]),g=0;if(a.contains(t[0])||a.contains(t[1])||a.contains(t[2])||a.contains(t[3]))g=1;$.b(swears,function(k,l){var e="";if(0<b||0<c||0<f){var h=0,h=-1!=b?b:-1!=c?c:f,h=d.substr(0,h);h.contains(l)&&(e=a.substr(h.indexOf(l),l.length).split("").join(z[g]))}-1==b&&-1==f&&-1==c&&0<=d.indexOf(l)&&(e=a.substr(d.indexOf(l),l.length).split("").join(z[g]));a=a.replace(l,e)});$("#message").a(a)}function I(){var a=$("textarea")[r()].value,d=$.extend({},emoticon_1,emoticon_2,emoticon_3,emoticon_ragefaces,emoticon_dongs);$.b(d,function(b,c){a.contains(c[0])&&(a=a.replace(c[0],x(c[1])))});$.b(twitch_c,function(b,c){-1!==a.g(c)&&(a=a.replace(c,x(twitch_e[b])))});$("textarea")[r()].value=a}function J(){var a=$("#message").a(),d=$.extend({},emoticon_1,emoticon_2,emoticon_3,emoticon_ragefaces,emoticon_dongs);$.b(d,function(b,c){a.contains(c[0])&&(a=a.replace(c[0],u[0]+c[1]+u[1]))});$.b(twitch_c,function(b,c){-1!==a.g(c)&&(a=a.replace(c,u[0]+twitch_e[b]+u[1]))});$("#message").a(a)}function K(){var a=$("textarea")[r()].value;$.b(maymay,function(d,b){a.contains(b[0])&&(a=a.replace(b[0],b[1]))});$("textarea")[r()].value=a}function L(){var a=$("#message").a();$.b(maymay,function(d,b){a.contains(b[0])&&(a=a.replace(b[0],b[1]))});$("#message").a(a)}function M(){var a=$(".text-styles tr")[0];$(a).h($('<td id="hide_button" class="fontbutton"></td>'));a=$(a).find("td");$(a[0]).append($('<input name="hide" id="hide-button" class="format-message" type="checkbox"><label id="click_area_hide" title="Hide" style="cursor:pointer;"></label>'));$("#click_area_hide").click(function(){$(".hider").is(":visible")?($(".hider").v(),$("#click_area_hide").text("<"),Cookies.set("CB_hide","1")):($(".hider").show(),$("#click_area_hide").text(">"),Cookies.set("CB_hide","0"))})}function A(a,d,b){var c=$(".text-styles tr")[0];$(c).h($('<td id="'+a+'_button" class="fontbutton hider"></td>'));c=$(c).find("td");$(c[0]).append($('<input name="'+a+'" id="format-'+a+'" class="format-message" type="checkbox"><label id="click_area_'+a+'" title="'+d+'" style="cursor:pointer;height: 100%;"><img class="swearIcons" src="'+b+'"></label>'));return $("#format-"+a)}function B(a,d){"1"===Cookies.get("CB_"+a)?$(d).f("checked",!0):$(d).f("checked",!1);$("#click_area_"+a).click(function(){var b="CB_"+a,c;for(c in p)b!==p[c][0]&&"1"===Cookies.get(p[c][0])&&(p[c][1].f("checked",!1),Cookies.set(p[c][0],"0"));$(d).f("checked")?($(d).f("checked",!1),Cookies.set("CB_"+a,"0")):($(d).f("checked",!0),Cookies.set("CB_"+a,"1"))});p[p.length]=["CB_"+a,$(d)]}function N(a){var d=$.extend({},emoticon_1,emoticon_2,emoticon_3,emoticon_dongs),b=[];$("#emoticonNotif").text("");if(0<a.length){var c=new RegExp(a,"gi");$.b(d,function(a,d){if(0<=d[0].g(c)){if(104<=b.length)return $("#emoticonNotif").text("too many results, capped at 104"),!1;b.push({name:a,i:d[0],j:d[1]})}});$.b(twitch_c,function(a,d){if(0<=d.g(c)){if(104<=b.length)return $("#emoticonNotif").text("too many results, capped at 104"),!1;b.push({name:d,i:d,j:twitch_e[a]})}})}else $("#emoticonNotif").text("search something, shitmongrel");return b}function O(a,d){var b;b=$("table")[2]?$("table")[2]:$("table")[0];$(b).empty();$(b).append($("<tbody></tbody>"));var c=$(b).find("tbody")[0],f=0,g=0;$.b(a,function(b,l){$(c).append($("<tr></tr>"));var e=$(c).find("tr")[g];$(e).append("<td></td>");e=$(e).find("td")[f];$(e).append($(n(l.i,a[b].j)));m(a[b].j,l.i,e);f++;f>=d&&(f=0,g++)})}function h(a,d){var b;$("table")[2]?b=$("table")[2]:(b=$("table")[0],d=1);$(b).empty();$(b).append($("<tbody></tbody>"));var c=$(b).find("tbody")[0],f=0,g=0;1==a?$.b(emoticon_1,function(a,b){$(c).append($("<tr></tr>"));var e=$(c).find("tr")[g];$(e).append("<td></td>");e=$(e).find("td")[f];$(e).append($(n(b[0],b[1])));m(b[1],b[0],e);f++;f>=d&&(f=0,g++)}):2==a?$.b(emoticon_2,function(a,b){$(c).append($("<tr></tr>"));var e=$(c).find("tr")[g];$(e).append("<td></td>");e=$(e).find("td")[f];$(e).append($(n(b[0],b[1])));m(b[1],b[0],e);f++;f>=d&&(f=0,g++)}):3==a?$.b(emoticon_3,function(a,b){$(c).append($("<tr></tr>"));var e=$(c).find("tr")[g];$(e).append("<td></td>");e=$(e).find("td")[f];$(e).append($(n(b[0],b[1])));m(b[1],b[0],e);f++;f>=d&&(f=0,g++)}):4==a?$.b(twitch_c,function(a,b){$(c).append($("<tr></tr>"));var e=$(c).find("tr")[g];$(e).append("<td></td>");e=$(e).find("td")[f];$(e).append($(n(b,twitch_e[a])));m(twitch_e[a]," "+b+" ",e);f++;f>=d&&(f=0,g++)}):5==a?$.b(emoticon_ragefaces,function(a,b){$(c).append($("<tr></tr>"));var e=$(c).find("tr")[g];$(e).append("<td></td>");e=$(e).find("td")[f];$(e).append($(n(b[0],b[1])));m(b[1],b[0],e);f++;f>=d&&(f=0,g++)}):6==a?$.b(emoticon_dongs,function(a,b){$(c).append($("<tr></tr>"));var e=$(c).find("tr")[g];$(e).append("<td></td>");e=$(e).find("td")[f];$(e).append($(n(b[0],b[1])));m(b[1],b[0],e);f++;f>=d&&(f=0,g++)}):7==a&&$.b(maymay,function(a,b){$(c).append($("<tr></tr>"));var e=$(c).find("tr")[g];$(e).append("<td></td>");e=$(e).find("td")[f];$(e).append($(n(b[1],b[1])));m(b[1],b[0],e);f++;f>=d&&(f=0,g++)})}function P(){html2canvas(document.body,{F:function(a){var d=a.toDataURL("image/png");$("<div></div>").o({D:!0,title:"View Screenshot",open:function(){$(this).B("<a target='_blank' href='"+d+"'>Click to Open</a>")},buttons:{w:function(){$(this).o("close")}},close:function(){$(this).o("destroy").remove()}})}})}function Q(){$(".genmed").h('<span id="chatbox_screenshot"><a href="javascript:void(0)">Take Screenshot</a></span>&nbsp;|&nbsp;');$("#chatbox_screenshot").click(function(){P()})}var q=0,u=["[img]","[/img]"],v=["[color=#789922]","[/color]"],G={1:"Swearify 1",2:"Swearify 2",3:"Swearify 3",4:"Twitch",5:"Rage Faces",6:"Dongs",7:"Memes",8:"Search"},t=["/exit","/away","/abs","[code]"],z=["[b][/b]","."],y=["http://","www.","https://"],p=[];String.prototype.contains=function(a){return-1!==this.indexOf(a)};String.prototype.g=function(a){a=this.substring(0).search(a);return 0<=a?a+0:a};$.u("https://hulasamsquanch.github.io/aimgames/swearify/swearifyVar.js",function(){F();if("http://aimgames.forummotion.com/post?categ=1&mode=smilies"===window.location.href||"http://aimgames.forummotion.com/smilies.forum?categ=1&mode=smilies_frame"===window.location.href)console.log("done"),h(1,k()),window.onresize=function(){h(1,k())};else if("http://aimgames.forummotion.com/post?categ=2&mode=smilies"===window.location.href||"http://aimgames.forummotion.com/smilies.forum?categ=2&mode=smilies_frame"===window.location.href)h(2,k()),window.onresize=function(){h(2,k())};else if("http://aimgames.forummotion.com/post?categ=3&mode=smilies"===window.location.href||"http://aimgames.forummotion.com/smilies.forum?categ=3&mode=smilies_frame"===window.location.href)h(3,k()),window.onresize=function(){h(3,k())};else if("http://aimgames.forummotion.com/post?categ=4&mode=smilies"===window.location.href||"http://aimgames.forummotion.com/smilies.forum?categ=4&mode=smilies_frame"===window.location.href)h(4,k()),window.onresize=function(){h(4,k())};else if("http://aimgames.forummotion.com/post?categ=5&mode=smilies"===window.location.href||"http://aimgames.forummotion.com/smilies.forum?categ=5&mode=smilies_frame"===window.location.href)h(5,k()),window.onresize=function(){h(5,k())};else if("http://aimgames.forummotion.com/post?categ=6&mode=smilies"===window.location.href||"http://aimgames.forummotion.com/smilies.forum?categ=6&mode=smilies_frame"===window.location.href)h(6,k()),window.onresize=function(){h(6,k())};else if("http://aimgames.forummotion.com/post?categ=7&mode=smilies"===window.location.href||"http://aimgames.forummotion.com/smilies.forum?categ=7&mode=smilies_frame"===window.location.href)h(7,k()),window.onresize=function(){h(7,k())};else if("http://aimgames.forummotion.com/post?categ=8&mode=smilies"===window.location.href||"http://aimgames.forummotion.com/smilies.forum?categ=8&mode=smilies_frame"===window.location.href){E();var a;$("#emoteSearchBox").s("keyup",function(){a&&clearTimeout(a);var d=this.value;a=setTimeout(function(){O(N(d),k())},250)})}else"http://aimgames.forummotion.com/chatbox/index.forum?page=front&"===window.location.href||"http://aimgames.forummotion.com/chatbox/index.forum"===window.location.href||"http://aimgames.forummotion.com/chatbox/index.forum?archives=1"===window.location.href||"http://aimgames.forummotion.com/chatbox/index.forum?archives"===window.location.href||"http://aimgames.forummotion.com/chatbox"===window.location.href||"http://aimgames.forummotion.com/"===window.location.href?(w("https://hulasamsquanch.github.io/aimgames/swearify/78-ltr.css"),w("https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css"),w("https://hulasamsquanch.github.io/aimgames/swearify/swearify_v2.css"),M(),B("rainbow",A("rainbow","Rainbow","http://i.imgur.com/F69UQGS.png")),B("random",A("random","Random","http://i.imgur.com/jHMOnyI.png")),"1"===Cookies.get("CB_hide")?($(".hider").v(),$("#click_area_hide").text("<")):($(".hider").show(),$("#click_area_hide").text(">")),C(),navigator.userAgent.toLowerCase().contains("chrome")&&$.u("http://daffeinatek.byethost32.com/swearify/html2canvas.js",function(){Q()}),$("#message").s("keydown",function(a){if(13===a.which||45===a.which)H(),J(),L(),0===$("#message").a().indexOf(">")&&$("#message").a(v[0]+$("#message").a()+v[1]),"1"===Cookies.get("CB_rainbow")&&$("#message").a(rainbowText($("#message").a())),"1"===Cookies.get("CB_random")&&$("#message").a(randomText($("#message").a()))})):(window.location.href.contains("aimgames.forummotion.com/post")&&D(),$("textarea").s("keydown",function(a){if(13===a.which){I();a=$("textarea")[r()].value.split("\n");for(var b=0;b<a.length;b++)0===a[b].indexOf(">")&&(a[b]=v[0]+a[b]+v[1],$("textarea")[r()].value=a.join("<br>"));K()}}))})})();