FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/usmanser123/USMAN-MD /root/usmanser123
WORKDIR /root/usmanser123/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
