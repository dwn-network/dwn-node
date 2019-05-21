#!/usr/bin/env bash 

USER="dwn"
# DWN_DB_DATABASE="dwn_mainnet"

green=$(tput setaf 2)
lila=$(tput setaf 4)

bg_red=$(tput setab 1)
bg_green=$(tput setab 2)
bg_yellow=$(tput setab 3)
bg_lila=$(tput setab 4)
bg_pink=$(tput setab 5)
bg_blue=$(tput setab 6)
bg_white=$(tput setab 7)
bg_black=$(tput setab 8)

bold=$(tput bold)
reset=$(tput sgr0)

# Indicators
heading ()
{
    echo "    ${lila}==>${reset}${bold} $1${reset}"
}

success ()
{
    echo "    ${green}==>${reset}${bold} $1${reset}"
}

wait_to_continue ()
{
    sleep 1
}

database_create ()
{
    heading "Creating Database..."

    wait_to_continue

    DWN_DB_DATABASE="dwn_mainnet"

    read -p "Enter the database name, or press ENTER for the default [dwn_mainnet]: " inputDatabase
    if [[ ! -z "$inputDatabase" ]]; then
        DWN_DB_DATABASE=$inputDatabase
    fi

    echo "The database name [{$DWN_DB_DATABASE}]"

    local userExists=$(sudo -u postgres psql -c "SELECT * FROM pg_user WHERE usename = '$USER'" | grep -c "1 row")

    if [[ $userExists == 1 ]]; then
        read -p "The database user ${USER} already exists, do you want to overwrite it? [y/N] : " choice

        if [[ "$choice" =~ ^(yes|y|Y) ]]; then
            sudo -u postgres psql -c "DROP USER $USER"
            sudo -u postgres psql -c "CREATE USER $USER WITH PASSWORD 'password' CREATEDB;"
        fi
    else
        sudo -u postgres psql -c "CREATE USER $USER WITH PASSWORD 'password' CREATEDB;" 
    fi

    local databaseExists=$(sudo -u postgres psql -l | grep "${DWN_DB_DATABASE}" | wc -l)

    if [[ $databaseExists == 1 ]]; then
        read -p "The database ${DWN_DB_DATABASE} already exists, do you want to overwrite it? [y/N] : " choice

        if [[ "$choice" =~ ^(yes|y|Y) ]]; then
            #sudo -u postgres psql -c "DROP DATABASE ${DWN_DB_DATABASE};"
            #sudo -u postgres psql -c "CREATE DATABASE ${DWN_DB_DATABASE} OWNER $USER;"
            #sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE ${DWN_DB_DATABASE} to $USER;"
            sudo -u postgres dropdb "${DWN_DB_DATABASE}"
            sudo -u postgres createdb "${DWN_DB_DATABASE}"
        fi
    else
        #createdb "${DWN_DB_DATABASE}"
        #sudo -u postgres psql -c "CREATE DATABASE ${DWN_DB_DATABASE} OWNER $USER;"
        #sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE ${DWN_DB_DATABASE} to $USER;"
        sudo -u postgres createdb "${DWN_DB_DATABASE}"
    fi

    wait_to_continue

    success "Created Database!"
}

database_create
