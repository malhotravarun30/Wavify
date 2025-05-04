// Sample data - in a real app, this would come from an API
const artists = [
  { id: 1, name: "Linkin Park", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" },
  { id: 2, name: "Electronic Vibes", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
  { id: 3, name: "Chill Masters", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
  { id: 4, name: "Urban Beats", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
  { id: 5, name: "Jazz Collective", image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" }
];

const albums = [
  {
    id: 1,
    title: "Neon Nights",
    artist: "Electronic Vibes",
    cover: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  },
  {
    id: 2,
    title: "Midnight Lounge",
    artist: "Chill Masters",
    cover: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80"
  },
  {
    id: 3,
    title: "City Rhythms",
    artist: "Urban Beats",
    cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 4,
    title: "Blue Notes",
    artist: "Jazz Collective",
    cover: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 5,
    title: "Acoustic Dreams",
    artist: "Indie Folk",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 6,
    title: "Digital Waves",
    artist: "Electronic Vibes",
    cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
];

const songs = [
  {
    id: 1,
    title: "Say Yes to Heaven",
    artist: "Linkin Park",
    album: "Hybrid Theory",
    albumId: 1,
    cover: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    duration: 405,
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    listens: 93554,
    tag: "Choice",
    lyrics: "In this farewell\nThere's no blood, there's no alibi\n'Cause I've drawn regret\nFrom the truth of a thousand lies\nSo let mercy come and wash away\nWhat I've done..."
  },
  {
    id: 2,
    title: "Thinking of You",
    artist: "Linkin Park",
    album: "Meteora",
    albumId: 2,
    cover: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80",
    duration: 177,
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    listens: 40364,
    tag: "Abdomen",
    lyrics: "I've put my trust in you\nPushed as far as I can go\nFor all this\nThere's only one thing you should know\nI tried so hard and got so far\nBut in the end, it doesn't even matter..."
  },
  {
    id: 3,
    title: "Only Girl (In the World)",
    artist: "Linkin Park",
    album: "Minutes to Midnight",
    albumId: 3,
    cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    duration: 80,
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    listens: 10364,
    tag: "Desire",
    lyrics: "I've become so numb, I can't feel you there\nBecome so tired, so much more aware\nI'm becoming this, all I want to do\nIs be more like me and be less like you..."
  },
  {
    id: 4,
    title: "The Conspire of the Bird",
    artist: "Linkin Park",
    album: "A Thousand Suns",
    albumId: 4,
    cover: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    duration: 135,
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    listens: 73547,
    tag: "Inspired",
    lyrics: "I'm tired of being what you want me to be\nFeeling so faithless, lost under the surface\nDon't know what you're expecting of me\nPut under the pressure of walking in your shoes..."
  },
  {
    id: 5,
    title: "Mountain Echo",
    artist: "Linkin Park",
    album: "Living Things",
    albumId: 5,
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    duration: 187,
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    listens: 45678,
    tag: "Nature",
    lyrics: "When my time comes\nForget the wrong that I've done\nHelp me leave behind some\nReasons to be missed..."
  },
  {
    id: 6,
    title: "Synthwave",
    artist: "Linkin Park",
    album: "The Hunting Party",
    albumId: 6,
    cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    duration: 221,
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    listens: 34567,
    tag: "Electronic",
    lyrics: "I'm holding on\nWhy is everything so heavy?\nHolding on\nSo much more than I can carry..."
  },
  {
    id: 7,
    title: "Lofi Study",
    artist: "Linkin Park",
    album: "One More Light",
    albumId: 2,
    cover: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80",
    duration: 165,
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    listens: 23456,
    tag: "Chill",
    lyrics: "Who cares if one more light goes out?\nIn a sky of a million stars\nIt flickers, flickers\nWho cares when someone's time runs out?\nIf a moment is all we are..."
  },
  {
    id: 8,
    title: "Jazz Improv",
    artist: "Linkin Park",
    album: "Reanimation",
    albumId: 4,
    cover: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    duration: 231,
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    listens: 12345,
    tag: "Jazz",
    lyrics: "Crawling in my skin\nThese wounds, they will not heal\nFear is how I fall\nConfusing what is real..."
  }
];

// User playlists
const playlists = [
  {
    id: 1,
    name: "My Favorites",
    cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    songs: [1, 3, 5]
  },
  {
    id: 2,
    name: "Workout Mix",
    cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    songs: [2, 4, 6]
  },
  {
    id: 3,
    name: "Chill Vibes",
    cover: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-4.0.3&auto=format&fit=crop&w=1167&q=80",
    songs: [7, 8]
  }
];

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

// State variables
let currentSongIndex = 0;
let isPlaying = true;
let isShuffleOn = false;
let isRepeatOn = false;
let currentPlaylist = null;
let isDarkMode = false;
let queue = [...songs];
let favorites = [];
let isLyricsOpen = false;

// Initialize the app
function init() {
  renderSongs();
  setupEventListeners();
  setupAdvancedFeatures();
  
  // Start with the first song loaded but paused
  loadSong(0);
  updatePlayPauseButton();
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