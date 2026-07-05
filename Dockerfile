# ── build stage: CRA(react-scripts) 정적 빌드 ──────────────────────────────
FROM node:22-alpine AS build
WORKDIR /app
# 의존성 레이어 캐시 (package*.json 만 먼저)
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
# CRA build → /app/build (정적 산출물)
RUN npm run build

# ── runtime: non-root nginx 정적 서빙 (포트 8080) ──────────────────────────
#   nginx-unprivileged = uid 101 로 실행, 8080 리슨 (우리 컨벤션: non-root 단일 포트)
FROM nginxinc/nginx-unprivileged:1.27-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
