if ! command -v bun &> /dev/null; then
    if ! command -v npm &> /dev/null; then
        echo "bun and node are missing from your system."
        echo "If you don't want to install them, simply start an http server"
        echo "using this directory as the root."
        echo
        echo "If you want to use bun, visit https://bun.sh for"
        echo "installation instructions."
        exit 1
    else
        npm i -g http-server
        npx http-server -c-1
        exit 0
    fi
else
    bun install -g http-server
    bunx http-server -c-1
fi