import { writable } from 'svelte/store';

// Status Play/Pause
export const isPlaying = writable(false);

// Waktu Sekarang (detik)
export const currentTime = writable(0);

// Total Durasi Lagu (detik)
export const duration = writable(0);

// Helper: Ubah angka detik (misal 75) jadi string "1:15"
export const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
};