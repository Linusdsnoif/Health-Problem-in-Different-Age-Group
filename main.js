
// Initialize the visualization
function initVisualization() {
    // Create introduction
    createIntroduction();

    // Create navigation
    createNavigation();

    // Create timeline
    createTimeline();
    
    // Add scroll event listener
    window.addEventListener('scroll', updateNavigation);
    
    // Handle window resize
    window.addEventListener('resize', debounce(() => {
        createIntroduction();
        createNavigation();
        createTimeline();
    }, 250));
}

// Debounce function to limit how often a function can be called
function debounce(func, wait) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}

function handleScroll() {
    const timelineContainer = document.getElementById("timeline-container");
    if (!timelineContainer) return; // Avoid errors if the timeline isn't loaded

    const timelineRect = timelineContainer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const isTimelineVisible = timelineRect.top < windowHeight / 1.5 && timelineRect.bottom > windowHeight / 3;

    if (isTimelineVisible) {
        d3.select(".left")
            .style("display", "block")
            .transition().duration(100)
            .style("opacity", "1");

        d3.select(".right")
            .style("display", "block")
            .transition().duration(100)
            .style("opacity", "1");
    } else {
        d3.select(".left")
            .transition().duration(100)
            .style("opacity", "0")
            .on("end", function() { d3.select(this).style("display", "none"); });

        d3.select(".right")
            .transition().duration(100)
            .style("opacity", "0")
            .on("end", function() { d3.select(this).style("display", "none"); });
    }
}

function hideLabelsOnLoad() {
    d3.select(".left").style("display", "none").style("opacity", "0");
    d3.select(".right").style("display", "none").style("opacity", "0");
}

document.addEventListener("DOMContentLoaded", () => {
    hideLabelsOnLoad();
    window.addEventListener("scroll", handleScroll);
});

// Function to get prevention suggestions
function getPreventionSuggestions(ageGroupId, gender, procedure) {
    const suggestions = healthSuggestions[ageGroupId]?.[gender];
    if (suggestions) {
        const preventionHeading = ageGroupId === "toddler" ? "Preventing Specific Issues" : `Preventing ${procedure} Issues`;
        return `
            <h3>General Health Recommendations:</h3>
            <ul>
                ${suggestions.general.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <h3>${preventionHeading}:</h3>
            <ul>
                ${suggestions.specific.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <h3>Links:</h3>
            <ol>
                ${suggestions.links.map(link => `<li><a href="${link.url}" target="_blank">${link.name}</a></li>`).join('')}
            </ol>
        `;
    }
    return "Regular health check-ups and a healthy lifestyle are recommended.";
}

// Function to handle user input and display results
// Function to handle user input and display results
function handleUserInput() {
    const ageInput = document.getElementById('age-input');
    const genderInput = document.getElementById('gender-input');
    const resultDiv = document.getElementById('result');

    const age = parseInt(ageInput.value);
    const gender = genderInput.value;

    if (isNaN(age) || age < 0 || age > 94) {
        resultDiv.innerHTML = "<p>Please enter a valid age between 0 and 94.</p>";
        return;
    }

    // Find the age group
    const group = ageGroups.find(g => age >= g.start && age <= g.end);
    if (!group) {
        resultDiv.innerHTML = `
            <h3>No data available for this age group.</h3>
            <p>However, here are some general health recommendations:</p>
            ${getPreventionSuggestions(group.id, gender, "General Health")}
        `;
        return;
    }

    // Get the surgical data for the age group and gender
    const data = surgicalData[group.id][gender] || [];
    if (data.length === 0) {
        // Display a message indicating no surgical data is available
        resultDiv.innerHTML = `
            <h3>No surgical data available for ${group.label} (${gender === 'f' ? 'Female' : 'Male'}).</h3>
            <p>However, here are some general health recommendations:</p>
            ${getPreventionSuggestions(group.id, gender, "General Health")}
        `;
        return;
    }

    // Find the most common procedure
    const mostCommonProcedure = data.reduce((prev, current) => 
        (prev.percentage > current.percentage) ? prev : current
    );

    // Display the result
    resultDiv.innerHTML = `
        <h3>Most Common Health Problem for ${group.label} (${gender === 'f' ? 'Female' : 'Male'}):</h3>
        <p><strong>Procedure:</strong> ${mostCommonProcedure.procedure}</p>
        <p><strong>Percentage:</strong> ${mostCommonProcedure.percentage}%</p>
        <p><strong>Mortality Rate:</strong> ${mostCommonProcedure.mortality_rate}%</p>
        <p><strong>Average Operation Time:</strong> ${mostCommonProcedure.avg_operation_time_seconds} hours</p>
        <p><strong>Average Hospital Stay:</strong> ${mostCommonProcedure.avg_hospital_stay_days} days</p>
        ${getPreventionSuggestions(group.id, gender, mostCommonProcedure.procedure)}
    `;
}

// Add event listener to the search button
document.getElementById('search-button').addEventListener('click', handleUserInput);

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initVisualization);
