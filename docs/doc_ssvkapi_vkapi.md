---
id: doc_ssvkapi_vkapi
title: VkApi
sidebar_label: VkApi
---
### Функции
| -                                                                                             |
| :---------------------------------------------------------------------------------------------|
| **[call(method, args, callback)](#callmethod-args-callback)**                                 |
| **[myId()](#myid)**                                                                         |

### Свойства
| Имя                         | Тип                  |
| :-------------------------- | :------------------- |
| **[onMessage](#onmessage)** | function             | 

## Функции

### call(method, args, callback)
**Пример:**
```javascript
var args = {peer_id: Vk.myId(), message: "Привет из SovaScript!", random_id: randomInt()};
Vk.call('messages.send', args, function(response){
    log(response);
});
```
Вызывает метод VK API **method** с аргументами **args**, по получению ответа, возвращает его в **callback**. Берётся авторизация от текущего аккаунта
| Аргументы                                                          |                                                                                       |
| :------------------------------------------------------------------| :------------------------------------------------------------------------------------ |
| **String** method                                                  |Метод VK API, который нужно вызвать                                                    |
| **Object** args                                                    |Объект, содержащий поля ключ:значение аргументов, которые нужно передать в запрос      |
| **function([VkApiResponse](doc_ssvkapi_vkapiresponse))** args      |Функция, в которую будет доставлен результат запроса                                   |



### myId()
Возвращает ID текущего аккаунта VK

| Возвращает           |                                                                                                       |
| :--------------------| :---------------------------------------------------------------------------------------------------- |
| **int**                  |ID текущего аккаунта VK                                                                            |



## Свойства

### onMessage
**Тип: function([VkApiMessage](doc_ssvkapi_vkapimessage))**  

Функция, которая будет вызвана при получении нового сообщения от LongPoll VK. Обратите внимания, что сюда также попадают отправленные сообщения, а не только входящие.  
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
| **[VkApiMessage](doc_ssvkapi_vkapimessage)** message       | Новое сообщение отправленное/полученное сообщение       |