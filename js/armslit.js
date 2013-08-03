var arm2lat = {'ա':'a','բ':'b','գ':'g','դ':'d','ե':'e','զ':'z','է':'e','ը':'y','թ':'th','ժ':'zh','ի':'i','լ':'l','խ':'kh','ծ':'ts','կ':'k','հ':'h','ձ':'dz','ղ':'gh','ճ':'tch','մ':'m','յ':'y','ն':'n','շ':'sh','ո':'o','չ':'ch','պ':'p','ջ':'dzh','ռ':'r','ս':'s','վ':'v','տ':'t','ր':'r','ց':'c','ու':'u','փ':'ph','ք':'q','և':'ev','օ':'o','ֆ':'f',
               'Ա':'A','Բ':'B','Գ':'G','Դ':'D','Ե':'E','Զ':'Z','Է':'E','Ը':'Y','Թ':'Th','Ժ':'Zh','Ի':'I','Լ':'L','Խ':'Kh','Ծ':'Ts','Կ':'K','Հ':'H','Ձ':'Dz','Ղ':'Gh','Ճ':'Tch','Մ':'M','Յ':'Y','Ն':'N','Շ':'Sh','Ո':'Vo','Չ':'Ch','Պ':'P','Ջ':'Dzh','Ռ':'R','Ս':'S','Վ':'V','Տ':'T','Ր':'R','Ց':'C','Ու':'U','Փ':'Ph','Ք':'Q','Օ':'O','Ֆ':'F'};

var lat2arm = {'a':'ա', 'b':'բ', 'c':'ց', 'd':'դ', 'e':'ե', 'f':'ֆ', 'g':'գ', 'h':'հ', 'i':'ի', 'j':'յ', 'k':'կ', 'l':'լ', 'm':'մ', 'n':'ն', 'o':'ո', 'p':'պ', 'q':'ք', 'r':'ր', 's':'ս', 't':'տ', 'u':'ու', 'v':'վ', 'w':'վ', 'x':'խ', 'y':'ը', 'z':'զ', 'th':'թ', 'zh':'ժ', 'kh':'խ', 'ts':'ծ', 'dz':'ձ', 'gh':'ղ', 'tch':'ճ', 'sh':'շ', 'vo':'ո', 'ch':'չ', 'dzh':'ջ', 'ph':'փ', 'ev':'և',
               'A':'Ա', 'B':'Բ', 'C':'Ց', 'D':'Դ', 'E':'Ե', 'F':'Ֆ', 'G':'Գ', 'H':'Հ', 'I':'Ի', 'J':'Յ', 'K':'Կ', 'L':'Լ', 'M':'Մ', 'N':'Ն', 'O':'Օ', 'P':'Պ', 'Q':'Ք', 'R':'Ր', 'S':'Ս', 'T':'Տ', 'U':'Ու', 'V':'Վ', 'W':'Վ', 'X':'Խ', 'Y':'Ը', 'Z':'Զ', 'Th':'Թ', 'Zh':'Ժ', 'Kh':'Խ', 'Ts':'Ծ', 'Dz':'Ձ', 'Gh':'Ղ', 'Tch':'Ճ', 'Sh':'Շ', 'Vo':'Ո', 'Ch':'Չ', 'Dzh':'Ջ', 'Ph':'Փ'};

function transliterate(word, dict) {
	return word.split('').map(function (char) {
    	return dict[char] || char; 
  	}).join("");
}

function armenianize(word, dict) {
	var i = 0;
	var output = '';
	var keys = Object.keys(dict);
	while ( i < word.length )
		if ( keys.indexOf(word.substring(i, i+3)) != -1 )
			output += dict[word.substring(i, i+=3)];
		else if ( keys.indexOf(word.substring(i, i+2)) != -1 )
			output += dict[word.substring(i, i+=2)];
		else if ( keys.indexOf(word.substring(i, i+1)) != -1 )
			output += dict[word.substring(i, i+=1)];
		else
			output += word.substring(i, i=+1);
	return output;
}

function convert(s) {
	if (Object.keys(arm2lat).indexOf(s[0]) != -1)
		return [s, transliterate(s, arm2lat)];
	else if (Object.keys(lat2arm).indexOf(s[0]) != -1)
		return [s, armenianize(s, lat2arm)];
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
		if (s.length > 0	) {
			//console.log(convert(s));
			clearList();
			showList(convert(s));
		} else {
			clearList();
		}
	});
});

