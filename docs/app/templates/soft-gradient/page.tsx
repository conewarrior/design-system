'use client';

import { useState } from 'react';

const brandColors = [
  { name: 'Brand', value: '#F37BB5', token: '--color-brand', textColor: '#FFFFFF' },
  { name: 'Brand Hover', value: '#E85DA0', token: '--color-brand-hover', textColor: '#FFFFFF' },
  { name: 'Brand Soft', value: '#FDF2F8', token: '--color-brand-soft', textColor: '#F37BB5' },
];

const combinationSets = [
  {
    name: 'Set 1 - Blossom',
    description: '핑크 → 보라 소프트 그라디언트',
    colors: [
      { value: '#F37BB5', name: 'Pink' },
      { value: '#E89BC6', name: 'Pink Mauve' },
      { value: '#DAADD8', name: 'Mauve' },
      { value: '#CCBFE8', name: 'Lavender' },
      { value: '#C4B5FD', name: 'Soft Violet' },
    ],
  },
  {
    name: 'Set 2 - Sunrise',
    description: '주황 → 노랑 소프트 그라디언트',
    colors: [
      { value: '#FDBA74', name: 'Soft Orange' },
      { value: '#FDC88A', name: 'Peach' },
      { value: '#FDE68A', name: 'Soft Yellow' },
      { value: '#FEF08A', name: 'Light Yellow' },
      { value: '#FEF9C3', name: 'Cream' },
    ],
  },
  {
    name: 'Set 3 - Meadow',
    description: '초록 → 하늘 소프트 그라디언트',
    colors: [
      { value: '#B5E8C3', name: 'Soft Green' },
      { value: '#B8E5D8', name: 'Mint' },
      { value: '#C2E6E6', name: 'Teal' },
      { value: '#C9E8F0', name: 'Cyan' },
      { value: '#D4EAFA', name: 'Soft Sky' },
    ],
  },
];

const contentColors = [
  { name: 'Highlight', value: '#1F2937', token: '--content-highlight', sample: 'Aa' },
  { name: 'Primary', value: '#4B5563', token: '--content-primary', sample: 'Aa' },
  { name: 'Subtle', value: '#9CA3AF', token: '--content-subtle', sample: 'Aa' },
  { name: 'Muted', value: '#D1D5DB', token: '--content-muted', sample: 'Aa' },
];

const borderColors = [
  { name: 'Subtle', value: '#F3F4F6', token: '--border-subtle' },
  { name: 'Medium', value: '#E5E7EB', token: '--border-medium' },
  { name: 'Brand', value: '#F37BB5', token: '--border-brand' },
];

const statusColors = [
  { name: 'Error', value: '#F87171', soft: '#FEF2F2', token: '--color-error' },
  { name: 'Success', value: '#34D399', soft: '#ECFDF5', token: '--color-success' },
  { name: 'Info', value: '#60A5FA', soft: '#EFF6FF', token: '--color-info' },
];

const shadowTokens = [
  { name: 'sm', value: '0 1px 2px rgba(243, 123, 181, 0.05)' },
  { name: 'md', value: '0 4px 12px rgba(243, 123, 181, 0.08)' },
  { name: 'lg', value: '0 8px 24px rgba(243, 123, 181, 0.1)' },
  { name: 'xl', value: '0 16px 32px rgba(243, 123, 181, 0.12)' },
];

const typographyTokens = [
  { name: 'Display', size: '32px', weight: '700', lineHeight: '1.2' },
  { name: 'Heading', size: '24px', weight: '600', lineHeight: '1.3' },
  { name: 'Label L', size: '16px', weight: '600', lineHeight: '1.5' },
  { name: 'Label M', size: '14px', weight: '500', lineHeight: '1.5' },
  { name: 'Body L', size: '16px', weight: '400', lineHeight: '1.6' },
  { name: 'Body R', size: '14px', weight: '400', lineHeight: '1.5' },
];

const prompt = `Soft Gradient 디자인 가이드:

[디자인 철학]
- 부드러운 색상이 따뜻하고 친근한 느낌을 만든다
- 은은한 그라디언트가 깊이감을 주되 과하지 않게
- 파스텔 악센트가 모던하면서 친근한 인상
- 둥근 모서리가 부드러운 미학을 완성

[UX 원칙]
- 사용자에게 편안하고 환영받는 느낌을 주는 디자인
- 충분한 여백으로 여유로운 레이아웃
- 그라디언트는 미묘하게, 주인공은 콘텐츠
- 부드러운 트랜지션으로 우아한 인터랙션

[컬러]
- Primary: #F37BB5 (Pink), Hover: #E85DA0
- Background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)
- Secondary BG: #FDF2F8, Cards: #FFFFFF
- Text: #1F2937 (제목), #4B5563 (본문), #9CA3AF (보조)
- Border: #E5E7EB, Focus: #F37BB5

[사이즈]
- Spacing: 요소 내부 12px, 요소 간격 16px, 섹션 간격 48px
- Radius: 버튼/인풋 10~12px, 카드 14~16px, 배지 pill (13px)
- 버튼: 44px (기본), 36px (소형)
- 인풋: 44px
- Font: Pretendard, 14px 본문, 32px 디스플레이

[적용 가이드]
이 가이드는 기본 지침이며, 앱의 특성과 성격에 따라 유연하게 조정하세요:
- 웹 vs 모바일: 모바일은 터치 타겟 48px 이상, 대중적인 디바이스의 기준을 따른다.
- 정보 밀도: 대시보드는 적당히 촘촘하게, 랜딩/마케팅은 여유롭게
- 브랜드 톤: 친근함은 컬러를 조금 더 사용하고, 신뢰감은 화이트 위주 + 포인트 컬러는 적게
→ 컬러와 디자인 철학은 유지하되, 사이즈/간격/컬러 사용량은 상황에 맞게 조정`;

export default function SoftGradientPage() {
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
    const filename = type === 'md' ? 'soft-gradient.md' : 'soft-gradient-tokens.css';
    const link = document.createElement('a');
    link.href = `/downloads/${filename}`;
    link.download = filename;
    link.click();
  };

  return (
    <div>
      <h1 className="page-title">Soft Gradient</h1>
      <p className="page-description">
        부드러운 파스텔 그라디언트와 핑크 악센트의 따뜻한 디자인 시스템입니다. SaaS 제품, 웰니스 앱에 적합합니다.
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
          border: '1px solid #E5E7EB',
          overflow: 'hidden',
          background: '#FFFFFF',
        }}>
          {/* Background Image Section */}
          <div style={{
            backgroundImage: 'url(/soft-gradient-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          {/* Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 24px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
            background: 'rgba(255, 255, 255, 0.25)',
            backdropFilter: 'blur(12px)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '28px',
                height: '28px',
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#6B7280',
                fontWeight: 700,
                fontSize: '12px',
                border: '1px solid rgba(255, 255, 255, 0.5)',
              }}>S</div>
              <span style={{ fontWeight: 600, fontSize: '15px', color: '#1F2937' }}>SoftUI</span>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <span style={{ color: '#9CA3AF', fontSize: '13px' }}>Features</span>
              <span style={{ color: '#9CA3AF', fontSize: '13px' }}>Pricing</span>
              <span style={{ color: '#9CA3AF', fontSize: '13px' }}>About</span>
              <div style={{
                height: '32px',
                padding: '0 16px',
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#4B5563',
                borderRadius: '10px',
                fontSize: '13px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                backdropFilter: 'blur(8px)',
              }}>Get Started</div>
            </div>
          </div>

          {/* Hero Section */}
          <div style={{
            padding: '48px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(8px)',
          }}>
            <div style={{ flex: 1 }}>
              <span style={{
                display: 'inline-block',
                padding: '4px 12px',
                background: '#FDF2F8',
                color: '#F37BB5',
                borderRadius: '20px',
                fontSize: '11px',
                fontWeight: 600,
                marginBottom: '16px',
                border: '1px solid rgba(243, 123, 181, 0.2)',
              }}>Introducing SoftUI</span>
              <div style={{
                fontSize: '32px',
                fontWeight: 700,
                color: '#1F2937',
                lineHeight: 1.2,
                marginBottom: '12px',
              }}>
                Design with <span style={{
                  color: '#F37BB5',
                }}>warmth</span>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#9CA3AF',
                lineHeight: 1.6,
                marginBottom: '20px',
              }}>
                Create beautiful, welcoming interfaces with soft gradients and pastel accents.
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{
                  height: '40px',
                  padding: '0 20px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  color: '#4B5563',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  backdropFilter: 'blur(8px)',
                }}>Start Free</div>
                <div style={{
                  height: '40px',
                  padding: '0 20px',
                  background: 'rgba(255, 255, 255, 0.3)',
                  color: '#4B5563',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  backdropFilter: 'blur(8px)',
                }}>Watch Demo</div>
              </div>
            </div>
            <div style={{
              flex: 1,
              height: '220px',
              background: 'rgba(255, 255, 255, 0.6)',
              borderRadius: '16px',
              border: '1px solid rgba(243, 123, 181, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(4px)',
            }}>
              <div style={{
                width: '85%',
                height: '85%',
                background: 'linear-gradient(135deg, #FFFFFF 0%, #FDF2F8 100%)',
                borderRadius: '12px',
                border: '1px solid rgba(243, 123, 181, 0.15)',
                padding: '16px',
                boxShadow: '0 8px 24px rgba(243, 123, 181, 0.1)',
              }}>
                <div style={{ display: 'flex', gap: '6px', marginBottom: '14px' }}>
                  <div style={{ width: '10px', height: '10px', background: '#FECACA', borderRadius: '50%' }} />
                  <div style={{ width: '10px', height: '10px', background: '#FDE68A', borderRadius: '50%' }} />
                  <div style={{ width: '10px', height: '10px', background: '#A7F3D0', borderRadius: '50%' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ width: '60%', height: '10px', background: 'linear-gradient(90deg, #F37BB5 0%, #FDF2F8 100%)', borderRadius: '5px' }} />
                  <div style={{ width: '80%', height: '8px', background: '#F3F4F6', borderRadius: '4px' }} />
                  <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                    <div style={{ width: '60px', height: '24px', background: 'rgba(255, 255, 255, 0.9)', borderRadius: '6px', border: '1px solid #E5E7EB' }} />
                    <div style={{ width: '60px', height: '24px', background: '#F3F4F6', borderRadius: '6px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div style={{
            padding: '28px 24px',
            background: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid rgba(255, 255, 255, 0.3)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
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
                <div style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#1F2937',
                }}>{stat.value}</div>
                <div style={{ fontSize: '12px', color: '#6B7280' }}>{stat.label}</div>
              </div>
            ))}
          </div>
          </div>

          {/* Features Section */}
          <div style={{ padding: '36px 24px', background: '#FFFFFF' }}>
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#1F2937', marginBottom: '6px' }}>
                Designed for comfort
              </div>
              <p style={{ fontSize: '13px', color: '#9CA3AF' }}>
                Every element crafted with care
              </p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
            }}>
              {[
                { title: 'Soft Colors', desc: 'Gentle on the eyes', gradient: 'linear-gradient(135deg, #F9A8D4 0%, #C4B5FD 100%)' },
                { title: 'Gradients', desc: 'Smooth transitions', gradient: 'linear-gradient(135deg, #C4B5FD 0%, #93C5FD 100%)' },
                { title: 'Friendly Feel', desc: 'Welcoming design', gradient: 'linear-gradient(135deg, #93C5FD 0%, #86EFAC 100%)' },
              ].map((feature, idx) => (
                <div key={idx} style={{
                  padding: '20px',
                  background: '#FAFAFA',
                  border: '1px solid #E5E7EB',
                  borderRadius: '14px',
                  textAlign: 'center',
                }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: feature.gradient,
                    margin: '0 auto 10px',
                  }} />
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#1F2937', marginBottom: '4px' }}>{feature.title}</div>
                  <div style={{ fontSize: '12px', color: '#9CA3AF' }}>{feature.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div style={{
            padding: '36px 24px',
            background: '#FFFFFF',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '20px', fontWeight: 700, color: '#1F2937', marginBottom: '10px' }}>
              Ready to create something beautiful?
            </div>
            <p style={{ fontSize: '13px', color: '#6B7280', marginBottom: '20px' }}>
              Join thousands of happy designers
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <div style={{
                height: '36px',
                padding: '0 20px',
                background: '#FFFFFF',
                color: '#4B5563',
                borderRadius: '10px',
                fontSize: '13px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #E5E7EB',
              }}>Get Started</div>
              <div style={{
                height: '36px',
                padding: '0 20px',
                background: 'transparent',
                color: '#F37BB5',
                border: '1px solid #F37BB5',
                borderRadius: '10px',
                fontSize: '13px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
              }}>Learn More</div>
            </div>
          </div>

          {/* Footer */}
          <div style={{
            padding: '16px 24px',
            borderTop: '1px solid #E5E7EB',
            background: '#FFFFFF',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '18px',
                height: '18px',
                background: '#F37BB5',
                borderRadius: '5px',
              }} />
              <span style={{ fontWeight: 600, fontSize: '12px', color: '#4B5563' }}>SoftUI Design</span>
            </div>
            <div style={{ color: '#D1D5DB', fontSize: '11px' }}>
              © 2025 SoftUI
            </div>
          </div>
        </div>
      </section>

      {/* 콤비네이션 팔레트 섹션 */}
      <section>
        <h2 className="section-title">Combination Palette</h2>
        <p className="section-desc">핑크 브랜드 컬러와 어울리는 소프트 파스텔 조합</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '60%' }}>
          {combinationSets.map((set) => (
            <div key={set.name}>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--content-primary)' }}>{set.name}</span>
                <span style={{ marginLeft: '8px', fontSize: '13px', color: 'var(--content-subtle)' }}>{set.description}</span>
              </div>
              <div style={{ display: 'flex', height: '64px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #E5E7EB' }}>
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
                      color: ['#F37BB5', '#E89BC6'].includes(color.value) ? '#FFFFFF' : '#4B5563',
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
        <p className="section-desc">AI에게 바로 붙여넣을 수 있는 Soft Gradient 디자인 지침입니다.</p>
        <div style={{ position: 'relative' }}>
          <pre><code>{prompt}</code></pre>
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
                border: color.value === '#FDF2F8' ? '1px solid #E5E7EB' : 'none',
                borderRadius: '12px',
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
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '8px',
                color: color.value === '#1F2937' || color.value === '#4B5563' ? '#FFFFFF' : '#4B5563',
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
                border: ['#F3F4F6', '#E5E7EB'].includes(color.value) ? '1px solid #E5E7EB' : 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '8px',
                color: color.value === '#F37BB5' ? '#FFFFFF' : '#4B5563',
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
                    borderRadius: '12px',
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
                    border: '1px solid #E5E7EB',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    padding: '8px',
                    color: '#4B5563',
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
              <div className="shadow-demo" style={{ boxShadow: token.value, borderRadius: '12px' }} />
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
        <p className="section-desc">Soft Gradient 스타일이 적용된 컴포넌트 예시</p>

        <h3 className="subsection-title">Button</h3>
        <div className="card" style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap', alignItems: 'center' }}>
          <button style={{
            height: '44px',
            padding: '10px 20px',
            background: '#FFFFFF',
            color: '#4B5563',
            border: '1px solid #E5E7EB',
            borderRadius: '12px',
            fontSize: '15px',
            fontWeight: 600,
            cursor: 'pointer',
          }}>Primary Button</button>
          <button style={{
            height: '44px',
            padding: '10px 20px',
            background: '#FFFFFF',
            color: '#4B5563',
            border: '1px solid #E5E7EB',
            borderRadius: '12px',
            fontSize: '15px',
            fontWeight: 600,
            cursor: 'pointer',
          }}>Secondary Button</button>
          <button style={{
            height: '36px',
            padding: '8px 16px',
            background: '#FDF2F8',
            color: '#F37BB5',
            border: '1px solid rgba(243, 123, 181, 0.2)',
            borderRadius: '10px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
          }}>Soft Button</button>
        </div>

        <h3 className="subsection-title">Input</h3>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)', maxWidth: '320px' }}>
          <input
            type="text"
            placeholder="Default input"
            style={{
              height: '44px',
              padding: '10px 16px',
              border: '1px solid #E5E7EB',
              borderRadius: '10px',
              fontSize: '14px',
              outline: 'none',
              background: '#FFFFFF',
            }}
          />
          <input
            type="text"
            placeholder="Focus state"
            style={{
              height: '44px',
              padding: '10px 16px',
              border: '2px solid #F37BB5',
              borderRadius: '10px',
              fontSize: '14px',
              outline: 'none',
              background: '#FFFFFF',
              boxShadow: '0 0 0 3px rgba(243, 123, 181, 0.1)',
            }}
          />
          <input
            type="text"
            placeholder="Error state"
            style={{
              height: '44px',
              padding: '10px 16px',
              border: '1px solid #F87171',
              borderRadius: '10px',
              fontSize: '14px',
              outline: 'none',
              background: '#FEF2F2',
            }}
          />
        </div>

        <h3 className="subsection-title">Card</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-3)' }}>
          <div style={{
            padding: '24px',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FDF2F8 100%)',
            border: '1px solid rgba(243, 123, 181, 0.1)',
            borderRadius: '16px',
            boxShadow: '0px 8px 24px rgba(243, 123, 181, 0.1)',
          }}>
            <div style={{ fontSize: '16px', fontWeight: 600, color: '#1F2937', marginBottom: '8px' }}>Gradient Card</div>
            <div style={{ fontSize: '14px', color: '#9CA3AF' }}>Beautiful soft gradient background.</div>
          </div>
          <div style={{
            padding: '20px',
            background: 'rgba(255, 255, 255, 0.8)',
            border: '1px solid #E5E7EB',
            borderRadius: '14px',
            backdropFilter: 'blur(4px)',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 500, color: '#4B5563', marginBottom: '4px' }}>Glass Card</div>
            <div style={{ fontSize: '14px', color: '#9CA3AF' }}>Frosted glass effect.</div>
          </div>
        </div>

        <h3 className="subsection-title">Badge</h3>
        <div className="card" style={{ display: 'flex', gap: 'var(--spacing-2)', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{
            height: '26px',
            padding: '0 12px',
            background: '#FDF2F8',
            color: '#F37BB5',
            borderRadius: '13px',
            fontSize: '12px',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            border: '1px solid rgba(243, 123, 181, 0.2)',
          }}>Brand</span>
          <span style={{
            height: '26px',
            padding: '0 12px',
            background: '#ECFDF5',
            color: '#34D399',
            borderRadius: '13px',
            fontSize: '12px',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
          }}>Success</span>
          <span style={{
            height: '26px',
            padding: '0 12px',
            background: '#FEF2F2',
            color: '#F87171',
            borderRadius: '13px',
            fontSize: '12px',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
          }}>Error</span>
          <span style={{
            height: '26px',
            padding: '0 12px',
            background: '#EFF6FF',
            color: '#60A5FA',
            borderRadius: '13px',
            fontSize: '12px',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
          }}>Info</span>
          <span style={{
            height: '26px',
            padding: '0 12px',
            background: '#F3F4F6',
            color: '#9CA3AF',
            borderRadius: '10px',
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
