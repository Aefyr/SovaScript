---
id: doc_ssvkapi_global
title: Глобальные функции и свойства
sidebar_label: Глобальные функции и свойства
---
### Свойства
| Имя                       | Тип                            |
| :------------------------ | :----------------------------- |
| **[Vk](#vk)**             | [VkApi](doc_ssvkapi_vkapi)| 

## Свойства

### Vk
**Тип: [VkApi](doc_ssvkapi_vkapi)**  

Объект для доступа к функционалу модуля VkApi  
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
