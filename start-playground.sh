if ! command -v bun &> /dev/null; then
    echo "bun is missing from your system."
    echo "If you don't want to install bun, simply start an http server using"
    echo "this directory as the root."
    echo "If you want to use bun, visit https://bun.sh for installation instructions."
    exit 1
fi

bun install -g http-server
bunx http-server -c-1
