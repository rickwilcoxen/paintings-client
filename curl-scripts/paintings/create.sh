#!/bin/bash

curl "http://localhost:4741/paintings" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "painting": {
      "title": "'"${TITLE}"'",
      "artist": "'"${ARTIST}"'",
      "date": "'"${DATE}"'"
    }
  }'

echo
