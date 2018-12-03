// Set list library search bar
const search = document.querySelector(".search");
const songs = document.querySelectorAll('.song');
const noResults = document.querySelector('.no-results');

// Filter set list based on search input
const searchFilter = () => {

  // What is currently typed in the search bar
  const typed = search.value.replace(/ /g, '').toLowerCase();
  for (i = 0; i < songs.length; i++) {
    const song = songs[i].innerText.replace(/ /g, '').toLowerCase();

    // Display/hide songs based on used search input
    songs[i].style.display = !song.includes(typed) ? 'none' : 'flex'
  }

  // Display 'no results' message if no results are found
  let visible = 0;
  for (i = 0; i < songs.length; i++) {
    if (songs[i].style.display === 'flex')
      visible++
  }
  noResults.style.display = visible <= 0 ? 'block' : 'none';
}

// Listen for key strokes
search.addEventListener('keyup', searchFilter)

