<script lang="ts">
    import {onMount} from 'svelte';
    import {fetchFiles} from '$lib/post';
    import {Howl} from 'howler';
    import {colorStore} from "$lib/store/colorStore";

    interface MusicFile {
        name: string;
        url: string;
        // Add other properties if needed
    }

    let musicFiles: MusicFile[] = [];
    let currentTrack: Howl | null = null;
    let currentTime: number = 0;
    let duration: number = 0;
    let isPlaying: boolean = false;
    let hasEnded: boolean = false;
    let volume: number = 0.3; // Default volume
    let currentIndex: number = 0; // Track the index of the current track

    onMount(async () => {
        try {
            musicFiles = await fetchFiles('music');
            if (musicFiles.length > 0) {
                playTrack(musicFiles[0], 0);
            }
        } catch (error) {
            console.error('Error fetching music files:', error);
        }
    });

    function playTrack(file: MusicFile, index: number) {
        if (currentTrack) {
            currentTrack.stop();
        }
        currentTrack = new Howl({
            src: [file.url],
            html5: true,
            volume: volume,
            onplay: () => {
                isPlaying = true;
                hasEnded = false;
                duration = currentTrack?.duration() || 0;
                requestAnimationFrame(updateTime);
            },
            onend: () => {
                isPlaying = false;
                hasEnded = true;
                playNextTrack(); // Play the next track when the current one ends
            }
        });
        currentTrack.play();
        currentIndex = index; // Update the current index
    }

    function playPrevTrack() {
        if (currentIndex === 0) currentIndex = musicFiles.length;
        const nextIndex = (currentIndex - 1) % musicFiles.length;
        playTrack(musicFiles[nextIndex], nextIndex);
    }

    function playNextTrack() {
        const nextIndex = (currentIndex + 1) % musicFiles.length;
        playTrack(musicFiles[nextIndex], nextIndex);
    }

    function updateTime() {
        if (currentTrack && isPlaying) {
            currentTime = currentTrack.seek() as number;
            requestAnimationFrame(updateTime);
        }
    }

    function pauseTrack() {
        if (currentTrack) {
            currentTrack.pause();
            isPlaying = false;
        }
    }

    function replayTrack() {
        if (currentTrack) {
            currentTrack.play();
            isPlaying = true;
        }
    }

    function resumeTrack() {
        if (currentTrack) {
            currentTrack.play();
            isPlaying = true;
            hasEnded = false;
            requestAnimationFrame(updateTime);
        }
    }

    function seekTrack(event: Event) {
        if (currentTrack) {
            const input = event.target as HTMLInputElement;
            const seekTime = parseFloat(input.value);
            currentTrack.seek(seekTime);
            currentTime = seekTime;
        }
    }

    function changeVolume(event: Event) {
        const input = event.target as HTMLInputElement;
        volume = parseFloat(input.value);
        if (currentTrack) {
            currentTrack.volume(volume);
        }
    }

    function formatTime(seconds: number): string {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    function removeMp3Extension(fileName: string): string {
        return fileName.replace(/\.mp3$/, '');
    }
</script>

<div class="music-list">
    {#each musicFiles as file, index}
        <div class="music-file" style="background-color: {currentIndex === index ? $colorStore : ''}">
            <button title={file.name} on:click={() => playTrack(file, index)}>{removeMp3Extension(file.name)}</button>
        </div>
    {/each}
</div>

<div class="controls">
    <div class="flex items-center justify-center gap-3">
        <button on:click={playPrevTrack}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 8L12 4V12L4 8Z"/>
                <path d="M2 4H4V12H2V4Z"/>
            </svg>
        </button>
        <button on:click={replayTrack}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 2L12 8L4 14V2Z"/>
            </svg>
        </button>
        <button on:click={pauseTrack}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 2H6V14H4V2Z"/>
                <path d="M10 2H12V14H10V2Z"/>
            </svg>
        </button>
        <button on:click={playNextTrack}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8L4 4V12L12 8Z"/>
                <path d="M14 4H12V12H14V4Z"/>
            </svg>
        </button>
    </div>
    <div>
        <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
        <input style=" background: {$colorStore}; --moz-range-thumb-background: {$colorStore}; --webkit-slider-thumb-background: {$colorStore}"
               class="range-slider" type="range" min="0" max={duration} value={currentTime} on:input={seekTrack}/>
    </div>
    <div>
        <label for="volume">Volume</label>
        <input class="range-slider"
               style=" background: {$colorStore};  --moz-range-thumb-background: {$colorStore}; --webkit-slider-thumb-background: {$colorStore}"
               id="volume" type="range"
               min="0" max="1" step="0.01" value={volume}
               on:input={changeVolume}/>
    </div>
</div>

<style lang="scss">
  .music-list {
    height: 90px;
    overflow: hidden;
    overflow-y: auto;
    display: flex;
    gap: 5px;
    flex-direction: column;
    align-items: center;

    .music-file {
      width: 100%;
      height: 20px;
      text-align: center;
      //overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      button {
        //margin-top: 5px;
      }
    }
  }

  .controls {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    outline: none;

    button {
      margin-bottom: 10px;
    }

    input[type="range"] {
      width: 100%;
    }

    .range-slider {
      -webkit-appearance: none;
      width: 100%;
      height: 5px;
      background: #ddd;
      outline: none;
      opacity: 0.7;
      transition: opacity 0.2s;
      border: 1px solid #000;
      border-radius: 10px;

      &:hover {
        opacity: 1;
      }

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 8px;
        height: 15px;
        //background: #4CAF50;
        cursor: pointer;
        border-radius: 0;
        //border-radius: 50%;
      }

      &::-moz-range-thumb {
        width: 8px;
        height: 15px;
        //background: #4CAF50;
        cursor: pointer;
        //border-radius: 50%;
      }
    }
  }
</style>
