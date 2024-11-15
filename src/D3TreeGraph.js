import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import jsonData from './data.json';
import "./D3Tree.css";

const D3TreeGraph = () => {
  const svgRef = useRef();

  useEffect(() => {
    // Clear any previous SVG
    d3.select(svgRef.current).selectAll("*").remove();

    const width = 2500;
    const dx = 75;
    const root = d3.hierarchy(jsonData); // Use imported JSON directly
    const dy = width / (root.height + 1);

    const tree = d3.tree().nodeSize([dx, dy]);
    root.sort((a, b) => d3.ascending(a.data.name, b.data.name));
    tree(root);

    let x0 = Infinity;
    let x1 = -x0;
    root.each((d) => {
      if (d.x > x1) x1 = d.x;
      if (d.x < x0) x0 = d.x;
    });

    const height = x1 - x0 + dx * 2;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [-dy / 3, x0 - dx, width, height])
      .attr("style", "max-width: 100%; height: auto; font: 12px sans-serif;");

    // Links
    svg
      .append("g")
      .attr("fill", "none")
      .attr("stroke", "#888")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", 1.5)
      .selectAll("path")
      .data(root.links())
      .join("path")
      .attr(
        "d",
        d3.linkHorizontal().x((d) => d.y).y((d) => d.x)
      );

    // Nodes
    const node = svg
      .append("g")
      .attr("stroke-linejoin", "round")
      .attr("stroke-width", 3)
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
      .attr("stroke", "white")
      .attr("paint-order", "stroke")
      .style("font-weight", "bold")
      .style("font-size", "12px");
    
    node
      .append("text")
      .attr("dy", "1.5em") // Position below the course name
      .attr("x", (d) => (d.children ? -10 : 10))
      .attr("text-anchor", (d) => (d.children ? "end" : "start"))
      .text((d) => `Prerequisites: ${d.data.prerequisites?.map(pr => pr.name || pr).join(", ") || "None"}`)
      .style("font-size", "10px")
      .style("fill", "#888");
    
  }, []);

  return <svg ref={svgRef}></svg>;
};

export default D3TreeGraph;
