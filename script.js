const STORAGE_KEY = 'timetable-wallpaper-state-v7';
const ALL_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const DAY_FULL_NAMES = { Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday', Fri: 'Friday', Sat: 'Saturday', Sun: 'Sunday' };

const ACCENT_COLORS = ['#4a63e7', '#e0527e', '#1f9d55', '#c98a00', '#8a53e0', '#12a0b0', '#d9701e', '#3a6b8c'];

function colorForName(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  return ACCENT_COLORS[hash % ACCENT_COLORS.length];
}

const THEMES = [
  {
    id: 'minimal',
    name: 'Minimal White',
    bg: ['#f5f6fa', '#e9ebf2'],
    card: 'rgba(255,255,255,0.88)',
    cardBorder: 'rgba(0,0,0,0.06)',
    blockBg: 'rgba(255,255,255,0.92)',
    text: '#1c1c1e',
    muted: '#8a8a90',
    header: '#1c1c1e',
  },
  {
    id: 'dark',
    name: 'Dark Mode',
    bg: ['#0f0f14', '#1c1c24'],
    card: 'rgba(255,255,255,0.07)',
    cardBorder: 'rgba(255,255,255,0.12)',
    blockBg: 'rgba(255,255,255,0.10)',
    text: '#f2f2f4',
    muted: '#a6a6b0',
    header: '#ffffff',
  },
  {
    id: 'pastel',
    name: 'Pastel Pink',
    bg: ['#ffe1ec', '#ffd0e0'],
    card: 'rgba(255,255,255,0.72)',
    cardBorder: 'rgba(0,0,0,0.05)',
    blockBg: 'rgba(255,255,255,0.85)',
    text: '#5a3a44',
    muted: '#9c7a83',
    header: '#5a3a44',
  },
  {
    id: 'mint',
    name: 'Mint',
    bg: ['#d5f5ee', '#bdeae0'],
    card: 'rgba(255,255,255,0.72)',
    cardBorder: 'rgba(0,0,0,0.05)',
    blockBg: 'rgba(255,255,255,0.82)',
    text: '#1f4a42',
    muted: '#5f8a80',
    header: '#1f4a42',
  },
  {
    id: 'ocean',
    name: 'Ocean Blue',
    bg: ['#dbeeff', '#b8dcff'],
    card: 'rgba(255,255,255,0.82)',
    cardBorder: 'rgba(15,58,95,0.08)',
    blockBg: 'rgba(255,255,255,0.9)',
    text: '#0f3a5f',
    muted: '#5b7d99',
    header: '#0f3a5f',
  },
  {
    id: 'lavender',
    name: 'Lavender',
    bg: ['#ece3ff', '#dcc9ff'],
    card: 'rgba(255,255,255,0.78)',
    cardBorder: 'rgba(74,49,112,0.08)',
    blockBg: 'rgba(255,255,255,0.85)',
    text: '#4a3170',
    muted: '#8874a8',
    header: '#4a3170',
  },
  {
    id: 'sunset',
    name: 'Sunset',
    bg: ['#ffd9b3', '#ff9a8b'],
    card: 'rgba(255,255,255,0.78)',
    cardBorder: 'rgba(122,46,29,0.08)',
    blockBg: 'rgba(255,255,255,0.85)',
    text: '#7a2e1d',
    muted: '#a56652',
    header: '#7a2e1d',
  },
  {
    id: 'latte',
    name: 'Latte',
    bg: ['#f3e6d8', '#e6d1b8'],
    card: 'rgba(255,255,255,0.82)',
    cardBorder: 'rgba(92,69,48,0.08)',
    blockBg: 'rgba(255,255,255,0.9)',
    text: '#5c4530',
    muted: '#9c8468',
    header: '#5c4530',
  },
  {
    id: 'charcoal',
    name: 'Charcoal',
    bg: ['#232a34', '#333d4d'],
    card: 'rgba(255,255,255,0.06)',
    cardBorder: 'rgba(255,255,255,0.12)',
    blockBg: 'rgba(255,255,255,0.09)',
    text: '#e8edf3',
    muted: '#9aa7b6',
    header: '#ffffff',
  },
  {
    id: 'monochrome',
    name: 'Monochrome',
    bg: ['#000000', '#0a0a0a'],
    card: 'rgba(255,255,255,0.05)',
    cardBorder: 'rgba(255,255,255,0.15)',
    blockBg: 'rgba(255,255,255,0.08)',
    text: '#ffffff',
    muted: '#8a8a8a',
    header: '#ffffff',
  },
  {
    id: 'rosegold',
    name: 'Rose Gold',
    bg: ['#f8dde0', '#f3c9c0'],
    card: 'rgba(255,255,255,0.8)',
    cardBorder: 'rgba(120,50,50,0.07)',
    blockBg: 'rgba(255,255,255,0.88)',
    text: '#8a4a4a',
    muted: '#b9847f',
    header: '#8a4a4a',
  },
  {
    id: 'sky',
    name: 'Sky',
    bg: ['#e3f4ff', '#c3e6ff'],
    card: 'rgba(255,255,255,0.82)',
    cardBorder: 'rgba(10,80,120,0.07)',
    blockBg: 'rgba(255,255,255,0.9)',
    text: '#0d5a80',
    muted: '#5c92ab',
    header: '#0d5a80',
  },
  {
    id: 'peach',
    name: 'Peach',
    bg: ['#ffe5d4', '#ffd0ae'],
    card: 'rgba(255,255,255,0.8)',
    cardBorder: 'rgba(140,70,20,0.07)',
    blockBg: 'rgba(255,255,255,0.88)',
    text: '#8a4e1f',
    muted: '#b98a5c',
    header: '#8a4e1f',
  },
  {
    id: 'lilac',
    name: 'Lilac',
    bg: ['#f2e6ff', '#e2caff'],
    card: 'rgba(255,255,255,0.8)',
    cardBorder: 'rgba(90,40,130,0.07)',
    blockBg: 'rgba(255,255,255,0.88)',
    text: '#5e3a80',
    muted: '#9678ab',
    header: '#5e3a80',
  },
  {
    id: 'sage',
    name: 'Sage',
    bg: ['#e6ecdf', '#d3ddc4'],
    card: 'rgba(255,255,255,0.8)',
    cardBorder: 'rgba(60,80,40,0.07)',
    blockBg: 'rgba(255,255,255,0.88)',
    text: '#4a5c38',
    muted: '#849472',
    header: '#4a5c38',
  },
  {
    id: 'coralreef',
    name: 'Coral Reef',
    bg: ['#ffb4a2', '#6ecbc9'],
    card: 'rgba(255,255,255,0.82)',
    cardBorder: 'rgba(0,60,60,0.08)',
    blockBg: 'rgba(255,255,255,0.88)',
    text: '#0f4c4a',
    muted: '#4d8482',
    header: '#0f4c4a',
  },
  {
    id: 'midnight',
    name: 'Midnight Blue',
    bg: ['#0b1a3a', '#152852'],
    card: 'rgba(255,255,255,0.06)',
    cardBorder: 'rgba(255,255,255,0.13)',
    blockBg: 'rgba(255,255,255,0.09)',
    text: '#e6ecff',
    muted: '#93a4d9',
    header: '#ffffff',
  },
  {
    id: 'forest',
    name: 'Forest',
    bg: ['#0e2417', '#183a26'],
    card: 'rgba(255,255,255,0.06)',
    cardBorder: 'rgba(255,255,255,0.12)',
    blockBg: 'rgba(255,255,255,0.09)',
    text: '#e3f2e8',
    muted: '#8fb89e',
    header: '#ffffff',
  },
  {
    id: 'plum',
    name: 'Plum',
    bg: ['#2a0f2e', '#3f1a46'],
    card: 'rgba(255,255,255,0.06)',
    cardBorder: 'rgba(255,255,255,0.13)',
    blockBg: 'rgba(255,255,255,0.09)',
    text: '#f3e3f5',
    muted: '#c093c7',
    header: '#ffffff',
  },
  {
    id: 'cherryblossom',
    name: 'Cherry Blossom',
    bg: ['#fff0f3', '#ffd7e0'],
    card: 'rgba(255,255,255,0.85)',
    cardBorder: 'rgba(150,50,80,0.06)',
    blockBg: 'rgba(255,255,255,0.92)',
    text: '#a13b5c',
    muted: '#c98ba0',
    header: '#a13b5c',
  },
  {
    id: 'butter',
    name: 'Butter',
    bg: ['#fff6d9', '#ffedad'],
    card: 'rgba(255,255,255,0.82)',
    cardBorder: 'rgba(120,100,10,0.07)',
    blockBg: 'rgba(255,255,255,0.9)',
    text: '#7a6413',
    muted: '#ad9a5c',
    header: '#7a6413',
  },
  {
    id: 'steelgray',
    name: 'Steel Gray',
    bg: ['#eef1f4', '#d7dee5'],
    card: 'rgba(255,255,255,0.82)',
    cardBorder: 'rgba(40,55,70,0.07)',
    blockBg: 'rgba(255,255,255,0.9)',
    text: '#33424f',
    muted: '#7c8b98',
    header: '#33424f',
  },
  {
    id: 'terracotta',
    name: 'Terracotta',
    bg: ['#f0d0bc', '#dba07c'],
    card: 'rgba(255,255,255,0.8)',
    cardBorder: 'rgba(110,50,20,0.08)',
    blockBg: 'rgba(255,255,255,0.88)',
    text: '#6e3a1f',
    muted: '#a3745a',
    header: '#6e3a1f',
  },
  {
    id: 'aqua',
    name: 'Aqua',
    bg: ['#d4fbf7', '#a6ede4'],
    card: 'rgba(255,255,255,0.8)',
    cardBorder: 'rgba(0,90,80,0.07)',
    blockBg: 'rgba(255,255,255,0.88)',
    text: '#0d5c53',
    muted: '#4f9188',
    header: '#0d5c53',
  },
  {
    id: 'blush',
    name: 'Blush',
    bg: ['#fbe4e6', '#f3c9ce'],
    card: 'rgba(255,255,255,0.82)',
    cardBorder: 'rgba(130,40,60,0.06)',
    blockBg: 'rgba(255,255,255,0.9)',
    text: '#8f3d4c',
    muted: '#c08893',
    header: '#8f3d4c',
  },
  {
    id: 'indigonight',
    name: 'Indigo Night',
    bg: ['#161233', '#241a52'],
    card: 'rgba(255,255,255,0.06)',
    cardBorder: 'rgba(255,255,255,0.13)',
    blockBg: 'rgba(255,255,255,0.09)',
    text: '#e9e6ff',
    muted: '#a89ee0',
    header: '#ffffff',
  },
  {
    id: 'indigo',
    name: 'Indigo',
    bg: ['#e7e9ff', '#c6ccf6'],
    card: 'rgba(255,255,255,0.82)',
    cardBorder: 'rgba(40,40,110,0.09)',
    blockBg: 'rgba(255,255,255,0.9)',
    text: '#2e2e78',
    muted: '#6f72b3',
    header: '#2e2e78',
  },
  {
    id: 'olive',
    name: 'Olive',
    bg: ['#eef0d8', '#dfe3b0'],
    card: 'rgba(255,255,255,0.8)',
    cardBorder: 'rgba(80,80,20,0.07)',
    blockBg: 'rgba(255,255,255,0.88)',
    text: '#5c5c1f',
    muted: '#93945c',
    header: '#5c5c1f',
  },
  {
    id: 'ice',
    name: 'Ice',
    bg: ['#f5fdff', '#e0f4fa'],
    card: 'rgba(255,255,255,0.88)',
    cardBorder: 'rgba(20,100,120,0.05)',
    blockBg: 'rgba(255,255,255,0.94)',
    text: '#1c5566',
    muted: '#6f9aa8',
    header: '#1c5566',
  },
  {
    id: 'wine',
    name: 'Wine',
    bg: ['#2a0e14', '#42151d'],
    card: 'rgba(255,255,255,0.06)',
    cardBorder: 'rgba(255,255,255,0.12)',
    blockBg: 'rgba(255,255,255,0.09)',
    text: '#f5e2e4',
    muted: '#c48f95',
    header: '#ffffff',
  },
  {
    id: 'sand',
    name: 'Sand',
    bg: ['#f0e6d2', '#e0d0a8'],
    card: 'rgba(255,255,255,0.82)',
    cardBorder: 'rgba(100,80,40,0.07)',
    blockBg: 'rgba(255,255,255,0.9)',
    text: '#6b552f',
    muted: '#a3906a',
    header: '#6b552f',
  },
];

function hexToRgb(hex) {
  const m = hex.replace('#', '').match(/.{1,2}/g) || ['f5', 'f6', 'fa'];
  return m.map((h) => parseInt(h, 16));
}

function relativeLuminance(hex) {
  const [r, g, b] = hexToRgb(hex);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

function buildCustomTheme(colors) {
  const isLight = relativeLuminance(colors.bg1) > 0.5;
  return {
    id: state.theme,
    name: 'Custom',
    bg: [colors.bg1, colors.bg2],
    card: isLight ? 'rgba(255,255,255,0.82)' : 'rgba(255,255,255,0.07)',
    cardBorder: isLight ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.13)',
    blockBg: isLight ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.1)',
    text: colors.header,
    muted: colors.muted,
    header: colors.header,
  };
}

const BLANK_THEME_BASE = { bg1: '#f5f6fa', bg2: '#e9ebf2', header: '#1c1c1e', muted: '#8a8a90' };

function getThemeBaseColors(themeId) {
  const preset = THEMES.find((t) => t.id === themeId);
  if (!preset) return BLANK_THEME_BASE;
  return { bg1: preset.bg[0], bg2: preset.bg[1], header: preset.header, muted: preset.muted };
}

function getEditableColors(themeId) {
  const base = getThemeBaseColors(themeId);
  const override = state.themeOverrides[themeId] || {};
  return {
    bg1: override.bg1 ?? base.bg1,
    bg2: override.bg2 ?? base.bg2,
    header: override.header ?? base.header,
    muted: override.muted ?? base.muted,
  };
}

function getActiveTheme() {
  const preset = THEMES.find((t) => t.id === state.theme);
  const override = state.themeOverrides[state.theme];
  if (!override && preset) return preset;
  return buildCustomTheme(getEditableColors(state.theme));
}

function defaultState() {
  return {
    days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    courses: [],
    showTitle: false,
    showRoom: false,
    showProfessor: false,
    theme: 'minimal',
    themeOverrides: {},
    tzEnabled: false,
    schoolTz: deviceTimeZone(),
    homeTz: deviceTimeZone(),
    resolution: '1080x2340',
    customWidth: 1080,
    customHeight: 2400,
    lockMargin: true,
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return Object.assign(defaultState(), parsed);
  } catch (e) {
    return defaultState();
  }
}

let state = loadState();
let parsedCatalog = typeof CATALOG_DATA !== 'undefined' ? CATALOG_DATA : [];

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function parseTime(str) {
  const [h, m] = str.split(':').map(Number);
  return h * 60 + m;
}

// ---------- Time zone helpers ----------

const MIN_PER_DAY = 24 * 60;

// Timezones used when the browser can't enumerate the full IANA list.
const FALLBACK_TIME_ZONES = [
  'Pacific/Honolulu', 'America/Anchorage', 'America/Los_Angeles', 'America/Denver',
  'America/Chicago', 'America/New_York', 'America/Toronto', 'America/Mexico_City',
  'America/Bogota', 'America/Sao_Paulo', 'Atlantic/Reykjavik', 'Europe/London',
  'Europe/Lisbon', 'Europe/Paris', 'Europe/Berlin', 'Europe/Madrid', 'Europe/Rome',
  'Europe/Athens', 'Europe/Istanbul', 'Europe/Moscow', 'Africa/Cairo',
  'Africa/Lagos', 'Africa/Johannesburg', 'Asia/Jerusalem', 'Asia/Dubai',
  'Asia/Tehran', 'Asia/Karachi', 'Asia/Kolkata', 'Asia/Kathmandu', 'Asia/Dhaka',
  'Asia/Bangkok', 'Asia/Jakarta', 'Asia/Shanghai', 'Asia/Hong_Kong',
  'Asia/Singapore', 'Asia/Taipei', 'Asia/Manila', 'Asia/Seoul', 'Asia/Tokyo',
  'Australia/Perth', 'Australia/Adelaide', 'Australia/Sydney', 'Australia/Brisbane',
  'Pacific/Guam', 'Pacific/Auckland', 'UTC',
];

function deviceTimeZone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
  } catch (e) {
    return 'UTC';
  }
}

function listTimeZones() {
  try {
    if (typeof Intl.supportedValuesOf === 'function') {
      const zones = Intl.supportedValuesOf('timeZone');
      if (zones && zones.length) return zones.slice();
    }
  } catch (e) {
    /* fall through */
  }
  return FALLBACK_TIME_ZONES.slice();
}

// Minutes that `timeZone` is ahead of UTC at the given date (handles DST).
function zoneOffsetMinutes(timeZone, date) {
  try {
    const dtf = new Intl.DateTimeFormat('en-US', {
      timeZone,
      hourCycle: 'h23',
      year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', second: '2-digit',
    });
    const parts = {};
    for (const p of dtf.formatToParts(date)) parts[p.type] = p.value;
    const asUTC = Date.UTC(
      Number(parts.year), Number(parts.month) - 1, Number(parts.day),
      Number(parts.hour), Number(parts.minute), Number(parts.second),
    );
    return Math.round((asUTC - date.getTime()) / 60000);
  } catch (e) {
    return 0;
  }
}

function formatGmtOffset(mins) {
  const sign = mins < 0 ? '-' : '+';
  const abs = Math.abs(mins);
  const hh = Math.floor(abs / 60);
  const mm = abs % 60;
  return mm ? `GMT${sign}${hh}:${String(mm).padStart(2, '0')}` : `GMT${sign}${hh}`;
}

function timeZoneLabel(tz, date) {
  return `${tz.replace(/_/g, ' ')} (${formatGmtOffset(zoneOffsetMinutes(tz, date))})`;
}

let timeZoneOptionCache = null;

function timeZoneOptions() {
  if (timeZoneOptionCache) return timeZoneOptionCache;
  const now = new Date();
  timeZoneOptionCache = listTimeZones()
    .map((tz) => ({ tz, offset: zoneOffsetMinutes(tz, now), label: timeZoneLabel(tz, now) }))
    .sort((a, b) => a.offset - b.offset || a.tz.localeCompare(b.tz));
  return timeZoneOptionCache;
}

function populateTimeZoneSelect(selectEl, selected) {
  const options = timeZoneOptions().slice();
  if (!options.some((o) => o.tz === selected)) {
    options.unshift({ tz: selected, label: timeZoneLabel(selected, new Date()) });
  }
  selectEl.innerHTML = '';
  options.forEach(({ tz, label }) => {
    const opt = document.createElement('option');
    opt.value = tz;
    opt.textContent = label;
    if (tz === selected) opt.selected = true;
    selectEl.appendChild(opt);
  });
}

// Minutes to add to every school-local class time to get home-local time.
function getTimeZoneShift() {
  if (!state.tzEnabled) return 0;
  if (!state.schoolTz || !state.homeTz || state.schoolTz === state.homeTz) return 0;
  const now = new Date();
  return zoneOffsetMinutes(state.homeTz, now) - zoneOffsetMinutes(state.schoolTz, now);
}

function wrapDayIndex(idx) {
  return ((idx % 7) + 7) % 7;
}

function minutesToHHMM(mins) {
  const h = Math.floor(mins / 60);
  const m = Math.round(mins - h * 60);
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
}

function describeShift(mins) {
  const sign = mins > 0 ? '+' : '−';
  const abs = Math.abs(mins);
  const hh = Math.floor(abs / 60);
  const mm = abs % 60;
  return mm ? `${sign}${hh}h ${mm}m` : `${sign}${hh}h`;
}

// ---------- Catalog search helpers ----------

function format12(hhmm) {
  const [h, m] = hhmm.split(':').map(Number);
  const mer = h < 12 ? 'AM' : 'PM';
  let h12 = h % 12;
  if (h12 === 0) h12 = 12;
  return `${h12}:${String(m).padStart(2, '0')} ${mer}`;
}

function meetingSummary(section) {
  return section.meetings
    .map((m) => {
      const dayStr = m.days.join('/');
      const timeStr = `${format12(m.start)}–${format12(m.end)}`;
      const roomStr = m.room ? ` · ${m.room}` : '';
      return `${dayStr} ${timeStr}${roomStr}`;
    })
    .join('; ');
}

function shortCode(code) {
  return code.split('-').slice(0, 2).join('');
}

function addSectionToSchedule(section) {
  let count = 0;
  section.meetings.forEach((meeting) => {
    meeting.days.forEach((day) => {
      state.courses.push({
        id: Date.now() + Math.random(),
        name: shortCode(section.code),
        title: section.title,
        day,
        start: meeting.start,
        end: meeting.end,
        location: meeting.room,
        professor: section.instructors.join(', '),
      });
      if (!state.days.includes(day)) {
        state.days.push(day);
        state.days.sort((a, b) => ALL_DAYS.indexOf(a) - ALL_DAYS.indexOf(b));
      }
      count++;
    });
  });
  renderDayToggles();
  renderCourseList();
  onStateChanged();
  return count;
}

// ---------- DOM refs ----------

const catalogStatusEl = document.getElementById('catalogStatus');
const catalogSearchEl = document.getElementById('catalogSearch');
const catalogResultsEl = document.getElementById('catalogResults');

const dayTogglesEl = document.getElementById('dayToggles');
const dayToggleHintEl = document.getElementById('dayToggleHint');
const tzEnabledEl = document.getElementById('tzEnabled');
const tzOptionsEl = document.getElementById('tzOptions');
const schoolTzEl = document.getElementById('schoolTz');
const homeTzEl = document.getElementById('homeTz');
const tzInfoEl = document.getElementById('tzInfo');
const themeTogglesEl = document.getElementById('themeToggles');
const customBg1El = document.getElementById('customBg1');
const customBg2El = document.getElementById('customBg2');
const customHeaderEl = document.getElementById('customHeader');
const customMutedEl = document.getElementById('customMuted');
const courseListEl = document.getElementById('courseList');
const addCourseBtn = document.getElementById('addCourseBtn');
const showTitleEl = document.getElementById('showTitle');
const showRoomEl = document.getElementById('showRoom');
const showProfessorEl = document.getElementById('showProfessor');
const resolutionSelectEl = document.getElementById('resolutionSelect');
const customResEl = document.getElementById('customResolution');
const customWidthEl = document.getElementById('customWidth');
const customHeightEl = document.getElementById('customHeight');
const lockMarginEl = document.getElementById('lockScreenMargin');
const downloadBtn = document.getElementById('downloadBtn');
const resetBtn = document.getElementById('resetBtn');
const canvas = document.getElementById('previewCanvas');
const ctx = canvas.getContext('2d');

function onStateChanged() {
  saveState();
  drawCanvas();
}

// ---------- Catalog search UI ----------

function initCatalogUi() {
  catalogStatusEl.textContent = parsedCatalog.length
    ? `${parsedCatalog.length} classes available to search.`
    : 'No catalog data loaded.';
  renderCatalogResults('');
}

catalogSearchEl.addEventListener('input', () => {
  renderCatalogResults(catalogSearchEl.value.trim());
});

function renderCatalogResults(query) {
  const q = query.toLowerCase();
  catalogResultsEl.innerHTML = '';

  if (!q) {
    const hint = document.createElement('p');
    hint.className = 'hint';
    hint.textContent = `Start typing to search ${parsedCatalog.length} classes...`;
    catalogResultsEl.appendChild(hint);
    return;
  }

  const matches = parsedCatalog
    .filter((s) => s.code.toLowerCase().includes(q) || s.title.toLowerCase().includes(q))
    .slice(0, 40);
  if (matches.length === 0) {
    const empty = document.createElement('p');
    empty.className = 'hint';
    empty.textContent = 'No matching classes found.';
    catalogResultsEl.appendChild(empty);
    return;
  }

  matches.forEach((section) => {
    const row = document.createElement('div');
    row.className = 'catalog-result-row';

    const info = document.createElement('div');
    info.className = 'catalog-result-info';

    const titleEl = document.createElement('div');
    titleEl.className = 'catalog-result-title';
    titleEl.textContent = `${section.code} — ${section.title}`;

    const metaEl = document.createElement('div');
    metaEl.className = 'catalog-result-meta';
    const instructorStr = section.instructors.length ? ` · ${section.instructors.join(', ')}` : '';
    metaEl.textContent = meetingSummary(section) + instructorStr;

    info.appendChild(titleEl);
    info.appendChild(metaEl);

    const addBtn = document.createElement('button');
    addBtn.className = 'catalog-add-btn';
    addBtn.textContent = '+ Add';
    addBtn.addEventListener('click', () => {
      addSectionToSchedule(section);
      addBtn.textContent = 'Added ✓';
      addBtn.disabled = true;
    });

    row.appendChild(info);
    row.appendChild(addBtn);
    catalogResultsEl.appendChild(row);
  });
}

// ---------- Controls: days / theme ----------

function renderDayToggles() {
  dayTogglesEl.innerHTML = '';
  ALL_DAYS.forEach((day) => {
    const chip = document.createElement('div');
    chip.className = 'chip' + (state.days.includes(day) ? ' active' : '');
    chip.textContent = day;
    chip.addEventListener('click', () => {
      if (state.days.includes(day)) {
        if (state.days.length === 1) return;
        state.days = state.days.filter((d) => d !== day);
      } else {
        state.days.push(day);
        state.days.sort((a, b) => ALL_DAYS.indexOf(a) - ALL_DAYS.indexOf(b));
      }
      onStateChanged();
      renderDayToggles();
    });
    dayTogglesEl.appendChild(chip);
  });
}

function selectTheme(themeId) {
  state.theme = themeId;
  onStateChanged();
  renderThemeToggles();
  updateCustomColorInputs();
}

function updateCustomColorInputs() {
  const colors = getEditableColors(state.theme);
  customBg1El.value = colors.bg1;
  customBg2El.value = colors.bg2;
  customHeaderEl.value = colors.header;
  customMutedEl.value = colors.muted;
}

function renderThemeToggles() {
  themeTogglesEl.innerHTML = '';

  const customChip = document.createElement('div');
  customChip.className = 'chip' + (state.theme === 'custom' ? ' active' : '');
  customChip.textContent = 'Custom';
  customChip.addEventListener('click', () => selectTheme('custom'));
  themeTogglesEl.appendChild(customChip);

  THEMES.forEach((theme) => {
    const chip = document.createElement('div');
    chip.className = 'chip' + (state.theme === theme.id ? ' active' : '');
    chip.textContent = theme.name;
    chip.addEventListener('click', () => selectTheme(theme.id));
    themeTogglesEl.appendChild(chip);
  });
}

// ---------- Controls: course list ----------

function makeField(className, el) {
  el.classList.add(className);
  return el;
}

function renderCourseList() {
  courseListEl.innerHTML = '';
  state.courses.forEach((course) => {
    const row = document.createElement('div');
    row.className = 'course-row';

    const nameInput = makeField('f-name', document.createElement('input'));
    nameInput.type = 'text';
    nameInput.placeholder = 'Class name';
    nameInput.value = course.name;
    nameInput.addEventListener('input', () => {
      course.name = nameInput.value;
      onStateChanged();
    });

    const daySelect = makeField('f-day', document.createElement('select'));
    ALL_DAYS.forEach((day) => {
      const opt = document.createElement('option');
      opt.value = day;
      opt.textContent = DAY_FULL_NAMES[day];
      if (day === course.day) opt.selected = true;
      daySelect.appendChild(opt);
    });
    daySelect.addEventListener('change', () => {
      course.day = daySelect.value;
      if (!state.days.includes(course.day)) {
        state.days.push(course.day);
        state.days.sort((a, b) => ALL_DAYS.indexOf(a) - ALL_DAYS.indexOf(b));
        renderDayToggles();
      }
      onStateChanged();
    });

    const startInput = makeField('f-start', document.createElement('input'));
    startInput.type = 'time';
    startInput.value = course.start;
    startInput.addEventListener('input', () => {
      course.start = startInput.value;
      onStateChanged();
    });

    const endInput = makeField('f-end', document.createElement('input'));
    endInput.type = 'time';
    endInput.value = course.end;
    endInput.addEventListener('input', () => {
      course.end = endInput.value;
      onStateChanged();
    });

    const locInput = makeField('f-loc', document.createElement('input'));
    locInput.type = 'text';
    locInput.placeholder = 'Room';
    locInput.value = course.location;
    locInput.addEventListener('input', () => {
      course.location = locInput.value;
      onStateChanged();
    });

    const profInput = makeField('f-prof', document.createElement('input'));
    profInput.type = 'text';
    profInput.placeholder = 'Instructor';
    profInput.value = course.professor;
    profInput.addEventListener('input', () => {
      course.professor = profInput.value;
      onStateChanged();
    });

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-course-btn';
    removeBtn.textContent = '×';
    removeBtn.title = 'Remove';
    removeBtn.addEventListener('click', () => {
      state.courses = state.courses.filter((c) => c.id !== course.id);
      renderCourseList();
      onStateChanged();
    });

    row.appendChild(nameInput);
    row.appendChild(daySelect);
    row.appendChild(startInput);
    row.appendChild(endInput);
    row.appendChild(locInput);
    row.appendChild(profInput);
    row.appendChild(removeBtn);
    courseListEl.appendChild(row);
  });
}

addCourseBtn.addEventListener('click', () => {
  state.courses.push({
    id: Date.now() + Math.random(),
    name: '',
    day: state.days[0] || ALL_DAYS[0],
    start: '09:00',
    end: '10:15',
    location: '',
    professor: '',
  });
  renderCourseList();
  onStateChanged();
});

showTitleEl.addEventListener('change', () => {
  state.showTitle = showTitleEl.checked;
  onStateChanged();
});
showRoomEl.addEventListener('change', () => {
  state.showRoom = showRoomEl.checked;
  onStateChanged();
});
showProfessorEl.addEventListener('change', () => {
  state.showProfessor = showProfessorEl.checked;
  onStateChanged();
});

tzEnabledEl.addEventListener('change', () => {
  state.tzEnabled = tzEnabledEl.checked;
  tzOptionsEl.classList.toggle('hidden', !state.tzEnabled);
  updateTzInfo();
  onStateChanged();
});

schoolTzEl.addEventListener('change', () => {
  state.schoolTz = schoolTzEl.value;
  updateTzInfo();
  onStateChanged();
});

homeTzEl.addEventListener('change', () => {
  state.homeTz = homeTzEl.value;
  updateTzInfo();
  onStateChanged();
});

resolutionSelectEl.addEventListener('change', () => {
  state.resolution = resolutionSelectEl.value;
  customResEl.classList.toggle('hidden', state.resolution !== 'custom');
  onStateChanged();
});

customWidthEl.addEventListener('input', () => {
  state.customWidth = parseInt(customWidthEl.value, 10) || 1080;
  onStateChanged();
});
customHeightEl.addEventListener('input', () => {
  state.customHeight = parseInt(customHeightEl.value, 10) || 2400;
  onStateChanged();
});

lockMarginEl.addEventListener('change', () => {
  state.lockMargin = lockMarginEl.checked;
  onStateChanged();
});

function setThemeOverride(field, value) {
  if (!state.themeOverrides[state.theme]) state.themeOverrides[state.theme] = {};
  state.themeOverrides[state.theme][field] = value;
  onStateChanged();
}

customBg1El.addEventListener('input', () => setThemeOverride('bg1', customBg1El.value));
customBg2El.addEventListener('input', () => setThemeOverride('bg2', customBg2El.value));
customHeaderEl.addEventListener('input', () => setThemeOverride('header', customHeaderEl.value));
customMutedEl.addEventListener('input', () => setThemeOverride('muted', customMutedEl.value));

resetBtn.addEventListener('click', () => {
  if (!confirm('Reset all classes and settings?')) return;
  state = defaultState();
  saveState();
  initControlsFromState();
  drawCanvas();
});

downloadBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.download = 'timetable-wallpaper.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
});

function initControlsFromState() {
  resolutionSelectEl.value = state.resolution;
  customResEl.classList.toggle('hidden', state.resolution !== 'custom');
  customWidthEl.value = state.customWidth;
  customHeightEl.value = state.customHeight;
  lockMarginEl.checked = state.lockMargin;
  showTitleEl.checked = state.showTitle;
  showRoomEl.checked = state.showRoom;
  showProfessorEl.checked = state.showProfessor;
  tzEnabledEl.checked = state.tzEnabled;
  tzOptionsEl.classList.toggle('hidden', !state.tzEnabled);
  populateTimeZoneSelect(schoolTzEl, state.schoolTz);
  populateTimeZoneSelect(homeTzEl, state.homeTz);
  updateTzInfo();
  renderDayToggles();
  renderThemeToggles();
  updateCustomColorInputs();
  renderCourseList();
  initCatalogUi();
}

// ---------- Canvas drawing ----------

function getResolution() {
  if (state.resolution === 'custom') {
    return { w: state.customWidth || 1080, h: state.customHeight || 2400 };
  }
  const [w, h] = state.resolution.split('x').map(Number);
  return { w, h };
}

function roundRect(c, x, y, w, h, r) {
  r = Math.min(r, w / 2, h / 2);
  c.beginPath();
  c.moveTo(x + r, y);
  c.arcTo(x + w, y, x + w, y + h, r);
  c.arcTo(x + w, y + h, x, y + h, r);
  c.arcTo(x, y + h, x, y, r);
  c.arcTo(x, y, x + w, y, r);
  c.closePath();
}

function fitFontSize(c, text, maxWidth, startSize, minSize, weight) {
  let size = startSize;
  while (size > minSize) {
    c.font = `${weight} ${size}px 'Apple SD Gothic Neo','Malgun Gothic','Noto Sans KR',sans-serif`;
    if (c.measureText(text).width <= maxWidth) break;
    size -= 1;
  }
  return size;
}

function truncateToWidth(c, text, maxWidth) {
  if (c.measureText(text).width <= maxWidth) return text;
  let lo = 0;
  let hi = text.length;
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    if (c.measureText(text.slice(0, mid) + '…').width <= maxWidth) lo = mid;
    else hi = mid - 1;
  }
  return lo > 0 ? text.slice(0, lo) + '…' : '';
}

// Build the courses/days that actually get drawn. Source data (state.courses,
// state.days) always stays in school-local time; when a different home time zone
// is picked we shift a copy of every class into that zone here, rolling classes
// onto another weekday and splitting them at midnight when the offset pushes them
// across a day boundary.
function getRenderModel() {
  const shift = getTimeZoneShift();
  if (!shift) {
    return { shift: 0, days: state.days.slice(), courses: state.courses.slice() };
  }

  const courses = [];
  state.courses.forEach((course) => {
    const dayIdx = ALL_DAYS.indexOf(course.day);
    if (dayIdx < 0 || !course.start || !course.end) {
      courses.push(Object.assign({}, course));
      return;
    }
    const s = parseTime(course.start) + shift;
    const e = parseTime(course.end) + shift;
    if (e <= s) return;

    const startDayOffset = Math.floor(s / MIN_PER_DAY);
    const endDayOffset = Math.floor((e - 1) / MIN_PER_DAY);
    const base = {
      name: course.name,
      title: course.title,
      location: course.location,
      professor: course.professor,
    };

    if (startDayOffset === endDayOffset) {
      courses.push(Object.assign({}, base, {
        id: course.id,
        day: ALL_DAYS[wrapDayIndex(dayIdx + startDayOffset)],
        start: minutesToHHMM(s - startDayOffset * MIN_PER_DAY),
        end: minutesToHHMM(e - startDayOffset * MIN_PER_DAY),
      }));
    } else {
      courses.push(Object.assign({}, base, {
        id: String(course.id) + '-a',
        day: ALL_DAYS[wrapDayIndex(dayIdx + startDayOffset)],
        start: minutesToHHMM(s - startDayOffset * MIN_PER_DAY),
        end: '24:00',
      }));
      courses.push(Object.assign({}, base, {
        id: String(course.id) + '-b',
        day: ALL_DAYS[wrapDayIndex(dayIdx + endDayOffset)],
        start: '00:00',
        end: minutesToHHMM(e - endDayOffset * MIN_PER_DAY),
      }));
    }
  });

  let days = ALL_DAYS.filter((d) => courses.some((c) => c.day === d && c.name && c.start && c.end));
  if (days.length === 0) return { shift, days: state.days.slice(), courses };
  return { shift, days: orderDaysForDisplay(days), courses };
}

// Rotate a set of weekdays so the week starts right after its largest empty
// stretch. After a time-zone shift the classes can wrap past Sunday, and this
// keeps the columns in a natural reading order (e.g. Fri, Sun, Mon instead of
// Mon, Fri, Sun) rather than always forcing Monday first.
function orderDaysForDisplay(dayList) {
  const idxs = dayList
    .map((d) => ALL_DAYS.indexOf(d))
    .filter((i) => i >= 0)
    .sort((a, b) => a - b);
  if (idxs.length <= 1) return idxs.map((i) => ALL_DAYS[i]);

  let bestStart = 0;
  let bestGap = -1;
  for (let k = 0; k < idxs.length; k++) {
    const gap = ((idxs[(k + 1) % idxs.length] - idxs[k] - 1) + 7) % 7;
    // >= so that on a tie we prefer the later gap, which keeps the week start
    // as close to Monday as the class spread allows.
    if (gap >= bestGap) {
      bestGap = gap;
      bestStart = (k + 1) % idxs.length;
    }
  }
  const ordered = [];
  for (let k = 0; k < idxs.length; k++) {
    ordered.push(ALL_DAYS[idxs[(bestStart + k) % idxs.length]]);
  }
  return ordered;
}

function updateTzInfo() {
  if (!state.tzEnabled) {
    tzInfoEl.textContent = '';
    dayToggleHintEl.classList.add('hidden');
    dayToggleHintEl.textContent = '';
    return;
  }
  const shift = getTimeZoneShift();
  if (shift === 0) {
    tzInfoEl.textContent = state.schoolTz === state.homeTz
      ? 'Pick a home time zone different from your school to shift the wallpaper into your local time.'
      : '';
    dayToggleHintEl.classList.add('hidden');
    dayToggleHintEl.textContent = '';
    return;
  }
  tzInfoEl.textContent = `Wallpaper shows your home time (${describeShift(shift)} from school). `
    + 'Classes that cross midnight move to the neighbouring weekday. '
    + "Based on today's date; daylight-saving changes during the term aren't applied.";
  dayToggleHintEl.textContent = 'While a home time zone is set, shown days follow where your classes land after the shift.';
  dayToggleHintEl.classList.remove('hidden');
}

function getAxisRange(courses) {
  let minStart = 9 * 60;
  let maxEnd = 18 * 60;
  courses.forEach((c) => {
    if (!c.start || !c.end) return;
    const s = parseTime(c.start);
    const e = parseTime(c.end);
    if (s < minStart) minStart = s;
    if (e > maxEnd) maxEnd = e;
  });
  let axisStart = Math.floor(minStart / 60) * 60;
  let axisEnd = Math.ceil(maxEnd / 60) * 60;
  if (axisEnd <= axisStart) axisEnd = axisStart + 60;
  return { axisStart, axisEnd };
}

function drawCanvas() {
  const theme = getActiveTheme();
  const model = getRenderModel();
  const { w, h } = getResolution();
  canvas.width = w;
  canvas.height = h;

  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, theme.bg[0]);
  grad.addColorStop(1, theme.bg[1]);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  const days = model.days;
  const sideMargin = w * 0.06;
  const topMargin = state.lockMargin ? h * 0.34 : h * 0.12;
  const bottomMargin = h * 0.08;

  const cardX = sideMargin;
  const cardY = topMargin;
  const cardW = w - sideMargin * 2;
  const cardH = h - topMargin - bottomMargin;
  const cardRadius = w * 0.045;

  ctx.save();
  ctx.shadowColor = 'rgba(0,0,0,0.18)';
  ctx.shadowBlur = w * 0.03;
  ctx.shadowOffsetY = h * 0.005;
  roundRect(ctx, cardX, cardY, cardW, cardH, cardRadius);
  ctx.fillStyle = theme.card;
  ctx.fill();
  ctx.restore();

  ctx.save();
  roundRect(ctx, cardX, cardY, cardW, cardH, cardRadius);
  ctx.lineWidth = Math.max(1, w * 0.0015);
  ctx.strokeStyle = theme.cardBorder;
  ctx.stroke();
  ctx.restore();

  const timeColW = cardW * 0.09;
  const dayColW = (cardW - timeColW) / days.length;
  const headerH = cardH * 0.06;
  const headerLineY = cardY + headerH;
  const gridTopPad = cardH * 0.025;
  const gridBottomPad = cardRadius * 1.2;
  const gridTop = headerLineY + gridTopPad;
  const gridHeight = cardH - headerH - gridTopPad - gridBottomPad;

  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const headerFontSize = Math.min(headerH * 0.55, dayColW * 0.45);
  ctx.font = `700 ${headerFontSize}px 'Apple SD Gothic Neo','Malgun Gothic','Noto Sans KR',sans-serif`;
  ctx.fillStyle = theme.header;
  days.forEach((day, i) => {
    const cx = cardX + timeColW + dayColW * i + dayColW / 2;
    ctx.fillText(day.toUpperCase(), cx, cardY + headerH / 2);
  });

  ctx.beginPath();
  ctx.moveTo(cardX + cardW * 0.03, headerLineY);
  ctx.lineTo(cardX + cardW * 0.97, headerLineY);
  ctx.strokeStyle = theme.cardBorder;
  ctx.lineWidth = Math.max(1, w * 0.0015);
  ctx.stroke();

  const { axisStart, axisEnd } = getAxisRange(model.courses);
  const totalMinutes = axisEnd - axisStart;
  const hourCount = totalMinutes / 60;
  const hourStep = hourCount > 11 ? 2 : 1;

  ctx.lineWidth = Math.max(1, w * 0.001);
  for (let mins = axisStart; mins <= axisEnd; mins += 60) {
    const y = gridTop + ((mins - axisStart) / totalMinutes) * gridHeight;
    ctx.beginPath();
    ctx.moveTo(cardX + cardW * 0.03, y);
    ctx.lineTo(cardX + cardW * 0.97, y);
    ctx.strokeStyle = theme.cardBorder;
    ctx.stroke();

    if (((mins / 60) - (axisStart / 60)) % hourStep === 0) {
      const hour24 = Math.floor(mins / 60);
      const hour12 = hour24 % 12 === 0 ? 12 : hour24 % 12;
      const hourStr = String(hour12);
      const labelMaxWidth = timeColW * 0.62;
      const labelCap = Math.min(gridHeight * 0.02, timeColW * 0.4);
      const labelSize = fitFontSize(ctx, hourStr, labelMaxWidth, state.tzEnabled ? labelCap * 0.9 : labelCap, 10, '600');
      const fontStack = "'Apple SD Gothic Neo','Malgun Gothic','Noto Sans KR',sans-serif";
      const labelX = cardX + timeColW / 2;
      ctx.fillStyle = theme.muted;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      if (state.tzEnabled) {
        const meridiem = hour24 % 24 < 12 ? 'AM' : 'PM';
        const merSize = Math.max(7, labelSize * 0.58);
        ctx.font = `600 ${labelSize}px ${fontStack}`;
        ctx.fillText(hourStr, labelX, y - merSize * 0.5);
        ctx.font = `600 ${merSize}px ${fontStack}`;
        ctx.fillText(meridiem, labelX, y + labelSize * 0.5);
      } else {
        ctx.font = `600 ${labelSize}px ${fontStack}`;
        ctx.fillText(hourStr, labelX, y);
      }
    }
  }

  days.forEach((day, i) => {
    if (i === 0) return;
    const lineX = cardX + timeColW + dayColW * i;
    ctx.beginPath();
    ctx.moveTo(lineX, gridTop);
    ctx.lineTo(lineX, cardY + cardH - cardH * 0.01);
    ctx.strokeStyle = theme.cardBorder;
    ctx.stroke();
  });

  const blockPad = dayColW * 0.06;
  const vPad = Math.max(3, gridHeight * 0.004);
  const validCourses = model.courses.filter((c) => c.name && c.start && c.end && days.includes(c.day));

  validCourses.forEach((course) => {
    const dayIndex = days.indexOf(course.day);
    const s = parseTime(course.start);
    const e = parseTime(course.end);
    if (e <= s) return;
    const clampedS = Math.max(s, axisStart);
    const clampedE = Math.min(e, axisEnd);
    if (clampedE <= clampedS) return;

    const yTop = gridTop + ((clampedS - axisStart) / totalMinutes) * gridHeight + vPad;
    const yBottom = gridTop + ((clampedE - axisStart) / totalMinutes) * gridHeight - vPad;
    const blockH = Math.max(yBottom - yTop, gridHeight * 0.018);
    const blockX = cardX + timeColW + dayColW * dayIndex + blockPad;
    const blockW = dayColW - blockPad * 2;
    const accent = colorForName(course.name);
    const radius = Math.min(10, blockW * 0.15, blockH * 0.3);

    roundRect(ctx, blockX, yTop, blockW, blockH, radius);
    ctx.fillStyle = theme.blockBg;
    ctx.fill();

    const barW = Math.max(3, blockW * 0.06);
    roundRect(ctx, blockX, yTop, barW, blockH, Math.min(radius, barW / 2));
    ctx.fillStyle = accent;
    ctx.fill();

    const textX = blockX + barW + blockW * 0.08;
    const maxTextWidth = blockW - barW - blockW * 0.16;
    let cursorY = yTop + blockH * 0.14;

    ctx.textAlign = 'left';
    ctx.textBaseline = 'top';
    const nameSize = fitFontSize(ctx, course.name, maxTextWidth, Math.min(blockH * 0.32, dayColW * 0.2), 9, '700');
    ctx.font = `700 ${nameSize}px 'Apple SD Gothic Neo','Malgun Gothic','Noto Sans KR',sans-serif`;
    ctx.fillStyle = accent;
    ctx.fillText(truncateToWidth(ctx, course.name, maxTextWidth), textX, cursorY);
    cursorY += nameSize * 1.3;

    const detailParts = [
      state.showTitle && course.title,
      state.showRoom && course.location,
      state.showProfessor && course.professor,
    ].filter(Boolean);
    if (detailParts.length > 0) {
      const detailBaseSize = Math.max(11, Math.min(nameSize * 0.75, 22));
      detailParts.forEach((part) => {
        const detailSize = fitFontSize(ctx, part, maxTextWidth, detailBaseSize, 8, '500');
        if (cursorY + detailSize > yTop + blockH - blockH * 0.06) return;
        ctx.font = `500 ${detailSize}px 'Apple SD Gothic Neo','Malgun Gothic','Noto Sans KR',sans-serif`;
        ctx.fillStyle = theme.muted;
        ctx.fillText(truncateToWidth(ctx, part, maxTextWidth), textX, cursorY);
        cursorY += detailSize * 1.35;
      });
    }
  });

  if (validCourses.length === 0) {
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `500 ${cardW * 0.045}px 'Apple SD Gothic Neo','Malgun Gothic','Noto Sans KR',sans-serif`;
    ctx.fillStyle = theme.muted;
    ctx.fillText('Add a class to see it here', cardX + cardW / 2, gridTop + gridHeight / 2);
  }
}

// ---------- init ----------

initControlsFromState();
drawCanvas();
