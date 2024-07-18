#!/bin/bash
# Script to update the current branch with the latest changes from main

# Fetch the latest changes from the main branch
git fetch origin main

# Rebase the current branch with the latest changes from main
git rebase origin/main

# Check for rebase conflicts
if [ $? -ne 0 ]; then
    echo "Rebase conflicts detected. Resolve them and then run 'git rebase --continue'."
else
    echo "Branch successfully updated with the latest changes from main."
fi
