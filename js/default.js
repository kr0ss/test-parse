$(function () {
	$(document).foundation();

	var parseAPPID = "QPcD1ubamMqsmXnbwM3wG1ts4EHfywZPkGeMO7UE";
	var parseJSID = "MQ3hzbVrV1JtsocMlnz1Kus1TE93e6gtiU3q1SS1";

	Parse.initialize(parseAPPID, parseJSID);
	var CommentObject = Parse.Object.extend("CommentObject");
	var SegundoObjeto = Parse.Object.extend("SegundoObjeto");

	$('#commentForm').on('submit', function (e) {
		e.preventDefault();

		console.log("enviando");

		var data = {};
		data.name = $('#name').val();
		data.email = $('#email').val();
		data.asunto = $('#asunto').val();
		data.comments = $('#comments').val();

		var comment = new CommentObject();

		comment.save(data, {
			success:function() {
				console.log('enviado');

				alert('mensje enviado');
			},

			error:function(e) {
				console.dir(e);
			}
		});
	});

	$('#login').on('submit', function(){
		var data = {};
		data.user = $('#username').val();
		data.email = $('#email').val();
		data.password = $('#password').val();

		var user = new Parse.User();
		user.set("username", data.user);
		user.set("password", data.password);
		user.set("email", data.email);

		user.signUp(null, {
		  success: function(user) {
		  	alert('enviado')
		  },
		  error: function(user, error) {
		    console.log("Error: " + error.code + " " + error.message);
		  }
		});
	});
});