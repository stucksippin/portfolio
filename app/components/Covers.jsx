export function FumakeCover() {
    return (
        <svg width="300" height="260" viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="260" rx="8" fill="#1a1a2e" />
            {/* sofa shape */}
            <rect x="40" y="140" width="220" height="60" rx="6" fill="none" stroke="#8C61C0" strokeWidth="1.5" />
            <rect x="40" y="130" width="40" height="70" rx="6" fill="none" stroke="#8C61C0" strokeWidth="1.5" />
            <rect x="220" y="130" width="40" height="70" rx="6" fill="none" stroke="#8C61C0" strokeWidth="1.5" />
            <rect x="55" y="200" width="20" height="20" rx="3" fill="none" stroke="#8C61C0" strokeWidth="1" opacity="0.5" />
            <rect x="225" y="200" width="20" height="20" rx="3" fill="none" stroke="#8C61C0" strokeWidth="1" opacity="0.5" />
            {/* 3d lines */}
            <line x1="40" y1="140" x2="20" y2="120" stroke="#8C61C0" strokeWidth="0.5" opacity="0.4" />
            <line x1="260" y1="140" x2="280" y2="120" stroke="#8C61C0" strokeWidth="0.5" opacity="0.4" />
            <line x1="20" y1="120" x2="280" y2="120" stroke="#8C61C0" strokeWidth="0.5" opacity="0.4" />
            {/* price tag */}
            <rect x="110" y="60" width="80" height="30" rx="4" fill="none" stroke="#8C61C0" strokeWidth="1" opacity="0.7" />
            <text x="150" y="80" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="#8C61C0">$1 299</text>
            <text x="150" y="240" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#8C61C0" letterSpacing="1">FUMAKE</text>
        </svg>
    )
}

export function TaskHiveCover() {
    return (
        <svg width="300" height="260" viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="260" rx="8" fill="#1a1a2e" />
            {/* calendar grid */}
            <rect x="50" y="50" width="200" height="160" rx="6" fill="none" stroke="#8C61C0" strokeWidth="1" />
            <rect x="50" y="50" width="200" height="30" rx="6" fill="#8C61C0" opacity="0.15" />
            {/* grid lines */}
            <line x1="50" y1="80" x2="250" y2="80" stroke="#8C61C0" strokeWidth="0.5" opacity="0.4" />
            <line x1="50" y1="110" x2="250" y2="110" stroke="#8C61C0" strokeWidth="0.5" opacity="0.3" />
            <line x1="50" y1="140" x2="250" y2="140" stroke="#8C61C0" strokeWidth="0.5" opacity="0.3" />
            <line x1="50" y1="170" x2="250" y2="170" stroke="#8C61C0" strokeWidth="0.5" opacity="0.3" />
            <line x1="107" y1="80" x2="107" y2="210" stroke="#8C61C0" strokeWidth="0.5" opacity="0.3" />
            <line x1="164" y1="80" x2="164" y2="210" stroke="#8C61C0" strokeWidth="0.5" opacity="0.3" />
            <line x1="221" y1="80" x2="221" y2="210" stroke="#8C61C0" strokeWidth="0.5" opacity="0.3" />
            {/* tasks */}
            <rect x="58" y="88" width="40" height="12" rx="2" fill="#8C61C0" opacity="0.6" />
            <rect x="115" y="118" width="80" height="12" rx="2" fill="#8C61C0" opacity="0.4" />
            <rect x="58" y="148" width="55" height="12" rx="2" fill="#8C61C0" opacity="0.3" />
            <rect x="172" y="88" width="70" height="12" rx="2" fill="#8C61C0" opacity="0.5" />
            <text x="150" y="240" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#8C61C0" letterSpacing="1">TASK HIVE</text>
        </svg>
    )
}

export function DiplomCover() {
    return (
        <svg width="300" height="260" viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="260" rx="8" fill="#1a1a2e" />
            {/* document */}
            <rect x="90" y="40" width="120" height="150" rx="4" fill="none" stroke="#8C61C0" strokeWidth="1.5" />
            <rect x="105" y="60" width="90" height="3" rx="2" fill="#8C61C0" opacity="0.5" />
            <rect x="105" y="74" width="70" height="3" rx="2" fill="#8C61C0" opacity="0.3" />
            <rect x="105" y="88" width="80" height="3" rx="2" fill="#8C61C0" opacity="0.3" />
            <rect x="105" y="102" width="60" height="3" rx="2" fill="#8C61C0" opacity="0.3" />
            {/* checkmark circle */}
            <circle cx="150" cy="155" r="22" fill="none" stroke="#8C61C0" strokeWidth="1.5" />
            <path d="M139 155 L147 163 L163 147" fill="none" stroke="#8C61C0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {/* flow arrows */}
            <circle cx="60" cy="100" r="16" fill="none" stroke="#8C61C0" strokeWidth="1" opacity="0.5" />
            <text x="60" y="105" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#8C61C0" opacity="0.7">студ</text>
            <line x1="76" y1="100" x2="90" y2="100" stroke="#8C61C0" strokeWidth="0.5" opacity="0.5" />
            <circle cx="240" cy="100" r="16" fill="none" stroke="#8C61C0" strokeWidth="1" opacity="0.5" />
            <text x="240" y="105" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#8C61C0" opacity="0.7">преп</text>
            <line x1="210" y1="100" x2="224" y2="100" stroke="#8C61C0" strokeWidth="0.5" opacity="0.5" />
            <text x="150" y="240" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#8C61C0" letterSpacing="1">ДИПЛОМПОРТАЛ</text>
        </svg>
    )
}

export function WarehouseCover() {
    return (
        <svg width="300" height="260" viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="260" rx="8" fill="#1a1a2e" />
            {/* shelves */}
            <rect x="40" y="180" width="220" height="3" rx="1" fill="#8C61C0" opacity="0.5" />
            <rect x="40" y="130" width="220" height="3" rx="1" fill="#8C61C0" opacity="0.5" />
            <rect x="40" y="80" width="220" height="3" rx="1" fill="#8C61C0" opacity="0.5" />
            <rect x="40" y="80" width="3" height="103" fill="#8C61C0" opacity="0.3" />
            <rect x="257" y="80" width="3" height="103" fill="#8C61C0" opacity="0.3" />
            {/* boxes on shelves */}
            <rect x="55" y="143" width="28" height="34" rx="2" fill="none" stroke="#8C61C0" strokeWidth="1" opacity="0.7" />
            <rect x="93" y="148" width="28" height="29" rx="2" fill="none" stroke="#8C61C0" strokeWidth="1" opacity="0.5" />
            <rect x="131" y="143" width="28" height="34" rx="2" fill="none" stroke="#8C61C0" strokeWidth="1" opacity="0.8" />
            <rect x="169" y="150" width="28" height="27" rx="2" fill="none" stroke="#8C61C0" strokeWidth="1" opacity="0.4" />
            <rect x="207" y="143" width="28" height="34" rx="2" fill="none" stroke="#8C61C0" strokeWidth="1" opacity="0.6" />
            <rect x="55" y="93" width="28" height="34" rx="2" fill="none" stroke="#8C61C0" strokeWidth="1" opacity="0.5" />
            <rect x="131" y="93" width="28" height="34" rx="2" fill="none" stroke="#8C61C0" strokeWidth="1" opacity="0.6" />
            <rect x="207" y="93" width="28" height="34" rx="2" fill="none" stroke="#8C61C0" strokeWidth="1" opacity="0.4" />
            {/* chart line */}
            <polyline points="55,55 90,45 130,50 170,35 210,40 245,30" fill="none" stroke="#8C61C0" strokeWidth="1.5" opacity="0.7" />
            <text x="150" y="240" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#8C61C0" letterSpacing="1">СКЛАД</text>
        </svg>
    )
}

export function SupCover() {
    return (
        <svg width="300" height="260" viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="260" rx="8" fill="#1a1a2e" />
            {/* kanban columns */}
            <rect x="30" y="50" width="70" height="140" rx="4" fill="none" stroke="#8C61C0" strokeWidth="0.5" opacity="0.4" />
            <rect x="115" y="50" width="70" height="140" rx="4" fill="none" stroke="#8C61C0" strokeWidth="0.5" opacity="0.4" />
            <rect x="200" y="50" width="70" height="140" rx="4" fill="none" stroke="#8C61C0" strokeWidth="0.5" opacity="0.4" />
            {/* column headers */}
            <rect x="30" y="50" width="70" height="22" rx="4" fill="#8C61C0" opacity="0.2" />
            <rect x="115" y="50" width="70" height="22" rx="4" fill="#8C61C0" opacity="0.2" />
            <rect x="200" y="50" width="70" height="22" rx="4" fill="#8C61C0" opacity="0.2" />
            <text x="65" y="65" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#8C61C0">TODO</text>
            <text x="150" y="65" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#8C61C0">В РАБОТЕ</text>
            <text x="235" y="65" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#8C61C0">ГОТОВО</text>
            {/* cards */}
            <rect x="38" y="82" width="54" height="28" rx="3" fill="none" stroke="#8C61C0" strokeWidth="1" opacity="0.7" />
            <rect x="38" y="118" width="54" height="28" rx="3" fill="none" stroke="#8C61C0" strokeWidth="1" opacity="0.5" />
            <rect x="38" y="154" width="54" height="28" rx="3" fill="none" stroke="#8C61C0" strokeWidth="1" opacity="0.4" />
            <rect x="123" y="82" width="54" height="28" rx="3" fill="#8C61C0" opacity="0.2" stroke="#8C61C0" strokeWidth="1" />
            <rect x="123" y="118" width="54" height="28" rx="3" fill="#8C61C0" opacity="0.15" stroke="#8C61C0" strokeWidth="1" />
            <rect x="208" y="82" width="54" height="28" rx="3" fill="none" stroke="#8C61C0" strokeWidth="1" opacity="0.6" />
            <rect x="208" y="118" width="54" height="28" rx="3" fill="none" stroke="#8C61C0" strokeWidth="1" opacity="0.4" />
            <rect x="208" y="154" width="54" height="28" rx="3" fill="none" stroke="#8C61C0" strokeWidth="1" opacity="0.3" />
            <text x="150" y="240" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#8C61C0" letterSpacing="1">СУП</text>
        </svg>
    )
}

export function ManchiniCover() {
    return (
        <svg width="300" height="260" viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="260" rx="8" fill="#1a1a2e" />
            {/* map grid */}
            <rect x="40" y="40" width="220" height="160" rx="6" fill="none" stroke="#8C61C0" strokeWidth="1" opacity="0.5" />
            <line x1="40" y1="90" x2="260" y2="90" stroke="#8C61C0" strokeWidth="0.5" opacity="0.2" />
            <line x1="40" y1="140" x2="260" y2="140" stroke="#8C61C0" strokeWidth="0.5" opacity="0.2" />
            <line x1="110" y1="40" x2="110" y2="200" stroke="#8C61C0" strokeWidth="0.5" opacity="0.2" />
            <line x1="190" y1="40" x2="190" y2="200" stroke="#8C61C0" strokeWidth="0.5" opacity="0.2" />
            {/* blocks representing buildings */}
            <rect x="55" y="55" width="40" height="25" rx="2" fill="#8C61C0" opacity="0.2" stroke="#8C61C0" strokeWidth="0.5" />
            <rect x="120" y="105" width="55" height="25" rx="2" fill="#8C61C0" opacity="0.15" stroke="#8C61C0" strokeWidth="0.5" />
            <rect x="200" y="55" width="45" height="20" rx="2" fill="#8C61C0" opacity="0.2" stroke="#8C61C0" strokeWidth="0.5" />
            <rect x="55" y="150" width="35" height="30" rx="2" fill="#8C61C0" opacity="0.15" stroke="#8C61C0" strokeWidth="0.5" />
            {/* pin */}
            <circle cx="152" cy="105" r="8" fill="#8C61C0" opacity="0.9" />
            <path d="M152 113 L152 125" stroke="#8C61C0" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="152" cy="105" r="3" fill="#1a1a2e" />
            <text x="150" y="240" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#8C61C0" letterSpacing="1">MANCHINI</text>
        </svg>
    )
}

export function FarmingCover() {
    return (
        <svg width="300" height="260" viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="260" rx="8" fill="#1a1a2e" />
            {/* sun */}
            <circle cx="150" cy="80" r="25" fill="none" stroke="#8C61C0" strokeWidth="1.5" />
            <line x1="150" y1="45" x2="150" y2="38" stroke="#8C61C0" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="150" y1="115" x2="150" y2="122" stroke="#8C61C0" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="115" y1="80" x2="108" y2="80" stroke="#8C61C0" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="185" y1="80" x2="192" y2="80" stroke="#8C61C0" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="127" y1="57" x2="122" y2="52" stroke="#8C61C0" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="173" y1="103" x2="178" y2="108" stroke="#8C61C0" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="173" y1="57" x2="178" y2="52" stroke="#8C61C0" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="127" y1="103" x2="122" y2="108" stroke="#8C61C0" strokeWidth="1.5" strokeLinecap="round" />
            {/* ground */}
            <line x1="30" y1="160" x2="270" y2="160" stroke="#8C61C0" strokeWidth="1" opacity="0.5" />
            {/* plants */}
            <line x1="80" y1="160" x2="80" y2="130" stroke="#8C61C0" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
            <ellipse cx="80" cy="122" rx="14" ry="10" fill="none" stroke="#8C61C0" strokeWidth="1" opacity="0.7" />
            <line x1="150" y1="160" x2="150" y2="125" stroke="#8C61C0" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
            <ellipse cx="150" cy="115" rx="18" ry="12" fill="none" stroke="#8C61C0" strokeWidth="1" opacity="0.8" />
            <line x1="220" y1="160" x2="220" y2="132" stroke="#8C61C0" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            <ellipse cx="220" cy="124" rx="14" ry="10" fill="none" stroke="#8C61C0" strokeWidth="1" opacity="0.6" />
            {/* rows */}
            <line x1="40" y1="175" x2="260" y2="175" stroke="#8C61C0" strokeWidth="0.5" opacity="0.3" />
            <line x1="40" y1="188" x2="260" y2="188" stroke="#8C61C0" strokeWidth="0.5" opacity="0.2" />
            <text x="150" y="240" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#8C61C0" letterSpacing="1">FARMING</text>
        </svg>
    )
}

export function HasteCover() {
    return (
        <svg width="300" height="260" viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="260" rx="8" fill="#1a1a2e" />
            {/* phone frame */}
            <rect x="100" y="30" width="100" height="180" rx="14" fill="none" stroke="#8C61C0" strokeWidth="1.5" />
            <rect x="110" y="45" width="80" height="150" rx="4" fill="#8C61C0" opacity="0.05" />
            <circle cx="150" cy="38" r="4" fill="none" stroke="#8C61C0" strokeWidth="1" opacity="0.5" />
            <line x1="130" y1="215" x2="170" y2="215" stroke="#8C61C0" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
            {/* ui elements inside phone */}
            <rect x="115" y="55" width="70" height="16" rx="3" fill="#8C61C0" opacity="0.2" />
            <rect x="115" y="80" width="70" height="40" rx="3" fill="#8C61C0" opacity="0.1" stroke="#8C61C0" strokeWidth="0.5" />
            <rect x="115" y="128" width="32" height="32" rx="3" fill="#8C61C0" opacity="0.15" stroke="#8C61C0" strokeWidth="0.5" />
            <rect x="153" y="128" width="32" height="32" rx="3" fill="#8C61C0" opacity="0.1" stroke="#8C61C0" strokeWidth="0.5" />
            <rect x="115" y="168" width="70" height="10" rx="2" fill="#8C61C0" opacity="0.15" />
            <rect x="115" y="183" width="50" height="10" rx="2" fill="#8C61C0" opacity="0.1" />
            <text x="150" y="240" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#8C61C0" letterSpacing="1">HASTE</text>
        </svg>
    )
}