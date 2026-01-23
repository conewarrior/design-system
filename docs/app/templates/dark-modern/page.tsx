'use client';

import { useState } from 'react';

const brandColors = [
  { name: 'Brand', value: '#6D36F6', token: '--color-brand', textColor: '#FFFFFF' },
  { name: 'Brand Hover', value: '#5B2BD4', token: '--color-brand-hover', textColor: '#FFFFFF' },
];

const combinationSets = [
  {
    name: 'Set 1 - Cyber Purple',
    description: '퍼플 + 딥 블루 사이버펑크',
    colors: [
      { value: '#6D36F6', name: 'Purple' },
      { value: '#302EB6', name: 'Deep Blue' },
      { value: '#0F0F0F', name: 'Black' },
      { value: '#1A1A1A', name: 'Dark' },
      { value: '#E4E4E7', name: 'Light' },
    ],
  },
  {
    name: 'Set 2 - Neon Emerald',
    description: '에메랄드 + 틸 테크 느낌',
    colors: [
      { value: '#10B981', name: 'Emerald' },
      { value: '#14B8A6', name: 'Teal' },
      { value: '#0F0F0F', name: 'Black' },
      { value: '#052E16', name: 'Dark Green' },
      { value: '#D1FAE5', name: 'Mint' },
    ],
  },
  {
    name: 'Set 3 - Crimson Night',
    description: '레드 + 오렌지 강렬한 악센트',
    colors: [
      { value: '#EF4444', name: 'Red' },
      { value: '#F97316', name: 'Orange' },
      { value: '#0F0F0F', name: 'Black' },
      { value: '#450A0A', name: 'Dark Red' },
      { value: '#FEE2E2', name: 'Light Red' },
    ],
  },
];

const contentColors = [
  { name: 'Highlight', value: '#FFFFFF', token: '--content-highlight', sample: 'Aa' },
  { name: 'Primary', value: '#E4E4E7', token: '--content-primary', sample: 'Aa' },
  { name: 'Subtle', value: '#A1A1AA', token: '--content-subtle', sample: 'Aa' },
  { name: 'Muted', value: '#71717A', token: '--content-muted', sample: 'Aa' },
];

const borderColors = [
  { name: 'Subtle', value: '#27272A', token: '--border-subtle' },
  { name: 'Strong', value: '#3F3F46', token: '--border-strong' },
  { name: 'Brand', value: '#6D36F6', token: '--border-brand' },
];

const statusColors = [
  { name: 'Error', value: '#EF4444', soft: '#2D1515', token: '--color-error' },
  { name: 'Success', value: '#22C55E', soft: '#152D1B', token: '--color-success' },
  { name: 'Info', value: '#3B82F6', soft: '#15202D', token: '--color-info' },
];

const shadowTokens = [
  { name: 'sm', value: '0px 2px 4px rgba(0, 0, 0, 0.3)' },
  { name: 'md', value: '0px 4px 8px rgba(0, 0, 0, 0.4)' },
  { name: 'lg', value: '0px 8px 16px rgba(0, 0, 0, 0.5)' },
  { name: 'glow', value: '0 0 20px rgba(109, 54, 246, 0.3)' },
];

const typographyTokens = [
  { name: 'Display', size: '32px', weight: '700', lineHeight: '1.2' },
  { name: 'Heading', size: '24px', weight: '600', lineHeight: '1.3' },
  { name: 'Label L', size: '16px', weight: '600', lineHeight: '1.5' },
  { name: 'Label M', size: '14px', weight: '500', lineHeight: '1.5' },
  { name: 'Body L', size: '16px', weight: '400', lineHeight: '1.6' },
  { name: 'Body R', size: '14px', weight: '400', lineHeight: '1.5' },
];

const prompt = `Dark Modern 디자인 가이드:

[디자인 철학]
- 다크 테마는 집중력을 높인다. 눈의 피로를 줄이고 콘텐츠에 몰입
- 퍼플 악센트가 세련되고 현대적인 느낌. 너무 많이 쓰지 않는다
- 깊이감 있는 레이어. 배경-표면-요소 순서로 밝기 차이
- 글로우 효과는 인터랙티브 요소에만 절제해서 사용

[UX 원칙]
- 다크 배경에서 가독성 확보가 우선
- 명도 대비로 시각적 위계를 명확히
- 호버/포커스 상태에 글로우 효과로 피드백
- 부드러운 트랜지션으로 세련된 느낌

[컬러]
- Primary: #6D36F6 (Purple), Hover: #5B2BD4
- Background: #0F0F0F, Surface: #1A1A1A, Elevated: #27272A
- Text: #FFFFFF (제목), #E4E4E7 (본문), #A1A1AA (보조)
- Border: #27272A, Focus: #6D36F6

[사이즈]
- Spacing: 요소 내부 12px, 요소 간격 16px, 섹션 간격 48px
- Radius: 버튼/인풋 8px, 카드 12px, 배지 12px (pill)
- 버튼: 44px (기본), 32px (소형)
- 인풋: 44px
- Font: Pretendard, 14px 본문, 32px 디스플레이

[적용 가이드]
이 가이드는 기본 지침이며, 앱의 특성과 성격에 따라 유연하게 조정하세요:
- 웹 vs 모바일: 모바일은 터치 타겟 48px 이상, 대중적인 디바이스의 기준을 따른다.
- 정보 밀도: 대시보드는 적당히 촘촘하게, 랜딩/마케팅은 여유롭게
- 브랜드 톤: 친근함은 컬러를 조금 더 사용하고, 신뢰감은 화이트 위주 + 포인트 컬러는 적게
→ 컬러와 디자인 철학은 유지하되, 사이즈/간격/컬러 사용량은 상황에 맞게 조정`;

export default function DarkModernPage() {
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
    const filename = type === 'md' ? 'dark-modern.md' : 'dark-modern-tokens.css';
    const link = document.createElement('a');
    link.href = `/downloads/${filename}`;
    link.download = filename;
    link.click();
  };

  return (
    <div>
      <h1 className="page-title">Dark Modern</h1>
      <p className="page-description">
        퍼플 악센트와 다크 배경의 현대적 디자인 시스템입니다. 개발자 도구, 대시보드에 적합합니다.
      </p>

      {/* 다운로드 버튼 */}
      <div style={{ display: 'flex', gap: '12px', marginBottom: 'var(--spacing-6)' }}>
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

      {/* 랜딩페이지 샘플 */}
      <section>
        <h2 className="section-title">Landing Page Sample</h2>
        <div style={{
          borderRadius: '12px',
          border: '1px solid #27272A',
          overflow: 'hidden',
          background: '#0F0F0F',
        }}>
          {/* Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 24px',
            borderBottom: '1px solid #27272A',
            background: '#0F0F0F',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '28px',
                height: '28px',
                background: 'linear-gradient(135deg, #6D36F6 0%, #6366F1 100%)',
                borderRadius: '6px',
              }} />
              <span style={{
                fontWeight: 600,
                fontSize: '15px',
                background: 'linear-gradient(90deg, #6D36F6, #302EB6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>DarkStack</span>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <span style={{ color: '#A1A1AA', fontSize: '13px' }}>Features</span>
              <span style={{ color: '#A1A1AA', fontSize: '13px' }}>Docs</span>
              <span style={{ color: '#A1A1AA', fontSize: '13px' }}>Pricing</span>
              <div style={{
                height: '32px',
                padding: '0 14px',
                background: '#6D36F6',
                color: '#FFFFFF',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 0 20px rgba(109, 54, 246, 0.3)',
              }}>Get Started</div>
            </div>
          </div>

          {/* Hero Section */}
          <div style={{
            padding: '48px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
          }}>
            <div style={{ flex: 1 }}>
              <span style={{
                display: 'inline-block',
                padding: '4px 10px',
                background: 'rgba(109, 54, 246, 0.2)',
                color: '#9B7BFA',
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: 600,
                marginBottom: '16px',
                border: '1px solid rgba(109, 54, 246, 0.3)',
              }}>Now in Beta</span>
              <div style={{
                fontSize: '32px',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.2,
                marginBottom: '12px',
              }}>
                Build modern <span style={{
                  background: 'linear-gradient(90deg, #6D36F6, #302EB6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>dark interfaces</span>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#A1A1AA',
                lineHeight: 1.6,
                marginBottom: '20px',
              }}>
                The modern developer toolkit for building stunning dark interfaces.
              </p>
              <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{
                  height: '40px',
                  padding: '0 18px',
                  background: '#6D36F6',
                  color: '#FFFFFF',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  boxShadow: '0 0 20px rgba(109, 54, 246, 0.3)',
                }}>Start Building</div>
                <div style={{
                  height: '40px',
                  padding: '0 18px',
                  background: 'transparent',
                  color: '#E4E4E7',
                  border: '1px solid #3F3F46',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                }}>View Docs</div>
              </div>
            </div>
            <div style={{
              flex: 1,
              height: '220px',
              background: '#1A1A1A',
              borderRadius: '12px',
              border: '1px solid #27272A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Code editor mockup */}
              <div style={{
                width: '90%',
                height: '85%',
                background: '#0F0F0F',
                borderRadius: '8px',
                border: '1px solid #27272A',
                padding: '12px',
              }}>
                <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
                  <div style={{ width: '8px', height: '8px', background: '#EF4444', borderRadius: '50%' }} />
                  <div style={{ width: '8px', height: '8px', background: '#EAB308', borderRadius: '50%' }} />
                  <div style={{ width: '8px', height: '8px', background: '#22C55E', borderRadius: '50%' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#6D36F6', fontSize: '10px', fontFamily: 'monospace' }}>const</span>
                    <span style={{ color: '#E4E4E7', fontSize: '10px', fontFamily: 'monospace' }}>theme =</span>
                    <span style={{ color: '#22C55E', fontSize: '10px', fontFamily: 'monospace' }}>"dark"</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#6D36F6', fontSize: '10px', fontFamily: 'monospace' }}>const</span>
                    <span style={{ color: '#E4E4E7', fontSize: '10px', fontFamily: 'monospace' }}>accent =</span>
                    <span style={{ color: '#22C55E', fontSize: '10px', fontFamily: 'monospace' }}>"#6D36F6"</span>
                  </div>
                  <div style={{ width: '60%', height: '6px', background: '#27272A', borderRadius: '3px', marginTop: '4px' }} />
                  <div style={{ width: '40%', height: '6px', background: '#27272A', borderRadius: '3px' }} />
                </div>
              </div>
              {/* Glow effect */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle, rgba(109, 54, 246, 0.15) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />
            </div>
          </div>

          {/* Stats Section */}
          <div style={{
            padding: '24px',
            background: '#1A1A1A',
            borderTop: '1px solid #27272A',
            borderBottom: '1px solid #27272A',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            textAlign: 'center',
          }}>
            {[
              { value: '50+', label: 'Components' },
              { value: '100+', label: 'Tokens' },
              { value: '10K+', label: 'Downloads' },
              { value: '99%', label: 'Satisfaction' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div style={{ fontSize: '20px', fontWeight: 700, color: '#6D36F6' }}>{stat.value}</div>
                <div style={{ fontSize: '11px', color: '#71717A' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div style={{ padding: '36px 24px', background: '#0F0F0F' }}>
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '4px' }}>
                Built for developers
              </div>
              <p style={{ fontSize: '13px', color: '#71717A' }}>
                Everything you need to build modern dark interfaces
              </p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '12px',
            }}>
              {[
                { icon: '/', title: 'Code First', desc: 'Developer experience' },
                { icon: '#', title: 'Dark Native', desc: 'Built for dark mode' },
                { icon: '*', title: 'Customizable', desc: 'Full control' },
              ].map((feature, idx) => (
                <div key={idx} style={{
                  padding: '20px',
                  background: '#1A1A1A',
                  border: '1px solid #27272A',
                  borderRadius: '8px',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontSize: '20px',
                    marginBottom: '8px',
                    color: '#6D36F6',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                  }}>{feature.icon}</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#FFFFFF', marginBottom: '2px' }}>{feature.title}</div>
                  <div style={{ fontSize: '11px', color: '#71717A' }}>{feature.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div style={{
            padding: '36px 24px',
            background: 'linear-gradient(180deg, #1A1A1A 0%, #0F0F0F 100%)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(109, 54, 246, 0.1) 0%, transparent 70%)',
              pointerEvents: 'none',
            }} />
            <div style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px', position: 'relative' }}>
              Ready to build?
            </div>
            <p style={{ fontSize: '13px', color: '#71717A', marginBottom: '16px', position: 'relative' }}>
              Join thousands of developers shipping dark interfaces
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', position: 'relative' }}>
              <div style={{
                height: '36px',
                padding: '0 18px',
                background: '#6D36F6',
                color: '#FFFFFF',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 0 20px rgba(109, 54, 246, 0.3)',
              }}>Get Started Free</div>
              <div style={{
                height: '36px',
                padding: '0 18px',
                background: 'transparent',
                color: '#E4E4E7',
                border: '1px solid #3F3F46',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
              }}>View Examples</div>
            </div>
          </div>

          {/* Footer */}
          <div style={{
            padding: '16px 24px',
            borderTop: '1px solid #27272A',
            background: '#0F0F0F',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{
                width: '16px',
                height: '16px',
                background: 'linear-gradient(135deg, #6D36F6 0%, #6366F1 100%)',
                borderRadius: '3px',
              }} />
              <span style={{ fontWeight: 600, fontSize: '11px', color: '#A1A1AA' }}>DarkStack</span>
            </div>
            <div style={{ color: '#71717A', fontSize: '10px' }}>
              © 2025 DarkStack
            </div>
          </div>
        </div>
      </section>

      {/* 콤비네이션 팔레트 섹션 */}
      <section>
        <h2 className="section-title">Combination Palette</h2>
        <p className="section-desc">퍼플 브랜드 컬러와 어울리는 다크 테마 조합</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '60%' }}>
          {combinationSets.map((set) => (
            <div key={set.name}>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--content-primary)' }}>{set.name}</span>
                <span style={{ marginLeft: '8px', fontSize: '13px', color: 'var(--content-subtle)' }}>{set.description}</span>
              </div>
              <div style={{ display: 'flex', height: '64px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #27272A' }}>
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
                      color: ['#0F0F0F', '#1A1A1A', '#2D2D2D', '#1E1B4B', '#27272A'].includes(color.value) ? '#A1A1AA' : '#FFFFFF',
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

      {/* 미니 프롬프트 섹션 */}
      <section>
        <h2 className="section-title">Prompt</h2>
        <p className="section-desc">AI에게 바로 붙여넣을 수 있는 다크 모던 디자인 지침입니다.</p>
        <div style={{ position: 'relative' }}>
          <pre style={{ background: '#1A1A1A', border: '1px solid #27272A' }}><code style={{ color: '#E4E4E7' }}>{prompt}</code></pre>
          <button
            onClick={() => copyToClipboard(prompt)}
            style={{
              position: 'absolute',
              top: 'var(--spacing-2)',
              right: 'var(--spacing-2)',
            }}
            className={`gds-button gds-button--sm ${copiedPrompt ? 'gds-button--primary' : 'gds-button--secondary'}`}
          >
            {copiedPrompt ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </section>

      {/* 디자인 토큰 섹션 */}
      <section>
        <h2 className="section-title">Design Tokens</h2>

        <h3 className="subsection-title">Brand</h3>
        <div style={{ display: 'flex', gap: '12px', marginBottom: 'var(--spacing-6)' }}>
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
                boxShadow: '0 0 20px rgba(109, 54, 246, 0.2)',
              }}
              title={color.name}
            >
              {copiedColor === color.token ? 'Copied!' : color.value}
            </button>
          ))}
        </div>

        <h3 className="subsection-title">Content (Text)</h3>
        <div style={{ display: 'flex', gap: '12px', marginBottom: 'var(--spacing-6)' }}>
          {contentColors.map((color) => (
            <button
              key={color.token}
              onClick={() => copyToClipboard(color.value, color.token)}
              style={{
                width: '80px',
                height: '80px',
                background: color.value,
                border: color.value === '#FFFFFF' || color.value === '#E4E4E7' ? '1px solid #27272A' : 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '8px',
                color: color.value === '#FFFFFF' || color.value === '#E4E4E7' ? '#0F0F0F' : '#FFFFFF',
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
        <div style={{ display: 'flex', gap: '12px', marginBottom: 'var(--spacing-6)' }}>
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
                color: color.value === '#6D36F6' ? '#FFFFFF' : '#A1A1AA',
                fontSize: '11px',
                fontWeight: 300,
              }}
              title={color.name}
            >
              {copiedColor === color.token ? 'Copied!' : color.value}
            </button>
          ))}
        </div>

        <h3 className="subsection-title">Status</h3>
        <div style={{ display: 'flex', gap: '24px', marginBottom: 'var(--spacing-6)' }}>
          {statusColors.map((color) => (
            <div key={color.token}>
              <div style={{ marginBottom: '8px', fontSize: '12px', fontWeight: 500, color: 'var(--content-primary)' }}>{color.name}</div>
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
                    color: '#FFFFFF',
                    fontSize: '11px',
                    fontWeight: 300,
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
                    border: '1px solid #27272A',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    padding: '8px',
                    color: '#A1A1AA',
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

        <h3 className="subsection-title">Shadow</h3>
        <div className="shadow-grid" style={{ background: '#1A1A1A', padding: '24px', borderRadius: '12px', border: '1px solid #27272A' }}>
          {shadowTokens.map((token) => (
            <div key={token.name} className="shadow-item">
              <div className="shadow-demo" style={{ boxShadow: token.value, background: '#27272A' }} />
              <code className="shadow-label" style={{ color: '#A1A1AA' }}>shadow-{token.name}</code>
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

      {/* 컴포넌트 미리보기 섹션 */}
      <section>
        <h2 className="section-title">Components</h2>
        <p className="section-desc">Dark Modern 스타일이 적용된 컴포넌트 예시</p>

        <h3 className="subsection-title">Button</h3>
        <div className="card" style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap', alignItems: 'center', background: '#0F0F0F', border: '1px solid #27272A' }}>
          <button style={{
            height: '44px',
            padding: '10px 16px',
            background: '#6D36F6',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 0 20px rgba(109, 54, 246, 0.3)',
          }}>Primary Button</button>
          <button style={{
            height: '44px',
            padding: '10px 16px',
            background: 'transparent',
            color: '#E4E4E7',
            border: '1px solid #3F3F46',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
          }}>Secondary Button</button>
          <button style={{
            height: '32px',
            padding: '6px 12px',
            background: '#6D36F6',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
          }}>Small Button</button>
          <button style={{
            height: '44px',
            padding: '10px 16px',
            background: '#1A1A1A',
            color: '#A1A1AA',
            border: '1px solid #27272A',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
          }}>Ghost Button</button>
        </div>

        <h3 className="subsection-title">Input</h3>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)', maxWidth: '320px', background: '#0F0F0F', border: '1px solid #27272A' }}>
          <input
            type="text"
            placeholder="Default input"
            style={{
              height: '44px',
              padding: '8px 14px',
              background: '#1A1A1A',
              border: '1px solid #27272A',
              borderRadius: '8px',
              fontSize: '14px',
              color: '#E4E4E7',
              outline: 'none',
            }}
          />
          <input
            type="text"
            placeholder="Focus state"
            style={{
              height: '44px',
              padding: '8px 14px',
              background: '#1A1A1A',
              border: '2px solid #6D36F6',
              borderRadius: '8px',
              fontSize: '14px',
              color: '#E4E4E7',
              outline: 'none',
              boxShadow: '0 0 0 3px rgba(109, 54, 246, 0.2)',
            }}
          />
          <input
            type="text"
            placeholder="Error state"
            style={{
              height: '44px',
              padding: '8px 14px',
              background: '#1A1A1A',
              border: '1px solid #EF4444',
              borderRadius: '8px',
              fontSize: '14px',
              color: '#E4E4E7',
              outline: 'none',
            }}
          />
        </div>

        <h3 className="subsection-title">Card</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-3)' }}>
          <div style={{
            padding: '24px',
            background: '#1A1A1A',
            border: '1px solid #27272A',
            borderRadius: '12px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.4)',
          }}>
            <div style={{ fontSize: '16px', fontWeight: 600, color: '#FFFFFF', marginBottom: '8px' }}>Card Title</div>
            <div style={{ fontSize: '14px', color: '#A1A1AA' }}>Card description text goes here.</div>
          </div>
          <div style={{
            padding: '24px',
            background: 'linear-gradient(135deg, rgba(109, 54, 246, 0.1) 0%, rgba(109, 54, 246, 0.05) 100%)',
            border: '1px solid rgba(109, 54, 246, 0.3)',
            borderRadius: '12px',
          }}>
            <div style={{ fontSize: '16px', fontWeight: 600, color: '#FFFFFF', marginBottom: '8px' }}>Accent Card</div>
            <div style={{ fontSize: '14px', color: '#A1A1AA' }}>With purple gradient overlay.</div>
          </div>
        </div>

        <h3 className="subsection-title">Badge</h3>
        <div className="card" style={{ display: 'flex', gap: 'var(--spacing-2)', flexWrap: 'wrap', alignItems: 'center', background: '#0F0F0F', border: '1px solid #27272A' }}>
          <span style={{
            height: '24px',
            padding: '0 10px',
            background: 'rgba(109, 54, 246, 0.2)',
            color: '#9B7BFA',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            border: '1px solid rgba(109, 54, 246, 0.3)',
          }}>Brand</span>
          <span style={{
            height: '24px',
            padding: '0 10px',
            background: 'rgba(34, 197, 94, 0.2)',
            color: '#4ADE80',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            border: '1px solid rgba(34, 197, 94, 0.3)',
          }}>Success</span>
          <span style={{
            height: '24px',
            padding: '0 10px',
            background: 'rgba(239, 68, 68, 0.2)',
            color: '#F87171',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            border: '1px solid rgba(239, 68, 68, 0.3)',
          }}>Error</span>
          <span style={{
            height: '24px',
            padding: '0 10px',
            background: '#27272A',
            color: '#A1A1AA',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: 500,
            display: 'inline-flex',
            alignItems: 'center',
          }}>Neutral</span>
        </div>
      </section>
    </div>
  );
}
