for x in "$@"; do                 #vs $# 
    if [[ ! -d "$x" ]]; then 
        mkdir "ex$x"
    fi
done


#-n "$x" && 
#vs $# 