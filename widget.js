(function() {

	var widget = WAF.require('waf-core/widget'),
		Event = WAF.require('waf-core/event');

	//Creating Widget
    var MyOwnEvent = widget.create('MyOwnEvent');

	//Creating an event
	Event.create('MellowYellow');

    MyOwnEvent.prototype.init = function () {
        
        var thisWidget = this;
        
        $(this.node).empty();
        
        var field  = document.createElement('input');
        
        $(this.node).append(field);
        
        //capturing the keypress event     
 		$(field).keypress(function(e) {

			//fire event if enter is pressed
		    if(e.charCode == 13) {
		    	
				// checking if the color typed is yellow
		    	if ($(field).val() == 'yellow'){
		    		
			 		//firing the MellowYellow Event;
			    	thisWidget.fire(new Event.MellowYellow({ value: 'MellowYellow' }));
				}
		    }		 		
 		
 		}.bind(this));

			
    };
})();

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html
