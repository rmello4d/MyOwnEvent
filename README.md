## Custom Widget for [Wakanda](http://wakanda.org)
The __MyOwnEvent__ widget is a simple Event creation example.  

### Properties
This widget has the following properties: 

* __width__: The width of the widget
* __height__: The height of your widget

### Goals
The __MyOwnEvent__ is an example of how to create a custom Event for the widget. 

Basically the widget fires an event when an action happens. 

In this example, when you finish typing into the input element and hit <enter>, the event 'MyEvent' will be fired to the page using the widget. 


### widget.js

     	//verifying if the keyboard enter was pressed
        if(e.charCode == 13) {
                                                               
             //firing the  Event;
             this.fire("MyEvent", { value: 'Hello!!' });
                                        
        }     


### designer.js
	
	// adding the event  to the Studio Events panel
    MyOwnEvent.addEvent({ name: 'MyEvent' });


### Wakanda Studio

1. Drag the widget to your Wakanda page. 
2. Select the widget and edit the Event MyEvent in the Studio panel
3. Insert some code in the MyEvent (example)

// eventHandlers

	myOwnEvent1.MellowYellow = function myOwnEvent1_MyEvent (event)
	{
		alert(event.data.value);
	};
4. run the page, type anything in the input field and hit <enter>
5. a pop up alert should say ("Hello";


### CSS
The __MyOwnEvent__ CSS has no specific selectors
You can adjust its color by changing directly in the Studio OR by changing the /css/widget.css file.  


### More Information
For more information on how to install a custom widget, refer to [Installing a Custom Widget](http://doc.wakanda.org/WakandaStudio0/help/Title/en/page3869.html#1027761).

For more information about Custom Widgets, refer to [Custom Widgets](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3863.html "Custom Widgets") in the [Architecture of Wakanda Applications](http://doc.wakanda.org/Wakanda0.v5/help/Title/en/page3844.html "Architecture of Wakanda Applications") manual.

