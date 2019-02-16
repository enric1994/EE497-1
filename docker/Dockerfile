FROM node:10

WORKDIR /osgjs

RUN git clone https://github.com/enric1994/osgjs.git /osgjs

RUN cd /osgjs && \
npm install -g grunt-cli && \
npm install grunt --save-dev && \
npm install && \
grunt build && \
grunt sync
