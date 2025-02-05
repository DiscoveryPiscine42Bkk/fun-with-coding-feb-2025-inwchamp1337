for x in "$@"; do
    if [[ ! -d "$x" ]]; then #-n a
        mkdir "ex$x"
    fi
done
#-n "$x" && 