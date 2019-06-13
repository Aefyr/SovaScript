---
id: doc_ssvkapi_vkapiresponse
title: VkApiResponse
sidebar_label: VkApiResponse
---
### Функции
| -                                                       |
| :-------------------------------------------------------|
| **[toString()](#tostring)**                             |

### Свойства
| Имя                       | Тип                  |
| :------------------------ | :------------------- |
| **[success](#success)**   | Boolean              | 
| **[body](#body)**         | Object               | 

## Функции

### toString()
Отдаёт представление этого объекта как JSON-строку
| Возвращает           |                                                                                                       |
| :--------------------| :---------------------------------------------------------------------------------------------------- |
| **String**           |JSON-строка с представлением этого объекта                                                             |



## Свойства

### success
**Тип: Boolean**  

**true**, если запрос прошёл успешно, иначе **false**


### body
**Тип: Object**  

JSON-объект ответа от VK API, **undefined**, если `success == false`  