# Authorization
Seems to be documented actually

# Notes / Highlights
## Creation
in yellow, frontpage
```
curl 'https://cloud.pocketbook.digital/api/v1.0/notes?fast_hash=a322134ccec26d4339d095e490bfb96b' -X POST -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0' -H 'Accept: application/json, text/plain, */*' -H 'Accept-Language: en-US,en;q=0.5' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json;charset=utf-8' -H 'Authorization: Bearer REDACTED' -H 'X-WEB-CLIENT: 1674760246501' -H 'Cache-Control: no-cache' -H 'Origin: https://cloud.pocketbook.digital' -H 'Connection: keep-alive' -H 'Referer: https://cloud.pocketbook.digital/reader_new/?a322134ccec26d4339d095e490bfb96b' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'Pragma: no-cache' --data-raw '{"type":{"value":"highlight","updated":"2023-01-26T19:33:38+03:00"},"color":{"value":"yellow","updated":"2023-01-26T19:33:38+03:00"},"mark":{"anchor":"#epubcfi(/6/4[from_conflict_to_community-epub]!/4[from_conflict_to_community-epub]/2[u7qZ8BeZlVOdKM8KRrUbszG]/18/2/1:2)","created":1674761618,"updated":"2023-01-26T19:33:38+03:00"},"quotation":{"begin":"#epubcfi(/6/4[from_conflict_to_community-epub]!/4[from_conflict_to_community-epub]/2[u7qZ8BeZlVOdKM8KRrUbszG]/18/2/1:2)","end":"#epubcfi(/6/4[from_conflict_to_community-epub]!/4[from_conflict_to_community-epub]/2[u7qZ8BeZlVOdKM8KRrUbszG]/18/2/1:22)","text":"is is Microcosm #607","updated":"2023-01-26T19:33:38+03:00"}}'
```
### Response
`{"uuid":"45cdb958-6059-48df-a76f-376046d03fe5","updated":"2023-01-26T19:33:38Z"}`
## Reading
```
curl 'https://cloud.pocketbook.digital/api/v1.0/notes/45cdb958-6059-48df-a76f-376046d03fe5?fast_hash=a322134ccec26d4339d095e490bfb96b' -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0' -H 'Accept: application/json, text/plain, */*' -H 'Accept-Language: en-US,en;q=0.5' -H 'Accept-Encoding: gzip, deflate, br' -H 'Authorization: Bearer REDACTED' -H 'X-WEB-CLIENT: 1674760246501' -H 'Cache-Control: no-cache' -H 'Connection: keep-alive' -H 'Referer: https://cloud.pocketbook.digital/reader_new/?a322134ccec26d4339d095e490bfb96b' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'Pragma: no-cache'
```
### Response
`{"type":{"value":"highlight","updated":"2023-01-26T19:33:38Z"},"color":{"value":"yellow","updated":"2023-01-26T19:33:38Z"},"mark":{"anchor":"#epubcfi(/6/4[from_conflict_to_community-epub]!/4[from_conflict_to_community-epub]/2[u7qZ8BeZlVOdKM8KRrUbszG]/18/2/1:2)","created":1674761618,"updated":"2023-01-26T19:33:38Z"},"quotation":{"begin":"#epubcfi(/6/4[from_conflict_to_community-epub]!/4[from_conflict_to_community-epub]/2[u7qZ8BeZlVOdKM8KRrUbszG]/18/2/1:2)","end":"#epubcfi(/6/4[from_conflict_to_community-epub]!/4[from_conflict_to_community-epub]/2[u7qZ8BeZlVOdKM8KRrUbszG]/18/2/1:22)","text":"is is Microcosm #607","updated":"2023-01-26T19:33:38Z"},"uuid":"45cdb958-6059-48df-a76f-376046d03fe5"}`

## Creation
In cyan, page 2
```
curl 'https://cloud.pocketbook.digital/api/v1.0/notes?fast_hash=a322134ccec26d4339d095e490bfb96b' -X POST -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0' -H 'Accept: application/json, text/plain, */*' -H 'Accept-Language: en-US,en;q=0.5' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json;charset=utf-8' -H 'Authorization: Bearer REDACTED' -H 'X-WEB-CLIENT: 1674760246501' -H 'Cache-Control: no-cache' -H 'Origin: https://cloud.pocketbook.digital' -H 'Connection: keep-alive' -H 'Referer: https://cloud.pocketbook.digital/reader_new/?a322134ccec26d4339d095e490bfb96b' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'Pragma: no-cache' --data-raw '{"type":{"value":"highlight","updated":"2023-01-26T19:38:33+03:00"},"color":{"value":"cian","updated":"2023-01-26T19:38:33+03:00"},"mark":{"anchor":"#epubcfi(/6/6[id1]!/4[from_conflict_to_community-epub]/4[uccXMJsePnAE7GhjoFg8Z89]/4/2/1:0)","created":1674761914,"updated":"2023-01-26T19:38:33+03:00"},"quotation":{"begin":"#epubcfi(/6/6[id1]!/4[from_conflict_to_community-epub]/4[uccXMJsePnAE7GhjoFg8Z89]/4/2/1:0)","end":"#epubcfi(/6/6[id1]!/4[from_conflict_to_community-epub]/4[uccXMJsePnAE7GhjoFg8Z89]/4/2/1:20)","text":"Microcosm Publishing","updated":"2023-01-26T19:38:33+03:00"}}'
```
### Response
`{"uuid":"4213c9e0-2f8d-46e0-8ae0-e2fdb45cd590","updated":"2023-01-26T19:38:33Z"}`
## Reading
```
curl 'https://cloud.pocketbook.digital/api/v1.0/notes/4213c9e0-2f8d-46e0-8ae0-e2fdb45cd590?fast_hash=a322134ccec26d4339d095e490bfb96b' -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0' -H 'Accept: application/json, text/plain, */*' -H 'Accept-Language: en-US,en;q=0.5' -H 'Accept-Encoding: gzip, deflate, br' -H 'Authorization: Bearer REDACTED' -H 'X-WEB-CLIENT: 1674760246501' -H 'Cache-Control: no-cache' -H 'Connection: keep-alive' -H 'Referer: https://cloud.pocketbook.digital/reader_new/?a322134ccec26d4339d095e490bfb96b' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'Pragma: no-cache'
```
### Response
`{"type":{"value":"highlight","updated":"2023-01-26T19:38:33Z"},"color":{"value":"cian","updated":"2023-01-26T19:38:33Z"},"mark":{"anchor":"#epubcfi(/6/6[id1]!/4[from_conflict_to_community-epub]/4[uccXMJsePnAE7GhjoFg8Z89]/4/2/1:0)","created":1674761914,"updated":"2023-01-26T19:38:33Z"},"quotation":{"begin":"#epubcfi(/6/6[id1]!/4[from_conflict_to_community-epub]/4[uccXMJsePnAE7GhjoFg8Z89]/4/2/1:0)","end":"#epubcfi(/6/6[id1]!/4[from_conflict_to_community-epub]/4[uccXMJsePnAE7GhjoFg8Z89]/4/2/1:20)","text":"Microcosm Publishing","updated":"2023-01-26T19:38:33Z"},"uuid":"4213c9e0-2f8d-46e0-8ae0-e2fdb45cd590"}`

## Writing a note
```
curl 'https://cloud.pocketbook.digital/api/v1.0/notes?fast_hash=a322134ccec26d4339d095e490bfb96b' -X POST -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0' -H 'Accept: application/json, text/plain, */*' -H 'Accept-Language: en-US,en;q=0.5' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json;charset=utf-8' -H 'Authorization: Bearer REDACTED' -H 'X-WEB-CLIENT: 1674760246501' -H 'Cache-Control: no-cache' -H 'Origin: https://cloud.pocketbook.digital' -H 'Connection: keep-alive' -H 'Referer: https://cloud.pocketbook.digital/reader_new/?a322134ccec26d4339d095e490bfb96b' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'Pragma: no-cache' --data-raw '{"color":{"value":"red","updated":"2023-01-26T20:26:03+03:00"},"type":{"value":"note","updated":"2023-01-26T20:26:03+03:00"},"note":{"text":"This is a test note!","updated":"2023-01-26T20:26:03+03:00"},"mark":{"anchor":"#epubcfi(/6/8[id2]!/4[from_conflict_to_community-epub]/4[uBkoRfi6keB2AXobgOHPmA4]/30/2/1:11)","created":1674764764,"updated":"2023-01-26T20:26:03+03:00"},"quotation":{"begin":"#epubcfi(/6/8[id2]!/4[from_conflict_to_community-epub]/4[uBkoRfi6keB2AXobgOHPmA4]/30/2/1:11)","end":"#epubcfi(/6/8[id2]!/4[from_conflict_to_community-epub]/4[uBkoRfi6keB2AXobgOHPmA4]/30/2/1:56)","text":"ven: Cognitive Practices: Mental Models and P","updated":"2023-01-26T20:26:03+03:00"}}'
```
### Response
`{"uuid":"218a7270-d3da-4eeb-ab10-019a80f46f8f","updated":"2023-01-26T20:26:03Z"}`

### Reading a note
```
curl 'https://cloud.pocketbook.digital/api/v1.0/notes/218a7270-d3da-4eeb-ab10-019a80f46f8f?fast_hash=a322134ccec26d4339d095e490bfb96b' -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0' -H 'Accept: application/json, text/plain, */*' -H 'Accept-Language: en-US,en;q=0.5' -H 'Accept-Encoding: gzip, deflate, br' -H 'Authorization: Bearer REDACTED' -H 'X-WEB-CLIENT: 1674760246501' -H 'Cache-Control: no-cache' -H 'Connection: keep-alive' -H 'Referer: https://cloud.pocketbook.digital/reader_new/?a322134ccec26d4339d095e490bfb96b' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'Pragma: no-cache'
```

### Response
```json
{  
 "color": {  
   "value": "red",  
   "updated": "2023-01-26T20:26:03Z"  
 },  
 "type": {  
   "value": "note",  
   "updated": "2023-01-26T20:26:03Z"  
 },  
 "note": {  
   "text": "This is a test note!",  
   "updated": "2023-01-26T20:26:03Z"  
 },  
 "mark": {  
   "anchor": "#epubcfi(/6/8[id2]!/4[from_conflict_to_community-epub]/4[uBkoRfi6keB2AXobgOHPmA4]/30/2/1:11)",  
   "created": 1674764764,  
   "updated": "2023-01-26T20:26:03Z"  
 },  
 "quotation": {  
   "begin": "#epubcfi(/6/8[id2]!/4[from_conflict_to_community-epub]/4[uBkoRfi6keB2AXobgOHPmA4]/30/2/1:11)",  
   "end": "#epubcfi(/6/8[id2]!/4[from_conflict_to_community-epub]/4[uBkoRfi6keB2AXobgOHPmA4]/30/2/1:56)",  
   "text": "ven: Cognitive Practices: Mental Models and P",  
   "updated": "2023-01-26T20:26:03Z"  
 },  
 "uuid": "218a7270-d3da-4eeb-ab10-019a80f46f8f"  
}
```


## Listing notes
```
curl 'https://cloud.pocketbook.digital/api/v1.0/notes?fast_hash=a322134ccec26d4339d095e490bfb96b' -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/  
109.0' -H 'Accept: application/json, text/plain, */*' -H 'Accept-Language: en-US,en;q=0.5' -H 'Accept-Encoding: gzip, deflate, br' -H 'Authorization: Bearer dTo3MzhjYTpmYTM1MDUxMGMyN2JmNjUyYTk1Zjg4YjQ4OGVmODkwZD  
A2OA' -H 'X-WEB-CLIENT: 1674760246501' -H 'Cache-Control: no-cache' -H 'Connection: keep-alive' -H 'Referer: https://cloud.pocketbook.digital/reader_new/?a322134ccec26d4339d095e490bfb96b' -H 'Sec-Fetch-Dest: emp  
ty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'Pragma: no-cache'
```
### Response
`[{"uuid":"4213c9e0-2f8d-46e0-8ae0-e2fdb45cd590","type":"highlight","updated":"2023-01-26T19:38:33Z"},{"uuid":"45cdb958-6059-48df-a76f-376046d03fe5","type":"highlight","updated":"2023-01-26T19:33:38Z"}]`

### Another example
```
curl 'https://cloud.pocketbook.digital/api/v1.0/notes?fast_hash=bcff1fd58edebfa374ff191a1e3749bf' -H 'Authorization: Bearer REDACTED'
```
^^works as well

# Reading position
```
curl 'https://cloud.pocketbook.digital/api/v1.0/books/read-position?fast_hash=a322134ccec26d4339d095e490bfb96b' -X POST -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0' -H 'Accept: application/json, text/plain, */*' -H 'Accept-Language: en-US,en;q=0.5' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json;charset=utf-8' -H 'Authorization: Bearer REDACTED' -H 'X-WEB-CLIENT: 1674760246501' -H 'Cache-Control: no-cache' -H 'Origin: https://cloud.pocketbook.digital' -H 'Connection: keep-alive' -H 'Referer: https://cloud.pocketbook.digital/reader_new/?a322134ccec26d4339d095e490bfb96b' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'Pragma: no-cache' --data-raw '{"offs":1,"pointer_pb":"#epubcfi(/6/6[id1]!/4[from_conflict_to_community-epub]/4[uccXMJsePnAE7GhjoFg8Z89]/2/2/1:0)","pointer":"#epubcfi(/6/6[id1]!/4[from_conflict_to_community-epub]/4[uccXMJsePnAE7GhjoFg8Z89]/2/2/1:0)"}'
```

```
curl 'https://cloud.pocketbook.digital/api/v1.0/books/read-position?fast_hash=a322134ccec26d4339d095e490bfb96b' -X POST -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0' -H 'Accept: application/json, text/plain, */*' -H 'Accept-Language: en-US,en;q=0.5' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/json;charset=utf-8' -H 'Authorization: Bearer REDACTED' -H 'X-WEB-CLIENT: 1674760246501' -H 'Cache-Control: no-cache' -H 'Origin: https://cloud.pocketbook.digital' -H 'Connection: keep-alive' -H 'Referer: https://cloud.pocketbook.digital/reader_new/?a322134ccec26d4339d095e490bfb96b' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'Pragma: no-cache' --data-raw '{"offs":1,"pointer_pb":"#epubcfi(/6/6[id1]!/4[from_conflict_to_community-epub]/4[uccXMJsePnAE7GhjoFg8Z89]/2/2/1:0)","pointer":"#epubcfi(/6/6[id1]!/4[from_conflict_to_community-epub]/4[uccXMJsePnAE7GhjoFg8Z89]/2/2/1:0)"}'
```

# Setup or so
## Fileops
```
curl 'https://cloud.pocketbook.digital/api/v1.0/fileops/info/?fast_hash=a322134ccec26d4339d095e490bfb96b&include_metadata=true' -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0' -H 'Accept: application/json, text/plain, */*' -H 'Accept-Language: en-US,en;q=0.5' -H 'Accept-Encoding: gzip, deflate, br' -H 'Authorization: Bearer REDACTED' -H 'X-WEB-CLIENT: 1674760246501' -H 'Cache-Control: no-cache' -H 'Connection: keep-alive' -H 'Referer: https://cloud.pocketbook.digital/reader_new/?a322134ccec26d4339d095e490bfb96b' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'Pragma: no-cache'
```
### Response
`{"id":47564749,"path":"/fromconflicttocommunity.epub","name":"fromconflicttocommunity.epub","is_folder":false,"mtime":"2023-01-26T19:46:41Z","has_file":true,"download_link":"https://cloud.pocketbook.digital/api/v1.0/files/fromconflicttocommunity.epub?fast_hash=a322134ccec26d4339d095e490bfb96b&access_token=REDACTED","resource_id":null,"created_at":"2022-12-18T11:26:46Z","mime_type":"application/epub+zip","bytes":1235531,"md5_hash":"07YuAiHdaMe6GYLMHmgAoQ==","fast_hash":"a322134ccec26d4339d095e490bfb96b","client_mtime":"2022-12-18T11:26:46Z","favorite":false,"metadata":{"title":"From Conflict to Community","authors":"Gwendolyn Olton","genres":null,"publisher":"Microcosm Publishing LLC","year":"2022","lang":"en-US","isbn":null,"series":null,"series_ord":null,"annotation":null,"book_id":["calibre:201","uuid:0b4dc1c5-f2b2-4f17-8bc1-71bfb210b755","urn:uuid:29d919dd-24f5-4384-be78-b447c9dc299b"],"cover":[{"path":"https://cloud.pocketbook.digital/api/v1.0/fileops/cover/fromconflicttocommunity.epub.cover_s.jpg?fast_hash=a322134ccec26d4339d095e490bfb96b&access_token=REDACTED","width":250,"height":400},{"path":"https://cloud.pocketbook.digital/api/v1.0/fileops/cover/fromconflicttocommunity.epub.cover_b.jpg?fast_hash=a322134ccec26d4339d095e490bfb96b&access_token=REDACTED","width":500,"height":800}]},"position":{"pointer":"#epubcfi(/6/6[id1]!/4[from_conflict_to_community-epub]/4[uccXMJsePnAE7GhjoFg8Z89]/2/2/1:0)","pointer_pb":"#epubcfi(/6/6[id1]!/4[from_conflict_to_community-epub]/4[uccXMJsePnAE7GhjoFg8Z89]/2/2/1:0)","percent":1,"updated":"2023-01-26T19:46:25Z"}}`

## User-Info
```
curl 'https://cloud.pocketbook.digital/api/v1.0/user' -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0' -H 'Accept: application/json, text/plain, */*' -H 'Accept-Language: en-US,en;q=0.5' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/x-www-form-urlencoded' -H 'Authorization: Bearer REDACTED' -H 'X-WEB-CLIENT: 1674760246501' -H 'Cache-Control: no-cache' -H 'Connection: keep-alive' -H 'Referer: https://cloud.pocketbook.digital/browser/en/user/' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'Pragma: no-cache'
```
### Response
`{"login":"lena@lena-brueder.de","vendor_login":"lena@lena-brueder.de","email":"lena@lena-brueder.de","first_name":"Lena","last_name":"Brüder","full_name":"Lena Brüder","register_date":"2019-08-05T17:02:02Z","role":"USER","recommendations":[],"user_id":473290,"provider_id":4,"provider_name":"KNV","partner_shop_id":61717,"partner_shop_name":"Janssen Bücher","language":null,"files_size_limit":5368709120,"files_size":427228490,"books_size":427228490,"audio_books_size":0,"internal_account":{"vendor_id":"pocketbook","email":"user473290.knv@pbsync.com","password":"VTrLXnGU0EXliknKXhJPpw==","adobe_uuid":"00478684-b7a3-11e9-bfca-8ecd8f5cd1a8","serial":"53B7-CB81-3CC2-8B77","is_main":true},"shop":{"id":"61717","name":"Janssen Bücher","icon":"http://www.janssen-buecher.de/wcsstore/24682/Attachment/Images/Logo/ShopLogo.png","home_url":"https://v91-prod.zeitfracht.digital/61717","reset_password_url":null,"login_url":null,"isbn_search_url":"http://janssen-buecher.buchkatalog.de/isbnScanner/61717/10002/-3/"}}`

## Last-Opened
```
curl 'https://cloud.pocketbook.digital/api/v1.0/books/last-opened' -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0' -H 'Accept: application/json, text/plain, */*' -H 'Accept-Language: en-US,en;q=0.5' -H 'Accept-Encoding: gzip, deflate, br' -H 'Authorization: Bearer REDACTED' -H 'X-WEB-CLIENT: 1674760246501' -H 'Cache-Control: no-cache' -H 'Connection: keep-alive' -H 'Referer: https://cloud.pocketbook.digital/browser/en/user/' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'Pragma: no-cache'
```
### Response
`{"id":"47564749","path":"/fromconflicttocommunity.epub","title":"From Conflict to Community","mime_type":"application/epub+zip","created_at":"2022-12-18T11:26:46Z","purchased":false,"resource_id":null,"bytes":1235531,"client_mtime":"2022-12-18T11:26:46Z","collections":null,"fast_hash":"a322134ccec26d4339d095e490bfb96b","favorite":false,"read_status":"reading","link":"https://cloud.pocketbook.digital/api/v1.0/files/fromconflicttocommunity.epub?fast_hash=a322134ccec26d4339d095e490bfb96b&access_token=REDACTED","hasLinks":true,"format":"epub","md5_hash":"07YuAiHdaMe6GYLMHmgAoQ==","mtime":"2023-01-26T19:46:41Z","name":"fromconflicttocommunity.epub","read_percent":1,"percent":"1","isDrm":false,"isLcp":false,"isAudioBook":false,"metadata":{"title":"From Conflict to Community","track_number":null,"authors":"Gwendolyn Olton","cover":[{"width":250,"height":400,"path":"https://cloud.pocketbook.digital/api/v1.0/fileops/cover/fromconflicttocommunity.epub.cover_s.jpg?fast_hash=a322134ccec26d4339d095e490bfb96b&access_token=REDACTED"},{"width":500,"height":800,"path":"https://cloud.pocketbook.digital/api/v1.0/fileops/cover/fromconflicttocommunity.epub.cover_b.jpg?fast_hash=a322134ccec26d4339d095e490bfb96b&access_token=REDACTED"}],"genres":null,"lang":"en-US","publisher":"Microcosm Publishing LLC","size":null,"duration":null,"updated":"2022-12-18T11:26:49Z","year":2022,"isbn":null,"series":null,"annotation":null,"book_id":["calibre:201","uuid:0b4dc1c5-f2b2-4f17-8bc1-71bfb210b755","urn:uuid:29d919dd-24f5-4384-be78-b447c9dc299b"],"fixed_layout":false,"series_ord":null},"position":{"pointer":"#epubcfi(/6/6[id1]!/4[from_conflict_to_community-epub]/4[uccXMJsePnAE7GhjoFg8Z89]/2/2/1:0)","pointer_pb":"#epubcfi(/6/6[id1]!/4[from_conflict_to_community-epub]/4[uccXMJsePnAE7GhjoFg8Z89]/2/2/1:0)","percent":1,"page":null,"pages_total":0,"updated":"2023-01-26T19:46:25Z","offs":0},"read_position":{"pointer":"#epubcfi(/6/6[id1]!/4[from_conflict_to_community-epub]/4[uccXMJsePnAE7GhjoFg8Z89]/2/2/1:0)","pointer_pb":"#epubcfi(/6/6[id1]!/4[from_conflict_to_community-epub]/4[uccXMJsePnAE7GhjoFg8Z89]/2/2/1:0)","percent":1,"page":null,"pages_total":0,"updated":"2023-01-26T19:46:25Z","offs":0},"action":"create","action_date":"2022-12-18T11:26:46Z"}`

## Books Listing
```
curl 'https://cloud.pocketbook.digital/api/v1.0/books?limit=64' -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0' -H 'Accept: application/json, text/plain, */*' -H 'Accept-Language: en-US,en;q=0.5' -H 'Accept-Encoding: gzip, deflate, br' -H 'Authorization: Bearer REDACTED' -H 'X-WEB-CLIENT: 1674760246501' -H 'Cache-Control: no-cache' -H 'Connection: keep-alive' -H 'Referer: https://cloud.pocketbook.digital/browser/en/user/' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'Pragma: no-cache'
```

```json
{  
  "total": 64,  
  "items": [  
    {  
      "id": "2753187",  
      "path": "/google-sre.epub",  
      "title": "Site Reliability Engineering: How Google Runs Production Systems",  
      "mime_type": "application/epub+zip",  
      "created_at": "2019-08-27T19:54:02Z",  
      "purchased": false,  
      "resource_id": null,  
      "bytes": 4920608,  
      "client_mtime": "2019-08-27T19:54:02Z",  
      "collections": "Software",  
      "fast_hash": "be63d4d4163a4994b4a1a1fa96508e4f",  
      "favorite": false,  
      "read_status": "reading",  
      "link": "https://cloud.pocketbook.digital/api/v1.0/files/google-sre.epub?fast_hash=be63d4d4163a4994b4a1a1fa96508e4f&access_token=REDACTED",  
      "hasLinks": true,  
      "format": "epub",  
      "md5_hash": null,  
      "mtime": "2022-06-16T15:50:10Z",  
      "name": "google-sre.epub",  
      "read_percent": 31,  
      "percent": "31",  
      "isDrm": false,  
      "isLcp": false,  
      "isAudioBook": false,  
      "metadata": {  
        "title": "Site Reliability Engineering: How Google Runs Production Systems",  
        "track_number": null,  
        "authors": "Betsy Beyer",  
        "cover": [  
          {  
            "width": 300,  
            "height": 400,  
            "path": "https://cloud.pocketbook.digital/api/v1.0/fileops/cover/google-sre.epub.cover_s.jpg?fast_hash=be63d4d4163a4994b4a1a1fa96508e4f&access_token=REDACTED"  
          },  
          {  
            "width": 600,  
            "height": 800,  
            "path": "https://cloud.pocketbook.digital/api/v1.0/fileops/cover/google-sre.epub.cover_b.jpg?fast_hash=be63d4d4163a4994b4a1a1fa96508e4f&access_token=REDACTED"  
          }  
        ],  
        "genres": null,  
        "lang": "en-US",  
        "publisher": null,  
        "size": null,  
        "duration": null,  
        "updated": "2022-06-16T15:50:10Z",  
        "year": 2016,  
        "isbn": null,  
        "series": null,  
        "annotation": null,  
        "book_id": null,  
        "fixed_layout": false,  
        "series_ord": null  
      },  
      "position": {  
        "pointer": "#epubcfi(/6/40!/4/2[chapter-12---effective-troubleshooting]/18[in-practice-8ksluy]/10[examine-MQsnhjuB]/6/3:47)",  
        "pointer_pb": "pbr:/external##epubcfi(/6/40!/4/2[chapter-12---effective-troubleshooting]/18[in-practice-8ksluy]/10[examine-MQsnhjuB]/6/3:47)",  
        "percent": 31,  
        "page": "162",  
        "pages_total": 0,  
        "updated": "2022-06-16T15:50:10Z",  
        "offs": 0  
      },  
      "read_position": {  
        "pointer": "#epubcfi(/6/40!/4/2[chapter-12---effective-troubleshooting]/18[in-practice-8ksluy]/10[examine-MQsnhjuB]/6/3:47)",  
        "pointer_pb": "pbr:/external##epubcfi(/6/40!/4/2[chapter-12---effective-troubleshooting]/18[in-practice-8ksluy]/10[examine-MQsnhjuB]/6/3:47)",  
        "percent": 31,  
        "page": "162",  
        "pages_total": 0,  
        "updated": "2022-06-16T15:50:10Z",  
        "offs": 0  
      },  
      "action": "create",  
      "action_date": "2019-08-27T19:54:02Z"  
    },  
    {  
      "id": "2753229",  
      "path": "/google-the-site-reliability-workbook.epub",  
      "title": "The Site Reliability Workbook: Practical Ways to Implement SRE",  
      "mime_type": "application/epub+zip",  
      "created_at": "2019-08-27T19:58:27Z",  
      "purchased": false,  
      "resource_id": null,  
      "bytes": 8258348,  
      "client_mtime": "2019-08-27T19:58:27Z",  
      "collections": "Software",  
      "fast_hash": "57d07344d92fde6a1c57556e57f3d9f2",  
      "favorite": false,  
      "read_status": "reading",  
      "link": "https://cloud.pocketbook.digital/api/v1.0/files/google-the-site-reliability-workbook%5B1%5D.epub?fast_hash=57d07344d92fde6a1c57556e57f3d9f2&access_token=REDACTED",  
      "hasLinks": true,  
      "format": "epub",  
      "md5_hash": null,  
      "mtime": "2022-06-16T15:50:10Z",  
      "name": "google-the-site-reliability-workbook[1].epub",  
      "read_percent": 4,  
      "percent": "4",  
      "isDrm": false,  
      "isLcp": false,  
      "isAudioBook": false,  
      "metadata": {  
        "title": "The Site Reliability Workbook: Practical Ways to Implement SRE",  
        "track_number": null,  
        "authors": "Betsy Beyer",  
        "cover": [  
          {  
            "width": 300,  
            "height": 400,  
            "path": "https://cloud.pocketbook.digital/api/v1.0/fileops/cover/google-the-site-reliability-workbook%5B1%5D.epub.cover_s.jpg?fast_hash=57d07344d92fde6a1c57556e57f3d9f2&access_token=REDACTED"  
          },  
          {  
            "width": 600,  
            "height": 800,  
            "path": "https://cloud.pocketbook.digital/api/v1.0/fileops/cover/google-the-site-reliability-workbook%5B1%5D.epub.cover_b.jpg?fast_hash=57d07344d92fde6a1c57556e57f3d9f2&access_token=REDACTED"  
          }  
        ],  
        "genres": null,  
        "lang": "en-US",  
        "publisher": null,  
        "size": null,  
        "duration": null,  
        "updated": "2022-06-16T15:50:10Z",  
        "year": 2018,  
        "isbn": null,  
        "series": null,  
        "annotation": null,  
        "book_id": null,  
        "fixed_layout": false,  
        "series_ord": null  
      },  
      "position": {  
        "pointer": "#epubcfi(/6/14!/4/2/2/1)",  
        "pointer_pb": "pbr:/external##epubcfi(/6/14!/4/2/2/1)",  
        "percent": 4,  
        "page": "21",  
        "pages_total": 0,  
        "updated": "2022-06-16T15:50:10Z",  
        "offs": 0  
      },  
      "read_position": {  
        "pointer": "#epubcfi(/6/14!/4/2/2/1)",  
        "pointer_pb": "pbr:/external##epubcfi(/6/14!/4/2/2/1)",  
        "percent": 4,  
        "page": "21",  
        "pages_total": 0,  
        "updated": "2022-06-16T15:50:10Z",  
        "offs": 0  
      },  
      "action": "create",  
      "action_date": "2019-08-27T19:58:27Z"  
    }
  ]  
}
```

# Login
## first
```
curl 'https://cloud.pocketbook.digital/api/v1.0/auth/login?username=lena@lena-brueder.de&client_id=qNAx1RDb&client_secret=K3YYSjCgDJNoWKdGVOyO1mrROp3MMZqqRNXNXTmh&language=en' -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0' -H 'Accept: application/json, text/plain, */*' -H 'Accept-Language: en-US,en;q=0.5' -H 'Accept-Encoding: gzip, deflate, br' -H 'DNT: 1' -H 'Connection: keep-alive' -H 'Referer: https://cloud.pocketbook.digital/browser/en' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'Pragma: no-cache' -H 'Cache-Control: no-cache'
```
### Response
`{"providers":[{"alias":"knv","name":"LITFASS Bücher & Medien","shop_id":"57209","icon":"http://www.litfass-buecher.de/wcsstore/27964/Attachment/Images/Logo/logo3.png","icon_eink":"http://www.litfass-buecher.de/wcsstore/27964/Attachment/Images/Logo/logo3.png","logged_by":"password"},{"alias":"knv","name":"Janssen Bücher","shop_id":"61717","icon":"http://www.janssen-buecher.de/wcsstore/24682/Attachment/Images/Logo/ShopLogo.png","icon_eink":"http://www.janssen-buecher.de/wcsstore/24682/Attachment/Images/Logo/ShopLogo.png","logged_by":"password"}]}`

## second
```
curl 'https://cloud.pocketbook.digital/api/v1.0/auth/login/knv' -X POST -H 'User-Agent: Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/109.0' -H 'Accept: application/json, text/plain, */*' -H 'Accept-Language: en-US,en;q=0.5' -H 'Accept-Encoding: gzip, deflate, br' -H 'Content-Type: application/x-www-form-urlencoded' -H 'Origin: https://cloud.pocketbook.digital' -H 'DNT: 1' -H 'Connection: keep-alive' -H 'Referer: https://cloud.pocketbook.digital/browser/en' -H 'Sec-Fetch-Dest: empty' -H 'Sec-Fetch-Mode: cors' -H 'Sec-Fetch-Site: same-origin' -H 'Pragma: no-cache' -H 'Cache-Control: no-cache' --data-raw 'shop_id=61717&username=lena%40lena-brueder.de&client_id=qNAx1RDb&client_secret=K3YYSjCgDJNoWKdGVOyO1mrROp3MMZqqRNXNXTmh&grant_type=password&password=66C7ati8b9EK8UcV&language=en'
```
### Response
`{"access_token":"dTo3MzhjYToyMjU1ZmJhNjk1MjNjNWRkYmM2ODQ4YTJhZDFiOGZjZGFjYw","token_type":"Bearer","expires_in":7200,"refresh_token":"dTo3MzhjYTo5NWFhMjQ4NWMwMTY3ZDEwOTk4NzE4N2ZhM2VhMTUxM2RmZA"}`

# Learnings
- The identifiers seem to be EPUB CFI, which is "EPUB canonical fragment identifier", which is used to identify something within an EPUB file. I guess I need the EPUB file to interpret this to which page something is.
- I get the text from the notes API, which makes it really easier to get the data exported, no need for the EPUB to do that, at least.
- The notes have a UUID, so I can list stuff via that UUID
- There is a `fast_hash`, which seems to be used to identify the context we're talking about. That `fast_hash` can be queried from the books listing endpoint.
- Login is documented over here: https://cloud.pocketbook.digital/browser/en/for-developers/how-to-connect-store-to-pb-cloud

# Next steps

- https://phibr0.medium.com/how-to-create-your-own-obsidian-plugin-53f2d5d44046
- Code in /home/lena/projects/open_source/obsidian/obsidian-pocketbook-cloud-highlight-importer/
- manifest is changed