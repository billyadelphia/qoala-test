# Qoala codding test
## How to run the code
required node.js version >= 10 (recommended version >= 12)
first, go to the project root folder
```
cd folder_project
```

### Case 1, ENCRYPTION
run case1_encryption.js with --input parameter, for example :
```
node case1_encryption.js --input XII
```

### Case 2, url

run case2_url.js with --input parameter, use double quote ("") for the url parameter. 
For example :

```
node case2_url.js --input "https://grabkios.qoala.app?agentId=908123123&phoneNumber=085716028129"
```

For case number 2, I am using base64 decoding and decoding to decode url values. 
I couldn't find any decoder and encoder algorithm that shorten long to short text.
AFAIK, any shorterner links site ussualy use database to store both shortened url and real url, not decode or encode the url directly. If you guys use encoder and decoder for shorterning the link, I really want to learn what encoder and decoder did you use.

### Case 3, palindrome
run case3_palindrome.js without any parameter. If you want to change the input, please change it directly on the code.

```
node case3_palindrome.js
```

### Case 4. Binary Tree
run node case4_binary.js with --input parameter, for example :

```
node case4_binary.js --input 10
```

### Case 5, sorting array

run case5_sort.js without any parameter. If you want to change the input, please change it directly on the code.
The explanations are in the code. I am using bubble sort algorithm.
```
node case5_sort.js
```

