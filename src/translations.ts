export type Language = 'en' | 'id';

export function normalizeLanguage(language: unknown): Language {
  return language === 'en' || language === 'id' ? language : 'id';
}

export const translations = {
  en: {
    sidebar: {
      newSession: 'New Session',
      recentSessions: 'Recent Sessions',
      system: 'System',
      clearAll: 'Clear All',
      preferences: 'Preferences',
      verifiedUser: 'Verified Account',
      confirmClear: 'Delete all data?',
      yesClear: 'Yes, Clear Everything',
      cancel: 'Cancel',
      delete: 'Delete',
      rename: 'Rename',
      pin: 'Pin',
      signOut: 'Sign Out',
      signOutConfirm: 'Are you sure you want to sign out?',
      memory: 'Memory',
      noMemories: 'No memories yet',
      memorySaved: 'Memory saved',
      editMemory: 'Edit Memory',
      save: 'Save',
    },
    settings: {
      title: 'Preferences',
      profile: 'User Profile',
      displayName: 'Display Name',
      apiKey: 'Gemini API Key',
      apiPlaceholder: 'Enter your API key...',
      language: 'Language',
      endpoints: 'Custom Endpoints',
      imageVideo: 'Image & Video Models',
      geminiLive: 'Gemini Live (Voice)',
      personality: 'Voice Personality',
      customPersonality: 'Describe how the AI should speak...',
      textPersonality: 'Text Personality',
      save: 'Save Changes',
      signOut: 'Sign Out',
    },
    chat: {
      placeholder: 'Ask anything or upload a file...',
      thinking: 'Thinking...',
      search: 'Search',
      googleSearch: 'Google Search',
      toggleSearch: 'Toggle Google Search',
    },
    header: {
      model: 'Model',
    }
  },
  id: {
    sidebar: {
      newSession: 'Sesi Baru',
      recentSessions: 'Sesi Terbaru',
      system: 'Sistem',
      clearAll: 'Hapus Semua',
      preferences: 'Preferensi',
      verifiedUser: 'Akun Terverifikasi',
      confirmClear: 'Hapus semua data?',
      yesClear: 'Ya, Hapus Semua',
      cancel: 'Batal',
      delete: 'Hapus',
      rename: 'Ubah Nama',
      pin: 'Sematkan',
      signOut: 'Keluar',
      signOutConfirm: 'Apakah Anda yakin ingin keluar?',
      memory: 'Memori',
      noMemories: 'Belum ada memori',
      memorySaved: 'Memori disimpan',
      editMemory: 'Ubah Memori',
      save: 'Simpan',
    },
    settings: {
      title: 'Preferensi',
      profile: 'Profil Pengguna',
      displayName: 'Nama Tampilan',
      apiKey: 'Kunci API Gemini',
      apiPlaceholder: 'Masukkan kunci API Anda...',
      language: 'Bahasa',
      endpoints: 'Endpoint Kustom',
      imageVideo: 'Model Gambar & Video',
      geminiLive: 'Gemini Live (Suara)',
      personality: 'Kepribadian Suara',
      customPersonality: 'Jelaskan bagaimana AI harus berbicara...',
      textPersonality: 'Kepribadian Teks',
      save: 'Simpan Perubahan',
      signOut: 'Keluar',
    },
    chat: {
      placeholder: 'Tanya apa saja atau unggah file...',
      thinking: 'Berpikir...',
      search: 'Cari',
      googleSearch: 'Google Search',
      toggleSearch: 'Aktifkan Google Search',
    },
    header: {
      model: 'Model',
    }
  }
};
