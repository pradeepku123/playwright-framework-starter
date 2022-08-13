FROM mcr.microsoft.com/playwright:v1.25.0-focal

RUN mkdir -p /home/app

COPY . /home/app

WORKDIR /home/app

RUN npm install
