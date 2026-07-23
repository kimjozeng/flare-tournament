# FLARE Tournament Hub v3

FLARE 로고의 마젠타·블루 컬러와 폴리곤 형태를 반영한 GitHub Pages용 정적 사이트입니다.

## 표시되는 대회

- 2026 FLARE OPEN RIFT
- 2026 OW FLARE COMMUNITY : SUMMER

T1 BASE CAMP 및 ZOWIE 프로젝트는 메인 사이트에서 제거했습니다.

## GitHub에 덮어쓰기

1. 저장소에서 `Add file → Upload files`를 누릅니다.
2. 이 ZIP의 압축을 푼 뒤, 안의 파일과 폴더를 전부 업로드합니다.
3. 같은 이름의 파일이 있으면 GitHub가 변경 파일로 인식합니다.
4. `Commit changes`를 누릅니다.
5. 기존 `tournaments/t1-ascent`, `tournaments/zowie-pubg` 폴더가 남아 있어도 메인에서는 노출되지 않습니다.
6. 완전히 삭제하려면 각 폴더 안 `index.html`을 열고 휴지통 아이콘으로 삭제합니다.

## 구조

- `index.html`
- `assets/styles.css`
- `assets/app.js`
- `assets/flare-logo-square.png`
- `assets/flare-logo-horizontal.png`
- `tournaments/open-rift/index.html`
- `tournaments/ow-summer/index.html`

## 수정

- 전체 디자인: `assets/styles.css`
- 메인 대회 목록: `index.html`
- 오픈 리프트: `tournaments/open-rift/index.html`
- 오버워치 썸머: `tournaments/ow-summer/index.html`


## v3 변경사항
- OW SUMMER 확정 일정 반영
- 16강 싱글 → 8강 더블 엘리미네이션 브라켓 적용
- FT2 / FT3 / FT4 경기 방식 표시
- OWTICS, Discord, SOOP 공식 링크 연결
- 참가 계정 및 출생일 자격 반영
