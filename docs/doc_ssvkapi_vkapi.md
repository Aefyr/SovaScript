---
id: doc_ssvkapi_vkapi
title: VkApi
sidebar_label: VkApi
---
### Функции
| -                                                                                                                       |
| :-----------------------------------------------------------------------------------------------------------------------|
| **[call(method, args, callback)](#callmethod-args-callback)**                                                           |
| **[myId()](#myid)**                                                                                                     |
| **[upload(uploadUrl, fileFieldName, fileUri, args, callback)](#uploaduploadurl-filefieldname-fileuri-args-callback)**   |

### Свойства
| Имя                                     | Тип                  |
| :-------------------------------------- | :------------------- |
| **[onMessage](#onmessage)**             | function             | 
| **[onMessageEdit](#onmessageedit)**     | function             | 
| **[onMessageDelete](#onmessagedelete)** | function             | 
| **[onTyping](#ontyping)**               | function             | 
| **[onStopTyping](#onstoptyping)**       | function             | 
| **[onReadIn](#onreadin)**               | function             | 
| **[onReadOut](#onreadout)**             | function             | 
| **[onUserOnline](#onuseronline)**       | function             | 
| **[onUserOffline](#onuseroffline)**     | function             | 
| **[onAdminAdded](#onadminadded)**       | function             | 
| **[onAdminRemoved](#onadminremoved)**   | function             | 



## Функции

### call(method, args, callback)
Вызывает метод VK API **method** с аргументами **args**, по получению ответа, возвращает его в **callback**. Берётся авторизация от текущего аккаунта.  
**Пример:**
```javascript
var args = {peer_id: Vk.myId(), message: "Привет из SovaScript!", random_id: randomInt()};
Vk.call('messages.send', args, function(response){
    log(response);
});
```
| Аргументы                                                          |                                                                                       |
| :------------------------------------------------------------------| :------------------------------------------------------------------------------------ |
| **String** method                                                  |Метод VK API, который нужно вызвать                                                    |
| **Object** args                                                    |Объект, содержащий поля ключ:значение аргументов, которые нужно передать в запрос      |
| **function([VkApiResponse](doc_ssvkapi_vkapiresponse))** args      |Функция, в которую будет доставлен результат запроса                                   |



### upload(uploadUrl, fileFieldName, fileUri, args, callback)
Загружает файл с uri **fileUri** на сервер **uploadUrl**. Сервер можно получить например из метода VK API [photos.getMessagesUploadServer](https://vk.com/dev/photos.getMessagesUploadServer). Подробнее про загрузку файлов в VK можно прочитать [здесь](https://vk.com/dev/upload_files).

| Аргументы                                                          |                                                                                                  |
| :------------------------------------------------------------------| :----------------------------------------------------------------------------------------------- |
| **String** uploadUrl                                               |Ссылка, по которой нужно загрузить файл                                                           |
| **String** fileFieldName                                           |Имя поля с файлом в multipart/form-data                                                           |
| **String** fileUri                                                 |Uri файла, полученный например из [pickFile](doc_ssdialogs_global#pickfilemessage-callback)       |
| **Object** args                                                    |Объект, содержащий поля ключ:значение дополнительных аргументов, которые нужно передать в запрос  |
| **function([VkApiResponse](doc_ssvkapi_vkapiresponse))** args      |Функция, в которую будет доставлен результат запроса                                              |



### myId()
Возвращает ID текущего аккаунта VK

| Возвращает           |                                                                                                       |
| :--------------------| :---------------------------------------------------------------------------------------------------- |
| **int**                  |ID текущего аккаунта VK                                                                            |



## Свойства

### onMessage
**Тип: function([VkApiMessage](doc_ssvkapi_vkapimessage) message)**  

Функция, которая будет вызвана при получении нового сообщения от LongPoll VK. Обратите внимание, что сюда также попадают отправленные сообщения, а не только входящие.  
**Пример:**
```javascript
Vk.onMessage = function(message) {
    if(!message.incoming || !message.isPm()){
        return;
    }

    var responseText = "idk, try sending me \"ping\"";
    if(message.text.toLowerCase() === "ping"){
        responseText = "Pong.";
    }

    Vk.call('messages.send', {peer_id: message.fromId, message: responseText, random_id: randomInt()}, function(response){
        log(response);
    });
}
```
| Аргументы                                                  |                                                         |
| :--------------------------------------------------------- | :------------------------------------------------------ |
| **[VkApiMessage](doc_ssvkapi_vkapimessage)** message       | Новое отправленное/полученное сообщение                 |



### onMessageEdit
**Тип: function([VkApiMessage](doc_ssvkapi_vkapimessage) message)**  

Функция, которая будет вызвана при редактировании сообщения.
| Аргументы                                                  |                                                         |
| :--------------------------------------------------------- | :------------------------------------------------------ |
| **[VkApiMessage](doc_ssvkapi_vkapimessage)** message       | Отредактированное сообщение                             |



### onMessageDelete
**Тип: function(int messageId)**  

Функция, которая будет вызвана при удалении сообщения.
| Аргументы                                                  |                                                         |
| :--------------------------------------------------------- | :------------------------------------------------------ |
| **int** messageId                                          | ID удалённого сообщения                                 |



### onTyping
**Тип: function([VkApiTyping](doc_ssvkapi_vkapityping) typing)**  

Функция, которая будет вызвана при наборе сообщения пользователем.
| Аргументы                                                  |                                                                                          |
| :--------------------------------------------------------- | :--------------------------------------------------------------------------------------- |
| **[VkApiTyping](doc_ssvkapi_vkapityping)** typing          | [VkApiTyping](doc_ssvkapi_vkapityping) с информацией о том, кто и где набирает сообщение |



### onStopTyping
**Тип: function([VkApiTyping](doc_ssvkapi_vkapityping) typing)**  

Функция, которая будет вызвана при остановке набора сообщения пользователем.
| Аргументы                                                  |                                                                                                   |
| :--------------------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| **[VkApiTyping](doc_ssvkapi_vkapityping)** typing          | [VkApiTyping](doc_ssvkapi_vkapityping) с информацией о том, кто и где перестал набирать сообщение |



### onReadIn
**Тип: function(int peerId, int messageId)**  

Функция, которая будет вызвана при прочтении **вами** сообщения с ID **messageId** в диалоге с ID **peerId**.
| Аргументы                                                  |                                                                                                   |
| :--------------------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| **int** peerId                                             | ID диалога, в котором было прочитано сообщение                                                    |
| **int** messageId                                          | ID прочитанного сообщения                                                                         |



### onReadOut
**Тип: function(int peerId, int messageId)**  

Функция, которая будет вызвана при прочтении **вашего** сообщения с ID **messageId** в диалоге с ID **peerId**.
| Аргументы                                                  |                                                                                                   |
| :--------------------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| **int** peerId                                             | ID диалога, в котором было прочитано сообщение                                                    |
| **int** messageId                                          | ID прочитанного сообщения                                                                         |



### onUserOnline
**Тип: function(int userId, int appId)**  

Функция, которая будет вызвана при появлении пользователя с ID **userId** в онлайн.
| Аргументы                                                  |                                                                                                   |
| :--------------------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| **int** userId                                             | ID пользователя, появившегося в онлайн                                                            |
| **int** appId                                              | ID приложения, которое использует пользователь                                                    |



### onUserOffline
**Тип: function(int userId)**  

Функция, которая будет вызвана при уходе пользователя с ID **userId** в оффлайн.
| Аргументы                                                  |                                                                                                   |
| :--------------------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| **int** userId                                             | ID пользователя, ушедшего в оффлайн                                                               |



### onAdminAdded
**Тип: function(int peerId, int userId)**  

Функция, которая будет вызвана при становлении пользователя с ID **userId** администратором в беседе с ID **peerId**.
| Аргументы                                                  |                                                                                                   |
| :--------------------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| **int** peerId                                             | ID пользователя, ставшего администратором                                                         |
| **int** userId                                             | ID беседы, в которой пользователь стал администратором                                            |



### onAdminRemoved
**Тип: function(int peerId, int userId)**  

Функция, которая будет вызвана при снятии пользователя с ID **userId** с должности администратора в беседе с ID **peerId**.
| Аргументы                                                  |                                                                                                   |
| :--------------------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| **int** peerId                                             | ID пользователя, переставшего быть администратором                                                |
| **int** userId                                             | ID беседы, в которой пользователь перестал быть администратором                                   |