#!/bin/bash
cd /home/kavia/workspace/code-generation/eventease-scheduler-49078-83012764/eventease_scheduler
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

