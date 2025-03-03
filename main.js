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

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initVisualization);