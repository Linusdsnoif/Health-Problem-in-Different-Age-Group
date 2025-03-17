// Function to create an introduction before the timeline
function createIntroduction() {
    const introContainer = d3.select("#intro-container");

    // Clear previous content
    introContainer.html("");

    // Create an intro section
    const introSection = introContainer.append("div")
        .attr("class", "intro-section")
        .style("text-align", "center")
        .style("padding", "40px")
        .style("background", "#f4f4f4")
        .style("border-bottom", "2px solid #ccc");

    // Add title
    introSection.append("h1")
        .text("The Surgical Journey Through Life")
        .style("font-size", "32px")
        .style("color", "#333");

    // Add subtitle
    introSection.append("h2")
        .text("A Data-Driven Exploration of Surgeries Across Different Ages")
        .style("font-size", "20px")
        .style("color", "#555")
        .style("margin-bottom", "20px");

    // Add introduction text
    introSection.append("p")
        .text("This interactive timeline visualizes the most common surgical procedures by bodily system across different age groups, along with key health considerations and insights. Scroll down to explore how surgical needs change throughout life.")
        .style("font-size", "18px")
        .style("line-height", "1.6")
        .style("color", "#444")
        .style("max-width", "800px")
        .style("margin", "0 auto");

    // Add "Start Exploring" button
    introSection.append("button")
        .text("Start Exploring")
        .style("margin-top", "20px")
        .style("padding", "10px 20px")
        .style("font-size", "16px")
        .style("background", "#007bff")
        .style("color", "#fff")
        .style("border", "none")
        .style("border-radius", "5px")
        .style("cursor", "pointer")
        .on("click", () => {
            // Show the Male and Female labels
            d3.select(".left").style("display", "block");
            d3.select(".right").style("display", "block");

            // Scroll to the timeline
            scrollToSection("timeline-container");
            handleScroll();
        });
}

function handleScroll() {
    const introContainer = document.getElementById("intro-container");
    const introBottom = introContainer.getBoundingClientRect().bottom;

    if (introBottom > 0) {
        // If the intro is still in view, hide the labels
        d3.select(".left").style("opacity", "0").style("pointer-events", "none");
        d3.select(".right").style("opacity", "0").style("pointer-events", "none");
    } else {
        // If scrolled past the intro, show the labels
        d3.select(".left").style("opacity", "1").style("pointer-events", "auto");
        d3.select(".right").style("opacity", "1").style("pointer-events", "auto");
    }
}

function hideLabelsOnLoad() {
    d3.select(".left").style("display", "none").style("opacity", "0");
    d3.select(".right").style("display", "none").style("opacity", "0");
}

// Attach scroll listener
document.addEventListener("DOMContentLoaded", hideLabelsOnLoad);
window.addEventListener("scroll", handleScroll);

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

    const margin = { top: 40, right: 40, bottom: 100, left: 40};
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
        .range([0, width * 0.35 * 1.25]);

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
    sections.each(function(d, i) {
        const section = d3.select(this);
        const data = surgicalData[d.id] || {};
        const femaleProcedures = [...(data.f || [])].sort((a, b) => b.percentage - a.percentage);
        const maleProcedures = [...(data.m || [])].sort((a, b) => b.percentage - a.percentage);
        const color = d.color;

        const maxBars = Math.max(femaleProcedures.length, maleProcedures.length);
        const dynamicStartY = maxBars > 0 ? 80 : 40;

        // Create groups for female and male bars
        const femaleBarGroup = section.append("g").attr("transform", `translate(0, ${dynamicStartY})`);
        const maleBarGroup = section.append("g").attr("transform", `translate(0, ${dynamicStartY})`);

        // Find the index of the shortest bar for each gender
        const shortestFemaleBarIndex = femaleProcedures.reduce((shortestIdx, p, idx) => {
            return p.percentage < femaleProcedures[shortestIdx].percentage ? idx : shortestIdx;
        }, 0);

        const shortestMaleBarIndex = maleProcedures.reduce((shortestIdx, p, idx) => {
            return p.percentage < maleProcedures[shortestIdx].percentage ? idx : shortestIdx;
        }, 0);

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
            .style("fill", color);

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
            .style("fill", color);

        maleBars.append("text")
            .attr("x", d => xScale(d.percentage) + 10)
            .attr("y", barHeight / 2 + 5)
            .attr("text-anchor", "start")
            .style("font-size", "13px")
            .text(p => p.procedure);

        // Health considerations for the shortest female bar
        if (femaleProcedures.length >= 0) {
            const bulletPointWidth = 300;
            const bulletPointHeight = 220;

            const leftCheckmark = section.append("foreignObject")
                .attr("x", Math.max(0, width / 2 - xScale(globalMaxPercentage * 1.2) - bulletPointWidth))  
                .attr("y", dynamicStartY + shortestFemaleBarIndex * barSpacing + 30)  
                .attr("width", bulletPointWidth)
                .attr("height", bulletPointHeight)
                .attr("class", "checkmark-content")
                .append("xhtml:div")
                .html(`<div><span class="checkmark">&#10004;</span><span class="text">${healthConsiderations[i * 2] || ""}</span></div>`);
        }

        // Health considerations for the shortest male bar
        if (maleProcedures.length >= 0) {
            const bulletPointWidth = 300;
            const bulletPointHeight = 220;

            const rightCheckmark = section.append("foreignObject")
                .attr("x", Math.max(width - bulletPointWidth - 20, width / 2 + xScale(globalMaxPercentage * 1.2)) - 250)  
                .attr("y", dynamicStartY + shortestMaleBarIndex * barSpacing - 40)  
                .attr("width", bulletPointWidth)
                .attr("height", bulletPointHeight)
                .attr("class", "checkmark-content")
                .append("xhtml:div")
                .html(`<div><span class="checkmark">&#10004;</span><span class="text">${healthConsiderations[i * 2 + 1] || ""}</span></div>`);
        }
    });
}

