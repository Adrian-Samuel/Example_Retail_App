# Powershell script for windows machines
docker build -t example_register_app .
docker run -p 3000:3000 -it example_register_app
