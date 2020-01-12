FROM node:10-alpine

USER root

WORKDIR /app
COPY . /app

# install install dependency
RUN yarn
# build app
RUN yarn build

RUN yarn global add serve

EXPOSE 4000
ENTRYPOINT [ "./entrypoint.sh" ]