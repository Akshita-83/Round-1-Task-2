
import React, { useState } from 'react';
import { MOCK_FEEDS } from './constants';
import { CCTVFeed } from './types';
import CCTVCard from './components/CCTVCard';
import AnalysisModal from './components/AnalysisModal';
import Timeline from './components/Timeline';
import SubmissionPanel from './components/SubmissionPanel';

const App: React.FC = () => {
  const [selectedFeed, setSelectedFeed] = useState<CCTVFeed | null>(null);

  const activeTimestamp = selectedFeed ? selectedFeed.timestamp.split(' ')[1] : undefined;

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#75020f] selection:text-white relative pb-20">
      
      {/* Noir Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#111012]/95 backdrop-blur-lg border-b-4 border-[#51080d] h-24 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
        <div className="max-w-[1600px] mx-auto h-full px-12 flex justify-between items-center">
          <div className="flex items-center gap-10">
            <div className="flex flex-col">
              <h1 className="text-3xl typewriter font-black tracking-tight text-[#dcd4c3] uppercase italic">
                DOSSIER <span className="text-[#75020f]">#24-11</span>
              </h1>
              <span className="text-[11px] font-bold text-[#51080d] tracking-[0.4em] uppercase typewriter">District 9 Forensic Bureau // INTERNAL</span>
            </div>
          </div>
          
          <div className="flex items-center gap-16">
            <div className="hidden lg:flex flex-col items-end">
              <span className="text-[11px] typewriter text-stone-600 uppercase tracking-widest">Investigation Window</span>
              <span className="text-xl typewriter text-[#dcd4c3] font-black underline decoration-[#75020f] decoration-4 underline-offset-4">21:00 - 22:30</span>
            </div>
            <div className="h-14 w-px bg-stone-800" />
            <div className="flex flex-col items-end px-6 py-2 border-2 border-[#75020f]/20 bg-[#75020f]/5 rounded-sm">
                <span className="text-[10px] typewriter text-[#75020f] uppercase font-black tracking-widest">Session Status</span>
                <span className="text-sm typewriter text-[#75020f]/80 font-bold animate-pulse">RECON_ACTIVE</span>
            </div>
          </div>
        </div>
      </header>

      {/* Noir Board */}
      <main className="flex-1 mt-32 p-12 max-w-[1750px] mx-auto w-full space-y-16">
        
        {/* Incident Timeline - String Map */}
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <div className="folder-tab shadow-lg">FILE_TIMELINE</div>
            <div className="h-px flex-1 bg-stone-800" />
            <span className="text-[10px] typewriter text-stone-600 uppercase tracking-widest italic">Temporal Sync: Optimal</span>
          </div>
          <Timeline highlightTime={activeTimestamp} />
        </section>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-20">
          
          {/* Main Evidence Grid - Dark Matrix */}
          <div className="xl:col-span-8 space-y-10">
            <div className="flex items-end justify-between border-b-2 border-[#51080d]/40 pb-6">
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl typewriter font-black text-[#dcd4c3] uppercase tracking-wide">Evidence Exhibits</h2>
                <p className="text-[11px] text-stone-600 typewriter uppercase tracking-widest">Digital Negatives // Primary Suspect Window</p>
              </div>
              <div className="text-[12px] typewriter text-[#75020f] font-bold border-l-2 border-[#75020f] pl-4 uppercase">
                Critical_Shards: {MOCK_FEEDS.length}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 p-10 bg-black/40 rounded-sm shadow-2xl backdrop-blur-sm border border-stone-900">
              {MOCK_FEEDS.map(feed => (
                <CCTVCard 
                  key={feed.id} 
                  feed={feed} 
                  onClick={setSelectedFeed} 
                />
              ))}
            </div>
          </div>

          {/* Sidebar - Official Documentation */}
          <div className="xl:col-span-4 space-y-16">
            <div className="space-y-12">
               <div className="flex items-center gap-4">
                 <div className="folder-tab shadow-lg">FINAL_VERDICT</div>
                 <div className="h-px flex-1 bg-stone-800" />
               </div>
               
               <SubmissionPanel />
            </div>
            
            {/* Investigator Scratchpad - Red Ink */}
            <div className="paper-texture p-8 -rotate-1 rounded-sm shadow-2xl text-stone-900 border-l-[12px] border-[#51080d]">
                <h3 className="typewriter text-sm font-black border-b-2 border-stone-800/10 pb-3 mb-6 tracking-[0.2em] uppercase">Investigator Notes</h3>
                <ul className="space-y-6">
                  {[
                    "Observe shadow displacement in server room cams.",
                    "Timestamp drift in entrance cam at 21:10.",
                    "Identify the security officer signature on tampered logs."
                  ].map((note, i) => (
                    <li key={i} className="flex gap-4 text-[12px] typewriter leading-relaxed italic font-bold">
                      <span className="text-[#75020f] font-black underline underline-offset-2">REF_{i+1}</span>
                      {note}
                    </li>
                  ))}
                </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Evidence Inspection Modal */}
      {selectedFeed && (
        <AnalysisModal 
          feed={selectedFeed} 
          onClose={() => setSelectedFeed(null)} 
        />
      )}

      {/* Forensic Metadata Footer */}
      <footer className="fixed bottom-0 left-0 right-0 h-12 px-12 bg-[#111012] border-t-2 border-[#51080d] z-40 flex justify-between items-center shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 bg-[#75020f] rounded-full shadow-[0_0_5px_#75020f]" />
             <span className="text-[11px] typewriter text-stone-500 uppercase tracking-widest font-bold">Classified Shard</span>
          </div>
          <div className="h-5 w-px bg-stone-800" />
          <span className="text-[11px] typewriter text-[#75020f]/60 font-black tracking-tighter">FEDERAL OFFENSE: UNAUTHORIZED DUPLICATION</span>
        </div>
        <div className="text-[10px] typewriter text-[#dcd4c3]/30 italic tracking-widest">
          Bureau of Internal Affairs // Division Zero
        </div>
      </footer>
    </div>
  );
};

export default App;
