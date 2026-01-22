'use client';

import { useState } from 'react';

const brandColors = [
  { name: 'Brand', value: '#EF4444', token: '--color-brand', textColor: '#FFFFFF' },
  { name: 'Brand Hover', value: '#DC2626', token: '--color-brand-hover', textColor: '#FFFFFF' },
  { name: 'Accent', value: '#FBBF24', token: '--color-accent', textColor: '#18181B' },
];

const combinationSets = [
  {
    name: 'Set 1 - Fire',
    description: '레드 + 옐로우 + 다크',
    colors: [
      { value: '#EF4444', name: 'Red' },
      { value: '#FBBF24', name: 'Yellow' },
      { value: '#18181B', name: 'Black' },
      { value: '#FEF2F2', name: 'Red 50' },
      { value: '#FFFFFF', name: 'White' },
    ],
  },
  {
    name: 'Set 2 - Contrast',
    description: '레드 + 블랙 + 화이트 고대비',
    colors: [
      { value: '#EF4444', name: 'Red' },
      { value: '#000000', name: 'Black' },
      { value: '#FFFFFF', name: 'White' },
      { value: '#FECACA', name: 'Red 200' },
      { value: '#F5F5F5', name: 'Gray 100' },
    ],
  },
  {
    name: 'Set 3 - Vibrant',
    description: '레드 + 퍼플 + 핑크 대담함',
    colors: [
      { value: '#EF4444', name: 'Red' },
      { value: '#8B5CF6', name: 'Purple' },
      { value: '#EC4899', name: 'Pink' },
      { value: '#F97316', name: 'Orange' },
      { value: '#FEE2E2', name: 'Red 100' },
    ],
  },
];

const contentColors = [
  { name: 'Highlight', value: '#18181B', token: '--content-highlight', sample: 'Aa' },
  { name: 'Primary', value: '#27272A', token: '--content-primary', sample: 'Aa' },
  { name: 'Subtle', value: '#52525B', token: '--content-subtle', sample: 'Aa' },
  { name: 'Muted', value: '#A1A1AA', token: '--content-muted', sample: 'Aa' },
];

const borderColors = [
  { name: 'Subtle', value: '#FECACA', token: '--border-subtle' },
  { name: 'Strong', value: '#F87171', token: '--border-strong' },
  { name: 'Brand', value: '#EF4444', token: '--border-brand' },
];

const statusColors = [
  { name: 'Error', value: '#DC2626', soft: '#FEE2E2', token: '--color-error' },
  { name: 'Success', value: '#16A34A', soft: '#DCFCE7', token: '--color-success' },
  { name: 'Info', value: '#2563EB', soft: '#DBEAFE', token: '--color-info' },
];

const shadowTokens = [
  { name: 'sm', value: '0 2px 4px rgba(239, 68, 68, 0.1)' },
  { name: 'md', value: '0 4px 8px rgba(239, 68, 68, 0.15)' },
  { name: 'lg', value: '0 8px 16px rgba(239, 68, 68, 0.2)' },
  { name: 'brand', value: '0 4px 12px rgba(239, 68, 68, 0.3)' },
];

const typographyTokens = [
  { name: 'Display', size: '48px', weight: '800', lineHeight: '1.1' },
  { name: 'Heading', size: '32px', weight: '700', lineHeight: '1.2' },
  { name: 'Label L', size: '18px', weight: '700', lineHeight: '1.4' },
  { name: 'Label M', size: '16px', weight: '600', lineHeight: '1.5' },
  { name: 'Body L', size: '16px', weight: '500', lineHeight: '1.6' },
  { name: 'Body R', size: '14px', weight: '500', lineHeight: '1.5' },
];

const miniPrompt = `Bold & Vibrant 디자인 가이드:

[디자인 철학]
- 대담한 색상이 주목을 끈다. 눈에 확 들어오는 첫인상
- 큰 타이포그래피가 메시지를 전달한다. 두꺼운 웨이트 적극 활용
- 높은 대비가 명확한 시각적 위계를 만든다. 흑백 + 원색
- 전략적인 색상 사용이 최대의 임팩트. 너무 많으면 효과 반감

[UX 원칙]
- 핵심 메시지와 CTA가 가장 먼저 눈에 들어와야 한다
- 에너지 넘치면서도 혼란스럽지 않은 레이아웃
- 액션 유도 요소는 강렬하게, 나머지는 절제
- 빠르고 임팩트 있는 인터랙션

[컬러]
- Primary: #EF4444 (Red), Hover: #DC2626
- Accent: #FBBF24 (Yellow)
- Background: #FFFFFF, Tinted: #FEF2F2
- Text: #18181B (제목), #27272A (본문), #52525B (보조)
- Border: #FECACA, Focus: #EF4444

[사이즈]
- Spacing: 요소 내부 16px, 요소 간격 20px, 섹션 간격 64px
- Radius: 버튼/인풋 12px, 카드 16px, 배지 14px (pill)
- 버튼: 52px (기본), 40px (소형)
- 인풋: 52px
- Font: Pretendard, 16px 본문 (bold weight), 48px 디스플레이 (extrabold)`;

export default function BoldVibrantPage() {
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
    const filename = type === 'md' ? 'bold-vibrant.md' : 'bold-vibrant-tokens.css';
    const link = document.createElement('a');
    link.href = `/downloads/${filename}`;
    link.download = filename;
    link.click();
  };

  return (
    <div>
      <h1 className="page-title">Bold & Vibrant</h1>
      <p className="page-description">
        강렬한 레드와 옐로우 악센트의 임팩트 있는 디자인 시스템입니다. 마케팅 사이트, 프로모션 페이지에 적합합니다.
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
          borderRadius: '16px',
          border: '2px solid #18181B',
          overflow: 'hidden',
          background: '#FFFFFF',
        }}>
          {/* Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 32px',
            background: '#18181B',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                background: '#EF4444',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '16px',
              }}>B</div>
              <span style={{ fontWeight: 700, fontSize: '18px', color: '#FFFFFF' }}>BOLDIFY</span>
            </div>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <span style={{ color: '#A1A1AA', fontSize: '14px', fontWeight: 600 }}>Products</span>
              <span style={{ color: '#A1A1AA', fontSize: '14px', fontWeight: 600 }}>Pricing</span>
              <span style={{ color: '#A1A1AA', fontSize: '14px', fontWeight: 600 }}>About</span>
              <div style={{
                height: '40px',
                padding: '0 20px',
                background: '#EF4444',
                color: '#FFFFFF',
                borderRadius: '10px',
                fontSize: '14px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
              }}>Get Started</div>
            </div>
          </div>

          {/* Hero Section */}
          <div style={{
            padding: '64px 32px',
            display: 'flex',
            alignItems: 'center',
            gap: '48px',
            background: 'linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 100%)',
          }}>
            <div style={{ flex: 1 }}>
              <span style={{
                display: 'inline-block',
                padding: '6px 16px',
                background: '#FBBF24',
                color: '#18181B',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 700,
                marginBottom: '16px',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>Launch Special</span>
              <div style={{
                fontSize: '42px',
                fontWeight: 800,
                color: '#18181B',
                lineHeight: 1.1,
                marginBottom: '16px',
              }}>
                Make Your Brand <span style={{ color: '#EF4444' }}>STAND OUT</span>
              </div>
              <p style={{
                fontSize: '18px',
                color: '#52525B',
                lineHeight: 1.6,
                marginBottom: '24px',
                fontWeight: 500,
              }}>
                Bold designs that capture attention and drive results.
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{
                  height: '52px',
                  padding: '0 28px',
                  background: '#EF4444',
                  color: '#FFFFFF',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  boxShadow: '0 8px 16px rgba(239, 68, 68, 0.3)',
                }}>Start Free Trial</div>
                <div style={{
                  height: '52px',
                  padding: '0 28px',
                  background: '#18181B',
                  color: '#FFFFFF',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                }}>Watch Demo</div>
              </div>
            </div>
            <div style={{
              flex: 1,
              height: '280px',
              background: '#FFFFFF',
              borderRadius: '16px',
              border: '3px solid #18181B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '8px 8px 0px #18181B',
            }}>
              <div style={{
                width: '85%',
                height: '85%',
                background: '#FEF2F2',
                borderRadius: '12px',
                padding: '20px',
              }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                  <div style={{ width: '12px', height: '12px', background: '#EF4444', borderRadius: '50%' }} />
                  <div style={{ width: '12px', height: '12px', background: '#FBBF24', borderRadius: '50%' }} />
                  <div style={{ width: '12px', height: '12px', background: '#22C55E', borderRadius: '50%' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ width: '60%', height: '16px', background: '#18181B', borderRadius: '8px' }} />
                  <div style={{ width: '80%', height: '10px', background: '#FECACA', borderRadius: '5px' }} />
                  <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
                    <div style={{ width: '80px', height: '32px', background: '#EF4444', borderRadius: '8px' }} />
                    <div style={{ width: '80px', height: '32px', background: '#FBBF24', borderRadius: '8px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div style={{
            padding: '32px',
            background: '#EF4444',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px',
            textAlign: 'center',
          }}>
            {[
              { value: '500+', label: 'Happy Clients' },
              { value: '99%', label: 'Satisfaction' },
              { value: '24/7', label: 'Support' },
              { value: '50K+', label: 'Downloads' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div style={{ fontSize: '36px', fontWeight: 800, color: '#FFFFFF' }}>{stat.value}</div>
                <div style={{ fontSize: '14px', color: '#FEE2E2', fontWeight: 600 }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div style={{ padding: '48px 32px', background: '#FFFFFF' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{ fontSize: '32px', fontWeight: 800, color: '#18181B', marginBottom: '8px' }}>
                Why Choose <span style={{ color: '#EF4444' }}>Bold?</span>
              </div>
              <p style={{ fontSize: '16px', color: '#52525B', fontWeight: 500 }}>
                Features that make a difference
              </p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            }}>
              {[
                { icon: '🔥', title: 'High Impact', desc: 'Designs that convert' },
                { icon: '⚡', title: 'Lightning Fast', desc: 'Optimized performance' },
                { icon: '🎯', title: 'Results Driven', desc: 'Data-backed decisions' },
              ].map((feature, idx) => (
                <div key={idx} style={{
                  padding: '28px',
                  background: '#FEF2F2',
                  border: '2px solid #FECACA',
                  borderRadius: '16px',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '36px', marginBottom: '12px' }}>{feature.icon}</div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: '#18181B', marginBottom: '4px' }}>{feature.title}</div>
                  <div style={{ fontSize: '14px', color: '#52525B', fontWeight: 500 }}>{feature.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div style={{
            padding: '48px 32px',
            background: '#18181B',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '32px', fontWeight: 800, color: '#FFFFFF', marginBottom: '12px' }}>
              Ready to Go <span style={{ color: '#EF4444' }}>BOLD?</span>
            </div>
            <p style={{ fontSize: '16px', color: '#A1A1AA', marginBottom: '24px', fontWeight: 500 }}>
              Start your free trial today.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <div style={{
                height: '48px',
                padding: '0 32px',
                background: '#EF4444',
                color: '#FFFFFF',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
              }}>Get Started Free</div>
              <div style={{
                height: '48px',
                padding: '0 32px',
                background: 'transparent',
                color: '#FFFFFF',
                border: '2px solid #52525B',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
              }}>Talk to Sales</div>
            </div>
          </div>

          {/* Footer */}
          <div style={{
            padding: '20px 32px',
            background: '#18181B',
            borderTop: '1px solid #27272A',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '24px',
                height: '24px',
                background: '#EF4444',
                borderRadius: '6px',
              }} />
              <span style={{ fontWeight: 700, fontSize: '14px', color: '#FFFFFF' }}>BOLDIFY</span>
            </div>
            <div style={{ color: '#52525B', fontSize: '12px', fontWeight: 500 }}>
              © 2025 Boldify
            </div>
          </div>
        </div>
      </section>

      {/* 콤비네이션 팔레트 섹션 */}
      <section>
        <h2 className="section-title">Combination Palette</h2>
        <p className="section-desc">레드 브랜드 컬러와 어울리는 강렬한 추천 조합</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '60%' }}>
          {combinationSets.map((set) => (
            <div key={set.name}>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--content-primary)' }}>{set.name}</span>
                <span style={{ marginLeft: '8px', fontSize: '13px', color: 'var(--content-subtle)' }}>{set.description}</span>
              </div>
              <div style={{ display: 'flex', height: '64px', borderRadius: '12px', overflow: 'hidden', border: '2px solid #18181B' }}>
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
                      color: ['#18181B', '#000000', '#EF4444', '#DC2626', '#8B5CF6', '#EC4899', '#F97316'].includes(color.value) ? '#FFFFFF' : '#18181B',
                      fontSize: '11px',
                      fontWeight: 600,
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
        <h2 className="section-title">Mini Prompt</h2>
        <p className="section-desc">AI에게 바로 붙여넣을 수 있는 디자인 지침입니다.</p>
        <div style={{ position: 'relative' }}>
          <pre><code>{miniPrompt}</code></pre>
          <button
            onClick={() => copyToClipboard(miniPrompt)}
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
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '8px',
                color: color.textColor,
                fontSize: '11px',
                fontWeight: 600,
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
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '8px',
                color: ['#18181B', '#27272A', '#52525B'].includes(color.value) ? '#FFFFFF' : '#18181B',
                fontSize: '11px',
                fontWeight: 600,
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
                border: ['#FECACA'].includes(color.value) ? '2px solid #FECACA' : 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '8px',
                color: ['#EF4444', '#F87171'].includes(color.value) ? '#FFFFFF' : '#18181B',
                fontSize: '11px',
                fontWeight: 600,
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
              <div style={{ marginBottom: '8px', fontSize: '12px', fontWeight: 600, color: 'var(--content-primary)' }}>{color.name}</div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => copyToClipboard(color.value, color.token)}
                  style={{
                    width: '80px',
                    height: '80px',
                    background: color.value,
                    border: 'none',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    padding: '8px',
                    color: '#FFFFFF',
                    fontSize: '11px',
                    fontWeight: 600,
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
                    border: '2px solid #E4E4E7',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    padding: '8px',
                    color: '#18181B',
                    fontSize: '11px',
                    fontWeight: 600,
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
        <div className="shadow-grid">
          {shadowTokens.map((token) => (
            <div key={token.name} className="shadow-item">
              <div className="shadow-demo" style={{ boxShadow: token.value }} />
              <code className="shadow-label">shadow-{token.name}</code>
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
                BOLD 123
              </span>
              <span className="spacing-value">{token.size} / {token.weight}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 컴포넌트 미리보기 섹션 */}
      <section>
        <h2 className="section-title">Components</h2>
        <p className="section-desc">Bold & Vibrant 스타일이 적용된 컴포넌트 예시</p>

        <h3 className="subsection-title">Button</h3>
        <div className="card" style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap', alignItems: 'center' }}>
          <button style={{
            height: '52px',
            padding: '12px 24px',
            background: '#EF4444',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 8px 16px rgba(239, 68, 68, 0.3)',
          }}>Primary Button</button>
          <button style={{
            height: '52px',
            padding: '12px 24px',
            background: '#18181B',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 700,
            cursor: 'pointer',
          }}>Secondary Button</button>
          <button style={{
            height: '40px',
            padding: '8px 16px',
            background: '#FBBF24',
            color: '#18181B',
            border: 'none',
            borderRadius: '10px',
            fontSize: '14px',
            fontWeight: 700,
            cursor: 'pointer',
          }}>Accent Button</button>
          <button style={{
            height: '52px',
            padding: '12px 24px',
            background: 'transparent',
            color: '#EF4444',
            border: '2px solid #EF4444',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 700,
            cursor: 'pointer',
          }}>Outline Button</button>
        </div>

        <h3 className="subsection-title">Input</h3>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)', maxWidth: '360px' }}>
          <input
            type="text"
            placeholder="Default input"
            style={{
              height: '52px',
              padding: '12px 16px',
              border: '2px solid #FECACA',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: 500,
              outline: 'none',
              background: '#FEF2F2',
            }}
          />
          <input
            type="text"
            placeholder="Focus state"
            style={{
              height: '52px',
              padding: '12px 16px',
              border: '3px solid #EF4444',
              borderRadius: '12px',
              fontSize: '16px',
              fontWeight: 500,
              outline: 'none',
              background: '#FFFFFF',
            }}
          />
        </div>

        <h3 className="subsection-title">Card</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-4)' }}>
          <div style={{
            padding: '28px',
            background: '#FFFFFF',
            border: '3px solid #18181B',
            borderRadius: '16px',
            boxShadow: '6px 6px 0px #18181B',
          }}>
            <div style={{ fontSize: '20px', fontWeight: 700, color: '#18181B', marginBottom: '8px' }}>Bold Card</div>
            <div style={{ fontSize: '14px', color: '#52525B', fontWeight: 500 }}>High contrast card with offset shadow.</div>
          </div>
          <div style={{
            padding: '24px',
            background: '#FEF2F2',
            border: '2px solid #FECACA',
            borderRadius: '16px',
          }}>
            <div style={{ fontSize: '18px', fontWeight: 700, color: '#EF4444', marginBottom: '4px' }}>Accent Card</div>
            <div style={{ fontSize: '14px', color: '#52525B', fontWeight: 500 }}>Brand accent color title.</div>
          </div>
        </div>

        <h3 className="subsection-title">Badge</h3>
        <div className="card" style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{
            height: '28px',
            padding: '0 14px',
            background: '#EF4444',
            color: '#FFFFFF',
            borderRadius: '14px',
            fontSize: '13px',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
          }}>Brand</span>
          <span style={{
            height: '28px',
            padding: '0 14px',
            background: '#FBBF24',
            color: '#18181B',
            borderRadius: '14px',
            fontSize: '13px',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
          }}>Accent</span>
          <span style={{
            height: '28px',
            padding: '0 14px',
            background: '#DCFCE7',
            color: '#16A34A',
            borderRadius: '14px',
            fontSize: '13px',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
          }}>Success</span>
          <span style={{
            height: '28px',
            padding: '0 14px',
            background: '#18181B',
            color: '#FFFFFF',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
          }}>Dark</span>
        </div>
      </section>
    </div>
  );
}
