FROM python:3.9-windowsservercore
WORKDIR /app
COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt
COPY . .
EXPOSE 443
CMD ["python", "app.py"]