# spa-with-cloudfront-and-awssam
SPA with cloudfront and aws sam

# Make
$ aws s3 mb s3://spa-sam-asssets-1234567890
$ sam build
$ sam package --s3-bucket spa-sam-asssets-1234567890 --output-template-file out.yaml
$ sam deploy --template-file out.yaml --capabilities CAPABILITY_IAM --stack-name spa-sam

$ cd page
$ yarn install
$ yarn build
$ aws s3 sync build/ s3://<Replace S3pagesbucketName>/ --delete

cd ../
$ aws s3 sync assets/ s3://<Replace S3imagesbucketName>/ --delete

$ aws dynamodb put-item --table-name data --item '{ "Id": { "S": "1" }, "Image": { "S": "/images/noimage-256.png" }, "Name": { "S": "Name" }, "Detail": { "S": "Detail" }}'
$ aws dynamodb put-item --table-name data --item '{ "Id": { "S": "2" }, "Image": { "S": "/images/noimage-256.png" }, "Name": { "S": "Name" }, "Detail": { "S": "Detail" }}'
$ aws dynamodb put-item --table-name data --item '{ "Id": { "S": "3" }, "Image": { "S": "/images/noimage-256.png" }, "Name": { "S": "Name" }, "Detail": { "S": "Detail" }}'
$ aws dynamodb put-item --table-name data --item '{ "Id": { "S": "4" }, "Image": { "S": "/images/noimage-256.png" }, "Name": { "S": "Name" }, "Detail": { "S": "Detail" }}'
$ aws dynamodb put-item --table-name data --item '{ "Id": { "S": "5" }, "Image": { "S": "/images/noimage-256.png" }, "Name": { "S": "Name" }, "Detail": { "S": "Detail" }}'

UPDATE SAM
$ sam build
$ sam package --s3-bucket spa-sam-asssets-1234567890 --output-template-file out.yaml
$ sam deploy --template-file out.yaml --capabilities CAPABILITY_IAM --stack-name spa-sam

UPDATE page
$ cd page
$ yarn install
$ yarn build
$ aws s3 sync build/ s3://<Replace S3pagesbucketName>/ --delete
