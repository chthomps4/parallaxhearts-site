"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRegisteredNativeAudio } from "./AudioCoordinator";
import { getFeaturedSoundtrackTrack } from "../lib/music/what-the-town-keeps";

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds <= 0) {
    return "0:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${remainingSeconds}`;
}

export default function PersistentMusicPlayer() {
  const track = getFeaturedSoundtrackTrack();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackMessage, setPlaybackMessage] = useState(
    "Press play when you want the soundtrack."
  );

  useRegisteredNativeAudio("persistent-music-dock", audioRef);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    const audioElement = audio;

    function handleTimeUpdate() {
      setCurrentTime(audioElement.currentTime);
    }

    function handleLoadedMetadata() {
      setDuration(audioElement.duration);
    }

    function handlePlay() {
      setIsPlaying(true);
      setIsExpanded(true);
      setPlaybackMessage("Now playing. Playback stays under your control.");
    }

    function handlePause() {
      setIsPlaying(false);
      setPlaybackMessage("Paused.");
    }

    function handleEnded() {
      setIsPlaying(false);
      setCurrentTime(0);
      setPlaybackMessage("Track ended. Press play to hear it again.");
    }

    audioElement.addEventListener("timeupdate", handleTimeUpdate);
    audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);
    audioElement.addEventListener("play", handlePlay);
    audioElement.addEventListener("pause", handlePause);
    audioElement.addEventListener("ended", handleEnded);

    return () => {
      audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      audioElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audioElement.removeEventListener("play", handlePlay);
      audioElement.removeEventListener("pause", handlePause);
      audioElement.removeEventListener("ended", handleEnded);
    };
  }, []);

  if (!track?.audioSrc) {
    return null;
  }

  const progress = duration > 0 ? Math.min((currentTime / duration) * 100, 100) : 0;

  async function togglePlayback() {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      try {
        await audio.play();
      } catch {
        setIsPlaying(false);
        setPlaybackMessage("Playback was blocked. Press play again to start.");
      }
      return;
    }

    audio.pause();
  }

  return (
    <aside
      aria-label="Parallax Hearts soundtrack player"
      className="music-dock"
    >
      <audio ref={audioRef} preload="metadata" src={track.audioSrc} />

      <div className="music-dock-grid">
        <button
          type="button"
          onClick={togglePlayback}
          className="music-dock-play"
          aria-label={isPlaying ? "Pause soundtrack" : "Play soundtrack"}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>

        <div className="music-dock-main">
          <div className="music-dock-eyebrow">
            <span>Listen while you read</span>
            <span aria-hidden="true">/</span>
            <span>No autoplay</span>
          </div>
          <p className="music-dock-title">
            {track.title}
          </p>
          <p className="music-dock-message">
            {isExpanded ? track.connection : playbackMessage}
          </p>

          {isExpanded ? (
            <div className="music-dock-progress" aria-label="Soundtrack progress">
              <div className="music-dock-progress-track">
                <div
                  className="music-dock-progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="music-dock-times">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          ) : null}
        </div>

        <div className="music-dock-actions">
          <button
            type="button"
            onClick={() => setIsExpanded((value) => !value)}
            className="music-dock-secondary"
          >
            {isExpanded ? "Collapse" : "Details"}
          </button>
          <Link
            href="/music"
            className="music-dock-secondary"
          >
            Music
          </Link>
        </div>
      </div>
    </aside>
  );
}
