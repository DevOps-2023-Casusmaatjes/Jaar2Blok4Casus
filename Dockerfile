# Use the official Nginx base image
FROM nginx

# Install pip packages first. Run script later in the file!!!!

# Copy the HTML files to the Nginx document root directory
COPY . /usr/share/nginx/html

# Expose port 80 to allow incoming traffic
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]


#Create image with: docker build -t <Name> .
#Run image with: docker run -p 80:80 <Name>

