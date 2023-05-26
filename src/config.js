// the global properties of the explorable, widget geometries etc. depending on the choice and application
// you are free to define new variables and properties for later access and for setting up the explorable
// the only place this is needed is for setting up the interactions in setup_interactions.js and in
// controls.js

export default { 
	widgets:{
		slider_size: 400,
		slider_show: true,
		slider_gap : 1.25,
		slider_girth: 12,
		slider_knob: 14,
		slider_anchor: {x:1,y:6.6},
		toggle_anchor: {x:7,y:1.5},
		toggle_label_pos:"right",
		toggle_gap:1.5,
		playbutton_size: 120,
		playbutton_anchor:{x:3,y:2},
		backbutton_anchor:{x:4,y:4.5},
		resetbutton_anchor:{x:2,y:4.5}
	},
	simulation: {
		delay:0,
		hideout_color:"rgb(80,80,80)"
	}
}