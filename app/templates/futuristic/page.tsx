'use client';

import { useState } from 'react';

const brandColors = [
  { name: 'Brand', value: '#00F5FF', token: '--color-brand', textColor: '#0A0A0F' },
  { name: 'Brand Hover', value: '#00D4E5', token: '--color-brand-hover', textColor: '#0A0A0F' },
  { name: 'Brand Soft', value: 'rgba(0, 245, 255, 0.2)', token: '--color-brand-soft', textColor: '#00F5FF' },
];

const neonColors = [
  { name: 'Neon Cyan', value: '#00F5FF', token: '--color-brand', textColor: '#0A0A0F' },
  { name: 'Neon Pink', value: '#FF00FF', token: '--color-neon-pink', textColor: '#FFFFFF' },
  { name: 'Neon Green', value: '#00FF88', token: '--color-neon-green', textColor: '#0A0A0F' },
  { name: 'Neon Yellow', value: '#FFFF00', token: '--color-neon-yellow', textColor: '#0A0A0F' },
  { name: 'Neon Orange', value: '#FF6600', token: '--color-neon-orange', textColor: '#FFFFFF' },
];

const combinationSets = [
  {
    name: 'Cyberpunk Basic',
    description: '사이버펑크 기본 조합',
    colors: [
      { name: 'Background', value: '#0A0A0F' },
      { name: 'Surface', value: '#1A1A2E' },
      { name: 'Primary', value: '#00F5FF' },
      { name: 'Text', value: '#E0E0E0' },
      { name: 'Border', value: '#2A2A3E' },
    ],
  },
  {
    name: 'Neon Gradient',
    description: '네온 그라데이션 스펙트럼',
    colors: [
      { name: 'Cyan', value: '#00F5FF' },
      { name: 'Blue', value: '#0066FF' },
      { name: 'Purple', value: '#9900FF' },
      { name: 'Pink', value: '#FF00FF' },
      { name: 'Red', value: '#FF0066' },
    ],
  },
  {
    name: 'Data Visual',
    description: '데이터 시각화 컬러',
    colors: [
      { name: 'Primary', value: '#00F5FF' },
      { name: 'Success', value: '#00FF88' },
      { name: 'Warning', value: '#FFFF00' },
      { name: 'Danger', value: '#FF4444' },
      { name: 'Info', value: '#FF00FF' },
    ],
  },
];

const contentColors = [
  { name: 'Highlight', value: '#FFFFFF', token: '--content-highlight' },
  { name: 'Primary', value: '#E0E0E0', token: '--content-primary' },
  { name: 'Subtle', value: '#A0A0A0', token: '--content-subtle' },
  { name: 'Muted', value: '#606060', token: '--content-muted' },
  { name: 'Inverse', value: '#0A0A0F', token: '--content-inverse' },
];

const borderColors = [
  { name: 'Subtle', value: '#2A2A3E', token: '--border-subtle' },
  { name: 'Strong', value: '#3A3A5E', token: '--border-strong' },
  { name: 'Neon', value: '#00F5FF', token: '--border-neon' },
];

const statusColors = [
  { name: 'Error', value: '#FF4444', soft: '#441111', token: '--color-error' },
  { name: 'Success', value: '#00FF88', soft: '#114422', token: '--color-success' },
  { name: 'Info', value: '#00F5FF', soft: '#112233', token: '--color-info' },
];

const shadowTokens = [
  { name: 'Glow Subtle', value: '0 0 10px rgba(0, 245, 255, 0.3)' },
  { name: 'Glow Default', value: '0 0 20px #00F5FF, 0 0 40px rgba(0, 245, 255, 0.3)' },
  { name: 'Glow Strong', value: '0 0 30px #00F5FF, 0 0 60px rgba(0, 245, 255, 0.4)' },
];

const typographyTokens = [
  { name: 'Display', size: '24px', weight: '800', lineHeight: '36px' },
  { name: 'Heading', size: '20px', weight: '700', lineHeight: '30px' },
  { name: 'Label L', size: '16px', weight: '600', lineHeight: '24px' },
  { name: 'Label M', size: '14px', weight: '500', lineHeight: '21px' },
  { name: 'Body L', size: '16px', weight: '400', lineHeight: '24px' },
  { name: 'Body R', size: '14px', weight: '400', lineHeight: '21px' },
];

const prompt = `## 디자인 철학

- **네온 컬러와 다크 배경이 SF 분위기를 만든다.** 사이버펑크 무드
- **글로우 효과가 에너지와 미래적 느낌을 더한다.** 빛나는 요소들
- **기하학적 형태와 날카로운 각도가 첨단 기술 느낌.** 곡선보다 직선
- **높은 대비가 디지털, 테크 지향적 미학.** 선명하고 강렬하게

## UX 원칙

- 어두운 배경에서 네온 컬러가 시선을 이끌도록
- 글로우 효과는 인터랙티브 요소에 집중 사용
- 기술적이면서도 사용하기 어렵지 않게
- 애니메이션은 빠르고 샤프하게

## 컬러

### Brand
- Primary: \`#00F5FF\` (Cyan/Neon) - CTA, 강조 요소
- Primary Hover: \`#00D4E5\` (Slightly darker cyan)

### Background
- Primary: \`#0A0A0F\` (Very Dark)
- Secondary: \`#1A1A2E\` (Dark Blue)
- Tertiary: \`#16162A\` (Dark Purple)

### Content (Text)
- Highlight: \`#FFFFFF\` - 제목, 강조 텍스트
- Primary: \`#E0E0E0\` - 본문 텍스트
- Subtle: \`#A0A0A0\` - 보조 텍스트
- Muted: \`#606060\` - 비활성 텍스트

### Accent Colors
- Neon Pink: \`#FF00FF\`
- Neon Green: \`#00FF88\`
- Neon Yellow: \`#FFFF00\`
- Neon Orange: \`#FF6600\`

## 사이즈

### Spacing
- 요소 내부: \`12px\`
- 요소 간격: \`16px\`
- 섹션 간격: \`40px\`

### Border Radius
- 버튼/인풋: \`4px\` (날카롭게)
- 카드: \`8px\`
- 배지: \`2px\`

### Glow Effects
\`\`\`css
/* Cyan Glow */
box-shadow: 0 0 20px #00F5FF, 0 0 40px rgba(0, 245, 255, 0.3);

/* Text Glow */
text-shadow: 0 0 10px #00F5FF, 0 0 20px rgba(0, 245, 255, 0.5);
\`\`\`

## 적용 가이드

이 가이드는 기본 지침이며, 앱의 특성과 성격에 따라 유연하게 조정하세요:
- **웹 vs 모바일**: 모바일은 터치 타겟 48px 이상, 대중적인 디바이스의 기준을 따른다.
- **정보 밀도**: 대시보드는 적당히 촘촘하게, 랜딩/마케팅은 여유롭게
- **브랜드 톤**: 친근함은 컬러를 조금 더 사용하고, 신뢰감은 화이트 위주 + 포인트 컬러는 적게
→ 컬러와 디자인 철학은 유지하되, 사이즈/간격/컬러 사용량은 상황에 맞게 조정`;

export default function FuturisticTemplatePage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const copyToClipboard = (text: string, id?: string) => {
    navigator.clipboard.writeText(text);
    if (id) {
      setCopiedColor(id);
      setTimeout(() => setCopiedColor(null), 1500);
    } else {
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 1500);
    }
  };

  const handleDownload = (type: 'md' | 'css') => {
    const filename = type === 'md' ? 'futuristic.md' : 'futuristic-tokens.css';
    const link = document.createElement('a');
    link.href = `/downloads/${filename}`;
    link.download = filename;
    link.click();
  };

  return (
    <div>
      <h1 className="page-title">Futuristic</h1>
      <p className="page-description">
        네온 사이언과 다크 배경의 사이버펑크 스타일 디자인 시스템입니다. 글로우 효과와 높은 대비가 특징입니다.
      </p>

      {/* 다운로드 버튼 */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
        <button
          onClick={() => handleDownload('md')}
          style={{
            height: '52px',
            padding: '0 16px 0 8px',
            background: '#FFFFFF',
            border: '1px solid #E4E4E7',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '14px',
            fontWeight: 500,
            color: '#3F4146',
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = '#FF6900'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E4E4E7'}
        >
          <span style={{
            width: '36px',
            height: '36px',
            background: '#F4F4F5',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: 700,
            color: '#71717A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>MD</span>
          디자인 가이드 다운로드
        </button>
        <button
          onClick={() => handleDownload('css')}
          style={{
            height: '52px',
            padding: '0 16px 0 8px',
            background: '#FFFFFF',
            border: '1px solid #E4E4E7',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            fontSize: '14px',
            fontWeight: 500,
            color: '#3F4146',
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = '#FF6900'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = '#E4E4E7'}
        >
          <span style={{
            width: '36px',
            height: '36px',
            background: '#F4F4F5',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: 700,
            color: '#71717A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>CSS</span>
          디자인 토큰 다운로드
        </button>
      </div>

      {/* Landing Page Sample */}
      <section>
        <h2 className="section-title">Landing Page Sample</h2>
        <div style={{
          borderRadius: '12px',
          border: '1px solid #E4E4E7',
          overflow: 'hidden',
          background: '#0A0A0F',
        }}>
          {/* Nav */}
          <nav
            style={{
              background: 'rgba(10, 10, 15, 0.95)',
              borderBottom: '1px solid #2A2A3E',
              padding: '0 32px',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backdropFilter: 'blur(8px)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
              <span
                style={{
                  fontSize: '20px',
                  fontWeight: '800',
                  color: '#00F5FF',
                  textShadow: '0 0 10px rgba(0, 245, 255, 0.5)',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                }}
              >
                NEXUS
              </span>
              <div style={{ display: 'flex', gap: '24px' }}>
                {['Systems', 'Protocol', 'Network', 'Docs'].map((item) => (
                  <span
                    key={item}
                    style={{
                      fontSize: '13px',
                      color: '#A0A0A0',
                      fontWeight: '500',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      cursor: 'pointer',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <span
                style={{
                  fontSize: '13px',
                  color: '#A0A0A0',
                  fontWeight: '500',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                Connect
              </span>
              <button
                style={{
                  background: '#00F5FF',
                  color: '#0A0A0F',
                  padding: '10px 20px',
                  borderRadius: '4px',
                  fontSize: '13px',
                  fontWeight: '600',
                  border: 'none',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  boxShadow: '0 0 15px rgba(0, 245, 255, 0.4)',
                }}
              >
                Launch App
              </button>
            </div>
          </nav>

          {/* Hero */}
          <section
            style={{
              padding: '100px 32px',
              background: 'linear-gradient(180deg, #0A0A0F 0%, #1A1A2E 100%)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Grid lines background effect */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
                  linear-gradient(rgba(0, 245, 255, 0.03) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 245, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
              }}
            />
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
              <span
                style={{
                  display: 'inline-block',
                  background: 'rgba(0, 245, 255, 0.1)',
                  color: '#00F5FF',
                  padding: '8px 20px',
                  borderRadius: '2px',
                  fontSize: '12px',
                  fontWeight: '600',
                  marginBottom: '32px',
                  border: '1px solid rgba(0, 245, 255, 0.3)',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                }}
              >
                Protocol V2.0 Now Live
              </span>
              <h1
                style={{
                  fontSize: '56px',
                  fontWeight: '800',
                  color: '#FFFFFF',
                  lineHeight: '1.1',
                  marginBottom: '24px',
                  textShadow: '0 0 40px rgba(0, 245, 255, 0.3)',
                }}
              >
                The Future of
                <br />
                <span
                  style={{
                    color: '#00F5FF',
                    textShadow: '0 0 30px rgba(0, 245, 255, 0.6)',
                  }}
                >
                  Digital Infrastructure
                </span>
              </h1>
              <p
                style={{
                  fontSize: '18px',
                  color: '#A0A0A0',
                  lineHeight: '1.6',
                  marginBottom: '48px',
                  maxWidth: '600px',
                  margin: '0 auto 48px',
                }}
              >
                Next-generation protocol for decentralized systems.
                Built for speed. Designed for scale.
              </p>
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                <button
                  style={{
                    background: '#00F5FF',
                    color: '#0A0A0F',
                    padding: '16px 40px',
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontWeight: '700',
                    border: 'none',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    boxShadow: '0 0 30px rgba(0, 245, 255, 0.5)',
                  }}
                >
                  Get Started
                </button>
                <button
                  style={{
                    background: 'transparent',
                    color: '#00F5FF',
                    padding: '16px 40px',
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontWeight: '600',
                    border: '1px solid #00F5FF',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    boxShadow: '0 0 15px rgba(0, 245, 255, 0.2)',
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section style={{ padding: '64px 32px', background: '#0A0A0F' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '24px',
                maxWidth: '1000px',
                margin: '0 auto',
              }}
            >
              {[
                { value: '10M+', label: 'Transactions', color: '#00F5FF' },
                { value: '0.01s', label: 'Latency', color: '#00FF88' },
                { value: '99.99%', label: 'Uptime', color: '#FF00FF' },
                { value: '500+', label: 'Nodes', color: '#FFFF00' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    textAlign: 'center',
                    padding: '24px',
                    background: '#1A1A2E',
                    borderRadius: '8px',
                    border: '1px solid #2A2A3E',
                  }}
                >
                  <div
                    style={{
                      fontSize: '32px',
                      fontWeight: '800',
                      color: stat.color,
                      textShadow: `0 0 20px ${stat.color}50`,
                      fontFamily: 'monospace',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontSize: '12px',
                      color: '#A0A0A0',
                      marginTop: '8px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Features */}
          <section style={{ padding: '64px 32px', background: '#1A1A2E' }}>
            <h2
              style={{
                fontSize: '28px',
                fontWeight: '700',
                color: '#FFFFFF',
                textAlign: 'center',
                marginBottom: '48px',
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
            >
              Core <span style={{ color: '#00F5FF' }}>Systems</span>
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
                maxWidth: '1000px',
                margin: '0 auto',
              }}
            >
              {[
                {
                  icon: 'LF',
                  title: 'Lightning Fast',
                  desc: 'Sub-millisecond execution with parallel processing',
                  color: '#00F5FF',
                },
                {
                  icon: 'QS',
                  title: 'Quantum Secure',
                  desc: 'Post-quantum cryptography for future-proof security',
                  color: '#FF00FF',
                },
                {
                  icon: 'GN',
                  title: 'Global Network',
                  desc: 'Distributed nodes across 50+ regions worldwide',
                  color: '#00FF88',
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  style={{
                    background: '#0A0A0F',
                    padding: '32px',
                    borderRadius: '8px',
                    border: '1px solid #2A2A3E',
                    transition: 'all 0.2s',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      background: feature.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '16px',
                      fontWeight: '700',
                      color: '#0A0A0F',
                      marginBottom: '16px',
                      boxShadow: `0 0 20px ${feature.color}`,
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#FFFFFF',
                      marginBottom: '8px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#A0A0A0', lineHeight: '1.6' }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section
            style={{
              padding: '80px 32px',
              background: '#0A0A0F',
              borderTop: '1px solid #2A2A3E',
            }}
          >
            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
              <h2
                style={{
                  fontSize: '32px',
                  fontWeight: '800',
                  color: '#FFFFFF',
                  marginBottom: '16px',
                }}
              >
                Ready to <span style={{ color: '#00F5FF', textShadow: '0 0 20px rgba(0, 245, 255, 0.5)' }}>Initialize</span>?
              </h2>
              <p style={{ fontSize: '16px', color: '#A0A0A0', marginBottom: '32px' }}>
                Join thousands of developers building on the future.
              </p>
              <button
                style={{
                  background: 'transparent',
                  color: '#00F5FF',
                  padding: '16px 48px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: '700',
                  border: '2px solid #00F5FF',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  boxShadow: '0 0 30px rgba(0, 245, 255, 0.3)',
                }}
              >
                Start Building
              </button>
            </div>
          </section>
        </div>
      </section>

      {/* Combination Palette */}
      <section>
        <h2 className="section-title">Combination Palette</h2>
        <p className="section-desc">네온 브랜드 컬러와 어울리는 추천 조합</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '60%' }}>
          {combinationSets.map((set) => (
            <div key={set.name}>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontWeight: 600, fontSize: '14px', color: '#E4E4E7' }}>{set.name}</span>
                <span style={{ marginLeft: '8px', fontSize: '13px', color: '#A1A1AA' }}>{set.description}</span>
              </div>
              <div style={{ display: 'flex', height: '64px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #E4E4E7' }}>
                {set.colors.map((color, idx) => (
                  <button
                    key={`${set.name}-${idx}`}
                    onClick={() => copyToClipboard(color.value, `${set.name}-${idx}`)}
                    style={{
                      flex: 1,
                      height: '100%',
                      background: color.value,
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: ['#0A0A0F', '#1A1A2E', '#2A2A3E', '#0066FF', '#9900FF', '#FF0066'].includes(color.value) ? '#FFFFFF' : '#0A0A0F',
                      fontSize: '11px',
                      fontWeight: 300,
                    }}
                    title={color.name}
                  >
                    {copiedColor === `${set.name}-${idx}` ? 'Copied!' : color.value}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prompt */}
      <section>
        <h2 className="section-title">Prompt</h2>
        <p className="section-desc">AI에게 바로 붙여넣을 수 있는 디자인 지침입니다.</p>
        <div style={{ position: 'relative' }}>
          <pre><code>{prompt}</code></pre>
          <button
            onClick={() => copyToClipboard(prompt)}
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
            }}
            className={`gds-button gds-button--sm ${copiedPrompt ? 'gds-button--primary' : 'gds-button--secondary'}`}
          >
            {copiedPrompt ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </section>

      {/* Design Tokens */}
      <section>
        <h2 className="section-title">Design Tokens</h2>

        <h3 className="subsection-title">Brand</h3>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
          {brandColors.map((color) => (
            <button
              key={color.token}
              onClick={() => copyToClipboard(color.value, color.token)}
              style={{
                width: '80px',
                height: '80px',
                background: color.value,
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '8px',
                color: color.textColor,
                fontSize: '11px',
                fontWeight: 300,
                boxShadow: '0 0 15px ' + color.value,
              }}
              title={color.name}
            >
              {copiedColor === color.token ? 'Copied!' : color.value}
            </button>
          ))}
        </div>

        <h3 className="subsection-title">Neon Accents</h3>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
          {neonColors.map((color) => (
            <button
              key={color.token}
              onClick={() => copyToClipboard(color.value, color.token)}
              style={{
                width: '80px',
                height: '80px',
                background: color.value,
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '8px',
                color: color.textColor,
                fontSize: '11px',
                fontWeight: 300,
                boxShadow: '0 0 15px ' + color.value,
              }}
              title={color.name}
            >
              {copiedColor === color.token ? 'Copied!' : color.value}
            </button>
          ))}
        </div>

        <h3 className="subsection-title">Content (Text)</h3>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
          {contentColors.map((color) => (
            <button
              key={color.token}
              onClick={() => copyToClipboard(color.value, color.token)}
              style={{
                width: '80px',
                height: '80px',
                background: color.value,
                border: color.value === '#FFFFFF' || color.value === '#E0E0E0' ? '1px solid #E4E4E7' : 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '8px',
                color: color.value === '#0A0A0F' || color.value === '#606060' ? '#FFFFFF' : '#0A0A0F',
                fontSize: '11px',
                fontWeight: 300,
              }}
              title={color.name}
            >
              {copiedColor === color.token ? 'Copied!' : color.value}
            </button>
          ))}
        </div>

        <h3 className="subsection-title">Border</h3>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
          {borderColors.map((color) => (
            <button
              key={color.token}
              onClick={() => copyToClipboard(color.value, color.token)}
              style={{
                width: '80px',
                height: '80px',
                background: color.value,
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '8px',
                color: color.value === '#00F5FF' ? '#0A0A0F' : '#FFFFFF',
                fontSize: '11px',
                fontWeight: 300,
                boxShadow: color.value === '#00F5FF' ? '0 0 15px ' + color.value : 'none',
              }}
              title={color.name}
            >
              {copiedColor === color.token ? 'Copied!' : color.value}
            </button>
          ))}
        </div>

        <h3 className="subsection-title">Status</h3>
        <div style={{ display: 'flex', gap: '24px', marginBottom: '24px' }}>
          {statusColors.map((color) => (
            <div key={color.token}>
              <div style={{ marginBottom: '8px', fontSize: '12px', fontWeight: 500, color: '#E4E4E7' }}>{color.name}</div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => copyToClipboard(color.value, color.token)}
                  style={{
                    width: '80px',
                    height: '80px',
                    background: color.value,
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    padding: '8px',
                    color: color.value === '#FFFF00' || color.value === '#00FF88' || color.value === '#00F5FF' ? '#0A0A0F' : '#FFFFFF',
                    fontSize: '11px',
                    fontWeight: 300,
                    boxShadow: '0 0 15px ' + color.value,
                  }}
                  title={color.value}
                >
                  {copiedColor === color.token ? 'Copied!' : color.value}
                </button>
                <button
                  onClick={() => copyToClipboard(color.soft, `${color.token}-soft`)}
                  style={{
                    width: '80px',
                    height: '80px',
                    background: color.soft,
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    padding: '8px',
                    color: '#FFFFFF',
                    fontSize: '11px',
                    fontWeight: 300,
                  }}
                  title={color.soft}
                >
                  {copiedColor === `${color.token}-soft` ? 'Copied!' : color.soft}
                </button>
              </div>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">Glow Effects</h3>
        <div className="shadow-grid">
          {shadowTokens.map((token) => (
            <div key={token.name} className="shadow-item">
              <div className="shadow-demo" style={{ boxShadow: token.value, background: '#0A0A0F' }} />
              <code className="shadow-label">{token.name}</code>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">Typography</h3>
        <div className="typography-scale">
          {typographyTokens.map((token) => (
            <div key={token.name} className="typography-item">
              <code className="typography-label">{token.name}</code>
              <span
                className="typography-sample"
                style={{
                  fontSize: token.size,
                  fontWeight: token.weight,
                  lineHeight: token.lineHeight,
                }}
              >
                가나다 ABC 123
              </span>
              <span className="spacing-value">{token.size} / {token.weight}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Components */}
      <section>
        <h2 className="section-title">Components</h2>
        <p className="section-desc">Futuristic 스타일이 적용된 컴포넌트 예시</p>

        <h3 className="subsection-title">Button</h3>
        <div className="card" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', background: '#1A1A2E', border: '1px solid #2A2A3E' }}>
          <button
            style={{
              background: '#00F5FF',
              color: '#0A0A0F',
              padding: '12px 24px',
              borderRadius: '4px',
              fontSize: '13px',
              fontWeight: '700',
              border: 'none',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              boxShadow: '0 0 20px rgba(0, 245, 255, 0.4)',
            }}
          >
            Primary
          </button>
          <button
            style={{
              background: 'transparent',
              color: '#00F5FF',
              padding: '12px 24px',
              borderRadius: '4px',
              fontSize: '13px',
              fontWeight: '600',
              border: '1px solid #00F5FF',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              boxShadow: '0 0 10px rgba(0, 245, 255, 0.2)',
            }}
          >
            Outline
          </button>
          <button
            style={{
              background: '#2A2A3E',
              color: '#A0A0A0',
              padding: '12px 24px',
              borderRadius: '4px',
              fontSize: '13px',
              fontWeight: '600',
              border: '1px solid #3A3A5E',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            Ghost
          </button>
        </div>

        <h3 className="subsection-title">Input</h3>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '320px', background: '#1A1A2E', border: '1px solid #2A2A3E' }}>
          <input
            type="text"
            placeholder="Enter access code..."
            style={{
              width: '100%',
              background: '#0A0A0F',
              color: '#E0E0E0',
              padding: '12px 14px',
              borderRadius: '4px',
              border: '1px solid #2A2A3E',
              fontSize: '14px',
              outline: 'none',
              fontFamily: 'monospace',
            }}
          />
          <input
            type="text"
            placeholder="Focus state"
            style={{
              width: '100%',
              background: '#0A0A0F',
              color: '#E0E0E0',
              padding: '12px 14px',
              borderRadius: '4px',
              border: '1px solid #00F5FF',
              fontSize: '14px',
              outline: 'none',
              fontFamily: 'monospace',
              boxShadow: '0 0 10px rgba(0, 245, 255, 0.3)',
            }}
          />
        </div>

        <h3 className="subsection-title">Card</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
          <div style={{
            padding: '24px',
            background: '#0A0A0F',
            border: '1px solid #2A2A3E',
            borderRadius: '8px',
          }}>
            <h4
              style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#FFFFFF',
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              System Status
            </h4>
            <p style={{ fontSize: '14px', color: '#A0A0A0', lineHeight: '1.5' }}>
              All systems operational. Network latency: 0.01s
            </p>
          </div>
          <div style={{
            padding: '16px',
            background: '#1A1A2E',
            border: '1px solid #2A2A3E',
            borderRadius: '8px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 500, color: '#E0E0E0', marginBottom: '4px' }}>Compact Card</div>
            <div style={{ fontSize: '14px', color: '#A0A0A0' }}>Smaller padding variant.</div>
          </div>
        </div>

        <h3 className="subsection-title">Badge</h3>
        <div className="card" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center', background: '#1A1A2E', border: '1px solid #2A2A3E' }}>
          <span
            style={{
              background: 'rgba(0, 245, 255, 0.15)',
              color: '#00F5FF',
              padding: '4px 12px',
              borderRadius: '2px',
              fontSize: '11px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              border: '1px solid rgba(0, 245, 255, 0.3)',
            }}
          >
            Online
          </span>
          <span
            style={{
              background: 'rgba(0, 255, 136, 0.15)',
              color: '#00FF88',
              padding: '4px 12px',
              borderRadius: '2px',
              fontSize: '11px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              border: '1px solid rgba(0, 255, 136, 0.3)',
            }}
          >
            Synced
          </span>
          <span
            style={{
              background: 'rgba(255, 0, 255, 0.15)',
              color: '#FF00FF',
              padding: '4px 12px',
              borderRadius: '2px',
              fontSize: '11px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              border: '1px solid rgba(255, 0, 255, 0.3)',
            }}
          >
            Beta
          </span>
          <span
            style={{
              background: 'rgba(255, 68, 68, 0.15)',
              color: '#FF4444',
              padding: '4px 12px',
              borderRadius: '2px',
              fontSize: '11px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              border: '1px solid rgba(255, 68, 68, 0.3)',
            }}
          >
            Offline
          </span>
        </div>
      </section>
    </div>
  );
}
