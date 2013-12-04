(function(MyOwnEvent) {
   
	/*Default positioning*/
    MyOwnEvent.setWidth('200');
    MyOwnEvent.setHeight('20');
	// adding the event  to the Studio Events panel
    MyOwnEvent.addEvent({ name: 'MyEvent' });
});

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3870.html '20px'
    }]);   
    
    
	// defining the action when user resize the widget in the Studio      
    MyOwnEvent.on('Resize', function(event) {
    	this.studioCss('height', event.size.height);
    	this.studioCss('width', event.size.width); 
    	this.studioVal('data-width', event.size.width + 'px');
    	this.studioVal('data-height', event.size.height + 'px');	 	
	 	this.studioPanelRefresh();
    });
    

    // defining the action when widget is displayed/updated in the Studio 
	MyOwnEvent.on('Display', function (attributes) {
		//display width and height
	 	this.studioCss('width', attributes['data-width']); 	
	 	this.studioCss('height', attributes['data-height']); 		  
	 });

	// adding the event  to the Studio Events panel
    MyOwnEvent.addEvent({ name: 'MellowYellow' });
})();

// For more information, refer to http://doc.wakanda.org/Wakanda0.DevBranch/help/Title/en/page3870.html