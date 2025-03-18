
// Create the navigation bar
function createNavigation() {
    const navContainer = d3.select("#nav-container");
    
    // Clear previous content
    navContainer.html("");
    
    // Create the navigation bar
    const navBar = navContainer
        .append("div")
        .attr("class", "nav-container");
    
    // Title
    navBar.append("h1")
        .attr("class", "title")
        .text("Surgical Journey Through Life");
   
    // Search box
    const searchContainer = navBar.append("div")
        .attr("class", "search-container");
    
    // Add error message element
    const errorFeedback = searchContainer.append("div")
        .attr("class", "error-feedback")
        .style("color", "red")
        .style("font-size", "12px")
        .style("margin-top", "5px")
        .style("display", "none");
    
    // Variable to store the debounce timer
    let debounceTimer;
    
    const searchInput = searchContainer.append("input")
        .attr("type", "number")
        .attr("class", "age-input")
        .attr("placeholder", "Find your age (0-94)...")
        .attr("min", "0")
        .attr("max", "94")
        .on("input", function() {
            // Reset error state
            errorFeedback.style("display", "none");
            this.style.borderColor = "#ccc";
            
            // Clear any previous timer
            clearTimeout(debounceTimer);
            
            // Set a new timer
            debounceTimer = setTimeout(() => {
                const inputValue = this.value.trim();
                if (!inputValue) return;
                
                const age = +inputValue;
                
                // Validate age range
                if (age < 0 || age > 94 || isNaN(age)) {
                    errorFeedback.text("Please enter an age between 0 and 94");
                    errorFeedback.style("display", "block");
                    this.style.borderColor = "red";
                    return;
                }
                
                // Find the corresponding age group
                const group = ageGroups.find(g => age >= g.start && age <= g.end);
                if (group) {
                    scrollToSection(group.id);
                }
            }, 500); // 500ms delay
        });
    
    // Age group navigation buttons
    const buttonsContainer = navBar.append("div")
        .attr("class", "buttons-container");
    
    buttonsContainer.selectAll(".age-button")
        .data(ageGroups)
        .enter()
        .append("button")
        .attr("class", "age-button")
        .attr("id", d => `nav-${d.id}`)
        .text(d => d.label)
        .style("background-color", d => d.color)
        .on("click", function(_, d) {
            // Reset search input and error state when clicking a button
            searchInput.property("value", "");
            errorFeedback.style("display", "none");
            searchInput.style("borderColor", "#ccc");
            
            // Clear any pending timer
            clearTimeout(debounceTimer);
            
            scrollToSection(d.id);
        });
    
    // Progress bar container
    const progressContainer = navBar.append("div")
        .attr("class", "progress-container");
    
    progressContainer.append("div")
        .attr("class", "progress-bar");
    
    // Calculate and set the top margin for the content based on navbar height
    const navHeight = navBar.node().getBoundingClientRect().height;
    d3.select("#timeline-container").style("margin-top", `${navHeight + 20}px`);
    
    return navBar;
}

// Function to update navigation state based on scroll position
function updateNavigation() {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    let activeButton = null;

    // Check which section is in the viewport
    ageGroups.forEach(group => {
        const section = document.getElementById(group.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const button = document.getElementById(`nav-${group.id}`);

        // Check if the section is at least 50% in view
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            if (activeButton) {
                d3.select(activeButton).style("box-shadow", "none"); // Remove outline from the previously active button
            }
            d3.select(button).style("box-shadow", "0 0 0 2px #333"); // Outline the current active button
            activeButton = button;
        } else {
            d3.select(button).style("box-shadow", "none"); // Remove outline from inactive buttons
        }
    });

    // Update progress bar position to match the active button
    if (activeButton) {
        const navBar = document.querySelector(".nav-container");
        const buttonsContainer = document.querySelector(".buttons-container");

        if (navBar && buttonsContainer) {
            const buttonRect = activeButton.getBoundingClientRect();
            const containerRect = buttonsContainer.getBoundingClientRect();
            const progressPercentage = ((buttonRect.left - containerRect.left) / containerRect.width) * 100;

            // Apply progress bar width
            d3.select(".progress-bar").style("width", `${progressPercentage}%`);
        }
    } else if (scrollPosition >= documentHeight) {
        // If scrolled past the last section, set progress bar to 100%
        d3.select(".progress-bar").style("width", "100%");
    }
}



// Function to scroll to a section
function scrollToSection(sectionId, center = true) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navHeight = document.querySelector(".nav-container").getBoundingClientRect().height;
        const sectionRect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        let scrollToPosition;

        if (center) {
            // Calculate the scroll position to center the section in the middle of the page
            const offset = (windowHeight / 2) - (sectionRect.height / 1.9);
            scrollToPosition = sectionRect.top + window.scrollY - offset - navHeight;
        } else {
            // Scroll to the top of the section
            scrollToPosition = sectionRect.top + window.scrollY - navHeight;
        }

        // Scroll to the calculated position
        window.scrollTo({
            top: scrollToPosition,
            behavior: "smooth"
        });

        // Force update the navigation state after scrolling
        setTimeout(() => {
            updateNavigation();
        }, 500); // Wait for the scroll to complete before updating
    }
}
