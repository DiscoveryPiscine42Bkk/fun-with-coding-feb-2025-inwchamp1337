if [ "$#" -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

for x in "$@"; do
    if [[ ! -d "$x" ]]; then 
        mkdir "ex$x"
    fi
done



#-n "$x" &&  3
#vs $# 