# Etapa de construcción
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Etapa de producción
FROM nginx:alpine
COPY --from=build /app/dist/front-productos /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 85
CMD ["nginx", "-g", "daemon off;"]