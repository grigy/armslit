var a = {'ա':'a','բ':'b','գ':'g','դ':'d','ե':'e','զ':'z','է':'e','ը':'y','թ':'th','ժ':'zh','ի':'i','լ':'l','խ':'kh','ծ':'ts','կ':'k','հ':'h','ձ':'dz','ղ':'gh','ճ':'tch','մ':'m','յ':'y','ն':'n','շ':'sh','ո':'o','չ':'ch','պ':'p','ջ':'dzh','ռ':'r','ս':'s','վ':'v','տ':'t','ր':'r','ց':'c','ու':'u','փ':'ph','ք':'q','և':'ev','օ':'o','ֆ':'f',
         'Ա':'A','Բ':'B','Գ':'G','Դ':'D','Ե':'E','Զ':'Z','Է':'E','Ը':'Y','Թ':'Th','Ժ':'Zh','Ի':'I','Լ':'L','Խ':'Kh','Ծ':'Ts','Կ':'K','Հ':'H','Ձ':'Dz','Ղ':'Gh','Ճ':'Tch','Մ':'M','Յ':'Y','Ն':'N','Շ':'Sh','Ո':'Vo','Չ':'Ch','Պ':'P','Ջ':'Dzh','Ռ':'R','Ս':'S','Վ':'V','Տ':'T','Ր':'R','Ց':'C','Ու':'U','Փ':'Ph','Ք':'Q','Օ':'O','Ֆ':'F'};

function transliterate(word, dict){
	return word.split('').map(function (char) {
    	return dict[char] || char; 
  	}).join("");
}

function invert(obj) {

  var new_obj = {};

  for (var prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      new_obj[obj[prop]] = prop;
    }
  }

  return new_obj;
};

function convert(s) {
	return [s, transliterate(s, invert(a))];
}

function showList(list) {
	for ( var i = 0; i < list.length; i++ ) { 
 		$('#resultlist').append("<li>"+list[i]+"</li>");
 	}
}

function clearList() {
	$('#resultlist').html("");
}

$( document ).ready(function() {
	$("#searchbox").keyup(function(){
		var s = this.value;
		if (s.length > 2) {
			//console.log(convert(s));
			clearList();
			showList(convert(s));
		} else {
			clearList();
		}
	});
});

