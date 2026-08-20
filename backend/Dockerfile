FROM python:3.13-slim 
# Use the official Python image as the base image
WORKDIR /app
# Set the working directory in the container
COPY requirements.txt . 
# Copy the requirements file to the container
RUN pip install --no-cache-dir -r requirements.txt 
# Install the dependencies
COPY . . 
# Copy the rest of the application code to the container
EXPOSE 8000 
# Expose the port that the application will run on
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"] 
# Command to run the application using Uvicorn

# docker build -t fastapi-app .
# docker run -d -p 8000:8000 --name my-fastapi fastapi-app