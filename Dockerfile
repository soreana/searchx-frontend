from node:13-slim

COPY ./ /app
WORKDIR /app/
RUN apt update && apt install git -y && npm install
#CMD npm run start
CMD npm run start
