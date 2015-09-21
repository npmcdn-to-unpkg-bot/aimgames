var imageTag = false;
var theSelection = false;
var clientPC = navigator.userAgent.toLowerCase();
var clientVer = parseInt(navigator.appVersion);
var is_ie = ((clientPC.indexOf('msie') != - 1) && (clientPC.indexOf('opera') == - 1));
var is_nav = ((clientPC.indexOf('mozilla') != - 1) && (clientPC.indexOf('spoofer') == - 1) && (clientPC.indexOf('compatible') == - 1) && (clientPC.indexOf('opera') == - 1) && (clientPC.indexOf('webtv') == - 1) && (clientPC.indexOf('hotjava') == - 1));
var is_moz = 0;
var is_win = ((clientPC.indexOf('win') != - 1) || (clientPC.indexOf('16bit') != - 1));
var is_mac = (clientPC.indexOf('mac') != - 1);
b_help = 'Bold text: [b]text[/b] (ctrl+b)';
i_help = 'Italic text: [i]text[/i] (ctrl+i)';
u_help = 'Underline text: [u]text[/u] (ctrl+u)';
q_help = 'Quote text: [quote]text[/quote] (ctrl+q)';
c_help = 'Code display: [code]code[/code] (ctrl+c)';
l_help = 'List: [list]text[/list] (ctrl+l)';
o_help = 'Ordered list: [list=]text[/list] (ctrl+o)';
p_help = 'Insert image: [img]http://image_url[/img] (ctrl+p)';
w_help = 'Insert URL: [url]http://url[/url] or [url=http://url]URL text[/url] (ctrl+w)';
a_help = 'Close all open BBCode tags';
s_help = 'Font color: [color=red]text[/color] Tip: you can also use color=#FF0000';
f_help = 'Font size: [size=x-small]small text[/size]';
k_help = 'Scroll text: [scroll]text[/scroll] (ctrl+k)';
e_help = 'Fade text: [fade]text[/fade] (ctrl+e)';
r_help = 'Blur text: [blur]text[/blur] (ctrl+r)';
j_help = 'Flip text h: [fliph]text[/fliph] (ctrl+j)';
v_help = 'Flip text v: [flipv]text[/flipv] (ctrl+v)';
m_help = 'Text align left: [left]text[/left] (ctrl+m)';
d_help = 'Updown text: [updown]text[/updown] (ctrl+d)';
t_help = 'Text align center: [center]text[/center] (ctrl+t)';
g_help = 'Text align right: [right]text[/right] (ctrl+g)';
x_help = 'Strike text: [strike]text[/strike] (ctrl+x)';
y_help = 'Host an image';
z_help = 'Insert a smiley in your message';
h_help = 'Visible text by those who have posted in this topic : [hide]text[/hide] (ctrl+h)';
sp_help = 'Hidden text can be displayed by clicking on it : [spoiler]text[/spoiler] (ctrl+o)';
wo_help = 'A World of Warcraft object : [wow]17104[/wow]';
ft_help = 'Text font : [font=Verdana]text[/font]';
jt_help = 'Justify text : [justify]text[/justify] (ctrl+j)';
sub_help = 'Put as index: [sub]text[/sub] (ctrl+m)';
sup_help = 'Put as exponent: [sup]text[/sup] (ctrl+n)';
tab_help = 'Insert a table';
hr_help = 'Insert a line break : text[hr]text';
fl_help = 'Insert flash : [flash(width,length)]url[/flash]';
vd_help = 'Insert a video (youtube, dailymotion)';
_help = '';
bbcode = new Array();
bbtags = new Array('[b]', '[/b]', '[i]', '[/i]', '[u]', '[/u]', '[quote]', '[/quote]', '[code]', '[/code]', '[list][*]', '[/list]', '[list=1][*]', '[/list]', '[img]', '[/img]', '[url]', '[/url]', '[scroll]', '[/scroll]', '[fade]', '[/fade]', '[blur]', '[/blur]', '[flipv]', '[/flipv]', '[fliph]', '[/fliph]', '[updown]', '[/updown]', '[center]', '[/center]', '[right]', '[/right]', '[strike]', '[/strike]', '[embed-flash(width,height)]', '[/embed-flash]');
bbtags[40] = '[hide]';
bbtags[41] = '[/hide]';
bbtags[42] = '[spoiler]';
bbtags[43] = '[/spoiler]';
bbtags[44] = '[wow]';
bbtags[45] = '[/wow]';
bbtags[46] = '[justify]';
bbtags[47] = '[/justify]';
bbtags[48] = '[sub]';
bbtags[49] = '[/sub]';
bbtags[50] = '[sup]';
bbtags[51] = '[/sup]';
bbtags[52] = '[left]';
bbtags[53] = '[/left]';
bbtags[54] = '[table]';
bbtags[55] = '[/table]';
bbtags[56] = '[hr]';
bbtags[58] = '[tr]';
bbtags[59] = '[/tr]';
bbtags[60] = '[td]';
bbtags[61] = '[/td]';
var selectId = new Array('px', 'color', 'font', 'other', 'table_gui', 'flash', 'url', 'img', 'servimg_upload_gui', 'video', 'sel_smilies', 'dices', 'wpx', 'wcolor', 'wfont', 'wother', 'wtable_gui', 'wflash', 'wurl', 'wimg', 'wservimg_upload_gui', 'wvideo', 'wsel_smilies', 'wdices');
imageTag = false;
function helpline(help) {
  if (help.length < 5) {
    document.getElementById('helpbox').innerHTML = eval(help + '_help')
  } else {
    document.getElementById('helpbox').innerHTML = help
  }
}
function getarraysize(thearray) {
  for (i = 0; i < thearray.length; i++) {
    if ((thearray[i] == 'undefined') || (thearray[i] == '') || (thearray[i] == null)) return i
  }
  return thearray.length
}
function arraypush(thearray, value) {
  thearray[getarraysize(thearray)] = value
}
function arraypop(thearray) {
  thearraysize = getarraysize(thearray);
  retval = thearray[thearraysize - 1];
  delete thearray[thearraysize - 1];
  return retval
}
function checkForm() {
  formErrors = false;
  if (document.post.message.value.length < 3) {
    formErrors = 'You must enter a message when posting.'
  }
  if (formErrors) {
    return false
  } else {
    bbstyle( - 1);
    return true
  }
}
function emoticon(text) {
  var txtarea = document.post.message;
  text = ' ' + text + ' ';
  if (txtarea.createTextRange && txtarea.caretPos) {
    var caretPos = txtarea.caretPos;
    caretPos.text = caretPos.text.charAt(caretPos.text.length - 1) == ' ' ? caretPos.text + text + ' ' : caretPos.text + text;
    txtarea.focus()
  } else {
    txtarea.value += text;
    txtarea.focus()
  }
}
function emoticonp(text) {
  if (parent.document.getElementById('html_edit') && parent.smilieoptions && parent.document.getElementById('html_edit').style.display != 'none') {
    var smiles = parent.smilieoptions;
    for (var i in smiles) {
      if (smiles[i][2] == text) {
        text = ' <img src="' + smiles[i][0] + '" border="0" smilieid="' + i + '" />';
        parent.vB_Editor['text_editor'].insert_text(text, text.length, 0)
      }
    }
  } else {
    text = ' ' + text + ' ';
    if (parent.document.forms['post'].message.createTextRange && parent.document.forms['post'].message.caretPos) {
      var caretPos = parent.document.forms['post'].message.caretPos;
      caretPos.text = caretPos.text.charAt(caretPos.text.length - 1) == ' ' ? text + ' ' : text;
      parent.document.forms['post'].message.focus()
    } else {
      parent.vB_Editor['text_editor'].insert_text(text, text.length, 0);
      parent.document.forms['post'].message.focus()
    }
  }
}
function emoticonw(text) {
  text = ' ' + text + ' ';
  if (opener.document.forms['post'].message.createTextRange && opener.document.forms['post'].message.caretPos) {
    var caretPos = opener.document.forms['post'].message.caretPos;
    caretPos.text = caretPos.text.charAt(caretPos.text.length - 1) == ' ' ? text + ' ' : text;
    opener.document.forms['post'].message.focus()
  } else {
    opener.document.forms['post'].message.value += text;
    opener.document.forms['post'].message.focus()
  }
}
function constructBBcode(bbcode, args, content) {
  var textarea = document.post.message;
  var i = 0;
  var tmp_args = '';
  var tmp_content = '';
  if (bbcode == 'flash' || bbcode == 'img' || (bbcode == 'url' && document.getElementById(content).value != '')) {
    tmp_content += document.getElementById(content).value
  } else {
    tmp_content += document.getElementById(args[0]).value
  }
  if (bbcode == 'flash') {
    if (document.getElementById(args[0]).value > 0 && document.getElementById(args[1]).value > 0) {
      tmp_args += '(' + document.getElementById(args[0]).value + ',' + document.getElementById(args[1]).value + ')'
    }
  } else {
    if (bbcode == 'url' && document.getElementById(args[0]).value != '') {
      tmp_args += '=';
      if (document.getElementById(args[0]).value.indexOf('www.') == 0) {
        document.getElementById(args[0]).value = 'http://' + document.getElementById(args[0]).value
      }
    }
    while (i < args.length) {
      tmp_args += document.getElementById(args[i]).value;
      document.getElementById(args[i]).value = '';
      if (i != args.length - 1) {
        tmp_args += ','
      }
      i++
    }
  }
  textarea.value = textarea.value + '[' + bbcode + tmp_args + ']' + tmp_content + '[/' + bbcode + ']';
  document.getElementById(content).value = ''
}
function BBcodeVideo(id) {
  var url = document.getElementById(id).value;
  var textarea = document.post.message;
  var span = document.getElementById('inv_url');
  if (url.indexOf('youtube') != '-1' || url.indexOf('youtu.be') != '-1') {
    textarea.value = textarea.value + '[youtube]' + url + '[/youtube]';
    selectWysiwyg(this, 'video')
  } else if (url.indexOf('dailymotion') != '-1') {
    textarea.value = textarea.value + '[dailymotion]' + url + '[/dailymotion]';
    selectWysiwyg(this, 'video')
  } else if (url.indexOf('google') != '-1') {
    textarea.value = textarea.value + '[googlevideo]' + url + '[/googlevideo]';
    selectWysiwyg(this, 'video')
  } else {
    span.innerHTML = 'Supplied URL is invalid:'
  }
}
function bbfontstyle(bbopen, bbclose) {
  var txtarea = document.post.message;
  var text = bbopen + bbclose;
  var bboffset = bbclose.length;
  if ((clientVer >= 4) && is_ie && is_win) {
    theSelection = document.selection.createRange().text;
    if (!theSelection) {
      txtarea.value += bbopen + bbclose;
      txtarea.focus();
      return
    }
    document.selection.createRange().text = bbopen + theSelection + bbclose;
    txtarea.focus();
    return
  } else if (txtarea.selectionEnd && (txtarea.selectionEnd - txtarea.selectionStart > 0)) {
    mozWrap(txtarea, bbopen, bbclose);
    return
  } else {
    vB_Editor['text_editor'].insert_text(text, text.length, bboffset);
    txtarea.setSelectionRange(txtarea.value.length - bbclose.length, txtarea.value.length - bbclose.length);
    txtarea.focus()
  }
  storeCaret(txtarea)
}
function bbstyle(bbnumber) {
  var txtarea = document.post.message;
  var button = document.getElementById('addbbcode' + bbnumber);
  if (bbnumber != - 1) {
    var tag = document.getElementById('addbbcode' + bbnumber).tagName
  }
  donotinsert = false;
  theSelection = false;
  bblast = 0;
  if (bbnumber == - 1) {
    while (bbcode[0]) {
      butnumber = arraypop(bbcode) - 1;
      txtarea.value += bbtags[butnumber + 1];
      var tag = document.getElementById('addbbcode' + butnumber).tagName;
      if (tag == 'INPUT') {
        buttext = eval('document.post.addbbcode' + butnumber + '.value');
        eval('document.post.addbbcode' + butnumber + '.value ="' + buttext.substr(0, (buttext.length - 1)) + '"')
      } else if (tag == 'BUTTON' && document.getElementById('addbbcode' + butnumber)) {
        document.getElementById('addbbcode' + butnumber).className = 'button2'
      }
    }
    imageTag = false;
    txtarea.focus();
    return
  }
  if ((clientVer >= 4) && is_ie && is_win) {
    theSelection = document.selection.createRange().text;
    if (theSelection) {
      document.selection.createRange().text = bbtags[bbnumber] + theSelection + bbtags[bbnumber + 1];
      txtarea.focus();
      theSelection = '';
      return
    }
  } else if (txtarea.selectionEnd && (txtarea.selectionEnd - txtarea.selectionStart > 0)) {
    mozWrap(txtarea, bbtags[bbnumber], bbtags[bbnumber + 1]);
    return
  }
  for (i = 0; i < bbcode.length; i++) {
    if (bbcode[i] == bbnumber + 1) {
      bblast = i;
      donotinsert = true
    }
  }
  if (donotinsert) {
    while (bbcode[bblast]) {
      butnumber = arraypop(bbcode) - 1;
      txtarea.value += bbtags[butnumber + 1];
      if (tag == 'INPUT') {
        buttext = eval('document.post.addbbcode' + butnumber + '.value');
        eval('document.post.addbbcode' + butnumber + '.value ="' + buttext.substr(0, (buttext.length - 1)) + '"')
      } else if (tag == 'BUTTON' && document.getElementById('addbbcode' + bbnumber)) {
        button.className = 'button2'
      }
      imageTag = false
    }
    txtarea.focus();
    return
  } else {
    if (imageTag && (bbnumber != 14)) {
      txtarea.value += bbtags[15];
      lastValue = arraypop(bbcode) - 1;
      document.post.addbbcode14.value = 'Img';
      imageTag = false
    }
    txtarea.value += bbtags[bbnumber];
    if ((bbnumber == 14) && (imageTag == false)) imageTag = 1;
    arraypush(bbcode, bbnumber + 1);
    if (tag == 'INPUT') {
      eval('document.post.addbbcode' + bbnumber + '.value += "*"')
    } else if (tag == 'BUTTON' && document.getElementById('addbbcode' + bbnumber)) {
      button.className = 'button2 bbcode'
    }
    txtarea.focus();
    return
  }
  storeCaret(txtarea)
}
function FindXY(obj) {
  var x = 0,
  y = 0;
  while (obj != null) {
    x += obj.offsetLeft;
    y += obj.offsetTop;
    obj = obj.offsetParent
  }
  return {
    'x': x,
    'y': y
  }
}
function selectWysiwyg(button, div) {
  var div = document.getElementById(div);
  var visible = div.style.visibility;
  if (visible == 'hidden') {
    var cd = FindXY(button);
    var h = button.offsetHeight;
    var i = 0;
    while (i < selectId.length) {
      if (document.getElementById(selectId[i])) {
        document.getElementById(selectId[i]).style.visibility = 'hidden'
      }
      i++
    }
    div.style.visibility = 'visible';
    if (div.id != 'sel_smilies' && div.id != 'wsel_smilies') {
      div.style.width = 'auto'
    } else {
      if (!document.getElementById('sel_smilies_content')) {
        var smilies_content = '<div id="sel_smilies_content" align="center">';
        for (var smilieid in smilieoptions) {
          smilies_content += '<button onclick="emoticonp(\'' + smilieoptions[smilieid][2] + '\');selectWysiwyg(this, \'sel_smilies\');return false;"><img alt="' + smilieoptions[smilieid][1] + '" title="' + smilieoptions[smilieid][1] + '" src="' + smilieoptions[smilieid][0] + '" /></button> '
        }
        smilies_content += '</div>';
        div.innerHTML = smilies_content
      }
    }
    overFlowX = cd['x'] + div.offsetWidth - document.body.offsetWidth;
    cd['x'] = overFlowX > 0 ? cd['x'] - overFlowX : cd['x'];
    div.style.left = cd['x'] + 'px';
    div.style.top = (cd['y'] + h) + 'px'
  } else {
    div.style.visibility = 'hidden'
  }
}
function mozWrap(txtarea, open, close) {
  var selLength = txtarea.textLength;
  var selStart = txtarea.selectionStart;
  var selEnd = txtarea.selectionEnd;
  if (selEnd == 1 || selEnd == 2) selEnd = selLength;
  var s1 = (txtarea.value).substring(0, selStart);
  var s2 = (txtarea.value).substring(selStart, selEnd);
  var s3 = (txtarea.value).substring(selEnd, selLength);
  txtarea.value = s1 + open + s2 + close + s3;
  return
}
function storeCaret(textEl) {
  if (textEl.createTextRange) textEl.caretPos = document.selection.createRange().duplicate()
}
var html = document.getElementsByTagName('html');
var document_dir = 'ltr';
for (var i = 0; i < html.item(0).attributes.length; i++) {
  var item = html.item(0).attributes[i];
  if (item.name == 'dir' && item.value == 'ltr' || item.value == 'rtl') {
    document_dir = item.value;
    break
  }
}
var mouse_y = 0;
var mouse_x = 0;
function get_mouseX(evt) {
  if (!evt) {
    evt = window.event
  }
  if (evt.pageX) {
    return evt.pageX
  } else if (evt.clientX) {
    var offset_temp = 0;
    if (document.documentElement) {
      if (document.documentElement.scrollLeft) {
        offset_temp = document.documentElement.scrollLeft
      } else {
        offset_temp = 0
      }
    } else {
      offset_temp = document.body.scrollLeft
    }
    return evt.clientX + offset_temp
  } else {
    return 0
  }
}
function get_mouseY(evt) {
  if (!evt) {
    evt = window.event
  }
  if (evt.pageY) {
    return evt.pageY
  } else if (evt.clientY) {
    var offset_temp = 0;
    if (document.documentElement) {
      if (document.documentElement.scrollTop) {
        offset_temp = document.documentElement.scrollTop
      } else {
        offset_temp = 0
      }
    } else {
      offset_temp = document.body.scrollTop
    }
    return evt.clientY + offset_temp
  } else {
    return 0
  }
}
function get_mouse_pos(evt) {
  if (document.getElementById) {
    mouse_y = (parseInt(get_mouseY(evt)) + 15) + 'px';
    mouse_x = (parseInt(get_mouseX(evt)) + 15) + 'px'
  }
}
if (document.all) {
  document.attachEvent('onmousemove', get_mouse_pos)
} else {
  document.addEventListener('mousemove', get_mouse_pos, true)
}
function showhide(vari) {
  var window_width = 0;
  if (document.getElementById('content')) {
    window_width = document.getElementById('content').offsetWidth
  } else {
    window_width = (document.body) ? document.body.clientWidth : window.innerWidth
  }
  if (vari != document.getElementById('plus_menu')) {
    vari.style.top = mouse_y;
    window_width = (document.body) ? document.body.clientWidth : window.innerWidth
  }
  vari.style.display = (vari.style.display == 'none') ? '' : 'none';
  var vari_style_width = parseInt(vari.style.width);
  vari_style_width = (!isNaN(vari_style_width)) ? vari_style_width : vari.offsetWidth;
  var element_vari = vari;
  while (vari_style_width == 0 && element_vari.firstChild.offsetWidth) {
    element_vari = element_vari.firstChild;
    vari_style_width = element_vari.offsetWidth
  }
  mouse_x = parseInt(mouse_x);
  while (vari_style_width + mouse_x >= window_width) {
    mouse_x -= 10
  }
  vari.style.left = mouse_x + 'px'
}
function insert_search_menu(session_id) {
  session_input = (session_id ? '<input type="hidden" name="sid" value="' + session_id + '" />' : '');
  session_id = (session_id ? '?sid=' + session_id : '');
  url_search = window.url_search || '/search.forum';
  document.write('<div id="search_menu" style="display:none;position:absolute;z-index:10000"><form action="' + url_search + '" method="get"><input type="hidden" name="mode" value="searchbox"/><table class="forumline" cellpadding="3" cellspacing="0" border="0"><tr><th class="thHead">Search Query</th></tr><tr><td class="row2" align="center"><input type="text" class="post" name="search_keywords" size="24" style="height:20px;margin-top:6px;margin-right:3px;"/><input type="submit" class="button" value="Go"/></td></tr><tr><td class="row2" align="center" nowrap="nowrap"><span class="genmed">&nbsp;Display results as :&nbsp;<input id="rposts" type="radio" name="show_results" value="posts"/><label for="rposts">&nbsp;Posts</label><input id="rtopics" type="radio" name="show_results" value="topics" checked="checked"/><label for="rtopics">&nbsp;Topics</label>&nbsp;</span></td></tr><tr><td class="row2" align="center" nowrap="nowrap"><span class="genmed"><label for="rtags">&nbsp;Tags</label>&nbsp;<input id="rtags" type="checkbox" name="is_tag" value="true"/></span></td></tr><tr><td class="row2" align="center"><span class="genmed"><hr><a href="' + url_search + session_id + '" rel="nofollow" title="Advanced Search"><img src="http://illiweb.com/fa/empty.gif" width="12" height="13" border="0" hspace="3" alt="Advanced Search"/>&nbsp;Advanced Search</a></span></td></tr></table>' + session_input + '</form></div>')
}
function insert_search_menu_new(session_id) {
  session_input = (session_id ? '<input type="hidden" name="sid" value="' + session_id + '" />' : '');
  session_id = (session_id ? '?sid=' + session_id : '');
  url_search = window.url_search || '/search.forum';
  document.write('<div class="overview row3" id="search_menu" style="display:none;position:absolute;width:350px;z-index:10000"><form action="' + url_search + '" method="get"><input type="hidden" name="mode" value="searchbox"/><p class="title-overview row2">Search Query</p><p class="center-overview"><input type="text" class="inputbox medium" name="search_keywords"/>' + session_input + '<input type="submit" class="button1" value="Go"/><br/>Display results as : <label for="rposts"><input id="rposts" type="radio" name="show_results" value="posts"/> Posts</label><label for="rtopics"><input id="rtopics" type="radio" name="show_results" value="topics" checked="checked"/> Topics</label></p><p class="center-overview"><label for="rtags">Tags&nbsp;&nbsp;</label><input id="rtags" type="checkbox" name="is_tag" value="true" /></p><hr class="dashed"/><p class="center-overview"><a href="' + url_search + session_id + '" rel="nofollow" title="Advanced Search"><img src="http://illiweb.com/fa/empty.gif" width="12" height="13" alt="Advanced Search"/> Advanced Search</a></p>' + session_input + '</form></div>')
}
function insert_plus_menu(search_where, session_id, add_favourite) {
  var favourite = '';
  session_id = (session_id ? '&amp;sid=' + session_id : '');
  if (add_favourite) {
    favourite = search_where.replace(new RegExp('f([0-9]*)(&|&amp;)t=([0-9]*)', 'g'), '$3');
    url_favourite = window.url_favourite || ('/search.forum?search_id=favouritesearch&amp;add_favourite=' + favourite + session_id);
    favourite = '<a rel="nofollow" href="' + url_favourite + '">Add to your favourites</a><br />'
  }
  search_where = '&amp;search_where=' + search_where;
  url_newposts = window.url_newposts || ('/search.forum?search_id=newposts' + search_where + session_id);
  url_egosearch = window.url_egosearch || ('/search.forum?search_id=egosearch' + search_where + session_id);
  url_unanswered = window.url_unanswered || ('/search.forum?search_id=unanswered' + search_where + session_id);
  url_watchsearch = window.url_watchsearch || ('/search.forum?search_id=watchsearch' + search_where + session_id);
  document.write('<a rel="nofollow" href="javascript:showhide(document.getElementById(\'plus_menu\'))">Actions</a><br /><div id="plus_menu" style="display:none;position:absolute;margin-top:8px;z-index:1;"><table class="forumline" cellpadding="3" cellspacing="0" border="0" width="200"><tr><th class="thHead">Actions</th></tr><tr><td class="row1" nowrap="nowrap"><span class="gensmall"><b><a rel="nofollow" href="' + url_newposts + '">View posts since last visit</a><br /><a rel="nofollow" href="' + url_egosearch + '">View your posts</a><br /><a rel="nofollow" href="' + url_unanswered + '">View unanswered posts</a><br /><a href="' + url_watchsearch + '">Topic(s) being watched</a><hr>' + favourite + '<a rel="nofollow" href="' + self.location.href + '" onclick="link_bbcode();return false">Copy BBCode URL</a><br /><a rel="nofollow" href="javascript:void(0);" onclick="window.print();return false">Print this page</a></b></span></td></tr></table></div>')
}
function insert_plus_menu_new(search_where, session_id, add_favourite, watch_topic) {
  var watch = '';
  if (watch_topic) {
    watch = watch_topic + '<br />'
  }
  var favourite = '';
  session_id = (session_id ? '&amp;sid=' + session_id : '');
  if (add_favourite) {
    favourite = search_where.replace(new RegExp('f([0-9]*)(&|&amp;)t=([0-9]*)', 'g'), '$3');
    url_favourite = window.url_favourite || ('/search.forum?search_id=favouritesearch&amp;add_favourite=' + favourite + session_id);
    favourite = '<a rel="nofollow" href="' + url_favourite + '">Add to your favourites</a><br />'
  }
  search_where = '&amp;search_where=' + search_where;
  url_newposts = window.url_newposts || ('/search.forum?search_id=newposts' + search_where + session_id);
  url_egosearch = window.url_egosearch || ('/search.forum?search_id=egosearch' + search_where + session_id);
  url_unanswered = window.url_unanswered || ('/search.forum?search_id=unanswered' + search_where + session_id);
  url_watchsearch = window.url_watchsearch || ('/search.forum?search_id=watchsearch' + search_where + session_id);
  document.write('<a rel="nofollow" href="javascript:showhide(document.getElementById(\'plus_menu\'))">Actions</a><br /><div class="overview row3" id="plus_menu" style="display:none;position:absolute;width:400px;margin-top:8px;z-index:1;"><p class="title-overview row2"><strong>Actions</strong></p><p class="left-overview"><strong><a rel="nofollow" href="' + url_newposts + '">View posts since last visit</a><br /><a rel="nofollow" href="' + url_egosearch + '">View your posts</a><br /><a rel="nofollow" href="' + url_unanswered + '">View unanswered posts</a><br /><a rel="nofollow" href="' + url_watchsearch + '">Topic(s) being watched</a></strong></p><hr class="dashed" /><p class="left-overview"><strong>' + watch + favourite + '<a rel="nofollow" href="' + self.location.href + '" onclick="link_bbcode();return false">Copy BBCode URL</a><br /><a rel="nofollow" href="javascript:void(0);" onclick="window.print();return false">Print this page</a></strong></p></div>')
}
function insert_plus_album(search_where, session_id) {
  session_id = (session_id ? '&amp;sid=' + session_id : '');
  document.write('<a rel="nofollow" href="javascript:showhide(document.getElementById(\'plus_menu\'))">Actions</a><br /><div id="plus_menu" style="display:none;position:absolute;right:100px;z-index:1;"><table class="forumline" cellpadding="3" cellspacing="0" border="0"><tr><th class="thHead">Actions</th></tr></table></div>')
}
function insert_plus_album_new(search_where, session_id) {
  session_id = (session_id ? '&amp;sid=' + session_id : '');
  document.write('<a rel="nofollow" href="javascript:showhide(document.getElementById(\'plus_menu\'))">Actions</a><br /><div class="overview row3" id="plus_menu" style="display:none;margin: 8px 20px 0px 0px;position:absolute;right:20px;width:200px;z-index:1;"><p class="title-overview row2">Actions</p></div>')
}
function insert_plus_pic(search_where, session_id) {
  session_id = (session_id ? '&amp;sid=' + session_id : '');
  document.write('<a rel="nofollow" href="javascript:showhide(document.getElementById(\'plus_menu\'))">Actions</a><br /><div id="plus_menu" style="display:none;position:absolute;right:100px;z-index:1;"><table class="forumline" cellpadding="3" cellspacing="0" border="0"><tr><th class="thHead">Actions</th></tr></table></div>')
}
function insert_plus_pic_new(search_where, session_id) {
  session_id = (session_id ? '&amp;sid=' + session_id : '');
  document.write('<a rel="nofollow" href="javascript:showhide(document.getElementById(\'plus_menu\'))">Actions</a><br /><div class="overview row3" id="plus_menu" style="display:none;position:absolute;right:20px;margin-top:20px;z-index:1;"><p class="title-overview row2">Actions</p></div>')
}
function link_bbcode() {
  intext = '[url=' + self.location.href + ']' + window.document.title + '[/url]';
  if (document.all && !window.opera) {
    window.clipboardData.setData('Text', intext)
  } else {
    prompt('', intext)
  }
}
function ShowHideLayer(layer_open, layer_close) {
  if (layer_open != '') {
    expandLayer(layer_open)
  }
  if (layer_close != '') {
    expandLayer(layer_close)
  }
}
function ShowHideMenu(layer_open, layer_close, page_id, new_class) {
  if (layer_open != '') {
    expandLayer(layer_open)
  }
  if (layer_close != '') {
    expandLayer(layer_close)
  }
  if (document.getElementById(page_id).className == new_class) {
    document.getElementById(page_id).className = ''
  } else {
    document.getElementById(page_id).className = new_class
  }
}
function expandLayer(name) {
  var itm = null;
  if (document.getElementById) {
    itm = document.getElementById(name)
  } else if (document.all) {
    itm = document.all[name]
  } else if (document.layers) {
    itm = document.layers[name]
  }
  if (!itm) {
  } else if (itm.style) {
    if (itm.style.display == 'none') {
      itm.style.display = ''
    } else {
      itm.style.display = 'none'
    }
  } else {
    itm.visibility = 'show'
  }
}
function fa_endpage() {
  if (parent.wbo1_ferme) wbo1_ferme()
}
function hdr_ref(object) {
  if (document.getElementById) {
    return document.getElementById(object)
  } else if (document.all) {
    return eval('document.all.' + object)
  } else {
    return false
  }
}
function hdr_expand(object) {
  var object = hdr_ref(object);
  if (!object.style) {
    return false
  } else {
    object.style.display = ''
  }
  if (window.event) {
    window.event.cancelBubble = true
  }
}
function hdr_contract(object) {
  var object = hdr_ref(object);
  if (!object.style) {
    return false
  } else {
    object.style.display = 'none'
  }
  if (window.event) {
    window.event.cancelBubble = true
  }
}
function hdr_toggle(object, open_close, open_icon, close_icon) {
  var object = hdr_ref(object);
  var icone = hdr_ref(open_close);
  if (!object.style) {
    return false
  }
  if (object.style.display == 'none') {
    object.style.display = '';
    icone.src = close_icon
  } else {
    object.style.display = 'none';
    icone.src = open_icon
  }
}
function select_switch_col(nomchamp) {
  for (i = 0; i < document.post.length; i++) {
    if (document.post.elements[i].name && (document.post.elements[i].name).substring(0, nomchamp.length) == nomchamp && document.post.elements[i].disabled != true) {
      document.post.elements[i].checked = !document.post.elements[i].checked
    }
  }
}
function disabled1(choix, nomchamp) {
  var formulaire = document.getElementById(choix);
  for (i = 0; i < document.post.length; i++) {
    if (document.post.elements[i].type == 'checkbox' && (document.post.elements[i].name).substring(0, nomchamp.length) == nomchamp) {
      document.post.elements[i].disabled = ((formulaire.selectedIndex != 2) ? 'disabled' : '')
    }
  }
}
function disabled2(choix, nomchamp) {
  var formulaire = document.getElementById(choix);
  for (i = 0; i < document.post.length; i++) {
    if (document.post.elements[i].type == 'checkbox' && (document.post.elements[i].name).substring(0, nomchamp.length) == nomchamp) {
      document.post.elements[i].disabled = ((formulaire.selectedIndex != 1) ? 'disabled' : '')
    }
  }
}
var agt = navigator.userAgent.toLowerCase();
var originalFirstChild;
function createTitle(which, string, x, y) {
  if (typeof (originalFirstChild) == 'undefined') {
    originalFirstChild = document.body.firstChild
  }
  x = parseInt(mouse_x);
  y = parseInt(mouse_y);
  element = document.createElement('div');
  element.style.position = 'absolute';
  element.style.zIndex = 1000;
  element.style.visibility = 'hidden';
  excessWidth = 0;
  if (document.all) {
    excessWidth = 50
  }
  excessHeight = 20;
  element.innerHTML = '<div class="bodyline" style="max-width:400px;"><table cellspacing="0" cellpadding="0" border="0"><tr><td><span class="gen">' + string + '</span></td></tr></table></div>';
  renderedElement = document.body.insertBefore(element, document.body.firstChild);
  renderedWidth = renderedElement.offsetWidth;
  renderedHeight = renderedElement.offsetHeight;
  renderedElement.style.top = (y + 10) + 'px';
  renderedElement.style.left = (x + 10) + 'px';
  var window_width = document.getElementById('content') ? document.getElementById('content').offsetWidth : ((document.body) ? document.body.clientWidth : window.innerWidth);
  while (parseInt(renderedElement.style.left) + renderedElement.offsetWidth >= window_width) {
    renderedElement.style.left = (parseInt(renderedElement.style.left) - 10) + 'px'
  }
  if (agt.indexOf('gecko') != - 1 && agt.indexOf('win') != - 1) {
    setTimeout('renderedElement.style.visibility = \'visible\'', 1)
  } else {
    renderedElement.style.visibility = 'visible'
  }
}
function destroyTitle() {
  if (document.body.firstChild != originalFirstChild) {
    document.body.removeChild(document.body.firstChild)
  }
}
function my_getcookie(name) {
  cname = name + '=';
  cpos = document.cookie.indexOf(cname);
  if (cpos != - 1) {
    cstart = cpos + cname.length;
    cend = document.cookie.indexOf(';', cstart);
    if (cend == - 1) {
      cend = document.cookie.length
    }
    return unescape(document.cookie.substring(cstart, cend))
  }
  return null
}
function my_setcookie(name, value, sticky, path) {
  expires = '';
  domain = '';
  if (sticky) {
    expires = '; expires=Wed, 1 Jan 2020 00:00:00 GMT'
  }
  if (!path) {
    path = '/'
  }
  document.cookie = name + '=' + value + '; path=' + path + expires + domain + ';'
}
function expandAllLayer(name, open_close, layer_open_close) {
  var itm = null;
  if (document.getElementById) {
    itm = document.getElementById(name)
  } else if (document.all) {
    itm = document.all[name]
  } else if (document.layers) {
    itm = document.layers[name]
  }
  if (!itm) {
  } else if (itm.style) {
    if (itm.style.display == 'none') {
      if ((open_close == 'open' && layer_open_close == 'open') || (open_close == 'close' && layer_open_close == 'close')) {
        itm.style.display = ''
      }
    } else {
      if ((open_close == 'close' && layer_open_close == 'open') || (open_close == 'open' && layer_open_close == 'close')) {
        itm.style.display = 'none'
      }
    }
  } else {
    itm.visibility = 'show'
  }
}
function check(action, formname) {
  var formnamevalue = document.forms[arguments[1]];
  field = formnamevalue.elements.length;
  switch (action) {
    case 'select':
      for (i = 0; i < field; i++) {
        formnamevalue.elements[i].checked = true
      }
      break;
    case 'unselect':
      for (i = 0; i < field; i++) {
        formnamevalue.elements[i].checked = false
      }
      break
  }
}
function checkBySel(action, selector) {
  try {
    if ((action != 'select') && (action != 'unselect')) {
      return
    }
    if ((selector == null) || (!selector.length) || (selector.length < 1)) {
      return
    }
    if (typeof jQuery != 'undefined') {
      $(selector).each(function (index, value) {
        this.checked = (action == 'select')
      })
    } else {
      if (document.querySelectorAll) {
        var elementList = document.querySelectorAll(selector);
        for (i = 0; i < elementList.length; i++) {
          elementList[i].checked = (action == 'select')
        }
      }
    }
  } catch (e) {
  }
}
function refresh_username(selected_username) {
  if ((opener.document.forms['post'].username.value) && (opener.document.forms['post'].ismp)) {
    opener.document.forms['post'].username.value = opener.document.forms['post'].username.value + ';' + selected_username
  } else {
    opener.document.forms['post'].username.value = selected_username
  }
  opener.focus();
  window.close()
}
function refresh_username_new(username, fieldname) {
  $('input[name^=' + (fieldname || 'username') + ']:last').val(username);
  if ($.add_username) {
    $.add_username()
  }
}
function timestamp() {
  return Math.floor((new Date()).getTime() / 1000)
}
function insertChatBox(chatbox_id, chatbox_url) {
  document.getElementById(chatbox_id).innerHTML = '<iframe src="' + chatbox_url + '" id="frame_chatbox" scrolling="no" width="100%" height="100%" marginwidth="0" marginheight="0" frameborder="0"></iframe>'
}
function insertChatBoxNew(chatbox_id, chatbox_url) {
  document.getElementById(chatbox_id).innerHTML = '<object data="' + chatbox_url + '" id="frame_chatbox" scrolling="yes" width="100%" height="100%" type="text/html"></object>'
}
function insertChatBoxPopup(chatbox_url, l_chatbox_join) {
  document.getElementById('chatbox_popup').innerHTML = '[ <a href="' + chatbox_url + '" target="ChatBox">' + l_chatbox_join + '</a> ]'
}
function showMenu(event, user, me) {
  if ($('#chatbox_contextmenu').length) {
    hideMenu();
    return false
  }
  var chatbox = window.chatbox;
  var connected = chatbox.connected;
  if (document.all) {
    mouseX = window.event.clientX + document.body.scrollLeft;
    mouseY = window.event.clientY + document.body.scrollTop
  } else {
    mouseX = event.clientX + window.scrollX;
    mouseY = event.clientY + window.scrollY
  }
  var div = $('<div id=\'chatbox_contextmenu\'>');
  div.css({
    top: mouseY + 'px'
  });
  var window_width = 0;
  if (document.getElementById('content')) {
    window_width = document.getElementById('content').offsetWidth
  } else {
    window_width = (document.body) ? document.body.clientWidth : window.innerWidth
  }
  var div_style_width = 120;
  mouseX = parseInt(mouseX);
  while (div_style_width + mouseX >= window_width) {
    mouseX -= 10
  }
  div.css({
    left: mouseX + 'px'
  });
  $(div).append('<p class="cb-menu-title"> ' + ((user.username.length > 9) ? user.username.substr(0, 9) + '...' : user.username) + '<span title="Close Window" class="cb-menu-close" onclick="hideMenu()"> &times; </span>' + '</p>');
  $(div).append('<p class=\'cb-menu-item\'><a href=\'/u' + user.id + '\' target=\'profile\'>View the profile</a></p>');
  if (user.id != me.id) {
    $(div).append('<p class=\'cb-menu-item\'><a href=\'/privmsg?mode=post&u=' + user.id + '\' target=\'profile\'>Send a PM</a></p>')
  }
  if ($('#message').length && me.admin) {
    user.username = user.username.replace(/\\/g, '\\\\').replace(/\'/g, '\\\'');
    if (user.chatLevel != 2 && !user.admin) {
      $(div).append('<p class=\'cb-menu-item\'>' + '<a href=\'#\' onclick=\'return action_user("kick", "' + user.username + '");\'>kick from chat</a>' + '</p>');
      $(div).append('<p class=\'cb-menu-item\'>' + '<a href=\'#\' onclick=\'return action_user("ban", "' + user.username + '");\'>Ban from chat</a>' + '</p>')
    }
    if (user.chatLevel == 2 && user.userLevel != 1 && user.id != me.id) {
      $(div).append('<p class=\'cb-menu-item\'>' + '<a href=\'#\' onclick=\'return action_user("unmod", "' + user.username + '");\'>Remove moderation</a>' + '</p>')
    } else if (!user.admin) {
      $(div).append('<p class=\'cb-menu-item\'>' + '<a href=\'#\' onclick=\'return action_user("mod", "' + user.username + '");\'>Add to moderators</a>' + '</p>')
    }
  }
  if (connected && user.id == me.id) {
    $(div).append('<p class=\'cb-menu-item\'>' + '<a href=\'#\' onclick=\'return action_user("away", prompt("Reason"));\'>Away</a>' + '</p>');
    $(div).append('<p class=\'cb-menu-item\'>' + '<a href=\'#\' onclick=\'chatbox.disconnect();hideMenu();\'>Log off</a>' + '</p>')
  }
  $('.cb-menu-item').on('click', function () {
    hideMenu()
  });
  $('body').append(div);
  return false
}
function action_user(cmd, user_name) {
  if (user_name == null) user_name = '';
  $('#message').val('/' + cmd + ' ' + user_name);
  window.chatbox.send();
  hideMenu();
  return false
}
function hideMenu() {
  document.getElementById('chatbox_contextmenu').parentNode.removeChild(document.getElementById('chatbox_contextmenu'))
}
function js_urlencode(text) {
  text = text.toString();
  var matches = text.match(/[\x90-\xFF]/g);
  if (matches) {
    for (var matchid = 0; matchid < matches.length; matchid++) {
      var char_code = matches[matchid].charCodeAt(0);
      text = text.replace(matches[matchid], '%u00' + (char_code & 255).toString(16).toUpperCase())
    }
  }
  return escape(text).replace(/\+/g, '%2B')
}
function ajax_refresh_chatbox(params) {
  if (window.XMLHttpRequest) {
    var http_request = new XMLHttpRequest()
  } else if (window.ActiveXObject) {
    var http_request = new ActiveXObject('Microsoft.XMLHTTP')
  }
  http_request.onreadystatechange = function () {
    if (http_request.readyState == 4 && http_request.status == 200) {
      var parsed_text = http_request.responseText;
      if (parent.frames['ekran'].document.getElementById('message_rows')) {
        parent.frames['ekran'].document.getElementById('message_rows').innerHTML = parsed_text;
        parent.frames['ekran'].window.scrollTo(0, 99999);
        ajax_refresh_chatterlist(params)
      }
      if (parsed_text.indexOf('<script>/*stop_refresh*/</script>', 0) != - 1) {
        clearInterval(parent.frames['ekran'].Interval);
        parent.frames['ekran'].refreshing = false;
        var title_params = (params == '') ? '?page=front' : params + '&page=front';
        parent.frames['title'].location.href = '/chatbox/chatbox_title.forum' + title_params;
        parent.frames['sender'].location.href = '/chatbox/messenger_send.forum' + title_params
      } else {
        if (parent.frames['ekran'].refreshing == false) {
          parent.frames['ekran'].Interval = setInterval('parent.frames[\'ekran\'].refresh_chatbox()', 8000);
          parent.frames['ekran'].refreshing = true
        }
      }
    }
  };
  http_request.open('GET', '/chatbox/generate_messages.forum' + params, true);
  http_request.send(null)
}
function ajax_submit_chatbox(params) {
  var data = '&nick=' + js_urlencode(document.post.nick.value);
  data += '&sent=' + js_urlencode(document.post.sent.value);
  data += '&sbold=' + document.post.sbold.value;
  data += '&sitalic=' + document.post.sitalic.value;
  data += '&sunderline=' + document.post.sunderline.value;
  data += '&sstrike=' + document.post.sstrike.value;
  data += '&scolor=' + document.post.scolor.value;
  if (document.post.sent.value == '/banlist') {
    window.open('/chatbox/chatbox_banlist.forum' + params, 'color', 'toolbar=no,menubar=no,personalbar=no,width=450,height=300,scrollbars=auto,resizable=yes');
    return false
  }
  if (window.XMLHttpRequest) {
    var http_request_submit = new XMLHttpRequest()
  } else if (window.ActiveXObject) {
    var http_request_submit = new ActiveXObject('Microsoft.XMLHTTP')
  }
  http_request_submit.onreadystatechange = function () {
    if (http_request_submit.readyState == 4 && http_request_submit.status == 200) {
      ajax_refresh_chatbox(params);
      ajax_refresh_chatterlist(params)
    }
  };
  http_request_submit.open('POST', '/chatbox/generate_messages.forum' + params, true);
  http_request_submit.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;');
  http_request_submit.send(data)
}
function ajax_refresh_chatterlist(params) {
  if (window.XMLHttpRequest) {
    var http_request_list = new XMLHttpRequest()
  } else if (window.ActiveXObject) {
    var http_request_list = new ActiveXObject('Microsoft.XMLHTTP')
  }
  http_request_list.onreadystatechange = function () {
    if (http_request_list.readyState == 4 && http_request_list.status == 200) {
      var parsed_text = http_request_list.responseText;
      if (parent.frames['who'].document.getElementById('chatter_rows')) {
        parent.frames['who'].document.getElementById('chatter_rows').innerHTML = parsed_text
      }
    }
  };
  http_request_list.open('GET', '/chatbox/generate_chatterlist.forum' + params, true);
  http_request_list.send(null)
}
function insert_chatboxsmilie(smilie_code) {
  opener.document.getElementById('message').value = opener.document.getElementById('message').value + smilie_code;
  ///opener.document.post.message.focus();
  ///window.close()
}
function change_display_by_icon(element, element_id, content_more, content_less, display_special) {
  element.className = (element.className == 'icon_less') ? 'icon_more' : 'icon_less';
  element.style.background = 'url(\'' + ((element.className == 'icon_less') ? 'http://illiweb.com/fa/i/tabs_less.gif' : 'http://illiweb.com/fa/i/tabs_more.gif') + '\') no-repeat';
  if (content_more || content_less) {
    element.innerHTML = (element.className == 'icon_less') ? content_less : content_more
  }
  if (!display_special) {
    display_special = 'block'
  }
  document.getElementById(element_id).style.display = ((element.className == 'icon_more') ? 'none' : display_special);
  my_setcookie('display_sql_info', element.className)
}
function switchuploadaddress(file) {
  if (file) {
    document.getElementById('upfile').style.display = 'inline';
    document.getElementById('upurl').style.display = 'none'
  } else {
    document.getElementById('upfile').style.display = 'none';
    document.getElementById('upurl').style.display = 'inline'
  }
}
function do_mark(mode, type) {
  if (type == 2) {
    if (mode == 7) {
      for (i = 0; i < form.elements['mark[]'].length; ++i) {
        radio_box = form.elements['mark[]'][i];
        if (radio_box.checked == true) {
          radio_box.checked = false
        } else {
          radio_box.checked = true
        }
      }
    } else {
      if (special_mark_modes[mode] == '') {
        return
      }
      for (i = 0; i < special_mark_modes[mode].length; ++i) {
        radio_box = form.elements['mark[]'][special_mark_modes[mode][i]];
        if (radio_box.checked == true) {
          radio_box.checked = false
        } else {
          radio_box.checked = true
        }
      }
    }
  } else {
    if (type == 1) {
      var value = false
    } else {
      var value = true
    }
    if (mode == 7) {
      for (i = 0; i < form.elements['mark[]'].length; ++i) {
        form.elements['mark[]'][i].checked = value
      }
    } else {
      if (special_mark_modes[mode] == '') {
        return
      }
      for (i = 0; i < special_mark_modes[mode].length; ++i) {
        form.elements['mark[]'][special_mark_modes[mode][i]].checked = value
      }
    }
  }
}
function checkreport() {
  checked = false;
  if (form.elements['mark[]'].length) {
    for (i = 0; i < form.elements['mark[]'].length; ++i) {
      if (form.elements['mark[]'][i].checked == true) {
        checked = true;
        break
      }
    }
  } else {
    if (form.elements['mark[]'].checked == true) {
      checked = true
    }
  }
  if (!checked) {
    alert('No report selected!');
    return false
  }
  if (delete_mode) {
    delete_mode = false;
    if (confirm('Are you sure you want to delete this/these report(s)?') == true) {
      form.confirm.value = 1
    } else {
      return false
    }
  }
  return true
}
function insert_smilie(smiliepath, smilieid, smilie_code) {
  if (parent.document.getElementById('vB_Editor_001_mode').value == 1) {
    parent.vB_Editor['vB_Editor_001'].insert_text('<img src="' + smiliepath + '" smilieid="' + smilieid + '" /> ', false)
  } else {
    parent.vB_Editor['vB_Editor_001'].insert_text(smilie_code + ' ', false)
  }
}
function unban_user(user, id) {
  opener.fetch_object('message').value = '/unban ' + user;
  opener.submitmsg();
  document.getElementById(id).style.display = 'none'
}
function checkmodcp(action) {
  field = document.modcp.elements.length;
  switch (action) {
    case 'select':
      for (i = 0; i < field; i++) {
        document.modcp.elements[i].checked = true
      }
      break;
    case 'unselect':
      for (i = 0; i < field; i++) {
        document.modcp.elements[i].checked = false
      }
      break
  }
}
function check_rotation_radiobuttons() {
  if (document.nuffimage_form.elements['nuff_rotation.checked'] == false) document.nuffimage_form.elements['nuff_rotation_d'].checked = false
}
function select_switch_search(status) {
  for (i = 0; i < document.post.length; i++) {
    document.post.elements[i].checked = status
  }
}
function verify_select() {
  selectedfields = 0;
  for (i = 0; i < document.post.length; i++) {
    if (document.post.elements[i].checked == true) {
      selectedfields++
    }
  }
  if (selectedfields == 0) {
    msg_error = 'Please select one subject';
    alert(msg_error);
    return false
  } else {
    return true
  }
}
function select_switch_line(numchamp) {
  for (i = (numchamp - 1); i < (numchamp - 1) + 7; i++) {
    if (document.post.elements[i + 6].disabled != true) {
      document.post.elements[i + 6].checked = !document.post.elements[i + 6].checked
    }
  }
}
function select_switch_privmsg(status) {
  for (i = 0; i < document.privmsg_list.length; i++) {
    document.privmsg_list.elements[i].checked = status
  }
}
function GetParam(name) {
  var match = new RegExp(name + '=([^&]+)', 'i').exec(location.search);
  if (match == null) {
    match = new RegExp(name + '=(.+)', 'i').exec(location.search)
  }
  if (match == null) {
    return null
  }
  match = match + '';
  result = match.split(',');
  return result[1]
}
function google_afs_request_done(google_ads) {
  var google_num_ads = google_ads.length;
  if (google_num_ads <= 0) {
    return
  }
  var wideAds = '';
  var narrowAds = '';
  if (google_num_ads > 1) {
    for (var i = 0; i < google_num_ads; i++) {
      narrowAds += '<div style="float:left;width:' + (728 / google_num_ads) + 'px;"><a style="text-decoration:none" onmouseover="javascript:window.status=\'' + google_ads[i].url + '\';return true;" ' + 'onmouseout="javascript:window.status=\'\';return true;" ' + 'href="' + google_ads[i].url + '">' + '<span class="ad_line1">' + google_ads[i].line1 + '</span><br />' + '<span class="ad_text">' + google_ads[i].line2 + '</span><br />' + '<span class="ad_text">' + google_ads[i].line3 + '</span><br />' + '<div class="ad_url">' + google_ads[i].visible_url + '</div></a></div>'
    }
  } else if (google_num_ads == 1) {
    var i = 0;
    narrowAds += '<div style="text-align:center;"><a style="text-decoration:none;" onmouseover="javascript:window.status=\'' + google_ads[i].url + '\';return true;" ' + 'onmouseout="javascript:window.status=\'\';return true;" ' + 'href="' + google_ads[i].url + '">' + '<span class="ad_line1">' + google_ads[i].line1 + '</span><br />' + '<span class="ad_text">' + google_ads[i].line2 + '</span><br />' + '<span class="ad_text">' + google_ads[i].line3 + '</span><br />' + '<div class="ad_url">' + google_ads[i].visible_url + '</div></a></div>'
  }
  if (google_num_ads > 0) {
    if (narrowAds != '') {
      narrowAds = narrowAds + '<a style="text-decoration:none" ' + 'href="http://services.google.com/feedback/online_hws_feedback">' + '<div class="ad_header" style="text-align:right">Ads by Google</div></a>'
    }
  }
  if (document.getElementById('narrow_ad_unit')) {
    document.getElementById('narrow_ad_unit').innerHTML = narrowAds
  }
}
function set_solved(input, str) {
  if (input) {
    var title = input.value;
    var reg = new RegExp('\\' + str, 'g');
    input.value = (reg.test(title)) ? title.replace(reg, '')  : str + title
  }
}
function bbstyle_table() {
  var nb_row = document.getElementById('table_gui_lines').value;
  var nb_cols = document.getElementById('table_gui_cols').value;
  if (nb_row > 0 && nb_cols > 0) {
    var txtarea = document.post.message;
    if (nb_row > 100) {
      nb_row = 100
    }
    if (nb_cols > 100) {
      nb_cols = 100
    }
    var content = '[table border="1"]\n';
    for (var i = 0; i < nb_row; i++) {
      content += '[tr]\n';
      for (var j = 0; j < nb_cols; j++) {
        content += '[td] [/td]'
      }
      content += '\n[/tr]'
    }
    content += '\n[/table]';
    if ((clientVer >= 4) && is_ie && is_win) {
      theSelection = document.selection.createRange().text;
      if (theSelection) {
        document.selection.createRange().text = content;
        txtarea.focus();
        theSelection = '';
        return
      } else {
        txtarea.value += content
      }
    } else {
      var selLength = txtarea.textLength;
      var selStart = txtarea.selectionStart;
      var selEnd = txtarea.selectionEnd;
      if (selEnd == 1 || selEnd == 2) selEnd = selLength;
      var s1 = (txtarea.value).substring(0, selStart);
      var s2 = (txtarea.value).substring(selStart, selEnd);
      var s3 = (txtarea.value).substring(selEnd, selLength);
      txtarea.value = s1 + content + s3
    }
    txtarea.focus();
    document.getElementById('table_gui_lines').value = '';
    document.getElementById('table_gui_cols').value = '';
    return
  }
}
function display_upload_servimg(button, account, id, f) {
  var container = document.getElementById('servimg_upload_gui');
  if (!document.getElementById('obj_servimg')) {
    container.innerHTML = '<p><iframe id="obj_servimg" src="http://www.servimg.com/forum_upload.php?account=' + account + '&id=' + id + '&f=' + f + '" width="540" height="230" border="0" scrolling="no"></iframe></p>'
  }
  var div = document.getElementById('servimg_upload_gui');
  var visible = div.style.visibility;
  if (visible == 'hidden') {
    var window_w = (document.body) ? document.body.clientWidth : window.innerWidth;
    var cd = FindXY(button);
    var h = button.offsetHeight;
    var i = 0;
    while (i < selectId.length) {
      if (document.getElementById(selectId[i])) {
        document.getElementById(selectId[i]).style.visibility = 'hidden'
      }
      i++
    }
    var sub = ((window_w - cd['x']) < 555) ? (555 - window_w + cd['x'])  : 0;
    div.style.visibility = 'visible';
    div.style.width = 'auto';
    div.style.left = (cd['x'] - sub) + 'px';
    div.style.top = (cd['y'] + h) + 'px'
  } else {
    div.style.visibility = 'hidden'
  }
}
function display_upload_imageshack(button) {
  var container = document.getElementById('servimg_upload_gui');
  if (!document.getElementById('obj_servimg')) {
    container.innerHTML = '<p><iframe src="http://imageshack.us/syndicate/widget.php" scrolling="no" allowtransparency="true" frameborder="0" width="300" height="150">Update your browser for ImageShack.us!</iframe></p>'
  }
  var div = document.getElementById('servimg_upload_gui');
  var visible = div.style.visibility;
  if (visible == 'hidden') {
    var window_w = (document.body) ? document.body.clientWidth : window.innerWidth;
    var cd = FindXY(button);
    var h = button.offsetHeight;
    var i = 0;
    while (i < selectId.length) {
      if (document.getElementById(selectId[i])) {
        document.getElementById(selectId[i]).style.visibility = 'hidden'
      }
      i++
    }
    var sub = ((window_w - cd['x']) < 555) ? (555 - window_w + cd['x'])  : 0;
    div.style.visibility = 'visible';
    div.style.width = 'auto';
    div.style.left = (cd['x'] - sub) + 'px';
    div.style.top = (cd['y'] + h) + 'px'
  } else {
    div.style.visibility = 'hidden'
  }
}
var gw_window = null;
var gw_style = null;
var offsetx = 8;
var offsety = 12;
var curX = 0;
var curY = 0;
var distX = 0;
var distY = 0;
var obj_ietruebody = (document.all) ? (document.compatMode && document.compatMode != 'BackCompat') ? document.documentElement : document.body : '';
function gws_show(element, div_element, ev) {
  if (gw_window == null) {
    gw_window = document.createElement('div');
    gw_window.id = 'gw_window';
    gw_window.style.width = '470px';
    document.body.appendChild(gw_window);
    gw_style = document.createElement('style');
    gw_style.type = 'text/css';
    var css_text = '.translucent{background:#161411 none repeat scroll 0%;height:auto;opacity:0.93;padding:5px;width:460px;}.skill_link{color:#0000FF;}.gwno_border{margin:0pt;padding:0pt;}table.gwborder{width:466px;}img.no_link{border:medium none;}.table_image{font-size:10pt;padding-right:10px;text-align:center;vertical-align:top;}.skill_text{vertical-align:top;}.skill_name{color:#BFB38B;float:left;font-size:15px;font-weight:700;}.skill_desc{clear:both;color:white;display:block;font-size:11px;line-height:20px;padding-top:5px;text-align:left;}.skill_camp{color:#AAD38B;font-size:9px;font-weight:bold;}.skill_pve{color:#B0B080;font-size:9px;}.expert{color:#BDC6FF;padding-left:2px;}.elite_skill{background-color:#6B6226;}.normal_skill{background-color:#161411;}.build_name{color:#BFB38B;font-size:11pt;font-weight:700;padding-bottom:5px;text-align:left;}.build_desc{color:white;font-size:11px;line-height:20px;text-align:left;}.build_lilname{font-family:verdana;font-size:10px;line-height:12px;padding:0px;}.attribute{color:white;font-size:12px;line-height:20px;padding-left:20px;}.skill_requirements{display:inline;list-style-type:none;margin:0pt;padding:0pt;}.skill_requirements li{color:white;display:inline;float:right;font-size:12px;font-weight:bold;margin-right:5px;}span.variable{color:#88FF88;font-weight:bold;}.table_image, .skill_name, .skill_desc, .skill_camp, .expert, .build_name, .build_desc, .attribute, .skill_requirements, .skill_requirements li, span.variable{font-family:verdana,Helvetica,sans-serif;}.gwborder_topleft{background-image:url(\'.GWBBCODE_IMG_PATH.\'/img_border/topleft.gif);height:3px;width:3px;}.gwborder_top{background-image:url(\'.GWBBCODE_IMG_PATH.\'/img_border/top.gif);height:3px;}.gwborder_topright{background-image:url(\'.GWBBCODE_IMG_PATH.\'/img_border/topright.gif);height:3px;width:3px;}.gwborder_left{background-image:url(\'.GWBBCODE_IMG_PATH.\'/img_border/left.gif);width:3px;}.gwborder_right{background-image:url(\'.GWBBCODE_IMG_PATH.\'/img_border/right.gif);width:3px;}.gwborder_bottomleft{background-image:url(\'.GWBBCODE_IMG_PATH.\'/img_border/bottomleft.gif);height:3px;width:3px;}.gwborder_bottom{background-image:url(\'.GWBBCODE_IMG_PATH.\'/img_border/bottom.gif);height:3px;}.gwborder_bottomright{background-image:url(\'.GWBBCODE_IMG_PATH.\'/img_border/bottomright.gif);height:3px;width:3px;}table.gwbuildbox{height:50px;}.gwbuildbox_left{height:50px;width:20px;}.gwbuildbox_right{height:50px;width:20px;}.gwbuildbox_left[class]{background-image:url(\'.GWBBCODE_IMG_PATH.\'/img_border/buildbox_left.png);background-repeat:no-repeat;height:50px;width:20px;}.gwbuildbox_center{background-image:url(\'.GWBBCODE_IMG_PATH.\'/img_border/buildbox_center.png);height:50px;}.gwbuildbox_right[class]{background-image:url(\'.GWBBCODE_IMG_PATH.\'/img_border/buildbox_right.png);background-repeat:no-repeat;height:50px;width:20px;}table.gwborders{width:470px;}div#gw_window{position:absolute;z-index:10000;display:none;}';
    if (gw_style.styleSheet) {
      gw_style.styleSheet.cssText = css_text
    } else {
      gw_style.appendChild(document.createTextNode(css_text))
    }
    document.body.appendChild(gw_style)
  }
  element.onmouseout = function () {
    gw_window.style.display = 'none'
  };
  gw_window.style.display = 'block';
  gw_window.innerHTML = document.getElementById(div_element).innerHTML;
  curX = (document.getElementById && !document.all) ? ev.pageX : event.x + obj_ietruebody.scrollLeft;
  curY = (document.getElementById && !document.all) ? ev.pageY : event.y + obj_ietruebody.scrollTop;
  distX = document.all && !window.opera ? obj_ietruebody.clientWidth - event.clientX - offsetx : window.innerWidth - ev.clientX - offsetx - 20;
  distY = document.all && !window.opera ? obj_ietruebody.clientHeight - event.clientY - offsety : window.innerHeight - ev.clientY - offsety - 20;
  if (distX < gw_window.offsetWidth) {
    if (curX + offsetx - gw_window.offsetWidth < 0) {
      gw_window.style.left = '0px'
    } else {
      gw_window.style.left = curX - 10 - gw_window.offsetWidth + 'px'
    }
  } else {
    gw_window.style.left = curX + offsetx + 'px'
  }
  if (distY < gw_window.offsetHeight) {
    if (curY > gw_window.offsetHeight) {
      gw_window.style.top = curY - 10 - gw_window.offsetHeight + 'px'
    } else {
      gw_window.style.top = curY + offsety + distY - gw_window.offsetHeight + 'px'
    }
  } else {
    gw_window.style.top = curY + offsety + 'px'
  }
}
var elem;
var divHeight;
var mouseX;
var mouseY;
function returnNumber(str) {
  var result = '';
  for (i = 0; i < str.length; i++) {
    if ((str.charAt(i) * 1) >= 0 && (str.charAt(i) * 1) <= 9) result += str.charAt(i);
     else return result * 1
  }
  return result * 1
}
function resizeElement(event, id) {
  var el;
  var x,
  y;
  elem = document.getElementById(id);
  if (document.all) {
    mouseX = window.event.clientX + document.body.scrollLeft;
    mouseY = window.event.clientY + document.body.scrollTop
  } else {
    mouseX = event.clientX + window.scrollX;
    mouseY = event.clientY + window.scrollY
  }
  divHeight = elem.style.height;
  if (isNaN(divHeight)) divHeight = returnNumber(divHeight);
  if (document.all) {
    document.attachEvent('onmousemove', resize);
    document.attachEvent('onmouseup', stopResize);
    window.event.cancelBubble = true;
    window.event.returnValue = false
  } else {
    document.addEventListener('mousemove', resize, true);
    document.addEventListener('mouseup', stopResize, true);
    event.preventDefault()
  }
}
function resize(event) {
  var x,
  y;
  var minHeight = 100;
  if (document.all) {
    x = window.event.clientX + document.body.scrollLeft;
    y = window.event.clientY + document.body.scrollTop
  } else {
    x = event.clientX + window.scrollX;
    y = event.clientY + window.scrollY
  }
  if (divHeight + y - mouseY < minHeight) elem.style.height = minHeight + 'px';
   else elem.style.height = (divHeight + y - mouseY) + 'px';
  if (document.all) {
    window.event.cancelBubble = true;
    window.event.returnValue = false
  } else event.preventDefault()
}
function stopResize(event) {
  if (document.all) {
    document.detachEvent('onmousemove', resize);
    document.detachEvent('onmouseup', stopResize)
  } else {
    document.removeEventListener('mousemove', resize, true);
    document.removeEventListener('mouseup', stopResize, true)
  }
}
function update_dst(user_gmt, user_dst, session_id) {
  var params = '';
  var time_diff = new Date().getTimezoneOffset() / 60;
  time_diff = time_diff * - 1;
  if (user_dst == 1) {
    user_gmt++
  }
  if (time_diff == user_gmt + 1 || time_diff == user_gmt - 1) {
    if (time_diff == user_gmt - 1 && user_dst == 0) {
      params = 'action=gmt&do=-1'
    } else if (time_diff == user_gmt + 1 && user_dst == 1) {
      params = 'action=gmt&do=1'
    } else {
      params = 'action=dst'
    }
    params += '&sid=' + session_id;
    ajax_exec('updatedst.forum?' + params)
  }
}
function ajax_exec(url) {
  if (window.XMLHttpRequest) {
    var http_request_list = new XMLHttpRequest()
  } else if (window.ActiveXObject) {
    var http_request_list = new ActiveXObject('Microsoft.XMLHTTP')
  }
  http_request_list.onreadystatechange = function () {
    if (http_request_list.readyState == 4 && http_request_list.status == 200) {
      var parsed_text = http_request_list.responseText
    }
  };
  http_request_list.open('GET', url, true);
  http_request_list.send(null)
}
function div_marquee(div_id, marquee_id, direction, amount, delay, height, css) {
  div_id = '#' + div_id;
  var html = $(div_id).html();
  var width = $(div_id).empty().width();
  $(div_id).html('<marquee id="' + marquee_id + '" direction="' + direction + '" scrollamount="' + amount + '" scrolldelay="' + delay + '"' + (isNaN(width) ? '' : ' width="' + width + '"') + ' height="' + height + '"' + (css ? ' class="' + css + '"' : '') + '>' + html + '</marquee>')
}
function togglePostMultiQuote(obj) {
  var toggle = obj.src == multiquote_img_on;
  obj.src = toggle ? multiquote_img_off : multiquote_img_on;
  my_setcookie(obj.id, toggle ? '' : '1', true);
  return false
}
function initPostMultiQuote() {
  var cookie;
  var obj;
  cookies = document.cookie.split('; ');
  for (i = 0, j = cookies.length; i < j; ++i) {
    if (cookies[i].substring(0, 7) == 'post_mq') {
      cookie = cookies[i].split('=');
      if (cookie[1] == '1' && (obj = document.getElementById(cookie[0]))) {
        obj.src = multiquote_img_on
      }
    }
  }
}
function initSetFunction(f) {
  if (window.addEventListener) {
    window.addEventListener('load', f, false)
  } else if (window.attachEvent) {
    window.attachEvent('onload', f)
  }
}
initSetFunction(initPostMultiQuote);
function runLogInPopUp() {
  var logInPopUpOffsetTop = parseInt($('#login_popup').css('top'));
  $('#login_popup').css('top', (logInPopUpOffsetTop + ($(document).scrollTop() + logInPopUpTop - logInPopUpOffsetTop) / 8) + 'px');
  if (my_getcookie('login_popup_closed') != '1') {
    setTimeout('runLogInPopUp()', 8)
  }
}
function privmsg_add_username(url, after) {
  $.add_username = function () {
    if ($('select[name=userfriend]').val() || $('select[name=usergroup]').val()) {
      $('input[name^=username]:last').after(after).attr('disabled', 'disabled')
    } else {
      $('input[name^=username]:last').after(after)
    }
  };
  function find_username(fieldname) {
    $.get(url + '&fieldname=' + fieldname + '&time=' + timestamp(), '', function (data) {
      $('#find_username').html(data).jqmShow();
      $('.jqmOverlay').bgiframe();
      $('#find_username').bgiframe()
    });
    return false
  }
  function total_username() {
    var total = '';
    $('input[name^=username]').each(function () {
      total += $(this).val()
    });
    return total
  }
  $('input[name^=username]').on('change', function () {
    if (total_username()) {
      $('select[name=userfriend],select[name=usergroup]').attr('disabled', 'disabled')
    } else {
      $('select[name=userfriend],select[name=usergroup]').removeAttr('disabled')
    }
  });
  $('select[name=userfriend]').change(function () {
    if ($('select[name=userfriend]').val()) {
      $('input[name^=username],#find_user,select[name=usergroup]').attr('disabled', 'disabled')
    } else {
      $('input[name^=username],#find_user,select[name=usergroup]').removeAttr('disabled')
    }
  });
  $('select[name=usergroup]').change(function () {
    if ($('select[name=usergroup]').val()) {
      $('select[name=userfriend],select[name=usergroup]').removeAttr('disabled');
      $('input[name^=username]').val('');
      $('input[name^=username],#find_user,select[name=userfriend]').attr('disabled', 'disabled')
    } else {
      $('input[name^=username],#find_user,select[name=userfriend]').removeAttr('disabled')
    }
  });
  $('#find_user').click(function () {
    return find_username('username')
  });
  $('#add_username').click(function () {
    if (!$('input[name^=username]:last').attr('disabled')) {
      $.add_username()
    }
  });
  if (total_username()) {
    $('select[name=userfriend],select[name=usergroup]').attr('disabled', 'disabled')
  } else if ($('select[name=userfriend]').val()) {
    $('input[name^=username],#find_user,select[name=usergroup]').attr('disabled', 'disabled')
  } else if ($('select[name=usergroup]').val()) {
    $('input[name^=username],#find_user,select[name=userfriend]').attr('disabled', 'disabled')
  }
  $('#find_username').jqm({
    toTop: true
  })
}
$(function () {
  if (my_getcookie('login_popup_closed') != '1' && $('#login_popup').length > 0) {
    logInPopUpLeft = Math.round(($(window).width() - logInPopUpWidth - 16) / 2);
    logInPopUpTop = Math.round(($(window).height() - logInPopUpHeight - 16) / 2);
    $('#login_popup').css({
      left: logInPopUpLeft + 'px',
      top: logInPopUpTop + 'px',
      width: logInPopUpWidth + 'px',
      height: logInPopUpHeight + 'px'
    });
    if (logInBackgroundClass) {
      $('#login_popup_background').addClass(logInBackgroundClass).css('padding', 0)
    }
    var logInBackgroundPadding = parseInt($('#login_popup_background').css('padding-top') || $('#login_popup').css('padding-top')) * 2;
    $('#login_popup_background').css({
      width: (logInPopUpWidth - logInBackgroundPadding) + 'px',
      height: (logInPopUpHeight - logInBackgroundPadding) + 'px'
    });
    $('#login_popup_iframe').css('display', 'none');
    $('#login_popup_content').css('display', 'block');
    $('#login_popup_close').click(function () {
      my_setcookie('login_popup_closed', '1', true);
      $('#login_popup').fadeOut('normal');
      return false
    });
    $('#login_popup').fadeIn('slow');
    runLogInPopUp()
  }
});
function resize_images(o) {
  if ($(document.body).data('image_resize')) {
    o.delayed = true;
    $(document.body).one('resized', o, function (e) {
      resize_images(e.data)
    })
  } else {
    instance = $(document.body).data('current_resize_instance') || 0;
    $(document.body).data('current_resize_instance', ++instance);
    $(document.body).data('image_resize', true);
    $(document.body).addClass('resize_process');
    var imgs = $(o.selector ? o.selector + ' img' : '.postbody img').not('.signature_div img').not('.attachbox img').addClass('resize_img');
    resize_div = document.createElement('span');
    resize_border_div = document.createElement('span');
    resize_content_div = document.createElement('span');
    enlarge_a = document.createElement('a');
    resize_a = document.createElement('a');
    fullsize_a = document.createElement('a');
    resize_filler_div = document.createElement('span');
    $(resize_div).click(function (e) {
      if (!$(e.target).hasClass('enlarge') && !$(e.target).hasClass('resize') && !$(e.target).hasClass('fullsize') && !$(e.target).hasClass('resizebox')) return false
    }).addClass('resizebox gensmall clearfix');
    $(resize_border_div).addClass('resize_border clearfix');
    $(resize_div).append(resize_border_div);
    $(resize_content_div).addClass('resize_content clearfix');
    $(resize_border_div).append(resize_content_div);
    enlarge_a.href = '#';
    resize_a.href = '#';
    fullsize_a.href = '#';
    $(enlarge_a).addClass('enlarge').text('Enlarge this image');
    $(resize_a).addClass('resize').text('Reduce this image');
    $(fullsize_a).addClass('fullsize').text('Click to see fullsize');
    $(resize_filler_div).addClass('resize_filler').text(' ');
    $(resize_content_div).append(enlarge_a);
    $(resize_content_div).append(resize_a);
    $(resize_content_div).append(resize_filler_div);
    $(resize_content_div).append(fullsize_a);
    tmp = jQuery.makeArray(imgs);
    refs = {
      'imgs': tmp,
      'resize_div': resize_div,
      'max_width': o.max_width,
      'max_height': o.max_height
    };
    delete (resize_div);
    $(document.body).data('refs_' + instance, refs);
    if (instance == 1) {
      fn = function (e, instance) {
        current_instance = instance || $(document.body).data('current_resize_instance');
        skip_post = false;
        var refs = $(document.body).data('refs_' + current_instance);
        index = jQuery.inArray(e.target, refs.imgs);
        img_el = e.target;
        var img = $(img_el);
        if (index != - 1 && !$(document.body).data('img_' + current_instance + '_' + index) && !img.data('data')) {
          img_style = img_el.style && (img_el.style.width || img_el.style.height) ? {
            width: parseInt(img_el.style.width) || false,
            height: parseInt(img_el.style.height) || false
          }
           : false;
          if (!img_style) {
            img.attr('style', 'display:inline')
          }
          img_width = img_style.width || img_el.width;
          img_height = img_style.height || img_el.height;
          if ((img_width == 0 || img_height == 0) && ($(document.body).data('img_' + current_instance + '_' + index + '_count') || 0) < 10) {
            $(document.body).data('img_' + current_instance + '_' + index + '_count', ($(document.body).data('img_' + current_instance + '_' + index + '_count') || 0) + 1);
            window.setTimeout('$($(document.body).data(\'refs_' + current_instance + '\').imgs[' + index + ']).trigger(\'load\',[' + current_instance + ']);', 100);
            skip_post = true
          }
          if ((img_width > refs.max_width && refs.max_width != 0) || (img_height > refs.max_height && refs.max_height != 0)) {
            img.removeAttr('style');
            $(document.body).data('img_' + current_instance + '_' + index, true);
            var resize_div = $(refs.resize_div).clone(true);
            img_el.parentNode.insertBefore(document.createElement('br'), img_el);
            img_el.parentNode.insertBefore($(resize_div).get(0), img_el);
            img_el.parentNode.insertBefore(document.createElement('br'), img_el);
            resize_div.data('img_ref', img);
            resize_div.attr('style', 'display:block');
            max_width = document.defaultView ? parseInt(document.defaultView.getComputedStyle(resize_div.get(0), '').getPropertyValue('width'))  : resize_div.get(0).offsetWidth;
            resize_div.removeAttr('style');
            if (img_width > max_width) {
              resize_div.addClass('showfull')
            }
            new_width = img_width * ((refs.max_width != 0 && (refs.max_height == 0 || img_width / img_height > refs.max_width / refs.max_height)) ? refs.max_width / img_width : refs.max_height / img_height);
            img_el.width = new_width;
            data = {
              'width': img_width,
              'resize_width': new_width,
              'max_sized': (img_width > max_width)
            };
            if (img_style) {
              data.height = img_height;
              data.resize_height = new_width * img_height / img_width;
              img_el.height = data.resize_height
            }
            img.data('data', data);
            delete (data);
            resize_div.attr('style', 'width:' + new_width + 'px');
            delete (max_width);
            delete (new_width)
          } else if (!skip_post) {
            $(document.body).data('img_' + current_instance + '_' + index, true);
            img.removeClass('resize_img')
          }
          delete (img_width);
          delete (img_height);
          delete (img_style)
        }
        delete (img_el);
        delete (index)
      };
      $(document.body).bind('click', function (e) {
        switch (true) {
          case $(e.target).hasClass('enlarge') :
            resize_div = $(e.target).parents('span.resizebox');
            if (resize_div.length) {
              var img = $(resize_div.data('img_ref'));
              var img_data = img.data('data');
              resize_div.attr('style', 'display:block');
              resize_width = resize_div.width();
              img.removeAttr('width');
              img_width = img_data.width;
              if (resize_width < img_width) {
                new_width = resize_width;
                resize_div.addClass('showfull')
              } else {
                new_width = img_width;
                resize_div.removeClass('showfull')
              }
              img.attr('width', new_width);
              if (img_data.height) {
                img.attr('height', img_data.height * new_width / img_width)
              }
              resize_div.removeAttr('style');
              resize_div.attr('style', 'width:' + new_width + 'px');
              resize_div.toggleClass('enlarged');
              return false
            }
            break;
          case $(e.target).hasClass('resize') :
            resize_div = $(e.target).parents('span.resizebox');
            if (resize_div.length) {
              var img = resize_div.data('img_ref');
              var img_data = img.data('data');
              img.attr('width', img_data.resize_width);
              if (img_data.resize_height) {
                img.attr('height', img_data.resize_height)
              }
              resize_div.attr('style', 'width:' + img_data.resize_width + 'px');
              resize_div.toggleClass('enlarged');
              return false
            }
            break;
          case $(e.target).hasClass('fullsize') :
            resize_div = $(e.target).parents('span.resizebox');
            if (resize_div.length) {
              var img = $(resize_div.data('img_ref'));
              window.open('/viewimage.forum?u=' + encodeURIComponent(img.attr('src')));
              return false
            }
            break;
          default:
        }
      }); $(window).bind('load', fn); $(window).bind('image_resize', fn)
    }
    $(window).bind('load', function (e) {
      current_instance = $(document.body).data('current_resize_instance');
      tmp = $(document.body).data('refs_' + current_instance).imgs;
      hash = window.location.hash ? window.location.hash.substr(1)  : false;
      for (i = 0, j = tmp.length; i < j; ++i) {
        if (!$(document.body).data('img_' + current_instance + '_' + i)) {
          window.setTimeout('$($(document.body).data(\'refs_' + current_instance + '\').imgs[' + i + ']).trigger(\'image_resize\');', i * 1)
        }
      }
      window.setTimeout('$(document.body).removeClass(\'resize_process\').data(\'image_resize\',false).trigger(\'resized\');' + (is_ie ? '$(\'table\').css(\'zoom\',1);' : '') + (hash ? 'tmp = $(\'#p' + hash + '\').position();window.scrollTo(tmp.left, tmp.top);' : ''), is_ie ? 500 : 100);
      delete (tmp)
    });
    if (o.delayed) {
      tmp = $(document.body).data('refs_' + instance).imgs;
      hash = window.location.hash ? window.location.hash.substr(1)  : false;
      for (i = 0, j = tmp.length; i < j; ++i) {
        if (!$(document.body).data('img_' + instance + '_' + i)) {
          window.setTimeout('$($(document.body).data(\'refs_' + instance + '\').imgs[' + i + ']).trigger(\'image_resize\');', i * 1)
        }
      }
      window.setTimeout('$(document.body).removeClass(\'resize_process\').data(\'image_resize\',false).trigger(\'resized\');' + (is_ie ? '$(\'table\').css(\'zoom\',1);' : '') + (hash ? 'tmp = $(\'#p' + hash + '\').position();window.scrollTo(tmp.left, tmp.top);' : ''), is_ie ? 500 : 100);
      delete (tmp)
    }
    delete (refs)
  }
}
$(function () {
  $(document).on('click', function (e) {
    $(e.target).closest('.spoiler,.spoiler_content').filter('.spoiler').find('.spoiler_content:first,.spoiler_closed:first').toggleClass('hidden')
  })
});
function FM_widget_share() {
  var urlpage = document.location.href;
  if (document.location.href.match(/^(http:\/\/[^\/]*\/t[1-9][0-9]*)(p[1-9][0-9]*)?-.*$/)) {
    urlpage = document.location.href.replace(/^(http:\/\/[^\/]*\/t[1-9][0-9]*)(p[1-9][0-9]*)?-.*$/, '$1-')
  } else if (document.location.href.match(/^(http:\/\/[^\/]*\/f[1-9][0-9]*)(p[1-9][0-9]*)?-.*$/)) {
    urlpage = document.location.href.replace(/^(http:\/\/[^\/]*\/f[1-9][0-9]*)(p[1-9][0-9]*)?-.*$/, '$1-')
  }
  if (navigator.language) {
    var languageinfo = navigator.language.toLowerCase()
  } else if (navigator.userLanguage) {
    var languageinfo = navigator.userLanguage.toLowerCase()
  } else if (navigator.browserLanguage) {
    var languageinfo = navigator.browserLanguage.toLowerCase()
  }
  var fblang = 'locale=en_GB&amp;';
  var gpluslang = '';
  if (languageinfo.substr(0, 2) == 'ar') {
    gpluslang = '{lang: \'ar\'}'
  } else if (languageinfo.substr(0, 2) == 'en') {
    if (languageinfo.substr(3, 2) == 'gb') {
      fblang = 'locale=en_GB&amp;';
      gpluslang = '{lang: \'en-GB\'}'
    }
  } else if (languageinfo.substr(0, 2) == 'es') {
    gpluslang = '{lang: \'es\'}'
  } else if (languageinfo.substr(0, 2) == 'fr') {
    fblang = 'locale=fr_FR&amp;';
    gpluslang = '{lang: \'fr\'}'
  } else if (languageinfo.substr(0, 2) == 'pt') {
    if (languageinfo.substr(3, 2) == 'br') {
      fblang = 'locale=pt_BR&amp;';
      gpluslang = '{lang: \'pt-BR\'}'
    } else {
      fblang = 'locale=pt_PT&amp;';
      gpluslang = '{lang: \'pt-PT\'}'
    }
  } else if (languageinfo.substr(0, 2) == 'ru') {
    gpluslang = '{lang: \'ru\'}'
  }
  var content = '';
  var gscript = document.createElement('script');
  gscript.type = 'text/javascript';
  gscript.src = 'https://apis.google.com/js/plusone.js';
  if (gpluslang != '') {
    if (gscript.canHaveChildren == null || gscript.canHaveChildren) {
      var gpt = document.createTextNode(gpluslang);
      gscript.appendChild(gpt)
    } else {
      gscript.text = gpluslang
    }
  }
  document.getElementById('FM_widget_share').appendChild(gscript);
  content += '<div class="g-plusone" data-size="tall" data-count="true" href="' + urlpage + '"></div>';
  content += '<a href="http://twitter.com/share" class="twitter-share-button" data-url="' + urlpage + '" data-count="vertical">Tweet</a><scr' + 'ipt type="text/javascript" src="http://platform.twitter.com/widgets.js"></scr' + 'ipt>';
  content += '<iframe src="http://www.facebook.com/plugins/like.php?' + fblang + 'href=' + encodeURIComponent(urlpage) + '&amp;send=false&amp;layout=box_count&amp;width=60&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=60" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:61px; height:61px;" allowTransparency="true"></iframe>';
  $('#FM_widget_share').append(content)
}
$(function () {
  $('.blank a').attr('target', '_blank');
  if (document.getElementById('FM_widget_partners') != null) {
    var content = '';
    content += '';
    if (content != '') {
      $('#FM_widget_partners').append(content)
    }
  }
  if (document.getElementById('FM_widget_share') != null) {
    FM_widget_share()
  }
});
var FA = (function (FA) {
  FA.Lang = {
    'Image_enlarge': 'Enlarge this image',
    'Click_to_resize': 'Reduce this image',
    'Click_to_see_fullsize': 'Click to see fullsize'
  };
  return FA
}(FA || {
}));
