---
id: doc_tutorial_codeexample
title: Пример кода SovaScript
sidebar_label: Пример кода SovaScript
---
В этом примере, мы напишем небольшого бота, который будет отвечать введённую пользователем фразу на личные сообщения в VK.  

В нём мы используем следующие функции/свойства расширений SovaScript:
1. Переопределим глобальную функцию [onStart](doc_sscore_global#onstart) из модуля Lifecycle для того, чтобы попросить текст ответа у пользователя при старте скрипта.
2. Используем глобальную функцию [prompt](doc_ssdialogs_global#promptmessage-callback) из модуля Dialogs для показа пользователю окна для ввода текста.
3. Переопределим функцию [onMessage](doc_ssvkapi_vkapi#onmessage) глобальной переменной [Vk](doc_ssvkapi_global#vk) из модуля VkApi, чтобы получать сообщения VK.
4. Используем функцию [call](doc_ssvkapi_vkapi#callmethod-args-callback) глобальной переменной [Vk](doc_ssvkapi_global#vk) из модуля VkApi, чтобы вызвать метод VK API для отправки сообщения.

```javascript
/*Так как стандартая Math не предоставляет способа получить случайное целое число, придётся сделать его самим.
 *Оно понадобится нам в качестве аргумента random_id для метода VK API messages.send
 */
function randomInt() {
    return Math.floor(Math.random() * 2147483647.0);
};

//Сделаем переменную для кастомного текста ответа, инициализируем её null
var customResponseText = null;

//Сделаем метод для спрашивания у пользователя текста ответа
function askForResponseText(){
    //Используем prompt для показа пользователю окна ввода текста
    prompt("Введите текст для автоматического ответа", function(response){
        if(!response){
            //Если response == null, значит пользователь нажал отмена, в таком случае завершаем скрипт
            finish();
        }else{
             //Если response != null, записываем в нашу переменную для кастомного текста ответа то, что ввёл пользователь
             customResponseText = response;
        }
    });
};

//Переопределим метод жизненного цикла onStart, чтобы попросить у пользователя текст ответа при запуске скрипта
onStart = function(a){
    //В нём попросим пользователя ввести текст для ответа
    askForResponseText();
};

//Переопределим метод жизненного цикла Vk.onMessage для получения сообщений в VK
Vk.onMessage = function(message){
    if(!customResponseText){
        //Если пользователь ещё не ввёл текст для ответа, а мы получили сообщение, просто проигнорируем его
        return;
    }

    if(!message.isPm()){
        //Если это не входящее личное сообщение, тоже игнорируем его
        return;
    }


    /*Вызовем метод VK API messages.send с message.fromId (отправителем сообщения в качестве получателя (аргумент peer_id))
     *и нашим текстом для ответа (customResponseText) в качестве текста сообщения (аргумент message).
     *В необходимый параметр random_id передаём случайное число
     *Если вам не понятно, что это за параметры, посмотрите на документацию метода VK API messages.send - https://vk.com/dev/messages.send
     *В качестве колбэка передаём пустую функцию, так результат запроса нам не особо важен
     */
    var args = {peer_id: message.fromId, message: customResponseText, random_id: randomInt()};
    Vk.call('messages.send', args, function(response){});
};
```