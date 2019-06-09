---
id: doc_tutorial_ssbasics
title: Основы SovaScript
sidebar_label: Основы SovaScript
---
## Что такое SovaScript?
SovaScript - реализация [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) на основе [Duktape](https://duktape.org/) с некоторыми расширениями. Если это уже звучит страшно и непонятно, то не волнуйтесь, JavaScript это тоже реализация ECMAScript, так синтаксис у JavaScript и SovaScript одинаковый, различаются лишь доступные функции и типы. Правда Duktape полностью реализует лишь ECMAScript E5/E5.1 с некоторыми фичами из более высоких версий. Например, в Duktape, и, соответсвенно SovaScript, не реализованы классы (class), поэтому придётся по-старинике использовать функции-конструкторы и прототипы.  

На данный момент SovaScript доступен лишь в составе Sova Lite.

## Жизненный цикл скрипта
Скрипты на SovaScript имеют жизненный цикл, внутри которого должен работать ваш код. Для этого следует переопределить необходимые вам функции жизненнего цикла, такие как стандартные [onStart](doc_sscore_global#onstart) и [onStop](doc_sscore_global#onstop), а также [Vk.onMessage](doc_ssvkapi_vkapi#onmessage) из расширения [VkApi](doc_ssvkapi_global). Вне методов жизненного цикла, рекомендуется лишь переопредлять методы жизненного цикла, а также определять ваши функции и объекты. Саму работу скрипта следует запускать из методов жизненного цикла.

## Расширения SovaScript
Дополнительный функционал над Duktape SovaScript находится в расширениях (модулях).  

На данный момент SovaScript имеет следующие расширения:
* [Lifecycle](doc_sscore_global) - Основная работа с жизненным циклом скрипта
* [Handler](doc_sshandler_global) - Задержка/повтор выполнения функций. Упрощённый аналог setTimeout/setInterval из JavaScript
* [Log](doc_sslog_global) - Вывод текста в Logcat Android
* [Dialogs](doc_ssdialogs_global) - Диалоги для коммуникации скрипта с пользователем. Упрощённый аналог alert, confirm, prompt из JavaScript
* [VkApi](doc_ssvkapi_global) - Вызов методов VK API, также предоставляет функции жизненного цикла для получения новых сообщений в VK в скрипте