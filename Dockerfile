FROM caddy:latest

# Copy your static files
COPY . /www/html
COPY ./Caddyfile /etc/caddy/Caddyfile