
source $(pwd)/.env
cap run --host ${HOT_RELOAD_ADDR} --port ${HOT_RELOAD_PORT} --live-reload android
