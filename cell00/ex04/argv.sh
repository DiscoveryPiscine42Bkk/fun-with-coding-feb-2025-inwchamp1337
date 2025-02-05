if [ "$#" -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

valid_args=()

for arg in "$@"; do
    if [[ -z "$arg" || "$arg" =~ ^[[:space:]]+$ ]]; then
        echo "Error: Arguments cannot be empty or spaces only."
        exit 1
    fi
    valid_args+=("$arg")
done

# แสดงผลเฉพาะ 3 ค่าจาก valid_args
for i in {0..2}; do
    if [ $i -lt "${#valid_args[@]}" ]; then
        echo "${valid_args[$i]}"
    fi
done
