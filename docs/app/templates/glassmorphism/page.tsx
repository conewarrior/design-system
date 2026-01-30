'use client';

import { useState } from 'react';

const brandColors = [
  { name: 'Brand', value: '#A855F7', token: '--color-brand', textColor: '#FFFFFF' },
  { name: 'Brand Alt', value: '#3B82F6', token: '--color-brand-alt', textColor: '#FFFFFF' },
  { name: 'Brand Soft', value: 'rgba(168, 85, 247, 0.3)', token: '--color-brand-soft', textColor: '#A855F7' },
];

const combinationSets = [
  {
    name: 'Set 1 - Cosmic',
    description: '퍼플 + 블루 우주 느낌',
    colors: [
      { value: '#A855F7', name: 'Purple' },
      { value: '#8B5CF6', name: 'Violet' },
      { value: '#3B82F6', name: 'Blue' },
      { value: '#1E1B4B', name: 'Deep Space' },
      { value: '#E9D5FF', name: 'Light Purple' },
    ],
  },
  {
    name: 'Set 2 - Sunset',
    description: '오렌지 + 핑크 선셋 글로우',
    colors: [
      { value: '#F97316', name: 'Orange' },
      { value: '#FB7185', name: 'Rose' },
      { value: '#EC4899', name: 'Pink' },
      { value: '#7C2D12', name: 'Deep Orange' },
      { value: '#FED7AA', name: 'Light Orange' },
    ],
  },
  {
    name: 'Set 3 - Frost',
    description: '서리 낀 유리처럼 투명하고 시원한',
    colors: [
      { value: '#FFFFFF', name: 'White' },
      { value: '#F0F9FF', name: 'Ice' },
      { value: '#E0E7FF', name: 'Pale Indigo' },
      { value: '#C4B5FD', name: 'Soft Violet' },
      { value: '#A5B4FC', name: 'Light Indigo' },
    ],
  },
];

const contentColors = [
  { name: 'Primary', value: '#FFFFFF', token: '--content-primary', sample: 'Aa' },
  { name: 'Secondary', value: 'rgba(255,255,255,0.9)', token: '--content-secondary', sample: 'Aa' },
  { name: 'Subtle', value: 'rgba(255,255,255,0.7)', token: '--content-subtle', sample: 'Aa' },
  { name: 'Muted', value: 'rgba(255,255,255,0.5)', token: '--content-muted', sample: 'Aa' },
];

const borderColors = [
  { name: 'Subtle', value: 'rgba(255,255,255,0.1)', token: '--border-subtle' },
  { name: 'Medium', value: 'rgba(255,255,255,0.2)', token: '--border-medium' },
  { name: 'Strong', value: 'rgba(255,255,255,0.3)', token: '--border-strong' },
];

const statusColors = [
  { name: 'Error', value: '#F43F5E', soft: 'rgba(244,63,94,0.25)', token: '--color-error' },
  { name: 'Success', value: '#10B981', soft: 'rgba(16,185,129,0.25)', token: '--color-success' },
  { name: 'Info', value: '#3B82F6', soft: 'rgba(59,130,246,0.25)', token: '--color-info' },
  { name: 'Warning', value: '#F59E0B', soft: 'rgba(245,158,11,0.25)', token: '--color-warning' },
];

const shadowTokens = [
  { name: 'glass-sm', value: '0 4px 16px rgba(0, 0, 0, 0.1)' },
  { name: 'glass-md', value: '0 8px 32px rgba(0, 0, 0, 0.15)' },
  { name: 'glass-lg', value: '0 16px 48px rgba(0, 0, 0, 0.2)' },
  { name: 'glow-purple', value: '0 0 30px rgba(168, 85, 247, 0.5)' },
  { name: 'glow-blue', value: '0 0 30px rgba(59, 130, 246, 0.5)' },
];

const typographyTokens = [
  { name: 'Display', size: '36px', weight: '700', lineHeight: '1.2' },
  { name: 'Heading', size: '24px', weight: '600', lineHeight: '1.3' },
  { name: 'Label L', size: '16px', weight: '600', lineHeight: '1.5' },
  { name: 'Label M', size: '14px', weight: '500', lineHeight: '1.5' },
  { name: 'Body L', size: '16px', weight: '400', lineHeight: '1.6' },
  { name: 'Body R', size: '14px', weight: '400', lineHeight: '1.5' },
];

const prompt = `Glassmorphism 디자인 가이드:

[디자인 철학]
- 프로스트 유리 효과가 깊이감을 만든다. 레이어가 겹치는 느낌
- 생생한 그라디언트 배경 위에 반투명 요소가 떠 있는 구조
- 밝은 테두리로 유리 경계를 강조하고 입체감 부여
- 글로우 효과로 네온 느낌 연출 (퍼플, 블루, 핑크)

[UX 원칙]
- 콘텐츠 영역은 유리로 분리해서 가독성 확보
- blur 정도는 12-24px 사이, 적절한 깊이감
- 흰색/컬러 하이라이트 테두리로 입체감 부여
- 호버 시 glow 효과 강화로 피드백

[컬러]
- Primary: #A855F7 (Purple), Alt: #3B82F6 (Blue)
- Background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)
- Accent: #EC4899 (Pink), #06B6D4 (Cyan)
- Glass: rgba(255,255,255,0.1~0.25), blur: 16px
- Text: #FFFFFF (제목), rgba(255,255,255,0.7~0.9) (본문)
- Border: rgba(255,255,255,0.2~0.4)
- Glow: box-shadow 0 0 30px rgba(color, 0.5)

[사이즈]
- Spacing: 요소 내부 16px, 요소 간격 16px, 섹션 간격 40px
- Radius: 버튼/인풋 12px, 카드 20px, 배지 8px
- Blur: 12px(약), 16px(중), 24px(강)
- 버튼: 44px (기본), 36px (소형)
- 인풋: 44px
- Font: Pretendard, 14px 본문, 36px 디스플레이

[적용 가이드]
이 가이드는 기본 지침이며, 앱의 특성과 성격에 따라 유연하게 조정하세요:
- 웹 vs 모바일: 모바일은 터치 타겟 48px 이상, 대중적인 디바이스의 기준을 따른다.
- 정보 밀도: 대시보드는 적당히 촘촘하게, 랜딩/마케팅은 여유롭게
- 브랜드 톤: 친근함은 컬러를 조금 더 사용하고, 신뢰감은 화이트 위주 + 포인트 컬러는 적게
→ 컬러와 디자인 철학은 유지하되, 사이즈/간격/컬러 사용량은 상황에 맞게 조정`;

export default function GlassmorphismPage() {
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
    const filename = type === 'md' ? 'glassmorphism.md' : 'glassmorphism-tokens.css';
    const link = document.createElement('a');
    link.href = `/downloads/${filename}`;
    link.download = filename;
    link.click();
  };

  return (
    <div>
      <h1 className="page-title">Glassmorphism</h1>
      <p className="page-description">
        프로스트 유리 효과와 그라디언트 배경의 모던한 디자인 시스템입니다. 깊이감 있는 레이어 구조가 특징입니다.
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
          borderRadius: '20px',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4c1d95 70%, #581c87 100%)',
          position: 'relative',
        }}>
          {/* Decorative Blur Circles */}
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute',
            top: '30%',
            right: '10%',
            width: '250px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, transparent 70%)',
            filter: 'blur(50px)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute',
            bottom: '20%',
            left: '30%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)',
            filter: 'blur(50px)',
            pointerEvents: 'none',
          }} />

          {/* Navigation */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '16px 24px',
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
            position: 'relative',
            zIndex: 1,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                background: 'linear-gradient(135deg, #A855F7 0%, #3B82F6 100%)',
                borderRadius: '10px',
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '14px',
              }}>G</div>
              <span style={{ fontWeight: 600, fontSize: '16px', color: '#FFFFFF' }}>Glassify</span>
            </div>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
              <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '13px', fontWeight: 500 }}>Features</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '13px', fontWeight: 500 }}>Pricing</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '13px', fontWeight: 500 }}>About</span>
              <div style={{
                height: '36px',
                padding: '0 18px',
                background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)',
                color: '#FFFFFF',
                borderRadius: '12px',
                fontSize: '13px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 0 25px rgba(168, 85, 247, 0.5)',
              }}>Get Started</div>
            </div>
          </div>

          {/* Hero Section */}
          <div style={{
            padding: '60px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            position: 'relative',
            zIndex: 1,
          }}>
            <div style={{ flex: 1 }}>
              <span style={{
                display: 'inline-block',
                padding: '6px 14px',
                background: 'rgba(168, 85, 247, 0.3)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                color: '#FFFFFF',
                borderRadius: '20px',
                fontSize: '11px',
                fontWeight: 600,
                marginBottom: '16px',
                border: '1px solid rgba(168, 85, 247, 0.5)',
                boxShadow: '0 0 15px rgba(168, 85, 247, 0.3)',
              }}>New Release</span>
              <div style={{
                fontSize: '38px',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.2,
                marginBottom: '14px',
              }}>
                Beautiful{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 50%, #3B82F6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.5))',
                }}>glass</span>{' '}
                interfaces
              </div>
              <p style={{
                fontSize: '15px',
                color: 'rgba(255, 255, 255, 0.75)',
                lineHeight: 1.6,
                marginBottom: '24px',
              }}>
                Create stunning translucent UI with depth, blur effects, and vibrant gradients.
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{
                  height: '46px',
                  padding: '0 26px',
                  background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)',
                  color: '#FFFFFF',
                  borderRadius: '14px',
                  fontSize: '14px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  boxShadow: '0 0 30px rgba(168, 85, 247, 0.5), 0 4px 20px rgba(0,0,0,0.2)',
                }}>Start Free</div>
                <div style={{
                  height: '46px',
                  padding: '0 26px',
                  background: 'rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '14px',
                  fontSize: '14px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                }}>Learn More</div>
              </div>
            </div>
            <div style={{
              flex: 1,
              height: '260px',
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
            }}>
              <div style={{
                width: '85%',
                height: '85%',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                padding: '18px',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15)',
              }}>
                <div style={{ display: 'flex', gap: '6px', marginBottom: '16px' }}>
                  <div style={{ width: '12px', height: '12px', background: 'linear-gradient(135deg, #EC4899, #F472B6)', borderRadius: '50%', boxShadow: '0 0 8px rgba(236, 72, 153, 0.5)' }} />
                  <div style={{ width: '12px', height: '12px', background: 'linear-gradient(135deg, #A855F7, #C084FC)', borderRadius: '50%', boxShadow: '0 0 8px rgba(168, 85, 247, 0.5)' }} />
                  <div style={{ width: '12px', height: '12px', background: 'linear-gradient(135deg, #3B82F6, #60A5FA)', borderRadius: '50%', boxShadow: '0 0 8px rgba(59, 130, 246, 0.5)' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ width: '65%', height: '12px', background: 'linear-gradient(90deg, rgba(168, 85, 247, 0.5) 0%, rgba(59, 130, 246, 0.3) 100%)', borderRadius: '6px' }} />
                  <div style={{ width: '85%', height: '10px', background: 'rgba(255, 255, 255, 0.15)', borderRadius: '5px' }} />
                  <div style={{ display: 'flex', gap: '10px', marginTop: '14px' }}>
                    <div style={{ width: '70px', height: '28px', background: 'linear-gradient(135deg, #A855F7, #EC4899)', borderRadius: '8px', boxShadow: '0 0 12px rgba(168, 85, 247, 0.4)' }} />
                    <div style={{ width: '70px', height: '28px', background: 'rgba(255, 255, 255, 0.15)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div style={{
            padding: '28px 24px',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '16px',
            position: 'relative',
            zIndex: 1,
          }}>
            {[
              { value: '50+', label: 'Components', color: '#A855F7' },
              { value: '100+', label: 'Tokens', color: '#3B82F6' },
              { value: '10K+', label: 'Downloads', color: '#EC4899' },
              { value: '99%', label: 'Satisfaction', color: '#06B6D4' },
            ].map((stat, idx) => (
              <div key={idx} style={{
                padding: '22px',
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                textAlign: 'center',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
              }}>
                <div style={{
                  fontSize: '26px',
                  fontWeight: 700,
                  background: `linear-gradient(135deg, ${stat.color} 0%, #FFFFFF 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: `drop-shadow(0 0 12px ${stat.color}60)`,
                }}>{stat.value}</div>
                <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.65)', marginTop: '4px' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div style={{ padding: '40px 24px', position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{ fontSize: '24px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
                Everything you need
              </div>
              <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.65)' }}>
                Build beautiful, translucent interfaces with stunning effects
              </p>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
            }}>
              {[
                { icon: 'GE', title: 'Glass Effects', desc: 'Frosted glass with blur', color: '#A855F7' },
                { icon: 'GR', title: 'Gradients', desc: 'Beautiful color flows', color: '#3B82F6' },
                { icon: 'TR', title: 'Transparency', desc: 'Layered depth', color: '#EC4899' },
              ].map((feature, idx) => (
                <div key={idx} style={{
                  padding: '28px',
                  background: 'rgba(255, 255, 255, 0.06)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  textAlign: 'center',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    margin: '0 auto 14px',
                    background: `linear-gradient(135deg, ${feature.color}30 0%, ${feature.color}10 100%)`,
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: '700',
                    color: feature.color,
                    border: `1px solid ${feature.color}40`,
                    boxShadow: `0 0 20px ${feature.color}30`,
                  }}>{feature.icon}</div>
                  <div style={{ fontSize: '15px', fontWeight: 600, color: '#FFFFFF', marginBottom: '6px' }}>{feature.title}</div>
                  <div style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.55)' }}>{feature.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div style={{
            padding: '44px 24px',
            background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(236, 72, 153, 0.25) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          }}>
            <div style={{ fontSize: '24px', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px' }}>
              Ready to get started?
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.65)', marginBottom: '24px' }}>
              Join thousands of designers creating stunning glass interfaces
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
              <div style={{
                height: '44px',
                padding: '0 28px',
                background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)',
                color: '#FFFFFF',
                borderRadius: '14px',
                fontSize: '14px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 0 30px rgba(168, 85, 247, 0.5), 0 4px 16px rgba(0,0,0,0.2)',
              }}>Get Started</div>
              <div style={{
                height: '44px',
                padding: '0 28px',
                background: 'rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                borderRadius: '14px',
                fontSize: '14px',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
              }}>Contact</div>
            </div>
          </div>

          {/* Footer */}
          <div style={{
            padding: '18px 24px',
            background: 'rgba(0, 0, 0, 0.2)',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            zIndex: 1,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '22px',
                height: '22px',
                background: 'linear-gradient(135deg, #A855F7 0%, #3B82F6 100%)',
                borderRadius: '7px',
                boxShadow: '0 0 12px rgba(168, 85, 247, 0.4)',
              }} />
              <span style={{ fontWeight: 600, fontSize: '13px', color: 'rgba(255, 255, 255, 0.9)' }}>Glassify Design</span>
            </div>
            <div style={{ color: 'rgba(255, 255, 255, 0.45)', fontSize: '11px' }}>
              © 2025 Glassmorphism
            </div>
          </div>
        </div>
      </section>

      {/* 콤비네이션 팔레트 섹션 */}
      <section>
        <h2 className="section-title">Combination Palette</h2>
        <p className="section-desc">Glassmorphism 스타일과 어울리는 추천 조합</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '60%' }}>
          {combinationSets.map((set) => (
            <div key={set.name}>
              <div style={{ marginBottom: '8px' }}>
                <span style={{ fontWeight: 600, fontSize: '14px', color: '#18181B' }}>{set.name}</span>
                <span style={{ marginLeft: '8px', fontSize: '13px', color: '#71717A' }}>{set.description}</span>
              </div>
              <div style={{ display: 'flex', height: '64px', borderRadius: '12px', overflow: 'hidden', background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)' }}>
                {set.colors.map((color, idx) => (
                  <button
                    key={`${set.name}-${idx}`}
                    onClick={() => copyToClipboard(color.value, `${set.name}-${idx}`)}
                    style={{
                      flex: 1,
                      height: '100%',
                      background: color.value,
                      border: 'none',
                      borderRight: idx < set.colors.length - 1 ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: ['#FFFFFF', '#F0F9FF', '#E0E7FF', '#C4B5FD', '#A5B4FC', '#E9D5FF', '#FED7AA', '#A5F3FC'].includes(color.value) ? '#6B7280' : '#FFFFFF',
                      fontSize: '10px',
                      fontWeight: 500,
                      textShadow: ['#FFFFFF', '#F0F9FF', '#E0E7FF', '#C4B5FD', '#A5B4FC', '#E9D5FF', '#FED7AA', '#A5F3FC'].includes(color.value) ? 'none' : '0 1px 2px rgba(0,0,0,0.3)',
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
                width: '100px',
                height: '80px',
                background: color.value.includes('rgba') ? `linear-gradient(135deg, #667eea 0%, #764ba2 100%)` : color.value,
                border: '1px solid rgba(255, 255, 255, 0.2)',
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
                position: 'relative',
                overflow: 'hidden',
                boxShadow: color.value === '#A855F7' ? '0 0 25px rgba(168, 85, 247, 0.5)' : 'none',
              }}
              title={color.name}
            >
              {copiedColor === color.token ? 'Copied!' : color.name}
            </button>
          ))}
        </div>

        <h3 className="subsection-title">Content (Text)</h3>
        <div style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '24px',
          padding: '20px',
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)',
          borderRadius: '12px'
        }}>
          {contentColors.map((color) => (
            <button
              key={color.token}
              onClick={() => copyToClipboard(color.value, color.token)}
              style={{
                width: '80px',
                height: '80px',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                gap: '8px',
              }}
              title={color.name}
            >
              <span style={{ color: color.value, fontSize: '20px', fontWeight: 600 }}>{color.sample}</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '10px' }}>
                {copiedColor === color.token ? 'Copied!' : color.name}
              </span>
            </button>
          ))}
        </div>

        <h3 className="subsection-title">Border</h3>
        <div style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '24px',
          padding: '20px',
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)',
          borderRadius: '12px'
        }}>
          {borderColors.map((color) => (
            <button
              key={color.token}
              onClick={() => copyToClipboard(color.value, color.token)}
              style={{
                width: '80px',
                height: '80px',
                background: 'transparent',
                border: `3px solid ${color.value}`,
                borderRadius: '12px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: '8px',
                color: '#FFFFFF',
                fontSize: '10px',
                fontWeight: 300,
              }}
              title={color.name}
            >
              {copiedColor === color.token ? 'Copied!' : color.name}
            </button>
          ))}
        </div>

        <h3 className="subsection-title">Status</h3>
        <div style={{
          display: 'flex',
          gap: '24px',
          marginBottom: '24px',
          padding: '20px',
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)',
          borderRadius: '12px',
        }}>
          {statusColors.map((color) => (
            <div key={color.token}>
              <div style={{ marginBottom: '8px', fontSize: '12px', fontWeight: 500, color: '#FFFFFF' }}>{color.name}</div>
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
                    boxShadow: `0 0 16px ${color.value}40`,
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
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: `1px solid ${color.value}40`,
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
                  title={color.soft}
                >
                  {copiedColor === `${color.token}-soft` ? 'Copied!' : 'Soft'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <h3 className="subsection-title">Shadow</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          padding: '20px',
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)',
          borderRadius: '12px',
          marginBottom: '24px',
        }}>
          {shadowTokens.map((token) => (
            <div key={token.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: token.value,
              }} />
              <code style={{ fontSize: '11px', color: 'rgba(255, 255, 255, 0.8)' }}>{token.name}</code>
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
                Glass ABC 123
              </span>
              <span className="spacing-value">{token.size} / {token.weight}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 컴포넌트 미리보기 섹션 */}
      <section>
        <h2 className="section-title">Components</h2>
        <p className="section-desc">Glassmorphism 스타일이 적용된 컴포넌트 예시</p>

        <h3 className="subsection-title">Button</h3>
        <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          alignItems: 'center',
          padding: '24px',
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)',
          borderRadius: '12px',
        }}>
          <button style={{
            height: '44px',
            padding: '10px 20px',
            background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 100%)',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 0 25px rgba(168, 85, 247, 0.5)',
          }}>Primary Button</button>
          <button style={{
            height: '44px',
            padding: '10px 20px',
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            color: '#FFFFFF',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '12px',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
          }}>Glass Button</button>
          <button style={{
            height: '36px',
            padding: '8px 16px',
            background: 'rgba(168, 85, 247, 0.3)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            color: '#FFFFFF',
            border: '1px solid rgba(168, 85, 247, 0.5)',
            borderRadius: '10px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
          }}>Accent Glass</button>
        </div>

        <h3 className="subsection-title">Input</h3>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          maxWidth: '320px',
          padding: '24px',
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)',
          borderRadius: '12px',
        }}>
          <input
            type="text"
            placeholder="Glass input"
            style={{
              height: '44px',
              padding: '8px 16px',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              fontSize: '14px',
              color: '#FFFFFF',
              outline: 'none',
            }}
          />
          <input
            type="text"
            placeholder="Focus state"
            style={{
              height: '44px',
              padding: '8px 16px',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '2px solid #A855F7',
              borderRadius: '12px',
              fontSize: '14px',
              color: '#FFFFFF',
              outline: 'none',
              boxShadow: '0 0 15px rgba(168, 85, 247, 0.4)',
            }}
          />
        </div>

        <h3 className="subsection-title">Card</h3>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '12px',
          padding: '24px',
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)',
          borderRadius: '12px',
        }}>
          <div style={{
            padding: '24px',
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
          }}>
            <div style={{ fontSize: '16px', fontWeight: 600, color: '#FFFFFF', marginBottom: '8px' }}>Glass Card</div>
            <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>Frosted glass effect with blur.</div>
          </div>
          <div style={{
            padding: '20px',
            background: 'rgba(168, 85, 247, 0.2)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(168, 85, 247, 0.3)',
            borderRadius: '16px',
          }}>
            <div style={{ fontSize: '14px', fontWeight: 500, color: '#FFFFFF', marginBottom: '4px' }}>Accent Glass</div>
            <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>Pink tinted variant.</div>
          </div>
        </div>

        <h3 className="subsection-title">Badge</h3>
        <div style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          alignItems: 'center',
          padding: '24px',
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)',
          borderRadius: '12px',
        }}>
          <span style={{
            height: '26px',
            padding: '0 12px',
            background: 'rgba(168, 85, 247, 0.3)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            color: '#FFFFFF',
            border: '1px solid rgba(168, 85, 247, 0.5)',
            borderRadius: '8px',
            fontSize: '12px',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
          }}>Primary</span>
          <span style={{
            height: '26px',
            padding: '0 12px',
            background: 'rgba(16, 185, 129, 0.3)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            color: '#FFFFFF',
            border: '1px solid rgba(16, 185, 129, 0.5)',
            borderRadius: '8px',
            fontSize: '12px',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
          }}>Success</span>
          <span style={{
            height: '26px',
            padding: '0 12px',
            background: 'rgba(244, 63, 94, 0.3)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            color: '#FFFFFF',
            border: '1px solid rgba(244, 63, 94, 0.5)',
            borderRadius: '8px',
            fontSize: '12px',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
          }}>Error</span>
          <span style={{
            height: '26px',
            padding: '0 12px',
            background: 'rgba(255, 255, 255, 0.15)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            color: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '8px',
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
