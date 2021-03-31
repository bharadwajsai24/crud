FROM php:7.3-apache
WORKDIR /var/www/html/
COPY ./ ./
RUN docker-php-ext-install mysqli pdo_mysql \
    && apt-get update \
    && curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer


CMD ["apache2-foreground"]