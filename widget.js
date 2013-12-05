WAF.define('MyOwnEvent', function() {

	var widget = WAF.require('waf-core/widget');

	//Creating Widget
    	var MyOwnEvent = widget.create('MyOwnEvent');
    	MyOwnEvent.tagname='input';

    	MyOwnEvent.prototype.init = function () {

		$(this.node).keypress( function(e) {
		
			//verifying if the keyboard enter was pressed
			if(e.charCode == 13) {
			    			    		
				//firing the MellowYellow Event;
				this.fire("MyEvent", { value: 'Hello!!' });
					
			 }		 		
	 		
	 	}.bind(this));
		
    	};
	return MyOwnEvent;
});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3871.html
