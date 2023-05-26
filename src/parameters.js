// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use

export default {
		N:100,
		L:128,
		agentsize: 6.0,
		dt:1,
		speed_variation: 0.5,
		angular_increment:0.2,
		collission_radius:1.0,
		blindspot:100,
		number_hideouts:3,
		speed_hideouts:0.075,
		size_hideouts:30,
	
		speed_in_the_light: {
			range:[0.1,1],
			default:0.5
		},
		speed_in_the_dark: {
			range:[0.05,0.5],
			default:0.1
		},
		alignment_radius: {
			range:[0,5],
			default:2
		},
		attraction_radius: {
			range:[0,15],
			default:10
		},
		wiggle: {
			range:[0,30],
			default:10
		},
		collective_behavior: {
			default: true
		},
		dark_zones: {
			default: true
		}
		
}

