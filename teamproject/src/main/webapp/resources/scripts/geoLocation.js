window.addEventListener("load", function(){
	console.log("HelloScript");
	let Xinput = this.document.querySelector("#x");
	let Yinput = this.document.querySelector("#y");
	

	function getLocation() {
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				alert(position.coords.latitude + ' ' + position.coords.longitude);
				Xinput.value = position.coords.latitude;
				Yinput.value = position.coords.longitude;
			}, function(error) {
				console.error(error);
			}, {
				enableHighAccuracy: false,
				maximumAge: 0,
				timeout: Infinity
			});
		} else {
			alert("GPS를 지원하지 않습니다.");
		}
	}
	getLocation();
});