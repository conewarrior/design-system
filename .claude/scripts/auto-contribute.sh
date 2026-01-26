#!/bin/bash
# auto-contribute.sh
# 컴포넌트 파일을 design-system 저장소에 자동 커밋
#
# 사용법: auto-contribute.sh <file_path>
# 예시: auto-contribute.sh components/Card/index.tsx

set -e

FILE_PATH="$1"
REPO="conewarrior/design-system"
BRANCH="main"
API_URL="https://api.github.com/repos/$REPO/contents/$FILE_PATH"

# 색상 정의
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 파일 경로 검증
if [[ -z "$FILE_PATH" ]]; then
    echo -e "${RED}❌ 파일 경로가 필요합니다${NC}"
    exit 1
fi

# components/ 폴더인지 확인
if [[ "$FILE_PATH" != *"components/"* ]]; then
    # components 폴더가 아니면 조용히 종료
    exit 0
fi

# GITHUB_TOKEN 확인
if [[ -z "$GITHUB_TOKEN" ]]; then
    echo -e "${YELLOW}⚠️  GITHUB_TOKEN이 설정되지 않아 자동 기여를 건너뜁니다${NC}"
    echo "설정 방법: export GITHUB_TOKEN=\"your_token\""
    exit 0
fi

# 파일 존재 확인
if [[ ! -f "$FILE_PATH" ]]; then
    echo -e "${RED}❌ 파일을 찾을 수 없습니다: $FILE_PATH${NC}"
    exit 1
fi

# 파일 내용을 base64로 인코딩
CONTENT=$(base64 < "$FILE_PATH")

# 기존 파일의 SHA 확인 (업데이트 시 필요)
EXISTING=$(curl -s -H "Authorization: token $GITHUB_TOKEN" "$API_URL" 2>/dev/null)
SHA=$(echo "$EXISTING" | grep -o '"sha": "[^"]*"' | head -1 | cut -d'"' -f4)

# 커밋 메시지 생성
HOSTNAME=$(hostname)
TIMESTAMP=$(date +"%Y-%m-%d %H:%M")
COMMIT_MSG="feat: Auto-contribute $FILE_PATH

- From: $HOSTNAME
- Time: $TIMESTAMP
- Auto-contributed via design-system hook"

# JSON 페이로드 생성
if [[ -n "$SHA" ]]; then
    # 파일 업데이트 (SHA 필요)
    PAYLOAD=$(cat <<EOF
{
    "message": "$COMMIT_MSG",
    "content": "$CONTENT",
    "branch": "$BRANCH",
    "sha": "$SHA"
}
EOF
)
else
    # 새 파일 생성
    PAYLOAD=$(cat <<EOF
{
    "message": "$COMMIT_MSG",
    "content": "$CONTENT",
    "branch": "$BRANCH"
}
EOF
)
fi

# GitHub API로 커밋
RESPONSE=$(curl -s -X PUT \
    -H "Authorization: token $GITHUB_TOKEN" \
    -H "Content-Type: application/json" \
    -H "Accept: application/vnd.github.v3+json" \
    "$API_URL" \
    -d "$PAYLOAD" 2>/dev/null)

# 결과 확인
if echo "$RESPONSE" | grep -q '"commit"'; then
    COMMIT_URL=$(echo "$RESPONSE" | grep -o '"html_url": "[^"]*"' | head -1 | cut -d'"' -f4)
    echo -e "${GREEN}✅ design-system에 기여됨: $FILE_PATH${NC}"
    if [[ -n "$COMMIT_URL" ]]; then
        echo -e "   커밋: $COMMIT_URL"
    fi
else
    ERROR_MSG=$(echo "$RESPONSE" | grep -o '"message": "[^"]*"' | head -1 | cut -d'"' -f4)
    echo -e "${RED}❌ 기여 실패: ${ERROR_MSG:-알 수 없는 오류}${NC}"
    exit 1
fi
