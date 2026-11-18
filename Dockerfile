FROM node:24-bookworm-slim

WORKDIR /app
ENV HOST=0.0.0.0
ENV PORT=3000

COPY server.js ./

USER node
EXPOSE 3000
CMD ["node", "server.js"]
