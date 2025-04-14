 // Sample data - in a real app, this would come from an API
    const artists = [
      { id: 1, name: "Electronic Vibes", image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
      { id: 2, name: "Chill Masters", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
      { id: 3, name: "Urban Beats", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
      { id: 4, name: "Jazz Collective", image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
      { id: 5, name: "Indie Folk", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" }
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
        title: "Electric Dreams",
        artist: "Electronic Vibes",
        album: "Neon Nights",
        albumId: 1,
        cover: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
        duration: 174,
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      },
      {
        id: 2,
        title: "Midnight Groove",
        artist: "Chill Masters",
        album: "Midnight Lounge",
        albumId: 2,
        cover: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80",
        duration: 198,
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
      },
      {
        id: 3,
        title: "Urban Flow",
        artist: "Urban Beats",
        album: "City Rhythms",
        albumId: 3,
        cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        duration: 210,
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
      },
      {
        id: 4,
        title: "Smooth Sax",
        artist: "Jazz Collective",
        album: "Blue Notes",
        albumId: 4,
        cover: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        duration: 243,
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
      },
      {
        id: 5,
        title: "Mountain Echo",
        artist: "Indie Folk",
        album: "Acoustic Dreams",
        albumId: 5,
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        duration: 187,
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
      },
      {
        id: 6,
        title: "Synthwave",
        artist: "Electronic Vibes",
        album: "Digital Waves",
        albumId: 6,
        cover: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        duration: 221,
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
      },
      {
        id: 7,
        title: "Lofi Study",
        artist: "Chill Masters",
        album: "Midnight Lounge",
        albumId: 2,
        cover: "https://images.unsplash.com/photo-1504898770365-14faca6a7320?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80",
        duration: 165,
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
      },
      {
        id: 8,
        title: "Jazz Improv",
        artist: "Jazz Collective",
        album: "Blue Notes",
        albumId: 4,
        cover: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        duration: 231,
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
      }
    ];

    // DOM Elements
    const audio = document.getElementById("audio-player");
    const playPauseBtn = document.getElementById("play-pause-btn");
    const playIcon = document.getElementById("play-icon");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const shuffleBtn = document.getElementById("shuffle-btn");
    const repeatBtn = document.getElementById("repeat-btn");
    const progressBar = document.getElementById("progress-bar");
    const progressFill = document.getElementById("progress-fill");
    const progressHandle = document.getElementById("progress-handle");
    const currentTimeEl = document.getElementById("current-time");
    const durationEl = document.getElementById("duration");
    const volumeBar = document.getElementById("volume-bar");
    const volumeFill = document.getElementById("volume-fill");
    const playerSongTitle = document.getElementById("player-song-title");
    const playerArtistName = document.getElementById("player-artist-name");
    const currentTrackImg = document.getElementById("current-track-img");
    const playlistTableBody = document.getElementById("playlist-table-body");
    const recentlyPlayedContainer = document.getElementById("recently-played-container");
    const trendingContainer = document.getElementById("trending-container");
    const recommendedContainer = document.getElementById("recommended-container");
    const exploreBtn = document.getElementById("explore-btn");
    const playerExpand = document.getElementById("player-expand");

    // State variables
    let currentSongIndex = 0;
    let isPlaying = false;
    let isShuffleOn = false;
    let isRepeatOn = false;

    // Initialize the app
    function init() {
      renderRecentlyPlayed();
      renderTrending();
      renderRecommended();
      renderPlaylist();
      setupEventListeners();
    }

    // Format time (seconds to MM:SS)
    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60);
      return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    // Render recently played artists
    function renderRecentlyPlayed() {
      recentlyPlayedContainer.innerHTML = "";
      
      artists.forEach(artist => {
        const artistCard = document.createElement("div");
        artistCard.className = "circular-card";
        artistCard.innerHTML = `
          <div class="circular-img">
            <img src="${artist.image}" alt="${artist.name}">
            <div class="play-overlay">
              <button class="play-btn" data-artist="${artist.id}">
                <i class="fas fa-play"></i>
              </button>
            </div>
          </div>
          <div class="circular-title">${artist.name}</div>
        `;
        
        recentlyPlayedContainer.appendChild(artistCard);
        
        // Add click event to play artist's songs
        const playBtn = artistCard.querySelector(".play-btn");
        playBtn.addEventListener("click", () => {
          const artistSongs = songs.filter(song => song.artist === artist.name);
          if (artistSongs.length > 0) {
            const songIndex = songs.findIndex(song => song.id === artistSongs[0].id);
            playSong(songIndex);
          }
        });
      });
    }

    // Render trending albums
    function renderTrending() {
      trendingContainer.innerHTML = "";
      
      albums.slice(0, 4).forEach(album => {
        const albumCard = document.createElement("div");
        albumCard.className = "music-card";
        albumCard.innerHTML = `
          <div class="card-img">
            <img src="${album.cover}" alt="${album.title}">
            <div class="play-overlay">
              <button class="play-btn" data-album="${album.id}">
                <i class="fas fa-play"></i>
              </button>
            </div>
          </div>
          <div class="card-content">
            <div class="card-title">${album.title}</div>
            <div class="card-subtitle">${album.artist}</div>
          </div>
        `;
        
        trendingContainer.appendChild(albumCard);
        
        // Add click event to play album
        const playBtn = albumCard.querySelector(".play-btn");
        playBtn.addEventListener("click", () => {
          const albumSongs = songs.filter(song => song.albumId === album.id);
          if (albumSongs.length > 0) {
            const songIndex = songs.findIndex(song => song.id === albumSongs[0].id);
            playSong(songIndex);
          }
        });
      });
    }

    // Render recommended albums
    function renderRecommended() {
      recommendedContainer.innerHTML = "";
      
      albums.slice(2, 6).forEach(album => {
        const albumCard = document.createElement("div");
        albumCard.className = "music-card";
        albumCard.innerHTML = `
          <div class="card-img">
            <img src="${album.cover}" alt="${album.title}">
            <div class="play-overlay">
              <button class="play-btn" data-album="${album.id}">
                <i class="fas fa-play"></i>
              </button>
            </div>
          </div>
          <div class="card-content">
            <div class="card-title">${album.title}</div>
            <div class="card-subtitle">${album.artist}</div>
          </div>
        `;
        
        recommendedContainer.appendChild(albumCard);
        
        // Add click event to play album
        const playBtn = albumCard.querySelector(".play-btn");
        playBtn.addEventListener("click", () => {
          const albumSongs = songs.filter(song => song.albumId === album.id);
          if (albumSongs.length > 0) {
            const songIndex = songs.findIndex(song => song.id === albumSongs[0].id);
            playSong(songIndex);
          }
        });
      });
    }

    // Render playlist
    function renderPlaylist() {
      playlistTableBody.innerHTML = "";
      
      songs.forEach((song, index) => {
        const row = document.createElement("tr");
        row.className = index === currentSongIndex && isPlaying ? "active" : "";
        row.setAttribute("data-index", index);
        
        row.innerHTML = `
          <td>
            <div class="song-info-cell">
              <span class="song-number">${index + 1}</span>
              <div class="song-thumbnail">
                <img src="${song.cover}" alt="${song.title}">
              </div>
              <div class="song-details">
                <div class="song-title">${song.title}</div>
                <div class="song-artist">${song.artist}</div>
              </div>
            </div>
          </td>
          <td class="song-album">${song.album}</td>
          <td class="song-duration">${formatTime(song.duration)}</td>
          <td>
            <div class="song-actions">
              <button class="song-action-btn" title="Add to favorites">
                <i class="far fa-heart"></i>
              </button>
              <button class="song-action-btn" title="Add to playlist">
                <i class="fas fa-plus"></i>
              </button>
              <button class="song-action-btn" title="More options">
                <i class="fas fa-ellipsis-h"></i>
              </button>
            </div>
          </td>
        `;
        
        playlistTableBody.appendChild(row);
        
        // Add click event to play song
        row.addEventListener("click", () => {
          playSong(index);
        });
      });
    }

    // Load and play a song
    function playSong(index) {
      currentSongIndex = index;
      const song = songs[currentSongIndex];
      
      // Set audio source and load it
      audio.src = song.url;
      audio.load();
      
      // Update UI
      playerSongTitle.textContent = song.title;
      playerArtistName.textContent = song.artist;
      currentTrackImg.src = song.cover;
      
      // Play the audio
      audio.play()
        .then(() => {
          isPlaying = true;
          updatePlayPauseButton();
          renderPlaylist(); // Update the active song in playlist
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

    // Toggle shuffle mode
    function toggleShuffle() {
      isShuffleOn = !isShuffleOn;
      shuffleBtn.classList.toggle("active", isShuffleOn);
    }

    // Toggle repeat mode
    function toggleRepeat() {
      isRepeatOn = !isRepeatOn;
      repeatBtn.classList.toggle("active", isRepeatOn);
    }

    // Update progress bar
    function updateProgress() {
      if (!isNaN(audio.duration)) {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressFill.style.width = `${progress}%`;
        progressHandle.style.left = `${progress}%`;
        
        // Update time displays
        currentTimeEl.textContent = formatTime(audio.currentTime);
        durationEl.textContent = formatTime(audio.duration);
      }
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
      
      // Shuffle button
      shuffleBtn.addEventListener("click", toggleShuffle);
      
      // Repeat button
      repeatBtn.addEventListener("click", toggleRepeat);
      
      // Progress bar
      progressBar.addEventListener("click", (e) => {
        const rect = progressBar.getBoundingClientRect();
        const clickPosition = (e.clientX - rect.left) / rect.width;
        audio.currentTime = clickPosition * audio.duration;
      });
      
      // Volume bar
      volumeBar.addEventListener("click", (e) => {
        const rect = volumeBar.getBoundingClientRect();
        const clickPosition = (e.clientX - rect.left) / rect.width;
        audio.volume = clickPosition;
        volumeFill.style.width = `${clickPosition * 100}%`;
      });
      
      // Audio events
      audio.addEventListener("timeupdate", updateProgress);
      
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
      
      // Explore button
      exploreBtn.addEventListener("click", () => {
        // Scroll to trending section
        document.querySelector(".content-section").scrollIntoView({ behavior: "smooth" });
      });
      
      // Player expand button
      playerExpand.addEventListener("click", () => {
        // In a real app, this would expand to a full-screen player
        alert("Full screen player would open here!");
      });
    }

    // Initialize the app when the page loads
    window.addEventListener("load", init);
