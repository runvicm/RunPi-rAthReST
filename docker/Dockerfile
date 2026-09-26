FROM php:8.5-fpm

RUN apt-get update && apt-get install -y \
    unzip \
    curl \
    zip

# Install required libraries for PHP extensions
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libsodium-dev \
    libzip-dev \
    libicu-dev

# Install PHP extensions
RUN docker-php-ext-install \
    pdo \
    pdo_mysql \
    mbstring \
    intl \
    sodium \
    zip \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer | php -- \
    --install-dir=/usr/local/bin \
    --filename=composer

# Ensure global Composer bin directory is in PATH
ENV PATH="$PATH:/root/.composer/vendor/bin"

RUN composer global require laravel/installer

WORKDIR /var/www/rathrest

# Install git and Node.js 24.x (LTS), includes npm
RUN apt-get update && apt-get install -y git && \
    curl -fsSL https://deb.nodesource.com/setup_24.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Install PNPM
RUN corepack enable && \
    corepack prepare pnpm@latest --activate

#Terminal Color    
RUN echo "export PS1='\[\e[1;32m\]\u@\h\[\e[0m\]:\[\e[1;34m\]\w\[\e[0m\]\$ '" >> /root/.bashrc