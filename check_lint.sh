#!/bin/bash

echo 'Checking lint client'
echo $check_lint_client
check_lint_client=$(cd client && eslint --no-inline-config --no-error-on-unmatched-pattern -c .eslintrc.json . --ext .js,.jsx)