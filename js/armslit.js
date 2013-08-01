function convert(s) {
	// ա բ գ դ ե զ է ը թ ժ ի լ խ ծ կ հ ձ ղ ճ մ յ ն շ ո չ պ ջ ռ ս վ տ ր ց ու փ ք և օ ֆ
	return [s];
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

