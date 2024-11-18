import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import jsonData from './data.json';
import "./D3Tree.css";

const D3TreeGraph = () => {
  const svgRef = useRef();

 

  useEffect(() => {
    d3.select(svgRef.current).selectAll("*").remove();

    const width = 2500;
    const dx = 100;
    const dy = width / 6;

    const root = d3.hierarchy(jsonData);
    const tree = d3.tree().nodeSize([dx, dy]);
    root.sort((a, b) => d3.ascending(a.data.name, b.data.name));
    tree(root);

    const svg = d3
      .select(svgRef.current)
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("viewBox", [-dy / 3, 0, width, 1000])
      .attr("preserveAspectRatio", "xMidYMid meet");

    const gElement = svg.append("g");

    // Links
    gElement
      .append("g")
      .attr("class", "links")
      .selectAll("path")
      .data(root.links())
      .join("path")
      .attr("fill", "none")
      .attr("stroke", "#888")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", 1.5)
      .attr("d", d3.linkHorizontal().x((d) => d.y).y((d) => d.x));

    // Nodes
    const node = gElement
      .append("g")
      .attr("class", "nodes")
      .selectAll("g")
      .data(root.descendants())
      .join("g")
      .attr("transform", (d) => `translate(${d.y},${d.x})`);

    node
      .append("text")
      .attr("dy", "0.31em")
      .attr("x", (d) => (d.children ? -10 : 10))
      .attr("text-anchor", (d) => (d.children ? "end" : "start"))
      .text((d) => d.data.name)
      .style("font-size", "15px")
      .style("font-weight", "bold");

    node
      .append("text")
      .attr("dy", "1.5em")
      .attr("x", (d) => (d.children ? -10 : 10))
      .attr("text-anchor", (d) => (d.children ? "end" : "start"))
      .text((d) => `Prerequisites: ${d.data.prerequisites?.join(", ") || "None"}`)
      

    const zoom = d3.zoom()
      .scaleExtent([0.5, 5])
      .on("zoom", (event) => gElement.attr("transform", event.transform));
    svg.call(zoom);
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default D3TreeGraph;
