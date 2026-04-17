FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

ARG PUBLIC_SITE_NAME="Human Approved AI"
ARG PUBLIC_SITE_URL="https://humanapprovedai.com"
ARG PUBLIC_CONTACT_EMAIL="daniel@wescalestartups.com"
ARG PUBLIC_FORM_ENDPOINT="https://formsubmit.co/daniel@wescalestartups.com"

ENV PUBLIC_SITE_NAME=$PUBLIC_SITE_NAME
ENV PUBLIC_SITE_URL=$PUBLIC_SITE_URL
ENV PUBLIC_CONTACT_EMAIL=$PUBLIC_CONTACT_EMAIL
ENV PUBLIC_FORM_ENDPOINT=$PUBLIC_FORM_ENDPOINT

RUN npm run build

FROM nginx:1.27-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
