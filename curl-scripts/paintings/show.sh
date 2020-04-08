#!/bin/bash

curl "http://localhost:4741/paintings" \
  --include \
  --request GET \
  --header "Content-Type: application/json" \
  --data '{
    "painting": {
      "title": "'"${TITLE}"'",
      "artist": "'"${ARTIST}"'",
      "date": "'"${DATE}"'"
    }
  }'

echo
