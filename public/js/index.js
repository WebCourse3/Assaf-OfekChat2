//for pull request
$(function () {
	var socket = io();
	var user = new User();

	$('form').submit(function() {
		var msg =  $('#m').val();
		var userName = $('#name' ).val();

		if (userName.length === 0) {
			alert('Please identify yourself');
			return false;
		}
		if (user.name !== userName)
			user = new User(userName);

		 if (msg.startsWith('/')) {
			user.getUI().decypt(msg.substring(1));
		} else {
			appendMessage(msg, userName, user.getUI());
			socket.emit('chat message', msg, userName, user.getUI());
		}
		$('#m').val('');
		return false;
	});

	socket.on('chat message', function(msg, userName, ui){
		appendMessage(msg, userName, UI.toUIObject(ui));
	});
});


function appendMessage(msg, userName, ui) {
	$('#messages').prepend(ui.createMessage(msg,userName));
}