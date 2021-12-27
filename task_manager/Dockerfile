# syntax=docker/dockerfile:1
FROM ruby:latest
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
WORKDIR /task_manager
COPY . .
RUN bundle install

# Configure the main process to run when running the image
CMD ["rails", "server", "-b", "0.0.0.0"]
EXPOSE 3000
