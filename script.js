document.addEventListener('DOMContentLoaded', function() {
    // Tab switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab button
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding tab content
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });

    // Convert buttons
    const convertPlaylistBtn = document.getElementById('convert-playlist');
    const convertTrackBtn = document.getElementById('convert-track');
    
    if (convertPlaylistBtn) {
        convertPlaylistBtn.addEventListener('click', convertPlaylist);
    }
    
    if (convertTrackBtn) {
        convertTrackBtn.addEventListener('click', convertTrack);
    }

    // Sample conversion functions (you'll need to implement the actual backend)
    function convertPlaylist() {
        const playlistUrl = document.getElementById('playlist-url').value.trim();
        
        if (!playlistUrl) {
            alert('Please enter a Spotify playlist URL');
            return;
        }
        
        if (!isValidSpotifyUrl(playlistUrl, 'playlist')) {
            alert('Please enter a valid Spotify playlist URL');
            return;
        }
        
        showProgress();
        
        // Simulate processing (replace with actual API call)
        setTimeout(() => {
            hideProgress();
            showResults([
                {
                    title: "Sample Playlist Track 1",
                    artist: "Artist 1",
                    artwork: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
                    downloadUrl: "#"
                },
                {
                    title: "Sample Playlist Track 2",
                    artist: "Artist 2",
                    artwork: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
                    downloadUrl: "#"
                }
            ]);
        }, 3000);
    }
    
    function convertTrack() {
        const trackUrl = document.getElementById('track-url').value.trim();
        
        if (!trackUrl) {
            alert('Please enter a Spotify track URL');
            return;
        }
        
        if (!isValidSpotifyUrl(trackUrl, 'track')) {
            alert('Please enter a valid Spotify track URL');
            return;
        }
        
        showProgress();
        
        // Simulate processing (replace with actual API call)
        setTimeout(() => {
            hideProgress();
            showResults([
                {
                    title: "Sample Single Track",
                    artist: "Sample Artist",
                    artwork: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
                    downloadUrl: "#"
                }
            ]);
        }, 2000);
    }
    
    function isValidSpotifyUrl(url, type) {
        const pattern = type === 'playlist' 
            ? /^https:\/\/open\.spotify\.com\/playlist\/[a-zA-Z0-9]+(\?si=[a-zA-Z0-9]+)?$/
            : /^https:\/\/open\.spotify\.com\/track\/[a-zA-Z0-9]+(\?si=[a-zA-Z0-9]+)?$/;
        return pattern.test(url);
    }
    
    function showProgress() {
        const progressContainer = document.querySelector('.progress-container');
        const progressFill = document.querySelector('.progress-fill');
        
        progressContainer.classList.remove('hidden');
        document.getElementById('results').classList.add('hidden');
        
        // Animate progress bar (simulated)
        let width = 0;
        const interval = setInterval(() => {
            if (width >= 100) {
                clearInterval(interval);
            } else {
                width += 5;
                progressFill.style.width = `${width}%`;
            }
        }, 150);
    }
    
    function hideProgress() {
        document.querySelector('.progress-container').classList.add('hidden');
        document.querySelector('.progress-fill').style.width = '0%';
    }
    
    function showResults(tracks) {
        const resultsContainer = document.getElementById('results');
        const downloadItems = document.getElementById('download-items');
        
        downloadItems.innerHTML = '';
        
        tracks.forEach(track => {
            const item = document.createElement('div');
            item.className = 'download-item';
            item.innerHTML = `
                <img src="${track.artwork}" alt="${track.title}" class="artwork">
                <h4 class="track-title">${track.title}</h4>
                <p class="artist-name">${track.artist}</p>
                <a href="${track.downloadUrl}" class="download-btn">Download MP3</a>
            `;
            downloadItems.appendChild(item);
        });
        
        resultsContainer.classList.remove('hidden');
    }
});
