#!/usr/bin/env bash

# exit when any command fails
set -e

# trust dev root CA
openssl x509 -inform DER -in /https-root/doc-analyzer.cer -out /https-root/doc-analyzer.crt
cp /https-root/doc-analyzer.crt /usr/local/share/ca-certificates/
update-ca-certificates

# start the app
dotnet watch run