---
id: doc_tutorial_codeexample2
title: Пример кода с загрузкой фото в VK
sidebar_label: Пример кода с загрузкой фото в VK
---
```javascript
function randomInt() {
    return Math.floor(Math.random() * 2147483647.0);
};

function sendPhotoMessage(photoFileUri, peerId, callback) {
    Vk.call("photos.getMessagesUploadServer", {peer_id: peerId}, function(getServerResponse){
        if(!getServerResponse.success){
            callback(null);
            return;
        }

        Vk.upload(getServerResponse.body.upload_url, "photo", photoFileUri, {}, function(uploadResponse){
            if(!uploadResponse.success){
                callback(null);
                return;
            }

            Vk.call("photos.saveMessagesPhoto", {photo: uploadResponse.body.photo, server: uploadResponse.body.server, hash: uploadResponse.body.hash}, function(saveResponse){
                if(!saveResponse.success){
                    callback(null);
                    return;
                }

                photo = saveResponse.body[0];
                Vk.call("messages.send", {peer_id: peerId, attachment: "photo" + photo.owner_id + "_" + photo.id, random_id: randomInt()}, callback);
            });
        });
    });
}

onStart = function(a){
    pickFile("Выберите фото для отправки", function(fileUri){
        if(!fileUri){
            alert("Вы не выбрали файл");
            finish();
            return;
        }

        extension = Files.getExtension(fileUri);
        if(extension != "png" && extension != "jpg" && extension != "gif"){
            alert("Нужно выбрать png, jpg или gif");
            finish();
            return;
        }

        sendPhotoMessage(fileUri, Vk.myId(), function(response){
            if(!response){
                alert("Ошибка при отправке");
                finish();
                return;
            }
            alert("Фото отправлено");
            finish();
        });
    });
};
```