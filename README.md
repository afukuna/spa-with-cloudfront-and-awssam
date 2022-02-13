# spa-with-cloudfront-and-awssam
SPA with cloudfront and aws sam

# Arichitecture
<img width="489" alt="architecture" src="https://user-images.githubusercontent.com/8767514/153780350-3b61607e-016a-4ea1-891f-c5fa2e84e1b1.png">

# Make
```bash
$ git clone https://github.com/afukuna/spa-with-cloudfront-and-awssam.git
$ cd spa-with-cloudfront-and-awssam
```
```bash
$ aws s3 mb s3://spa-sam-asssets-1234567890
$ sam build
$ sam package --s3-bucket spa-sam-asssets-1234567890 --output-template-file out.yaml
$ sam deploy --template-file out.yaml --capabilities CAPABILITY_IAM --stack-name spa-sam
```
```bash
$ aws s3 sync assets/ s3://<Replace S3imagesbucketName>/ --delete
```
```bash
$ cd page
$ yarn install
$ yarn build
$ aws s3 sync build/ s3://<Replace S3pagesbucketName>/ --delete
```
```bash
$ aws dynamodb put-item --table-name data --item '{ "Id": { "S": "1" }, "Image": { "S": "/images/noimage-256.png" }, "Name": { "S": "Name" }, "Detail": { "S": "Detail" }}'
$ aws dynamodb put-item --table-name data --item '{ "Id": { "S": "2" }, "Image": { "S": "/images/noimage-256.png" }, "Name": { "S": "Name" }, "Detail": { "S": "Detail" }}'
$ aws dynamodb put-item --table-name data --item '{ "Id": { "S": "3" }, "Image": { "S": "/images/noimage-256.png" }, "Name": { "S": "Name" }, "Detail": { "S": "Detail" }}'
$ aws dynamodb put-item --table-name data --item '{ "Id": { "S": "4" }, "Image": { "S": "/images/noimage-256.png" }, "Name": { "S": "Name" }, "Detail": { "S": "Detail" }}'
$ aws dynamodb put-item --table-name data --item '{ "Id": { "S": "5" }, "Image": { "S": "/images/noimage-256.png" }, "Name": { "S": "Name" }, "Detail": { "S": "Detail" }}'
```

# UPDATE SAM
```bash
$ sam build
$ sam package --s3-bucket spa-sam-asssets-1234567890 --output-template-file out.yaml
$ sam deploy --template-file out.yaml --capabilities CAPABILITY_IAM --stack-name spa-sam
```

# UPDATE page
```bash
$ cd page
$ yarn install
$ yarn build
$ aws s3 sync build/ s3://<Replace S3pagesbucketName>/ --delete
```