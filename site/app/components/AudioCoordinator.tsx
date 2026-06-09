"use client";

import {
  type AudioHTMLAttributes,
  type IframeHTMLAttributes,
  type RefObject,
  type ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type AudioRegistry = Map<string, HTMLAudioElement>;
type ExternalAudioRegistry = Map<string, () => void>;

type AudioCoordinatorContextValue = {
  notifyExternalPlay: (id: string) => void;
  notifyNativePlay: (id: string) => void;
  pauseAllNative: () => void;
  registerExternalAudio: (id: string, pause: () => void) => () => void;
  registerNativeAudio: (id: string, element: HTMLAudioElement) => () => void;
};

const AudioCoordinatorContext =
  createContext<AudioCoordinatorContextValue | null>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const nativePlayersRef = useRef<AudioRegistry>(new Map());
  const externalPlayersRef = useRef<ExternalAudioRegistry>(new Map());

  const pauseAllExcept = useCallback((activeId: string | null) => {
    nativePlayersRef.current.forEach((element, id) => {
      if (id === activeId) {
        return;
      }

      element.pause();
    });

    externalPlayersRef.current.forEach((pause, id) => {
      if (id === activeId) {
        return;
      }

      pause();
    });
  }, []);

  const registerNativeAudio = useCallback(
    (id: string, element: HTMLAudioElement) => {
      nativePlayersRef.current.set(id, element);

      return () => {
        const currentElement = nativePlayersRef.current.get(id);

        if (currentElement === element) {
          nativePlayersRef.current.delete(id);
        }
      };
    },
    []
  );

  const registerExternalAudio = useCallback((id: string, pause: () => void) => {
    externalPlayersRef.current.set(id, pause);

    return () => {
      const currentPause = externalPlayersRef.current.get(id);

      if (currentPause === pause) {
        externalPlayersRef.current.delete(id);
      }
    };
  }, []);

  const notifyNativePlay = useCallback(
    (id: string) => {
      pauseAllExcept(id);
    },
    [pauseAllExcept]
  );

  const notifyExternalPlay = useCallback(
    (id: string) => {
      pauseAllExcept(id);
    },
    [pauseAllExcept]
  );

  const pauseAllNative = useCallback(() => {
    pauseAllExcept(null);
  }, [pauseAllExcept]);

  const value = useMemo(
    () => ({
      notifyExternalPlay,
      notifyNativePlay,
      pauseAllNative,
      registerExternalAudio,
      registerNativeAudio,
    }),
    [
      notifyExternalPlay,
      notifyNativePlay,
      pauseAllNative,
      registerExternalAudio,
      registerNativeAudio,
    ]
  );

  return (
    <AudioCoordinatorContext.Provider value={value}>
      {children}
    </AudioCoordinatorContext.Provider>
  );
}

function useAudioCoordinator() {
  const context = useContext(AudioCoordinatorContext);

  if (!context) {
    throw new Error("Audio components must be rendered inside AudioProvider.");
  }

  return context;
}

export function useRegisteredNativeAudio(
  id: string,
  audioRef: RefObject<HTMLAudioElement | null>
) {
  const { notifyNativePlay, registerNativeAudio } = useAudioCoordinator();

  useEffect(() => {
    const element = audioRef.current;

    if (!element) {
      return;
    }

    function handlePlay() {
      notifyNativePlay(id);
    }

    const unregister = registerNativeAudio(id, element);
    element.addEventListener("play", handlePlay);

    return () => {
      element.removeEventListener("play", handlePlay);
      unregister();
    };
  }, [audioRef, id, notifyNativePlay, registerNativeAudio]);
}

type RegisteredNativeAudioProps = AudioHTMLAttributes<HTMLAudioElement> & {
  id: string;
  sourceLabel: string;
  src: string;
};

export function RegisteredNativeAudio({
  id,
  sourceLabel,
  src,
  children,
  ...props
}: RegisteredNativeAudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useRegisteredNativeAudio(id, audioRef);

  return (
    <audio
      ref={audioRef}
      controls
      preload="none"
      aria-label={sourceLabel}
      {...props}
    >
      <source src={src} type="audio/mpeg" />
      {children ?? "Your browser does not support the audio element."}
    </audio>
  );
}

type SoundCloudExclusiveEmbedProps = IframeHTMLAttributes<HTMLIFrameElement> & {
  id: string;
  src: string;
  title: string;
};

export function SoundCloudExclusiveEmbed({
  id,
  src,
  title,
  ...props
}: SoundCloudExclusiveEmbedProps) {
  const { notifyExternalPlay, registerExternalAudio } = useAudioCoordinator();
  const wasActivatedRef = useRef(false);
  const [frameKey, setFrameKey] = useState(0);

  const resetEmbedIfNeeded = useCallback(() => {
    if (!wasActivatedRef.current) {
      return;
    }

    wasActivatedRef.current = false;
    setFrameKey((key) => key + 1);
  }, []);

  useEffect(() => {
    return registerExternalAudio(id, resetEmbedIfNeeded);
  }, [id, registerExternalAudio, resetEmbedIfNeeded]);

  function handleSoundCloudActivity() {
    wasActivatedRef.current = true;
    notifyExternalPlay(id);
  }

  return (
    <div
      onFocusCapture={handleSoundCloudActivity}
      onPointerDown={handleSoundCloudActivity}
      onTouchStart={handleSoundCloudActivity}
    >
      <iframe key={frameKey} title={title} src={src} {...props} />
    </div>
  );
}
