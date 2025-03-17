// Initialize the visualization
function initVisualization() {
    // Create navigation
    createNavigation();
    
    // Create timeline
    createTimeline();
    
    // Add scroll event listener
    window.addEventListener('scroll', updateNavigation);
    
    // Handle window resize
    window.addEventListener('resize', debounce(() => {
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

// Function to handle user input and display results
function handleUserInput() {
    const ageInput = document.getElementById('age-input');
    const genderInput = document.getElementById('gender-input');
    const resultDiv = document.getElementById('result');

    const age = parseInt(ageInput.value);
    const gender = genderInput.value;

    if (isNaN(age) || age < 0 || age > 100) {
        resultDiv.innerHTML = "<p>Please enter a valid age between 0 and 100.</p>";
        return;
    }

    // Find the age group
    const group = ageGroups.find(g => age >= g.start && age <= g.end);
    if (!group) {
        resultDiv.innerHTML = "<p>No data available for this age group.</p>";
        return;
    }

    // Get the surgical data for the age group and gender
    const data = surgicalData[group.id][gender] || [];
    if (data.length === 0) {
        resultDiv.innerHTML = "<p>No surgical data available for this age group and gender.</p>";
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
        <h3>Prevention Suggestions:</h3>
        <p>${getPreventionSuggestions(group.id, mostCommonProcedure.procedure)}</p>
    `;
}

// Function to get prevention suggestions
function getPreventionSuggestions(ageGroupId, procedure) {
    const suggestions = {
        "infant": "Ensure regular pediatric check-ups and vaccinations.",
        "toddler": "Maintain a healthy diet and ensure childproofing at home.",
        "child": "Encourage physical activity and a balanced diet.",
        "teen": "Promote healthy lifestyle choices and regular exercise.",
        "young-adult": "Focus on stress management and regular health screenings.",
        "adult": "Maintain a healthy weight and avoid smoking.",
        "senior": "Regular health check-ups and a balanced diet are crucial.",
        "elderly": "Stay active and ensure regular medical consultations."
    };

    return suggestions[ageGroupId] || "Regular health check-ups and a healthy lifestyle are recommended.";
}

// Add event listener to the search button
document.getElementById('search-button').addEventListener('click', handleUserInput);

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initVisualization);