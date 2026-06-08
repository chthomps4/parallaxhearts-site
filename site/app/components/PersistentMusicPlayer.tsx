"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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

    function handleEnded() {
      setIsPlaying(false);
      setCurrentTime(0);
      setPlaybackMessage("Track ended. Press play to hear it again.");
    }

    audioElement.addEventListener("timeupdate", handleTimeUpdate);
    audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);
    audioElement.addEventListener("ended", handleEnded);

    return () => {
      audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      audioElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
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
        setIsPlaying(true);
        setIsExpanded(true);
        setPlaybackMessage("Now playing. Playback stays under your control.");
      } catch {
        setIsPlaying(false);
        setPlaybackMessage("Playback was blocked. Press play again to start.");
      }
      return;
    }

    audio.pause();
    setIsPlaying(false);
    setPlaybackMessage("Paused.");
  }

  return (
    <aside
      aria-label="Parallax Hearts soundtrack player"
      className="fixed inset-x-3 bottom-3 z-40 mx-auto max-w-3xl rounded-[1.5rem] border border-[#5f4639] bg-[#100b0d]/95 p-3 text-[#f5eadf] shadow-2xl shadow-black/45 backdrop-blur md:bottom-5"
    >
      <audio ref={audioRef} preload="metadata" src={track.audioSrc} />

      <div className="grid gap-3 md:grid-cols-[auto_minmax(0,1fr)_auto] md:items-center">
        <button
          type="button"
          onClick={togglePlayback}
          className="rounded-full bg-[#e4cba8] px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#170f0f] transition hover:bg-[#fff0c8] focus:outline-none focus:ring-2 focus:ring-[#fff0c8] focus:ring-offset-2 focus:ring-offset-[#100b0d]"
          aria-label={isPlaying ? "Pause soundtrack" : "Play soundtrack"}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.22em] text-[#caa978]">
            <span>Listen while you read</span>
            <span className="text-[#76584c]">/</span>
            <span>No autoplay</span>
          </div>
          <p className="mt-1 truncate font-serif text-xl leading-tight text-[#fff7eb]">
            {track.title}
          </p>
          <p className="mt-1 text-sm leading-5 text-[#d8c7b8]">
            {isExpanded ? track.connection : playbackMessage}
          </p>

          {isExpanded ? (
            <div className="mt-3" aria-label="Soundtrack progress">
              <div className="h-2 overflow-hidden rounded-full bg-[#352621]">
                <div
                  className="h-full rounded-full bg-[#e4cba8]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-2 flex justify-between text-xs text-[#caa978]">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2 md:justify-end">
          <button
            type="button"
            onClick={() => setIsExpanded((value) => !value)}
            className="rounded-full border border-[#5f4639] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#f5eadf] transition hover:border-[#caa978] focus:outline-none focus:ring-2 focus:ring-[#caa978] focus:ring-offset-2 focus:ring-offset-[#100b0d]"
          >
            {isExpanded ? "Collapse" : "Details"}
          </button>
          <Link
            href="/music"
            className="rounded-full border border-[#5f4639] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#f5eadf] transition hover:border-[#caa978] focus:outline-none focus:ring-2 focus:ring-[#caa978] focus:ring-offset-2 focus:ring-offset-[#100b0d]"
          >
            Music
          </Link>
        </div>
      </div>
    </aside>
  );
}
