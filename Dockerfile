FROM ruby:2.4-slim as api

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

ENV BUNDLE_PATH=/bundle \
    BUNDLE_BIN=/bundle/bin \
    GEM_HOME=/bundle
ENV PATH $GEM_HOME/bin:$GEM_HOME/gems/bin:$PATH

RUN gem install bundler
RUN bundle check || bundle install

FROM  node:8.16-slim as app

WORKDIR /app

COPY /client/ ./

RUN yarn install

CMD yarn run server:start

