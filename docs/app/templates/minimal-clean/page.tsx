'use client';

import { useState } from 'react';

const brandColors = [
  { name: 'Brand', value: '#18181B', token: '--color-brand', textColor: '#FFFFFF' },
  { name: 'Brand Hover', value: '#27272A', token: '--color-brand-hover', textColor: '#FFFFFF' },
];

const combinationSets = [
  {
    name: 'Set 1 - Pure Mono',
    description: '흑백 순수 모노크롬',
    colors: [
      { value: '#18181B', name: 'Black' },
      { value: '#52525B', name: 'Gray 600' },
      { value: '#A1A1AA', name: 'Gray 400' },
      { value: '#E4E4E7', name: 'Gray 200' },
      { value: '#FFFFFF', name: 'White' },
    ],
  },
  {
    name: 'Set 2 - Warm Minimal',
    description: '따뜻한 스톤 톤',
    colors: [
      { value: '#1C1917', name: 'Stone 900' },
      { value: '#44403C', name: 'Stone 700' },
      { value: '#A8A29E', name: 'Stone 400' },
      { value: '#E7E5E4', name: 'Stone 200' },
      { value: '#FAFAF9', name: 'Stone 50' },
    ],
  },
  {
    name: 'Set 3 - Cool Minimal',
    description: '차가운 슬레이트 톤',
    colors: [
      { value: '#0F172A', name: 'Slate 900' },
      { value: '#334155', name: 'Slate 700' },
      { value: '#94A3B8', name: 'Slate 400' },
      { value: '#E2E8F0', name: 'Slate 200' },
      { value: '#F8FAFC', name: 'Slate 50' },
    ],
  },
];

const contentColors = [
  { name: 'Highlight', value: '#09090B', token: '--content-highlight', sample: 'Aa' },
  { name: 'Primary', value: '#18181B', token: '--content-primary', sample: 'Aa' },
  { name: 'Subtle', value: '#71717A', token: '--content-subtle', sample: 'Aa' },
  { name: 'Muted', value: '#A1A1AA', token: '--content-muted', sample: 'Aa' },
];

const borderColors = [
  { name: 'Subtle', value: '#E4E4E7', token: '--border-subtle' },
  { name: 'Strong', value: '#D4D4D8', token: '--border-strong' },
  { name: 'Brand', value: '#18181B', token: '--border-brand' },
];

const statusColors = [
  { name: 'Error', value: '#DC2626', soft: '#FEE2E2', token: '--color-error' },
  { name: 'Success', value: '#16A34A', soft: '#DCFCE7', token: '--color-success' },
  { name: 'Info', value: '#2563EB', soft: '#DBEAFE', token: '--color-info' },
];

const shadowTokens = [
  { name: 'sm', value: '0px 1px 2px rgba(0, 0, 0, 0.04)' },
  { name: 'md', value: '0px 2px 4px rgba(0, 0, 0, 0.06)' },
  { name: 'lg', value: '0px 4px 8px rgba(0, 0, 0, 0.08)' },
  { name: 'xl', value: '0px 8px 16px rgba(0, 0, 0, 0.08)' },
];

const typographyTokens = [
  { name: 'Display', size: '48px', weight: '300', lineHeight: '1.1' },
  { name: 'Heading', size: '24px', weight: '500', lineHeight: '1.3' },
  { name: 'Label L', size: '16px', weight: '500', lineHeight: '1.5' },
  { name: 'Label M', size: '14px', weight: '500', lineHeight: '1.5' },
  { name: 'Body L', size: '16px', weight: '400', lineHeight: '1.7' },
  { name: 'Body R', size: '14px', weight: '400', lineHeight: '1.6' },
];

const miniPrompt = `Minimal Clean 디자인 가이드:

[디자인 철학]
- Less is more. 불필요한 요소는 과감히 제거한다
- 타이포그래피가 이끄는 위계. 장식보다 글꼴 크기와 굵기로 구분
- 넉넉한 여백이 고급스러움을 만든다. 빈 공간도 디자인이다
- 모노크롬 베이스에 최소한의 악센트. 색상은 절제되게

[UX 원칙]
- 콘텐츠에 집중하게 하는 디자인. 방해 요소 제거
- 명확한 동선과 직관적인 네비게이션
- 일관된 간격과 정렬로 질서감 부여
- 인터랙션은 미묘하지만 분명하게

[컬러]
- Primary: #18181B (Black), Hover: #27272A
- Background: #FFFFFF, Secondary: #FAFAFA
- Text: #09090B (제목), #18181B (본문), #71717A (보조)
- Border: #E4E4E7, Focus: #18181B

[사이즈]
- Spacing: 요소 내부 12px, 요소 간격 24px, 섹션 간격 80px
- Radius: 버튼/인풋 4px, 카드 8px, 배지 4px
- 버튼: 48px (기본), 40px (소형)
- 인풋: 48px
- Font: Pretendard, 14px 본문, 48px 디스플레이 (light weight)`;

export default function MinimalCleanPage() {
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
    const filename = type === 'md' ? 'minimal-clean.md' : 'minimal-clean-tokens.css';
    const link = document.createElement('a');
    link.href = `/downloads/${filename}`;
    link.download = filename;
    link.click();
  };

  return (
    <div>
      <h1 className="page-title">Minimal Clean</h1>
      <p className="page-description">
        순수한 흑백 기반의 미니멀 디자인 시스템입니다. 넓은 여백과 절제된 타이포그래피로 콘텐츠에 집중합니다.
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
          borderRadius: '8px',
          border: '1px solid #E4E4E7',
          overflow: 'hidden',
          background: '#FFFFFF',
        }}>
          {/* Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '24px 48px',
            background: '#FFFFFF',
          }}>
            <div style={{
              fontWeight: 500,
              fontSize: '16px',
              color: '#18181B',
              letterSpacing: '-0.02em',
            }}>
              minimal
            </div>
            <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
              <span style={{ color: '#71717A', fontSize: '14px', fontWeight: 400 }}>About</span>
              <span style={{ color: '#71717A', fontSize: '14px', fontWeight: 400 }}>Work</span>
              <span style={{ color: '#71717A', fontSize: '14px', fontWeight: 400 }}>Contact</span>
            </div>
          </div>

          {/* Hero Section */}
          <div style={{
            padding: '80px 48px',
            background: '#FFFFFF',
          }}>
            <div style={{ maxWidth: '600px' }}>
              <div style={{
                fontSize: '48px',
                fontWeight: 300,
                color: '#18181B',
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                marginBottom: '24px',
              }}>
                Design with<br />intention.
              </div>
              <p style={{
                fontSize: '16px',
                color: '#71717A',
                lineHeight: 1.7,
                marginBottom: '48px',
                maxWidth: '400px',
              }}>
                Every element serves a purpose. Nothing more, nothing less.
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{
                  height: '48px',
                  padding: '0 32px',
                  background: '#18181B',
                  color: '#FFFFFF',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  letterSpacing: '-0.01em',
                }}>Get Started</div>
                <div style={{
                  height: '48px',
                  padding: '0 32px',
                  background: 'transparent',
                  color: '#18181B',
                  border: '1px solid #E4E4E7',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  letterSpacing: '-0.01em',
                }}>Learn More</div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: '1px', background: '#F4F4F5', margin: '0 48px' }} />

          {/* Features Section */}
          <div style={{ padding: '80px 48px' }}>
            <div style={{
              fontSize: '12px',
              fontWeight: 500,
              color: '#A1A1AA',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '48px',
            }}>
              Features
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '48px',
            }}>
              {[
                { number: '01', title: 'Simple', desc: 'Clarity over complexity' },
                { number: '02', title: 'Focused', desc: 'One thing at a time' },
                { number: '03', title: 'Timeless', desc: 'Beyond trends' },
              ].map((feature) => (
                <div key={feature.number}>
                  <div style={{
                    fontSize: '12px',
                    color: '#A1A1AA',
                    marginBottom: '16px',
                  }}>{feature.number}</div>
                  <div style={{
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#18181B',
                    marginBottom: '8px',
                    letterSpacing: '-0.02em',
                  }}>{feature.title}</div>
                  <div style={{
                    fontSize: '14px',
                    color: '#71717A',
                    lineHeight: 1.6,
                  }}>{feature.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Section */}
          <div style={{
            padding: '80px 48px',
            background: '#FAFAFA',
          }}>
            <div style={{
              maxWidth: '500px',
              margin: '0 auto',
              textAlign: 'center',
            }}>
              <div style={{
                fontSize: '24px',
                fontWeight: 300,
                color: '#18181B',
                lineHeight: 1.5,
                letterSpacing: '-0.02em',
                marginBottom: '24px',
              }}>
                "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away."
              </div>
              <div style={{
                fontSize: '14px',
                color: '#A1A1AA',
              }}>
                Antoine de Saint-Exupéry
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div style={{
            padding: '80px 48px',
            background: '#18181B',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div style={{
              fontSize: '24px',
              fontWeight: 300,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
            }}>
              Ready to simplify?
            </div>
            <div style={{
              height: '48px',
              padding: '0 32px',
              background: '#FFFFFF',
              color: '#18181B',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
            }}>Start Now</div>
          </div>

          {/* Footer */}
          <div style={{
            padding: '24px 48px',
            background: '#FFFFFF',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #F4F4F5',
          }}>
            <div style={{
              fontWeight: 500,
              fontSize: '14px',
              color: '#18181B',
              letterSpacing: '-0.02em',
            }}>
              minimal
            </div>
            <div style={{
              color: '#A1A1AA',
              fontSize: '13px',
            }}>
              2025
            </div>
          </div>
        </div>
      </section>

      {/* 콤비네이션 팔레트 섹션 */}
      <section>
        <h2 className="section-title">Combination Palette</h2>
        <p className="section-desc">미니멀 흑백 테마와 어울리는 추천 조합</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '60%' }}>
          {combinationSets.map((set) => (
            <div key={set.name}>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--content-primary)' }}>{set.name}</span>
                <span style={{ marginLeft: '8px', fontSize: '13px', color: 'var(--content-subtle)' }}>{set.description}</span>
              </div>
              <div style={{ display: 'flex', height: '64px', borderRadius: '4px', overflow: 'hidden', border: '1px solid #E4E4E7' }}>
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
                      color: ['#18181B', '#1C1917', '#0F172A', '#52525B', '#44403C', '#334155'].includes(color.value) ? '#FFFFFF' : '#18181B',
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
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '8px',
                color: color.textColor,
                fontSize: '11px',
                fontWeight: 300,
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
                border: ['#A1A1AA'].includes(color.value) ? '1px solid #E4E4E7' : 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '8px',
                color: ['#09090B', '#18181B'].includes(color.value) ? '#FFFFFF' : '#18181B',
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
                border: ['#E4E4E7', '#D4D4D8'].includes(color.value) ? '1px solid #E4E4E7' : 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '8px',
                color: color.value === '#18181B' ? '#FFFFFF' : '#18181B',
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
                    borderRadius: '4px',
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
                    border: '1px solid #E4E4E7',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    padding: '8px',
                    color: '#18181B',
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
                Minimal 123
              </span>
              <span className="spacing-value">{token.size} / {token.weight}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 컴포넌트 미리보기 섹션 */}
      <section>
        <h2 className="section-title">Components</h2>
        <p className="section-desc">Minimal Clean 스타일이 적용된 컴포넌트 예시</p>

        <h3 className="subsection-title">Button</h3>
        <div className="card" style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap', alignItems: 'center' }}>
          <button style={{
            height: '48px',
            padding: '12px 32px',
            background: '#18181B',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            letterSpacing: '-0.01em',
          }}>Primary Button</button>
          <button style={{
            height: '48px',
            padding: '12px 32px',
            background: '#FFFFFF',
            color: '#18181B',
            border: '1px solid #E4E4E7',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            letterSpacing: '-0.01em',
          }}>Secondary Button</button>
          <button style={{
            height: '40px',
            padding: '10px 20px',
            background: '#18181B',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '4px',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
            letterSpacing: '-0.01em',
          }}>Small Button</button>
        </div>

        <h3 className="subsection-title">Input</h3>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)', maxWidth: '320px' }}>
          <input
            type="text"
            placeholder="Default input"
            style={{
              height: '48px',
              padding: '12px 16px',
              border: '1px solid #E4E4E7',
              borderRadius: '4px',
              fontSize: '14px',
              outline: 'none',
              background: '#FFFFFF',
            }}
          />
          <input
            type="text"
            placeholder="Focus state"
            style={{
              height: '48px',
              padding: '12px 16px',
              border: '2px solid #18181B',
              borderRadius: '4px',
              fontSize: '14px',
              outline: 'none',
              background: '#FFFFFF',
            }}
          />
          <input
            type="text"
            placeholder="Error state"
            style={{
              height: '48px',
              padding: '12px 16px',
              border: '1px solid #DC2626',
              borderRadius: '4px',
              fontSize: '14px',
              outline: 'none',
              background: '#FFFFFF',
            }}
          />
        </div>

        <h3 className="subsection-title">Card</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-3)' }}>
          <div style={{
            padding: '32px',
            background: '#FFFFFF',
            border: '1px solid #E4E4E7',
            borderRadius: '8px',
          }}>
            <div style={{ fontSize: '18px', fontWeight: 500, color: '#18181B', marginBottom: '12px', letterSpacing: '-0.02em' }}>Card Title</div>
            <div style={{ fontSize: '14px', color: '#71717A', lineHeight: 1.6 }}>Simple card with generous padding and clean borders.</div>
          </div>
          <div style={{
            padding: '24px',
            background: '#FAFAFA',
            border: 'none',
            borderRadius: '8px',
          }}>
            <div style={{ fontSize: '16px', fontWeight: 500, color: '#18181B', marginBottom: '8px', letterSpacing: '-0.02em' }}>Subtle Card</div>
            <div style={{ fontSize: '14px', color: '#71717A', lineHeight: 1.6 }}>Background variation without border.</div>
          </div>
        </div>

        <h3 className="subsection-title">Badge</h3>
        <div className="card" style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{
            height: '28px',
            padding: '0 12px',
            background: '#18181B',
            color: '#FFFFFF',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 500,
            display: 'inline-flex',
            alignItems: 'center',
          }}>Primary</span>
          <span style={{
            height: '28px',
            padding: '0 12px',
            background: '#F4F4F5',
            color: '#18181B',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 500,
            display: 'inline-flex',
            alignItems: 'center',
          }}>Secondary</span>
          <span style={{
            height: '28px',
            padding: '0 12px',
            background: '#DCFCE7',
            color: '#16A34A',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 500,
            display: 'inline-flex',
            alignItems: 'center',
          }}>Success</span>
          <span style={{
            height: '28px',
            padding: '0 12px',
            background: '#FEE2E2',
            color: '#DC2626',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 500,
            display: 'inline-flex',
            alignItems: 'center',
          }}>Error</span>
          <span style={{
            height: '28px',
            padding: '0 12px',
            background: '#FFFFFF',
            color: '#71717A',
            border: '1px solid #E4E4E7',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 500,
            display: 'inline-flex',
            alignItems: 'center',
          }}>Outline</span>
        </div>
      </section>
    </div>
  );
}
