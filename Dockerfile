FROM node:16-buster-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Install dependencies only when needed
FROM base AS deps
WORKDIR /opt/home-page
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

FROM base AS builder
ENV NODE_ENV=production
WORKDIR /opt/home-page
COPY . .
COPY --from=deps /opt/home-page/node_modules ./node_modules
RUN pnpm build

# Production image, copy all the files and run next
FROM node:lts-alpine AS runner

WORKDIR /opt/home-page
ENV NODE_ENV=production
COPY --from=builder /opt/home-page/next.config.js ./
COPY --from=builder /opt/home-page/public ./public
COPY --from=builder /opt/home-page/.next ./.next
COPY --from=builder /opt/home-page/node_modules ./node_modules

EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]