@echo off
start /b backend\api\venv\Scripts\activate
start /b web\front_launch
python backend\run.py
