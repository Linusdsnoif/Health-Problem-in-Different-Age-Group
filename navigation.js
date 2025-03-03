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
    
    searchContainer.append("input")
        .attr("type", "number")
        .attr("class", "age-input")
        .attr("placeholder", "Find your age...")
        .attr("min", "0")
        .attr("max", "100")
        .on("input", function() {
            const age = +this.value;
            if (age >= 0 && age <= 100) {
                // Find the corresponding age group
                const group = ageGroups.find(g => age >= g.start && age <= g.end);
                if (group) {
                    scrollToSection(group.id);
                }
            }
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
    // Update progress bar
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;
    
    d3.select(".progress-bar").style("width", `${scrollPercentage}%`);
    
    // Highlight current section in navigation
    ageGroups.forEach(group => {
        const section = document.getElementById(group.id);
        if (!section) return;
        
        const rect = section.getBoundingClientRect();
        const button = document.getElementById(`nav-${group.id}`);
        
        if (rect.top <= 150 && rect.bottom >= 50) {
            d3.select(button)
                .style("box-shadow", "0 0 0 2px #333");
        } else {
            d3.select(button)
                .style("box-shadow", "none");
        }
    });
}

// Function to scroll to a section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const navHeight = document.querySelector(".nav-container").getBoundingClientRect().height;
        window.scrollTo({
            top: section.getBoundingClientRect().top + window.scrollY - navHeight - 20,
            behavior: "smooth"
        });
    }
}