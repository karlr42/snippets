angular.module('karlr42.angular-copyright', []).
	directive('kcrCopyright', function () {
		return {
			restrict: "E",
			replace: true,
			template : function(element, attrs){
				var norange = attrs.norange || false;
				var start;
				if(attrs.start && !norange){
					var startYear = parseInt(attrs.start,10);
					if(startYear == NaN) return "ERROR: Invalid start year "+attrs.start;
					var currYear = new Date().getFullYear();
					start = currYear > startYear ? startYear+"-"+currYear : startYear
				}else{
					start = attrs.start || new Date().getFullYear();
				}
				var message = attrs.message || "";
				var copyright = attrs.localisedCopyright || "Copyright";
				return "<p>"+copyright+" © "+start+". "+message+"</p>";
			},
		};
	});