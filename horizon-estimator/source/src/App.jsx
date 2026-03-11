import React, { useState } from 'react';
import {
  Users,
  Plus,
  MoreVertical,
  ChevronRight,
  HelpCircle,
  Layout,
  MousePointer2,
  Zap,
  Monitor,
  Smartphone,
  Globe,
  Settings,
  Bell,
  Search,
  ChevronDown,
  X,
  ArrowLeft,
  Info,
  CheckCircle2,
  AlertCircle,
  Play,
  Clock,
  ExternalLink,
  Target
} from 'lucide-react';

// --- Shared Components ---
const Sidebar = ({ activeTab }) => (
  <aside className="w-16 bg-[#002120] flex flex-col items-center py-6 space-y-8 shadow-xl">
    <div className="w-10 h-10 bg-[#DAE995] rounded-lg flex items-center justify-center font-bold text-xl text-[#002120]">K</div>
    <nav className="flex flex-col space-y-6 text-white/50">
      <Layout className={`w-6 h-6 hover:text-white cursor-pointer ${activeTab === 'experiences' ? 'text-white bg-white/10 p-1 rounded' : ''}`} />
      <Users className={`w-6 h-6 hover:text-white cursor-pointer ${activeTab === 'segments' ? 'text-white bg-white/10 p-1 rounded' : ''}`} />
      <MousePointer2 className="w-6 h-6 hover:text-white cursor-pointer" />
      <Zap className="w-6 h-6 hover:text-white cursor-pointer" />
      <Settings className="w-6 h-6 hover:text-white cursor-pointer" />
    </nav>
  </aside>
);

const Header = ({ title, breadcrumbs }) => (
  <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6">
    <div className="flex items-center space-x-2 text-sm">
      {breadcrumbs.map((crumb, i) => (
        <React.Fragment key={crumb}>
          <span className={i === breadcrumbs.length - 1 ? "font-bold text-[#002120]" : "text-gray-400"}>{crumb}</span>
          {i < breadcrumbs.length - 1 && <ChevronRight className="w-4 h-4 text-gray-400" />}
        </React.Fragment>
      ))}
    </div>
    <div className="flex items-center space-x-6">
      <div className="bg-[#FFF8E1] text-[#A56B00] px-3 py-1 rounded-full text-[10px] font-bold">WHAT'S NEW <span className="bg-red-500 text-white w-4 h-4 inline-flex items-center justify-center rounded-full ml-1">1</span></div>
      <div className="flex items-center space-x-4">
        <HelpCircle className="w-5 h-5 text-gray-400" />
        <div className="w-8 h-8 bg-[#B3BEFF] rounded-full flex items-center justify-center text-white font-bold text-xs">ES</div>
      </div>
    </div>
  </header>
);

// --- Screen 1: Segment Dashboard ---
const SegmentDashboard = ({ setScreen }) => (
  <div className="flex-1 flex flex-col h-full overflow-hidden">
    <Header breadcrumbs={['Studio', 'Segments']} />
    <div className="flex-1 flex overflow-hidden">
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold">Segments</h1>
            <p className="text-gray-500 text-sm">Target precisely, execute faster.</p>
          </div>
          <button
            onClick={() => setScreen('builder')}
            className="bg-[#2D2DFF] text-white px-6 py-2.5 rounded-lg font-bold flex items-center hover:bg-[#1A1AFF] transition-colors shadow-lg shadow-blue-500/20"
          >
            <Plus className="w-4 h-4 mr-2" /> NEW SEGMENT
          </button>
        </div>

        {/* Warning Banner */}
        <div className="bg-[#FFF8F0] border border-[#FFE7C8] rounded-lg p-4 mb-8 flex items-start">
          <div className="bg-[#FF9500] p-1 rounded-sm mr-3 mt-0.5">
            <Zap className="w-3 h-3 text-white fill-white" />
          </div>
          <div className="text-sm">
            <p className="font-bold text-[#A56B00]">CONVERT YOUR SEGMENTS</p>
            <p className="text-gray-600">Some of your segments use legacy conditions. Move to Trigger builder for 2x faster execution.</p>
          </div>
          <button className="ml-auto border border-[#FF9500] text-[#FF9500] px-4 py-1.5 rounded font-bold text-xs hover:bg-[#FF9500] hover:text-white transition-all">CONVERT</button>
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-200 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Linked To</th>
                <th className="px-6 py-4">Edited</th>
                <th className="px-6 py-4">Reach</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {[
                { name: 'Premium Safari Shoppers', linked: 'Checkout A/B', date: 'Just now', reach: '1.1M' },
                { name: 'High-Value Shoppers', linked: '0 campaign', date: '05/07/2024', reach: '450k' },
                { name: 'Mobile Explorers', linked: '1 campaign', date: '30/06/2024', reach: '2.1M' }
              ].map((seg) => (
                <tr key={seg.name} className="hover:bg-gray-50 transition-colors cursor-pointer group">
                  <td className="px-6 py-5 font-bold">{seg.name}</td>
                  <td className="px-6 py-5 text-[#27AB83] font-medium">{seg.linked}</td>
                  <td className="px-6 py-5 text-gray-500">{seg.date}</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold">{seg.reach}</span>
                      <div className="w-12 h-1 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#DAE995]" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-white rounded-lg border border-gray-200"><MoreVertical className="w-4 h-4 text-gray-400" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

// --- Screen 2: Segment Builder Modal ---
const SegmentBuilderModal = ({ setScreen }) => (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-12 overflow-hidden animate-in fade-in duration-200">
    <div className="bg-white w-full max-w-6xl h-full rounded-2xl flex flex-col shadow-2xl overflow-hidden">
      <div className="p-8 border-b border-gray-200 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Define your segment</h2>
          <p className="text-sm text-gray-500 mt-1">Premium Safari Shoppers</p>
        </div>
        <button onClick={() => setScreen('dashboard')} className="w-10 h-10 hover:bg-gray-100 rounded-full flex items-center justify-center"><X className="w-6 h-6" /></button>
      </div>

      <div className="flex-1 flex overflow-hidden">
        <div className="w-64 border-r border-gray-200 p-6 space-y-6">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-gray-400" />
            <input type="text" placeholder="Search conditions" className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm" />
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Environment</p>
              <p className="text-sm font-bold text-[#2D2DFF] bg-[#F5F5FF] p-2 rounded-lg cursor-pointer">Browser Type</p>
              <p className="text-sm text-gray-500 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">Device Category</p>
            </div>
          </div>
        </div>

        <div className="flex-1 p-12 overflow-y-auto bg-gray-50/20">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-white border-2 border-[#2D2DFF] rounded-2xl p-6 shadow-sm relative group">
              <div className="flex items-center space-x-4">
                <Monitor className="w-5 h-5 text-[#2D2DFF]" />
                <span className="font-bold">Browser is Safari AND Page URL contains /checkout</span>
              </div>
              <div className="absolute -right-4 -top-3 bg-[#002120] text-[#DAE995] text-[10px] font-bold py-1.5 px-3 rounded-full shadow-lg border border-white/10 animate-bounce">
                230,450 visitors
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white border border-gray-200 px-3 py-1 rounded-full text-[10px] font-black text-[#2D2DFF] shadow-sm">OR</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm relative group opacity-60">
              <div className="flex items-center space-x-4">
                <Globe className="w-5 h-5 text-gray-400" />
                <span className="font-bold">All Traffic (Global)</span>
              </div>
              <div className="absolute -right-4 -top-3 bg-[#002120] text-[#DAE995] text-[10px] font-bold py-1.5 px-3 rounded-full shadow-lg border border-white/10">
                1,114,230 visitors
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 border-t border-gray-200 bg-white flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div>
            <p className="text-[10px] font-bold text-[#2D2DFF] uppercase tracking-widest mb-1">Estimated Monthly Reach</p>
            <h4 className="text-4xl font-black text-[#002120]">1,114,230</h4>
          </div>
          <div className="bg-[#DAE995]/20 px-4 py-2 rounded-2xl border border-[#DAE995]/40">
            <span className="text-xl font-black text-[#002120]">42%</span>
            <p className="text-[9px] font-bold text-gray-500 uppercase">Traffic Share</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <button className="px-8 py-3 font-bold text-gray-500" onClick={() => setScreen('dashboard')}>Cancel</button>
          <button className="px-10 py-3 bg-[#2D2DFF] text-white rounded-xl font-bold shadow-xl shadow-blue-500/20 hover:scale-105 transition-all" onClick={() => setScreen('recap')}>REVIEW SEGMENT</button>
        </div>
      </div>
    </div>
  </div>
);

// --- Screen 3: Segment Recap ---
const SegmentRecap = ({ setScreen }) => (
  <div className="flex-1 flex flex-col h-full bg-white animate-in fade-in duration-500">
    <header className="px-8 py-6 border-b border-gray-200">
      <h1 className="text-2xl font-bold">Premium Safari Shoppers</h1>
      <p className="text-gray-500 text-sm mt-1">Double-check your segment configuration before finalization.</p>
    </header>

    <div className="flex-1 overflow-y-auto p-12 bg-gray-50/50">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-8 space-y-8">
            <div className="space-y-4">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Active Targeting Logic</p>
              <div className="space-y-3">
                <div className="bg-[#F9F9FF] border border-[#2D2DFF]/10 px-6 py-4 rounded-xl flex items-center">
                  <Monitor className="w-5 h-5 text-[#2D2DFF] mr-4" />
                  <span className="font-bold text-[#002120]">Browser is Safari AND Page URL contains /checkout</span>
                  <span className="ml-auto text-xs font-black text-[#2D2DFF]">230,450 visitors</span>
                </div>
                <div className="bg-[#F9F9FF] border border-[#2D2DFF]/10 px-6 py-4 rounded-xl flex items-center">
                  <Globe className="w-5 h-5 text-[#2D2DFF] mr-4" />
                  <span className="font-bold text-[#002120]">All Traffic (Global)</span>
                  <span className="ml-auto text-xs font-black text-[#2D2DFF]">1,114,230 visitors</span>
                </div>
              </div>
            </div>

            <div className="bg-[#002120] text-white rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#DAE995]/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
              <div className="flex-1 space-y-4 relative z-10">
                <div className="flex items-center space-x-3">
                  <Target className="w-4 h-4 text-[#DAE995]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DAE995]">Unified Segment Reach</span>
                </div>
                <h4 className="text-6xl font-black tracking-tight">1,114,230 <span className="text-lg text-white/40 font-medium tracking-normal">visitors / mo</span></h4>
                <div className="flex items-center space-x-4">
                  <div className="bg-[#DAE995] text-[#002120] px-4 py-1.5 rounded-full text-xs font-black">42% Traffic Share</div>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Based on rolling 30d average</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer className="px-12 py-8 border-t border-gray-200 flex justify-between items-center bg-white">
      <button className="flex items-center text-sm font-bold text-gray-500 hover:text-black transition-colors" onClick={() => setScreen('builder')}>
        <ArrowLeft className="w-4 h-4 mr-2" /> Back
      </button>
      <button
        className="bg-[#2D2DFF] text-white px-12 py-4 rounded-2xl font-black shadow-2xl shadow-blue-500/20 hover:scale-[1.02] transition-all uppercase tracking-widest"
        onClick={() => setScreen('finalization')}
      >
        NEXT STEP
      </button>
    </footer>
  </div>
);

// --- New Merged Flow: Finalization Flow (Calibration + ETR) ---
const FinalizationFlow = ({ setScreen, stats, setStats }) => {
  const [step, setStep] = useState(1); // 1: Calibration (Block 2), 2: Decision Engine (Block 3)
  const [isSyncing, setIsSyncing] = useState(false);
  const [reachBoosted, setReachBoosted] = useState(false);

  const currentReach = reachBoosted ? stats.reach + 450000 : stats.reach;

  const calculateETR = (reach, cvr, mde) => {
    const baseETR = 12;
    const reachFactor = 1114230 / reach;
    const cvrFactor = 3.2 / cvr;
    const mdeFactor = Math.pow(5 / mde, 2);
    const etr = Math.ceil(baseETR * reachFactor * cvrFactor * mdeFactor);
    return Math.min(Math.max(etr, 1), 60);
  };

  const currentETR = calculateETR(currentReach, stats.baselineCVR, stats.mde);
  const isOverpowered = currentETR > 30;

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setIsSyncing(false);
      setStats(prev => ({ ...prev, baselineCVR: 3.2 }));
    }, 1500);
  };

  const applyReachBoost = () => {
    setReachBoosted(true);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#F9FBFC] animate-in slide-in-from-right-8 duration-500 overflow-hidden">
      <header className="h-16 bg-white border-b border-gray-200 flex justify-between items-center px-8 shadow-sm">
        <div className="flex items-center space-x-4">
          <ArrowLeft className="w-5 h-5 text-gray-400 hover:text-black cursor-pointer" onClick={() => step === 1 ? setScreen('recap') : setStep(1)} />
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight">Project Horizon</span>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              {step === 1 ? 'ETR based on settings' : 'Actions to adjust duration'}
            </span>
          </div>
          <div className="h-6 w-[1px] bg-gray-200 mx-2"></div>
          <div className="bg-blue-50 px-3 py-1 rounded-md text-[10px] font-bold text-[#2D2DFF] border border-blue-100 uppercase">Step {step} of 2</div>
        </div>
        <div className="flex space-x-3 items-center">
          <button
            onClick={() => alert('🚀 Experiment launched successfully!')}
            className={`px-8 py-2.5 rounded-lg text-xs font-black uppercase transition-all ${step === 2 ? 'bg-[#34A853] text-white shadow-lg' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
            disabled={step === 1}
          >
            Launch
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-12 relative">
        <div className="max-w-6xl mx-auto space-y-12">
          {step === 1 ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-12">
              <div className="flex justify-between items-end border-l-4 border-[#DAE995] pl-6 py-2">
                <div>
                  <h2 className="text-3xl font-black text-[#002120] uppercase tracking-tight">ETR based on settings</h2>
                  <p className="text-gray-500 text-sm mt-1 font-medium font-italic">"In finalization flow"</p>
                </div>
                <button
                  onClick={handleSync}
                  className={`flex items-center space-x-2 text-xs font-bold uppercase tracking-widest px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all ${isSyncing ? 'text-blue-400' : 'text-[#2D2DFF]'}`}
                >
                  <Search className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
                  <span>{isSyncing ? 'Linking...' : 'Link Historical CVR'}</span>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-8 pb-12">
                <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-sm space-y-6">
                  <div className="bg-gray-50 w-12 h-12 rounded-full flex items-center justify-center border border-gray-100 font-black text-[#2D2DFF]">1</div>
                  <h3 className="font-black text-[#002120] uppercase text-xs tracking-widest mb-2">Target Goal</h3>
                  <div className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-4 text-sm font-bold flex justify-between items-center cursor-pointer">
                    Purchase <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-sm space-y-6 border-l-8 border-l-[#DAE995] relative overflow-hidden">
                  <div className="bg-gray-50 w-12 h-12 rounded-full flex items-center justify-center border border-gray-100 font-black text-[#DAE995]">2</div>
                  <h3 className="font-black text-[#002120] uppercase text-xs tracking-widest mb-2">Segment CVR</h3>
                  <div className="flex items-baseline space-x-1">
                    <input
                      type="number" step="0.1" value={stats.baselineCVR}
                      onChange={(e) => setStats(prev => ({ ...prev, baselineCVR: parseFloat(e.target.value) || 0 }))}
                      className="text-5xl font-black text-[#002120] bg-transparent w-full focus:outline-none rounded-lg"
                    />
                    <span className="text-2xl font-black text-[#002120]">%</span>
                  </div>
                  <p className={`text-[10px] font-bold flex items-center uppercase tracking-widest ${stats.baselineCVR === 3.2 ? 'text-[#34A853]' : 'text-orange-500'}`}>
                    <CheckCircle2 className="w-3 h-3 mr-2" /> {stats.baselineCVR === 3.2 ? 'Sync Verified' : 'Custom Estimate'}
                  </p>
                  {isSyncing && <div className="absolute inset-0 bg-white/60 flex items-center justify-center backdrop-blur-[2px] animate-pulse"></div>}
                </div>
                <div className="bg-[#002120] rounded-3xl p-10 shadow-2xl space-y-6 text-[#DAE995]">
                  <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#DAE995] fill-[#DAE995]" />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Calibration Confidence</p>
                  <div className="w-full h-2 bg-white/10 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-[#DAE995] rounded-full transition-all duration-1000 shadow-[0_0_15px_#DAE995]" style={{ width: stats.baselineCVR === 3.2 ? '92%' : '45%' }}></div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="bg-[#2D2DFF] text-white px-14 py-5 rounded-3xl font-black shadow-2xl shadow-blue-500/30 hover:scale-105 transition-all uppercase tracking-widest flex items-center space-x-3" onClick={() => setStep(2)}>
                  <span>Analyze Decisions</span> <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="animate-in zoom-in-95 duration-500 space-y-16 pb-24">
              <div className="border-l-4 border-blue-500 pl-6 py-2">
                <h2 className="text-3xl font-black text-[#002120] uppercase tracking-tight">Actions to adjust duration</h2>
                <p className="text-gray-500 text-sm mt-1 font-medium font-italic italic">"And / Or choice for experiment optimization"</p>
              </div>

              {/* Proposition 1: The Hypothesis Lab */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#002120] text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black">1</div>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">Keep experiment settings / Change CVR / MDE in hypothesis</h3>
                </div>
                <div className="bg-white border border-gray-200 rounded-[40px] shadow-xl overflow-hidden p-10 grid grid-cols-12 gap-12 border-t-8 border-t-[#002120]">
                  <div className="col-span-8 space-y-10 group">
                    <p className="text-sm font-medium text-gray-500 max-w-lg mb-4 italic">"Simulate different statistical scenarios without altering the live experiment."</p>
                    <div className="grid grid-cols-2 gap-10">
                      <div className="space-y-4">
                        <div className="flex justify-between items-end">
                          <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Hypothesis: CVR</p>
                          <span className="text-xl font-black text-[#002120]">{stats.baselineCVR}%</span>
                        </div>
                        <input
                          type="range" min="0.1" max="10" step="0.1" value={stats.baselineCVR}
                          onChange={(e) => setStats(prev => ({ ...prev, baselineCVR: parseFloat(e.target.value) }))}
                          className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#DAE995]"
                        />
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-end">
                          <p className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Hypothesis: MDE (Target Lift)</p>
                          <span className="text-xl font-black text-[#002120]">{stats.mde}%</span>
                        </div>
                        <input
                          type="range" min="1" max="15" step="0.5" value={stats.mde}
                          onChange={(e) => setStats(prev => ({ ...prev, mde: parseFloat(e.target.value) }))}
                          className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#2D2DFF]"
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 text-[10px] text-gray-400 font-bold uppercase tracking-widest pt-4">
                      <Info className="w-4 h-4" />
                      <span>ETR calculated based on current hypothesis settings</span>
                    </div>
                  </div>
                  <div className="col-span-4">
                    <div className={`rounded-[32px] p-8 text-white relative flex flex-col justify-center items-center text-center overflow-hidden shadow-2xl h-full transition-colors duration-500 ${isOverpowered ? 'bg-[#982121]' : 'bg-[#002120]'}`}>
                      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
                      <p className="text-[8px] font-black uppercase text-[#DAE995] mb-4 tracking-[0.3em] opacity-80">Hypothesis ETR</p>
                      <div className="text-[80px] font-black leading-none text-white tracking-tighter tabular-nums">{currentETR}</div>
                      <div className="text-[10px] font-black text-[#DAE995] uppercase tracking-[0.5em] mt-1">Days</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Path B: AI suggestion to reduce ETR / Adjust segment */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#2D2DFF] text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black underline">B</div>
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">AI suggestion to reduce ETR / Adjust segment</h3>
                </div>
                <div className="p-10 bg-[#FFF8E1] rounded-[40px] flex items-center justify-between border-2 border-[#FFE7C8]/50 shadow-xl relative overflow-hidden group transition-all hover:border-[#FF9500]/30 border-t-8 border-t-[#FF9500]">
                  <div className="flex items-center space-x-8 relative z-10">
                    <div className={`p-6 rounded-2xl shadow-2xl transition-all ${reachBoosted ? 'bg-[#34A853]' : 'bg-[#A56B00] group-hover:scale-110'}`}>
                      <Zap className="w-10 h-10 text-white fill-white" />
                    </div>
                    <div className="max-w-2xl">
                      <h4 className={`text-[10px] font-black uppercase tracking-widest mb-1 ${reachBoosted ? 'text-[#34A853]' : 'text-[#A56B00]'}`}>
                        {reachBoosted ? 'Segment Adjusted' : 'Optimization Lever Found'}
                      </h4>
                      {reachBoosted ? (
                        <p className="text-2xl font-bold text-[#002120]">Segment reach expanded. Growth applied to live configuration (<span className="text-[#34A853] font-black">{(currentReach / 1000000).toFixed(1)}M users</span>).</p>
                      ) : (
                        <p className="text-2xl font-bold text-[#4E3400]">Hit your target by <span className="font-black">Adjusting Segment</span>. AI suggests adding 'Organic Channel' traffic to reduce ETR.</p>
                      )}
                      <p className="text-xs text-[#A56B00]/60 font-bold uppercase tracking-widest mt-4">This action modifies your live experiment setup</p>
                    </div>
                  </div>
                  {!reachBoosted && (
                    <button
                      onClick={applyReachBoost}
                      className="bg-[#002120] text-white px-12 py-6 rounded-2xl text-xs font-black uppercase hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all relative z-10 tracking-[0.2em]"
                    >
                      Adjust Segment
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [screen, setScreen] = useState('builder');
  const [stats, setStats] = useState({
    mde: 5,
    baselineCVR: 3.2,
    reach: 1114230
  });

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-[#002120] overflow-hidden">
      <Sidebar activeTab={screen === 'recap' || screen === 'finalization' ? 'experiences' : 'segments'} />
      <main className="flex-1 flex flex-col overflow-hidden relative border-l border-gray-100 shadow-2xl">
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex space-x-3 bg-[#002120]/95 backdrop-blur-md p-2.5 rounded-full shadow-2xl border border-white/10">
          {[
            { id: 'builder', label: '1. Builder (Forecast)' },
            { id: 'dashboard', label: '2. Library' },
            { id: 'recap', label: '3. Review' },
            { id: 'finalization', label: '4. Decision Engine' }
          ].map(s => (
            <button key={s.id} onClick={() => setScreen(s.id)} className={`px-6 py-3 rounded-full text-[10px] font-black uppercase transition-all whitespace-nowrap ${screen === s.id ? 'bg-[#DAE995] text-[#002120] shadow-xl' : 'text-white/40 hover:text-white'}`}>
              {s.label}
            </button>
          ))}
        </div>

        {screen === 'builder' && (
          <div className="h-full relative overflow-hidden bg-white">
            <SegmentBuilderModal setScreen={setScreen} />
          </div>
        )}
        {screen === 'dashboard' && <SegmentDashboard setScreen={setScreen} />}
        {screen === 'recap' && <SegmentRecap setScreen={setScreen} />}
        {screen === 'finalization' && <FinalizationFlow setScreen={setScreen} stats={stats} setStats={setStats} />}
      </main>
    </div>
  );
};

export default App;
