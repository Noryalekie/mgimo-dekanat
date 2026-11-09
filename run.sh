#!/usr/bin/env bash
# MGIMO Diplomat.Core — Local Launch Script

PORT=${1:-3000}
echo "=========================================================="
echo "🏛️  MGIMO Diplomat.Core — Цифровой деканат будущего"
echo "    Vertix Bento Grid UI • MGIMO AI Hackathon"
echo "=========================================================="
echo "🚀 Запуск локального HTTP-сервера на порту $PORT..."
echo "👉 Откройте в браузере: http://localhost:$PORT"
echo "Нажмите Ctrl+C для остановки сервера."
echo "=========================================================="

python3 -m http.server "$PORT"
