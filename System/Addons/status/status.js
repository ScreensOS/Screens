﻿(function() {
var div = document.getElementById('body');
div.innerHTML = div.innerHTML + '<div class="tophotspot"></div>';

div = document.getElementById('body');
div.innerHTML = div.innerHTML + '<div id="statusbar"></div>';
document.getElementById("boot-status").innerHTML = 'Addon: Status - Clock';

div = document.getElementById('statusbar');
div.innerHTML = div.innerHTML + '<span id="clock"></span> <span class="abtndata" id="weekday"></span>';
})();

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    var span = document.getElementById('clock');
    span.innerHTML = h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

document.getElementById("boot-status").innerHTML = 'Addon: Status - System Background Icons';
div = document.getElementById('statusbar');
div.innerHTML = div.innerHTML + '<div id="system-apps"><li class="minipic" title="[Example] User"><img src="Users/User/Data/pic-default.svg" alt="User" height="39" width="52" onclick="$(`#usermenu`).toggle();return false" /></li></div>';
document.getElementById("boot-status").innerHTML = 'Addon: Status - Background Apps';
div = document.getElementById('statusbar');
div.innerHTML = div.innerHTML + '<div class="working-apps"><div class="topbar-notifications" title="Control Center" onclick="$(`#controlcenter`).toggle();return false"></div><icon class="mini unavail" title="[Example] 4 app updates available" onclick="showDialog(`dialog`)"><img width="18" height="18" src="System/Apps/Store.js/icon.svg#icon" onclick="showDialog(`dialog`)"></icon><icon class="mini unavail" title="[Example] Browser - Updating app" onclick="showDialog(`dialog`)"><img width="18" height="18" src="System/Apps/com.plasmmer.browser/icon.svg#icon"></icon><icon class="mini unavail" title="[Example] Playing Halo - Beyoncé" onclick="showDialog(`dialog`)"><img width="18" height="18" src="System/Apps/Music/icon.svg#icon"></icon><icon class="mini unavail" title="[Example] Uploading photo" onclick="showDialog(`dialog`)"><img width="18" height="18" src="System/Apps/Camera/icon.svg#icon"></icon><icon class="mini unavail" title="[Example] Running in background" onclick="showDialog(`dialog`)"><img width="18" height="18" src="System/Apps/Messenger/icon.svg#icon"></icon></div>';
document.getElementById("boot-status").innerHTML = 'Addon Status - Control Center';
div = document.getElementById('body');
div.innerHTML = div.innerHTML + '<div id="controlcenter" style="display: none;"><ul class="tabs center"><li class="first unavail current"><a href="#tabcc1"><div class="tabicon tab-all"></div> + Background apps</a></li><li class=""><a href="#tabcc2"><div class="tabicon tab-notifications"></div> Notifications</a></li><li class="last"><a href="#tabcc3"><div class="tabicon tab-all"></div> Actions</a></li></ul><tab id="tabcc1" class="tab-content clearfix" style="display: block;"><p>No more background apps are running.</p></tab><tab id="tabcc2" class="tab-content clearfix" style="display: none;"><p>No notifications.</p></tab><tab id="tabcc3" class="tab-content clearfix" style="display: none;"><div class="notifycenterbtn userpic unavail" title="[Example] User"><img src="Users/User/Data/pic-default.svg" alt="User" height="39" width="52" onclick="showDialog(`dialog`)"></div></tab></div><nav class="navmenu" id="usermenu" style="display: none;"><ul class="tabs center"><li class="first unavail current"><a href="#tabu1"><div class="tabicon tab-add"></div> Power</a></li><li class="last"><a href="#tabu2"><div class="tabicon tab-customize"></div> Me</a></li></ul><tab id="tabu1" class="tab-content clearfix" style="display: block;"><ul><a onclick="lock()"><li draggable="true" class="navi-item"><div><img src="img/Navmenu/file.svg#black" class="navi-img"></div><p>Lock</p></li></a><a onclick="restart()"><li draggable="true" class="navi-item"><div><img src="img/Navmenu/folder.svg#black" class="navi-img"></div><p>Restart</p></li></a><a onclick="showDialog(`dialog`)"><li draggable="true" class="navi-item unavail"><div><img src="img/Navmenu/action.svg#black" class="navi-img"></div><p>Action</p></li></a><a onclick="showDialog(`dialog`)"><li draggable="true" class="navi-item unavail"><div><img src="img/Navmenu/shortcut.svg#black" class="navi-img"></div><p>Shortcut</p></li></a><a><li draggable="true" class="navi-item unavail"><div><img src="img/Navmenu/groups.svg#black" class="navi-img"></div><p>Group</p></li></a></ul></tab><tab id="tabu2" class="tab-content clearfix" style="display: none;"><ul><a onclick="showDialog(`dialog`)"><li draggable="true" class="navi-item unavail"><div><img src="img/Navmenu/background.svg#black" class="navi-img"></div><p>Wallpaper</p></li></a><a onclick="showDialog(`dialog`)"><li draggable="true" class="navi-item unavail"><div><img src="img/Navmenu/launcher.svg#black" class="navi-img"></div><p>Launcher</p></li></a><a onclick="showDialog(`dialog`)"><li draggable="true" class="navi-item unavail"><div><img src="img/Navmenu/themes.svg#black" class="navi-img"></div><p>Themes</p></li></a></ul></tab></nav>';