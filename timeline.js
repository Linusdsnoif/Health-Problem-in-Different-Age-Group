// // Create the timeline visualization
// function createTimeline() {
//     const container = d3.select("#timeline-container");
//     container.html(""); // Clear previous content
    
//     // Create tooltip
//     let tooltip = d3.select("body").select(".tooltip");
//     if (tooltip.empty()) {
//         tooltip = d3.select("body")
//             .append("div")
//             .attr("class", "tooltip");
//     }
    
//     const margin = { top: 40, right: 40, bottom: 40, left: 40 };
//     const width = container.node().clientWidth - margin.left - margin.right;

//     // Get global max percentage across ALL age groups
//     const globalMaxPercentage = d3.max(ageGroups.flatMap(group => surgicalData[group.id] || []), p => p.percentage);

//     // Define global scale using the highest percentage across all age groups
//     const xScale = d3.scaleLinear()
//         .domain([0, globalMaxPercentage * 1.2])  // Scale across ALL groups
//         .range([0, width * 0.35]);

//     // Dynamically calculate section heights based on the number of procedures
//     const sectionHeights = ageGroups.map(group => {
//         const procedures = surgicalData[group.id] || [];
//         return 100 + procedures.length * 40;  // Each procedure gets 40px of space
//     });

//     // Compute total SVG height based on all sections
//     const totalHeight = sectionHeights.reduce((sum, h) => sum + h, 0);

//     // Create the SVG container
//     const svg = container
//         .append("svg")
//         .attr("width", width + margin.left + margin.right)
//         .attr("height", totalHeight + margin.top + margin.bottom)
//         .append("g")
//         .attr("transform", `translate(${margin.left},${margin.top})`);
    
//     // Add vertical timeline line
//     svg.append("line")
//         .attr("x1", width / 2)
//         .attr("y1", 0)
//         .attr("x2", width / 2)
//         .attr("y2", totalHeight)
//         .style("stroke", "#aaa")
//         .style("stroke-width", 4)
//         .style("stroke-dasharray", "5,5");
    
//     let yOffset = 0;

//     // Create sections for each age group with dynamic height
//     const sections = svg.selectAll(".age-section")
//         .data(ageGroups)
//         .enter()
//         .append("g")
//         .attr("class", "age-section")
//         .attr("id", d => d.id)
//         .attr("transform", (d, i) => {
//             const y = yOffset;
//             yOffset += sectionHeights[i] + 20; // Add extra padding between sections
//             return `translate(0,${y})`;
//         });

//     // Add circles at the timeline points
//     sections.append("circle")
//         .attr("cx", width / 2)
//         .attr("cy", 20)
//         .attr("r", 15)
//         .style("fill", d => d.color)
//         .style("stroke", "#fff")
//         .style("stroke-width", 2);
    
//     // Add age labels to circles
//     sections.append("text")
//         .attr("x", width / 2)
//         .attr("y", 25)
//         .attr("text-anchor", "middle")
//         .style("font-weight", "bold")
//         .style("font-size", "12px")
//         .text(d => d.label);
    
//     // Add section headers
//     sections.append("text")
//         .attr("x", width / 2)
//         .attr("y", 60)
//         .attr("text-anchor", "middle")
//         .style("font-size", "18px")
//         .style("font-weight", "bold")
//         .text(d => `${d.label} (${d.ageRange})`);

//     // Create procedure bars for each section
//     sections.each(function(d, i) {
//         const section = d3.select(this);
//         let procedures = surgicalData[d.id] || [];
        
//         // **SORT PROCEDURES BY HIGHEST PERCENTAGE TO LOWEST**
//         procedures.sort((a, b) => b.percentage - a.percentage);

//         const isLeft = i % 2 === 0; // Alternate sides
        
//         const barSpacing = 40; // Each bar gets 40px of vertical space
//         const barHeight = 25;
//         const startY = 80; // Start below title
        
//         // Create a group for procedure bars
//         const barGroup = section.append("g")
//             .attr("transform", `translate(0, ${startY})`);
        
//         // Create bars for each procedure - alternate sides
//         const bars = barGroup.selectAll(".proc-bar")
//             .data(procedures)
//             .enter()
//             .append("g")
//             .attr("class", "proc-bar")
//             .attr("transform", (_, j) => {
//                 const yPosition = j * barSpacing;
//                 return `translate(${width / 2 + (isLeft ? -10 : 10)}, ${yPosition})`;
//             });
        
//         // Add bars
//         bars.append("rect")
//             .attr("x", isLeft ? d => -xScale(d.percentage) : 0)
//             .attr("y", 0)
//             .attr("width", p => xScale(p.percentage))  // **Uses global scale**
//             .attr("height", barHeight)
//             .attr("rx", 5)
//             .style("fill", d.color)
//             .style("opacity", 0.8)
//             .on("mouseover", function(event, p) {
//                 d3.select(this).style("opacity", 1);
//                 tooltip
//                     .style("visibility", "visible")
//                     .html(`
//                         <strong>${p.procedure}</strong><br>
//                         <span><b>Proportion:</b> ${p.percentage}%</span><br>
//                         <span><b>Mortality Rate:</b> ${p.mortality_rate}%</span><br>
//                         <span><b>Avg Operation Time:</b> ${p.avg_operation_time_seconds} hours</span><br>
//                         <span><b>Avg Hospital Stay:</b> ${p.avg_hospital_stay_days} days</span>
//                     `);
//             })
//             .on("mousemove", function(event) {
//                 tooltip
//                     .style("top", (event.pageY - 10) + "px")
//                     .style("left", (event.pageX + 10) + "px");
//             })
//             .on("mouseout", function() {
//                 d3.select(this).style("opacity", 0.8);
//                 tooltip.style("visibility", "hidden");
//             });

//         // Add procedure name labels
//         bars.append("text")
//             .attr("x", isLeft ? d => -xScale(d.percentage) - 10 : d => xScale(d.percentage) + 10)
//             .attr("y", barHeight / 2 + 5)
//             .attr("text-anchor", isLeft ? "end" : "start")
//             .style("font-size", "13px")
//             .style("pointer-events", "none")
//             .text(p => p.procedure);
//     });

//     // Add health consideration sections
//     ageGroups.forEach((group, i) => {
//         // Add container div for each section
//         const infoDiv = container.append("div")
//             .attr("class", "info-div")
//             .style("background-color", `${group.color}20`)
//             .style("border-left-color", group.color);
        
//         // Add health considerations
//         infoDiv.append("h3")
//             .text("Key Health Considerations");
        
//         infoDiv.append("p")
//             .html(healthConsiderations[i]);
//     });
// }

// Create the timeline visualization
function createTimeline() {
    const container = d3.select("#timeline-container");
    container.html(""); // Clear previous content

    // Create tooltip
    let tooltip = d3.select("body").select(".tooltip");
    if (tooltip.empty()) {
        tooltip = d3.select("body")
            .append("div")
            .attr("class", "tooltip")
            .style("position", "absolute")
            .style("background", "rgba(0, 0, 0, 0.8)")
            .style("color", "#fff")
            .style("padding", "8px")
            .style("border-radius", "5px")
            .style("visibility", "hidden")
            .style("font-size", "12px")
            .style("pointer-events", "none");
    }

    const margin = { top: 40, right: 40, bottom: 100, left: 40 };
    const width = container.node().clientWidth - margin.left - margin.right;
    const barSpacing = 40; // Space per bar
    const barHeight = 25;

    // Get global max percentage across all age groups and genders
    const globalMaxPercentage = d3.max(ageGroups.flatMap(group => {
        const data = surgicalData[group.id] || {};
        return [...(data.f || []), ...(data.m || [])].map(p => p.percentage);
    }));

    // Define scale based on max percentage
    const xScale = d3.scaleLinear()
        .domain([0, globalMaxPercentage * 1.2])
        .range([0, width * 0.35]);

    // Compute section heights dynamically
    const sectionHeights = ageGroups.map(group => {
        const data = surgicalData[group.id] || {};
        const numFemaleBars = (data.f || []).length;
        const numMaleBars = (data.m || []).length;
        const maxBars = Math.max(numFemaleBars, numMaleBars);
        return maxBars > 0 ? 80 + maxBars * barSpacing : 40; // Adjust height dynamically
    });

    // Compute total height dynamically
    const totalHeight = sectionHeights.reduce((sum, h) => sum + h, 0);

    // Create the SVG container
    const svg = container
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", totalHeight + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Add vertical timeline line
    svg.append("line")
        .attr("x1", width / 2)
        .attr("y1", 0)
        .attr("x2", width / 2)
        .attr("y2", totalHeight)
        .style("stroke", "#aaa")
        .style("stroke-width", 4)
        .style("stroke-dasharray", "5,5");

    let yOffset = 0;

    // Create sections for each age group with dynamic height
    const sections = svg.selectAll(".age-section")
        .data(ageGroups)
        .enter()
        .append("g")
        .attr("class", "age-section")
        .attr("id", d => d.id)
        .attr("transform", (d, i) => {
            const y = yOffset;
            yOffset += sectionHeights[i] + 10; // Adjust for spacing
            return `translate(0,${y})`;
        });

    // Add circles at the timeline points
    sections.append("circle")
        .attr("cx", width / 2)
        .attr("cy", 20)
        .attr("r", 15)
        .style("fill", d => d.color)
        .style("stroke", "#fff")
        .style("stroke-width", 2);

    // Add age labels
    sections.append("text")
        .attr("x", width / 2)
        .attr("y", 25)
        .attr("text-anchor", "middle")
        .style("font-weight", "bold")
        .style("font-size", "12px")
        .text(d => d.label);

    // Add section headers
    sections.append("text")
        .attr("x", width / 2)
        .attr("y", 60)
        .attr("text-anchor", "middle")
        .style("font-size", "18px")
        .style("font-weight", "bold")
        .text(d => `${d.label} (${d.ageRange})`);

    // Create procedure bars for each section
    sections.each(function(d) {
        const section = d3.select(this);
        const data = surgicalData[d.id] || {};
        const femaleProcedures = [...(data.f || [])].sort((a, b) => b.percentage - a.percentage);
        const maleProcedures = [...(data.m || [])].sort((a, b) => b.percentage - a.percentage);
        const color = d.color; // Get color from ageGroups

        const maxBars = Math.max(femaleProcedures.length, maleProcedures.length);
        const dynamicStartY = maxBars > 0 ? 80 : 40; // Adjust for empty sections

        // Create groups for female and male bars
        const femaleBarGroup = section.append("g").attr("transform", `translate(0, ${dynamicStartY})`);
        const maleBarGroup = section.append("g").attr("transform", `translate(0, ${dynamicStartY})`);

        function showTooltip(event, p, gender) {
            tooltip.style("visibility", "visible")
                .html(`
                    <strong>${p.procedure}</strong><br>
                    <b>Gender:</b> ${gender}<br>
                    <b>Mortality Rate:</b> ${p.mortality_rate}%<br>
                    <b>Avg Operation Time:</b> ${p.avg_operation_time_seconds} hours<br>
                    <b>Avg Hospital Stay:</b> ${p.avg_hospital_stay_days} days
                `)
                .style("top", `${event.pageY + 10}px`)
                .style("left", `${event.pageX + 10}px`);
        }

        function hideTooltip() {
            tooltip.style("visibility", "hidden");
        }

        // Add female bars (left side)
        const femaleBars = femaleBarGroup.selectAll(".proc-bar-f")
            .data(femaleProcedures)
            .enter()
            .append("g")
            .attr("class", "proc-bar")
            .attr("transform", (_, j) => `translate(${width / 2 - 10}, ${j * barSpacing})`);

        femaleBars.append("rect")
            .attr("x", d => -xScale(d.percentage))
            .attr("y", 0)
            .attr("width", d => xScale(d.percentage))
            .attr("height", barHeight)
            .style("fill", color)
            .on("mouseover", (event, p) => showTooltip(event, p, "Female"))
            .on("mousemove", (event) => tooltip.style("top", `${event.pageY + 10}px`).style("left", `${event.pageX + 10}px`))
            .on("mouseout", hideTooltip);

        femaleBars.append("text")
            .attr("x", d => -xScale(d.percentage) - 10)
            .attr("y", barHeight / 2 + 5)
            .attr("text-anchor", "end")
            .style("font-size", "13px")
            .text(p => p.procedure);

        // Add male bars (right side)
        const maleBars = maleBarGroup.selectAll(".proc-bar-m")
            .data(maleProcedures)
            .enter()
            .append("g")
            .attr("class", "proc-bar")
            .attr("transform", (_, j) => `translate(${width / 2 + 10}, ${j * barSpacing})`);

        maleBars.append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", d => xScale(d.percentage))
            .attr("height", barHeight)
            .style("fill", color)
            .on("mouseover", (event, p) => showTooltip(event, p, "Male"))
            .on("mousemove", (event) => tooltip.style("top", `${event.pageY + 10}px`).style("left", `${event.pageX + 10}px`))
            .on("mouseout", hideTooltip);

        maleBars.append("text")
            .attr("x", d => xScale(d.percentage) + 10)
            .attr("y", barHeight / 2 + 5)
            .attr("text-anchor", "start")
            .style("font-size", "13px")
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