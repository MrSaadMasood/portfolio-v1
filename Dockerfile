FROM node:20-alpine3.19 AS builder

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package* .
COPY . .

RUN npm ci && npm run build

FROM builder AS prod

WORKDIR /user/app

ENV NODE_ENV production

RUN adduser -SDH nextuser && mkdir .next

COPY --from=builder /app/.next/standalone ./ 
COPY --from=builder /app/.next/static ./.next/static 
COPY --from=builder /app/public ./public 

USER nextuser

CMD HOSTNAME='0.0.0.0' node server.js

