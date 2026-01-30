'use client';

import { useState } from 'react';

const brandColors = [
  { name: 'Brand', value: '#007AFF', token: '--color-brand', textColor: '#FFFFFF' },
  { name: 'Brand Hover', value: '#0066CC', token: '--color-brand-hover', textColor: '#FFFFFF' },
  { name: 'Brand Soft', value: '#E5F2FF', token: '--color-brand-soft', textColor: '#007AFF' },
];

const combinationSets = [
  {
    name: 'Set 1 - Professional',
    description: '블루 + 슬레이트 (비즈니스 기본)',
    colors: [
      { value: '#007AFF', name: 'Blue' },
      { value: '#0F172A', name: 'Slate 900' },
      { value: '#F8FAFC', name: 'Slate 50' },
      { value: '#64748B', name: 'Slate 500' },
      { value: '#E5F2FF', name: 'Blue 100' },
    ],
  },
  {
    name: 'Set 2 - Navy',
    description: '블루 + 네이비 (깊이감 있는 신뢰)',
    colors: [
      { value: '#007AFF', name: 'Blue' },
      { value: '#1E3A5F', name: 'Navy' },
      { value: '#0F172A', name: 'Dark Navy' },
      { value: '#CBD5E1', name: 'Slate 300' },
      { value: '#F1F5F9', name: 'Slate 100' },
    ],
  },
  {
    name: 'Set 3 - Teal Accent',
    description: '블루 + 틸 (테크/혁신 느낌)',
    colors: [
      { value: '#007AFF', name: 'Blue' },
      { value: '#0D9488', name: 'Teal' },
      { value: '#0F172A', name: 'Dark' },
      { value: '#CCFBF1', name: 'Teal 100' },
      { value: '#F0FDFA', name: 'Teal 50' },
    ],
  },
];

const contentColors = [
  { name: 'Highlight', value: '#0F172A', token: '--content-highlight' },
  { name: 'Primary', value: '#1E293B', token: '--content-primary' },
  { name: 'Subtle', value: '#64748B', token: '--content-subtle' },
  { name: 'Muted', value: '#94A3B8', token: '--content-muted' },
];

const borderColors = [
  { name: 'Subtle', value: '#E2E8F0', token: '--border-subtle' },
  { name: 'Strong', value: '#CBD5E1', token: '--border-strong' },
  { name: 'Brand', value: '#007AFF', token: '--border-brand' },
];

const statusColors = [
  { name: 'Error', value: '#DC2626', soft: '#FEE2E2', token: '--color-error' },
  { name: 'Success', value: '#16A34A', soft: '#DCFCE7', token: '--color-success' },
  { name: 'Info', value: '#007AFF', soft: '#E5F2FF', token: '--color-info' },
  { name: 'Warning', value: '#D97706', soft: '#FEF3C7', token: '--color-warning' },
];

const shadowTokens = [
  { name: 'sm', value: '0 1px 2px rgba(15, 23, 42, 0.06)' },
  { name: 'md', value: '0 4px 6px rgba(15, 23, 42, 0.08)' },
  { name: 'lg', value: '0 8px 16px rgba(15, 23, 42, 0.1)' },
];

const typographyTokens = [
  { name: 'Display', size: '32px', weight: '700', lineHeight: '40px' },
  { name: 'Heading', size: '24px', weight: '600', lineHeight: '32px' },
  { name: 'Label L', size: '16px', weight: '500', lineHeight: '24px' },
  { name: 'Label M', size: '14px', weight: '500', lineHeight: '20px' },
  { name: 'Body L', size: '16px', weight: '400', lineHeight: '24px' },
  { name: 'Body R', size: '14px', weight: '400', lineHeight: '20px' },
];

const prompt = `Corporate Pro 디자인 가이드:

[디자인 철학]
- 블루는 신뢰, 안정, 전문성을 전달한다. 비즈니스의 핵심 가치
- 정돈된 그리드와 정렬이 세심함을 보여준다. 믿을 수 있는 인상
- 일관된 간격이 질서와 신뢰감을 만든다. 정리정돈된 느낌
- 전문적인 타이포그래피와 명확한 위계. 격식 있으면서도 읽기 쉽게

[UX 원칙]
- 사용자가 필요한 정보를 빠르게 찾을 수 있도록 구조화
- 비즈니스 맥락에 맞는 전문적인 톤 유지
- 데이터와 숫자는 명확하고 읽기 쉽게 표현
- 신뢰를 주는 일관된 경험 제공

[컬러]
- Primary: #007AFF (CTA, 링크, 강조)
- Background: #FFFFFF, Secondary BG: #F8FAFC
- Text: #0F172A (제목), #1E293B (본문), #64748B (보조)
- Border: #E2E8F0, Focus: #007AFF

[사이즈]
- Spacing: 요소 내부 12px, 요소 간격 16px, 섹션 간격 32px
- Radius: 버튼/인풋 6px, 카드 8px, 배지 4px
- 버튼: 36px (기본), 44px (큰 CTA)
- 인풋: 44px
- Font: Pretendard, 14px 본문, 24px 타이틀

[적용 가이드]
이 가이드는 기본 지침이며, 앱의 특성과 성격에 따라 유연하게 조정하세요:
- 웹 vs 모바일: 모바일은 터치 타겟 48px 이상, 대중적인 디바이스의 기준을 따른다.
- 정보 밀도: 대시보드는 적당히 촘촘하게, 랜딩/마케팅은 여유롭게
- 브랜드 톤: 친근함은 컬러를 조금 더 사용하고, 신뢰감은 화이트 위주 + 포인트 컬러는 적게
→ 컬러와 디자인 철학은 유지하되, 사이즈/간격/컬러 사용량은 상황에 맞게 조정`;

export default function CorporateProPage() {
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
    const filename = type === 'md' ? 'corporate-pro.md' : 'corporate-pro-tokens.css';
    const link = document.createElement('a');
    link.href = `/downloads/${filename}`;
    link.download = filename;
    link.click();
  };

  return (
    <div>
      <h1 className="page-title">Corporate Pro</h1>
      <p className="page-description">
        신뢰감 있는 블루 컬러와 정돈된 레이아웃의 전문적인 기업용 디자인 시스템입니다. 엔터프라이즈 대시보드, B2B 서비스에 적합합니다.
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

      {/* 랜딩페이지 샘플 */}
      <section>
        <h2 className="section-title">Landing Page Sample</h2>
        <div style={{
          borderRadius: '12px',
          border: '1px solid #E4E4E7',
          overflow: 'hidden',
          background: '#FFFFFF',
        }}>
          {/* Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 24px',
            borderBottom: '1px solid #E2E8F0',
            background: '#FFFFFF',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <span style={{ fontWeight: 700, fontSize: '16px', color: '#0F172A' }}>
                Enterprise<span style={{ color: '#007AFF' }}>Hub</span>
              </span>
              <div style={{ display: 'flex', gap: '16px' }}>
                {['Products', 'Solutions', 'Pricing', 'Resources'].map((item) => (
                  <span key={item} style={{ color: '#64748B', fontSize: '13px', fontWeight: 500 }}>{item}</span>
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <span style={{ color: '#64748B', fontSize: '13px', fontWeight: 500 }}>Login</span>
              <div style={{
                height: '32px',
                padding: '0 14px',
                background: '#007AFF',
                color: '#FFFFFF',
                borderRadius: '6px',
                fontSize: '13px',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
              }}>Get Started</div>
            </div>
          </div>

          {/* Hero Section */}
          <div style={{
            padding: '48px 24px',
            background: '#F8FAFC',
            textAlign: 'center',
          }}>
            <span style={{
              display: 'inline-block',
              padding: '4px 12px',
              background: '#E5F2FF',
              color: '#007AFF',
              borderRadius: '12px',
              fontSize: '11px',
              fontWeight: 500,
              marginBottom: '16px',
            }}>Trusted by Fortune 500</span>
            <div style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#0F172A',
              lineHeight: 1.2,
              marginBottom: '12px',
            }}>
              Enterprise-grade solutions<br />for modern businesses
            </div>
            <p style={{
              fontSize: '14px',
              color: '#64748B',
              lineHeight: 1.5,
              marginBottom: '24px',
              maxWidth: '480px',
              margin: '0 auto 24px',
            }}>
              Streamline operations, boost productivity, and scale with confidence.
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <div style={{
                height: '40px',
                padding: '0 20px',
                background: '#007AFF',
                color: '#FFFFFF',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
              }}>Request Demo</div>
              <div style={{
                height: '40px',
                padding: '0 20px',
                background: '#FFFFFF',
                color: '#007AFF',
                border: '1px solid #007AFF',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
              }}>View Pricing</div>
            </div>
          </div>

          {/* Stats Section */}
          <div style={{
            padding: '24px',
            background: '#FFFFFF',
            borderTop: '1px solid #E2E8F0',
            borderBottom: '1px solid #E2E8F0',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            textAlign: 'center',
          }}>
            {[
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '10K+', label: 'Companies' },
              { value: '50M+', label: 'Users' },
              { value: '24/7', label: 'Support' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div style={{ fontSize: '24px', fontWeight: 700, color: '#0F172A' }}>{stat.value}</div>
                <div style={{ fontSize: '12px', color: '#64748B' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div style={{ padding: '32px 24px', background: '#F8FAFC' }}>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ fontSize: '20px', fontWeight: 600, color: '#0F172A', marginBottom: '4px' }}>
                Everything you need
              </div>
              <p style={{ fontSize: '13px', color: '#64748B' }}>
                Build scalable enterprise solutions
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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  ),
                  title: 'Security'
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10"/>
                      <line x1="12" y1="20" x2="12" y2="4"/>
                      <line x1="6" y1="20" x2="6" y2="14"/>
                    </svg>
                  ),
                  title: 'Analytics'
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                    </svg>
                  ),
                  title: 'Integrations'
                },
              ].map((feature, idx) => (
                <div key={idx} style={{
                  padding: '20px',
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '8px',
                  textAlign: 'center',
                  boxShadow: '0 1px 2px rgba(15, 23, 42, 0.06)',
                }}>
                  <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'center' }}>{feature.icon}</div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#0F172A' }}>{feature.title}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div style={{
            padding: '32px 24px',
            background: '#0F172A',
            textAlign: 'center',
          }}>
            <div style={{ fontSize: '20px', fontWeight: 600, color: '#FFFFFF', marginBottom: '8px' }}>
              Ready to get started?
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)', marginBottom: '16px' }}>
              Start your free 30-day trial today
            </p>
            <div style={{
              display: 'inline-flex',
              height: '36px',
              padding: '0 20px',
              background: '#007AFF',
              color: '#FFFFFF',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 600,
              alignItems: 'center',
            }}>Start Free Trial</div>
          </div>

          {/* Footer */}
          <div style={{
            padding: '16px 24px',
            borderTop: '1px solid #E2E8F0',
            background: '#F8FAFC',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            <span style={{ fontWeight: 600, fontSize: '12px', color: '#64748B' }}>EnterpriseHub</span>
            <span style={{ color: '#94A3B8', fontSize: '11px' }}>© 2025</span>
          </div>
        </div>
      </section>

      {/* 콤비네이션 팔레트 섹션 */}
      <section>
        <h2 className="section-title">Combination Palette</h2>
        <p className="section-desc">블루 브랜드 컬러와 어울리는 추천 조합</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '60%' }}>
          {combinationSets.map((set) => (
            <div key={set.name}>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontWeight: 600, fontSize: '14px', color: '#18181B' }}>{set.name}</span>
                <span style={{ marginLeft: '8px', fontSize: '13px', color: '#71717A' }}>{set.description}</span>
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
                      color: ['#0F172A', '#1E293B', '#007AFF', '#0066CC', '#1E3A5F', '#0D9488', '#64748B'].includes(color.value) ? '#FFFFFF' : '#1E293B',
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
              top: '8px',
              right: '8px',
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
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
          {brandColors.map((color) => (
            <button
              key={color.token}
              onClick={() => copyToClipboard(color.value, color.token)}
              style={{
                width: '80px',
                height: '80px',
                background: color.value,
                border: color.value === '#E5F2FF' ? '1px solid #E4E4E7' : 'none',
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
        <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
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
                color: ['#0F172A', '#1E293B'].includes(color.value) ? '#FFFFFF' : '#1E293B',
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
                border: ['#E2E8F0', '#CBD5E1'].includes(color.value) ? '1px solid #E4E4E7' : 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '8px',
                color: color.value === '#007AFF' ? '#FFFFFF' : '#1E293B',
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
        <div style={{ display: 'flex', gap: '24px', marginBottom: '24px' }}>
          {statusColors.map((color) => (
            <div key={color.token}>
              <div style={{ marginBottom: '8px', fontSize: '12px', fontWeight: 500, color: '#18181B' }}>{color.name}</div>
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
                    color: '#1E293B',
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
        <p className="section-desc">Corporate Pro 스타일이 적용된 컴포넌트 예시</p>

        <h3 className="subsection-title">Button</h3>
        <div className="card" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
          <button style={{
            height: '44px',
            padding: '10px 20px',
            background: '#007AFF',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
          }}>Primary Button</button>
          <button style={{
            height: '44px',
            padding: '10px 20px',
            background: '#FFFFFF',
            color: '#007AFF',
            border: '1px solid #007AFF',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
          }}>Secondary Button</button>
          <button style={{
            height: '36px',
            padding: '8px 16px',
            background: '#F1F5F9',
            color: '#64748B',
            border: 'none',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: 500,
            cursor: 'pointer',
          }}>Tertiary</button>
        </div>

        <h3 className="subsection-title">Input</h3>
        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '320px' }}>
          <input
            type="text"
            placeholder="Default input"
            style={{
              height: '44px',
              padding: '8px 14px',
              border: '1px solid #E2E8F0',
              borderRadius: '6px',
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
              border: '2px solid #007AFF',
              borderRadius: '6px',
              fontSize: '14px',
              outline: 'none',
            }}
          />
        </div>

        <h3 className="subsection-title">Card</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
          <div style={{
            padding: '24px',
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            borderRadius: '8px',
            boxShadow: '0 1px 2px rgba(15, 23, 42, 0.06)',
          }}>
            <div style={{ fontSize: '16px', fontWeight: 600, color: '#0F172A', marginBottom: '8px' }}>Card Title</div>
            <div style={{ fontSize: '14px', color: '#64748B' }}>Professional card for enterprise apps.</div>
          </div>
          <div style={{
            padding: '16px',
            background: '#F8FAFC',
            border: '1px solid #E2E8F0',
            borderRadius: '8px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 500, color: '#1E293B', marginBottom: '4px' }}>Compact Card</div>
            <div style={{ fontSize: '13px', color: '#64748B' }}>Smaller padding variant.</div>
          </div>
        </div>

        <h3 className="subsection-title">Badge</h3>
        <div className="card" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{
            height: '24px',
            padding: '0 10px',
            background: '#E5F2FF',
            color: '#007AFF',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 500,
            display: 'inline-flex',
            alignItems: 'center',
          }}>Info</span>
          <span style={{
            height: '24px',
            padding: '0 10px',
            background: '#DCFCE7',
            color: '#16A34A',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 500,
            display: 'inline-flex',
            alignItems: 'center',
          }}>Success</span>
          <span style={{
            height: '24px',
            padding: '0 10px',
            background: '#FEF3C7',
            color: '#D97706',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 500,
            display: 'inline-flex',
            alignItems: 'center',
          }}>Warning</span>
          <span style={{
            height: '24px',
            padding: '0 10px',
            background: '#FEE2E2',
            color: '#DC2626',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 500,
            display: 'inline-flex',
            alignItems: 'center',
          }}>Error</span>
        </div>
      </section>
    </div>
  );
}
