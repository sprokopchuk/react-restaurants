FROM ruby:2.4-slim as backend

WORKDIR /app

COPY Gemfile Gemfile.lock ./

RUN apt-get update && apt-get install -y build-essential patch zlib1g-dev liblzma-dev libpq-dev wget unzip libxi6 \
                                         libgconf-2-4 libnss3

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list \
    && apt-get update -y && apt-get install -y google-chrome-stable

ENV CHROMEDRIVER_VERSION=74.0.3729.6

RUN wget -q "http://chromedriver.storage.googleapis.com/$CHROMEDRIVER_VERSION/chromedriver_linux64.zip" \
    && unzip chromedriver_linux64.zip -d /usr/local/bin && rm chromedriver_linux64.zip

RUN gem install bundler && bundle install

CMD rm -f tmp/pids/server.pid && bundle exec rails s -p 3000 -b "0.0.0.0"

FROM  node:8.16-slim as front-end

WORKDIR /app

COPY /client/ ./

RUN yarn install

CMD yarn run dev:start

