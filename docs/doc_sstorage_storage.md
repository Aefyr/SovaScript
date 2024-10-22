---
id: doc_sstorage_storage
title: Storage
sidebar_label: Storage
---
Предоставляет скрипту возможность сохранять пары строк ключ:значение в постоянную память, то есть эти пары сохраняются при перезапуске скрипта. Пары привязываются к скрипту.

### Функции
| -                                                                                                                       |
| :-----------------------------------------------------------------------------------------------------------------------|
| **[setItem(key, value)](#setitemkey-value)**                                                                            |
| **[getItem(key)](#getitemkey)**                                                                                         |
| **[removeItem(key)](#removeitemkey)**                                                                                   |

## Функции

### setItem(key, value)
Сохраняет пару с ключом **key** и значением **value**

| Аргументы                                                          |                                                                                       |
| :------------------------------------------------------------------| :------------------------------------------------------------------------------------ |
| **String** key                                                     |Ключ                                                                                   |
| **String** value                                                   |Значение                                                                               |



### getItem(key)
Возвращает сохраненное значение для ключа **key** или **null** при отсутствии такового

| Аргументы                                                          |                                                                                       |
| :------------------------------------------------------------------| :------------------------------------------------------------------------------------ |
| **String** key                                                     |Ключ                                                                                   |

| Возвращает           |                                                                                                       |
| :--------------------| :---------------------------------------------------------------------------------------------------- |
| **String**           |Значение для ключа **key** или **null**, при отсутствии такового                                       |



### removeItem(key)
Удаляет пару с ключом **key**, если она существует

| Аргументы                                                          |                                                                                       |
| :------------------------------------------------------------------| :------------------------------------------------------------------------------------ |
| **String** key                                                     |Ключ                                                                                   |