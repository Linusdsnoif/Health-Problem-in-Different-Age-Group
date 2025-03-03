// Create the timeline visualization
function createTimeline() {
    const container = d3.select("#timeline-container");
    container.html(""); // Clear previous content
    
    // Create tooltip
    let tooltip = d3.select("body").select(".tooltip");
    if (tooltip.empty()) {
        tooltip = d3.select("body")
            .append("div")
            .attr("class", "tooltip");
    }
    
    const margin = { top: 40, right: 40, bottom: 40, left: 40 };
    const width = container.node().clientWidth - margin.left - margin.right;
    const height = ageGroups.length * 300; // Height per section
    
    // Create the SVG container
    const svg = container
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);
    
    // Add vertical timeline line
    svg.append("line")
        .attr("x1", width / 2)
        .attr("y1", 0)
        .attr("x2", width / 2)
        .attr("y2", height)
        .style("stroke", "#aaa")
        .style("stroke-width", 4)
        .style("stroke-dasharray", "5,5");
    
    // Create sections for each age group
    const sections = svg.selectAll(".age-section")
        .data(ageGroups)
        .enter()
        .append("g")
        .attr("class", "age-section")
        .attr("id", d => d.id)
        .attr("transform", (d, i) => `translate(0,${i * 300})`);
    
    // Add circles at the timeline points
    sections.append("circle")
        .attr("cx", width / 2)
        .attr("cy", 20)
        .attr("r", 15)
        .style("fill", d => d.color)
        .style("stroke", "#fff")
        .style("stroke-width", 2);
    
    // Add age labels to circles
    sections.append("text")
        .attr("x", width / 2)
        .attr("y", 25)
        .attr("text-anchor", "middle")
        .style("font-weight", "bold")
        .style("font-size", "12px")
        .text((d, i) => i + 1);
    
    // Add section headers
    sections.append("text")
        .attr("x", width / 2)
        .attr("y", 60)
        .attr("text-anchor", "middle")
        .style("font-size", "18px")
        .style("font-weight", "bold")
        .text(d => `${d.label} (${d.ageRange})`);
    
    // Create procedure bars for each section
    sections.each(function(d, i) {
        const section = d3.select(this);
        const procedures = surgicalData[d.id];
        const isLeft = i % 2 === 0; // Alternate sides
        
        // Create a group for procedure bars
        const barGroup = section.append("g")
            .attr("transform", `translate(0, 80)`);
        
        // Create scale for bar widths
        const xScale = d3.scaleLinear()
            .domain([0, d3.max(procedures, p => p.percentage) * 1.2])
            .range([0, width * 0.35]);
        
        // Create bars for each procedure - alternate sides
        const bars = barGroup.selectAll(".proc-bar")
            .data(procedures)
            .enter()
            .append("g")
            .attr("class", "proc-bar")
            .attr("transform", (_, j) => {
                if (isLeft) {
                    return `translate(${width / 2 - 10}, ${j * 40})`;
                } else {
                    return `translate(${width / 2 + 10}, ${j * 40})`;
                }
            });
        
        // Add bars
        bars.append("rect")
            .attr("x", isLeft ? -xScale(d => d.percentage) : 0)
            .attr("y", 0)
            .attr("width", p => xScale(p.percentage))
            .attr("height", 25)
            .attr("rx", 5)
            .style("fill", d.color)
            .style("opacity", 0.8)
            .on("mouseover", function(event, p) {
                d3.select(this).style("opacity", 1);
                tooltip
                    .style("visibility", "visible")
                    .html(`
                        <strong>${p.procedure}</strong>
                        <span><b>Frequency:</b> ${p.percentage}%</span>
                        <span><b>Risk Level:</b> ${p.risks}</span>
                        <span><b>Recovery:</b> ${p.recovery}</span>
                    `);
            })
            .on("mousemove", function(event) {
                tooltip
                    .style("top", (event.pageY - 10) + "px")
                    .style("left", (event.pageX + 10) + "px");
            })
            .on("mouseout", function() {
                d3.select(this).style("opacity", 0.8);
                tooltip.style("visibility", "hidden");
            });
        
        // Add procedure name labels (only the procedure names)
        bars.append("text")
            .attr("x", isLeft ? -xScale(d => d.percentage) - 10 : xScale(d => d.percentage) + 10)
            .attr("y", 16)
            .attr("text-anchor", isLeft ? "end" : "start")
            .style("font-size", "13px")
            .style("pointer-events", "none")
            .text(p => p.procedure);
    });
    
    // Add health consideration sections
    ageGroups.forEach((group, i) => {
        // Add container div for each section
        const infoDiv = container.append("div")
            .attr("class", "info-div")
            .style("background-color", `${group.color}20`)
            .style("border-left-color", group.color);
        
        // Add health considerations
        infoDiv.append("h3")
            .text("Key Health Considerations");
        
        infoDiv.append("p")
            .html(healthConsiderations[i]);
    });
}