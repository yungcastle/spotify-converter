:root {
    --bg-dark: #121212;
    --bg-darker: #0a0a0a;
    --text-primary: #ffffff;
    --text-secondary: #b3b3b3;
    --accent: #1db954;
    --accent-hover: #1ed760;
    --card-bg: #181818;
    --card-hover: #282828;
    --error: #e22134;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: var(--bg-dark);
    color: var(--text-primary);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    flex: 1;
}

header {
    text-align: center;
    margin-bottom: 3rem;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
}

.subtitle {
    color: var(--text-secondary);
    font-size: 1.1rem;
}

/* RGB Border Effect */
.rgb-border {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    padding: 2px;
}

.rgb-border::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 16px;
    padding: 2px;
    background: linear-gradient(
        45deg,
        #ff0000,
        #ff7300,
        #fffb00,
        #48ff00,
        #00ffd5,
        #002bff,
        #7a00ff,
        #ff00c8,
        #ff0000
    );
    background-size: 400% 400%;
    animation: rgb-border-animation 3s linear infinite;
    z-index: -1;
    filter: blur(5px);
    opacity: 0.7;
}

@keyframes rgb-border-animation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

/* Rainbow Text */
.rainbow-text {
    background: linear-gradient(
        to right,
        #ff0000,
        #ff7f00,
        #ffff00,
        #00ff00,
        #0000ff,
        #4b0082,
        #9400d3
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    background-size: 400% 400%;
    animation: rainbow-text-animation 6s ease infinite;
}

@keyframes rainbow-text-animation {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

/* Converter Box */
.converter-box {
    background-color: var(--card-bg);
    padding: 2rem;
    margin-bottom: 2rem;
    transition: all 0.3s ease;
}

.converter-box:hover {
    transform: translateY(-5px);
}

/* Tabs */
.tabs {
    display: flex;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #333;
}

.tab-btn {
    padding: 0.75rem 1.5rem;
    background: none;
    border: none;
    color: var(--text-secondary);
    font-weight: 600;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
}

.tab-btn.active {
    color: var(--text-primary);
}

.tab-btn.active::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--accent);
    border-radius: 3px 3px 0 0;
}

.tab-btn:not(.active):hover {
    color: var(--text-primary);
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

/* Input and Button Styles */
.input-group {
    display: flex;
    gap: 1rem;
}

.input-field {
    flex: 1;
    padding: 1rem;
    border-radius: 8px;
    border: none;
    background-color: #333;
    color: var(--text-primary);
    font-size: 1rem;
    transition: all 0.3s ease;
}

.input-field:focus {
    outline: none;
    background-color: #444;
    box-shadow: 0 0 0 2px var(--accent);
}

.convert-btn {
    padding: 1rem 2rem;
    background-color: var(--accent);
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.convert-btn:hover {
    background-color: var(--accent-hover);
    transform: translateY(-2px);
}

/* Progress Bar */
.progress-container {
    margin-top: 2rem;
}

.progress-bar {
    width: 100%;
    height: 8px;
    background-color: #333;
    border-radius: 4px;
    overflow: hidden;
    margin-bottom: 0.5rem;
}

.progress-fill {
    height: 100%;
    width: 0%;
    background-color: var(--accent);
    border-radius: 4px;
    transition: width 0.3s ease;
}

.progress-text {
    text-align: center;
    color: var(--text-secondary);
}

/* Results Container */
.results-container {
    margin-top: 2rem;
}

.results-container h3 {
    margin-bottom: 1rem;
    color: var(--accent);
}

.download-items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
}

.download-item {
    background-color: var(--card-bg);
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease;
}

.download-item:hover {
    background-color: var(--card-hover);
    transform: translateY(-5px);
}

.artwork {
    width: 150px;
    height: 150px;
    border-radius: 8px;
    object-fit: cover;
    margin-bottom: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.track-title {
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-align: center;
}

.artist-name {
    color: var(--text-secondary);
    margin-bottom: 1rem;
    text-align: center;
}

.download-btn {
    padding: 0.5rem 1rem;
    background-color: var(--accent);
    color: white;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
}

.download-btn:hover {
    background-color: var(--accent-hover);
}

/* Info Box */
.info-box {
    background-color: var(--card-bg);
    padding: 2rem;
    margin-bottom: 2rem;
}

.info-box h3 {
    margin-bottom: 1rem;
    color: var(--accent);
}

.info-box ol {
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
}

.info-box li {
    margin-bottom: 0.5rem;
}

.note {
    font-style: italic;
    color: var(--text-secondary);
    font-size: 0.9rem;
}

/* Footer */
footer {
    text-align: center;
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid #333;
    color: var(--text-secondary);
}

/* Utility Classes */
.hidden {
    display: none !important;
}

/* Responsive Design */
@media (max-width: 768px) {
    .container {
        padding: 1rem;
    }

    .input-group {
        flex-direction: column;
    }

    .convert-btn {
        width: 100%;
    }

    h1 {
        font-size: 2rem;
    }
}
