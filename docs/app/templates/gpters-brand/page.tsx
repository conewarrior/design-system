'use client';

import { useState } from 'react';

const brandColors = [
  { name: 'Brand', value: '#FF6900', token: '--color-brand', textColor: '#FFFFFF' },
  { name: 'Brand Hover', value: '#FFF0D3', token: '--color-brand-hover', textColor: '#FF6900' },
];

// Combination Sets - 오렌지 브랜드 컬러와 어울리는 조합
const combinationSets = [
  {
    name: 'Set 1 - Classic',
    description: '오렌지 + 딥 블루 (보색 조화)',
    colors: [
      { value: '#FF6900', name: 'Orange' },
      { value: '#1E3A5F', name: 'Deep Blue' },
      { value: '#F5F7FA', name: 'Light Gray' },
      { value: '#2D5F8B', name: 'Steel Blue' },
      { value: '#FFE8D6', name: 'Peach' },
    ],
  },
  {
    name: 'Set 2 - Warm',
    description: '오렌지 + 골드/베이지 (유사색 조화)',
    colors: [
      { value: '#FF6900', name: 'Orange' },
      { value: '#FFB347', name: 'Golden' },
      { value: '#FFF8F0', name: 'Cream' },
      { value: '#8B4513', name: 'Saddle Brown' },
      { value: '#D4A574', name: 'Tan' },
    ],
  },
  {
    name: 'Set 3 - Modern',
    description: '오렌지 + 다크 그레이 (모노톤 대비)',
    colors: [
      { value: '#FF6900', name: 'Orange' },
      { value: '#1A1A1A', name: 'Charcoal' },
      { value: '#F8F8F8', name: 'Off White' },
      { value: '#4A4A4A', name: 'Dark Gray' },
      { value: '#E8E8E8', name: 'Silver' },
    ],
  },
];

const contentColors = [
  { name: 'Highlight', value: '#09090B', token: '--content-highlight', sample: 'Aa' },
  { name: 'Primary', value: '#3F4146', token: '--content-primary', sample: 'Aa' },
  { name: 'Subtle', value: '#71717A', token: '--content-subtle', sample: 'Aa' },
  { name: 'Muted', value: '#B5B5BA', token: '--content-muted', sample: 'Aa' },
];

const borderColors = [
  { name: 'Subtle', value: '#E4E4E7', token: '--border-subtle' },
  { name: 'Strong', value: '#B5B5BA', token: '--border-strong' },
  { name: 'Brand', value: '#FF6900', token: '--border-brand' },
];

const statusColors = [
  { name: 'Error', value: '#E7000B', soft: '#FFE8E9', token: '--informative-red' },
  { name: 'Success', value: '#008236', soft: '#B9F8CF', token: '--informative-green' },
  { name: 'Info', value: '#509EDA', soft: '#DBEAFE', token: '--informative-blue' },
];

const shadowTokens = [
  { name: 'sm', value: '0px 1px 2px rgba(10, 13, 18, 0.05)' },
  { name: 'md', value: '0px 4px 6px rgba(16, 24, 40, 0.09)' },
  { name: 'lg', value: '0px 8px 8px -4px rgba(16, 24, 40, 0.09)' },
  { name: 'xl', value: '0px 8px 16px -2px rgba(16, 24, 40, 0.09)' },
];

const typographyTokens = [
  { name: 'Display', size: '24px', weight: '600', lineHeight: '36px' },
  { name: 'Heading', size: '20px', weight: '600', lineHeight: '30px' },
  { name: 'Label L', size: '16px', weight: '600', lineHeight: '24px' },
  { name: 'Label M', size: '14px', weight: '500', lineHeight: '21px' },
  { name: 'Body L', size: '16px', weight: '400', lineHeight: '24px' },
  { name: 'Body R', size: '14px', weight: '400', lineHeight: '21px' },
];

const prompt = `GPTers 브랜드 디자인 가이드:

[디자인 철학]
- 깔끔하고 미니멀한 느낌. 복잡함 없이 핵심만 보여준다
- 오렌지는 "액션"을 의미. CTA와 강조에만 사용하고 남용 금지
- 충분한 여백으로 숨 쉴 공간을 준다. 빽빽하게 채우지 않는다
- 시각적 계층을 명확히: 제목 → 본문 → 보조텍스트 순으로 명도 차이

[UX 원칙]
- 사용자 플로우를 고려해 자연스러운 동선으로 배치한다
- 시각적 위계를 명확히: 가장 중요한 것이 가장 눈에 띄어야 한다
- 한 화면에 하나의 목적. 사용자가 뭘 해야 하는지 명확히
- 인터랙션 피드백은 즉각적으로. 클릭/호버 상태를 분명히 보여준다

[컬러]
- Primary: #FF6900 (CTA, 링크, 강조)
- Background: #FFFFFF, Secondary BG: #FAFAFA
- Text: #09090B (제목), #3F4146 (본문), #71717A (보조)
- Border: #E4E4E7, Focus: #FF6900

[사이즈]
- Spacing: 요소 내부 8px, 요소 간격 16px, 섹션 간격 32px
- Radius: 버튼/인풋 8px, 카드 12px, 배지 full
- 버튼: 32px (기본), 44px (큰 CTA)
- 인풋: 44px
- Font: Pretendard, 14px 본문, 24px 타이틀

[적용 가이드]
이 가이드는 기본 지침이며, 앱의 특성과 성격에 따라 유연하게 조정하세요:
- 웹 vs 모바일: 모바일은 터치 타겟 48px 이상, 대중적인 디바이스의 기준을 따른다.
- 정보 밀도: 대시보드는 적당히 촘촘하게, 랜딩/마케팅은 여유롭게
- 브랜드 톤: 친근함은 컬러를 조금 더 사용하고, 신뢰감은 화이트 위주 + 포인트 컬러는 적게
→ 컬러와 디자인 철학은 유지하되, 사이즈/간격/컬러 사용량은 상황에 맞게 조정`;

export default function GPTersBrandPage() {
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
    const filename = type === 'md' ? 'gpters-brand.md' : 'gpters-brand-tokens.css';
    const link = document.createElement('a');
    link.href = `/downloads/${filename}`;
    link.download = filename;
    link.click();
  };

  return (
    <div>
      <h1 className="page-title">GPTers Brand</h1>
      <p className="page-description">
        GPTers 브랜드 아이덴티티 기반 디자인 시스템입니다. 오렌지(#FF6900) 포인트 컬러와 깔끔한 미니멀 레이아웃이 특징입니다.
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
          border: '1px solid #E4E4E7',
          overflow: 'hidden',
          background: '#FFFFFF',
        }}>
          {/* Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 24px',
            borderBottom: '1px solid #E4E4E7',
            background: '#FFFFFF',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '28px',
                height: '28px',
                background: '#FF6900',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '12px',
              }}>G</div>
              <span style={{ fontWeight: 600, fontSize: '15px', color: '#09090B' }}>GPTers</span>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <span style={{ color: '#71717A', fontSize: '13px' }}>Features</span>
              <span style={{ color: '#71717A', fontSize: '13px' }}>Pricing</span>
              <span style={{ color: '#71717A', fontSize: '13px' }}>About</span>
              <div style={{
                height: '32px',
                padding: '0 16px',
                background: '#FF6900',
                color: '#FFFFFF',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
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
                padding: '4px 12px',
                background: '#FFF0D3',
                color: '#FF6900',
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: 600,
                marginBottom: '16px',
              }}>New Feature</span>
              <div style={{
                fontSize: '32px',
                fontWeight: 700,
                color: '#09090B',
                lineHeight: 1.2,
                marginBottom: '12px',
              }}>
                Build faster with <span style={{ color: '#FF6900' }}>GPTers</span>
              </div>
              <p style={{
                fontSize: '14px',
                color: '#71717A',
                lineHeight: 1.6,
                marginBottom: '20px',
              }}>
                A complete design system for building modern web applications.
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{
                  height: '40px',
                  padding: '0 20px',
                  background: '#FF6900',
                  color: '#FFFFFF',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                }}>Start Free</div>
                <div style={{
                  height: '40px',
                  padding: '0 20px',
                  background: '#FFFFFF',
                  color: '#3F4146',
                  border: '1px solid #B5B5BA',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                }}>Learn More</div>
              </div>
            </div>
            <div style={{
              flex: 1,
              height: '220px',
              background: '#FAFAFA',
              borderRadius: '16px',
              border: '1px solid #E4E4E7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <div style={{
                width: '85%',
                height: '85%',
                background: '#FFFFFF',
                borderRadius: '12px',
                border: '1px solid #E4E4E7',
                padding: '16px',
              }}>
                <div style={{ display: 'flex', gap: '6px', marginBottom: '14px' }}>
                  <div style={{ width: '10px', height: '10px', background: '#FFE8E9', borderRadius: '50%' }} />
                  <div style={{ width: '10px', height: '10px', background: '#FFF0D3', borderRadius: '50%' }} />
                  <div style={{ width: '10px', height: '10px', background: '#B9F8CF', borderRadius: '50%' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ width: '50%', height: '10px', background: '#E4E4E7', borderRadius: '5px' }} />
                  <div style={{ width: '70%', height: '8px', background: '#F4F4F5', borderRadius: '4px' }} />
                  <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                    <div style={{ width: '60px', height: '24px', background: '#FF6900', borderRadius: '6px' }} />
                    <div style={{ width: '60px', height: '24px', background: '#F4F4F5', borderRadius: '6px' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div style={{
            padding: '28px 24px',
            background: '#FAFAFA',
            borderTop: '1px solid #E4E4E7',
            borderBottom: '1px solid #E4E4E7',
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
                <div style={{ fontSize: '22px', fontWeight: 700, color: '#FF6900' }}>{stat.value}</div>
                <div style={{ fontSize: '12px', color: '#71717A' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div style={{ padding: '36px 24px' }}>
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#09090B', marginBottom: '6px' }}>
                Everything you need
              </div>
              <p style={{ fontSize: '13px', color: '#71717A' }}>
                Build beautiful, consistent interfaces
              </p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
            }}>
              {[
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="13.5" cy="6.5" r="2.5"/>
                      <circle cx="6.5" cy="13.5" r="2.5"/>
                      <circle cx="17.5" cy="17.5" r="2.5"/>
                      <path d="M13.5 9v2a2 2 0 0 1-2 2H9"/>
                      <path d="M6.5 16v2"/>
                    </svg>
                  ),
                  title: 'Design Tokens'
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" rx="1"/>
                      <rect x="14" y="3" width="7" height="7" rx="1"/>
                      <rect x="3" y="14" width="7" height="7" rx="1"/>
                      <rect x="14" y="14" width="7" height="7" rx="1"/>
                    </svg>
                  ),
                  title: 'Components'
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6900" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2"/>
                      <path d="M12 18h.01"/>
                    </svg>
                  ),
                  title: 'Responsive'
                },
              ].map((feature, idx) => (
                <div key={idx} style={{
                  padding: '20px',
                  background: '#FFFFFF',
                  border: '1px solid #E4E4E7',
                  borderRadius: '12px',
                  textAlign: 'center',
                }}>
                  <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>{feature.icon}</div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#09090B' }}>{feature.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div style={{
            padding: '36px 24px',
            background: '#09090B',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px' }}>
              Ready to get started?
            </div>
            <p style={{ fontSize: '13px', color: '#B5B5BA', marginBottom: '20px' }}>
              Join thousands of developers
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <div style={{
                height: '36px',
                padding: '0 20px',
                background: '#FF6900',
                color: '#FFFFFF',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
              }}>Get Started</div>
              <div style={{
                height: '36px',
                padding: '0 20px',
                background: 'transparent',
                color: '#FFFFFF',
                border: '1px solid #71717A',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
              }}>Contact</div>
            </div>
          </div>

          {/* Footer */}
          <div style={{
            padding: '16px 24px',
            borderTop: '1px solid #E4E4E7',
            background: '#FAFAFA',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '18px',
                height: '18px',
                background: '#FF6900',
                borderRadius: '5px',
              }} />
              <span style={{ fontWeight: 600, fontSize: '12px', color: '#3F4146' }}>GPTers Design</span>
            </div>
            <div style={{ color: '#B5B5BA', fontSize: '11px' }}>
              © 2025 GPTers
            </div>
          </div>
        </div>
      </section>

      {/* 콤비네이션 팔레트 섹션 */}
      <section>
        <h2 className="section-title">Combination Palette</h2>
        <p className="section-desc">오렌지 브랜드 컬러와 어울리는 추천 조합</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '60%' }}>
          {combinationSets.map((set) => (
            <div key={set.name}>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--content-primary)' }}>{set.name}</span>
                <span style={{ marginLeft: '8px', fontSize: '13px', color: 'var(--content-subtle)' }}>{set.description}</span>
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
                      color: ['#1E3A5F', '#1A1A1A', '#4A4A4A', '#8B4513', '#2D5F8B', '#FF6900'].includes(color.value) ? '#FFFFFF' : '#3F4146',
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
        <p className="section-desc">AI에게 바로 붙여넣을 수 있는 디자인 지침입니다.</p>
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
                border: color.value === '#FFF0D3' ? '1px solid #E4E4E7' : 'none',
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
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '8px',
                color: color.value === '#09090B' || color.value === '#3F4146' ? '#FFFFFF' : '#3F4146',
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
                border: ['#E4E4E7', '#B5B5BA'].includes(color.value) ? '1px solid #E4E4E7' : 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '8px',
                color: color.value === '#FF6900' ? '#FFFFFF' : '#3F4146',
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
                    border: '1px solid #E4E4E7',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    padding: '8px',
                    color: '#3F4146',
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
        <p className="section-desc">GPTers 브랜드 스타일이 적용된 컴포넌트 예시</p>

        <h3 className="subsection-title">Button</h3>
        <div className="card" style={{ display: 'flex', gap: 'var(--spacing-3)', flexWrap: 'wrap', alignItems: 'center' }}>
          <button style={{
            height: '44px',
            padding: '10px 16px',
            background: '#FF6900',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
          }}>Primary Button</button>
          <button style={{
            height: '44px',
            padding: '10px 16px',
            background: '#FFFFFF',
            color: '#3F4146',
            border: '1px solid #B5B5BA',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
          }}>Secondary Button</button>
          <button style={{
            height: '32px',
            padding: '6px 12px',
            background: '#FF6900',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
          }}>Small Button</button>
        </div>

        <h3 className="subsection-title">Input</h3>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)', maxWidth: '320px' }}>
          <input
            type="text"
            placeholder="Default input"
            style={{
              height: '44px',
              padding: '8px 14px',
              border: '1px solid #E4E4E7',
              borderRadius: '8px',
              fontSize: '14px',
              outline: 'none',
            }}
          />
          <input
            type="text"
            placeholder="Focus state"
            style={{
              height: '44px',
              padding: '8px 14px',
              border: '2px solid #FF6900',
              borderRadius: '8px',
              fontSize: '14px',
              outline: 'none',
            }}
          />
          <input
            type="text"
            placeholder="Error state"
            style={{
              height: '44px',
              padding: '8px 14px',
              border: '1px solid #E7000B',
              borderRadius: '8px',
              fontSize: '14px',
              outline: 'none',
            }}
          />
        </div>

        <h3 className="subsection-title">Card</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--spacing-3)' }}>
          <div style={{
            padding: '24px',
            background: '#FFFFFF',
            border: '1px solid #E4E4E7',
            borderRadius: '8px',
            boxShadow: '0px 4px 6px rgba(16, 24, 40, 0.09)',
          }}>
            <div style={{ fontSize: '16px', fontWeight: 600, color: '#09090B', marginBottom: '8px' }}>Card Title</div>
            <div style={{ fontSize: '14px', color: '#71717A' }}>Card description text goes here.</div>
          </div>
          <div style={{
            padding: '16px',
            background: '#FAFAFA',
            border: '1px solid #E4E4E7',
            borderRadius: '8px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 500, color: '#3F4146', marginBottom: '4px' }}>Compact Card</div>
            <div style={{ fontSize: '14px', color: '#71717A' }}>Smaller padding variant.</div>
          </div>
        </div>

        <h3 className="subsection-title">Badge</h3>
        <div className="card" style={{ display: 'flex', gap: 'var(--spacing-2)', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{
            height: '24px',
            padding: '0 10px',
            background: '#FFF0D3',
            color: '#FF6900',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
          }}>Brand</span>
          <span style={{
            height: '24px',
            padding: '0 10px',
            background: '#B9F8CF',
            color: '#008236',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
          }}>Success</span>
          <span style={{
            height: '24px',
            padding: '0 10px',
            background: '#FFE8E9',
            color: '#E7000B',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
          }}>Error</span>
          <span style={{
            height: '24px',
            padding: '0 10px',
            background: '#DBEAFE',
            color: '#509EDA',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
          }}>Info</span>
          <span style={{
            height: '24px',
            padding: '0 10px',
            background: '#F4F4F5',
            color: '#71717A',
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
