import { Sun, Moon, Menu, ChevronDown, Check, Search } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Language, translations, normalizeLanguage } from '../translations';

export function Header({ theme, toggleTheme, onMenuClick, models, selectedModel, onModelSelect, language }: { 
  theme: 'light' | 'dark', 
  toggleTheme: () => void, 
  onMenuClick?: () => void,
  models: string[],
  selectedModel: string,
  onModelSelect: (m: string) => void,
  language: Language
}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const safeLanguage = normalizeLanguage(language);
  const t = translations[safeLanguage].header;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredModels = models.filter(m => m.toLowerCase().includes(searchQuery.toLowerCase()));
  return (
    <header className="app-header flex justify-between items-center w-full min-w-0 px-3 sm:px-4 md:px-8 sticky top-0 z-50 bg-transparent transition-colors rounded-none shrink-0">
      <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0 pr-4">
         <button onClick={onMenuClick} className="md:hidden text-on-surface-variant hover:text-primary transition-colors p-2 -ml-2 rounded-full hover:bg-surface-dim shrink-0">
           <Menu size={24} />
         </button>
         
         <div className="flex items-center gap-2 relative min-w-0" ref={dropdownRef}>
           <button 
             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
             className="flex items-center gap-1 group cursor-pointer min-w-0"
           >
             <span className="text-primary hover:opacity-80 transition-all font-display font-bold italic text-lg md:text-xl outline-none truncate max-w-[150px] md:max-w-[400px]">
               {selectedModel === 'gemini-2.5-flash' ? 'GEMINI 2.5 FLASH' : selectedModel.toUpperCase()}
             </span>
             <ChevronDown size={14} className="text-primary pointer-events-none shrink-0" />
           </button>

           {isDropdownOpen && (
             <div className="absolute top-full left-0 mt-2 w-[calc(100vw-1.5rem)] max-w-[320px] md:w-[320px] bg-surface border border-outline rounded-2xl shadow-lg z-50 overflow-hidden flex flex-col max-h-[60vh]">
               <div className="p-2 border-b border-outline flex items-center gap-2 px-3 sticky top-0 bg-surface z-10 shrink-0">
                 <Search size={14} className="text-on-surface-variant shrink-0" />
                 <input 
                   type="text" 
                   placeholder={safeLanguage === 'en' ? "Search models..." : "Cari model..."} 
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   className="bg-transparent border-none outline-none text-xs font-body w-full py-1 text-on-surface focus:ring-0"
                   autoFocus
                 />
               </div>
               <div className="overflow-y-auto flex-1 p-1 scrollbar-hide font-body">
                 <button
                   onClick={() => { onModelSelect('gemini-2.5-flash'); setIsDropdownOpen(false); setSearchQuery(''); }}
                   className={`w-full text-left px-3 py-2 rounded-xl text-xs font-label uppercase tracking-wider transition-colors flex items-center justify-between ${selectedModel === 'gemini-2.5-flash' ? 'bg-primary/10 text-primary' : 'hover:bg-surface-dim text-on-surface'}`}
                 >
                   <span>GEMINI 2.5 FLASH</span>
                   {selectedModel === 'gemini-2.5-flash' && <Check size={14} />}
                 </button>
                 {filteredModels.filter(m => m !== 'gemini-2.5-flash').map(m => (
                   <button
                     key={m}
                     onClick={() => { onModelSelect(m); setIsDropdownOpen(false); setSearchQuery(''); }}
                     className={`w-full text-left px-3 py-2 rounded-xl text-xs font-label uppercase tracking-wider transition-colors flex items-center justify-between overflow-hidden ${selectedModel === m ? 'bg-primary/10 text-primary' : 'hover:bg-surface-dim text-on-surface'}`}
                   >
                     <span className="truncate pr-2">{m.toUpperCase()}</span>
                     {selectedModel === m && <Check size={14} className="shrink-0" />}
                   </button>
                 ))}
                 {filteredModels.length === 0 && (
                   <div className="px-3 py-4 text-center text-xs text-on-surface-variant font-body">{safeLanguage === 'en' ? 'No models found' : 'Tidak ada model ditemukan'}</div>
                 )}
               </div>
             </div>
           )}
         </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4 shrink-0">
        <button onClick={toggleTheme} className="text-on-surface-variant hover:text-primary transition-colors p-2 rounded-full hover:bg-surface-dim group relative">
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <button className="w-8 h-8 rounded-full overflow-hidden border border-outline hover:border-black dark:hover:border-white transition-colors ml-1 md:ml-2 shrink-0 grayscale hover:grayscale-0">
          <img 
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800" 
            alt="Profile" 
            className="w-full h-full object-cover" 
          />
        </button>
      </div>
    </header>
  );
}
