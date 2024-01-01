import * as d3 from "d3"
import param from "./parameters.js"
import {agents,hideouts} from "./model.js"
import cfg from "./config.js"
import {tadpole,dist} from "./utils.js"
import styles from "./styles.module.css"

const L = param.L;
const X = d3.scaleLinear().domain([0,L]);
const Y = d3.scaleLinear().domain([0,L]);

const initialize = (display,config) => {

	const W = config.display_size.width;
	const H = config.display_size.height;
	
	X.range([0,W]);
	Y.range([0,H]);
		
	display.select("#origin").remove()
		
	const origin = display.append("g").attr("id","origin")
	
	origin.selectAll(null).data(hideouts).enter().append("circle")
		.attr("class",styles.hideout)
		.attr("r",function(d){return X(d.r)})
		.attr("cx",d=>X(d.x))
		.attr("cy",d=>Y(d.y))
		.style("opacity",param.dark_zones.widget.value()?1:0)
	
	const agent = origin.selectAll("."+styles.agent).data(agents).enter().append("g")
		.attr("class",styles.agent)
		.attr("transform",d => "translate("+X(d.x)+","+Y(d.y)+")rotate("+(d.theta)+")")
	
	agent.append("path").attr("d",tadpole(param.agentsize))
		
};

const go = (display,config) => {
	
	display.selectAll("."+styles.hideout)
		.attr("cx",d=>X(d.x))
		.attr("cy",d=>Y(d.y))

	
	display.selectAll("."+styles.agent)
		.attr("transform",d => "translate("+X(d.x)+","+Y(d.y)+")rotate("+(d.theta)+")")
}

const update = (display,config) => {}


export {initialize,go,update}
