# syntax=docker/dockerfile:1

# dev: Vite dev server. Source and node_modules are mounted by docker compose.
FROM node:24-alpine AS dev
WORKDIR /app
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]

# build: install locked dependencies and produce dist/
FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# prod: nginx serving dist/ with SPA fallback
FROM nginx:1.29-alpine AS prod
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
