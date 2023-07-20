FROM python:3.10-alpine
RUN mkdir -p /usr/src/app   
WORKDIR /usr/src/app   
COPY requirements.txt ./
RUN pip install --no-cache-dir -r ./requirements.txt
COPY . .
ENV FLASK_APP=app.py
ENV FLASK_ENV=development
ENV FLASK_DEBUG=0
ENV FLASK_RUN_HOST=0.0.0.0
EXPOSE 5000
CMD ["flask", "run"]