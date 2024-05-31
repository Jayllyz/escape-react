# Base server
FROM node:22-alpine as base

# hadolint ignore=DL3018
RUN apk add --no-cache gcompat && \
    corepack enable pnpm

USER node
WORKDIR /app

COPY --chown=node:node package.json pnpm-lock.yaml ./

ENV PORT $PORT
EXPOSE $PORT

HEALTHCHECK --interval=30s --timeout=1s \
    CMD wget -qO- http://0.0.0.0:${PORT} || exit 1

# Development
FROM base as dev
ENV NODE_ENV development
RUN pnpm fetch && \
    pnpm install
COPY --chown=node:node . .
CMD ["node", "--run", "dev"]


# Build
FROM base as build
RUN pnpm fetch && \
    pnpm install
COPY --chown=node:node . .
RUN pnpm run build && \
    pnpm prune --prod

# Production
FROM nginx:stable-alpine as prod

COPY --from=build  --chown=node:node /app/dist /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
