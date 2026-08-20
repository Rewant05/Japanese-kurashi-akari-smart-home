"use client";

interface RoomProps {
  room: string;
  automations: string[];
  lifestyle: string;
}

export default function InteractiveRoom({ room, automations, lifestyle }: RoomProps) {
  const hasLighting = automations.includes("lighting");
  const hasTemperature = automations.includes("temperature");
  const hasSecurity = automations.includes("security");
  const hasAirQuality = automations.includes("air-quality");
  const hasCurtains = automations.includes("curtains");
  const hasEnergy = automations.includes("energy");

  const isSleep = lifestyle === "sleep";
  const isMorning = lifestyle === "morning";
  const isRelax = lifestyle === "relax";
  const isAway = lifestyle === "away";

  // Dynamic light level
  const lightLevel = isSleep ? 0.15 : isMorning ? 0.7 : isRelax ? 0.4 : isAway ? 0.05 : 0.6;
  const curtainOpen = hasCurtains ? (isSleep ? 0.1 : isMorning ? 0.95 : isRelax ? 0.5 : isAway ? 0.2 : 0.7) : 0.5;
  const tempValue = hasTemperature ? (isSleep ? 20 : isMorning ? 22 : isRelax ? 23 : 24) : 22;
  const lampColor = isSleep ? "#c4a35a33" : isRelax ? "#c4a35a66" : isMorning ? "#f5f0e8aa" : "#f5f0e888";

  // Room-specific elements
  const roomLabel = {
    living: "リビング",
    bedroom: "寝室",
    study: "書斎",
    entrance: "玄関",
    bathroom: "浴室",
  }[room] || "リビング";

  return (
    <div className="relative w-full aspect-[4/3] max-h-[420px] rounded-lg overflow-hidden bg-gradient-to-b from-[#2a2520] to-[#1e1c18]">
      {/* Room SVG */}
      <svg viewBox="0 0 800 600" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="floorGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3a3025" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2a2018" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3d3530" />
            <stop offset="100%" stopColor="#2a2520" />
          </linearGradient>
          <linearGradient id="windowLight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f5f0e8" stopOpacity={`${lightLevel * 0.3}`} />
            <stop offset="100%" stopColor="#f5f0e8" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={lampColor} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Back wall */}
        <rect x="50" y="50" width="700" height="300" fill="url(#wallGrad)" rx="2" />

        {/* Floor */}
        <polygon points="0,600 800,600 750,350 50,350" fill="url(#floorGrad)" />

        {/* Tatami lines on floor */}
        <line x1="100" y1="350" x2="50" y2="600" stroke="#c9b896" strokeOpacity="0.1" strokeWidth="1" />
        <line x1="300" y1="350" x2="250" y2="600" stroke="#c9b896" strokeOpacity="0.1" strokeWidth="1" />
        <line x1="500" y1="350" x2="550" y2="600" stroke="#c9b896" strokeOpacity="0.1" strokeWidth="1" />
        <line x1="700" y1="350" x2="750" y2="600" stroke="#c9b896" strokeOpacity="0.1" strokeWidth="1" />

        {/* Left wall perspective */}
        <polygon points="0,30 50,50 50,350 0,600" fill="#2a2520" opacity="0.5" />

        {/* Right wall perspective */}
        <polygon points="800,30 750,50 750,350 800,600" fill="#2a2520" opacity="0.5" />

        {/* Window frame */}
        <rect x="480" y="80" width="220" height="230" fill="none" stroke="#8b6f47" strokeWidth="3" rx="1"
          style={{ transition: "all 0.6s ease" }} />

        {/* Window interior (sky) */}
        <rect x="483" y="83" width="214" height="224" fill="#1a1a2a"
          style={{ transition: "all 0.6s ease" }} />

        {/* Window daylight glow */}
        <rect x="483" y="83" width="214" height="224"
          fill="#f5f0e8"
          opacity={lightLevel * 0.25}
          style={{ transition: "opacity 0.8s ease" }} />

        {/* Shoji grid on window */}
        <line x1="590" y1="83" x2="590" y2="307" stroke="#8b6f47" strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="483" y1="157" x2="697" y2="157" stroke="#8b6f47" strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="483" y1="231" x2="697" y2="231" stroke="#8b6f47" strokeWidth="1.5" strokeOpacity="0.6" />

        {/* Curtains */}
        {hasCurtains && (
          <>
            {/* Left curtain */}
            <rect x="480" y="75" width={220 * (1 - curtainOpen) * 0.5} height="240"
              fill="#e8e0d4" opacity="0.3" rx="1"
              style={{ transition: "width 0.8s ease" }} />
            {/* Right curtain */}
            <rect
              x={700 - 220 * (1 - curtainOpen) * 0.5} y="75"
              width={220 * (1 - curtainOpen) * 0.5} height="240"
              fill="#e8e0d4" opacity="0.3" rx="1"
              style={{ transition: "all 0.8s ease" }} />
          </>
        )}

        {/* Light rays from window */}
        <polygon
          points="483,307 697,307 800,600 350,600"
          fill="url(#windowLight)"
          style={{ transition: "opacity 0.8s ease" }}
        />

        {/* Lamp */}
        {hasLighting && (
          <g style={{ transition: "opacity 0.6s ease" }}>
            {/* Lamp base */}
            <rect x="145" y="310" width="10" height="40" fill="#5a4530" rx="2" />
            <rect x="135" y="340" width="30" height="6" fill="#5a4530" rx="1" />
            {/* Lamp shade */}
            <polygon points="125,280 175,280 165,310 135,310" fill="#c9b896" opacity="0.6" />
            {/* Lamp glow */}
            <circle cx="150" cy="295" r={60 * lightLevel} fill="url(#lampGlow)"
              style={{ transition: "r 0.8s ease" }}>
              <animate attributeName="opacity" values={`${lightLevel * 0.8};${lightLevel};${lightLevel * 0.8}`}
                dur="4s" repeatCount="indefinite" />
            </circle>
            {/* Lamp light bulb */}
            <circle cx="150" cy="295" r="4" fill={lampColor}
              style={{ transition: "fill 0.8s ease" }} />
          </g>
        )}

        {/* Smart thermostat on wall */}
        {hasTemperature && (
          <g>
            <rect x="320" y="160" width="40" height="50" fill="#2a2a2a" rx="4"
              stroke="#4a4a4a" strokeWidth="1" />
            <text x="340" y="182" textAnchor="middle" fill="#4a8ec2" fontSize="12"
              fontFamily="monospace" style={{ transition: "fill 0.6s ease" }}>
              {tempValue}°
            </text>
            <circle cx="340" cy="198" r="3" fill="#4a8ec2" opacity="0.6">
              <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite" />
            </circle>
          </g>
        )}

        {/* Smart speaker */}
        <g>
          <ellipse cx="620" cy="345" rx="25" ry="8" fill="#2a2a2a" />
          <rect x="600" y="320" width="40" height="25" fill="#3d3d3d" rx="4" />
          <ellipse cx="620" cy="320" rx="20" ry="6" fill="#4a4a4a" />
          {/* Status light */}
          <circle cx="620" cy="332" r="2" fill={isAway ? "#666" : "#4a8ec2"} opacity="0.8">
            {!isAway && (
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
            )}
          </circle>
        </g>

        {/* Air purifier */}
        {hasAirQuality && (
          <g style={{ transition: "opacity 0.6s ease" }}>
            <rect x="80" y="290" width="35" height="55" fill="#e8e0d4" rx="3" opacity="0.8" />
            <rect x="88" y="300" width="19" height="30" fill="#3d3d3d" rx="2" />
            {/* Air flow particles */}
            {!isAway && (
              <>
                <circle cx="97" cy="296" r="1.5" fill="#7a9e7e" opacity="0.5">
                  <animate attributeName="cy" values="296;280;270" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.5;0.3;0" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="92" cy="296" r="1" fill="#7a9e7e" opacity="0.4">
                  <animate attributeName="cy" values="296;276;264" dur="3.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.4;0.2;0" dur="3.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="102" cy="296" r="1" fill="#7a9e7e" opacity="0.4">
                  <animate attributeName="cy" values="296;278;266" dur="4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.4;0.2;0" dur="4s" repeatCount="indefinite" />
                </circle>
              </>
            )}
          </g>
        )}

        {/* Security sensor */}
        {hasSecurity && (
          <g>
            {/* Door frame */}
            <rect x="200" y="150" width="80" height="200" fill="none" stroke="#5a4530" strokeWidth="2" />
            <rect x="204" y="154" width="72" height="192" fill="#2a2520" opacity="0.5" />
            {/* Sensor on door frame */}
            <rect x="278" y="165" width="12" height="8" fill="#2a2a2a" rx="2" />
            <circle cx="284" cy="169" r="2"
              fill={isAway ? "#ef4444" : "#7a9e7e"}
              opacity="0.8">
              <animate attributeName="opacity" values="0.5;1;0.5" dur={isAway ? "1s" : "3s"} repeatCount="indefinite" />
            </circle>
          </g>
        )}

        {/* Energy monitor indicator */}
        {hasEnergy && (
          <g>
            <rect x="730" y="160" width="14" height="20" fill="#2a2a2a" rx="2" stroke="#4a4a4a" strokeWidth="0.5" />
            <rect x="733" y="163" width="8" height="6" fill="#7a9e7e" opacity="0.6">
              <animate attributeName="opacity" values="0.4;0.7;0.4" dur="2s" repeatCount="indefinite" />
            </rect>
            <rect x="733" y="172" width="8" height="2" fill="#c4a35a" opacity="0.4" />
          </g>
        )}

        {/* Room label */}
        <text x="400" y="560" textAnchor="middle" fill="#f5f0e8" fontSize="14" opacity="0.3"
          fontFamily="'Noto Sans JP', sans-serif">
          {roomLabel}
        </text>
      </svg>

      {/* Overlay lighting effect */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-800"
        style={{
          background: `radial-gradient(ellipse at 60% 30%, rgba(245,240,232,${lightLevel * 0.06}) 0%, transparent 70%)`,
        }}
      />

      {/* Status indicators */}
      <div className="absolute top-3 right-3 flex flex-col gap-1.5">
        {hasLighting && (
          <div className="flex items-center gap-1.5 glass-dark rounded-full px-2.5 py-1 text-[10px] text-warm-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-amber" style={{ boxShadow: `0 0 4px ${lampColor}` }} />
            照明
          </div>
        )}
        {hasTemperature && (
          <div className="flex items-center gap-1.5 glass-dark rounded-full px-2.5 py-1 text-[10px] text-warm-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
            {tempValue}度
          </div>
        )}
        {hasSecurity && (
          <div className="flex items-center gap-1.5 glass-dark rounded-full px-2.5 py-1 text-[10px] text-warm-white/70">
            <span className={`w-1.5 h-1.5 rounded-full ${isAway ? "bg-red-400" : "bg-muted-green"}`} />
            {isAway ? "警備中" : "安全"}
          </div>
        )}
      </div>
    </div>
  );
}
