document.addEventListener('DOMContentLoaded', function() {
  var searchInput = document.getElementById('searchInput');
  var clearButton = document.getElementById('clearSearch');

  // Show the 'X' button when there's at least one character in the input
  searchInput.addEventListener('input', function() {
    if (searchInput.value.length > 0) {
      clearButton.style.display = 'block';
    } else {
      clearButton.style.display = 'none';
    }
  });

// Clear the search input when the 'X' button is clicked
  clearButton.addEventListener('click', function() {
    searchInput.value = '';
    clearButton.style.display = 'none';
  });
});




document.addEventListener("DOMContentLoaded", function() {
    // Hard-coded array of store names
    const cmsItems = ['ZARA', 'Abercrombie & Fitch', 'Adidas', 'Lululemon','GEOX','La Senza','Loblaws','Sephora'];

    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('autocompleteResults');

    searchInput.addEventListener('input', function() {
        const inputVal = this.value.toLowerCase();
        // Filter CMS items based on input
        const filteredItems = cmsItems.filter(item => item.toLowerCase().startsWith(inputVal));

        // Clear previous results
        resultsContainer.innerHTML = '';
        if (inputVal !== '' && filteredItems.length) {
            // Display filtered items as a list in the results container
            filteredItems.forEach(item => {
                const div = document.createElement('div');
                div.textContent = item;
                div.addEventListener('click', function() {
                    searchInput.value = item; // Populate input with selected item
                    resultsContainer.style.display = 'none'; // Hide results container
                    
                    // Manually dispatch an input event to trigger the filter
                    const event = new Event('input', { bubbles: true });
                    searchInput.dispatchEvent(event);
                });
                resultsContainer.appendChild(div);
            });
            resultsContainer.style.display = 'block';
        } else {
            resultsContainer.style.display = 'none';
        }
    });

    // Optionally, hide autocomplete results when clicking outside
    document.addEventListener('click', function(event) {
        if (!searchInput.contains(event.target)) {
            resultsContainer.style.display = 'none';
        }
    });
});






document.addEventListener("DOMContentLoaded", function() {
    var scrollButton = document.getElementById('scroll-button');
    var scrollContainer = document.getElementById('scrollable-container');

    function checkScroll() {
      if (scrollContainer.scrollWidth - Math.abs(scrollContainer.scrollLeft) - scrollContainer.clientWidth < 1) {
        // Use class to control opacity for hiding
        scrollButton.classList.add('hidden');
      } else {
        // Use class to control opacity for showing
        scrollButton.classList.remove('hidden');
      }
    }

    scrollButton.addEventListener('click', function() {
      var scrollValue = scrollContainer.offsetWidth;
      scrollContainer.scrollBy({ left: scrollValue, behavior: 'smooth' });

      setTimeout(checkScroll, 500); // Adjust time as necessary for the scroll to potentially finish
    });

    scrollContainer.addEventListener('scroll', checkScroll);
  });





document.addEventListener('DOMContentLoaded', function () {
    // Function to update URL, toggle div, update link, and update count text
    function updateURLToggleDivAndUpdateLinkAndUpdateCount() {
    const checkboxes = document.querySelectorAll('.cms_list input[type="checkbox"]');
    const selectedIds = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.getAttribute('id'));

    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set('selectedStores', selectedIds.join(','));

    // Preserve other query parameters
    const currentParams = new URLSearchParams(window.location.search);
    currentParams.forEach((value, key) => {
        if (key !== 'selectedStores') { // Don't overwrite the selectedStores parameter
            queryParams.set(key, value);
        }
    });

    history.pushState(null, '', '?' + queryParams.toString());

    const baseURL = 'https://humawave.webflow.io/onboarding';
    const linkBlockURL = selectedIds.length > 0 ? `${baseURL}?${queryParams.toString()}` : baseURL;

    const sectionContinue = document.getElementById('section-continue');
    if (selectedIds.length > 0) {
        sectionContinue.style.display = 'block';
        sectionContinue.style.opacity = 1;
        sectionContinue.style.transition = 'opacity 100ms ease-in';
    } else {
        sectionContinue.style.opacity = 0;
        sectionContinue.style.transition = 'opacity 100ms ease-out';
        setTimeout(() => {
            sectionContinue.style.display = 'none';
        }, 100);
    }

    const linkContinue = document.getElementById('link-continue');
    linkContinue.setAttribute('href', linkBlockURL);
}

    // Attach change event listener to checkboxes
    document.querySelectorAll('.cms_list input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', updateURLToggleDivAndUpdateLinkAndUpdateCount);
    });
});





document.addEventListener('DOMContentLoaded', function() {
    // Mapping of store IDs to names
    const storeNames = {
        '1': 'Abercrombie & Fitch',
        '2': 'Adidas',
        '47': 'Geox',
        '70': 'La Senza',
        '81': 'Loblaws',
        '82': 'Lululemon',
        '107': 'Sephora',
        '133': 'ZARA'
    };

    // Function to format the selected store names text
    function formatSelectedStoresText(selectedIds) {
        const names = selectedIds.map(id => storeNames[id]).filter(name => name !== undefined);
        
        if (names.length > 1) {
            const last = names.pop();
            return `${names.join(', ')} and ${last}`;
        } else {
            return names.join('');
        }
    }

    // Get 'selectedStores' from URL
    const queryParams = new URLSearchParams(window.location.search);
    const selectedStores = queryParams.get('selectedStores');
    
    if (selectedStores) {
        const selectedIds = selectedStores.split(',');
        const selectedText = formatSelectedStoresText(selectedIds);
        
        // Assuming you have a div with an ID of 'selections-text' for displaying the selections
        const selectionsDiv = document.getElementById('selections-text');
        if (selectionsDiv) {
            selectionsDiv.textContent = selectedText;
        }
    }
});
