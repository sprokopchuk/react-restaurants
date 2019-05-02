FROM ruby:2.4-slim as backend

WORKDIR /app

COPY Gemfile Gemfile.lock ./

RUN apt-get update && apt-get install -y build-essential patch zlib1g-dev liblzma-dev libpq-dev

RUN gem install bundler && bundle install

CMD rm -f tmp/pids/server.pid && bundle exec rails s -p 3000 -b "0.0.0.0"

FROM  node:8.16-slim as front-end

WORKDIR /app

COPY /client/ ./

RUN yarn install

CMD yarn start

