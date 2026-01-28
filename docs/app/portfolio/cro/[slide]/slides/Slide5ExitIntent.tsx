export function Slide5ExitIntent() {
  return (
    <div className="slide-inner slide-two-col">
      {/* Left - Problem & Solution */}
      <div className="slide-col">
        <div className="slide-section-header">
          <p className="slide-label">CRO Experiment · Qualitative Data</p>
          <h2 className="slide-section-title">정성 데이터 수집: Exit Intent 팝업</h2>
        </div>

        <div style={{ marginBottom: 'var(--spacing-3)', padding: 'var(--spacing-3)', background: '#fef2f2', borderRadius: 'var(--radius-md)', border: '1px solid #fecaca' }}>
          <h4 style={{ fontSize: '13px', fontWeight: 600, color: '#dc2626', margin: '0 0 8px 0' }}>문제</h4>
          <p style={{ fontSize: '12px', color: '#7f1d1d', margin: 0, lineHeight: 1.6 }}>
            정량 데이터만으로는 &quot;왜?&quot;를 알 수 없음<br />
            ✓ 어디서 이탈하는가 (77.2% Exit)<br />
            ✗ &quot;왜&quot; 이탈하는가? → 가격? 일정? 팀원 설득 필요?
          </p>
        </div>

        <div style={{ marginBottom: 'var(--spacing-3)' }}>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>해결: 이탈하려는 사람에게 직접 물어보기</h4>
          <div className="slide-code" style={{ fontSize: '11px' }}>
            <span className="comment">// Exit Intent 원리</span>{'\n'}
            <span className="comment">// 마우스가 브라우저 상단 밖으로 이동 시</span>{'\n'}
            <span className="comment">// (뒤로가기/닫기 의도)</span>{'\n'}
            document.<span className="function">addEventListener</span>(<span className="string">&apos;mouseout&apos;</span>, (e) {'=>'} {'{\n'}
            {'  '}<span className="keyword">if</span> (e.clientY {'<'} 0) <span className="function">showSurveyPopup</span>();{'\n'}
            {'}'});
          </div>
        </div>

        <div>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>Voiceform 설문 구조</h4>
          <div style={{ fontSize: '12px', background: 'var(--theme-primary-bg)', padding: 'var(--spacing-2)', borderRadius: 'var(--radius-md)', lineHeight: 1.8 }}>
            <strong>Q1.</strong> &quot;워크샵 신청이 꺼려지시는 이유가 있나요?&quot;<br />
            ○ 가격이 부담스러워요<br />
            ○ 일정이 안 맞아요<br />
            ○ 팀원들과 상의가 필요해요<br />
            ○ 기타<br /><br />
            <strong>Q2.</strong> &quot;5분만 더 이야기해주시면 커피 쿠폰 드려요&quot;<br />
            → 수락: AI 음성 인터뷰 / 거절: 바로 제출
          </div>
        </div>
      </div>

      {/* Right - Implementation & Result */}
      <div className="slide-col">
        <div className="slide-col-header">
          <h3 className="slide-col-title">구현 & 결과</h3>
        </div>

        <div style={{ marginBottom: 'var(--spacing-3)' }}>
          <h4 style={{ fontSize: '14px', fontWeight: 600, marginBottom: 'var(--spacing-2)' }}>Claude Code로 구현</h4>
          <div className="slide-code" style={{ fontSize: '12px' }}>
            <span className="comment"># 요청</span>{'\n'}
            &quot;Voiceform Exit Intent 팝업 구현해줘&quot;{'\n\n'}
            <span className="comment"># 결과</span>{'\n'}
            이탈 감지 → 설문 팝업 → localStorage로 중복 방지{'\n\n'}
            <span className="comment"># 추가 요청</span>{'\n'}
            &quot;프리로드 깜빡임 방지 개선해줘&quot;{'\n'}
            → iframe 미리 로드
          </div>
        </div>

        <div className="slide-comparison">
          <div className="comparison-box before">
            <p className="comparison-label">Before</p>
            <ul style={{ fontSize: '12px', margin: 0, paddingLeft: '16px', lineHeight: 1.8 }}>
              <li>이탈 피드백: 수집 불가</li>
              <li>구현 시간: 1-2주 (개발팀)</li>
            </ul>
          </div>

          <div className="comparison-box after">
            <p className="comparison-label">After</p>
            <ul style={{ fontSize: '12px', margin: 0, paddingLeft: '16px', lineHeight: 1.8 }}>
              <li>이탈 피드백: 자동 팝업</li>
              <li>구현 시간: 하루</li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: 'var(--spacing-3)', padding: 'var(--spacing-2)', background: 'var(--theme-primary-bg)', borderRadius: 'var(--radius-md)' }}>
          <p style={{ fontSize: '12px', color: 'var(--theme-primary)', margin: 0, fontWeight: 500 }}>
            핵심: 정량(어디서) + 정성(왜) 데이터 결합 → 근본 원인 파악
          </p>
        </div>
      </div>
    </div>
  );
}
