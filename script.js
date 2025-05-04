// Global variables to store data
let artists = [];
let albums = [];
let songs = [];
let playlists = [];

// DOM Elements
const audio = document.getElementById("audio-player");
const playPauseBtn = document.getElementById("play-pause-btn");
const playIcon = document.getElementById("play-icon");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const songList = document.querySelector(".song-list");
const searchInput = document.querySelector(".search-input");
const playerSongTitle = document.querySelector(".player-song-title");
const playerArtistName = document.querySelector(".player-artist-name");
const currentTrackImg = document.getElementById("current-track-img");
const artistNameEl = document.querySelector(".artist-name");
const songCountEl = document.querySelector(".song-count");

// State variables
let currentSongIndex = 0;
let isPlaying = false;
let isShuffleOn = false;
let isRepeatOn = false;
let currentPlaylist = null;
let isDarkMode = false;
let queue = [];
let favorites = [];
let isLyricsOpen = false;

// Initialize the app
async function init() {
  await loadData();
  updateArtistInfo();
  renderSongs();
  setupEventListeners();
  setupAdvancedFeatures();
  
  // Start with the first song loaded but paused
  loadSong(0);
  updatePlayPauseButton();
}

// Load data from JSON file
async function loadData() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();
    
    artists = data.artists;
    albums = data.albums;
    songs = data.songs;
    playlists = data.playlists;
    
    // Set initial queue to all songs
    queue = [...songs];
    
    console.log('Data loaded successfully');
  } catch (error) {
    console.error('Error loading data:', error);
    
    // Fallback to hardcoded data if fetch fails
    alert('Failed to load data. Using demo data instead.');
  }
}

// Update artist info in the header
function updateArtistInfo() {
  // Default to first artist
  const featuredArtist = artists[0];
  
  if (featuredArtist) {
    artistNameEl.textContent = featuredArtist.name;
    songCountEl.innerHTML = `<i class="fas fa-music"></i> ${songs.filter(song => song.artist === featuredArtist.name).length} songs Total`;
    
    // Update artist image
    const artistImageEl = document.querySelector(".artist-image img");
    if (artistImageEl) {
      artistImageEl.src = featuredArtist.image;
      artistImageEl.alt = featuredArtist.name;
    }
  }
}

// Format time (seconds to MM:SS)
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Render songs in the song list
function renderSongs(filteredSongs = null) {
  const songsToRender = filteredSongs || songs;
  songList.innerHTML = "";
  
  songsToRender.forEach((song, index) => {
    const songItem = document.createElement("div");
    songItem.className = "song-item";
    songItem.setAttribute("data-id", song.id);
    
    // Check if song is in favorites
    const isFavorite = favorites.includes(song.id);
    const heartIcon = isFavorite ? "fas fa-heart" : "far fa-heart";
    
    songItem.innerHTML = `
      <div class="song-info">
        <div class="song-thumbnail">
          <img src="${song.cover}" alt="${song.title}">
        </div>
        <div class="song-details">
          <div class="song-title">${song.title}</div>
          <div class="song-tag">#${song.tag}</div>
        </div>
      </div>
      <div class="song-stats">
        <div class="song-listens">
          <i class="fas fa-headphones"></i>
          <span>${song.listens.toLocaleString()} Listened</span>
        </div>
        <div class="song-duration">
          <i class="far fa-clock"></i>
          <span>${formatTime(song.duration)} sec</span>
        </div>
      </div>
      <div class="song-actions">
        <button class="song-action-btn favorite-btn" title="Like">
          <i class="${heartIcon}"></i>
        </button>
        <button class="song-action-btn add-to-playlist-btn" title="Add to playlist">
          <i class="fas fa-plus"></i>
        </button>
        <button class="song-action-btn" title="More">
          <i class="fas fa-ellipsis-h"></i>
        </button>
      </div>
    `;
    
    songList.appendChild(songItem);
    
    // Add click event to play song
    songItem.addEventListener("click", (e) => {
      // Don't play if clicking on action buttons
      if (!e.target.closest(".song-actions")) {
        const songId = parseInt(songItem.getAttribute("data-id"));
        const songIndex = songs.findIndex(s => s.id === songId);
        playSong(songIndex);
      }
    });
    
    // Add favorite button functionality
    const favoriteBtn = songItem.querySelector(".favorite-btn");
    favoriteBtn.addEventListener("click", () => {
      toggleFavorite(song.id);
    });
    
    // Add to playlist button functionality
    const addToPlaylistBtn = songItem.querySelector(".add-to-playlist-btn");
    addToPlaylistBtn.addEventListener("click", () => {
      showAddToPlaylistModal(song.id);
    });
  });
}

// Load a song without playing it
function loadSong(index) {
  currentSongIndex = index;
  const song = songs[currentSongIndex];
  
  // Set audio source and load it
  audio.src = song.url;
  audio.load();
  
  // Update UI
  updatePlayerInfo();
}

// Update player information
function updatePlayerInfo() {
  const song = songs[currentSongIndex];
  playerSongTitle.textContent = song.title;
  playerArtistName.textContent = song.artist;
  currentTrackImg.src = song.cover;
  
  // Update active song in list
  document.querySelectorAll(".song-item").forEach(item => {
    item.classList.remove("active");
    if (parseInt(item.getAttribute("data-id")) === song.id) {
      item.classList.add("active");
    }
  });
}

// Play a song
function playSong(index) {
  if (currentSongIndex !== index) {
    loadSong(index);
  }
  
  // Play the audio
  audio.play()
    .then(() => {
      isPlaying = true;
      updatePlayPauseButton();
      updatePlayerInfo();
      
      // Add to recently played
      addToRecentlyPlayed(songs[currentSongIndex].id);
    })
    .catch(error => {
      console.error("Error playing audio:", error);
    });
}

// Pause the current song
function pauseSong() {
  audio.pause();
  isPlaying = false;
  updatePlayPauseButton();
}

// Play the next song
function playNextSong() {
  if (isShuffleOn) {
    // Play a random song
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * songs.length);
    } while (randomIndex === currentSongIndex && songs.length > 1);
    playSong(randomIndex);
  } else {
    // Play the next song in order
    const nextIndex = (currentSongIndex + 1) % songs.length;
    playSong(nextIndex);
  }
}

// Play the previous song
function playPrevSong() {
  if (audio.currentTime > 3) {
    // If more than 3 seconds have passed, restart the current song
    audio.currentTime = 0;
  } else {
    // Play the previous song
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(prevIndex);
  }
}

// Update play/pause button icon
function updatePlayPauseButton() {
  playIcon.className = isPlaying ? "fas fa-pause" : "fas fa-play";
}

// Toggle favorite status for a song
function toggleFavorite(songId) {
  const index = favorites.indexOf(songId);
  if (index === -1) {
    favorites.push(songId);
  } else {
    favorites.splice(index, 1);
  }
  
  // Update UI
  renderSongs();
  
  // Show notification
  showNotification(index === -1 ? "Added to favorites" : "Removed from favorites");
}

// Add song to recently played
function addToRecentlyPlayed(songId) {
  // In a real app, this would update a database or local storage
  console.log(`Added song ${songId} to recently played`);
}

// Show notification
function showNotification(message) {
  const notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.classList.add("fade-out");
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Show add to playlist modal
function showAddToPlaylistModal(songId) {
  // Create modal
  const modal = document.createElement("div");
  modal.className = "modal";
  
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>Add to Playlist</h3>
        <button class="close-modal-btn">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="modal-body">
        <div class="playlist-list">
          ${playlists.map(playlist => `
            <div class="playlist-item" data-id="${playlist.id}">
              <div class="playlist-item-img">
                <img src="${playlist.cover}" alt="${playlist.name}">
              </div>
              <div class="playlist-item-name">${playlist.name}</div>
            </div>
          `).join('')}
        </div>
        <button class="create-playlist-btn">
          <i class="fas fa-plus"></i> Create New Playlist
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Add event listeners
  modal.querySelector(".close-modal-btn").addEventListener("click", () => {
    document.body.removeChild(modal);
  });
  
  modal.querySelectorAll(".playlist-item").forEach(item => {
    item.addEventListener("click", () => {
      const playlistId = parseInt(item.getAttribute("data-id"));
      addSongToPlaylist(songId, playlistId);
      document.body.removeChild(modal);
    });
  });
  
  modal.querySelector(".create-playlist-btn").addEventListener("click", () => {
    document.body.removeChild(modal);
    showCreatePlaylistModal(songId);
  });
}

// Add song to playlist
function addSongToPlaylist(songId, playlistId) {
  const playlist = playlists.find(p => p.id === playlistId);
  if (playlist && !playlist.songs.includes(songId)) {
    playlist.songs.push(songId);
    showNotification(`Added to ${playlist.name}`);
  }
}

// Show create playlist modal
function showCreatePlaylistModal(songId) {
  // Create modal
  const modal = document.createElement("div");
  modal.className = "modal";
  
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h3>Create Playlist</h3>
        <button class="close-modal-btn">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="modal-body">
        <div class="form-group">
          <label for="playlist-name">Playlist Name</label>
          <input type="text" id="playlist-name" placeholder="My Awesome Playlist">
        </div>
        <button class="create-btn">Create</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Add event listeners
  modal.querySelector(".close-modal-btn").addEventListener("click", () => {
    document.body.removeChild(modal);
  });
  
  modal.querySelector(".create-btn").addEventListener("click", () => {
    const name = modal.querySelector("#playlist-name").value.trim();
    if (name) {
      createPlaylist(name, songId);
      document.body.removeChild(modal);
    }
  });
}

// Create a new playlist
function createPlaylist(name, songId) {
  const newPlaylist = {
    id: playlists.length + 1,
    name,
    cover: songs.find(s => s.id === songId).cover,
    songs: [songId]
  };
  
  playlists.push(newPlaylist);
  showNotification(`Created playlist "${name}"`);
}

// Toggle dark mode
function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle("dark-mode", isDarkMode);
  
  // Update theme button
  const themeBtn = document.querySelector(".theme-btn");
  if (themeBtn) {
    themeBtn.innerHTML = isDarkMode ? 
      '<i class="fas fa-sun"></i>' : 
      '<i class="fas fa-moon"></i>';
  }
  
  // Save preference (in a real app, this would use localStorage)
  console.log(`Dark mode: ${isDarkMode}`);
}

// Show lyrics overlay
function toggleLyrics() {
  if (isLyricsOpen) {
    // Close lyrics
    const lyricsOverlay = document.querySelector(".lyrics-overlay");
    if (lyricsOverlay) {
      lyricsOverlay.classList.add("closing");
      setTimeout(() => {
        document.body.removeChild(lyricsOverlay);
      }, 300);
    }
  } else {
    // Open lyrics
    const song = songs[currentSongIndex];
    
    const lyricsOverlay = document.createElement("div");
    lyricsOverlay.className = "lyrics-overlay";
    
    lyricsOverlay.innerHTML = `
      <div class="lyrics-content">
        <div class="lyrics-header">
          <div class="lyrics-song-info">
            <div class="lyrics-thumbnail">
              <img src="${song.cover}" alt="${song.title}">
            </div>
            <div>
              <h3>${song.title}</h3>
              <p>${song.artist}</p>
            </div>
          </div>
          <button class="close-lyrics-btn">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="lyrics-body">
          <pre>${song.lyrics || "Lyrics not available for this song."}</pre>
        </div>
      </div>
    `;
    
    document.body.appendChild(lyricsOverlay);
    
    // Add event listener to close button
    lyricsOverlay.querySelector(".close-lyrics-btn").addEventListener("click", toggleLyrics);
  }
  
  isLyricsOpen = !isLyricsOpen;
}

// Filter songs based on search query
function filterSongs(query) {
  if (!query) {
    renderSongs();
    return;
  }
  
  const filteredSongs = songs.filter(song => 
    song.title.toLowerCase().includes(query.toLowerCase()) ||
    song.artist.toLowerCase().includes(query.toLowerCase()) ||
    song.album.toLowerCase().includes(query.toLowerCase()) ||
    song.tag.toLowerCase().includes(query.toLowerCase())
  );
  
  renderSongs(filteredSongs);
}

// Set up event listeners
function setupEventListeners() {
  // Play/Pause button
  playPauseBtn.addEventListener("click", () => {
    if (isPlaying) {
      pauseSong();
    } else {
      if (audio.src) {
        audio.play()
          .then(() => {
            isPlaying = true;
            updatePlayPauseButton();
          });
      } else if (songs.length > 0) {
        playSong(0);
      }
    }
  });
  
  // Previous button
  prevBtn.addEventListener("click", playPrevSong);
  
  // Next button
  nextBtn.addEventListener("click", playNextSong);
  
  // Audio events
  audio.addEventListener("ended", () => {
    if (isRepeatOn) {
      // Repeat the current song
      audio.currentTime = 0;
      audio.play();
    } else {
      // Play the next song
      playNextSong();
    }
  });
  
  // Search input
  searchInput.addEventListener("input", (e) => {
    filterSongs(e.target.value);
  });
  
  // Play all button
  const playAllBtn = document.querySelector(".btn-play-all");
  if (playAllBtn) {
    playAllBtn.addEventListener("click", () => {
      playSong(0);
    });
  }
  
  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    // Space bar - Play/Pause
    if (e.code === "Space" && e.target.tagName !== "INPUT") {
      e.preventDefault();
      if (isPlaying) {
        pauseSong();
      } else {
        if (audio.src) {
          audio.play()
            .then(() => {
              isPlaying = true;
              updatePlayPauseButton();
            });
        }
      }
    }
    
    // Left arrow - Previous song
    if (e.code === "ArrowLeft" && e.target.tagName !== "INPUT") {
      playPrevSong();
    }
    
    // Right arrow - Next song
    if (e.code === "ArrowRight" && e.target.tagName !== "INPUT") {
      playNextSong();
    }
  });
}

// Set up advanced features
function setupAdvancedFeatures() {
  // Add theme toggle button
  const settingsBtn = document.querySelector(".settings-btn");
  const themeBtn = document.createElement("button");
  themeBtn.className = "theme-btn";
  themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
  themeBtn.title = "Toggle Dark Mode";
  
  themeBtn.addEventListener("click", toggleDarkMode);
  
  // Insert before settings button
  settingsBtn.parentNode.insertBefore(themeBtn, settingsBtn);
  
  // Add lyrics button functionality
  const lyricsBtn = document.querySelector(".player-btn[title='Lyrics']");
  if (lyricsBtn) {
    lyricsBtn.addEventListener("click", toggleLyrics);
  }
  
  // Add volume control
  const volumeBtn = document.querySelector(".player-btn[title='Volume']");
  if (volumeBtn) {
    // Create volume slider
    const volumeSlider = document.createElement("div");
    volumeSlider.className = "volume-slider";
    volumeSlider.innerHTML = `
      <input type="range" min="0" max="1" step="0.01" value="1" class="volume-range">
    `;
    
    // Add to volume control
    const volumeControl = volumeBtn.parentNode;
    volumeControl.appendChild(volumeSlider);
    
    // Hide by default
    volumeSlider.style.display = "none";
    
    // Toggle volume slider
    volumeBtn.addEventListener("click", () => {
      volumeSlider.style.display = volumeSlider.style.display === "none" ? "block" : "none";
    });
    
    // Volume change
    const volumeRange = volumeSlider.querySelector(".volume-range");
    volumeRange.addEventListener("input", (e) => {
      audio.volume = e.target.value;
    });
    
    // Hide when clicking elsewhere
    document.addEventListener("click", (e) => {
      if (!volumeControl.contains(e.target)) {
        volumeSlider.style.display = "none";
      }
    });
  }
  
  // Add shuffle and repeat buttons
  const playerControls = document.querySelector(".player-controls");
  
  // Shuffle button
  const shuffleBtn = document.createElement("button");
  shuffleBtn.className = "player-btn";
  shuffleBtn.title = "Shuffle";
  shuffleBtn.innerHTML = '<i class="fas fa-random"></i>';
  
  // Repeat button
  const repeatBtn = document.createElement("button");
  repeatBtn.className = "player-btn";
  repeatBtn.title = "Repeat";
  repeatBtn.innerHTML = '<i class="fas fa-redo"></i>';
  
  // Add to player controls
  playerControls.insertBefore(shuffleBtn, playerControls.firstChild);
  playerControls.appendChild(repeatBtn);
  
  // Add event listeners
  shuffleBtn.addEventListener("click", () => {
    isShuffleOn = !isShuffleOn;
    shuffleBtn.classList.toggle("active", isShuffleOn);
    showNotification(isShuffleOn ? "Shuffle on" : "Shuffle off");
  });
  
  repeatBtn.addEventListener("click", () => {
    isRepeatOn = !isRepeatOn;
    repeatBtn.classList.toggle("active", isRepeatOn);
    showNotification(isRepeatOn ? "Repeat on" : "Repeat off");
  });
  
  // Add progress bar
  const playerBar = document.querySelector(".player-bar");
  const progressContainer = document.createElement("div");
  progressContainer.className = "progress-container";
  
  progressContainer.innerHTML = `
    <span class="time current-time">0:00</span>
    <div class="progress-bar">
      <div class="progress-fill"></div>
      <div class="progress-handle"></div>
    </div>
    <span class="time duration">0:00</span>
  `;
  
  // Insert after player controls
  playerBar.insertBefore(progressContainer, playerBar.querySelector(".player-right-controls"));
  
  // Get elements
  const progressBar = progressContainer.querySelector(".progress-bar");
  const progressFill = progressContainer.querySelector(".progress-fill");
  const progressHandle = progressContainer.querySelector(".progress-handle");
  const currentTimeEl = progressContainer.querySelector(".current-time");
  const durationEl = progressContainer.querySelector(".duration");
  
  // Update progress
  audio.addEventListener("timeupdate", () => {
    if (!isNaN(audio.duration)) {
      const progress = (audio.currentTime / audio.duration) * 100;
      progressFill.style.width = `${progress}%`;
      progressHandle.style.left = `${progress}%`;
      
      // Update time displays
      currentTimeEl.textContent = formatTime(audio.currentTime);
      durationEl.textContent = formatTime(audio.duration);
    }
  });
  
  // Seek functionality
  progressBar.addEventListener("click", (e) => {
    const rect = progressBar.getBoundingClientRect();
    const clickPosition = (e.clientX - rect.left) / rect.width;
    audio.currentTime = clickPosition * audio.duration;
  });
}

// Initialize the app when the page loads
window.addEventListener("load", init);