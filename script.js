/* Added red image hover effects */
$(document).ready(function (){
	$("#github").mouseenter(function(){
		$("#github").attr("src","img/githubhover.png");
	});
	$("#github").mouseleave(function() {
		$("#github").attr("src","img/github.png");
	});
	$("#linkedin").mouseenter(function(){
		$("#linkedin").attr("src","img/linkedinhover.png");
	});
	$("#linkedin").mouseleave(function() {
		$("#linkedin").attr("src","img/linkedin.png");
	});
	$("#twitter").mouseenter(function(){
		$("#twitter").attr("src","img/twitterhover.png");
	});
	$("#twitter").mouseleave(function() {
		$("#twitter").attr("src","img/twitter.png");
	});
	$("#facebook").mouseenter(function(){
		$("#facebook").attr("src","img/facebookhover.png");
	});
	$("#facebook").mouseleave(function() {
		$("#facebook").attr("src","img/facebook.png");
	});
});