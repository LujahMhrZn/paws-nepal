// Adopt Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Fetch dog data from JSON file
    fetch('dogs.json')
        .then(response => response.json())
        .then(data => {
            displayDogs(data.dogs);
            setupFilters(data.dogs);
            setupSorting(data.dogs);
        })
        .catch(error => console.error('Error loading dog data:', error));
    
    // Display dogs in the grid
    function displayDogs(dogs) {
        const container = document.getElementById('dog-cards-container');
        container.innerHTML = '';
        
        dogs.forEach(dog => {
            const card = document.createElement('div');
            card.className = 'dog-card';
            card.innerHTML = `
                <img src="${dog.image}" alt="${dog.name}">
                <div class="dog-info">
                    <h3>${dog.name}</h3>
                    <div class="dog-meta">
                        <span>${dog.age}</span>
                        <span>${dog.size}</span>
                    </div>
                    <p class="dog-description">${dog.description}</p>
                    <a href="contact.html?dog=${encodeURIComponent(dog.name)}" class="btn">Adopt Me</a>
                </div>
            `;
            container.appendChild(card);
        });
    }
    
    // Setup filter functionality
    function setupFilters(dogs) {
        const applyBtn = document.getElementById('apply-filters');
        
        applyBtn.addEventListener('click', function() {
            const breed = document.getElementById('breed-filter').value;
            const age = document.getElementById('age-filter').value;
            const size = document.getElementById('size-filter').value;
            
            const filteredDogs = dogs.filter(dog => {
                return (breed === 'all' || dog.breed.toLowerCase().includes(breed)) &&
                       (age === 'all' || checkAge(dog.age, age)) &&
                       (size === 'all' || dog.size.toLowerCase() === size);
            });
            
            displayDogs(filteredDogs);
        });
    }
    
  
    function checkAge(ageStr, ageGroup) {
        const age = parseInt(ageStr);
        
        switch(ageGroup) {
            case 'puppy': return age <= 1;
            case 'young': return age > 1 && age <= 3;
            case 'adult': return age > 3 && age <= 7;
            case 'senior': return age > 7;
            default: return true;
        }
    }
    
    // Setup sorting functionality
    function setupSorting(dogs) {
        const sortButtons = document.querySelectorAll('.sort-btn'); /* finds ALL elements with the CSS class 'sort-btn' Returns a NodeList (like an array) of elements*/
        sortButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                sortButtons.forEach(btn => btn.classList.remove('active'));//removes the 'active' class from all buttons
                this.classList.add('active'); //This ensures only one button looks "active" at a time
                
                // Get sort key
                const sortKey = this.dataset.sort;
                
                // Sort dogs
                const sortedDogs = [...dogs].sort((a, b) => { //[...dogs] = Spread operator creates a shallow copy of the dogs array
                    if (sortKey === 'name') {
                        return a.name.localeCompare(b.name); //localeCompare() = compares strings alphabetically Returns negative number if a < b, positive if a > b, 0 if eq
                    } else if (sortKey === 'age') {
                        return getAgeValue(a.age) - getAgeValue(b.age);
                    } else if (sortKey === 'size') {
                        const sizeOrder = {small: 1, medium: 2, large: 3};
                        return sizeOrder[a.size.toLowerCase()] - sizeOrder[b.size.toLowerCase()];
                    }
                    return 0;
                });
                
                displayDogs(sortedDogs);
            });
        });
    }
    
    // function to extract numeric age
    function getAgeValue(ageStr) {
        return parseInt(ageStr); //string to intiger
    }
    
    // Adoption Cost Calculator
    const calculateBtn = document.getElementById('calculate-btn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function() {
            const size = document.getElementById('dog-size').value;
            const age = document.getElementById('dog-age').value;
            
            // Base costs
            let foodCost, vetCost, groomingCost, otherCost;
            
            // Calculate based on size
            if (size === 'small') {
                foodCost = 1500;
                groomingCost = 800;
            } else if (size === 'medium') {
                foodCost = 2500;
                groomingCost = 1000;
            } else { // large
                foodCost = 3500;
                groomingCost = 1200;
            }
            
            // Adjust based on age
            if (age === 'puppy') {
                vetCost = 2000;
                otherCost = 1500;
            } else if (age === 'adult') {
                vetCost = 1500;
                otherCost = 1000;
            } else { // senior
                vetCost = 2500;
                otherCost = 1200;
            }
            
            // Update display
            document.getElementById('food-cost').textContent = `Rs. ${foodCost}`;
            document.getElementById('vet-cost').textContent = `Rs. ${vetCost}`;
            document.getElementById('grooming-cost').textContent = `Rs. ${groomingCost}`;
            document.getElementById('other-cost').textContent = `Rs. ${otherCost}`;
            document.getElementById('total-cost').textContent = `Rs. ${foodCost + vetCost + groomingCost + otherCost}`;
        });
    }
});