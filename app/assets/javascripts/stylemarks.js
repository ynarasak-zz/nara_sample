window.onload = function() { 
  var url_map = { 12345:'http://juna.officialblog.jp/archives/33522044.html', 1:'https://corp.stylemarks.jp/'}
  var keys = location.pathname.match(/.*[/](.*?)$/);
  var key = keys[keys.length-1]
  if( url_map[key] === void 0){
    //alert(keys+":"+key);
    return
  }
  //alert('url :'+location.pathname+': key :'+key+': redirect :'+url_map[key]);
  var redirect_url = url_map[key] + location.search;
  if (document.referrer) {
    var referrer = "referrer=" + encodeURIComponent(document.referrer);
    redirect_url = redirect_url + (location.search ? '&' : '?') + referrer;
  }
  location.href = redirect_url;
}
